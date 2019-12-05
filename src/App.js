import React, {Component} from 'react';
import logo from './logo.svg';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Hello from app</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}
}

export default App;
