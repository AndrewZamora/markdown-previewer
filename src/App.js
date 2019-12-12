
import React, { Component } from 'react'
import marked from 'marked';
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
  convertToMarkdown = text => {
    // Sanitizing text can be handled here
    marked.setOptions({
      // Creates <br> for line carriages (new lines)
      gfm: true,
      breaks: true,
    });
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
