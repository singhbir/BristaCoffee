import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux";
import { combineForms } from "react-redux-form";
import { createStore, applyMiddleware } from "redux";

const initialUserState = {
    name: "",
    email: "",
    phonenum:"",
    message:""
  };

  const store = createStore(
    combineForms({
      user: initialUserState
    }),
  );

  const Newapp = () =>{
      return(
          <Provider store={store}>
                <App/>
          </Provider>
      )
  }

ReactDOM.render(<Newapp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
