import ReactDOM from "react-dom";
import React from "react";
import {task1} from "./task1.js";
import {task3} from "./task3.js";


var mountNode = document.getElementById("app");

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    let index=0;
    this.tasks = [
      {name:"Task 1", component:task1()},
      {name:"Task 3", component:task3()},
    ].map(task => {
      Object.assign(task,{id:index++});
      return task;
    });
    this.state = {task:this.tasks[0]};
  }

  handleTaskSelection(taskId) {
    this.setState({task:this.tasks[taskId]});
  }

  render() {
    return (<div>
      <ul>
        {this.tasks.map(task => {
          const className = this.state.task.id === task.id ? "selectedTask" : "";
          return <li key={"TaskList-li-"+task.id} className={className} onClick={evt => this.handleTaskSelection(task.id)}>{task.name}</li>
        })}
      </ul>
      <span>Task : {this.state.task.name}</span>
      {this.state.task.component}
    </div>);
  }
}


ReactDOM.render(<TaskList />, mountNode);
