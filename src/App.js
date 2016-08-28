import React, { Component } from 'react';
import { connect } from 'react-redux';

import { testAction } from './Store/Shared/sharedActions.js';

import Accounts from './Containers/accounts.js';
import Navbar from './Containers/navbar.js';

import './App.css';

const mapStateToProps = (state) => {
  return {
    state: state,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: () => dispatch(testAction()),
  };
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="App-header">
          <h2>Hello React</h2>
          <button className="btn btn-danger dropdown-toggle" onClick={this.props.testAction}>🔥 an action </button>
        </div>
        <Accounts />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
