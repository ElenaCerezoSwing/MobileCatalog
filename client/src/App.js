import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMobiles } from './actions/index';
import './App.css';
import Header from './components/Header';
import PhoneDetailComponent from './components/PhoneDetailComponent';
import Footer from './components/Footer';

class App extends Component {
  componentWillMount() {
    this.props.showMobiles();
  }

  renderMobileItems() {
    return this.props.catalog.map(mobile => {
      return (
        <li key={mobile.id} >
          <h5>{mobile.name}</h5>
          <img src={mobile.image} alt={mobile.name} object-fit='contain'></img>
          <PhoneDetailComponent
            weight={mobile.weight}
            sim={mobile.sim}
            os={mobile.os}
            price={mobile.price}
            hidden={this.props.hidden}
          />
        </li>)
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div>

          <ul>{this.renderMobileItems()}</ul>
        </div>
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
