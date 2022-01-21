import React from 'react';
import GlobalStyles from './assets/GlobalStyles';
import { StoreProvider } from './contexts/StoreContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

function App() {
  return (
    <StoreProvider>
      <ToastContainer />
      <GlobalStyles />
      <Routes />
    </StoreProvider>
  );
}

export default App;
