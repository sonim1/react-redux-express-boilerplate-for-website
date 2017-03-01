import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Layout from '../layout/Layout';
import Counter from './Counter/Counter';
import Home from './Home/Home';

const App = () => {
    return (
        <Router history={browserHistory} key={Math.random()}>
            <Route component={Layout}>
                <Route path="/" component={Home} />
                <Route path="/Counter" component={Counter} />
            </Route>
        </Router>
    );
};

export default App;
