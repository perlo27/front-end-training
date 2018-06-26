import ReactDOM from "react-dom";
import {task1} from "./task1.js";
import {task3} from "./task3.js";


var mountNode = document.getElementById("app");

// const container = task1();
const container = task3();


ReactDOM.render(container, mountNode);
