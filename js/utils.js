var Util = (function () {
    return {
        buildDom: buildDom,
        downloadComponent: downloadComponent,
        buildZip: buildZip,
        buildUrl: buildUrl,
        buildMailToAddress: buildMailToAddress,
        buildIcon: buildIcon
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

    /**
     *创建icon
     * @param parentNode
     * @param json {iconClass:String,data-tooltip:String}
     */
    function buildIcon(parentNode, json, callback) {
        var iconPanel = document.createElement("div");
        var div = document.createElement("div");
        var i = document.createElement("i");
        iconPanel.setAttribute("id", "icon-panel");
        i.setAttribute("class", json.iconClass + " tooltip");
        i.setAttribute("data-tooltip", json["data-tooltip"]);
        buildDom([parentNode, iconPanel, div, i]);
        if (callback !== undefined)
            callback(i);
    }
});
var util = new Util;