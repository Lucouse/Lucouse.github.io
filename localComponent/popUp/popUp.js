var PopUp = (function () {
    return {showPopUp: showPopUp};

    function showPopUp(parentNode) {
        cover.showCover();
        if (parentNode == undefined) {
            parentNode = document.body;
        }
        var popUpWin = document.createElement("div");
        var closeContainer = document.createElement("div");
        var closeDiv = document.createElement("div");
        var closeI = document.createElement("i");
        closeContainer.setAttribute("id","icon-panel");
        closeContainer.setAttribute("class","close-button-container")
        closeI.setAttribute("class","i_shut");
        closeContainer.appendChild(closeDiv).appendChild(closeI);
        popUpWin.setAttribute("class","popUpWin");

        parentNode.appendChild(popUpWin).appendChild(closeContainer).appendChild(closeDiv).appendChild(closeI);
        closeI.onclick=function (ev) {
            parentNode.removeChild(popUpWin);
            cover.removeCover();
        }
    }
});
var popUp = new PopUp;