import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

class ToDoList extends Component {
    
    render() {
        const {items, clearHandler, deleteHandler , editHandler} = this.props;
        return (
            <div className="itemsList">
              <h4>ToDo List</h4>
              {items.map(item => {
                return (
                  <ToDoItem 
                  key={item.id}
                  title={item.title}
                  deleteHandler ={() => deleteHandler(item.id)}
                  editHandler = {() => editHandler(item.id)}
                  />
                )
              })}
              <button id="clear-list-btn" onClick={clearHandler}>Clear list</button>
            </div>
        );
      }
    }

export default ToDoList; 