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
        var elText = document.getElementById("QRCodeInputText");
        if (!elText.value) {
            elText.focus();
            return;
        }
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
        var QRCodeInputText = document.createElement("textarea");
        var QRCode = document.createElement("div");
        container.appendChild(QRCodeInputText)
        container.appendChild(QRCode);
        ParentNode.appendChild(container);
        container.setAttribute("class","QRCode-container");
        QRCode.setAttribute("id","QRCode");
        QRCodeInputText.setAttribute("id","QRCodeInputText");
        QRCodeInputText.setAttribute("placeholder","输入你想生成二维码的文本");
    }
});