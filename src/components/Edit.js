import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter,NavLink, Link, Route} from 'react-router-dom';

const Edit = (props) => {
    console.log(props.match.params.id);
    console.log(props);
    return (
        
        <div className="dashColor4">
        This is info from my edit component page
        </div>
    );
};
export default Edit;