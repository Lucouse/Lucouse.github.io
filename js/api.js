var Api = (function () {
    return {
        getComponent: getComponent,
        getComponentList: getComponentList
    };

    function getComponent(id, fileName,callBack) {
        var url = '/Lucouse.github.io/component/' + id + '/'+fileName;
        fetch(url).then(function (res) {
            return res.text();
        }).then(function (value) {
            callBack(value);
        }).catch(function (reason) {
            message.alertMessage(reason,null)
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
            message.alertMessage(reason,null);
            console.error(reason);
        });
    }
});
var api = new Api;