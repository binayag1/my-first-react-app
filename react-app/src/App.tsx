import ListGroup from "./components/ListGroup";

function App() {

  let items = [
    "Sydney",
    "Canberra",
    "Adelaide",
    "Darwin",
    "Perth",
    "Tasmania",
  ];


  return <ListGroup items = {items} heading="List"/>;
}

export default App;