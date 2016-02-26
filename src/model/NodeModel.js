var NodeDAO = require("./NodeDAO.js");
var ObserverList = require("./ObserverList.js");
/**
 *
 * @constructor
 */
function NodeModel() {
    this.observers = new ObserverList();
}
/**
 * Load a node by id
 *
 * @param {ObjectId} id
 * @param {Function} callback
 */
NodeModel.prototype.loadNode = function (id, callback) {
    var model = this;
    NodeDAO.get(id, function(node) {
        location.hash = "node/" + node._id;
        model.setNode(node);
    });
    //
};
/**
 * Load a node by id
 *
 * @param {ObjectId} id
 * @param {Function} callback
 */
NodeModel.prototype.setNode = function (node, callback) {
    this.node = node;
    this.observers.notify("node.updated", node);
    if(!node.contentType) {
        node.contentType = 0;
    }
    if(callback) {
        callback(node);
    }
    //
};
/**
 * Save a node
 *
 * @param {Object} p
 */
NodeModel.prototype.save = function (p) {
    if(!(p.title || p.content || p.metaData)) {
        return;
    }
    console.log("========== save ===========");
    console.log(p);

    if(p.title)
      this.node.title = p.title;
    if(p.content)
      this.node.content = p.content;
    if(p.metaData) {
      this.node.metaData = p.metaData;
    }
    this.observers.notify("node.updated", this.node);

    NodeDAO.save(this.node);
    console.log(this.node);
};

NodeModel.prototype.saveRaw = function (node) {
  NodeDAO.save(node);
};
/**
 * Create a new node
 *
 * @param {Function} callback
 */
NodeModel.prototype.newNode = function (contentType, callback, content, categories) {
    var newNode = {};
    var model = this;
    newNode.parents = [];
    newNode.parents.push(this.node._id);
    newNode.contentType = parseInt(contentType);
    newNode.categories = categories;
    if (content) {
        newNode.content = content;
    }
    //
    NodeDAO.create(newNode, function (node) {
        model.node.children.push(node);
        NodeDAO.save(model.node);
        model.observers.notify("node.updated", model.node);
        if (callback) {
            callback(node);
        }
    });
};
/**
 * Remove current node
 *
 * @param {Function} callback
 */
NodeModel.prototype.remove = function (callback) {
    NodeDAO.delete(this.node._id, function (node) {
        //when a node is deleted it will go back to his parent
        callback(node.parents[0]);
    });
};
/**
 *
 * @param {String} property
 * @param {Object} value
 *
 */
NodeModel.prototype.setProperty = function (property, value) {
    this.node[property] = value;
    var obj = {
        _id: this.node._id
    };
    obj[property] = value;
    this.save(obj);
};

/**
 *
 * @deprecated
 * @returns {Object}
 */
NodeModel.prototype.toJSON = function () {
    return this.getNode();
};

NodeModel.prototype.search = function (query) {
    if(query.toLowerCase() === 'root') {
        this.loadNode("root");
        return;
    }
    var _this = this;
    NodeDAO.search(query, function (results) {
        //console.log(node);
        var node = {
            contentType: 0,
            children: results,
            parents: []
        }

        location.hash = "search/" + query;
        _this.setNode(node);
    });
};

/**
 * Method used by views to get node data
 * @returns {Object}
 */
NodeModel.prototype.getNode = function () {
    var node = this.node;
    return {
        id: node._id,
        title: node.title,
        content: node.content,
        parentId: node.parents[0],
        children: node.children,
        contentType: node.contentType,
        metaData: node.metaData,
        categories: node.categories,
        createdDate: node.createdDate,
        modifiedDate: node.modifiedDate
    };
};

var model = new NodeModel();

module.exports = model;
