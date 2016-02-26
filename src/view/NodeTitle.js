import React from 'react';
import Model from "../model/NodeModel.js";

var NodeTitle = React.createClass({

  getInitialState: function() {
    return {title: ''};
  },

  /**
   *
   *
   */
  render: function () {
    return (
      <div className="node-title">
        <input onChange={this.titleChanged} onBlur={this.updateTitle} ref="title" placeholder="Enter node tittle" value={this.state.title} className="editable" />
      </div>
    );
  },
  
  titleChanged: function() {
    var node = this.props.node;
    node.title = this.refs.title.value;
    Model.save(node);
  },

  /**
   *
   *
   */
  componentDidMount: function () {
    Model.observers.push(this)
  },

  updateTitle: function() {

  },

  update: function (msg, node) {
    this.setState({
      title: node.title
    });
  },
});

module.exports = NodeTitle;
