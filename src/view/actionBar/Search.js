import React from 'react';
import Model from  '../../model/NodeModel.js';

module.exports = React.createClass({

  /**
   *
   *
   */
  render: function () {
    var node = this.props.node;

    return (
      <form onSubmit={this.handleSubmit} id="search-form">
        <input type="text" ref="text"/>
      </form>
    );
  },

  /**
   *
   *
   */
  handleSubmit: function (evt) {
    //Stop event propagation
    evt.preventDefault();

    var text = this.refs.text.value.trim();
    
    if (!text) {
      return;
    }
    
    Model.search(text);

    return false;  
  }

});