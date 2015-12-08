import 'font-awesome/css/font-awesome.css';
import React from 'react';

export default React.createClass({
    render() {
        return (
            <span>
                <h1>Hello, React!</h1>
                <i className="fa fa-spinner fa-spin fa-3x"></i>
            </span>
        );
    }
});
