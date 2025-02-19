import React from "react";
import PropTypes, { func } from "prop-types";

// propsType giúp định nghĩa component

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [], // giá trị mặc định là mảng rỗng
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        // ý nghĩa return jsx trực tiếp
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
