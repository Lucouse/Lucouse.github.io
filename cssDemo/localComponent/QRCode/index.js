window.onload = (function (ev) {
    init();
    main.initQRCode();

    function init() {
        var container = document.getElementById("container");
        buildQRCodePanel(container);
    }

    var qrcode = new QRCode(document.getElementById("QRCode"), {
        width: 100,
        height: 100
    });

    /**
     * 生成二维码
     */
    function makeCode() {
        var container = document.getElementsByClassName("QRCode-inputText-container")[0];
        var elText = document.getElementById("QRCodeInputText");
        var frontColor = container.getElementsByTagName("ul")[0].getElementsByTagName("li")[0].getElementsByTagName("input")[0].value;
        if (frontColor === undefined || frontColor === "" || frontColor === null)
            frontColor = "#000000";

        var backgroundColor = container.getElementsByTagName("ul")[0].getElementsByTagName("li")[0].getElementsByTagName("input")[1].value;
        if (backgroundColor === undefined || backgroundColor === "" || backgroundColor === null)
            backgroundColor = "#ffffff";
        console.log(frontColor + "," + backgroundColor);
        if (!elText.value) {
            elText.focus();
            return;
        }
        qrcode.clear();
        qrcode = new QRCode(document.getElementById("QRCode"), {
            width: 100,
            height: 100,
            colorDark:frontColor,
            colorLight:backgroundColor
        });
        qrcode.makeCode(elText.value);
    }

    /**
     * 光标移出文本框或者按下回车键触发makeCode()方法
     */
    $("#QRCodeInputText").on("blur", function () {
        makeCode();
    }).on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });

    function buildQRCodePanel(ParentNode) {
        var container = document.createElement("div");
        var QRCodeInputTextContainer = document.createElement("div");
        var QRCodeInputText = document.createElement("textarea");
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        var inputFrontColor = document.createElement("input");
        var backgroundColor = document.createElement("input");
        var QRCode = document.createElement("div");
        QRCodeInputTextContainer.appendChild(QRCodeInputText);
        QRCodeInputTextContainer.appendChild(ul);
        container.appendChild(QRCodeInputTextContainer);
        container.appendChild(QRCode);
        ParentNode.appendChild(container);
        container.setAttribute("class", "QRCode-container");
        QRCode.setAttribute("id", "QRCode");
        QRCodeInputText.setAttribute("id", "QRCodeInputText");
        QRCodeInputText.setAttribute("placeholder", "输入你想生成二维码的文本");
        QRCodeInputTextContainer.setAttribute("class", "QRCode-inputText-container");
        ul.setAttribute("class", "list-Landscape");
        inputFrontColor.setAttribute("type", "text");
        inputFrontColor.setAttribute("placeHolder", "16进制");
        backgroundColor.setAttribute("type", "text");
        backgroundColor.setAttribute("placeHolder", "16进制");

        ul.appendChild(li);
        li.appendChild(inputFrontColor);
        li.appendChild(backgroundColor);
    }
});