import React from 'react';
import SearchBar from "./actionBar/Search.js";
import BackButton from "./actionBar/BackButton.js";
import Model from "../model/NodeModel.js";

var ActionBar = React.createClass({
  /**
   *
   *
   */
  render: function () {
    var node = this.props.node;
    var components = [];

    components.push(<SearchBar node={node}/>);
    
    if (node.parents.length > 0) {
      components.push(<BackButton node={node}/>);
    }

    return (
      <div id="nodeActionBar">
        {components}
        <div className="clear" />
      </div>
    );
  }

});

module.exports = ActionBar;