window.onload = function (ev) {
    api.getComponentList(function (JsonArray) {
        buildComponentListDom(JsonArray);
    });

    function buildComponentListDom(JsonArray) {
        JsonArray.forEach(function (object) {
            api.getComponent(object.id,"index.html", function (data) {
                var div = document.createElement("div");
                var h3 = document.createElement("h3");
                var content = document.createElement("div");
                var toolBar = document.createElement("div");
                div.setAttribute("class", "main-panel");
                h3.innerText = object.name_cn;
                content.innerHTML = data.replace("index.css", "component/" + object.id + "/index.min.css");
                toolBar.setAttribute("class","component-tooBar");
                buildToolBar(toolBar,object.id);
                var array = [document.getElementById("container"), div, h3,content,toolBar];
                util.buildDom(array);
            });
        });
    }

    /**
     * 创建组件下的工具栏
     * @param toolbar
     */
    function buildToolBar(toolbar,id) {
        var downloadIconPanel = document.createElement("div");
        var div = document.createElement("div");
        var i= document.createElement("i");
        downloadIconPanel.setAttribute("id","icon-panel");
        i.setAttribute("class","i_download");
        i.onclick=function (ev2) { util.downloadComponent(id); };
        util.buildDom([toolbar,downloadIconPanel,div,i])
    }
};