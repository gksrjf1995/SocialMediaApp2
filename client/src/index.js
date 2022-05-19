import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import "./index.css"
import App from './App';
import {createStore , applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import reducer from "./reducer/index"

const store = createStore(reducer,applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <Provider store={store}>
      <App /> 
    </Provider>
 
);


