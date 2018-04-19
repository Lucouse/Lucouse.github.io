window.onload = function (ev) {
    api.getComponentList(function (JsonArray) {
        buildComponentListDom(JsonArray);
    });

    function buildComponentListDom(JsonArray) {
        var length = JsonArray.length > 100 ? 100 : JsonArray.length;
        JsonArray.forEach(function (object) {
            api.getComponent(object.id, function (data) {
                var div = document.createElement("div");
                var h3 = document.createElement("h3");
                div.setAttribute("class", "main-panel");
                h3.innerText = object.name_cn;
                var array = [document.getElementById("container"), div, h3, data.replace("index.css", "component/" + object.id + "/index.css")];
                util.buildDom(array);
            });
        });
    }
}