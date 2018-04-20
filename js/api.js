var Api = (function () {
    var fileType = {
        json: "json",
        text: "text",
        html: "html",
        css: "css",
        xml: "xml"
    };
    var url = {
        projectName: "Lucouse.github.io",
        componentFolder: "component",
        localComponentFolder: "localComponent"
    };
    return {
        getComponent: getComponent,
        getComponentList: getComponentList,
        download: download,
        getProjectInfo:getProjectInfo
    };

    /**
     * 获取组件
     * @param id
     * @param fileName
     * @param callBack
     */
    function getComponent(id, fileName, callBack) {
        var localUrl = util.buildUrl([url.projectName,url.componentFolder,id,fileName]);
        download(localUrl, fileType.text, function (text) {
            callBack(text);
        });
    }

    /**
     * 获取当前组件列表
     * @param callBack
     */
    function getComponentList(callBack) {
        var localUrl =util.buildUrl([url.projectName,"list.json"]);
        download(localUrl, fileType.json, function (json) {
            callBack(json);
        });
    }

    /**
     * 获取项目信息
     * @param callBack
     */
    function getProjectInfo(callBack) {
        var localUrl =util.buildUrl([url.projectName,"project.json"]);
        download(localUrl,fileType.json,function (json) {
            callBack(json);
        });
    }

    /**
     * 下载文件
     * @param url
     * @param fileType
     * @param callBack
     */
    function download(url, fileTypeParam, callBack) {
        fetch(url).then(function (res) {
            if (fileTypeParam === fileType.json) {
                return res.json();
            } else if (fileTypeParam === fileType.text) {
                return res.text();
            }
        }).then(function (value) {
            callBack(value);
        }).catch(function (reason) {
            message.alertMessage(reason, null);
            console.error(reason);
        });
    }
});
var api = new Api;