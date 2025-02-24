import { useEffect, useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/pagination";
import queryString from "query-string";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });

  const [filters, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });
  // cài query string có thể biến từ objcet biến thành chuỗi

  useEffect(() => {
    async function fetchPostList() {
      try {
        // _limit= 10 _page = 1
        const paramString = queryString.stringify(filters);

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString} `;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("failed to post list ", error.message);
      }
    }
    console.log("post list effect");

    fetchPostList();

    // load lại trang khi filter thay đổi
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("new Page", newPage);
    setFilter({
      ...filters,
      _page: newPage,
    });
  }

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

  function handleTodoFormSubmit(formValues) {
    console.log("Form submit: ", formValues);
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  const handleFilterChange = (newFilters) => {
    console.log("new filter: ", newFilters);
    //  set lại trang gồm các filter giống tên nhập trong input
    setFilter({
      ...filters, // lấy ra những thằng cũ
      _page: 1, // filter mới không tới trang 2 trang 3 nên reset luôn
      title_like: newFilters.searchTerm, // tìm những bài post có nội dung có nội dung của mình
    });
  };

  const [showClock, setShowClock] = useState(true);
  // ví dụ trường hợp không clean up setInterval
  return (
    // component tolist có 2 thuộc tính đó là todos và onTodoClick
    // 2 thuộc tính đó thì todos đảm nhiệm việc render dữ liệu
    // còn onTodoClick giúp xử lí khi lick
    <div className="app">
      <h1>WELCOME TO REACT HOOKS BASIC</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      {showClock && <Clock />}
      <button
        onClick={() => {
          setShowClock(false);
        }}
      >
        HideClock
      </button>
    </div>
  );
}

export default App;
