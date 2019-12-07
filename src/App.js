
import React, { Component } from 'react'
import marked from 'marked';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  };
  convertToMarkdown = text => {
    // This is a React thing. Check out this link https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
    return { __html: marked(text) };
  }
  handleInput = event => {
    const input = event.target.value;
    this.setState({
      input: input
    });
  }
  render() {
    return (
      <div className="App">
        <textarea id="editor" value={this.state.input} onChange={(e) => this.handleInput(e)}></textarea>
        <div id="preview" className="preview" dangerouslySetInnerHTML={this.convertToMarkdown(this.state.input)} />
      </div>
    )
  }
}

export default App;
