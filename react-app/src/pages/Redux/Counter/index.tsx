import { useAppSelector, useAppDispatch } from "hooks";
import { increase, decrease } from "redux/counterSlice";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
    </div>
  );
};

export default Counter;
