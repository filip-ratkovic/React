import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
const Todo = () => {
  const [data, setData] = useState([]);

  let a = "";
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <Link to={"/"}>HOME</Link>
      <form
        className="unos"
        onSubmit={(e) => {
          e.preventDefault();
          setData([...data, a]);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            a = e.target.value;
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {data.map((el, i) => {
        return (
          <Card
            title={el}
            onDelete={() => {
              setData(data.filter((el, index) => i !== index));
            }}
          />
        );
      })}
    </div>
  );
};

export default Todo;