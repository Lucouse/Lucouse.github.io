webpackJsonp([1],{"+2jU":function(t,e,r){(function(r){var n,a,i,o;/*! jquery-qrcode v0.14.0 - https://larsjung.de/jquery-qrcode/ */!function(t){"use strict";function e(e,r,n,a){var i={},o=t(n,r);o.addData(e),o.make(),a=a||0;var s=o.getModuleCount(),c=o.getModuleCount()+2*a;return i.text=e,i.level=r,i.version=n,i.moduleCount=c,i.isDark=function(t,e){return e-=a,!(0>(t-=a)||t>=s||0>e||e>=s)&&o.isDark(t,e)},i.addBlank=function(t,e,r,n){var a=i.isDark,o=1/c;i.isDark=function(i,s){var c=s*o,u=i*o,l=c+o,f=u+o;return a(i,s)&&(t>l||c>r||e>f||u>n)}},i}function n(t,r,n,a,i){n=Math.max(1,n||1),a=Math.min(40,a||40);for(var o=n;a>=o;o+=1)try{return e(t,r,o,i)}catch(t){}}function a(t,e,r){f(r.background).is("img")?e.drawImage(r.background,0,0,r.size,r.size):r.background&&(e.fillStyle=r.background,e.fillRect(r.left,r.top,r.size,r.size));var n=r.mode;1===n||2===n?function(t,e,r){var n=r.size,a="bold "+r.mSize*n+"px "+r.fontname,i=f("<canvas/>")[0].getContext("2d");i.font=a;var o=i.measureText(r.label).width,s=r.mSize,c=o/n,u=(1-c)*r.mPosX,l=(1-s)*r.mPosY,d=u+c,g=l+s,h=.01;1===r.mode?t.addBlank(0,l-h,n,g+h):t.addBlank(u-h,l-h,d+h,g+h),e.fillStyle=r.fontcolor,e.font=a,e.fillText(r.label,u*n,l*n+.75*r.mSize*n)}(t,e,r):(3===n||4===n)&&function(t,e,r){var n=r.size,a=r.image.naturalWidth||1,i=r.image.naturalHeight||1,o=r.mSize,s=o*a/i,c=(1-s)*r.mPosX,u=(1-o)*r.mPosY,l=c+s,f=u+o,d=.01;3===r.mode?t.addBlank(0,u-d,n,f+d):t.addBlank(c-d,u-d,l+d,f+d),e.drawImage(r.image,c*n,u*n,s*n,o*n)}(t,e,r)}function i(t,e,r,n,a,i,o,s){t.isDark(o,s)&&e.rect(n,a,i,i)}function o(t,e,r,n,a,i,o,s){var c=t.isDark,u=n+i,l=a+i,f=r.radius*i,d=o-1,g=o+1,h=s-1,v=s+1,p=c(o,s),m=c(d,h),w=c(d,s),C=c(d,v),y=c(o,v),b=c(g,v),A=c(g,s),_=c(g,h),x=c(o,h);p?function(t,e,r,n,a,i,o,s,c,u){o?t.moveTo(e+i,r):t.moveTo(e,r),s?(t.lineTo(n-i,r),t.arcTo(n,r,n,a,i)):t.lineTo(n,r),c?(t.lineTo(n,a-i),t.arcTo(n,a,e,a,i)):t.lineTo(n,a),u?(t.lineTo(e+i,a),t.arcTo(e,a,e,r,i)):t.lineTo(e,a),o?(t.lineTo(e,r+i),t.arcTo(e,r,n,r,i)):t.lineTo(e,r)}(e,n,a,u,l,f,!w&&!x,!w&&!y,!A&&!y,!A&&!x):function(t,e,r,n,a,i,o,s,c,u){o&&(t.moveTo(e+i,r),t.lineTo(e,r),t.lineTo(e,r+i),t.arcTo(e,r,e+i,r,i)),s&&(t.moveTo(n-i,r),t.lineTo(n,r),t.lineTo(n,r+i),t.arcTo(n,r,n-i,r,i)),c&&(t.moveTo(n-i,a),t.lineTo(n,a),t.lineTo(n,a-i),t.arcTo(n,a,n-i,a,i)),u&&(t.moveTo(e+i,a),t.lineTo(e,a),t.lineTo(e,a-i),t.arcTo(e,a,e+i,a,i))}(e,n,a,u,l,f,w&&x&&m,w&&y&&C,A&&y&&b,A&&x&&_)}function s(t,e,r){var n,a,s=t.moduleCount,c=r.size/s,u=i;for(r.radius>0&&r.radius<=.5&&(u=o),e.beginPath(),n=0;s>n;n+=1)for(a=0;s>a;a+=1){u(t,e,r,r.left+a*c,r.top+n*c,c,n,a)}if(f(r.fill).is("img")){e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=2,e.stroke();var l=e.globalCompositeOperation;e.globalCompositeOperation="destination-out",e.fill(),e.globalCompositeOperation=l,e.clip(),e.drawImage(r.fill,0,0,r.size,r.size),e.restore()}else e.fillStyle=r.fill,e.fill()}function c(t,e){var r=n(e.text,e.ecLevel,e.minVersion,e.maxVersion,e.quiet);if(!r)return null;var i=f(t).data("qrcode",r),o=i[0].getContext("2d");return a(r,o,e),s(r,o,e),i}function u(t){return c(f("<canvas/>").attr("width",t.size).attr("height",t.size),t)}function l(t){return d&&"canvas"===t.render?u(t):d&&"image"===t.render?function(t){return f("<img/>").attr("src",u(t)[0].toDataURL("image/png"))}(t):function(t){var e=n(t.text,t.ecLevel,t.minVersion,t.maxVersion,t.quiet);if(!e)return null;var r,a,i=t.size,o=t.background,s=Math.floor,c=e.moduleCount,u=s(i/c),l=s(.5*(i-u*c)),d={position:"relative",left:0,top:0,padding:0,margin:0,width:i,height:i},g={position:"absolute",padding:0,margin:0,width:u,height:u,"background-color":t.fill},h=f("<div/>").data("qrcode",e).css(d);for(o&&h.css("background-color",o),r=0;c>r;r+=1)for(a=0;c>a;a+=1)e.isDark(r,a)&&f("<div/>").css(g).css({left:l+a*u,top:l+r*u}).appendTo(h);return h}(t)}var f=r,d=function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))}(),g={render:"canvas",minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:0,quiet:0,mode:0,mSize:.1,mPosX:.5,mPosY:.5,label:"no label",fontname:"sans",fontcolor:"#000",image:null};f.fn.qrcode=function(t){var e=f.extend({},g,t);return this.each(function(t,r){"canvas"===r.nodeName.toLowerCase()?c(r,e):f(r).append(l(e))})}}((o=function(){function t(e,r){if(void 0===e.length)throw new Error(e.length+"/"+r);var n=function(){for(var t=0;t<e.length&&0==e[t];)t+=1;for(var n=new Array(e.length-t+r),a=0;a<e.length-t;a+=1)n[a]=e[a+t];return n}(),a={getAt:function(t){return n[t]},getLength:function(){return n.length},multiply:function(e){for(var r=new Array(a.getLength()+e.getLength()-1),n=0;n<a.getLength();n+=1)for(var i=0;i<e.getLength();i+=1)r[n+i]^=p.gexp(p.glog(a.getAt(n))+p.glog(e.getAt(i)));return t(r,0)},mod:function(e){if(a.getLength()-e.getLength()<0)return a;for(var r=p.glog(a.getAt(0))-p.glog(e.getAt(0)),n=new Array(a.getLength()),i=0;i<a.getLength();i+=1)n[i]=a.getAt(i);for(i=0;i<e.getLength();i+=1)n[i]^=p.gexp(p.glog(e.getAt(i))+r);return t(n,0).mod(e)}};return a}var e=function(e,r){var n=e,a=o[r],i=null,s=0,c=null,u=new Array,l={},f=function(t,e){i=function(t){for(var e=new Array(t),r=0;t>r;r+=1){e[r]=new Array(t);for(var n=0;t>n;n+=1)e[r][n]=null}return e}(s=4*n+17),d(0,0),d(s-7,0),d(0,s-7),h(),g(),y(t,e),n>=7&&p(t),null==c&&(c=x(n,a,u)),b(c,e)},d=function(t,e){for(var r=-1;7>=r;r+=1)if(!(-1>=t+r||t+r>=s))for(var n=-1;7>=n;n+=1)-1>=e+n||e+n>=s||(i[t+r][e+n]=r>=0&&6>=r&&(0==n||6==n)||n>=0&&6>=n&&(0==r||6==r)||r>=2&&4>=r&&n>=2&&4>=n)},g=function(){for(var t=8;s-8>t;t+=1)null==i[t][6]&&(i[t][6]=t%2==0);for(var e=8;s-8>e;e+=1)null==i[6][e]&&(i[6][e]=e%2==0)},h=function(){for(var t=v.getPatternPosition(n),e=0;e<t.length;e+=1)for(var r=0;r<t.length;r+=1){var a=t[e],o=t[r];if(null==i[a][o])for(var s=-2;2>=s;s+=1)for(var c=-2;2>=c;c+=1)i[a+s][o+c]=-2==s||2==s||-2==c||2==c||0==s&&0==c}},p=function(t){for(var e=v.getBCHTypeNumber(n),r=0;18>r;r+=1){var a=!t&&1==(e>>r&1);i[Math.floor(r/3)][r%3+s-8-3]=a}for(r=0;18>r;r+=1){a=!t&&1==(e>>r&1);i[r%3+s-8-3][Math.floor(r/3)]=a}},y=function(t,e){for(var r=a<<3|e,n=v.getBCHTypeInfo(r),o=0;15>o;o+=1){var c=!t&&1==(n>>o&1);6>o?i[o][8]=c:8>o?i[o+1][8]=c:i[s-15+o][8]=c}for(o=0;15>o;o+=1){c=!t&&1==(n>>o&1);8>o?i[8][s-o-1]=c:9>o?i[8][15-o-1+1]=c:i[8][15-o-1]=c}i[s-8][8]=!t},b=function(t,e){for(var r=-1,n=s-1,a=7,o=0,c=v.getMaskFunction(e),u=s-1;u>0;u-=2)for(6==u&&(u-=1);;){for(var l=0;2>l;l+=1)if(null==i[n][u-l]){var f=!1;o<t.length&&(f=1==(t[o]>>>a&1)),c(n,u-l)&&(f=!f),i[n][u-l]=f,-1==(a-=1)&&(o+=1,a=7)}if(0>(n+=r)||n>=s){n-=r,r=-r;break}}},A=function(e,r){for(var n=0,a=0,i=0,o=new Array(r.length),s=new Array(r.length),c=0;c<r.length;c+=1){var u=r[c].dataCount,l=r[c].totalCount-u;a=Math.max(a,u),i=Math.max(i,l),o[c]=new Array(u);for(var f=0;f<o[c].length;f+=1)o[c][f]=255&e.getBuffer()[f+n];n+=u;var d=v.getErrorCorrectPolynomial(l),g=t(o[c],d.getLength()-1).mod(d);s[c]=new Array(d.getLength()-1);for(f=0;f<s[c].length;f+=1){var h=f+g.getLength()-s[c].length;s[c][f]=h>=0?g.getAt(h):0}}var p=0;for(f=0;f<r.length;f+=1)p+=r[f].totalCount;var m=new Array(p),w=0;for(f=0;a>f;f+=1)for(c=0;c<r.length;c+=1)f<o[c].length&&(m[w]=o[c][f],w+=1);for(f=0;i>f;f+=1)for(c=0;c<r.length;c+=1)f<s[c].length&&(m[w]=s[c][f],w+=1);return m},x=function(t,e,r){for(var n=m.getRSBlocks(t,e),a=w(),i=0;i<r.length;i+=1){var o=r[i];a.put(o.getMode(),4),a.put(o.getLength(),v.getLengthInBits(o.getMode(),t)),o.write(a)}var s=0;for(i=0;i<n.length;i+=1)s+=n[i].dataCount;if(a.getLengthInBits()>8*s)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*s+")");for(a.getLengthInBits()+4<=8*s&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=8*s)&&(a.put(236,8),!(a.getLengthInBits()>=8*s));)a.put(17,8);return A(a,n)};return l.addData=function(t){var e=C(t);u.push(e),c=null},l.isDark=function(t,e){if(0>t||t>=s||0>e||e>=s)throw new Error(t+","+e);return i[t][e]},l.getModuleCount=function(){return s},l.make=function(){f(!1,function(){for(var t=0,e=0,r=0;8>r;r+=1){f(!0,r);var n=v.getLostPoint(l);(0==r||t>n)&&(t=n,e=r)}return e}())},l.createTableTag=function(t,e){t=t||2;var r="";r+='<table style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: "+(e=void 0===e?4*t:e)+"px;",r+='">',r+="<tbody>";for(var n=0;n<l.getModuleCount();n+=1){r+="<tr>";for(var a=0;a<l.getModuleCount();a+=1)r+='<td style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: 0px;",r+=" width: "+t+"px;",r+=" height: "+t+"px;",r+=" background-color: ",r+=l.isDark(n,a)?"#000000":"#ffffff",r+=";",r+='"/>';r+="</tr>"}return(r+="</tbody>")+"</table>"},l.createImgTag=function(t,e){t=t||2,e=void 0===e?4*t:e;var r=l.getModuleCount()*t+2*e,n=e,a=r-e;return _(r,r,function(e,r){if(e>=n&&a>e&&r>=n&&a>r){var i=Math.floor((e-n)/t),o=Math.floor((r-n)/t);return l.isDark(o,i)?0:1}return 1})},l};e.stringToBytes=function(t){for(var e=new Array,r=0;r<t.length;r+=1){var n=t.charCodeAt(r);e.push(255&n)}return e},e.createStringToBytes=function(t,e){var r=function(){for(var r=b(t),n=function(){var t=r.read();if(-1==t)throw new Error;return t},a=0,i={};;){var o=r.read();if(-1==o)break;var s=n(),c=n()<<8|n();i[String.fromCharCode(o<<8|s)]=c,a+=1}if(a!=e)throw new Error(a+" != "+e);return i}(),n="?".charCodeAt(0);return function(t){for(var e=new Array,a=0;a<t.length;a+=1){var i=t.charCodeAt(a);if(128>i)e.push(i);else{var o=r[t.charAt(a)];"number"==typeof o?(255&o)==o?e.push(o):(e.push(o>>>8),e.push(255&o)):e.push(n)}}return e}};var r=1,n=2,a=4,i=8,o={L:1,M:0,Q:3,H:2},s=0,c=1,u=2,l=3,f=4,d=5,g=6,h=7,v=function(){var e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],o=1335,v=7973,m={},w=function(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e};return m.getBCHTypeInfo=function(t){for(var e=t<<10;w(e)-w(o)>=0;)e^=o<<w(e)-w(o);return 21522^(t<<10|e)},m.getBCHTypeNumber=function(t){for(var e=t<<12;w(e)-w(v)>=0;)e^=v<<w(e)-w(v);return t<<12|e},m.getPatternPosition=function(t){return e[t-1]},m.getMaskFunction=function(t){switch(t){case s:return function(t,e){return(t+e)%2==0};case c:return function(t,e){return t%2==0};case u:return function(t,e){return e%3==0};case l:return function(t,e){return(t+e)%3==0};case f:return function(t,e){return(Math.floor(t/2)+Math.floor(e/3))%2==0};case d:return function(t,e){return t*e%2+t*e%3==0};case g:return function(t,e){return(t*e%2+t*e%3)%2==0};case h:return function(t,e){return(t*e%3+(t+e)%2)%2==0};default:throw new Error("bad maskPattern:"+t)}},m.getErrorCorrectPolynomial=function(e){for(var r=t([1],0),n=0;e>n;n+=1)r=r.multiply(t([1,p.gexp(n)],0));return r},m.getLengthInBits=function(t,e){if(e>=1&&10>e)switch(t){case r:return 10;case n:return 9;case a:case i:return 8;default:throw new Error("mode:"+t)}else if(27>e)switch(t){case r:return 12;case n:return 11;case a:return 16;case i:return 10;default:throw new Error("mode:"+t)}else{if(!(41>e))throw new Error("type:"+e);switch(t){case r:return 14;case n:return 13;case a:return 16;case i:return 12;default:throw new Error("mode:"+t)}}},m.getLostPoint=function(t){for(var e=t.getModuleCount(),r=0,n=0;e>n;n+=1)for(var a=0;e>a;a+=1){for(var i=0,o=t.isDark(n,a),s=-1;1>=s;s+=1)if(!(0>n+s||n+s>=e))for(var c=-1;1>=c;c+=1)0>a+c||a+c>=e||(0!=s||0!=c)&&o==t.isDark(n+s,a+c)&&(i+=1);i>5&&(r+=3+i-5)}for(n=0;e-1>n;n+=1)for(a=0;e-1>a;a+=1){var u=0;t.isDark(n,a)&&(u+=1),t.isDark(n+1,a)&&(u+=1),t.isDark(n,a+1)&&(u+=1),t.isDark(n+1,a+1)&&(u+=1),(0==u||4==u)&&(r+=3)}for(n=0;e>n;n+=1)for(a=0;e-6>a;a+=1)t.isDark(n,a)&&!t.isDark(n,a+1)&&t.isDark(n,a+2)&&t.isDark(n,a+3)&&t.isDark(n,a+4)&&!t.isDark(n,a+5)&&t.isDark(n,a+6)&&(r+=40);for(a=0;e>a;a+=1)for(n=0;e-6>n;n+=1)t.isDark(n,a)&&!t.isDark(n+1,a)&&t.isDark(n+2,a)&&t.isDark(n+3,a)&&t.isDark(n+4,a)&&!t.isDark(n+5,a)&&t.isDark(n+6,a)&&(r+=40);var l=0;for(a=0;e>a;a+=1)for(n=0;e>n;n+=1)t.isDark(n,a)&&(l+=1);return r+10*(Math.abs(100*l/e/e-50)/5)},m}(),p=function(){for(var t=new Array(256),e=new Array(256),r=0;8>r;r+=1)t[r]=1<<r;for(r=8;256>r;r+=1)t[r]=t[r-4]^t[r-5]^t[r-6]^t[r-8];for(r=0;255>r;r+=1)e[t[r]]=r;var n={glog:function(t){if(1>t)throw new Error("glog("+t+")");return e[t]},gexp:function(e){for(;0>e;)e+=255;for(;e>=256;)e-=255;return t[e]}};return n}(),m=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(t,e){var r={};return r.totalCount=t,r.dataCount=e,r},r={},n=function(e,r){switch(r){case o.L:return t[4*(e-1)+0];case o.M:return t[4*(e-1)+1];case o.Q:return t[4*(e-1)+2];case o.H:return t[4*(e-1)+3];default:return}};return r.getRSBlocks=function(t,r){var a=n(t,r);if(void 0===a)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+r);for(var i=a.length/3,o=new Array,s=0;i>s;s+=1)for(var c=a[3*s+0],u=a[3*s+1],l=a[3*s+2],f=0;c>f;f+=1)o.push(e(u,l));return o},r}(),w=function(){var t=new Array,e=0,r={getBuffer:function(){return t},getAt:function(e){var r=Math.floor(e/8);return 1==(t[r]>>>7-e%8&1)},put:function(t,e){for(var n=0;e>n;n+=1)r.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return e},putBit:function(r){var n=Math.floor(e/8);t.length<=n&&t.push(0),r&&(t[n]|=128>>>e%8),e+=1}};return r},C=function(t){var r=a,n=e.stringToBytes(t),i={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var e=0;e<n.length;e+=1)t.put(n[e],8)}};return i},y=function(){var t=new Array,e={writeByte:function(e){t.push(255&e)},writeShort:function(t){e.writeByte(t),e.writeByte(t>>>8)},writeBytes:function(t,r,n){r=r||0,n=n||t.length;for(var a=0;n>a;a+=1)e.writeByte(t[a+r])},writeString:function(t){for(var r=0;r<t.length;r+=1)e.writeByte(t.charCodeAt(r))},toByteArray:function(){return t},toString:function(){var e="";e+="[";for(var r=0;r<t.length;r+=1)r>0&&(e+=","),e+=t[r];return e+"]"}};return e},b=function(t){var e=t,r=0,n=0,a=0,i={read:function(){for(;8>a;){if(r>=e.length){if(0==a)return-1;throw new Error("unexpected end of file./"+a)}var t=e.charAt(r);if(r+=1,"="==t)return a=0,-1;t.match(/^\s$/)||(n=n<<6|o(t.charCodeAt(0)),a+=6)}var i=n>>>a-8&255;return a-=8,i}},o=function(t){if(t>=65&&90>=t)return t-65;if(t>=97&&122>=t)return t-97+26;if(t>=48&&57>=t)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw new Error("c:"+t)};return i},A=function(t,e){var r=t,n=e,a=new Array(t*e),i={setPixel:function(t,e,n){a[e*r+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(r),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(r),t.writeShort(n),t.writeByte(0);var e=o(2);t.writeByte(2);for(var a=0;e.length-a>255;)t.writeByte(255),t.writeBytes(e,a,255),a+=255;t.writeByte(e.length-a),t.writeBytes(e,a,e.length-a),t.writeByte(0),t.writeString(";")}},o=function(t){for(var e=1<<t,r=1+(1<<t),n=t+1,i=s(),o=0;e>o;o+=1)i.add(String.fromCharCode(o));i.add(String.fromCharCode(e)),i.add(String.fromCharCode(r));var c=y(),u=function(t){var e=t,r=0,n=0,a={write:function(t,a){if(t>>>a!=0)throw new Error("length over");for(;r+a>=8;)e.writeByte(255&(t<<r|n)),a-=8-r,t>>>=8-r,n=0,r=0;n|=t<<r,r+=a},flush:function(){r>0&&e.writeByte(n)}};return a}(c);u.write(e,n);var l=0,f=String.fromCharCode(a[l]);for(l+=1;l<a.length;){var d=String.fromCharCode(a[l]);l+=1,i.contains(f+d)?f+=d:(u.write(i.indexOf(f),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(f+d)),f=d)}return u.write(i.indexOf(f),n),u.write(r,n),u.flush(),c.toByteArray()},s=function(){var t={},e=0,r={add:function(n){if(r.contains(n))throw new Error("dup key:"+n);t[n]=e,e+=1},size:function(){return e},indexOf:function(e){return t[e]},contains:function(e){return void 0!==t[e]}};return r};return i},_=function(t,e,r,n){for(var a=A(t,e),i=0;e>i;i+=1)for(var o=0;t>o;o+=1)a.setPixel(o,i,r(o,i));var s=y();a.write(s);for(var c=function(){var t=0,e=0,r=0,n="",a={},i=function(t){n+=String.fromCharCode(o(63&t))},o=function(t){if(0>t);else{if(26>t)return 65+t;if(52>t)return t-26+97;if(62>t)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw new Error("n:"+t)};return a.writeByte=function(n){for(t=t<<8|255&n,e+=8,r+=1;e>=6;)i(t>>>e-6),e-=6},a.flush=function(){if(e>0&&(i(t<<6-e),t=0,e=0),r%3!=0)for(var a=3-r%3,o=0;a>o;o+=1)n+="="},a.toString=function(){return n},a}(),u=s.toByteArray(),l=0;l<u.length;l+=1)c.writeByte(u[l]);c.flush();var f="";return f+="<img",f+=' src="',f+="data:image/gif;base64,",f+=c,f+='"',f+=' width="',f+=t,f+='"',f+=' height="',f+=e,f+='"',n&&(f+=' alt="',f+=n,f+='"'),f+"/>"};return e}(),function(r){a=[],void 0===(i="function"==typeof(n=r)?n.apply(e,a):n)||(t.exports=i)}(function(){return o}),function(t){t.stringToBytes=function(t){return function(t){for(var e=[],r=0;r<t.length;r++){var n=t.charCodeAt(r);128>n?e.push(n):2048>n?e.push(192|n>>6,128|63&n):55296>n||n>=57344?e.push(224|n>>12,128|n>>6&63,128|63&n):(r++,n=65536+((1023&n)<<10|1023&t.charCodeAt(r)),e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return e}(t)}}(o),o))}).call(e,r("4kSj"))},0:function(t,e){},ELCK:function(t,e){},FHy0:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});r("4kSj");var n=r("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=r("VU/8")({name:"App"},a,!1,function(t){r("nPFP")},null,null).exports,o=r("/ocq"),s=r("8+8L"),c=r("r0Pl"),u={components:{Waiting:c.a},name:"navigation",data:function(){return{project:{},headerToolList:[],waitingOpen:!1}},created:function(){var t=this;this.waitingOpen=!0,this.$http.get("/static/staticDB/project").then(function(e){void 0!==e.body.row[0]&&(t.project=e.body.row[0]),t.waitingOpen=!1}),this.$http.get("/static/staticDB/headerToolList").then(function(e){t.headerToolList=JSON.parse(e.bodyText).row,t.waitingOpen=!1})},methods:{switchPage:function(t){this.$emit("switchPage",t)}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light",attrs:{role:"navigation"}},[n("waiting",{directives:[{name:"show",rawName:"v-show",value:t.waitingOpen,expression:"waitingOpen"}]}),t._v(" "),n("a",{staticClass:"navbar-brand",attrs:{href:"#"},on:{click:function(e){t.switchPage("portal")}}},[t._v(t._s(t.project.projectName))]),t._v(" "),n("img",{staticClass:"siteQRCode",attrs:{src:r("Qn/l")}}),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},t._l(t.headerToolList,function(e){return n("ul",{key:e.name,staticClass:"navbar-nav"},[""!==e.url&&""===e.upperLayer?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(r){t.switchPage(e.url)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])]):t._e(),t._v(" "),""===e.url?n("li",{staticClass:" nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},t._l(t.headerToolList,function(r){return r.upperLayer===e.id?n("a",{key:r.name,staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){t.switchPage(r.url)}}},[t._v(t._s(r.name))]):t._e()}))]):t._e()])})),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group input-group-sm mb-3",staticStyle:{width:"12rem","margin-right":"2rem"}},[e("input",{staticClass:"form-control",attrs:{type:"text","aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"}}),this._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"}},[this._v("搜索")])])])}]};var f=r("VU/8")(u,l,!1,function(t){r("g10n")},"data-v-7f1d50f2",null).exports,d=r("tr50"),g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade",attrs:{id:"noticeModal",tabindex:"-1",role:"dialog"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[t._v(t._s(t.notice.title))]),t._v(" "),r("span",{staticClass:"text-muted align-self-end"},[t._v(t._s(t.notice.time))]),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",{staticClass:"text-body"},[t._v(t._s(t.notice.body))])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-toggle":"modal","data-target":"#noticeModal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var h=function(t){r("ELCK")},v=r("VU/8")(d.a,g,!1,h,"data-v-6354ba78",null).exports,p={components:{Waiting:c.a,noticeModal:v},name:"notice",weight:"weight:5rem",data:function(){return{notices:[],waitingOpen:!1}},created:function(){var t=this;this.waitingOpen=!0,this.$http.get("/static/staticDB/notices").then(function(e){t.notices=e.body,t.waitingOpen=!1})},methods:{openDetail:function(t){this.$refs.noticeModal.noticeModal(t)}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"float-right shadow-sm"},[t.waitingOpen?r("waiting"):t._e(),t._v(" "),r("notice-modal",{ref:"noticeModal"}),t._v(" "),r("ul",{staticClass:"pre-scrollable list-group",staticStyle:{"max-height":"85vh"}},t._l(t.notices,function(e,n){return r("li",{key:e.time+n,staticClass:"list-group-item"},[r("div",{staticStyle:{width:"20rem","max-height":"10rem","min-height":"5rem"}},[r("span",{staticClass:"text-primary text-capitalize",staticStyle:{cursor:"pointer"},on:{click:function(r){t.openDetail(e)}}},[t._v(t._s(e.title))]),t._v(" "),r("span",{staticClass:"text-muted"},[t._v(t._s(e.time))]),t._v(" "),r("p",{staticClass:"text-body text-muted text-cut"},[t._v(t._s(e.body))])])])}))],1)},staticRenderFns:[]};var w={name:"portal",components:{notice:r("VU/8")(p,m,!1,function(t){r("nbDM")},"data-v-6dd27ff8",null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  test2\n  "),e("notice",{staticClass:"h-75"})],1)},staticRenderFns:[]};var y=r("VU/8")(w,C,!1,function(t){r("gVx9")},"data-v-a7075680",null).exports,b=r("cb+6"),A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"shadow-sm qrCode mx-auto",staticStyle:{width:"40rem",height:"25rem"}},[e("div",{staticClass:"card card-body mx-auto",staticStyle:{width:"12rem",height:"12rem"},attrs:{id:"QRContainer"}}),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-group mb-3 mx-auto",staticStyle:{width:"12rem"}},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[this._v("颜色")])]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"例:#EEEEEE","aria-describedby":"basic-addon1"}})]),this._v(" "),e("div",{staticClass:"input-group mb-3 mx-auto",staticStyle:{width:"12rem"}},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[this._v("背景色")])]),this._v(" "),e("input",{staticClass:"form-control",attrs:{id:"inputBackgroundColor",type:"text",placeholder:"例:#EEEEEE","aria-describedby":"basic-addon2"}})])]),this._v(" "),e("textarea",{staticClass:"form-control mx-auto",attrs:{id:"inputText","aria-label":"With textarea"}})])])])}]};var _=function(t){r("bCbX")},x=r("VU/8")(b.a,A,!1,_,"data-v-40fe8fbc",null).exports,k=r("SOeF"),B={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal",attrs:{id:"articleModal",tabindex:"-1",role:"dialog"}},[t._m(0),t._v(" "),r("div",{staticClass:"modal-dialog",staticStyle:{"max-width":"100%",height:"calc(100% - 4rem)","max-height":"100%"},attrs:{role:"document"}},[r("div",{staticClass:"modal-content pre-scrollable",staticStyle:{"max-height":"100%",height:"100%"}},[r("div",{staticClass:"modal-body"},[t.isWaiting?r("waiting"):t._e(),t._v(" "),r("p",[t._v(t._s(t.article.body))])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close modal-footer",attrs:{type:"button","aria-label":"Close","data-toggle":"modal","data-target":"#articleModal"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var E=function(t){r("FHy0")},T={name:"articles",data:function(){return{articles:[]}},components:{articleDetail:r("VU/8")(k.a,B,!1,E,"data-v-3d5dd1db",null).exports},created:function(){var t=this;this.$http.get("/static/staticDB/articles").then(function(e){t.articles=e.body.row})},methods:{openArticleDetail:function(t,e){this.$refs.article.articleModal(t,e)}}},D={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"list-group"},t._l(t.articles,function(e){return r("li",{key:e.id,staticClass:"list-group-item"},[r("a",{attrs:{href:"#"},on:{click:function(r){t.openArticleDetail(e.id,e.name)}}},[t._v(t._s(e.name)+":"+t._s(e.time))])])})),t._v(" "),r("article-detail",{ref:"article"})],1)},staticRenderFns:[]};var S=r("VU/8")(T,D,!1,function(t){r("WE/s")},"data-v-4810ec4d",null).exports,L=r("G0J2"),P={data:function(){return{content:"<p>I am Example</p>",editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"]]}}}},components:{quillEditor:r.n(L).a},mounted:function(){var t=this;console.log("app init, my quill insrance object is:",this.quillEditor),setTimeout(function(){t.content="i am changed"},3e3)},methods:{onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.editor,r=t.html,n=t.text;console.log("editor change!",e,r,n),this.content=r}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("quill-editor")],1)},staticRenderFns:[]};var Q={data:function(){return{currentPage:"portal"}},components:{Navigation:f,portal:y,QRCode:x,Articles:S,simpleWord:r("VU/8")(P,M,!1,function(t){r("QJwV")},"data-v-64d78a26",null).exports},name:"home-page",methods:{switchPage:function(t){this.currentPage=t}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-100"},[e("navigation",{staticClass:"h-25",on:{switchPage:this.switchPage}}),this._v(" "),e(this.currentPage,{tag:"component"})],1)},staticRenderFns:[]};var U=r("VU/8")(Q,R,!1,function(t){r("noLU")},"data-v-0070246c",null).exports;n.a.use(o.a);var q=new o.a({routes:[{path:"/",name:"homePage",component:U},{path:"/QRCode",name:"QRCode",component:x}]}),O=(r("qb6w"),r("Bb4J"),r("sZxt")),I=r.n(O);n.a.use(I.a),n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:q,components:{App:i},template:"<App/>"})},QJwV:function(t,e){},"Qn/l":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAC7UlEQVR4nO2Uy47kMAwD8/8/PXvp03YeoklOgkwJ8CUt0RTL6G3btp/0mZTafzTb8DDRbOT2OQAByEkY6uyrgTjlhJGaneg4EJx9hV0AsuIHIIPZVwNRl3ZCdXom/b/pzckNIAVvABn0A2SwhHNvI2DHp+r/oh8grk/V/0U/QFyfqv+L/i6QVPANOKo3gAAEII8FotZEJwVnMut4c3ZRCyADbwAByD6Q1JkYf9P38AEIQF72PXp+ypUCm/Kg9jT8nBVALnoAApCDH8SQUv+hR5qNu1L3TmanBRCAAOSstlTYTrXhtO9K7fs5AAHIUP+ox/H2eCATI6rZJSPCou0gnR0nBRCALBgByDeQhql28I4f1bO610qGABE8q3sBRPSjelb3WgKiLtRYonGv48F5REc6gj5AAAKQ4+MIOCE5y6mhqprO7qqHr5mJAEAAsqQ52UXd6zFA2uc3Q0r5aeh/aanCAMnqf2mpwgDJ6u9oaUONJZzZu07K804fQABy0vPngRwqlENqzzrBNKBNCyAAAchZWUDUyx0dB5Sqc+fDAQhAADIG0l50Ug4cpxqPQp3dtg0giXsB8mYg6iVOT+qu1GyjXH2AhAsgbwYyuaQdgDqbejiOvrPLzu8AAchJAcQIWDXraE7KCTjVfzQLEKPH6T+aBYjR4/QfzY4zUY00vqtBOo9C1XQe19K9k6H2d4AAZKx5K5DU5amQUuGpHpxZG87kQoCs+QfIG4CkAnganGJg1UcBEIBcm1JmXwfkcCpUTwtJfUQTP+q+p/NLU8oFAJEKIE8DctdyzqLO0ikg6nfBH0AAApAzf56AYiQVhnNvY6+Jf+EAxN1r4h8gYk9qtgZkMpwyrvaoSzY0U2dnZ4AABCD3AWmEl/LZ8DC566wAAhCAnNVtQNRqgG0AdAsgAAHIxZ4Z4YmOetdd8CeajV0+ByBTDwD560BSxzE1+T4JLBDMUtjuQwDIok5qdkcLICs6qdkdLYCs6KRm/69/cyodGzcceiQAAAAASUVORK5CYII="},SOeF:function(t,e,r){"use strict";(function(t){var n=r("r0Pl");e.a={name:"article-detail",data:function(){return{article:{},isShow:!1,isWaiting:!1}},components:{waiting:n.a},methods:{articleModal:function(e,r){t("#articleModal").modal("toggle"),this.article.id=e,this.getArticle(e,r)},getArticle:function(t,e){var r=this;this.isWaiting=!0,this.$http.get("/static/articles/"+e+"-"+t+".txt").then(function(t){r.isWaiting=!1,r.article.body=t.body,r.$set(r.article,r.article)})}}}}).call(e,r("4kSj"))},"WE/s":function(t,e){},bCbX:function(t,e){},"cb+6":function(t,e,r){"use strict";(function(t){var n=r("+2jU"),a=r.n(n);e.a={name:"QRCode",comments:{qrcodejs:a.a},created:function(){t("input,textarea").on("input change",this.update)},methods:{updateQrCode:function(){var e={background:t("#inputBackgroundColor").val(),text:t("#inputText").val(),image:t("#img")[0]};t("#QRContainer").empty().qrcode(e)},update:function(){this.updateQrCode()}}}}).call(e,r("4kSj"))},g10n:function(t,e){},gVx9:function(t,e){},lsm4:function(t,e){},nPFP:function(t,e){},nbDM:function(t,e){},noLU:function(t,e){},qb6w:function(t,e){},r0Pl:function(t,e,r){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-absolute",staticStyle:{top:"0",bottom:"0",margin:"auto"}},[e("div",{staticClass:"loader1"}),this._v(" "),e("div",{staticClass:"loader2"}),this._v(" "),e("div",{staticClass:"loader3"})])}]};var a=r("VU/8")({name:"waiting"},n,!1,function(t){r("lsm4")},"data-v-9aa5330a",null);e.a=a.exports},tr50:function(t,e,r){"use strict";(function(t){e.a={name:"modal",data:function(){return{modalOpen:!1,notice:{}}},methods:{noticeModal:function(e){this.notice=e,t("#noticeModal").modal("toggle")}}}}).call(e,r("4kSj"))}},["NHnr"]);
//# sourceMappingURL=app.381922825b7c9a8491ef.js.map
