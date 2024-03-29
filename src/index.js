import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';
import setAuthorizationToken from './components/user/setAuthorizationToken';

const root = ReactDOM.createRoot(document.getElementById('root'));

setAuthorizationToken(localStorage.token);

root.render(
  
    <CookiesProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>  
    </CookiesProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
