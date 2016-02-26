var React = require('react');
var ContentView = require('./ContentView.js');
var Model = require("../model/NodeModel.js");
var ActionBar = require("./ActionBar.js");
var NodeTitle = require("./NodeTitle.js");

var style = {
  height: '100%'
};

var Node = React.createClass({

  /**
   *
   *
   */
  render: function () {
    var childs = ["A", "B", "C"];
    var node = this.state.node;

    //
    if(!node) {
      return <div>Loading</div>
    }

    console.log("Render node");
    console.log(node);
    return (

      <div id="nodeView" style={style}>
        <ActionBar node={node}/>
        <NodeTitle node={node}/>
        <ContentView node={node}/>
      </div>
    );
  },

  /**
   *
   *
   */
  componentDidMount: function () {
    Model.observers.push(this)
  },

  /**
   *
   *
   */
  componentDidUpdate: function () {

  },

  /**
   * Node updated
   *
   *
   */
  update: function (msg, node) {
    this.setState({
      node: node
    });
  },

  /**
   *
   *
   */
  getInitialState: function () {
    return {
      node: null
    };
  }

});

module.exports = Node;
