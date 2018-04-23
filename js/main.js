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
        downloadI.setAttribute("class", "i_download");
        downloadI.onclick = function (ev2) {
            util.downloadComponent(id);
        };
        reportIconPanel.setAttribute("id", "icon-panel");
        reportI.setAttribute("class","i_feedback");
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