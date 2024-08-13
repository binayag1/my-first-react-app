function ListGroup() {
  let items = [
    "Sydney",
    "Canberra",
    "Adelaide",
    "Darwin",
    "Perth",
    "Tasmania",
  ];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={()=> console.log("Button is clicked")}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
