import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';
import { Auth0Provider } from "@auth0/auth0-react"
const {REACT_APP_GAMINGPALACE_DOMAIN, REACT_APP_GAMINGPALACE_CLIENT_ID} = process.env


const domain = REACT_APP_GAMINGPALACE_DOMAIN
const clientId = REACT_APP_GAMINGPALACE_CLIENT_ID


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
