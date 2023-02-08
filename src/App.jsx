import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyWork from "./pages/MyWork/MyWork";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/my-work" element={<MyWork />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
