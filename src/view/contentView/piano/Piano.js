import React from 'react';
import ReactDOM from 'react-dom';
import KeyboardDrawer from './Drawer.js';
import KeyDetector from  './KeyDetector.js';

var Piano = React.createClass({

  /**
   *
   *
   */
  render: function() {
    return (
      <canvas width={this.props.width} height={this.props.height}></canvas>
    );
  },

  /**
   * Paint the piano on the canvas
   *
   * @params {CanvasRenderingContext2D} context
   *
   */
  paint: function(context) {
    context.save();

    //draws background
    context.fillStyle = "#777";
    context.fillRect(0, 0, this.props.width, this.props.height);

    //update selected keys array
    //KeyboardDrawer.DefaultOptions.selectedKeys = this.state.selectedKeys;

    KeyboardDrawer.draw(context, this.state.selectedKeys);
    
    context.restore();
  },

  /**
   *
   *
   */
  componentDidMount: function() {
    var canvas, context;
    var _this = this;
    canvas = ReactDOM.findDOMNode(this);
    context = canvas.getContext('2d');

    this.state.selectedKeys = this.props.selected;

    console.log(this.props.selected)
    //bind click/tap events
    canvas.addEventListener("click", function (evt) {
      var x = evt.offsetX, 
          y = evt.offsetY;

      var keyNumber = KeyDetector.getKeyNumber(x, y, KeyboardDrawer.DefaultOptions);
      _this.toggleKey(keyNumber);
    });

    

    this.paint(context);
  },

  /**
   * Activate or desactivate a key on the piano
   *
   * @params {Number} keyNumber
   *
   */
  toggleKey: function (keyNumber) {
    var keys = this.state.selectedKeys,
        i = 0;

    while(keys[i] !== keyNumber && i < keys.length) {
      i++;
    }

    if (i < keys.length) {
      keys.splice(i, 1);
    } else {
      keys.push(keyNumber);
    }
    
    this.forceUpdate();
  },

  /**
   * Update the piano drawing the canvas
   *
   */
  componentDidUpdate: function() {
    var context = ReactDOM.findDOMNode(this).getContext('2d');
    context.clearRect(0, 0, 200, 200);
    this.paint(context);
    console.log("update");
  },

  /**
   *
   *
   */
  getInitialState: function() {
    return {
      selectedKeys: [1, 2]
    };
  }
});

module.exports = Piano;