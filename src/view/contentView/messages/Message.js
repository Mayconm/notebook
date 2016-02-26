import React from 'react';
import ReactDOM from 'react-dom';
import Model from '../../../model/NodeModel.js';
import Util from './MessagesUtil.js';
import MessageCategoryView from './MessageCategoryView.js';

module.exports = React.createClass({
  /**
   * Render component
   *
   * @return {ReactDOMComponent} component
   */
  render: function() {
    var node = this.props.node;
    var categories = node.categories.map(function(item){
      return "#" + item.trim();
    }).join(" ");
    var dateAndTime = Util.parseDate(new Date(node.createdDate));

    return (
      <div className="message">
        <span>
          <i className="fa fa-clock-o fa-1"></i>
          <strong>{dateAndTime.time}</strong>
          <MessageCategoryView node={node} />
          <span onClick={this.edit} >Edit</span>
        </span>
        <p></p>
      </div>
    );
  },

  edit: function() {
    //location.hash = "node/" + this.props.node._id;
    Model.loadNode(this.props.node._id);
    console.log(this.props.node._id);
  },

  componentDidMount: function() {
    var container = ReactDOM.findDOMNode(this);
    var p = container.querySelector("p");
    p.innerHTML = this.props.node.content;
  }

});
