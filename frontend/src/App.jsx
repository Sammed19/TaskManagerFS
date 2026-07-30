import { useEffect } from "react";
import { fetchTasks } from "./features/taskSlice";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import TaskDetails from "./components/TaskDetail";
import { Link } from "react-router-dom";
import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <nav className="navCss">
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/task/:id">Task Details</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
      
    </>
  );
}

export default App;