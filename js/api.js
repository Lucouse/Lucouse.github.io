var Api = (function () {
    return {
        getComponent: getComponent,
        getComponentList: getComponentList,
        download:download
    };

    /**
     * 获取组件
     * @param id
     * @param fileName
     * @param callBack
     */
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

    /**
     * 获取当前组件列表
     * @param callBack
     */
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

    /**
     * 下载文件
     * @param url
     * @param fileType
     * @param callBack
     */
    function download(url,fileType,callBack) {
        fetch(url).then(function (res) {
            return res.text();
        }).then(function (value) {
            callBack(value);
        }).catch(function (reason) {
            message.alertMessage(reason,null);
            console.error(reason);
        });
    }
});
var api = new Api;