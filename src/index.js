import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './components/redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
