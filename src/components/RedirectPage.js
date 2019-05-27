import React from 'react';
import {Link} from 'react-router-dom';

const RedirectPage = () => (
    <div>
        <strong>Redirected successfully!</strong>
        Now try without the redux-saga delay.
        <br/>
        <Link to="Back to home">Home</Link>
    </div>
);

export default RedirectPage;
