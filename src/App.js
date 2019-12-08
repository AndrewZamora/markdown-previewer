
import React, { Component } from 'react'
import marked from 'marked';
import './App.css';

const defaultInput = {
  header: "# Example Header",
  subHeader: "## Example Sub-Header",
  link: "[Example Link]('https://www.freecodecamp.org')",
  inlineCode: "",
  codeBlock: "",
  listItem: "",
  blockquote: "",
  image: "",
  boldedText: ""
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  };
  componentDidMount() {
    this.setDefaultInput();
  }
  setDefaultInput() {
    this.setState({
      input: defaultInput.header
    })
  }
  convertToMarkdown = text => {
    return marked(text);
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
        {/* This is a React thing. Check out this link https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
        <div id="preview" className="preview" dangerouslySetInnerHTML={{ __html: this.convertToMarkdown(this.state.input) }} />
      </div>
    )
  }
}

export default App;
