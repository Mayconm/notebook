import React from 'react';
import ReactDOM from 'react-dom';

var languages = ['javascript', 'html', 'sh', 'php', 'java'];
var editor;
module.exports = React.createClass({
  /**
   * Render component
   * 
   * @return {ReactDOMComponent} component
   */
  render: function() {
    
    return (
      <div>
        <select onChange={this.languageSelected} ref="language">
          {languages.map(function(item){
            return <option value={item}>{item}</option>
          })}
        </select>
        <button onClick={this.handleClick} ref="btSave">Save</button>
        <div id="code-editor"/>
      </div>
    );
  },

  componentDidMount: function() {
    var content = this.props.node.content;
    var language = this.props.node.metaData.language;
    var btSave = this.refs.btSave;
    editor = ace.edit("code-editor");
    editor.setTheme("ace/theme/monokai");
    
    editor.getSession().setMode("ace/mode/" + language);
    editor.setValue(content);
    this.refs.language.value = language;
    // var _this = this;
    // editor.on("change", function(e){
    //   console.log(_this);
    //    btSave.disabled = false;
    // });
  },

  languageSelected: function() {
    editor.getSession().setMode("ace/mode/" + this.refs.language.value);
  },

  handleClick: function() {
    var value = editor.getValue();
    console.log(value);
  },

  componentUpdate: function() {

  },

  handleEditorChange: function (evt) {
    // console.log(evt);
  }

});
 
    
var chords = [];    
chords.push({
    title: "A",
    degree: 'I',
    scale: 'Major',
    text: 'Meu corção, não sei porque',
    bars: 2
});

chords.push({
    title: "C#m",
    degree: 'IIIm',
    scale: '',
    text: 'Bate feliz, quando te vê',
    bars: 1 + 0.5
});

chords.push({
    title: "C#7",
    degree: 'V7>',
    scale: '',
    text: 'E os meus',
    bars: 0.5
});

chords.push({
    title: "F#m7",
    degree: 'VIm',
    scale: '',
    text: 'Olhos',
    bars: 0.5
});

chords.push({
    title: "B7",
    degree: 'V7>',
    scale: '',
    text: 'Ficam so-',
    bars: 0.5
});

chords.push({
    title: "EM7",
    degree: 'V7>',
    scale: '',
    text: 'rrindo',
    bars: 0.5
});

chords.push({
    title: "A7",
    degree: 'V7>',
    scale: '',
    text: 'E pelas ',
    bars: 0.5
});

chords.push({
    title: "DM7",
    degree: 'IVM7',
    scale: '',
    text: 'Ruas',
    bars: 0.5
});

chords.push({
    title: "F#7",
    degree: 'V7>',
    scale: '',
    text: 'Vão te se-',
    bars: 0.5
});

chords.push({
    title: "Bm7",
    degree: 'IIm7',
    scale: '',
    text: 'guindo, mas mesmo as-',
    bars: 0.5
});

chords.push({
    title: "B7",
    degree: 'V7>',
    scale: '',
    text: 'sim',
    bars: 0.5
});

chords.push({
    title: "E7/D",
    degree: 'V7>',
    scale: '',
    text: 'foges de ',
    bars: 0.5
});

chords.push({
    title: "AM7/C#",
    degree: 'IM7',
    scale: '',
    text: 'mim',
    bars: 0.5
});