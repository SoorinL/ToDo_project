import { useState } from "react";

const initialToDo = {
  id: Math.random().toString(),
  content: "",
};

const AddToDo = (props) => {
  const [toDo, setToDo] = useState(initialToDo);

  const onChangeHandler = (event) => {
    setToDo((prev) => {
      return {
        ...prev,
        id: Math.random().toString(),
        content: event.target.value,
      };
    });
  };

  const onAddHandler = (event) => {
    event.preventDefault();
    props.onAddToDo(toDo);
    console.log(toDo);
    setToDo(initialToDo);
  };
  return (
    <form onSubmit={onAddHandler}>
      <input
        value={toDo.content}
        placeholder="Add Todo"
        onChange={onChangeHandler}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};
export default AddToDo;
