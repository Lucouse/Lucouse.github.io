/**
 *创建help页面
 * source type:原生js
 */
var Help = (function () {
    var array = "";
    return {buildHelpPage: buildHelpPage};

    /**
     *创建help页面
     * @param parentNode
     */
    function buildHelpPage(parentNode) {
        if (parentNode == undefined)
            parentNode = document.body;
        var left = document.createElement("div");
        var right = document.createElement("div");
        left.setAttribute("class", "help-page-left-menu");
        right.setAttribute("class", "help-page-right-content");
        parentNode.appendChild(left);
        parentNode.appendChild(right);
        api.getHelpInfo(function (json) {
            array = json;
            buildLeftClassification(left);
            buildRightContent(right);
        });
    }

    /**
     *创建左侧分类menu
     * @param parentNode
     */
    function buildLeftClassification(parentNode) {
        if (parentNode == undefined)
            parentNode = document.body;
        var ul = document.createElement("ul");
        ul.setAttribute("class", "list-vertical");
        for (var index in array) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.innerHTML = array[index].name;
            a.setAttribute("href", "#" + array[index].id);
            ul.appendChild(li).appendChild(a);
        }
        parentNode.appendChild(ul);
    }

    /**
     * 创建右侧内容
     * @param parentNode
     */
    function buildRightContent(parentNode) {
        for (var index in array) {
            var contentDiv = document.createElement("div");
            var h3 = document.createElement("h3");
            var a = document.createElement("a");
            var content = document.createElement("p");
            a.setAttribute("id", array[index].id);
            a.innerHTML = array[index].name;
            content.innerHTML = array[index].content;
            contentDiv.appendChild(h3).appendChild(a);
            contentDiv.appendChild(content);
            parentNode.appendChild(contentDiv);
        }
    }
});
var help = new Help;