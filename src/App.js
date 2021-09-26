import logo from "./logo.svg";
import { Button } from "react-bootstrap";
import { ReactComponent as Icon } from "./assets/burguer.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hola Nico</h1>
      <Button variant="danger">Danger</Button> <Icon />
    </div>
  );
}

export default App;
