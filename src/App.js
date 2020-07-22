import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {DATA_TEST} from "./constant";


class App extends React.Component {
  state = {
    counter: 0
  }

  render() {
    const { counter } = this.state;

    return (
      <div
        data-test={DATA_TEST.APP}
      >
        <h1
          data-test={DATA_TEST.COUNTER}
        >
          {counter}
        </h1>
        <button
          data-test={DATA_TEST.INCREMENT_BUTTON}
          onClick={() => this.setState({counter: counter + 1})}
        >
          Increment
        </button>
        <button
          data-test={DATA_TEST.DECREMENT_BUTTON}
          disabled={counter === 0}
          onClick={() => this.setState({counter: counter - 1})}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
