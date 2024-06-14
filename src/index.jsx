import './index.css';
import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';

import './i18n';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
