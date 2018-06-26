import React from "react";

class Component extends React.Component {
  render() {
    return <div>Component</div>;
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return <div>PureComponent</div>;
  }
}

function functionalComponent() {
  return <div>functionalComponent</div>;
}

export function task1(){
  const createElement = React.createElement("div",{className:"createElement", key:"key1"},"createElement");
  const component = <Component key="key2" />;
  const pureComponent = <PureComponent key="key3" />;
  const container = React.createElement("div",{className:"container"},[createElement,component, pureComponent, functionalComponent()]);

  return container;
}
