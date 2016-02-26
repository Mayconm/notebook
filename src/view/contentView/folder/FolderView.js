import React from 'react';
import ContentType from "../../ContentType.js";

// Views
var GenericView = require("./childrenView/Generic.js");

/**
 *
 *
 *
 */
function getChildView (child) {
  var view;

  switch(child.contentType) {
    default: {
      view = <GenericView node={child}/>;
    }
  }

  return view;
}

module.exports = React.createClass({
  /**
   * Render component
   * 
   * @return {ReactDOMComponent} component
   */
  render: function() {
    var node = this.props.node;

    //children
    var children = node.children.map(getChildView);

    return (<div>{children}</div>);
  }

});