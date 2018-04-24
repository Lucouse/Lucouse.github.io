var PopUp = (function () {
    return {showPopUp: showPopUp};

    /**
     *
     * @param parentNode
     * @param className
     */
    function showPopUp(parentNode, className,content) {
        cover.showCover();
        if (parentNode == undefined) {
            parentNode = document.body;
        }
        var popUpWin = document.createElement("div");
        var closePanel = document.createElement("div");
        var closeContainer = document.createElement("div");
        var closeDiv = document.createElement("div");
        var closeI = document.createElement("i");
        var contentDiv = document.createElement("div");
        closePanel.setAttribute("class", "close-button-container");
        closeContainer.setAttribute("id", "icon-panel");
        closeI.setAttribute("class", "i_shut");
        closePanel.appendChild(closeContainer).appendChild(closeDiv).appendChild(closeI);
        if (className !== undefined)
            popUpWin.setAttribute("class", className);
        else
            popUpWin.setAttribute("class", "popUpWin");
        contentDiv.setAttribute("class","popUp-content");
        parentNode.appendChild(popUpWin).appendChild(closePanel);
        popUpWin.appendChild(contentDiv).appendChild(content);
        closeI.onclick = function (ev) {
            parentNode.removeChild(popUpWin);
            cover.removeCover();
        }
    }
});
var popUp = new PopUp;