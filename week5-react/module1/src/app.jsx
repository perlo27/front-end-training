import ReactDOM from 'react-dom';
import React from 'react';

import task1 from './task1.jsx';
import task3 from './task3.jsx';
import task5 from './task5.jsx';
import task6 from './task6.jsx';

const mountNode = document.getElementById('app');

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    let index = 0;
    this.tasks = [
      { name: 'Task 1 - Core Concepts', component: task1() },
      { name: 'Task 3 - Components', component: task3() },
      { name: 'Task 5 - Redux', component: task5() },
      { name: 'Task 6 - Routing', component: task6() },
    ].map((task) => {
      Object.assign(task, { id: index });
      index += 1;
      return task;
    });
    this.state = { task: this.tasks[0] };
  }

  handleTaskSelection = (taskId) => {
    this.setState({ task: this.tasks[taskId] });
  };

  render() {
    const { task: currentTask } = this.state;
    return (
      <div key="TaskList-div">
        <ul key="TaskList-ul">
          {this.tasks.map((task) => {
            const className = currentTask.id === task.id ? 'selectedTask' : '';
            return (
              <li
                key={`TaskList-li-${task.id}`}
                className={className}
                onClick={() => this.handleTaskSelection(task.id)}
              >
                {task.name}
              </li>
            );
          })}
        </ul>
        <span key="TaskList-span">
          Task :
          {currentTask.name}
        </span>
        {currentTask.component}
      </div>
    );
  }
}

ReactDOM.render(<TaskList key="TaskList" />, mountNode);
