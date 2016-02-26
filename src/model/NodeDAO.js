var NodeWSClient = require("./NodeWSClient.js");
var NodeSearchWSClient = require("./NodeSearchWSClient.js");
/**
 *
 *
 */
var DAO = {};

DAO.get = function (id, callback) {
  NodeWSClient.GET(id, function (result) {
    callback(result);
  });
};

DAO.save = function (node, callback) {
  NodeWSClient.PUT(node, function (result) {
    if(callback)
      callback(result);
  });
};

DAO.delete = function (id, callback) {
  NodeWSClient.DELETE(id, function (result) {
    callback(result);
  });
};

DAO.create = function(node, callback) {
  NodeWSClient.POST(node, function (result) {
    callback(result);
  });
};

DAO.search = function(query, callback) {
  NodeSearchWSClient.GET(query, function (result) {
      callback(result);
  });
};

module.exports = DAO;