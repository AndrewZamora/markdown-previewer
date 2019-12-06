
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
    return (marked(text));
  }
  handleInput = event => {
    const input = event.target.value;
    // const markdown =;
    this.setState({
      input: input
    });
  }
  render() {
    return (
      <div className="App">
        <textarea id="editor"  onChange={(e)=>this.handleInput(e)}></textarea>
        <div id="preview" className="preview">
          {this.convertToMarkdown(this.state.input)}
        </div>
      </div>
    )
  }
}

export default App;
