import React from 'react';

import ContentType from './ContentType.js';

//Content Views
import FolderView from './contentView/folder/FolderView.js';
import TextView from './contentView/text/TextView.js';
import MessagesView from './contentView/messages/MessagesView.js';
import MessageView from './contentView/messages/MessageView.js';
import Piano from './contentView/piano/Piano.js';
import CodeView from './contentView/code/CodeView.js';
import ChordsView from './contentView/chords/ChordsView.js';

/**
 *
 *
 * @return {ReactDOMComponent} component
 */
function getContentComponent (node) {
  var component;
  console.log(node.contentType);
  console.log(ContentType);
  switch(node.contentType) {
    case ContentType.TEXT: {
      component = <TextView node={node} />;
      break;
    }
    case ContentType.MESSAGES: {
      component = <MessagesView node={node} />
      break;
    }
    case ContentType.KEYBOARD: {
      component = <ChordsView node={node} width="500" height="200" selected={[]}/>
      break;
    }
    case ContentType.CODE: {
      component = <CodeView node={node} />
      break;
    }
    case ContentType.MESSAGE: {
      component = <MessageView node={node} />
      break;
    }
    default: {
      component = <FolderView node={node} />;
    }
  }

  return component;
}

module.exports = React.createClass({
  /**
   * Render component
   *
   * @return {ReactDOMComponent} component
   */
  render: function() {
    var node, contentComponent, className;

    node = this.props.node;
    className = "node-content contentType-" + ContentType.getClassName(node.contentType);
    contentComponent = getContentComponent(node);
    console.log(contentComponent);
    return (
      <div className={className} style={componentStyle}>
        {contentComponent}
      </div>
    );
  }

});

var componentStyle = {
 display: 'flex',
 flex: 1,
 flexDirection: 'row',
 justifyContent: 'flex-start', /* align items in Main Axis */
 alignItems: 'stretch', /* align items in Cross Axis */
 alignContent: 'stretch', /* Extra space in Cross Axis */
}
