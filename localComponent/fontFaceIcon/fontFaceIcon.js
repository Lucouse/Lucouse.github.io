/**
 * 利用@font-face制作icon
 * source type:原生js
 */
var FontFaceIcon = (function () {
    return{
        buildIcon:buildIcon
    };
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
        for (var index in json.attr) {
            iconPanel.setAttribute(json.attr[index].name, json.attr[index].value);
        }
        parentNode.appendChild(iconPanel).appendChild(div).appendChild(i);
        if (callback !== undefined)
            callback(i);
    }
});
var fontFaceIcon = new FontFaceIcon;