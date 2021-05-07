import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home.js";
import "./Components/Card.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Rick And Morty</h1>
      <Home></Home>
    </div>
  )
}

export default App;
