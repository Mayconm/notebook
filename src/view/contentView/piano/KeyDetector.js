var KeyDetector = {};

var blackKeys = [2, 4, 0, 7, 9, 11];
var whiteKeys = [1, 3, 5, 6, 8, 10, 12];

/**
 *
 * @params {Number} x
 * @params {Number} y
 * @params {Object} options
 * @return {Number} keyNumber
 *
 */
KeyDetector.getKeyNumber = function(x, y, options) {

  var key, keyInt, isWhite, octave, keyNumber;

  key = x / options.key.width;
  keyInt = parseInt(key);
  isWhite = true;

  if (y < options.key.height * options.key.black.height) {
    if (keyInt !== 0 && keyInt !== 3 && (key % keyInt <= options.key.black.end)) {
      keyInt--;
      isWhite = false;
    } else if (keyInt !== 2 && keyInt !== 6 && (key % keyInt >= options.key.black.start)) {
      isWhite = false;
    }
  }

  
  octave = parseInt(keyInt / 7);

  keyInt = keyInt % 7;

  if(isWhite) {
    keyNumber = whiteKeys[keyInt];
  } else {
    keyNumber = blackKeys[keyInt];
  }

  return keyNumber + (octave * 12);
}


module.exports = KeyDetector;