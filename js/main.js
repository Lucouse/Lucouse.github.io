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
                content.innerHTML = data.replace("index.css", "component/" + object.id + "/index.min.css").replace("index.js", "component/" + object.id + "/index.min.js");
                toolBar.setAttribute("class", "component-tooBar");
                buildToolBar(toolBar, object.id);
                util.buildDom([document.getElementById("container"), div, h3]);
                util.buildDom([div, content]);
                util.buildDom([div, toolBar]);
            });
        });
    }

    /**
     * 创建组件下的工具栏
     * @param toolbar
     */
    function buildToolBar(toolbar, id) {
        util.buildIcon(toolbar, {iconClass: "i_download", "data-tooltip": "下载"}, function (i) {
            i.onclick = function (ev2) {
                util.downloadComponent(id);
            };
        });
        // var downloadIconPanel = document.createElement("div");
        // var downloadDiv = document.createElement("div");
        // var downloadI = document.createElement("i");
        var reportIconPanel = document.createElement("div");
        var reportDiv = document.createElement("div");
        var reportI = document.createElement("i");
        // downloadIconPanel.setAttribute("id", "icon-panel");
        // downloadI.setAttribute("class", "i_download tooltip");
        // downloadI.setAttribute("data-tooltip", "下载");
        // downloadI.onclick = function (ev2) {
        //     util.downloadComponent(id);
        // };
        reportIconPanel.setAttribute("id", "icon-panel");
        reportI.setAttribute("class", "i_feedback tooltip");
        reportI.setAttribute("data-tooltip", "反馈");
        var a = document.createElement("a");
        var mailAddress = {address: ["aaa@a.com", "bbb@b.com"], subject: "test", cc: [], bcc: [], body: "test"};
        util.buildMailToAddress(mailAddress, function (obj) {
            a.setAttribute("href", obj);
        });
        document.body.appendChild(a);
        reportI.onclick = function (ev2) {
            a.click();
        };
        var openIconPanel = document.createElement("div");
        var openDiv = document.createElement("div");
        var openI = document.createElement("i");
        openIconPanel.setAttribute("id", "icon-panel");
        openI.setAttribute("class", "i_new_window tooltip");
        openI.setAttribute("data-tooltip", "新窗口打开");
        openI.onclick = function (ev2) {
            buildComponentDetail(id);
        };
        // util.buildDom([toolbar, downloadIconPanel, downloadDiv, downloadI]);
        util.buildDom([toolbar, reportIconPanel, reportDiv, reportI]);
        util.buildDom([toolbar, openIconPanel, openDiv, openI]);
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
        projectInfo.setAttribute("class", "project-info");
        util.buildDom([header, projectInfo]);
        util.buildDom([projectInfo, projectName]);
        util.buildDom([projectInfo, version]);
        util.buildDom([projectInfo, updateDate]);
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
        // div.setAttribute("class", "popUp-title");
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

    function buildComponentDetailBrowserCompatibilityBar(array, parentNode) {
        var iconClass = "";
        var dataTooltip = "";
        for (var index in array) {
            switch (array[index]) {
                case  "weChat":iconClass="i_wechat";dataTooltip="微信";break;
                case  "chrome":iconClass="i_chrome";dataTooltip="Chrome";break;
                case  "firefox":iconClass="i_firefox";dataTooltip="火狐";break;
                case  "ie":iconClass="i_wechat";dataTooltip="微信";break;
                case  "edge":iconClass="i_edge";dataTooltip="Edge";break;

            }
            util.buildIcon(parentNode, {iconClass: iconClass, "data-tooltip": dataTooltip});
        }
    }
};