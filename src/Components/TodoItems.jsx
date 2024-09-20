import React, { useState } from "react";
import tick from "../assets/tick.png";
import nottick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoItems = (props) => {
  const { text, isComplete, id, deleteTodo, toggleTodo, editTodo } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleToggle = () => {
    if (!isEditing) {
      toggleTodo(id);
    }
  };

  return (
    <div className="flex items-center my-2">
      <div onClick={handleToggle} className="flex gap-2 mt-2 items-center cursor-pointer w-3/4">
        <img src={isComplete ? tick : nottick} alt="" className="w-7 cursor-pointer" />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border-2 border-gray-400 rounded-md p-1"
          />
        ) : (
          <p className={`${isComplete ? "line-through" : ""} text-lg`}>{text}</p>
        )}
      </div>
      <button onClick={handleEdit} className="ml-2 cursor-pointer p-2 text-blue-600">
        {isEditing ? "Save" : "Edit"}
      </button>
      <img onClick={() => deleteTodo(id)} src={deleteIcon} alt="" className="w-6 cursor-pointer ml-2" />
    </div>
  );
};

export default TodoItems;
