var Color = {
  WHITE: 0,
  BLACK: 1
};

var keyColor = [
  Color.WHITE, // C
  Color.BLACK, // C#
  Color.WHITE, // D
  Color.BLACK, // D#
  Color.WHITE, // E
  Color.WHITE, // F
  Color.BLACK, // F#
  Color.WHITE, // G
  Color.BLACK, // G#
  Color.WHITE, // A
  Color.BLACK, // A#
  Color.WHITE  // B
];

var Util = {};

/**
 *
 * @params {Number} key - Number betwen 1 - 12
 * @returns {boolean} 
 */
Util.isBlack = function (key) {
  return keyColor[key - 1] === Color.BLACk;
}

/**
 *
 * @params {Number} key - Number betwen 1 - 12
 * @returns {boolean} 
 */
Util.isWhite = function () {
  return keyColor[key - 1] === Color.WHITE;
}


Util.getKeyNumber = function (isBlack, octave, idx) {
  var value;

  if (isBlack) {
    value = idx * 2;
    value += 2;
    if (idx > 1) {
      value += 1;
    }
  } else {
    value = idx * 2; 
    if (idx < 3) {
      value += 1; 
    }
  }

  value += octave * 12;
  
  return value;
}

Util.isSelected = function (selectedKeys, keyNumber) {

  if(!selectedKeys) {
    return false;
  }

  var i;

  for (i = 0; i < selectedKeys.length; i++) {
    if (selectedKeys[i] === keyNumber) {
      return true;
    }
  }

  return false;
}


module.exports = Util;

