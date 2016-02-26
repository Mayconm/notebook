import React from 'react';
import Model from '../../model/NodeModel.js';

module.exports = React.createClass({

  /**
   *
   *
   */
  render: function () {
    return (
      <div className="leftButtons">
        <a onClick={this.handleClick} 
           id="btBack" 
           className="glyphicon glyphicon-menu-left">
        </a>
      </div>
    );
  },

  /**
   *
   *
   */
  handleClick: function (evt) {
    //Stop event propagation
    evt.preventDefault();

    var node = this.props.node;
    
    Model.loadNode(node.parents[0]);
    
    return false;  
  }

});