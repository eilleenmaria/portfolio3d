import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Footers from "./components/Footers"
import { Suspense } from "react"
import Loader from "./components/Loader"
import WrapError from "./helpers/WrapError";

function App() {
  return (
    <Router>      
      <Nav/>
      <Routes> 
          <Route path="/" element={<WrapError><Home/></WrapError>}/>  
          <Route
              path="/about"
              element={
                <Suspense fallback={<Loader/>}>
                  <WrapError>  <About /></WrapError>
                
                </Suspense>
              }
            /> 
            <Route
              path="/projects"
              element={
                <Suspense fallback={<Loader/>}>
                  <WrapError> <Projects /></WrapError>                 
                </Suspense>
              }
            />     
      </Routes> 
      <Footers/>   
    </Router>
  )
}
export default App
