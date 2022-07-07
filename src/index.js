import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const theme = createTheme({
  palette: {
    white: {
      white: 'white',
    },
  },
});


const defaultState = { 
  data: 0, 
  isLoading: false,
  filteredData: [],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {...state, data: action.payload}
      
    case 'UPDATE_ISLOADING':
      return {...state, isLoading: action.payload}

    case 'UPDATE_FILTEREDDATA':
      return {...state, filteredData: action.payload}

    default:
      return state;
  }
}

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
