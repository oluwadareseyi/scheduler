import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducerCon from "./store/reducer-con";
import reducerCal from './store/reducer-cal';

const rootReducer = combineReducers({
    contact: reducerCon,
    calendar: reducerCal
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
