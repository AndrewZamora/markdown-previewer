
import React, { Component } from 'react'
import marked from 'marked';
import DOMPurify from 'dompurify';
import './App.css';

const defaultInput = {
  header: '# Example Header',
  subHeader: '## Example Sub-Header',
  link: '[Example Link]("https://www.freecodecamp.org")',
  inlineCode: '\` Example of inline code \`',
  multiLineCode: `\`\`\`
  function example() {
    return 'this is a multi-lineCode block';
  } 
\`\`\``,
  image: '![example img](example-img.jpg)',
  boldedText: '**Example Bolded Text**',
  listItem: '- Example List Item',
  blockquote: '> Example Blockquote',
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
    // `\r\n` creates a line carriage (new line)
    const allDefaultInput = Object.keys(defaultInput).map(key => defaultInput[key]).join('\r\n');
    this.setState({
      input: allDefaultInput
    })
  }
  sanitize = dirtyInput => {
    return DOMPurify.sanitize(dirtyInput);
  }
  convertToMarkdown = text => {
    marked.setOptions({
      // Creates <br> for line carriages (new lines)
      gfm: true,
      breaks: true,
    });
    const dirtyMD = marked(text);
     // Sanitizing markdown can be handled here
    return this.sanitize(dirtyMD);
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
        <h1>Markdown Previewer</h1>
        <div className="container">
          <textarea id="editor" value={this.state.input} onChange={(e) => this.handleInput(e)}></textarea>
          {/* This is a React thing. Check out this link https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
          <div id="preview" className="preview" dangerouslySetInnerHTML={{ __html: this.convertToMarkdown(this.state.input) }} />
        </div>
      </div>
    )
  }
}

export default App;
