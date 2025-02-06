import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import PasswordManager from './PasswordManager';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
          <Auth0Provider
              domain="digilytics.eu.auth0.com"
              clientId="IDU7vcuBWxXS4oEmOeJzObJfENLA9uTo"
              audience={"https://digilytics.auth.api/"}
              redirectUri={window.location.origin}
          >
          <PasswordManager />
          </Auth0Provider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
