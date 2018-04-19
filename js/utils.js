var Util = (function () {
    return {buildDom: buildDom, download: download, buildZip: buildZip};

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

    function download(id) {
        api.getComponent(id, "index.html", function (data) {
            api.getComponent(id, "index.css", function (data2) {
                var json = {
                    folder: {
                        name: id,
                        file: [{
                            name: "index.html",
                            value: data
                        }, {
                            name: "index.css",
                            value: data2
                        }]
                    }
                }
                buildZip(json);
            });
        });
    }

    function buildZip(json) {
        var zip = new JSZip();
        var folder = zip.folder(json.folder.name);
        folder.file(json.folder.file[0].name, json.folder.file[0].value);
        folder.file(json.folder.file[1].name, json.folder.file[1].value);
        folder.generateAsync({type: "base64"}).then(function (base64) {
            location.href = "data:application/zip;base64," + base64;
        })
    }
});
var util = new Util;