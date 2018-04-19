var Util = (function () {
    return {buildDom: buildDom};

    function buildDom(Array) {
        var length = Array.length;
        Array.forEach(function (value, index) {
            if (index + 2 < length) {
                value.appendChild(Array[index + 1]);
            } else if (index + 1 < length) {
                Array[index - 1].innerHTML = Array[index - 1].innerHTML + Array[index + 1];
            }
        })
    }
});
var util = new Util;