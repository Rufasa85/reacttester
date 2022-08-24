import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
 
    <Router>
     <Routes>
      <Route path="/" element={<h1>Home page</h1>}/>
      <Route path="/taco" element={<h1>taco page</h1>}/>
      <Route path="/:any" element={<h1>other page</h1>}/>
     </Routes>
    </Router>
  );
}

export default App;
