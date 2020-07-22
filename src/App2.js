

import React, { Component } from 'react';
import Heady from './components/head';

class App2 extends Component {

  state = {
    name: ''
}

  render() {
    return (
      <Heady name={this.state.name} />
    );
  }

  componentDidMount() {
    this.setState({ name: 'Fred' })
  }
}

export default App2;
