// Higher order component (hoc) is  a component (higher order component) that renders another component (any regular component)
// THis will give us the following advantages
// Reuse code
// Render hijacking
// Prop maninpulation
// Absract state
// Supper usesful code saver with use of higher order components Yoyo
import React from 'react';
import ReactDOM from 'react-dom';
// Notice capital first letter because it is a React Component
const Info = (props) =>( 
<div>
    <h1>Please Login</h1>
    <p>Your info + props = {props.info}</p> 
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
//////////////// Challenge
const AdminInfo = withAdminWarning(Info);
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (
            <p>Please login to view info Nigger G</p>
        )}
        
        </div>
    ); 
};
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info= 'This is the fuckin info fucken fuck' />, document.getElementById('app'));





































