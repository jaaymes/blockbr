import { useDispatch } from "react-redux";
import { deleteCounter } from "../../redux/reducers/counter";

import { GrClose } from "react-icons/gr";

interface TableProps {
  countList: {
    id: string;
    counter: number;
    timestamp: string;
  }[];
}

const Table: React.FC<TableProps> = ({ countList }) => {
  const dispatch = useDispatch();
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center"></div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      ID
                    </th>
                    <th className="py-3.5 text-center text-sm font-semibold text-gray-900">
                      Contador
                    </th>
                    <th className="py-3.5 text-center text-sm font-semibold text-gray-900">
                      timeStamp
                    </th>
                    <th className="py-3.5 text-center text-sm font-semibold text-gray-900">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {countList?.length > 0 &&
                    countList.map((count, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {count.id}
                        </td>
                        <td className="whitespace-nowrap px-3 text-center py-4 text-sm text-gray-500">
                          {count.counter}
                        </td>
                        <td className="whitespace-nowrap px-3 text-center py-4 text-sm text-gray-500">
                          {count.timestamp}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                          <button
                            onClick={() => dispatch(deleteCounter(count.id))}
                          >
                            <GrClose />
                          </button>
                        </td>
                      </tr>
                    ))}
                  {countList?.length < 1 && (
                    <tr>
                      <td
                        colSpan={4}
                        className=" text-center items-center justify-center py-4  text-lg font-medium text-gray-900"
                      >
                        Sem registros
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
