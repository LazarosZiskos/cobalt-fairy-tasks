import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskOne from "./routes/TaskOne";
import TaskTwoAndThree from "./routes/TaskTwoAndThree";
import TaskFour from "./routes/TaskFour";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";

// Uses React Router to separate and organize task views
// Included NavBar for easy navigation

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskone" element={<TaskOne />} />
        <Route path="/tasktwoandthree" element={<TaskTwoAndThree />} />
        <Route path="/taskfour" element={<TaskFour />} />
      </Routes>
    </Router>
  );
}

export default App;
