import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PhoneListContainer from './components/PhoneListContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhoneListContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
