import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
    {alertVisible && <Alert onClose={() => setAlertVisible(false)}> Hello world</Alert>}
    <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </>
  );
}

export default App;