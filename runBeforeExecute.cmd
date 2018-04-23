::Merge file starting
copy /b js\api.js+js\utils.js+js\main.js+localComponent\cover\cover.js+localComponent\message\message.js+localComponent\popUp\popUp.js main.js
@echo off
echo -----------javaScript Merge completed
copy /b css\main.css+localComponent\cover\cover.css+localComponent\message\message.css+localComponent\popUp\popUp.css main.css
@echo off
echo -----------javaScript replace completed
::compress file starting
java -jar C:\Users\GuoLiangDai\Desktop\tool\closure-compiler-v20180402.jar main.js --js_output_file main.min.js
@echo off
echo -----------main.js to main.min.js compress completed
del main.js
@echo off
echo -----------main.js deleted
java -jar C:\Users\GuoLiangDai\Desktop\tool\yuicompressor-2.4.7.jar main.css -o main.min.css
echo -----------main.css to main.min.css compress completed
del main.css
@echo off
echo -----------main.css deleted
