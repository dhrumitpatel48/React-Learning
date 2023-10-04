import Card from "./components/Card";
function App() {
  let myObj = {
    name: "Dhrumit",
    age: "23"
  }
  return (
    <>
      <Card name="Dhrumit" objs = {myObj} username="Dhrumit" btnText="text me"/>
      <Card name="Dhrumit" objs = {myObj} username="Dhrumit Patel"/>
    </>
  );
}

export default App;
