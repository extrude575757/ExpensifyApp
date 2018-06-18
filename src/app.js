// Higher order component (hoc) is  a component (higher order component) that renders another component (any regular component)
// THis will give us the following advantages
// Reuse code
// Render hijacking
// Prop maninpulation
// Absract state

import React from 'react';
import ReactDOM from 'react-dom';
// Notice capital first letter because it is a React Component
const Info = (props) => (
<div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
</div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
         {props.isAdmin && <p>This is private info. Please don't share!</p>}
         <WrappedComponent {...props}/>
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info= 'This is the fuckin info fucken fuck' />, document.getElementById('app'));