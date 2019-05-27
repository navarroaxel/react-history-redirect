import React from 'react';
import {Link} from 'react-router-dom';

const LinkedPage = () => (
    <div>
        <strong>
            You should not be here! Try with the delay.
        </strong>
        <br/>
        <Link to="/">Back to home</Link>
    </div>
);

export default LinkedPage;
