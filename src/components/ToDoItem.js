import React, {Component} from 'react';
import "./ToDoItem.css";

class ToDoItem extends Component {
    render() {
        const {title,  deleteHandler, editHandler } = this.props;
        return (
            <div className="itemList">
                <h6>{title}</h6>
                <button id="edit-btn" onClick={editHandler}><img src="https://img.icons8.com/officexs/16/000000/edit.png" alt="edit"></img></button>
                <button id="delete-btn" onClick={ deleteHandler }><img src="https://img.icons8.com/small/16/000000/trash--v1.png" alt="delete"></img></button>
            </div>
        )
    }
}

export default ToDoItem; 