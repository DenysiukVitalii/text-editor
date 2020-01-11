import React, { Component } from 'react';
import getMockText from './text.service';
import { ControlPanel, TextField } from '/src/components';
import './App.css';

class App extends Component {

  state = {
    text: ''
  }

  componentDidMount() {
    this.getText();
  }

  getText() {
    getMockText().then(result => {
      this.setState(() => ({ text: result.split(' ') }))
    });
  }

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel />
          <TextField text={text} />
        </main>
      </div>
    );
  }
}

export default App;
