import React from 'react';
import ReactDOM from 'react-dom';
import Model from '../../../model/NodeModel.js';
import Util from './MessagesUtil.js';

module.exports = React.createClass({
  /**
   * Render component
   *
   * @return {ReactDOMComponent} component
   */
  getInitialState: function() {
    return {
      value: this.props.value
    }
  },

  render: function() {

    return <input type="text" ref="text" value={this.state.value} onChange={this.change}/>;
  },

  change: function() {
    var text = this.refs.text.value;

    this.setState({
      value: text
    });
  },

  getValue: function() {
    return this.state.value;
  }

});
