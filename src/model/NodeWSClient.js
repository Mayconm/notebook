var serverURL = 'http://mzmserver.com:3030';
var $ = require("jquery");
/**
 *
 *
 */
var WS = {},
    url = "http://mzmserver.com:3030/Node";
   // url = App.serverURL + "/Node";

WS.GET = function (id, callback) {
  console.log("GET => " + id);
  $.ajax({
    method: "GET",
    url: url + "/" + id
  }).done(function( msg ) {
    console.log("===== GET RESULT =====");
    console.log(msg);
    console.log("======================");
    callback(msg.result);
  });
};

WS.PUT = function (node, callback) {
  $.ajax({
    method: "PUT",
    url: url + "/" + node._id,
    data: node
  }).done(function( msg ) {
    callback(msg.result);
  });
};

WS.DELETE = function (id, callback) {
  $.ajax({
    method: "DELETE",
    url: url + "/" + id
  }).done(function(msg) {
    callback(msg.result);
  });
};
//create
WS.POST = function(node, callback) {
  $.ajax({
    method: "POST",
    url: url,
    data: node
  }).done(function(msg) {
    callback(msg.result);
  });
};

module.exports = WS;