import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { TodoSection } from "./components/TodoSection/TodoSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="todoAppMain section2">
        <Sidebar />
        <TodoSection />
      </section>
    </div>
  );
}

export default App;
