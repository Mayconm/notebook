

function ObserverList() {
    var list = [];

    this.push = function (o) {
        list.push(o);
    };

    this.notify = function (msg, obj) {
        list.forEach(function (item, idx) {
            item.update(msg, obj);
        });
    };
}

module.exports = ObserverList;