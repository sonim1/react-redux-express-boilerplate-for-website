import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div className="container text-center">
            <Header />
            <div>
                { props.children }
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
