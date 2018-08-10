var Footer = (function () {
    return {buildFooter: buildFooter};

    function buildFooter(parentNode, subNode) {
        if (parentNode == undefined) parentNode = document.body;
        var header = document.createElement("div");
        header.setAttribute("class","footer");
        parentNode.appendChild(header).appendChild(subNode);
    }
});
var footer = new Footer;