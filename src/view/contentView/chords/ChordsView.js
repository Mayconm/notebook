var chords = [];    
chords.push({
    title: "A",
    degree: 'I',
    scale: 'Major',
    text: 'Meu corção, não sei porque',
    bars: 2
});

chords.push({
    title: "C#m",
    degree: 'IIIm',
    scale: '',
    text: 'Bate feliz, quando te vê',
    bars: 1 + 0.5
});

chords.push({
    title: "C#7",
    degree: 'V7>',
    scale: '',
    text: 'E os meus',
    bars: 0.5
});

chords.push({
    title: "F#m7",
    degree: 'VIm',
    scale: '',
    text: 'Olhos',
    bars: 0.5
});

chords.push({
    title: "B7",
    degree: 'V7>',
    scale: '',
    text: 'Ficam so-',
    bars: 0.5
});

chords.push({
    title: "EM7",
    degree: 'V7>',
    scale: '',
    text: 'rrindo',
    bars: 0.5
});

chords.push({
    title: "A7",
    degree: 'V7>',
    scale: '',
    text: 'E pelas ',
    bars: 0.5
});

chords.push({
    title: "DM7",
    degree: 'IVM7',
    scale: '',
    text: 'Ruas',
    bars: 0.5
});

chords.push({
    title: "F#7",
    degree: 'V7>',
    scale: '',
    text: 'Vão te se-',
    bars: 0.5
});

chords.push({
    title: "Bm7",
    degree: 'IIm7',
    scale: '',
    text: 'guindo, mas mesmo as-',
    bars: 1
});

chords.push({
    title: "B7",
    degree: 'V7>',
    scale: '',
    text: 'sim',
    bars: 1
});

chords.push({
    title: "E7/D",
    degree: 'V7>',
    scale: '',
    text: 'foges de ',
    bars: 1
});

chords.push({
    title: "AM7/C#",
    degree: 'IM7',
    scale: '',
    text: 'mim',
    bars: 0.5
});

chords.push({
    title: "F7",
    degree: 'subV7>',
    scale: '',
    text: '',
    bars: 0.25
});

chords.push({
    title: "E7",
    degree: 'V7>',
    scale: '',
    text: '',
    bars: 0.25
});

chords.push({
    title: "A6",
    degree: 'I6',
    scale: '',
    text: '',
    bars: 1
});


import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
  /**
   * Render component
   * 
   * @return {ReactDOMComponent} component
   */
  render: function() {
    var components = chords.map(function(chord){
        var style = {
            width: (200 * chord.bars) + "px"
        }
        return (
            <div className="chord-item" style={style}>
                <h1>{chord.title}</h1>
                <span>({chord.degree})</span>
                <span>{chord.text}</span>
            </div>
        );
    });

    return (
      <div className="chord-view">
        {components}
      </div>
    );
  }

});
