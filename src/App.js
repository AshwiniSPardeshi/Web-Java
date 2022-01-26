export default function App() {
  let p1 = "Ashwini";
  console.log(p1);
  return (
    <>
      <h1>Hello World {p1} </h1>
      console.log(p1);
      <Hello name="Teju" />
      <Hello id="1" name="Pranabh" />
    </>
  );
}

//JSX => X = >XML
//JSX :: REACT COMPONENT
/*function Hello(p) {
  return <h1>Hello!! {p.name} </h1>;  // as variable parametre passed we have to use p.name
}*/

function Hello(name, id) {
  return <h1>{name} </h1>; ///
}
