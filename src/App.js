import React, { Component } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import uuid from "uuid";
import "./App.css";


class App extends Component {
  state = {
    items: [],
    item: '',
    id: uuid()
  }

  changeHandler = (event) => {
    this.setState({item: event.target.value});
  }

  submitHandler = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      id: uuid(),
      item:'',
      editItem: false
    })
    console.log("click")
  }

  clearHandler = () => {
    this.setState({items: []});
  }

  deleteHandler = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    
    this.setState({
      items: filteredItems
    });
    
  }

  editHandler = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  };

  render() {
    return (
      <div className="App">
        <h4>ToDo Input</h4>
        <div className="content">
          <ToDoInput 
          submitHandler={this.submitHandler} 
          changeHandler={this.changeHandler}
          item={this.state.item}
          />

          <ToDoList 
          items={this.state.items} 
          clearHandler={this.clearHandler} 
          deleteHandler={this.deleteHandler}
          editHandler={this.editHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
