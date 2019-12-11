import React, {Component} from 'react';
import "./ToDoInput.css";

class ToDoInput extends Component {
    render() {
       const {changeHandler,submitHandler,item} = this.props
        return (
            <div className="submitForm">
                <input type='text' placeholder='add item' onChange={changeHandler} value={item}></input>
                <button onClick={submitHandler}>Submit</button>
            </div>
            
        )
    }
}

export default ToDoInput; 