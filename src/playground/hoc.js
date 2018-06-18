// Higher order component (hoc) is  a component (higher order component) that renders another component (any regular component)
// THis will give us the following advantages
// Reuse code
// Render hijacking
// Prop maninpulation
// Absract state

import React from 'react';
import ReactDOM from 'react-dom';

const info = (props) => (
<div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
</div>
);


ReactDOM.render(<Info info="This is my info bitch" />, document.getElementById('app'));