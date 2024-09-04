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

  const handlSelectItem = (item: string) => {
    console.log(item);
  }


  return <ListGroup items = {items} heading="List" onSelectItem={handlSelectItem}/>;
}

export default App;