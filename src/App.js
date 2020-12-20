import React, {Component} from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
//color plugin
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
//chart plugin
import 'tui-chart/dist/tui-chart.css';
import chart from '@toast-ui/editor-plugin-chart';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      content :''
    }
  } 
 // handleClick = () => {
  //   this.editorRef.current.getInstance().exec('Bold');
  // };
  editorRef = React.createRef();
  handleChangeEditor = e =>
  {
    const content = this.editorRef.current.getInstance().getMarkdown();
    this.setState({
      content:content
    })
  }
  
  
  render() {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue="hello"
          ref={this.editorRef}
          plugins= {[colorSyntax, chart]}
        />
        <div id="toastUIEditor">
          <h1>Toast UI Editor Example</h1>
          <div id="button">
            <button className="btn_save" onClick={this.handleChangeEditor}>Save</button>
          </div>
        <div>
          <h2>Result</h2>
          <textarea className="result" value={this.state.content} readOnly="readOnly"></textarea>
        </div>
        </div>
        
        {/* <button onClick={this.handleClick}>make bold</button> */}
      </>
    );
  }
}
export default App;
