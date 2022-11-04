import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import MyWork from './pages/MyWork/MyWork';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/about'
          element={
            <AboutMe />
          }
        ></Route>
        <Route
          path='/skills'
          element={
            <Skills />
          }
        ></Route>
        <Route
          path='/my-work'
          element={
            <MyWork />
          }
        ></Route>
        <Route
          path='/contact'
          element={
            <Contact />
          }
        ></Route>
        <Route
          path='/'
          element={
            <Home />
          }
        ></Route>
      </Routes>
    </Router>
  )
}

export default App