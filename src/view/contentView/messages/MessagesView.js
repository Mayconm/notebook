import React from 'react';
import Model from '../../../model/NodeModel.js';
import Message from './Message.js';
import MessagesUtil from './MessagesUtil.js';

function getDateString(lastNode, node) {
  if (!lastNode) {
    return '';
  }

  var lastDate = new Date(lastNode.createdDate);
  var currentDate = new Date(node.createdDate);
  var year = lastDate.getYear() !== currentDate.getYear();
  var month = lastDate.getMonth() !== currentDate.getMonth();
  var date = lastDate.getDate() !== currentDate.getDate();
  var months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  //

  if (year) {
    return currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
  }

  if (month) {
    return currentDate.getDate() + '/' + months[currentDate.getMonth()];
  }

  if (date) {
    return currentDate.getDate() + '/' + months[currentDate.getMonth()];
  }

  return '';

}

const dateStyle = {
  textAlign: 'center',
  borderTop: '1px solid #888',
}

const dateSpanStyle = {
  padding: '20px',
  background: 'white',
  border: '1px solid #888',
  display: 'inline-block',
}

module.exports = React.createClass({

  getInitialState: function() {
    return {
      filter: []
    }
  },
  /**
   * Render component
   *
   * @return {ReactDOMComponent} component
   */
  render: function() {
    var node = Model.node;

    var messages = [];
    var _this = this;
    var lastItem;
    node.children.forEach(function (item) {
      if(!_this.testFilter(item)) {
        return;
      }
      var dateString = getDateString(lastItem, item);
      if (dateString && dateString.length > 0) {
        messages.push(
          <div style={dateStyle}>
            <span style={dateSpanStyle}>{dateString}</span>
          </div>
        );
      }
      lastItem = item;
      messages.push(<Message node={item} />);
    });

    return (
      <div style={{width: '100%'}}>
        <input ref="filter" onKeyPress={this.applyFilter} style={{position: 'absolute', zIndex: '9999', width: '100%'}}/>
        <div className="msgContainer">
          <div className="msgList">
            {messages}
          </div>
        </div>
        <input type="text" ref="messageInput" onKeyPress={this.handleMessageInput} placeholder="type a message" className="msgInput"/>
      </div>
    );
  },

  handleMessageInput: function(evt) {
    if (evt.key !== 'Enter') {
      return;
    }
    var message = this.refs.messageInput.value;

    var regEx = /#\w+/gi;
    var tagList = [];
    var tag = "";
    var returnMsg = message;

    do {
      tag = regEx.exec(message);
      if (tag) {
       tag = tag[0];
       tagList.push(tag.replace("#", ""));
       returnMsg = returnMsg.replace(tag, "");
      }
    } while(tag)

    message = returnMsg;

    console.log(tagList);
    console.log(message);

    // create message
    message = MessagesUtil.parseLinks(message);

    Model.newNode(9, function(msg){
      console.log(msg);
    }, message, tagList);
  },

  testFilter: function(node) {
    var categoryFilter = this.state.filter;

    if (categoryFilter.length === 0 || categoryFilter[0].length === 0) {
      return true;
    }

    if (node.categories.length === 0 && categoryFilter.length === 1 && categoryFilter[0].indexOf("!") === 0) {
      return true;
    }

    for(var i = 0; i < node.categories.length; i++) {
      for(var j = 0; j < categoryFilter.length; j++) {
        var filter = categoryFilter[j].replace("!", "").trim();
        var valid = false;
        var value = node.categories[i].trim()
        if (value.toUpperCase().indexOf(filter.toUpperCase())) {
          valid = true;
        }
        if (categoryFilter[j].indexOf("!") === 0) {
          return false;
        }
        if (valid) {
          return true;
        }
      }
    }
  },

  applyFilter: function(evt) {
    if (evt.key !== 'Enter') {
      return;
    }
    var filter = this.refs.filter.value;
    var filterList = filter.replace("#", "").split(",").map(function(val) {
      return val.trim();
    });
    this.setState({
      filter: filterList
    })
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
