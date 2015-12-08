var serverURL = 'http://mzmserver.com:3030';
var $ = require("jquery");
/**
 *
 *
 */
var WS = {},
    //url = "http://192.168.25.13:3030/Node";
    url = serverURL + "/Node/search";

WS.GET = function (query, callback) {
  console.log("GET => " + query);
  $.ajax({
    method: "GET",
    url: url + "/" + query
  }).done(function( msg ) {
    console.log("===== GET RESULT =====");
    console.log(msg);
    console.log("======================");
    callback(msg);
  });
};

module.exports = WS;