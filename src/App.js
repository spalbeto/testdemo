import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import Header from './components/Header';


class App extends Component {


  render() {
    return (
      <Fragment>
        <Header/>
        <Routes/>
     </Fragment>
    )
  }
}

export default App;
