import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';
import configureStore from './store/configureStore';
import './styles/index.scss';

const store = configureStore();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}
