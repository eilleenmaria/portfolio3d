import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Footers from "./components/Footers"
import { Suspense } from "react"
import Loader from "./components/Loader"

function App() {
  return (
    <Router>      
      <Nav/>
      <Routes> 
          <Route path="/" element={<Home/>}/>  
          <Route
              path="about"
              element={
                <Suspense fallback={<Loader/>}>
                  <About />
                </Suspense>
              }
            /> 
            <Route
              path="projects"
              element={
                <Suspense fallback={<Loader/>}>
                  <Projects />
                </Suspense>
              }
            />     
      </Routes> 
      <Footers/>   
    </Router>
  )
}
export default App
