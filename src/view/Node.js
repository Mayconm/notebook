var React = require('react');
var ContentView = require('./ContentView.js');
var Model = require("../model/NodeModel.js");
var ActionBar = require("./ActionBar.js");

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

    return (
      
      <div id="nodeView">
        <ActionBar node={node}/>
        <h1>{node.title}</h1>
        <ContentView node={node} />
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