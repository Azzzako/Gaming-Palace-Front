import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './Redux/store';
import Auth0ProviderWithHistory from './Auth0Provider/Auth0Provider';


const domain = process.env.REACT_APP_GAMING_PALACE_DOMAIN
const clientId = process.env.REACT_APP_GAMING_PALACE_CLIENT_ID



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Auth0ProviderWithHistory
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </PersistGate>
  </Provider>

);
