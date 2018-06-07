var Main = (function (ev) {
        return {
            initIndex: initIndex, helpInit: helpInit, initQRCode: initQRCode, initCSSAnimation: initCSSAnimation
        };

        function initIndex() {
            buildHeader();
            buildFooter();
            _hmt.push(['_trackPageview', "/"]);
        }

        function initCSSAnimation() {
            buildHeader();
            buildFooter();
            _hmt.push(['_trackPageview', "/localComponent/CSSAnimation/index.html"]);
        }

        function helpInit() {
            buildHeader();
            buildFooter();
            help.buildHelpPage(document.getElementsByClassName("container")[0]);
            _hmt.push(['_trackPageview', "/pages/help.html"]);
        }

        function initQRCode() {
            buildHeader();
            buildFooter();
        }

        /**
         * 根据项目信息创建header
         * @param json
         */
        function buildHeader() {
            api.getProjectInfo(function (json) {
                var header = document.createElement("div");
                header.setAttribute("class", "header");
                document.body.appendChild(header);
                var projectInfo = document.createElement("div");

                var projectQRCodeContainer = document.createElement("div");
                var projectQRCode = document.createElement("img");
                projectQRCodeContainer.setAttribute("class", "projectQRCodeContainer");
                projectQRCode.setAttribute("src", "images/siteQRCode.png");
                projectQRCode.setAttribute("class", "projectQRCode");

                var a = document.createElement("a");
                var projectName = document.createElement("h2");
                var version = document.createElement("div");
                var updateDate = document.createElement("div");

                projectName.innerText = json.projectName;
                version.innerText = json.version;
                updateDate.innerText = json.latestUpdateDate;
                projectInfo.setAttribute("class", "project-info");
                a.setAttribute("href", "https://lucouse.github.io");
                util.buildDom([header, projectInfo]);
                //网站二维码
                util.buildDom([header, projectQRCodeContainer, projectQRCode]);
                //网站名
                util.buildDom([projectInfo, a, projectName]);
                util.buildDom([projectInfo, version]);
                util.buildDom([projectInfo, updateDate]);
                buildHeaderToolBar(header, json.headerToolList);
            });
        }

        /**
         * 创建footer
         */
        function buildFooter() {
            var info = document.createElement("div");
            var ul = document.createElement("ul");
            ul.setAttribute("class", "footer-ul list-Landscape");
            var array = [{name: "帮助", url: "https://lucouse.github.io/pages/help.html"}];
            for (var index in array) {
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.innerHTML = array[index].name;
                a.setAttribute("href", array[index].url);
                a.setAttribute("target", "_blank");
                li.appendChild(a);
                ul.appendChild(li);
            }
            var secLi = document.createElement("li");
            var secUl = document.createElement("ul");
            var liText = document.createElement("li");
            liText.innerHTML = "contact us @";
            secUl.appendChild(liText);
            secUl.setAttribute("id", "contact-us");
            var array = [{
                iconClass: {
                    iconClass: "i_github github-icon none-shadow"
                },
                url: "https://github.com/Lucouse"
            }];
            for (var index in array) {
                var iconLi = document.createElement("li");
                var a = document.createElement("a");
                a.setAttribute("href", array[index].url);
                secUl.appendChild(iconLi).appendChild(a);
                fontFaceIcon.buildIcon(a, array[index].iconClass, function (i) {
                    i.click = (function () {
                        window.location = array[index].url;
                    });
                });
            }
            secLi.appendChild(secUl);
            ul.appendChild(secLi);
            info.appendChild(ul);
            info.innerHTML = info.innerHTML + "<div class='sfont-link-style'>Font made from <a href=\"http://www.sfont.cn\">SFont</a> is licensed by CC BY 3.0</div>";
            footer.buildFooter(undefined, info);
        }


        /**
         * 创建header上的工具栏
         * @param header
         * @param array
         */
        function buildHeaderToolBar(header, array) {
            var ul = document.createElement("ul");
            ul.setAttribute("class", "list-Landscape header-toolBar");
            for (var index in array) {
                var li = document.createElement("li");
                li.innerHTML = array[index].name;
                ul.appendChild(li);
                var subUl = document.createElement("ul");
                subUl.setAttribute("class", "list-vertical");
                li.appendChild(subUl);
                for (var subIndex in array[index].list) {
                    var subLi = document.createElement("li");
                    var a = document.createElement("a");
                    a.innerHTML = array[index].list[subIndex].name;
                    a.setAttribute("href", array[index].list[subIndex].url);
                    a.setAttribute("target", "_blank");
                    subLi.appendChild(a);
                    subUl.appendChild(subLi);
                }
            }
            header.appendChild(ul);
        }
    }

);
var main = new Main;