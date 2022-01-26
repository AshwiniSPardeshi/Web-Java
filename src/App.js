import { useState } from "react";

export default function App() {
  return (
    <>
      <h1>Hello World!! </h1>
      <Hello />
    </>
  );
}

function Hello() {
  let counter = 100;
  const like = () => {
    counter++;
    console.log(counter);
  };

  //RHS :: SPECIAL FUNCTION :: startWith , prefix useState , useEffect
  //React Hooks,
  //useState :: it works with DOM internally.
  // This function value get at runtime.
  let [counter1, setCounter1] = useState(1010); // UseState Syntax
  const like1 = () => {
    const newCount1 = counter1 + 1;
    setCounter1(newCount1);
  };

  return (
    <>
      {counter}
      {counter1}
      <h1>
        Counter: {counter}
        <button onClick={like}>LIKE</button>
      </h1>{" "}
      <h1>
        Counter1: {counter1}
        <button onClick={like1}>LIKE1</button>
      </h1>
    </>
  );
}
