import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { defaultState } from './redux/defaultState';
import { reducer } from './redux/reducer';

const theme = createTheme({
  palette: {
    white: {
      white: 'white',
    },
  },
});


const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <App />
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  // </React.StrictMode>
);
