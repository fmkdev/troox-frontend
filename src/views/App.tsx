import React from 'react';
import './App.css';
import Routerr from './Router';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Routerr />
    </QueryClientProvider>
  );
}

export default App;
