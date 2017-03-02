import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import actionCreators from '../actions';

export default function configureStore(initialState) {
    /* eslint-disable no-underscore-dangle, no-console*/
    const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators });
    if (!enhancer) {
        console.warn('Install Redux DevTools Extension to inspect the app state: ', 'https://github.com/zalmoxisus/redux-devtools-extension#installation');
    }
    /* eslint-enable */

    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');  // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
