import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { cardsApi } from './redux/apiSlice';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}> 
  <ApiProvider api={cardsApi}>
    <Provider store={store}>
     
        <BrowserRouter>
          <App />
        </BrowserRouter>
      
    </Provider>
    </ApiProvider>
  </QueryClientProvider>
  ,
)