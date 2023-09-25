interface CounterProps {
  counter: number;
}

const Counter: React.FC<CounterProps> = ({ counter = 0 }) => {
  return (
    <div className="w-full justify-center items-center flex flex-row mt-2">
      <div className="border border-gray-600 p-4 rounded-md">
        <span className="text-4xl">{counter}</span>
      </div>
    </div>
  );
};

export default Counter;
