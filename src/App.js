export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Hello />
      <Hello />
      <World />
    </>
  );
}

//JSX => X = >XML
//JSX :: REACT COMPONENT
function Hello() {
  return <h1>Hello!!</h1>;
}

function World() {
  return <h1>Wolrd...</h1>;
}
