import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from '../components/Layout';
import Counter from '../components/Counter/Counter';
import Home from '../components/Home/Home';

const App = () => {
    return (
        <Router history={browserHistory} key={Math.random()}>
            <Route component={Layout}>
                <Route path="/Counter" component={Counter} />
                <Route path="/*" component={Home} /> {/* Default Path */}
            </Route>
        </Router>
    );
};

export default App;
