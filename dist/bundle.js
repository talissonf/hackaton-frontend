!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){console.info("Conectados loaded!"),document.getElementById("search-input").addEventListener("keydown",(function(e){if(function(e,n,t){var r=e.which||e.keyCode;return n===e.key||r===t}(e,"Enter",13)){e.preventDefault();var n=this.value;return window.location.href="/search.html?t=".concat(n),!1}})),document.getElementById("search-main")&&fetch("https://cors-anywhere.herokuapp.com/https://www.eventbrite.com.br/api/v3/destination/events/?event_ids=80054871275,80059715765,104132180154,103839733438,103279257038,104213358962,100050866836,104214163368,104213856450,99847073284,99347408774,104213766180,103636507584,100046686332,103740318084,103939499842,103940416584,103937850910,103937580100,103940093618&expand=series,event_sales_status,primary_venue,image,saves,my_collections,ticket_availability&page_size=1000",{method:"get",headers:{Authorization:"Bearer JYCYX44DBC35Y42AVDFS",Accept:"*/*"},mode:"cors",cache:"default"}).then((function(e){return e.json()})).then((function(e){var n="",t=e.events;if(console.log(t),t){for(var r=0;r<t.length;r++){var o=t[r];n+='\n                <div class="result-items col-sm-3" style="\n                margin-bottom: 5rem;\n            ">\n                <a href="/single.html">\n                  <div class="card-item">\n                    <img src="'.concat(o.image.url,'" alt="">\n                  </div>\n                  <div class="">\n                    <div class="card-info-details">\n                      <span class="card-info-title">').concat(o.name,'</span>\n                      <span class="card-info-when">').concat((new Date).toLocaleDateString("pt-br"),"</span>\n                    </div>\n                  </div>\n                </a>\n              </div>\n            ")}console.log(n),$("#results").html(n)}})).catch((function(e){return console.error("API request error",e)}))}]);