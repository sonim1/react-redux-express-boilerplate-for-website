import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div className="text-center">
            <Header />
            <div className="container col-sm-12 col-lg-12">
                { props.children }
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
