import React from 'react';
import Model from '../../../model/NodeModel.js';

var componentStyle = {
  width: '100%',
}

module.exports = React.createClass({
  getInitialState: function() {
    return {
      content: this.props.node.content,
      categories: this.props.node.categories.join(',')
    };
  },

  componentWillReceiveProps: function() {
    this.setState({
      content: this.props.node.content,
      categories: this.props.node.categories.join(',')
    });
  },

  /**
   * Render component
   *
   * @return {ReactDOMComponent} component
   */
  render: function() {
    var node = Model.node;

    return (
      <div>
        <input type="text" ref="categories" value={this.state.categories} onChange={this.categoryChanged} onBlur={this.updateCategories}/>
        <textarea style={componentStyle} value={this.state.content} />
      </div>
    );
  },

  updateCategories: function() {
    var node = Model.node;
    var categories = this.refs.categories.value.split(',');
    console.log(categories);
    node.categories = categories.map(function(item) {
      return item.trim();
    });
    console.log(node);
    Model.save(node);
  },

  categoryChanged: function() {
    this.setState({
      categories: this.refs.categories.value
    })
  }

});
