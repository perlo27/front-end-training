import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import XYZ from './XYZ.jsx';
// import MyComponent from './MyComponent.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<MyComponent />, document.getElementById('app'));

ReactDOM.render(
    XYZ('div', null, 'Hesssllo World'),
    document.getElementById('app')
);