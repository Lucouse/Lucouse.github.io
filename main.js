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
     * 获取当前组 件列表
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
var Util = (function () {
    return {
        buildDom: buildDom,
        downloadComponent: downloadComponent,
        buildZip: buildZip,
        buildUrl: buildUrl,
        buildMailToAddress: buildMailToAddress
    };

    /**
     * 根据Array创建Dom
     * @param Array
     */
    function buildDom(Array) {
        var length = Array.length;
        Array.forEach(function (value, index) {
            if (index + 1 < length) {
                value.appendChild(Array[index + 1]);
            }
        })
    }

    /**
     *根据ID获取组件文件
     * @param id
     */
    function downloadComponent(id) {
        api.getComponent(id, "index.html", function (data) {
            api.getComponent(id, "index.css", function (data2) {
                var json = {
                    folder: {
                        name: id,
                        file: [{
                            name: "index.html",
                            value: data
                        }, {
                            name: "index.css",
                            value: data2
                        }]
                    }
                };
                buildZip(json);
            });
        });
    }

    /**
     * 根据json文件内容创建压缩包
     * @param json
     */
    function buildZip(json) {
        var zip = new JSZip();
        var folder = zip.folder(json.folder.name);
        folder.file(json.folder.file[0].name, json.folder.file[0].value);
        folder.file(json.folder.file[1].name, json.folder.file[1].value);
        folder.generateAsync({type: "base64"}).then(function (base64) {
            location.href = "data:application/zip;base64," + base64;
        })
    }

    /**
     * 使用array创建url
     * @param Array
     * @returns {string}
     */
    function buildUrl(Array) {
        var localUrl = "";
        Array.forEach(function (value) {
            localUrl = localUrl + "/" + value;
        });
        return localUrl;
    }

    /**
     * {address:array,subject:String,cc:array,bcc:array,body:String}
     * @param json
     * @param callback
     */
    function buildMailToAddress(json, callback) {
        var MailToAddress = "MailTo:";
        buildMailToContactor(json.address, function (contactors) {
            MailToAddress = MailToAddress + contactors + "?";
            MailToAddress = MailToAddress + "subject=" + json.subject + "&";
            buildMailToContactor(json.cc, function (ccContactor) {
                if (ccContactor !== "") {
                    MailToAddress = MailToAddress + "cc=" + ccContactor + "&";
                }
                buildMailToContactor(json.bcc, function (bccContactor) {
                    if (ccContactor !== "") {
                        MailToAddress = MailToAddress + "bcc=" + bccContactor + "&" + json.body;
                    }
                    MailToAddress = MailToAddress + "body=" + json.body;
                    callback(MailToAddress);
                });
            });
        });
    }

    /**
     * 按照邮箱收件人格式创建收件人字符串aaa@a.com;bbb@b.com;
     * @param array
     * @param callback
     */
    function buildMailToContactor(array, callback) {
        var contactors = "";
        for (var obj in array) {
            contactors = contactors + array[obj] + ";";
        }
        callback(contactors);
    }
});
var util = new Util;
window.onload = function (ev) {
    api.getComponentList(function (JsonArray) {
        buildComponentListDom(JsonArray);
    });
    api.getProjectInfo(function (json) {
        buildHeader(json);
    });

    function buildComponentListDom(JsonArray) {
        JsonArray.forEach(function (object) {
            api.getComponent(object.id, "index.html", function (data) {
                var div = document.createElement("div");
                var h3 = document.createElement("h3");
                var content = document.createElement("div");
                var toolBar = document.createElement("div");
                div.setAttribute("class", "main-panel");
                h3.innerText = object.name_cn;
                content.innerHTML = data.replace("index.css", "component/" + object.id + "/index.min.css");
                toolBar.setAttribute("class", "component-tooBar");
                buildToolBar(toolBar, object.id);
                var array = [document.getElementById("container"), div, h3, content, toolBar];
                util.buildDom(array);
            });
        });
    }

    /**
     * 创建组件下的工具栏
     * @param toolbar
     */
    function buildToolBar(toolbar, id) {
        var downloadIconPanel = document.createElement("div");
        var downloadDiv = document.createElement("div");
        var downloadI = document.createElement("i");
        var reportIconPanel = document.createElement("div");
        var reportDiv = document.createElement("div");
        var reportI = document.createElement("i");
        downloadIconPanel.setAttribute("id", "icon-panel");
        downloadI.setAttribute("class", "i_download tooltip");
        downloadI.setAttribute("data-tooltip", "下载");
        downloadI.onclick = function (ev2) {
            util.downloadComponent(id);
        };
        reportIconPanel.setAttribute("id", "icon-panel");
        reportI.setAttribute("class","i_feedback tooltip");
        reportI.setAttribute("data-tooltip","反馈");
        var a = document.createElement("a");
        var mailAddress = {address:["aaa@a.com","bbb@b.com"],subject:"test",cc:[],bcc:[],body:"test"};
        util.buildMailToAddress(mailAddress,function (obj) {
            a.setAttribute("href",obj);
        });
        document.body.appendChild(a);
        reportI.onclick = function (ev2) {
            a.click();
        };
        util.buildDom([toolbar, downloadIconPanel, downloadDiv, downloadI]);
        util.buildDom([toolbar,reportIconPanel,reportDiv,reportI]);
    }

    /**
     * 根据项目信息创建header
     * @param json
     */
    function buildHeader(json) {
        var header = document.getElementsByClassName("header")[0];
        var projectInfo = document.createElement("div");
        var projectName = document.createElement("h2");
        var version = document.createElement("div");
        var updateDate = document.createElement("div");
        projectName.innerText = json.projectName;
        version.innerText = json.version;
        updateDate.innerText = json.latestUpdateDate;
        projectInfo.setAttribute("class","project-info");
        util.buildDom([header, projectInfo]);
        util.buildDom([projectInfo, projectName]);
        util.buildDom([projectInfo, version]);
        util.buildDom([projectInfo, updateDate]);
    }
    function buildFeedBackWindow() {
        popUp.showPopUp();
    }
};
