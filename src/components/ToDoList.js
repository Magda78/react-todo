import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
    render() {
        return (
            <div>
                <h2>Hello from ToDoList</h2>
                <ToDoItem/>
            </div>
        )
    }
}

export default ToDoList; 