
import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { ModalProvider } from './components/Reviews/Modal'
import {Provider} from 'react-redux';
import configureStore from './store';
import {csrfFetch } from './store/csrf';
import { restoreSession } from './store/session';
import * as sessionActions from './store/session';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  )
}


const renderApplication = () => {
 
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );  
}

if ((sessionStorage.getItem("X-CSRF-Token") === null) || (sessionStorage.getItem("currentUser"))) {
  
  
  store.dispatch(restoreSession()).then(renderApplication);
} else {
  
  
  renderApplication();
}

