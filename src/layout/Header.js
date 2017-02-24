import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = (props) => {
    return (
        <div className="header">
            <h2>Header</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Counter">Counter</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
