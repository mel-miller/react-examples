/* eslint-disable react/prefer-stateless-function */

import React, { Component, Fragment } from 'react';
import './App.css';
import { Modal } from 'Elements';
import { Toggle } from 'Utilities';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button type="button" onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h2>Still in Modal</h2>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
