import { useState } from "react";

const ToDoList = (props) => {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [toDoChecked, setToDoChecked] = useState(false);
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      console.log("isChecked ::", id);
      console.log("isChecked ::", checkedItems);
      return;
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      console.log("isCheckedFalse ::", id);
      console.log("isCheckedFalse ::", checkedItems);
      return;
    }
  };

  const checkHandler = ({ target }) => {
    setToDoChecked(!toDoChecked);
    checkedItemHandler(target.id, target.checked);
    console.log("checkHandler 안::", target.id);
    console.log("checkHandler 안::", target.checked);
    console.log("checkHandler 안:target:", target);
  };

  return (
    <div>
      {props.data.map((toDo) => (
        <div key={toDo.id}>
          <input
            type="checkbox"
            onChange={(event) => checkHandler(event)}
            checked={toDoChecked}
            id={toDo.id}
            value={toDo.content}
          />
          <label>{toDo.content}</label>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
