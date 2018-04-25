/**
 * 画面覆盖层
 * source type:原生js
 */
var Cover = (function () {
    var coverDom = document.createElement("div");
    var parentNode = document.body;
    return {showCover: showCover, removeCover: removeCover};

    function showCover(parentNodeParam) {
        if (parentNodeParam != undefined) {
            parentNode = parentNodeParam;
        }
        coverDom.setAttribute("class", "cover");
        parentNode.appendChild(coverDom);
    }

    function removeCover() {
        parentNode.removeChild(coverDom);
    }
});
var cover = new Cover;