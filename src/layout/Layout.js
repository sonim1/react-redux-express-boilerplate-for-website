import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div className="text-center">
            <Header />
            <div className="container">
                { props.children }
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
