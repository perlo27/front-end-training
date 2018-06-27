import React from "react";

class Component extends React.Component {
  render() {
    return <div key="Task1-Component-div">Component</div>;
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return <div key="Task1-PureComponent-div">PureComponent</div>;
  }
}

function functionalComponent() {
  return <div key="Task1-functionalComponent-div">functionalComponent</div>;
}

export function task1(){
  const createElement = React.createElement("div",{className:"createElement", key:"Task1-createElement"},"createElement");
  const component = <Component key="Task1-Component"/>;
  const pureComponent = <PureComponent key="Task1-PureComponent"/>;
  const container = React.createElement("div",{className:"container", key:"Task1-div"},[createElement,component, pureComponent, functionalComponent()]);

  return container;
}
