import { useEffect } from "react";
import {
  FaMinusCircle,
  FaPlusCircle,
  FaRegCircle,
  FaRegistered,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Table from "./components/Table";
import {
  addCounter,
  decrementCounter,
  loadCounters,
  registerTimestamp,
  resetCounter,
} from "./redux/reducers/counter";

interface ISelector {
  counter: {
    count: number;
    counterList: {
      id: string;
      counter: number;
      timestamp: string;
    }[];
  };
}

function App() {
  const count = useSelector((state: ISelector) => state.counter.count);
  const countList = useSelector(
    (state: ISelector) => state.counter.counterList
  );
  const dispatch = useDispatch();
  console.log(countList);

  const actions = [
    {
      name: "Aumentar",
      action: () => dispatch(addCounter()),
      icon: <FaPlusCircle />,
    },
    {
      name: "Disminuir",
      action: () => dispatch(decrementCounter()),
      icon: <FaMinusCircle />,
    },
    {
      name: "Resetar",
      action: () => dispatch(resetCounter()),
      icon: <FaRegCircle />,
    },
    {
      name: "Registrar",
      action: () => dispatch(registerTimestamp()),
      icon: <FaRegistered />,
    },
  ];

  useEffect(() => {
    dispatch(loadCounters());
  }, [dispatch]);

  return (
    <main className="font-sans antialiased text-gray-600 min-h-full w-full items-center justify-center p-4 ">
      <div className="sm:flex-auto my-2">
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Contadores Registrados
        </h1>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none gap-2 flex flex-col justify-center md:flex-row">
        {actions.map((action, index) => (
          <button
            key={index}
            type="button"
            className="inline-flex items-center gap-1 justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={action.action}
          >
            {action.icon}
            {action.name}
          </button>
        ))}
      </div>
      <Counter counter={count} />
      <Table countList={countList} />
    </main>
  );
}

export default App;
