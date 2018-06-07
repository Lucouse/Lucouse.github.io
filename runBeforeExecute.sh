#!/usr/bin/env bash
echo compress starting
cat localComponent/footer/footer.js localComponent/header/header.js js/utils.js js/api.js js/help.js js/main.js localComponent/cover/cover.js localComponent/message/message.js localComponent/popUp/popUp.js localComponent/fontFaceIcon/fontFaceIcon.js js/baiduTongji.js>main.js
echo -----------javaScript Merge completed
cat css/main.css localComponent/cover/cover.css localComponent/message/message.css localComponent/popUp/popUp.css localComponent/fontFaceIcon/fontFaceIcon.css localComponent/footer/footer.css localComponent/header/header.css>main.css
echo -----------css replace completed
java -jar /media/daiguoliang/Acer/Users/代国亮/Desktop/工具/closure-compiler-v20180402.jar main.js --js_output_file main.min.js
echo -----------main.js to main.min.js compress completed
rm main.js
echo -----------main.js deleted
java -jar /media/daiguoliang/Acer/Users/代国亮/Desktop/工具/yuicompressor-2.4.7.jar main.css -o main.min.css
echo -----------main.css to main.min.css compress completed
rm main.css
echo -----------main.css deleted
echo compress completed