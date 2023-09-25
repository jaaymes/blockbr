import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export interface IActionsType {
  count: number;
  counterList: Array<{ id: string; counter: number; timestamp: string }>;
}

const initialState = {
  count: 0,
  counterList: [],
} as IActionsType;

export const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state) => {
      state.count = state.count + 1;
    },
    decrementCounter: (state) => {
      if (state.count > 0) {
        state.count = state.count - 1;
      }
    },
    registerTimestamp: (state) => {
      const newItem = {
        id: uuidv4(),
        counter: state.count,
        timestamp: format(new Date(), "dd/MM/yyyy HH:mm"),
      };
      if (state.counterList.some((item) => item.counter === state.count)) {
        toast.error("Contador já registrado!");
        return;
      }
      localStorage.setItem(
        "counters",
        JSON.stringify([...state.counterList, newItem])
      );
      state.counterList.push(newItem);
    },
    resetCounter: (state) => {
      state.count = 0;
    },
    deleteCounter: (state, action) => {
      state.counterList = state.counterList.filter(
        (item) => item.id !== action.payload
      );
    },
    loadCounters: (state) => {
      const counters = localStorage.getItem("counters");
      if (counters) {
        state.counterList = JSON.parse(counters);
      }
    },
  },
});

export const {
  addCounter,
  deleteCounter,
  registerTimestamp,
  resetCounter,
  decrementCounter,
  loadCounters,
} = counterReducer.actions;
export default counterReducer.reducer;
