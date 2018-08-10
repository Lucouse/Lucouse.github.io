window.onload = (function (ev) {
    main.initCSSAnimation();
    buildComponentListDom();

    function buildComponentListDom() {
        api.getComponentList(function (JsonArray) {
            JsonArray.forEach(function (object) {
                api.getComponent(object.id, "index.html", function (data) {
                    var div = document.createElement("div");
                    var h3 = document.createElement("h3");
                    var content = document.createElement("div");
                    var toolBar = document.createElement("div");
                    div.setAttribute("class", "panel");
                    h3.innerText = object.name_cn;
                    content.innerHTML = data.replace("index.css", "../../component/" + object.id + "/index.min.css").replace("index.js", "../../component/" + object.id + "/index.min.js");
                    toolBar.setAttribute("class", "component-tooBar");
                    buildToolBar(toolBar, object.id);
                    util.buildDom([document.getElementById("container"), div, h3]);
                    util.buildDom([div, content]);
                    util.buildDom([div, toolBar]);
                });
            });
        });
    }

    /**
     * 创建组件下的工具栏
     * @param toolbar
     */
    function buildToolBar(toolbar, id) {
        fontFaceIcon.buildIcon(toolbar, {iconClass: "i_download", "data-tooltip": "下载"}, function (i) {
            i.onclick = function (ev2) {
                util.downloadComponent(id);
            };
        });
        fontFaceIcon.buildIcon(toolbar, {iconClass: "i_feedback", "data-tooltip": "反馈"}, function (i) {
            i.onclick = function (ev2) {
                var a = document.createElement("a");
                var mailAddress = {
                    address: ["2809606201@qq.com"],
                    subject: "组件反馈 id:" + id,
                    cc: [],
                    bcc: [],
                    body: "在这里写下你的内容"
                };
                util.buildMailToAddress(mailAddress, function (obj) {
                    a.setAttribute("href", obj);
                });
                toolbar.appendChild(a);
                a.click();
                toolbar.removeChild(a);
            };
        });
        fontFaceIcon.buildIcon(toolbar, {iconClass: "i_open", "data-tooltip": "新窗口打开"}, function (i) {
            i.onclick = function (ev2) {
                buildComponentDetail(id);
            };
        });
    }
    /**
     * 打开组件详细窗口
     * @param id
     */
    function buildComponentDetail(id) {
        cover.showCover();
        var container = document.createElement("div");
        var h3 = document.createElement("h3");
        var contentDiv = document.createElement("div");
        var BrowserCompatibilityBar = document.createElement("div");
        container.appendChild(h3);
        container.appendChild(contentDiv);
        container.appendChild(BrowserCompatibilityBar);
        contentDiv.setAttribute("class", "component-detail-content");
        BrowserCompatibilityBar.setAttribute("class", "popUp-toolbar-container");
        api.getComponent(id, "index.html", function (html) {
            contentDiv.innerHTML = html.replace("index.css", "component/" + id + "/index.min.css").replace("index.js", "component/" + id + "/index.min.js");
            api.getComponentList(function (json) {
                for (var index in json) {
                    if (json[index].id === id) {
                        h3.innerHTML = json[index].name_cn;
                        buildComponentDetailBrowserCompatibilityBar(json[index].compatibility, BrowserCompatibilityBar);
                    }
                }
            });
            popUp.showPopUp(undefined, "custom-popUp-win", container);
        });
    }

    /**
     * 创建组件详细页面的兼容性预览
     * @param array
     * @param parentNode
     */
    function buildComponentDetailBrowserCompatibilityBar(array, parentNode) {
        var iconClass = "";
        var dataTooltip = "";
        var version = "";
        for (var index in array) {
            switch (array[index].name) {
                case  "weChat":
                    iconClass = "i_wechat_6 wechat-icon";
                    dataTooltip = "微信";
                    if (array[index].version === "") version = "未知"; else version = array[index].version;
                    break;
                case  "chrome":
                    iconClass = "i_chrome chrome-icon";
                    dataTooltip = "Chrome";
                    if (array[index].version === "") version = "未知"; else version = array[index].version;
                    break;
                case  "firefox":
                    iconClass = "i_firefox_logotyp firefox-icon";
                    dataTooltip = "火狐";
                    if (array[index].version === "") version = "未知"; else version = array[index].version;
                    break;
                case  "ie":
                    iconClass = "i_ie ie-icon";
                    dataTooltip = "IE";
                    if (array[index].version === "") version = "未知"; else version = array[index].version;
                    break;
                case  "edge":
                    iconClass = "i_edge edge-icon";
                    dataTooltip = "Edge";
                    if (array[index].version === "") version = "未知"; else version = array[index].version;
                    break;

            }
            fontFaceIcon.buildIcon(parentNode, {
                iconClass: iconClass,
                "data-tooltip": dataTooltip,
                "attr": [{name: "version", value: version}]
            });
        }
    }

})