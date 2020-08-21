import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";


import App from './App';
import * as serviceWorker from './serviceWorker';

import authReducer from "./reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const routing = (
	<Provider store={store}>
	    <BrowserRouter>
	      <App />
	    </BrowserRouter>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'))


serviceWorker.unregister();