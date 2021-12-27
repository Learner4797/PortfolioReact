import React from 'react';
import "./error.css";
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div className="error">
            <div className="container">
            <h1>404</h1>
            <Link className="btn-error" to="/">Back to Homepage</Link>
            </div>
        </div>
    )
}