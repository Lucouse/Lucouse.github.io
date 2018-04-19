var Api = (function () {
    return {
        getComponent: getComponent,
        getComponentList: getComponentList
    };

    function getComponent(id, callBack) {
        var url = '/Lucouse.github.io/component/' + id + '/index.html';
        fetch(url).then(function (res) {
            return res.text();
        }).then(function (value) {
            callBack(value);
        }).catch(function (reason) {
            callBack(reason);
            console.error(reason);
        });
    }

    function getComponentList(callBack) {
        var url = '/Lucouse.github.io/list.json';
        fetch(url).then(function (res) {
            return res.json();
        }).then(function (value) {
            callBack(value);
        }).catch(function (reason) {
            callBack(reason);
            console.error(reason);
        });
    }
});
var api = new Api;