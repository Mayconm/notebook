import PianoUtil from './Util.js';

var Drawer = {};

/**
 *
 *
 *
 */
var DefaultOptions = {
  key: {
    width: 30,
    height: 80,
    black: {
      start: 0.75,
      end: 0.25,
      height: 0.7
    }
  },
  octaves: 2
}

/**
 *
 * @params {CanvasRenderingContext2D}
 * @params {Object} options
 *
 */
function drawBlackKeys (context, options, selectedKeys) {
  var i, width, height, keyNumber;

  width = options.key.width / 2;
  height = options.key.height * options.key.black.height;

  //Key style
  context.strokeStyle = "black";
  context.lineWidth = 2;

  // Black keys will be located in the middle of white keys
  context.translate(options.key.width * options.key.black.start, 0);

  // Draw black keys
  for(i = 0; i < 5; i++) {
    
    //Betwen E and F doesn't exists a black key
    if(i === 2) {
      context.translate(options.key.width, 0);  
    }
    
    keyNumber = PianoUtil.getKeyNumber(true, options.currentOctave, i);
    context.fillStyle = PianoUtil.isSelected(selectedKeys, keyNumber) ? "red" : "black";

    context.beginPath();
    context.rect(0, 0, width, height);
    context.fill();
    context.stroke();

    context.translate(options.key.width, 0);
  }

  context.translate(options.key.width * options.key.black.end, 0);
}

/**
 *
 * @params {CanvasRenderingContext2D}
 * @params {Object} options
 *
 */
function drawWhiteKeys (context, options, selectedKeys) {
  var i, keyNumber;

  //Key style
  context.strokeStyle = "black";
  context.lineWidth = 2;

  for(i = 0; i < 7; i++) {

    keyNumber = PianoUtil.getKeyNumber(false, options.currentOctave, i);
    context.fillStyle = PianoUtil.isSelected(selectedKeys, keyNumber) ? "red" : "white";

    context.beginPath();
    context.rect(0, 0, options.key.width, options.key.height);
    context.fill();
    context.stroke();
    context.translate(options.key.width, 0);
  }
}

/**
 *
 * @params {CanvasRenderingContext2D}
 * @params {Object} options
 * @params {Number} octave
 */
function drawOctave (context, options, selectedKeys) {
  //draw white keys
  drawWhiteKeys(context, options, selectedKeys);
  //translate context to initial position
  context.translate(-options.key.width * 7, 0);
  //draw black key
  drawBlackKeys(context, options, selectedKeys);  
}

/**
 *
 * @params {CanvasRenderingContext2D}
 * @params {Object} options
 *
 */
Drawer.draw = function(context, selectedKeys) {

  var i;

  for(i = 0; i < DefaultOptions.octaves; i++ ) {
    DefaultOptions.currentOctave = i;
    drawOctave(context, DefaultOptions, selectedKeys);
  }

}

Drawer.DefaultOptions = DefaultOptions;



module.exports = Drawer;