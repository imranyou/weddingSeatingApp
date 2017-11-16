import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import DatePickerTest from './DatePickerTest';
import AutoCompleteTest from './AutoCompleteTest';
import TestCards from './TestCards';


class App extends Component {
  render() {
    return (
  <ThemeProvider theme={theme}>
      <div>
      <AutoCompleteTest />
      </div>
  </ThemeProvider>
    );
  }
}

export default App;
