import { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  function handleTodoClick(todo) {
    // console.log(todo);
    // hàm này có nhiệm vụ xóa giá trị khi bị
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) {
      return;
    }

    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    // component tolist có 2 thuộc tính đó là todos và onTodoClick
    // 2 thuộc tính đó thì todos đảm nhiệm việc render dữ liệu
    // còn onTodoClick giúp xử lí khi lick
    <div className="app">
      <h1>WELCOME TO REACT HOOKS BASIC</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
