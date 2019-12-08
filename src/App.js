import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import uuid from 'uuid'

class App extends Component {
  state = {
    items: [
      {id: '1', title: 'wake up'},
      {id: '2', title: 'breakfast'}
    ],
    id: uuid(),
    item:'',
    edititem: false
  }

  handleChange = (e) => {
    console.log('change');
  }

  handleSubmit = (e) => {
      console.log('sub');
  }

  clearList = () => {
    console.log('clear');
  }

  handleDelete = (id) => {
    console.log('delete');
  }

  handleEdit = (id) => {

  }
  render() {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-5'>
          <h3 className='text-capitalize text-center'>Todo Input</h3>
          <ToDoInput 
          item={this.state.item} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          edititem={this.handleEdit}/>
          <ToDoList 
          items={this.state.items}
          clear={this.state.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
