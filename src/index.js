import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers} from "redux";


import App from './App';
import * as serviceWorker from './serviceWorker';

import authReducer from "./reducers/auth";


const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(
  rootReducer
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