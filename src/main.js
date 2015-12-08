import React from 'react';
import ReactDOM from 'react-dom';
import Node from './view/Node.js'
import Model from './model/NodeModel.js'

var container = document.getElementById('root');
//init root node
Model.loadNode("root", function (node) {
  console.log(node);
});

ReactDOM.render(
  <Node />,
  container
);