import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './input.jsx';
import Button from "./button.jsx";



class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:
        [

        ]
    }
  }
  saveTask = (e) => {
    e.preventDefault();
    if (e.keyCode === 13 && e.target.value.length !==0) {
      let txt = e.target.value.trim();
      this.setState({ tasks: [...this.state.tasks, { value: txt, complite: false }] });
      e.target.value = "";
    }

  }
  deleteTask = (elem) => {
    let newItems = this.state.tasks.filter((item) => {
      return item.value !== elem;
    });
    this.setState({ tasks: newItems });
    //e.target.parentElement.remove();
  }
  compliteTask = (index) => {
    let test = this.state.tasks.map((item, indx) => {
      if (indx === index) {
        item.complite = !item.complite;
      }
      return item;
    })
    this.setState({ tasks: test });
  }
  render() {
    let list = this.state.tasks.map((item, index) => {

      return (<li key={index} className={item.complite ? "complite-task" : "active-task"}>
        <Button onClick={this.compliteTask.bind(null, index)} value={item.complite ? " " : "V"} className="complite-task-button"/>
          <span className="task-txt">{item.value}</span>
        <Button onClick={this.deleteTask.bind(null, item.value)} value="X" className="delete-task-button"/>
      </li>);
    });
    return (
      <div className="to-do-list">
        <Input onKeyUp={this.saveTask} className="input-task" placeholder="Input task"/>
        <ul className="tasks">
          {list}
        </ul>
      </div>
    );
  }
}


ReactDOM.render(<ToDo />, document.getElementById("root"));