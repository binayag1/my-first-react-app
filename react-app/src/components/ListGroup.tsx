import { MouseEvent, useState } from "react";
function ListGroup() {

  let items = [
    "Sydney",
    "Canberra",
    "Adelaide",
    "Darwin",
    "Perth",
    "Tasmania",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index ? 'list-group-item active': 'list-group-item'} key={item} onClick={()=>{setSelectedIndex(index)}}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
