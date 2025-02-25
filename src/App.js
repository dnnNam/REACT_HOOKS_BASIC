import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  // khi thay đổi state thay đổi thằng cha thằng con có thay đổi không

  const handleHeroClick = () => {};

  return (
    <div className="app">
      {/* {<h1> React hooks</h1>}
      <p> {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Hero name="Easy Frontend" onClick={handleHeroClick} /> */}

      <Counter />
    </div>
  );
}

export default App;
