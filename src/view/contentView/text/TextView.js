import React from 'react';
import TinyMCE from 'react-tinymce';

var editorConfig = {
  plugins: [
      "autoresize advlist autolink lists link image charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars code fullscreen",
      "insertdatetime media nonbreaking save table contextmenu directionality",
      "emoticons template paste textcolor colorpicker textpattern"
  ],
  width: '100%',
  autoresize_min_height: 400,
  menubar: false,
  statusbar: false,
  toolbar: 'code undo redo | styleselect | bold italic | media  forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
};

module.exports = React.createClass({
  /**
   * Render component
   *
   * @return {ReactDOMComponent} component
   */
  render: function() {
    var node = this.props.node;

    //console.log(node.content);

    return (
      <TinyMCE
        content = {node.content}
        config = {editorConfig}
        onChange = {this.handleEditorChange} />
    );
  },

  handleEditorChange: function (evt) {
    console.log(evt);
  }

});
