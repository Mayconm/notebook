import React from 'react';
//import Model from '../../../../../../model/NodeModel.js';
import Message from './Message.js';

module.exports = React.createClass({
  /**
   * Render component
   * 
   * @return {ReactDOMComponent} component
   */
  render: function() {
    var node = this.props.node;
    
    var messages = [];


    node.children.forEach(function (item) {
        messages.push(<Message node={item} />);
    });

    return (
      <div>
        <div className="msgContainer">
          <div className="msgList">
            {messages}
          </div>
        </div>
        <input type="text" placeholder="type a message" className="msgInput"/>
      </div>
    );
  }

});
    
    // var listener, input, msgContainer, msgList, msgTemplate;
    
    
    
    // function appendMessage (msg) {
    //     //
    //     msgList.append(getMsgHTML(msg));
    //     msgContainer.scrollTop(msgList.height());
    // }
    
    // function init (container, node, listener) {
    //     var template = _.template($('#ViewContentMessagesTemplate').html()),
    //         html = template(),
    //         msgHTML = "";  
        
    //     msgTemplate = _.template($('#ViewContentMessageTemplate').html());
        
    //     container.addClass("contentType-Messages").html(html);
        
    //     msgList = container.find(".msgList");
    //     msgContainer =  $(".msgContainer");
    //     input = container.find("input");
        
        
        
    //     msgList.html(msgHTML);
        
    //     input.on("keydown",function(evt) {
    //         if (evt.keyCode === 13) {
    //             var msg = input.val();
    //             msg = parseLinks(msg);
    //             //
    //             App.NodeModel.newNode(9, function(msg){
    //                 appendMessage(msg);
    //                 input.val("");
    //             }, msg);
    //         }
    //     });
        
    //     setTimeout(function(){
    //         msgContainer.scrollTop(msgList.height());
    //         msgContainer.css({
    //             height: (App.getDimensions().content.height - (input.height() * 2.3)) + "px"
    //         });
    //     }, 800);
    // }
    
    // return {
    //     init: init
    // };