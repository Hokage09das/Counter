import { useState } from "react";
import "./App.css";
import ButtonDecrease from "./components/ButtonDecrease";
import ButtonIncrease from "./components/ButtonIncrease";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className='App'>
      <Counter count={count} />
      <ButtonIncrease onClick={increaseCount} />
      <ButtonDecrease
        count={count}
        onClick={decreaseCount}
      />
    </div>
  );
}

export default App;
