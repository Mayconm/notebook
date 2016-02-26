import React from 'react';
import ReactDOM from 'react-dom';
import Model from '../../../model/NodeModel.js';
import Util from './MessagesUtil.js';
import InputText from './InputText.js';

module.exports = React.createClass({
  /**
   * Render component
   *
   * @return {ReactDOMComponent} component
   */
  getInitialState: function() {
    return {
      editMode: false
    }
  },
  render: function() {
    var node = this.props.node;
    var categories = node.categories.map(function(item){
      return "#" + item.trim();
    }).join(" ");

    var view;

    if (this.state.editMode === true) {
      view = <span>
        <InputText value={categories} ref="editor"/>
        <button onClick={this.handleChange}>OK</button>
      </span>
    } else {
      if (categories.length === 0) {
        categories = "+";
      }
      view = (<span onClick={this.toggleEditor}>{categories}</span>);
    }

    return view;
  },

  toggleEditor: function() {
    var editMode = !this.state.editMode;
    this.setState({
      editMode: editMode
    });
  },

  handleChange: function() {
    var categories = this.refs.editor.getValue();
    var list = categories.split(",");
    list = list.map(function(item){
      return item.trim();
    });
    var node = this.props.node;
    node.categories = list;
    Model.saveRaw(node);
    this.toggleEditor();
  }

});
