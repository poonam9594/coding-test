import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Products from './Components/Products';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/products" element={<Products/>}/> 
          </Routes>
        </Router>
        
      
      
    </>
  );
}

export default App;
