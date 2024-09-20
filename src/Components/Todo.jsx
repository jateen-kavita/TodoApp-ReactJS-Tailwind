import React, { useEffect, useRef, useState } from "react";
import todoIcon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
  function add() {
    let inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }

    const todo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, todo]);
    inputRef.current.value = "";
    console.log(todoList);
  }
  function deleteTodo(id) {
    setTodoList((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  }

  const toggleTodo=(id)=>{
    setTodoList((prev)=>{
      return prev.map((item)=>{
        if(item.id===id){
          return {...item,isComplete:!item.isComplete}
        }
        return item
      })
    })
  }
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList));
  },[todoList])

    const editTodo=(id,newText)=>{
        setTodoList((prev)=>{
            return prev.map((item)=>{
                if(item.id===id){
                    return {...item,text:newText}
                }
                return item;
            })
        })
    }
  
  return (
    <div className="bg-white self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl ">
      {/* Title */}
      <div className="flex items-center mt-7 gap-2">
        <img src={todoIcon} alt="" className="w-8" />
        <h1 className="text-2xl font-semibold text-center">Todo List</h1>
      </div>

      {/* Input Field */}
      <div className="mb-3">
        <input
          ref={inputRef}
          placeholder="Add Task"
          type="text"
          className=" bg-transparent outline-none flex-1 w-3/4 border-2 border-gray-400 rounded-md p-2 mt-10"
        />
        <button
          onClick={add}
          className="ml-2 cursor-pointer w-[80px] border-2  rounded-md p-2 border-orange-600 bg-orange-500"
        >
          Add+
        </button>
      </div>

      {/* Todo List */}

      {todoList.map((item, key) => {
        return (
          <TodoItems
            key={key}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo = {editTodo}
          />
        );
      })}
    </div>
  );
};

export default Todo;
