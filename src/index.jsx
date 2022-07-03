import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './Index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ContextApiProvider from './context-providers/ContextApiProvider';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);
root.render(
  <ContextApiProvider>
    <App />
  </ContextApiProvider>
);

serviceWorker.unregister();
