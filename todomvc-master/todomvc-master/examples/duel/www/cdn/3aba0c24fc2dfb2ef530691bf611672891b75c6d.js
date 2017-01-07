/*
 DUEL v0.9.7 http://duelengine.org
 Copyright (c)2006-2012 Stephen M. McKamey.
 Licensed under The MIT License.
*/
var duel=function(m,C,D){function y(a){this.value=a}function l(a){return"function"===typeof a}function k(a){switch(typeof a){case "object":return!a?0:z(a)?2:a instanceof y?5:a instanceof Date?4:3;case "function":return 1;case "undefined":return 0;default:return 4}}function p(a){z(a)||(a=["",a]);this.value=a}function r(a,b){switch(k(b)){case 2:if(""===b[0])for(var d=1,f=b.length;d<f;d++)r(a,b[d]);else a.push(b);break;case 3:if(1===a.length)a.push(b);else if(d=a[1],3===k(d))for(f in b)b.hasOwnProperty(f)&&
(d[f]=b[f]);else a.splice(1,0,b);break;case 4:""!==b&&(b=""+b,d=a.length-1,0<d&&4===k(a[d])?a[d]+=b:a.push(b));break;case 0:break;default:a.push(b)}}function s(a,b,d,f,c,e){var g=3===k(a[1]);if(a.length===(g?3:2))return n(a[a.length-1],b,d,f,c,e);for(var h=[""],g=g?2:1,j=a.length;g<j;g++)r(h,n(a[g],b,d,f,c,e));return h}function E(a,b,d,f,c,e){for(var g=1,h=a.length;g<h;g++){var j=a[g],i=j[1].test;if(3===k(j[1])&&i&&(l(i)&&(i=i(b,d,f,c)),!i))continue;return s(j,b,d,f,c,e)}return null}function q(){this.value=
q.FAST?"":[]}function O(a){if("string"!==typeof a)return null!==a&&a!==D?""+a:"";var b={"&":"&amp;","<":"&lt;",">":"&gt;"};return a.replace(/[&<>]/g,function(a){return b[a]||a})}function P(a){if("string"!==typeof a)return null!==a&&a!==D?""+a:"";var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};return a.replace(/[&<>"]/g,function(a){return b[a]||a})}function F(a,b){var d=b[0]||"",f=b.length,c=1,e,g=Q[d];if("!"===d.charAt(0))"!doctype"===b[0].toLowerCase()?a.append("<!doctype ",b[1],">"):a.append("<\!--",
b[1],"--\>");else{if(d){a.append("<",d);e=b[c];if(3===k(e)){for(var h in e)if(e.hasOwnProperty(h)){var j=e[h];if(G[h.toLowerCase()])if(j)j=h;else continue;0!==k(j)&&(a.append(" ",h),a.append('="',P(j),'"'))}c++}g&&a.append(" /");a.append(">")}for(;c<f;c++)e=b[c],z(e)?F(a,e):a.append(O(e));d&&!g&&a.append("</",d,">");return a}}function H(a){try{return F(new q,a).toString()}catch(b){return a=v(b),a instanceof p?H(a.value):""+a}}function t(a){if(a){if("!"===a.charAt(0))return m.createComment("!"===a?
"":a.substr(1)+" ")}else{if(m.createDocumentFragment)return m.createDocumentFragment();a=""}return"style"===a.toLowerCase()&&m.createStyleSheet?m.createStyleSheet():m.createElement(a)}function w(a,b){if(b){var d=(a.tagName||"").toLowerCase();if(8===a.nodeType)3===b.nodeType&&(a.nodeValue+=b.nodeValue);else if("table"===d&&a.tBodies)if(b.tagName)if((d=b.tagName.toLowerCase())&&"tbody"!==d&&"thead"!==d){var f=0<a.tBodies.length?a.tBodies[a.tBodies.length-1]:null;f||(f=t("th"===d?"thead":"tbody"),a.appendChild(f));
f.appendChild(b)}else!1!==a.canHaveChildren&&a.appendChild(b);else{if(11===b.nodeType)for(;b.firstChild;)w(a,b.removeChild(b.firstChild))}else if("style"===d&&m.createStyleSheet)a.cssText=b;else if(!1!==a.canHaveChildren)a.appendChild(b);else if("object"===d&&b.tagName&&"param"===b.tagName.toLowerCase()){try{a.appendChild(b)}catch(c){}try{a.object&&(a.object[b.name]=b.value)}catch(e){}}}}function I(a,b,d){"on"===b.substr(0,2)&&(b=b.substr(2));switch(typeof d){case "function":if(a.addEventListener)a.addEventListener(b,
d,!1);else if(l(window.jQuery)&&0!==k(a[b]))if(a=window.jQuery(a),l(a.on))a.on(b,d);else a.bind(b,d);else if(a.attachEvent&&0!==k(a[b]))a.attachEvent("on"+b,d);else{var f=a["on"+b]||a[b];a["on"+b]=a[b]=!l(f)?d:function(a){return!1!==f.call(this,a)&&!1!==d.call(this,a)}}break;case "string":a["on"+b]=new Function("event",d)}}function J(a){return!!a&&3===a.nodeType&&(!a.nodeValue||!/\S/.exec(a.nodeValue))}function K(a,b){a&&(3===a.nodeType&&b.exec(a.nodeValue))&&(a.nodeValue=a.nodeValue.replace(b,""))}
function A(a){if(a){for(;J(a.firstChild);)a.removeChild(a.firstChild);for(K(a.firstChild,R);J(a.lastChild);)a.removeChild(a.lastChild);K(a.lastChild,S)}}function L(a,b){var d=a[b];if(d){try{delete a[b]}catch(f){try{a[b]="",a.removeAttribute(b)}catch(c){}}if(!l(d))try{d=new Function(""+d)}catch(e){d=null}}return d}function M(a){if(a){var b=L(a,"$init");b&&b.call(a);(b=L(a,"$load"))?setTimeout(function(){b.call(a);b=a=null},0):b=a=null}}function N(a,b){for(var d=1,f=b.length;d<f;d++){var c=b[d];switch(k(c)){case 2:var e=
c[0],c=N(t(e),c);if("html"===e)return A(c),M(c),c;w(a,c);break;case 4:""!==c&&w(a,m.createTextNode(""+c));break;case 3:if(1===a.nodeType){var e=a,g=c;if(g.name&&m.attachEvent&&!e.parentNode)try{var h=t("<"+e.tagName+' name="'+g.name+'">');e.tagName===h.tagName&&(e=h)}catch(j){}c=void 0;for(c in g)if(g.hasOwnProperty(c)){var i=g[c],l=k(i);if(c&&0!==l)if(c=T[c.toLowerCase()]||c,"style"===c)0!==k(e.style.cssText)?e.style.cssText=i:e.style=i;else if("on"===c.substr(0,2))I(e,c,i),(c=u[c])&&I(e,c,i);else if(!U[c.toLowerCase()]&&
(4!==l||"$"===c.charAt(0)||0!==k(e[c])||0!==k(e[u[c]])))try{e[c]=i,(c=u[c])&&(e[c]=i)}catch(n){if(!("type"===c.toLowerCase()&&"input"===e.tagName.toLowerCase()))throw Error("DOM property "+e.tagName+"."+c+": "+n);}else G[c.toLowerCase()]?i&&(e.setAttribute(c,c),(c=u[c])&&e.setAttribute(c,c)):(e.setAttribute(c,i),(c=u[c])&&e.setAttribute(c,i))}a=e}break;case 5:e=w;g=a;i=c;c=t("div");c.innerHTML=""+i;A(c);if(1===c.childNodes.length)c=c.firstChild;else{for(i=t("");c.firstChild;)i.appendChild(c.firstChild);
c=i}e(g,c)}}A(a);M(a);11===a.nodeType&&1===a.childNodes.length&&(a=a.firstChild);return a}y.prototype.toString=function(){return this.value};var z=Array.isArray||function(a){return a instanceof Array},B,n;n=function(a,b,d,f,c,e){switch(k(a)){case 1:return a(b,d,f,c);case 2:var g=a[0]||"";switch(g){case "$for":a:{var h=a[1]||{},g=[""],j;if(h.hasOwnProperty("count")){j=h.count;l(j)&&(j=j(b,d,f,c));h.hasOwnProperty("data")?(h=h.data,l(h)&&(h=h(b,d,f,c))):h=b;for(b=0;b<j;b++)r(g,s(a,h,b,j,null,e))}else{if(h.hasOwnProperty("in")){var i=
h["in"];l(i)&&(i=i(b,d,f,c));if(3===k(i)){h=[];for(j in i)i.hasOwnProperty(j)&&h.push(j);b=0;for(j=h.length;b<j;b++)r(g,s(a,i[h[b]],b,j,h[b],e));a=g;break a}h=i}else h=h.each,l(h)&&(h=h(b,d,f,c));b=k(h);if(2===b){b=0;for(j=h.length;b<j;b++)r(g,s(a,h[b],b,j,null,e))}else 0!==b&&(g=s(a,h,0,1,null,e))}a=g}return a;case "$xor":return E(a,b,d,f,c,e);case "$if":return E(["$xor",a],b,d,f,c,e);case "$call":e=a[1]||{};if(e.view){g=n(e.view,b,d,f,c);h=e.hasOwnProperty("data")?n(e.data,b,d,f,c):b;j=e.hasOwnProperty("index")?
n(e.index,b,d,f,c):d;i=e.hasOwnProperty("count")?n(e.count,b,d,f,c):f;b=e.hasOwnProperty("key")?n(e.key,b,d,f,c):c;d={};for(f=a.length-1;2<=f;f--)c=a[f],e=c[1]||{},e.hasOwnProperty("name")&&(d[e.name]=c);a=g&&l(g.getView)?n(g.getView(),h,j,i,b,d):null}else a=null;return a;case "$part":return g=(a[1]||{}).name||"",g=e&&e.hasOwnProperty(g)?e[g]:a,s(g,b,d,f,c)}g=[g];h=1;for(j=a.length;h<j;h++)r(g,n(a[h],b,d,f,c,e));return B?B(g):g;case 3:e={};for(g in a)a.hasOwnProperty(g)&&(e[g]=n(a[g],b,d,f,c));return e}return a};
var G={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,compact:1,controls:1,declare:1,"default":1,defaultchecked:1,defaultmuted:1,defaultselected:1,defer:1,disabled:1,draggable:1,enabled:1,formnovalidate:1,hidden:1,indeterminate:1,inert:1,ismap:1,itemscope:1,loop:1,multiple:1,muted:1,nohref:1,noresize:1,noshade:1,novalidate:1,nowrap:1,open:1,pauseonexit:1,readonly:1,required:1,reversed:1,scoped:1,seamless:1,selected:1,sortable:1,spellcheck:1,translate:1,truespeed:1,typemustmatch:1,visible:1},
v=function(a){return"[ "+a+" ]"},x=function(a){if(!l(a)||!l(a.getView)){var b=a;2!==k(b)&&(b=["",b]);a=function(a,f,c,e){try{var g=n(b,a,isFinite(f)?f:0,isFinite(c)?c:1,"string"===typeof e?e:null);return new p(g)}catch(h){return a=v(h),a instanceof p?a:new p(""+a)}};a.getView=function(){return b}}return a};x.onerror=function(a){l(a)&&(v=a)};x.onbind=function(a){l(a)&&(B=a)};x.raw=function(a){return new y(a)};var Q={area:1,base:1,basefont:1,br:1,col:1,frame:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,
link:1,menuitem:1,meta:1,param:1,source:1,track:1,wbr:1};q.FAST=!(C&&9>C());q.prototype.append=function(a,b,d){var f=arguments;q.FAST?(f=f.length,1<f&&(2<f&&(b+=d),a+=b),this.value+=a):this.value.push.apply(this.value,f)};q.prototype.toString=function(){return q.FAST?this.value:this.value.join("")};p.prototype.toString=function(){return H(this.value)};p.prototype.write=function(a){(a||m).write(""+this)};var T={allowfullscreen:"allowFullscreen",accesskey:"accessKey",bgcolor:"bgColor",cellpadding:"cellPadding",
cellspacing:"cellSpacing",checked:"defaultChecked","class":"className",colspan:"colSpan",contenteditable:"contentEditable",defaultchecked:"defaultChecked",defaultselected:"defaultSelected",defaultmuted:"defaultMuted","for":"htmlFor",formnovalidate:"formNoValidate",hidefocus:"hideFocus",ismap:"isMap",itemscope:"itemScope",maxlength:"maxLength",muted:"defaultMuted",nohref:"noHref",noresize:"noResize",noshade:"noShade",novalidate:"noValidate",nowrap:"noWrap",pauseonexit:"pauseOnExit",readonly:"readOnly",
rowspan:"rowSpan",selected:"defaultSelected",spellcheck:"spellCheck",tabindex:"tabIndex",truespeed:"trueSpeed",typemustmatch:"typeMustMatch",usemap:"useMap",willvalidate:"willValidate"},u={enctype:"encoding",onscroll:"DOMMouseScroll"},U={autocapitalize:1,autocomplete:1,autocorrect:1,type:1},R=/^[\r\n]+/,S=/[\r\n]+$/;p.prototype.toDOM=function(a,b){4===k(a)&&(a=m.getElementById(a)||("querySelector"in m?m.querySelector(a):null));var d;try{b&&(d=a,a=null),d=N(d||t(this.value[0]),this.value)}catch(f){var c=
v(f);if(c instanceof p)return c.toDOM(a||d);d=m.createTextNode(""+c)}a&&a.parentNode&&a.parentNode.replaceChild(d,a);return d};p.prototype.reload=function(){var a=m;try{var b=this.toDOM();a.replaceChild(b,a.documentElement);if(a.createStyleSheet){for(var d=b.firstChild;d&&"HEAD"!==(d.tagName||"");)d=d.nextSibling;for(var f=d&&d.firstChild;f;){if("LINK"===(f.tagName||""))f.href=f.href;f=f.nextSibling}}}catch(c){a=a.open("text/html"),a.write(""+this),a.close()}};return x}(document,window.ScriptEngineMajorVersion);var todos=todos||{};todos.views=todos.views||{};
todos.views.Stats=duel([""," ",["$if",{test:function(a){return a.total}},["footer",{"class":"footer"}," ",["span",{"class":"todo-count"},["strong",function(a){return a.active}]," ",function(a){return 1===a.active?"item":"items"}," left"]," ",["ul",{"class":"filters"}," ",["li"," ",["a",{href:"#/","class":function(a){return!a.filter?"selected":null}},"All"]," "]," ",["li"," ",["a",{href:"#/active","class":function(a){return"active"===a.filter?"selected":null}},"Active"]," "]," ",["li"," ",["a",{href:"#/completed",
"class":function(a){return"completed"===a.filter?"selected":null}},"Completed"]," "]," "]," "," ",["$if",{test:function(a){return a.completed}},["button",{"class":"clear-completed",onclick:function(){return todos.actions.clearOnClick}},"Clear completed"]]]]]);var todos=todos||{};todos.views=todos.views||{};
todos.views.Task=duel([""," ",["li",{"class":function(a){return a.completed?"completed":""}}," ",["div",{"class":"view"}," ",["input",{"class":"toggle",type:"checkbox",checked:function(a){return a.completed},onchange:function(a){return todos.actions.completedOnChange(a.id)}}]," ",["label",{ondblclick:function(){return todos.actions.editOnDblclick}},function(a){return a.title}]," ",["button",{"class":"destroy",onclick:function(a){return todos.actions.removeOnClick(a.id)}}]," "]," ",["input",{"class":"edit",
type:"text",value:function(a){return a.title},onblur:function(a){return todos.actions.editOnBlur(a.id)},onkeydown:function(a){return todos.actions.editOnKeydown(a.id)}}]]]);var todos=todos||{};todos.views=todos.views||{};
todos.views.Tasks=duel([""," ",["$if",{test:function(a){return a.tasks&&a.tasks.length}},["section",{"class":"main"}," ",["input",{"class":"toggle-all",type:"checkbox",checked:function(a){return!a.stats.active},onchange:function(){return todos.actions.toggleOnChange}}]," ",["label",{"for":"toggle-all"},"Mark all as complete"]," ",["ul",{"class":"todo-list"}," ",["$for",{each:function(a){return a.tasks}}," ",["$call",{view:function(){return todos.views.Task}}]]," "]]]]);var todos=todos||{};todos.views=todos.views||{};todos.views.TodoApp=duel(["section",{"class":"todoapp"}," ",["header",{"class":"header"}," ",["h1","todos"]," ",["input",{"class":"new-todo",placeholder:"What needs to be done?",autofocus:!0,onblur:function(){return todos.actions.add_blur},onkeydown:function(){return todos.actions.addOnKeydown}}]," "]," ",["$call",{view:function(){return todos.views.Tasks},data:function(a){return a}}]," ",["$call",{view:function(){return todos.views.Stats},data:function(a){return a.stats}}]]);var todos=todos||{};
(function(j,f,h){function g(a){return c.filter(function(b){return b.id===a})[0]}function d(){var a="undefined"!==typeof JSON?JSON.stringify(c):c;f.setItem(h,a)}var c,e;if(!(e=f)){var i={};e={getItem:function(a){return i[a]},setItem:function(a,b){i[a]=b}}}f=e;c=(e=f.getItem(h))?"undefined"!==typeof JSON?JSON.parse(e):e:[];j.model={viewData:function(a){var b;if("completed"===a||"active"===a){var d="completed"===a;b=c.filter(function(a){return a.completed===d})}else b=c;a={total:c.length,completed:c.filter(function(a){return a.completed}).length,
filter:a||""};a.active=a.total-a.completed;return{tasks:b,stats:a}},add:function(a){a={id:((new Date).getTime()+Math.random()).toString(36),title:a,completed:!1};c.push(a);d();return a},find:g,edit:function(a,b){(g(a)||{}).title=b;d()},toggle:function(a,b){(g(a)||{}).completed=b;d()},toggleAll:function(a){c.forEach(function(b){b.completed=a});d()},remove:function(a){for(var b=c.length-1;0<=b;b--)c[b].id===a&&c.splice(b,1);d()},expunge:function(){for(var a=c.length-1;0<=a;a--)c[a].completed&&c.splice(a,
1);d()}}})(todos,window.localStorage,"todos-duel");var todos=todos||{};
(function(b,e){function d(){var a=b.model.viewData(e.location.hash.substr(2)),a=b.views.TodoApp(a).toDOM(),c=e.querySelector(".todoapp");c?c.parentNode.replaceChild(a,c):e.body.insertBefore(a,e.body.firstChild);e.querySelector(".new-todo").focus()}addEventListener("hashchange",d,!1);b.actions={addOnKeydown:function(a){13===a.keyCode?(a=(this.value||"").trim(),this.value="",a&&(b.model.add(a),d())):27===a.keyCode&&d()},editOnBlur:function(a){return function(){var c=(this.value||"").trim();(this.value=
c)?b.model.edit(a,c):b.model.remove(a);d()}},editOnKeydown:function(a){return function(c){if(13===c.keyCode)this.blur();else if(27===c.keyCode){if(c=b.model.find(a))this.value=c.title;this.blur()}}},removeOnClick:function(a){return function(){b.model.remove(a);d()}},clearOnClick:function(){b.model.expunge();d()},editOnDblclick:function(){for(var a=this;"LI"!==a.tagName;)a=a.parentNode;a.className="editing";(a=(a||e).querySelector("input[type=text]"))&&a.focus()},completedOnChange:function(a){return function(){b.model.toggle(a,
this.checked);d()}},toggleOnChange:function(){b.model.toggleAll(this.checked);d()}};d()})(todos,window.document);