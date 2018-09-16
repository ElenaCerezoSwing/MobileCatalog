import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMobiles } from './actions/index';
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



function mapStateToProps(state) {
  return {
    catalog: state.mobile.list
  };
}

export default connect(
  mapStateToProps,
  { showMobiles }
)(App);
