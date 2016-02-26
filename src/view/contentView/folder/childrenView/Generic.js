import React from 'react';
import ContentType from '../../../ContentType.js';
import Model from '../../../../model/NodeModel.js';

/**
 * @params {Node} node
 * @return {HTMLSpanElement} icon
 */
function getIcon (node) {
  var icon = ContentType.getIcon(node.contentType);

  return <span className={"fa fa-" + icon + " fa-2x"} />;
}

module.exports = React.createClass({
  /**
   *
   * @return {ReactComponent}
   */
  render: function() {
    var node, className, icon;

    node = this.props.node;
    className = "node node-" + ContentType.getClassName(node.contentType);
    icon = getIcon(node);

    return (
      <a href={"#node/" + node._id} onClick={this.handleClick} ref="link">
        <div className={className}>
          {icon}
          {node.title}
        </div>
      </a>
    );
  },

  handleClick: function (evt) {
    Model.loadNode(this.props.node._id);
  }

});
