import Home from "./components/Home";
import { Routes,Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import './App.css';

function App(){
    return(
        <div>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/skills" Component={Skills}/>
                <Route path="/experience" Component={Experience}/>
                <Route path="/education" Component={Education}/>
                <Route path="/portfolio" Component={Portfolio}/>
            </Routes>
        </div>
    )
}
export default App;