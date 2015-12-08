import React from 'react';
import ReactDOM from 'react-dom';
//import Model from '../../../../../../model/NodeModel.js';
import Util from './MessagesUtil.js';

module.exports = React.createClass({
  /**
   * Render component
   * 
   * @return {ReactDOMComponent} component
   */
  render: function() {
    var node = this.props.node;
    
    var dateAndTime = Util.parseDate(new Date(node.createdDate));

    return (
      <div className="message">
        <span>
          <i className="fa fa-calendar fa-1"></i>
          <b>{dateAndTime.date}</b>
          <i className="fa fa-clock-o fa-1"></i>
          <strong>{dateAndTime.time}</strong>
        </span>
        <p></p>
      </div>
    );
  },

  componentDidMount: function() {
    var container = ReactDOM.findDOMNode(this);
    var p = container.querySelector("p");
    p.innerHTML = this.props.node.content;
  }

});
