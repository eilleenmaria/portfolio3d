import { BrowserRouter } from "react-router-dom"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Footers from "./components/Footers"

function App() {
  

  return (
    <Router>
      {/* <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center blend-mode">
          <Nav/>
        </div>
    </div> */}
    <Nav/>
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/projects" Component={Projects}/>
    </Routes> 
    <Footers/>   
    </Router>
  )
}

export default App
