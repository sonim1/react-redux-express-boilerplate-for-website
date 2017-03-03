import React, { PropTypes } from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div><h3>Home Contents</h3></div>
        );
    }
}

export default Home;
