var instaCountdown=function(){};instaCountdown.doCountdown=function(t,n,e,o,r,a){"use strict";return new Promise(function(u){!function(t,n,e,o,r,a,u){var s=document.getElementById(t);s&&(s.style.color=u||"red");var i=setInterval(function(){var t,u=Math.round((o-(new Date).getTime())/1e3);if(u<=0)clearInterval(i),t=`${e} / Countdown is completed`,a?a.status=t:s.textContent=t,r();else{var c=Math.floor(u/60);c<10&&(c="0"+c);var d=u%60;d<10&&(d="0"+d);var l=c+":"+d;t=`${e} paused because of HTTP${n} error. Continue in ${l}.`,a?a.status=t:s.textContent=t}},1e3)}(t,n,e,o,u,r,a)})};