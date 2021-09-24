import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, maxValue, minValue} from "../libs/store/features/counter";
import  "./Counter.css";

export default function Counter() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.counter.step)
  const count = useSelector((state) => state.counter.value);
  const minCount = useSelector((state) => state.counter.minimum);
  const maxCount = useSelector((state) => state.counter.maximum)


  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec=() => {
    dispatch(decrement());
  };

  const handleStep=({target}) => {
    dispatch(incrementByAmount(Number(target.value)));
  };

  const handleMax =({target}) => {
      dispatch(maxValue(Number(target.value)));
  };

  const handleMin =({target}) => {
    dispatch(minValue(Number(target.value)));
};
  



  return (
    <div>
      {count}
      <button className="btnIncrement" onClick={handleInc} disabled={(count + step) > maxCount}>+</button>
      <button className="btnDecrement" onClick={handleDec} disabled={(count - step) < minCount}>-</button> <br></br>
      Step<input className="currentStep" onChange={handleStep}></input> <br></br>
      Max<input onChange={handleMax} className="maxValue"></input> <br></br>
      Min<input onChange={handleMin} className="minValue"></input>
    </div>
  );
}
