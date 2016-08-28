jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){"use strict"
;function r(n){s[n]||(s[n]=!0,e.migrateWarnings.push(n),t.console&&console.warn&&!
e.migrateMute&&console.warn("JQMIGRATE: "+n))}function i(t,i,s,o){if(Object.defineProperty
)try{return Object.defineProperty(t,i,{configurable:!0,enumerable:!0,get:function(
){return r(o),s},set:function(e){r(o),s=e}}),n}catch(u){}e._definePropertyBroken=!0
,t[i]=s}var s={};e.migrateWarnings=[],e.migrateReset=function(){s={},e.migrateWarnings
.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode"
);var o={},u=e.attr,a=e.attrHooks.value&&e.attrHooks.value.get||function(){return null
},f=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i
,c=/^[238]$/,h=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
,p=/^(?:checked|selected)$/i;i(e,"attrFn",o,"jQuery.attrFn is deprecated"),e.attr=
function(t,i,s,o){var a=i.toLowerCase(),f=t&&t.nodeType;return o&&(r("jQuery.fn.attr( props, pass ) is deprecated"
),t&&!c.test(f)&&e.isFunction(e.fn[i]))?e(t)[i](s):("type"===i&&s!==n&&l.test(t.nodeName
)&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[a]&&
h.test(a)&&(e.attrHooks[a]={get:function(t,r){var i,s=e.prop(t,r);return s===!0||"boolean"!=typeof 
s&&(i=t.getAttributeNode(r))&&i.nodeValue!==!1?r.toLowerCase():n},set:function(t,
n,r){var i;return n===!1?e.removeAttr(t,r):(i=e.propFix[r]||r,i in t&&(t[i]=!0),t
.setAttribute(r,r.toLowerCase())),r}},p.test(a)&&r("jQuery.fn.attr("+a+") may use property instead of attribute"
)),u.call(e,t,i,s))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").
toLowerCase();return"button"===n?a.apply(this,arguments):("input"!==n&&"option"!==
n&&r("property-based jQuery.fn.attr('value') is deprecated"),t in e?e.value:null)
},set:function(e,t){var i=(e.nodeName||"").toLowerCase();return"button"===i?f.apply
(this,arguments):("input"!==i&&"option"!==i&&r("property-based jQuery.fn.attr('value', val) is deprecated"
),e.value=t,n)}};var d,v,m=e.fn.init,g=/^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;e.fn
.init=function(t,n,i){var s;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(s=
g.exec(t))&&s[1]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"
),n&&n.context&&(n=n.context),e.parseHTML)?m.call(this,e.parseHTML(e.trim(t),n,!0
),n,i):m.apply(this,arguments)},e.fn.init.prototype=e.fn,e.uaMatch=function(e){e=
e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec
(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e
.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser
:t[1]||"",version:t[2]||"0"}},d=e.uaMatch(navigator.userAgent),v={},d.browser&&(v
[d.browser]=!0,v.version=d.version),v.chrome?v.webkit=!0:v.webkit&&(v.safari=!0),
e.browser=v,i(e,"browser",v,"jQuery.browser is deprecated"),e.sub=function(){function t
(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=
this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,i){return i&&i instanceof 
e&&!(i instanceof t)&&(i=t(i)),e.fn.init.call(this,r,i,n)},t.fn.init.prototype=t.
fn;var n=t(document);return r("jQuery.sub() is deprecated"),t};var y=e.fn.data;e.
fn.data=function(t){var i,s,o=this[0];return!o||"events"!==t||1!==arguments.length||
(i=e.data(o,t),s=e._data(o,t),i!==n&&i!==s||s===n)?y.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"
),s)};var b=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack,E=e.buildFragment
;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"
),w.apply(this,arguments)},e.clean||(e.clean=function(t,i,s,o){i=i||document,i=!i
.nodeType&&i[0]||i,i=i.ownerDocument||i,r("jQuery.clean() is deprecated");var u,a
,f,l,c=[];if(e.merge(c,e.buildFragment(t,i).childNodes),s)for(f=function(e){return!
e.type||b.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):s.appendChild
(e):n},u=0;null!=(a=c[u]);u++)e.nodeName(a,"script")&&f(a)||(s.appendChild(a),a.getElementsByTagName!==
n&&(l=e.grep(e.merge([],a.getElementsByTagName("script")),f),c.splice.apply(c,[u+1
,0].concat(l)),u+=l.length));return c}),e.buildFragment=function(t,n,s,o){var u,a="jQuery.buildFragment() is deprecated"
;n=n||document,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n;try{u=E.call(e,t,n,s,o
)}catch(f){u=E.call(e,t,n.nodeType?[n]:n[0],s,o),r(a)}return u.fragment||(i(u,"fragment"
,u,a),i(u,"cacheable",!1,a)),u};var S=e.event.add,x=e.event.remove,T=e.event.trigger
,N=e.fn.toggle,C=e.fn.live,k=e.fn.die,L="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess"
,A=RegExp("\\b(?:"+L+")\\b"),O=/(?:^|\s)hover(\.\S+|)\b/,M=function(t){return"string"!=typeof 
t||e.event.special.hover?t:(O.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
),t&&t.replace(O,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event
.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"
),i(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"
),e.event.add=function(e,t,n,i,s){e!==document&&A.test(t)&&r("AJAX events should be attached to document: "+
t),S.call(this,e,M(t||""),n,i,s)},e.event.remove=function(e,t,n,r,i){x.call(this,
e,M(t)||"",n,r,i)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments
,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?
this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(
t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated"
);var i=arguments,s=t.guid||e.guid++,o=0,u=function(n){var r=(e._data(this,"lastToggle"+
t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),i[r
].apply(this,arguments)||!1};for(u.guid=s;i.length>o;)i[o++].guid=s;return this.click
(u)},e.fn.live=function(t,n,i){return r("jQuery.fn.live() is deprecated"),C?C.apply
(this,arguments):(e(this.context).on(t,this.selector,n,i),this)},e.fn.die=function(
t,n){return r("jQuery.fn.die() is deprecated"),k?k.apply(this,arguments):(e(this.
context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,i){return!
n&!A.test(e)&&r("Global events are undocumented and deprecated"),T.call(this,e,t,
n||document,i)},e.each(L.split("|"),function(t,n){e.event.special[n]={setup:function(
){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e
.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==
document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window),define
("vendor/jquery/jquery-migrate-1.0.0.min",function(){}),function(){var e={};$.each
(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math
.pow(e,t+2)}}),$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:
function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-
Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*
e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/
Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),$.each(e,function(e,t){$.easing
["easeIn"+e]=t,$.easing["easeOut"+e]=function(e){return 1-t(1-e)},$.easing["easeInOut"+
e]=function(e){return e<.5?t(e*2)/2:1-t(e*-2+2)/2}})}(),define("jquery_ui_easing"
,function(){}),function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase()
;return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1
:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/
.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters
.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility"
)==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;
e.extend(e.ui,{version:"1.10.0",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,
END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE
:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP
:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus
:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout
(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent
:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/
.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/
.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(
this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(
){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css
(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document
):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=
e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||
i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s
}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||
(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){
r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.
createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,
t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN
(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(
n);return(r||n>=0)&&i(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"
],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css
(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(
n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:
["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn
.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+
r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).
css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?
o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")
})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject
:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b"
)&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call
(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData))}(jQuery),function(e,t){var n=0
,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t
[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(
t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e
.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||
{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments
.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend
({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.
each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(
){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t
].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this
._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=
n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:
t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors
,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto
)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o
)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;
s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a
)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u
]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;
e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!
u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r
,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+
o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+
o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.
jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.
option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.
Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix
:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(
t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+
this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions
(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r
,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===
r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.
window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create
(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions
:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function()
{this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName
).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this
.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this
.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace
),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"
)},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=
n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof 
n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend(
{},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop
();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===
t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(
e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t)
{return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled"
,!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable
.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled"
,!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,
r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this
.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u
(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;
return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=
o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace
,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" "
).join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay
:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}
var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.
hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover"
)},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable
:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t)
{e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget
).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options
[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+
t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in 
n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element
[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"
},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i=
{effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&
(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&
e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.
queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})}(jQuery),function(e,t){var n=!1
;e(document).mouseup(function(){n=!1}),e.widget("ui.mouse",{version:"1.10.0",options
:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(
){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t.
_mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target
,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"
),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this
.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+
this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate
)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=
t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?
e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(
t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=
setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet
(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this
._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent"
)&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=
function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp
(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+
this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(
t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this
._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet
(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent
,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted
)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this
._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this
._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.
data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet
:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs
(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(
){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop
:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(e,t){function h
(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test
(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){
var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0
,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop
(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left
:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e
.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/
,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(
){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"
),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(
t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"
),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&
t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height
:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=
e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft
:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?
n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply
(this,arguments);t=e.extend({},t);var n,l,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo
(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};
return y=d(b),b[0].preventDefault&&(t.at="left top"),l=y.width,v=y.height,m=y.offset
,g=e.extend({},m),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,
r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat
(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center"
,n=a.exec(e[0]),r=a.exec(e[1]),x[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0
],f.exec(e[1])[0]]}),S.length===1&&(S[1]=S[0]),t.at[0]==="right"?g.left+=l:t.at[0
]==="center"&&(g.left+=l/2),t.at[1]==="bottom"?g.top+=v:t.at[1]==="center"&&(g.top+=
v/2),n=h(x.at,l,v),g.left+=n[0],g.top+=n[1],this.each(function(){var o,u,a=e(this
),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),y=p(this,"marginTop")
,T=f+d+p(this,"marginRight")+E.width,N=c+y+p(this,"marginBottom")+E.height,C=e.extend
({},g),k=h(x.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0
]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=
c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=
s(C.top)),o={marginLeft:d,marginTop:y},e.each(["left","top"],function(r,i){e.ui.position
[S[r]]&&e.ui.position[S[r]][i](C,{targetWidth:l,targetHeight:v,elemWidth:f,elemHeight
:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+
k[1]],my:t.my,at:t.at,within:w,elem:a})}),t.using&&(u=function(e){var n=m.left-C.
left,s=n+l-f,o=m.top-C.top,u=o+v-c,h={target:{element:b,left:m.left,top:m.top,width
:l,height:v},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal
:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i
(n+s)<l&&(h.horizontal="center"),v<c&&i(o+u)<v&&(h.vertical="middle"),r(i(n),i(s)
)>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,
e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){
var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition
.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+
u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth
:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t
){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-
t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>
s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.
top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top
)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width
,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,
a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?
t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0
,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))
e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||
i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop
,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop
,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?
t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight
:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(
v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o
,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position
.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top
:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply
(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body"
)[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={
visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend
(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s]
;t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.
style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support
.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}()}(jQuery),function(
e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"slide"
,options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step
:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(
){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"
),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=
[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=
null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this.range=e
([]),r.range&&(r.range===!0&&(r.values?r.values.length&&r.values.length!==2?r.values=
[r.values[0],r.values[0]]:e.isArray(r.values)&&(r.values=r.values.slice(0)):r.values=
[this._valueMin(),this._valueMin()]),this.range=e("<div></div>").appendTo(this.element
).addClass("ui-slider-range ui-widget-header"+(r.range==="min"||r.range==="max"?" ui-slider-range-"+
r.range:""))),n=r.values&&r.values.length||1;for(t=i.length;t<n;t++)o.push(s);this
.handles=i.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0
),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()})
.mouseenter(function(){r.disabled||e(this).addClass("ui-state-hover")}).mouseleave
(function(){e(this).removeClass("ui-state-hover")}).focus(function(){r.disabled?e
(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this
).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus"
)}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this
._setOption("disabled",r.disabled),this._on(this.handles,this._handleEvents),this
._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this
.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this
.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),
height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:
t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin
()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));if(i>n||i===n&&(
t===l._lastChangedValue||l.values(t)===c.min))i=n,s=e(this),o=t}),u=this._start(t
,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active"
).focus(),a=s.offset(),f=!e(t.target).parents().addBack().is(".ui-slider-handle")
,this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-
a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"
),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover"
)||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},
_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);
return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.
handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex
),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null
,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options
.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e
){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,
n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this
.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset
.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this
._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start
:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options
.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values
()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&
this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&
this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this
.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values
:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this
._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop
:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&
this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this.
_trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding
){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options
.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=
t,this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options
.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this
._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values
[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!
arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options
.values&&this.options.values.length?this._values(t):this.value();r=this.options.values
,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change
(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;e.isArray(this.
options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply
(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus"
).blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0
)):this.handles.prop("disabled",!1);break;case"orientation":this._detectOrientation
(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+
this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this
._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this
._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1
;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1
}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e}
,_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e
],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1
)n[r]=this._trimAlignValue(n[r]);return n},_trimAlignValue:function(e){if(e<=this
._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax
();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math
.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this
.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(
){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:
u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(
function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left"
:"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&
(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:
n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration
:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate
),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate
}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-
i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop
(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&
this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.
orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue
:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop
(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&
this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))}
,_handleEvents:{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index"
);switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode
.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT
:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding
){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);
if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?
i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this
._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode
.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e
.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin()
)/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;
s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(
i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},keyup
:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(
this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"
))}}})}(jQuery),jQuery.effects||function(e,t){var n="ui-effects-";e.effects={effect
:{}},function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?
null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0
:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c
(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=
n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&
e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e
)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
,r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/
,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/
,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/
,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}
},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1
],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/
,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=
function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0
,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue
:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"
}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s
.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)"
,a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+
e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(
n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType
)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array"
);if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba
.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof 
s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,
r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null
)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice
(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=
s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache
]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t
.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(
n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space
(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=
f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=
u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-
o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this
._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s
(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba("
,n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.
pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this
.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"
),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t)
{var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(
e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(
){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=
s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null
,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.
min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*
(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c
,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[
null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,
o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d
(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.
fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice
();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c
(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n
,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(
s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx
],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&
i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1
))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(
t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(
r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?
t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"
),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString
()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s
(t.elem,n),t.end=s(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition
(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};
return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),
t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff"
,gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive
:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff"
,yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(
){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView
.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.
length;while(r--)n=i[r],typeof i[n]=="string"&&(s[e.camelCase(n)]=i[n])}else for(
n in i)typeof i[n]=="string"&&(s[n]=i[n]);return s}function s(t,n){var i={},s,o;for(
s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i
}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft
:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle"
,"borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step
[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style
(e.elem,n,e.end),e.setAttr=!0}}),e.fn.addBack||(e.fn.addBack=function(e){return this
.add(e==null?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=
function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this)
,o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){
var t=e(this);return{el:t,start:i(this)}}),u=function(){e.each(n,function(e,n){t[
n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i(this.el[0]),this
.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this
,n=e.Deferred(),r=e.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this
.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(
),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,""
)})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(
t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(
t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects
.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn
.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?
e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,
r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r
,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(
){function r(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&
(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=
r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,
t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds
._default,t.complete=i||n.complete,t}function i(t){return!t||typeof t=="number"||
e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]}e.extend(e.effects,{version
:"1.10.0",save:function(e,t){for(var r=0;r<t.length;r++)t[r]!==null&&e.data(n+t[r
],e[0].style[t[r]])},restore:function(e,r){var i,s;for(s=0;s<r.length;s++)r[s]!==
null&&(i=e.data(n+r[s]),i===t&&(i=""),e.css(r[s],i))},setMode:function(e,t){return t==="toggle"&&
(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0
]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e
[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right"
:r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t
.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0
),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper"
).css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}
),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o
){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=
t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position
:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),
e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt
(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",
bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document
.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith
(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r
,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+
s[1])}),i}}),e.fn.extend({effect:function(){function o(n){function u(){e.isFunction
(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,o=t.mode;(r.is(":hidden"
)?o==="hide":o==="show")?u():s.call(r[0],t,u)}var t=r.apply(this,arguments),n=t.mode
,i=t.queue,s=e.effects.effect[t.effect];return e.fx.off||!s?n?this[n](t.duration,
t.complete):this.each(function(){t.complete&&t.complete.call(this)}):i===!1?this.
each(o):this.queue(i||"fx",o)},_show:e.fn.show,show:function(e){if(i(e))return this
._show.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="show",this
.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(i(e))return this._hide.
apply(this,arguments);var t=r.apply(this,arguments);return t.mode="hide",this.effect
.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t=="boolean"||
e.isFunction(t))return this.__toggle.apply(this,arguments);var n=r.apply(this,arguments
);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this
.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=
[parseFloat(n),t])}),r}})}()}(jQuery),function(e,t){e.effects.effect.slide=function(
t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],
s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||
u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(
),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper
(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-="
:f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete
:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r
),n()}})}}(jQuery),define("jquery_ui",["vendor/jquery/jquery-migrate-1.0.0.min","jquery_ui_easing"
],function(){}),function(e,t){e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase
()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend
({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart"
:"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection
:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{
add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i
]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!
i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0
;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}}})}(jQuery),function(
e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"drag"
,options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment
:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity
:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity
:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag
:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/
.test(this.element.css("position"))&&(this.element[0].style.position="relative"),
this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&
this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(
){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"
),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.
helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this
.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).
each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>"
).css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute"
,opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart
:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper
.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&
(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css
("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=
this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this
.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset
.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset
()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=
t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt
),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear
(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager
.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart
(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this
.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this
._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!
this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position
.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=
this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop
:function(t){var n,r=this,i=!1,s=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&
(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),n=
this.element[0];while(n&&(n=n.parentNode))n===document&&(i=!0);return!i&&this.options
.helper==="original"?!1:(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&
s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert
.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.
options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this
._trigger("stop",t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return e("div.ui-draggable-iframeFix"
).each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager
.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this
.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle
:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0
:!1;return e(this.options.handle,this.element).find("*").addBack().each(function(
){this===t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction
(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element
.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo
(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r[0]!==this.element
[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r}
,_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray
(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this
.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-
t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top
),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this
.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent
();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent
[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this
.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent
[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase
()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent
.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"
),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=
this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+
this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0
)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){
this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this
.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10
)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions
:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper
.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&
(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window"
)this.containment=[i.containment==="document"?0:e(window).scrollLeft()-this.offset
.relative.left-this.offset.parent.left,i.containment==="document"?0:e(window).scrollTop
()-this.offset.relative.top-this.offset.parent.top,(i.containment==="document"?0:
e(window).scrollLeft())+e(i.containment==="document"?document:window).width()-this
.helperProportions.width-this.margins.left,(i.containment==="document"?0:e(window
).scrollTop())+(e(i.containment==="document"?document:window).height()||document.
body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/
.test(i.containment)&&i.containment.constructor!==Array){n=e(i.containment),r=n[0
];if(!r)return;t=e(r).css("overflow")!=="hidden",this.containment=[(parseInt(e(r)
.css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt
(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(t?Math
.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"
),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-
this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r
.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"
),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this
.relative_container=n}else i.containment.constructor===Array&&(this.containment=i
.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1
:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains
(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i
.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent
.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop
())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-
this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(
t){var n,r,i,s,o=this.options,u=this.cssPosition!=="absolute"||this.scrollParent[0
]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent
:this.offsetParent,a=/(html|body)/i.test(u[0].tagName),f=t.pageX,l=t.pageY;return this
.originalPosition&&(this.containment&&(this.relative_container?(r=this.relative_container
.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment
[2]+r.left,this.containment[3]+r.top]):n=this.containment,t.pageX-this.offset.click
.left<n[0]&&(f=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(
l=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(f=n[2]+this.offset
.click.left),t.pageY-this.offset.click.top>n[3]&&(l=n[3]+this.offset.click.top)),
o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1
])*o.grid[1]:this.originalPageY,l=n?i-this.offset.click.top>=n[1]||i-this.offset.
click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid
[0]?this.originalPageX+Math.round((f-this.originalPageX)/o.grid[0])*o.grid[0]:this
.originalPageX,f=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?
s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:l-this.offset.click
.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-
this.scrollParent.scrollTop():a?0:u.scrollTop()),left:f-this.offset.click.left-this
.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent
.scrollLeft():a?0:u.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"
),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove
(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=
r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t==="drag"&&(this.positionAbs=this
._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins
:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition
:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable"
,{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({
},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=
e.data(this,"ui-sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,
shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))}
)},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.
element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0
,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&
(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options
.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance
.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1
,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data
("ui-draggable"),i=this;e.each(r.sortables,function(){var s=!1,o=this;this.instance
.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this
.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance
.containerCache)&&(s=!0,e.each(r.sortables,function(){return this.instance.positionAbs=
r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset
.click=r.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache
)&&e.ui.contains(o.instance.element[0],this.instance.element[0])&&(s=!1),s})),s?(
this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone
().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this
.instance.options._helper=this.instance.options.helper,this.instance.options.helper=
function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance
._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click
.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.
instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left
,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent
.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element
,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag
(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0
,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash
(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this
.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&
this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}
),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this
).data("ui-draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor")),t.css
("cursor",n.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t
._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity"
,{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.
css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(
t,n){var r=e(this).data("ui-draggable").options;r._opacity&&e(n.helper).css("opacity"
,r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this
).data("ui-draggable");t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&
(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("ui-draggable"
),r=n.options,i=!1;if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"
){if(!r.axis||r.axis!=="x")n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.
pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+
r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0
].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed);if(!r.axis||r.axis!=="y"
)n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?
n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-
n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent
[0].scrollLeft-r.scrollSpeed)}else{if(!r.axis||r.axis!=="x")t.pageY-e(document).scrollTop
()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed
):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(
document).scrollTop(e(document).scrollTop()+r.scrollSpeed));if(!r.axis||r.axis!=="y"
)t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(
document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft
())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed
))}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}
),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"
),n=t.options;t.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)"
:n.snap).each(function(){var n=e(this),r=n.offset();this!==t.element[0]&&t.snapElements
.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left
})})},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=
p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset
.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--){u=p.snapElements
[c].left,a=u+p.snapElements[c].width,f=p.snapElements[c].top,l=f+p.snapElements[c
].height;if(!(u-v<m&&m<a+v&&f-v<y&&y<l+v||u-v<m&&m<a+v&&f-v<b&&b<l+v||u-v<g&&g<a+
v&&f-v<y&&y<l+v||u-v<g&&g<a+v&&f-v<b&&b<l+v)){p.snapElements[c].snapping&&p.options
.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem
:p.snapElements[c].item})),p.snapElements[c].snapping=!1;continue}d.snapMode!=="inner"&&
(r=Math.abs(f-b)<=v,i=Math.abs(l-y)<=v,s=Math.abs(u-g)<=v,o=Math.abs(a-m)<=v,r&&(
n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,
left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top
:l,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative"
,{top:0,left:u-p.helperProportions.width}).left-p.margins.left),o&&(n.position.left=
p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left)),h=r||i||s||
o,d.snapMode!=="outer"&&(r=Math.abs(f-y)<=v,i=Math.abs(l-b)<=v,s=Math.abs(u-m)<=v
,o=Math.abs(a-g)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f,left
:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l-
p.helperProportions.height,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo
("relative",{top:0,left:u}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo
("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left)),!p.snapElements
[c].snapping&&(r||i||s||o||h)&&p.options.snap.snap&&p.options.snap.snap.call(p.element
,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=
r||i||s||o||h}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,n=e
(this).data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){
return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)})
;if(!r.length)return;t=parseInt(r[0].style.zIndex,10)||0,e(r).each(function(e){this
.style.zIndex=t+e}),this[0].style.zIndex=t+r.length}}),e.ui.plugin.add("draggable"
,"zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options
;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(
t,n){var r=e(this).data("ui-draggable").options;r._zIndex&&e(n.helper).css("zIndex"
,r._zIndex)}})}(jQuery),function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget
("ui.droppable",{version:"1.10.0",widgetEventPrefix:"drop",options:{accept:"*",activeClass
:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate
:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this
.options,n=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(n)?n:function(
e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this
.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables
[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element
.addClass("ui-droppable")},_destroy:function(){var t=0,n=e.ui.ddmanager.droppables
[this.options.scope];for(;t<n.length;t++)n[t]===this&&n.splice(t,1);this.element.
removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t==="accept"&&
(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption
.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options
.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate"
,t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options
.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger
("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||
(n.currentItem||n.element)[0]===this.element[0])return;this.accept.call(this.element
[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this
.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=
e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0])return;
this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&
this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n
)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current,i=!1;return!r||(r.currentItem||
r.element)[0]===this.element[0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging"
).each(function(){var t=e.data(this,"ui-droppable");if(t.options.greedy&&!t.options
.disabled&&t.options.scope===r.options.scope&&t.accept.call(t.element[0],r.currentItem||
r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance
))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element
)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this
.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger
("drop",t,this.ui(r)),this.element):!1)},ui:function(e){return{draggable:e.currentItem||
e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=
function(e,t,r){if(!t.offset)return!1;var i,s,o=(e.positionAbs||e.position.absolute
).left,u=o+e.helperProportions.width,a=(e.positionAbs||e.position.absolute).top,f=
a+e.helperProportions.height,l=t.offset.left,c=l+t.proportions.width,h=t.offset.top
,p=h+t.proportions.height;switch(r){case"fit":return l<=o&&u<=c&&h<=a&&f<=p;case"intersect"
:return l<o+e.helperProportions.width/2&&u-e.helperProportions.width/2<c&&h<a+e.helperProportions
.height/2&&f-e.helperProportions.height/2<p;case"pointer":return i=(e.positionAbs||
e.position.absolute).left+(e.clickOffset||e.offset.click).left,s=(e.positionAbs||
e.position.absolute).top+(e.clickOffset||e.offset.click).top,n(s,h,t.proportions.
height)&&n(i,l,t.proportions.width);case"touch":return(a>=h&&a<=p||f>=h&&f<=p||a<
h&&f>p)&&(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c);default:return!1}},e.ui.ddmanager={current
:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r,i,s=e.ui.ddmanager
.droppables[t.options.scope]||[],o=n?n.type:null,u=(t.currentItem||t.element).find
(":data(ui-droppable)").addBack();e:for(r=0;r<s.length;r++){if(s[r].options.disabled||
t&&!s[r].accept.call(s[r].element[0],t.currentItem||t.element))continue;for(i=0;i<
u.length;i++)if(u[i]===s[r].element[0]){s[r].proportions.height=0;continue e}s[r]
.visible=s[r].element.css("display")!=="none";if(!s[r].visible)continue;o==="mousedown"&&
s[r]._activate.call(s[r],n),s[r].offset=s[r].element.offset(),s[r].proportions={width
:s[r].element[0].offsetWidth,height:s[r].element[0].offsetHeight}}},drop:function(
t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(
){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,
this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&
this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0
,this.isover=!1,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element
.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||
e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&
e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope
]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;
var r,i,s,o=e.ui.intersect(t,this,this.options.tolerance),u=!o&&this.isover?"isout"
:o&&!this.isover?"isover":null;if(!u)return;this.options.greedy&&(i=this.options.
scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return e.data
(this,"ui-droppable").options.scope===i}),s.length&&(r=e.data(s[0],"ui-droppable"
),r.greedyChild=u==="isover")),r&&u==="isover"&&(r.isover=!1,r.isout=!0,r._out.call
(r,n)),this[u]=!0,this[u==="isout"?"isover":"isout"]=!1,this[u==="isover"?"_over"
:"_out"].call(this,n),r&&u==="isout"&&(r.isout=!1,r.isover=!0,r._over.call(r,n))}
)},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"
),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}}(jQuery),function(
e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.sortable",e.ui.mouse,{version
:"1.10.0",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith
:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1
,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder
:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance
:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null
,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update
:null},_create:function(){var e=this.options;this.containerCache={},this.element.
addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/
.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item
.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"
),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.
removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?
(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget
.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=null
,i=!1,s=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type==="static"
)return!1;this._refreshItems(t),e(t.target).parents().each(function(){if(e.data(this
,s.widgetName+"-item")===s)return r=e(this),!1}),e.data(t.target,s.widgetName+"-item"
)===s&&(r=e(t.target));if(!r)return!1;if(this.options.handle&&!n){e(this.options.
handle,r).find("*").addBack().each(function(){this===t.target&&(i=!0)});if(!i)return!1
}return this.currentItem=r,this._removeCurrentsFromItems(),!0},_mouseStart:function(
t,n,r){var i,s=this.options;this.currentContainer=this,this.refreshPositions(),this
.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins()
,this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset
(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins
.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this
.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),
this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"
),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this
.originalPageY=t.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this.
domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]}
,this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder
(),s.containment&&this._setContainment(),s.cursor&&(e("body").css("cursor")&&(this
._storedCursor=e("body").css("cursor")),e("body").css("cursor",s.cursor)),s.opacity&&
(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this
.helper.css("opacity",s.opacity)),s.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=
this.helper.css("zIndex")),this.helper.css("zIndex",s.zIndex)),this.scrollParent[0
]!==document&&this.scrollParent[0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent
.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||
this._cacheHelperProportions();if(!r)for(i=this.containers.length-1;i>=0;i--)this
.containers[i]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(
e.ui.ddmanager.current=this),e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets
(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag
(t),!0},_mouseDrag:function(t){var n,r,i,s,o=this.options,u=!1;this.position=this
._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||
(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0
]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this
.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=
u=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.
scrollSensitivity&&(this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop-
o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<
o.scrollSensitivity?this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft+
o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent
[0].scrollLeft=u=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document
).scrollTop()<o.scrollSensitivity?u=e(document).scrollTop(e(document).scrollTop()-
o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&
(u=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document
).scrollLeft()<o.scrollSensitivity?u=e(document).scrollLeft(e(document).scrollLeft
()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&
(u=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),u!==!1&&e.ui.
ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=
this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"
)this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options
.axis!=="x")this.helper[0].style.top=this.position.top+"px";for(n=this.items.length-1
;n>=0;n--){r=this.items[n],i=r.item[0],s=this._intersectsWithPointer(r);if(!s)continue;
if(r.instance!==this.currentContainer)continue;if(i!==this.currentItem[0]&&this.placeholder
[s===1?"next":"prev"]()[0]!==i&&!e.contains(this.placeholder[0],i)&&(this.options
.type==="semi-dynamic"?!e.contains(this.element[0],i):!0)){this.direction=s===1?"down"
:"up";if(this.options.tolerance!=="pointer"&&!this._intersectsWithSides(r))break;
this._rearrange(t,r),this._trigger("change",t,this._uiHash());break}}return this.
_contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort"
,t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(
t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop
(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0
,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this
.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this
.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.
offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear
(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp
({target:null}),this.options.helper==="original"?this.currentItem.css(this._storedCSS
).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers
.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this
)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null
,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&
(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.
placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&
this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort
:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(
this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=
this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=
(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/
);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&
t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery
(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr
(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.
left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions
.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.
offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance==="pointer"||
this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.
helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"
]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this
.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer
:function(e){var t=this.options.axis==="x"||n(this.positionAbs.top+this.offset.click
.top,e.top,e.height),r=this.options.axis==="y"||n(this.positionAbs.left+this.offset
.click.left,e.left,e.width),i=t&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection
();return i?this.floating?o&&o==="right"||s==="down"?2:1:s&&(s==="down"?2:1):!1},
_intersectsWithSides:function(e){var t=n(this.positionAbs.top+this.offset.click.top
,e.top+e.height/2,e.height),r=n(this.positionAbs.left+this.offset.click.left,e.left+
e.width/2,e.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection
();return this.floating&&s?s==="right"&&r||s==="left"&&!r:i&&(i==="down"&&t||i==="up"&&!
t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs
.top;return e!==0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=
this.positionAbs.left-this.lastPositionAbs.left;return e!==0&&(e>0?"right":"left"
)},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this}
,_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?
[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n,r,i,s,o=[],u=[
],a=this._connectWith();if(a&&t)for(n=a.length-1;n>=0;n--){i=e(a[n]);for(r=i.length-1
;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&u.
push([e.isFunction(s.options.items)?s.options.items.call(s.element):e(s.options.items
,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])}u.push
([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options
:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper"
).not(".ui-sortable-placeholder"),this]);for(n=u.length-1;n>=0;n--)u[n][0].each(function(
){o.push(this)});return e(o)},_removeCurrentsFromItems:function(){var t=this.currentItem
.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e)
{for(var n=0;n<t.length;n++)if(t[n]===e.item[0])return!1;return!0})},_refreshItems
:function(t){this.items=[],this.containers=[this];var n,r,i,s,o,u,a,f,l=this.items
,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{
item:this.currentItem}):e(this.options.items,this.element),this]],h=this._connectWith
();if(h&&this.ready)for(n=h.length-1;n>=0;n--){i=e(h[n]);for(r=i.length-1;r>=0;r--
)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&(c.push([e.
isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem
}):e(s.options.items,s.element),s]),this.containers.push(s))}for(n=c.length-1;n>=0
;n--){o=c[n][1],u=c[n][0];for(r=0,f=u.length;r<f;r++)a=e(u[r]),a.data(this.widgetName+"-item"
,o),l.push({item:a,instance:o,width:0,height:0,left:0,top:0})}},refreshPositions:
function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset
());var n,r,i,s;for(n=this.items.length-1;n>=0;n--){r=this.items[n];if(r.instance!==
this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0])continue;
i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item,t||
(r.width=i.outerWidth(),r.height=i.outerHeight()),s=i.offset(),r.left=s.left,r.top=
s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.
custom.refreshContainers.call(this);else for(n=this.containers.length-1;n>=0;n--)
s=this.containers[n].element.offset(),this.containers[n].containerCache.left=s.left
,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=
this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=
this.containers[n].element.outerHeight();return this},_createPlaceholder:function(
t){t=t||this;var n,r=t.options;if(!r.placeholder||r.placeholder.constructor===String
)n=r.placeholder,r.placeholder={element:function(){var r=e(document.createElement
(t.currentItem[0].nodeName)).addClass(n||t.currentItem[0].className+" ui-sortable-placeholder"
).removeClass("ui-sortable-helper")[0];return n||(r.style.visibility="hidden"),r}
,update:function(e,i){if(n&&!r.forcePlaceholderSize)return;i.height()||i.height(t
.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt
(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth
()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight"
)||0,10))}};t.placeholder=e(r.placeholder.element.call(t.element,t.currentItem)),
t.currentItem.after(t.placeholder),r.placeholder.update(t,t.placeholder)},_contactContainers
:function(t){var n,r,i,s,o,u,a,f,l,c=null,h=null;for(n=this.containers.length-1;n>=0
;n--){if(e.contains(this.currentItem[0],this.containers[n].element[0]))continue;if(
this._intersectsWith(this.containers[n].containerCache)){if(c&&e.contains(this.containers
[n].element[0],c.element[0]))continue;c=this.containers[n],h=n}else this.containers
[n].containerCache.over&&(this.containers[n]._trigger("out",t,this._uiHash(this))
,this.containers[n].containerCache.over=0)}if(!c)return;if(this.containers.length===1
)this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache
.over=1;else{i=1e4,s=null,o=this.containers[h].floating?"left":"top",u=this.containers
[h].floating?"width":"height",a=this.positionAbs[o]+this.offset.click[o];for(r=this
.items.length-1;r>=0;r--){if(!e.contains(this.containers[h].element[0],this.items
[r].item[0]))continue;if(this.items[r].item[0]===this.currentItem[0])continue;f=this
.items[r].item.offset()[o],l=!1,Math.abs(f-a)>Math.abs(f+this.items[r][u]-a)&&(l=!0
,f+=this.items[r][u]),Math.abs(f-a)<i&&(i=Math.abs(f-a),s=this.items[r],this.direction=
l?"up":"down")}if(!s&&!this.options.dropOnEmpty)return;this.currentContainer=this
.containers[h],s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers
[h].element,!0),this._trigger("change",t,this._uiHash()),this.containers[h]._trigger
("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer
,this.placeholder),this.containers[h]._trigger("over",t,this._uiHash(this)),this.
containers[h].containerCache.over=1}},_createHelper:function(t){var n=this.options
,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem]))
:n.helper==="clone"?this.currentItem.clone():this.currentItem;return r.parents("body"
).length||e(n.appendTo!=="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild
(r[0]),r[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style
.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"
),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!r[0].style
.width||n.forceHelperSize)&&r.width(this.currentItem.width()),(!r[0].style.height||
n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper
:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top
:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in 
t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left
),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset
.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset
:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.
offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains
(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft
(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||
this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&
e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"
),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem
.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent
.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent
.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:
parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.
css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment
:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this
.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this
.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative
.top-this.offset.parent.top,e(i.containment==="document"?document:window).width()-
this.helperProportions.width-this.margins.left,(e(i.containment==="document"?document
:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.
height-this.margins.top];/^(document|window|parent)$/.test(i.containment)||(t=e(i
.containment)[0],n=e(i.containment).offset(),r=e(t).css("overflow")!=="hidden",this
.containment=[n.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t)
.css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(e(t).css("borderTopWidth"
),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(r?Math
.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"
),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-
this.margins.left,n.top+(r?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight
)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"
),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(
t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||
this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent
[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{
top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-
this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative
.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.
scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i=this
.options,s=t.pageX,o=t.pageY,u=this.cssPosition!=="absolute"||this.scrollParent[0
]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent
:this.offsetParent,a=/(html|body)/i.test(u[0].tagName);return this.cssPosition==="relative"&&
(this.scrollParent[0]===document||this.scrollParent[0]===this.offsetParent[0])&&(
this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&
(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.
offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment
[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=
this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment
[3]&&(o=this.containment[3]+this.offset.click.top)),i.grid&&(n=this.originalPageY+
Math.round((o-this.originalPageY)/i.grid[1])*i.grid[1],o=this.containment?n-this.
offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3
]?n:n-this.offset.click.top>=this.containment[1]?n-i.grid[1]:n+i.grid[1]:n,r=this
.originalPageX+Math.round((s-this.originalPageX)/i.grid[0])*i.grid[0],s=this.containment?
r-this.offset.click.left>=this.containment[0]&&r-this.offset.click.left<=this.containment
[2]?r:r-this.offset.click.left>=this.containment[0]?r-i.grid[0]:r+i.grid[0]:r)),{
top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this
.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:s-this
.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-
this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_rearrange:function(e,t,n,r)
{n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder
[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++
this.counter:1;var i=this.counter;this._delay(function(){i===this.counter&&this.refreshPositions
(!r)})},_clear:function(t,n){this.reverting=!1;var r,i=[];!this._noFinalSort&&this
.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=
null;if(this.helper[0]===this.currentItem[0]){for(r in this._storedCSS)if(this._storedCSS
[r]==="auto"||this._storedCSS[r]==="static")this._storedCSS[r]="";this.currentItem
.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show
();this.fromOutside&&!n&&i.push(function(e){this._trigger("receive",e,this._uiHash
(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==this.currentItem
.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem
.parent()[0])&&!n&&i.push(function(e){this._trigger("update",e,this._uiHash())}),
this!==this.currentContainer&&(n||(i.push(function(e){this._trigger("remove",e,this
._uiHash())}),i.push(function(e){return function(t){e._trigger("receive",t,this._uiHash
(this))}}.call(this,this.currentContainer)),i.push(function(e){return function(t)
{e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));
for(r=this.containers.length-1;r>=0;r--)n||i.push(function(e){return function(t){
e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[r])),this
.containers[r].containerCache.over&&(i.push(function(e){return function(t){e._trigger
("out",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].
containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor
),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&
this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),this.
dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this
._uiHash());for(r=0;r<i.length;r++)i[r].call(this,t);this._trigger("stop",t,this.
_uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash
()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0
]!==this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(r=0;r<i
.length;r++)i[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.
fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments
)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder
:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset
:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})}(jQuery),define("jquery_ui_interactions"
,["jquery_ui"],function(){}),define("hogan",["require","exports","module"],function(
e,t,n){var r={};(function(e,t){function a(e){return String(e===null||e===undefined?""
:e)}function f(e){return e=a(e),u.test(e)?e.replace(n,"&amp;").replace(r,"&lt;").
replace(i,"&gt;").replace(s,"&#39;").replace(o,"&quot;"):e}e.Template=function(e,
n,r,i){this.r=e||this.r,this.c=r,this.options=i,this.text=n||"",this.buf=t?[]:""}
,e.Template.prototype={r:function(e,t,n){return""},v:f,t:a,render:function(t,n,r)
{return this.ri([t],n||{},r)},ri:function(e,t,n){return this.r(e,t,n)},rp:function(
e,t,n,r){var i=n[e];return i?(this.c&&typeof i=="string"&&(i=this.c.compile(i,this
.options)),i.ri(t,n,r)):""},rs:function(e,t,n){var r=e[e.length-1],i,s;typeof r=="function"&&
(i=r,s=this.buf.length);if(!l(r)){n(e,t,this);if(i){var o=this.buf.substr(s);this
.buf=this.buf.substr(0,s),bunc=this.binderator(i,e[e.length-2]),this.b(bunc(o))}return}
for(var u=0;u<r.length;u++)e.push(r[u]),n(e,t,this),e.pop()},binderator:function(
e,t){var n=Function.prototype.bind;if(e.bind===n&&n)return n.apply(e,Array.prototype
.slice.call(arguments,1));var r=Array.prototype.slice.call(arguments,2);return function(
){return e.apply(t,r.concat(Array.prototype.slice.call(arguments)))}},s:function(
e,t,n,r,i,s,o){var u;if(l(e)&&e.length===0)return!1;var a;return typeof e=="function"&&
(e=this.ms(e,t,n),typeof e=="function"&&(a=e)),u=e===""||!!e,!r&&u&&t&&(a?t.push(
a):t.push(typeof e=="object"?e:t[t.length-1])),u},ms:function(e,t,n){var r=t[t.length-1
];return e.call(r)},d:function(e,t,n,r){var i=e.split("."),s=this.f(i[0],t,n,r),o=
null;if(e==="."&&l(t[t.length-2]))return t[t.length-1];for(var u=1;u<i.length;u++
)s?(o=s,typeof s[i[u]]=="function"?s=s[i[u]]():s=s[i[u]]||""):s="";return r&&!s?!1
:(!r&&typeof s=="function"&&(t.push(o),s=this.lv(s,t,n),t.pop()),s)},f:function(e
,t,n,r){var i=!1,s=null,o=!1;for(var u=t.length-1;u>=0;u--){s=t[u];if(s&&typeof s=="object"&&
e in s){i=s[e],o=!0;break}}return o?(!r&&typeof i=="function"&&(i=this.lv(i,t,n))
,i):r?!1:""},ho:function(e,t,n,r,i){var s=this.c,o=this.options||{};o.delimiters=
i;var r=e.call(t,r);return r=r==null?String(r):r.toString(),this.b(s.compile(r,o)
.render(t,n)),!1},b:t?function(e){this.buf.push(e)}:function(e){this.buf+=e},fl:t?
function(){var e=this.buf.join("");return this.buf=[],e}:function(){var e=this.buf
;return this.buf="",e},ls:function(e,t,n,r,i,s,o){var u=t[t.length-1],a=null;if(!
r&&this.c&&e.length>0)return this.ho(e,u,n,this.text.substring(i,s),o);a=e.call(u
);if(typeof a=="function"){if(r)return!0;if(this.c)return this.ho(a,u,n,this.text
.substring(i,s),o)}return a},lv:function(e,t,n){var r=t[t.length-1],i=e.call(r);if(typeof 
i=="function"){i=a(i.call(r));if(this.c&&~i.indexOf("{{"))return this.c.compile(i
,this.options).render(r,n)}return a(i)}};var n=/&/g,r=/</g,i=/>/g,s=/\'/g,o=/\"/g
,u=/[&<>\"\']/,l=Array.isArray||function(e){return Object.prototype.toString.call
(e)==="[object Array]"}})(typeof t!="undefined"?t:r),function(e){function u(e){e.
n.substr(e.n.length-1)==="}"&&(e.n=e.n.substring(0,e.n.length-1))}function a(e){return e
.trim?e.trim():e.replace(/^\s*|\s*$/g,"")}function f(e,t,n){if(t.charAt(n)!=e.charAt
(0))return!1;for(var r=1,i=e.length;r<i;r++)if(t.charAt(n+r)!=e.charAt(r))return!1
;return!0}function l(e,t,n,r){var i=[],s=null,o=null;while(e.length>0){o=e.shift(
);if(o.tag=="#"||o.tag=="^"||c(o,r))n.push(o),o.nodes=l(e,o.tag,n,r),i.push(o);else{
if(o.tag=="/"){if(n.length===0)throw new Error("Closing tag without opener: /"+o.
n);s=n.pop();if(o.n!=s.n&&!h(o.n,s.n,r))throw new Error("Nesting error: "+s.n+" vs. "+
o.n);return s.end=o.i,i}i.push(o)}}if(n.length>0)throw new Error("missing closing tag: "+
n.pop().n);return i}function c(e,t){for(var n=0,r=t.length;n<r;n++)if(t[n].o==e.n
)return e.tag="#",!0}function h(e,t,n){for(var r=0,i=n.length;r<i;r++)if(n[r].c==
e&&n[r].o==t)return!0}function p(e){return e.replace(s,"\\\\").replace(n,'\\"').replace
(r,"\\n").replace(i,"\\r")}function d(e){return~e.indexOf(".")?"d":"f"}function v
(e){var t="";for(var n=0,r=e.length;n<r;n++){var i=e[n].tag;i=="#"?t+=m(e[n].nodes
,e[n].n,d(e[n].n),e[n].i,e[n].end,e[n].otag+" "+e[n].ctag):i=="^"?t+=g(e[n].nodes
,e[n].n,d(e[n].n)):i=="<"||i==">"?t+=y(e[n]):i=="{"||i=="&"?t+=b(e[n].n,d(e[n].n)
):i=="\n"?t+=E('"\\n"'+(e.length-1==n?"":" + i")):i=="_v"?t+=w(e[n].n,d(e[n].n)):
i===undefined&&(t+=E('"'+p(e[n])+'"'))}return t}function m(e,t,n,r,i,s){return"if(_.s(_."+
n+'("'+p(t)+'",c,p,1),'+"c,p,0,"+r+","+i+',"'+s+'")){'+"_.rs(c,p,"+"function(c,p,_){"+
v(e)+"});c.pop();}"}function g(e,t,n){return"if(!_.s(_."+n+'("'+p(t)+'",c,p,1),c,p,1,0,0,"")){'+
v(e)+"};"}function y(e){return'_.b(_.rp("'+p(e.n)+'",c,p,"'+(e.indent||"")+'"));'
}function b(e,t){return"_.b(_.t(_."+t+'("'+p(e)+'",c,p,0)));'}function w(e,t){return"_.b(_.v(_."+
t+'("'+p(e)+'",c,p,0)));'}function E(e){return"_.b("+e+");"}var t=/\S/,n=/\"/g,r=/\n/g
,i=/\r/g,s=/\\/g,o={"#":1,"^":2,"/":3,"!":4,">":5,"<":6,"=":7,_v:8,"{":9,"&":10};
e.scan=function(n,r){function S(){v.length>0&&(m.push(new String(v)),v="")}function x
(){var e=!0;for(var n=b;n<m.length;n++){e=m[n].tag&&o[m[n].tag]<o._v||!m[n].tag&&
m[n].match(t)===null;if(!e)return!1}return e}function T(e,t){S();if(e&&x())for(var n=
b,r;n<m.length;n++)m[n].tag||((r=m[n+1])&&r.tag==">"&&(r.indent=m[n].toString()),
m.splice(n,1));else t||m.push({tag:"\n"});g=!1,b=m.length}function N(e,t){var n="="+
E,r=e.indexOf(n,t),i=a(e.substring(e.indexOf("=",t)+1,r)).split(" ");return w=i[0
],E=i[1],r+n.length-1}var i=n.length,s=0,l=1,c=2,h=s,p=null,d=null,v="",m=[],g=!1
,y=0,b=0,w="{{",E="}}";r&&(r=r.split(" "),w=r[0],E=r[1]);for(y=0;y<i;y++)h==s?f(w
,n,y)?(--y,S(),h=l):n.charAt(y)=="\n"?T(g):v+=n.charAt(y):h==l?(y+=w.length-1,d=o
[n.charAt(y+1)],p=d?n.charAt(y+1):"_v",p=="="?(y=N(n,y),h=s):(d&&y++,h=c),g=y):f(
E,n,y)?(m.push({tag:p,n:a(v),otag:w,ctag:E,i:p=="/"?g-E.length:y+w.length}),v="",
y+=E.length-1,h=s,p=="{"&&(E=="}}"?y++:u(m[m.length-1]))):v+=n.charAt(y);return T
(g,!0),m},e.generate=function(t,n,r){var i='var _=this;_.b(i=i||"");'+v(t)+"return _.fl();"
;return r.asString?"function(c,p,i){"+i+";}":new e.Template(new Function("c","p","i"
,i),n,e,r)},e.parse=function(e,t,n){return n=n||{},l(e,"",[],n.sectionTags||[])},
e.cache={},e.compile=function(e,t){t=t||{};var n=e+"||"+!!t.asString,r=this.cache
[n];return r?r:(r=this.generate(this.parse(this.scan(e,t.delimiters),e,t),e,t),this
.cache[n]=r)}}(typeof t!="undefined"?t:r)}),define("text",["module"],function(e){"use strict"
;var t=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],n=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im
,r=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,i=typeof location!="undefined"&&location
.href,s=i&&location.protocol&&location.protocol.replace(/\:/,""),o=i&&location.hostname
,u=i&&(location.port||undefined),a=[],f=e.config(),l,c;return l={version:"2.0.0",
strip:function(e){if(e){e=e.replace(n,"");var t=e.match(r);t&&(e=t[1])}else e="";
return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g
,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace
(/[\r]/g,"\\r")},createXhr:function(){var e,n,r;if(typeof XMLHttpRequest!="undefined"
)return new XMLHttpRequest;if(typeof ActiveXObject!="undefined")for(n=0;n<3;n++){
r=t[n];try{e=new ActiveXObject(r)}catch(i){}if(e){t=[r];break}}return e},parseName
:function(e){var t=!1,n=e.indexOf("."),r=e.substring(0,n),i=e.substring(n+1,e.length
);return n=i.indexOf("!"),n!==-1&&(t=i.substring(n+1,i.length),t=t==="strip",i=i.
substring(0,n)),{moduleName:r,ext:i,strip:t}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/
,useXhr:function(e,t,n,r){var i=l.xdRegExp.exec(e),s,o,u;return i?(s=i[2],o=i[3],
o=o.split(":"),u=o[1],o=o[0],(!s||s===t)&&(!o||o===n)&&(!u&&!o||u===r)):!0},finishLoad
:function(e,t,n,r){n=t?l.strip(n):n,f.isBuild&&(a[e]=n),r(n)},load:function(e,t,n
,r){if(r.isBuild&&!r.inlineText){n();return}f.isBuild=r.isBuild;var a=l.parseName
(e),c=a.moduleName+"."+a.ext,h=t.toUrl(c),p=f.useXhr||l.useXhr;!i||p(h,s,o,u)?l.get
(h,function(t){l.finishLoad(e,a.strip,t,n)},function(e){n.error&&n.error(e)}):t([
c],function(e){l.finishLoad(a.moduleName+"."+a.ext,a.strip,e,n)})},write:function(
e,t,n,r){if(a.hasOwnProperty(t)){var i=l.jsEscape(a[t]);n.asModule(e+"!"+t,"define(function () { return '"+
i+"';});\n")}},writeFile:function(e,t,n,r,i){var s=l.parseName(t),o=s.moduleName+"."+
s.ext,u=n.toUrl(s.moduleName+"."+s.ext)+".js";l.load(o,n,function(t){var n=function(
e){return r(u,e)};n.asModule=function(e,t){return r.asModule(e,u,t)},l.write(e,o,
n,i)},i)}},typeof process!="undefined"&&process.versions&&!!process.versions.node?
(c=require.nodeRequire("fs"),l.get=function(e,t){var n=c.readFileSync(e,"utf8");n
.indexOf("﻿")===0&&(n=n.substring(1)),t(n)}):l.createXhr()?l.get=function(e,t,n){
var r=l.createXhr();r.open("GET",e,!0),f.onXhr&&f.onXhr(r,e),r.onreadystatechange=
function(i){var s,o;r.readyState===4&&(s=r.status,s>399&&s<600?(o=new Error(e+" HTTP status: "+
s),o.xhr=r,n(o)):t(r.responseText))},r.send(null)}:typeof Packages!="undefined"&&
(l.get=function(e,t){var n="utf-8",r=new java.io.File(e),i=java.lang.System.getProperty
("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new 
java.io.FileInputStream(r),n)),o,u,a="";try{o=new java.lang.StringBuffer,u=s.readLine
(),u&&u.length()&&u.charAt(0)===65279&&(u=u.substring(1)),o.append(u);while((u=s.
readLine())!==null)o.append(i),o.append(u);a=String(o.toString())}finally{s.close
()}t(a)}),l}),define("hgn",["hogan","text"],function(e,t){function o(i,s,o,f){var l=
f.hgn||{},c=i;c+=l&&l.templateExtension!=null?l.templateExtension:n,t.get(s.toUrl
(c),function(t){var n=l.compilationOptions?a({},l.compilationOptions):{};f.isBuild&&
(n.asString=!0,r[i]=e.compile(t,n));var s=e.compile(t,n),c=u(s.render,s);c.text=s
.text,c.template=s,o(c)})}function u(e,t){return function(){return e.apply(t,arguments
)}}function a(e,t){var n;for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e
[n]=t[n]);return e}function f(t,n,o){if(n in r){s||(s=e.compile(i));var u=r[n];o(
s.render({pluginName:t,moduleName:n,fn:u}))}}var n=".mustache",r={},i='define("{{pluginName}}!{{moduleName}}", ["hogan"], function(hogan){  var tmpl = new hogan.Template({{{fn}}}, "", hogan, {});  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});\n'
,s;return{load:o,write:f}}),define("hgn!templates/tracks/track_annotation",["hogan"
],function(e){function n(){return t.render.apply(t,arguments)}var t=new e.Template
(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="annotation_text">'
),r.b("\n"+n),r.b('  <div class="display">'),r.b("\n"+n),r.b('  	<div id="track_annotation-spinner" class="spin"><span style="display: none;">&nbsp;</span></div>'
),r.b("\n"+n),r.b('  	<div class="text"><span class="i-annotation"></span> '),r.b
(r.v(r.f("text",e,t,0))),r.b("</div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.
b('  <div class="edit" style="display: none;">'),r.b("\n"+n),r.b('    <textarea class="edit compactText" name="text" placeholder="">'
),r.b(r.v(r.f("text",e,t,0))),r.b("</textarea>"),r.b("\n"+n),r.b('    <a href="#" class="save turquoise_button flatbutton">Save</a>'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b('  <div style="clear: both;"></div>'
),r.b("\n"+n),r.b("</div>"),r.fl()},"",e,{});return n.template=t,n}),define("views/track_annotation_view"
,["views/trax_view","hgn!templates/tracks/track_annotation"],function(e,t){var n=
e.extend({tagName:"div",className:"track_annotation editable",initialize:function(
e){_.bindAll(this,"render","editMode","unEditMode","editKeyup"),this.$el=$(this.el
),this.template=t,this.track_annotation=e.track_annotation,this.track_annotation.
bind("change",this.render),this.parentView=e.parentView},events:{"click .display"
:"editMode","click .save":"unEditMode","keypress textarea":"editKeyup"},render:function(
e){return this.$el.html(this.template(this.track_annotation.toJSON())),this.$display=
this.$(".display"),this.$field=this.$("textarea").first(),this.$spinner=this.$(".spin"
),this},editMode:function(){return this.$display.hide(),this.$(".edit").show(),this
.$field.val().length>0&&this.$field.focus().height(this.$display.height()),this.parentView
.$el.addClass("stick_open"),!1},unEditMode:function(){var e={};e.text=this.$field
.val(),this.$field.val().length==0?this.deleteAnnotation():(this.$display.show(),
this.$(".edit").hide());var t=this.track_annotation.save(e,{spinner:this.$spinner
,showSave:!0,success:_.bind(function(){this.parentView.$el.removeClass("stick_open"
)},this)});return this.$el.addClass("saving"),!1},editKeyup:function(e){return e.
which==10||e.which==13?(this.unEditMode(),!1):!0},deleteAnnotation:function(){this
.parentView.$(".annotate").show(),this.$el.remove()}});return n}),define("hgn!templates/tracks/edit"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<form accept-charset="UTF-8" action="/tracks/'
),r.b(r.v(r.f("id",e,t,0))),r.b('" class="edit_track" data-id="'),r.b(r.v(r.f("id"
,e,t,0))),r.b('" method="post">'),r.b("\n"+n),r.b('  <div style="margin:0;padding:0;display:inline">'
),r.b("\n"+n),r.b('    <input name="_method" type="hidden" value="put">'),r.b("\n"+
n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <fieldset class="edit_track">')
,r.b("\n"+n),r.b('  	<div class="field clear">'),r.b("\n"+n),r.b('  		<label class="track_name" for="track_name">Track</label>'
),r.b("\n"+n),r.b('  		<input class="mediumText" id="track_name" name="track[name]" size="30" type="text" value="'
),r.b(r.v(r.f("name",e,t,0))),r.b('">'),r.b("\n"+n),r.b("  	</div>"),r.b("\n"+n),
r.b("\n"+n),r.b('  	<div class="field clear">'),r.b("\n"+n),r.b('  		<label class="track_name" for="track_performer">Artist</label>'
),r.b("\n"+n),r.b('  		<input class="mediumText" id="track_performer" name="track[performer]" size="30" type="text" value="'
),r.b(r.v(r.f("performer",e,t,0))),r.b('">'),r.b("\n"+n),r.b("  	</div>"),r.b("\n"+
n),r.b("\n"+n),r.b('  	<div class="field clear">'),r.b("\n"+n),r.b('  		<label class="track_name" for="track_release_name">Album</label>'
),r.b("\n"+n),r.b('  		<input class="mediumText" id="track_release_name" name="track[release_name]" size="30" type="text" value="'
),r.b(r.v(r.f("release_name",e,t,0))),r.b('">'),r.b("\n"+n),r.b("  	</div>"),r.b("\n"+
n),r.b("\n"+n),r.b('  	<div class="field clear">'),r.b("\n"+n),r.b('  		<label class="track_name" for="track_year">Year</label>'
),r.b("\n"+n),r.b('  		<input class="mediumText" id="track_year" name="track[year]" size="30" type="text" value="'
),r.b(r.v(r.f("year",e,t,0))),r.b('">'),r.b("\n"+n),r.b("  	</div>"),r.b("\n"+n),
r.b("\n"+n),r.b('    <div class="field clear">'),r.b("\n"+n),r.b('     <label class="track_name" for="track_buy_url">URL to Buy (optional)</label>'
),r.b("\n"+n),r.b('     <input class="mediumText" id="track_buy_url" name="track[buy_url]" size="30" type="text" value="'
),r.b(r.v(r.f("buy_url",e,t,0))),r.b('">'),r.b("\n"+n),r.b("    </div>"),r.b("\n"+
n),r.b("\n"+n),r.s(r.f("currentUser",e,t,1),e,t,0,1383,1388,"{{ }}")&&(r.rs(e,t,function(
e,t,n){}),e.pop()),r.b("\n"+n),r.b('  	<div class="submit clear">'),r.b("\n"+n),r
.b('      <input class="turquoise_button flatbutton submit" name="commit" type="submit" value="Save">'
),r.b("\n"+n),r.b('  		<div id="track_update-spinner" class="spin"><span style="display: none;">&nbsp;</span></div>'
),r.b("\n"+n),r.b("  	</div>"),r.b("\n"+n),r.b("  </fieldset>"),r.b("\n"+n),r.b("</form>"
),r.b("\n"+n),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("views/track_form_view"
,["views/trax_view","hgn!templates/tracks/edit","lib/jsonh.jquery"],function(e,t,
n){var r=e.extend({initialize:function(){this.template=t},render:function(){$(this
.el).html(this.template(this.model.toJSON()))},show:function(){this.render(),$.facebox
(this.el)},events:{"submit .edit_track":"saveTrack","click .flag_button":"onSoundcloudFlagClick"
},saveTrack:function(e){var t=e.currentTarget.elements,n={name:t["track[name]"].value
,performer:t["track[performer]"].value,release_name:t["track[release_name]"].value
,year:t["track[year]"].value,buy_url:t["track[buy_url]"].value};return this.model
.validationErrors=["saving"],this.model.save(n,{success:_.bind(function(e){$.facebox
.close()},this),error:_.bind(function(e){return this.render(),!1},this)}),!1},onSoundcloudFlagClick
:function(e){return $link=$(e.currentTarget),$link.siblings().removeClass("active"
),$link.addClass("active"),$link.hasClass("exclude")&&this.model.set("soundcloud_track"
,null),n.now($link.attr("href"),function(){},{type:"POST"}),!1}});return r}),define
("models/track_annotation",["lib/jsonh.jquery"],function(e){var t=Backbone.Model.
extend({urlRoot:"/track_annotations",initialize:function(e,t){this.track=t.track,
this.mix=t.mix},sync:function(t,n,r){return e.now_with_context(this.url(),this.toRails
(),this,function(e){e.success&&(this.set(e.track_annotation),r.success(this,e.track_annotation
,r))},{spinner:r.spinner,type:t=="create"?"POST":"PUT"}),!0},toRails:function(){return attr=
{track_annotation:{text:this.get("text")},track_id:this.track.id,mix_id:this.mix.
id},attr}});return t}),define("lib/_template_helpers",["global_trax","lib/trax_utils"
],function(e,t){var n=function(e){this.initTplParams(e)};return n.prototype.initTplParams=
function(e){_.extend(this,e)},n.prototype.escape=function(){return function(e){return escape
(this[e])}},n.prototype.mix_cover_url=function(){return function(e){return n.prototype
.imgix_url(e,this.cover_urls)}},n.prototype.mixpage_mix_cover_url=function(e,t){return n
.prototype.mix_cover_url(e)},n.prototype.avatar_url=function(){return function(e)
{return n.prototype.imgix_url(e,this.avatar_urls)}},n.prototype.mix_cover_img=function(
){var e=this.cover_urls;return function(t){return'<img src="'+n.prototype.imgix_url
(t,e)+'" class="cover" alt="'+_.escape(this.name)+'"  />'}},n.prototype.avatar_img=
function(){var e=this.avatar_urls;return function(t){return'<img src="'+n.prototype
.imgix_url(t,e)+'" class="avatar" alt="'+_.escape(this.login)+'"/>'}},n.prototype
.external_img=function(){return function(e){return args=e.split(/,\s*/),src_name=
args[0],size=args[1],src=this[src_name],window.dpr!==undefined&&window.dpr>1&&(size*=2
),'<img src="'+external_image_url(src,size)+'" class="artist_photo" width="'+size+'"/>'
}},n.prototype.mix_set_sort_path=function(){return function(e){return this.web_path
.match(/(\/recent|\/popular|\/hot)/)?this.web_path.replace(/(\/recent|\/popular|\/hot)/
,e):this.web_path+e}},n.prototype.sort_name=function(){return{hot:"Trending","new"
:"Newest",recent:"Newest",popular:"Popular"}[this.sort]},n.prototype.dj_mode=function(
){return this.smart_type=="dj"},n.prototype.collection_mode=function(){return this
.smart_type=="collection"},n.prototype.cool_number=function(){return function(e){
return t.coolNumber(this[e])}},n.prototype.human_number=function(){return function(
e){return t.addCommas(this[e])}},n.prototype.human_date=function(){return function(
e){var t=this[e]!==null?this[e]:"";return n.prototype.human_date_value()(t)}},n.prototype
.human_date_value=function(){return function(e){var t="";if(e){if(e.match("TZ|T")
){var n=e.split(/[-TZ]/);t=new Date(Date.parse(n.slice(0,3).join("/")+" "+n[3]))}
else t=new Date(Date.parse(e));var r=["January","February","March","April","May","June"
,"July","August","September","October","November","December"];return r[t.getUTCMonth
()]+" "+t.getDate()+", "+t.getFullYear()}return""}},n.prototype.human_duration=function(
){return function(e){var t=this[e];return t==0?"0min":_.compact(_.collect([[60,"sec"
],[60,"min"],[24,"hr"],[1e3,"d"]],function(e){if(t>0){var n=t%e[0];t=(t-n)/e[0];if(
e[1]!="sec")return n+e[1]}})).reverse().join(" ")}},n.prototype.dynamic_font_size=
function(){var e=this.login;if(!e)return;var t=[[18,16],[15,18],[12,20],[10,24],[8
,25],[6,26],[1,28]];for(var n=0;n<t.length;n++){var r=t[n];if(e.length>=r[0])return r
[1].toString()+"px"}},n.prototype.dynamic_font_size2=function(){return function(e
){return e.length>20?"oversize":""}},n.prototype.track_duration=function(){var e=
this.duration;return _.compact(_.collect([[60,"sec"],[60,"min"],[24,"hr"],[1e3,"d"
]],function(t){if(e>0){var n=e%t[0];return e=(e-n)/t[0],("0"+(n+t[1])).substr(-2)
}})).reverse().join(":")},n.prototype.soundcloud_year=function(){return this.release_date
.substring(0,4)},n.prototype.first_sentence=function(){return function(e){var t=e
.split(" "),n=t[0]||"";n=(n.match(/.+/g)||[]).join(" ");var r=t[1]||100,i=_.map(n
.split(". "),function(e){return e.trim()});return i[0].length>r?n.substring(0,r)+"..."
:i.length>1?i[0]+".":n}},n.prototype.pluralize=function(){return function(e){var t=
e.split(" ");return this[t[0]]==1?t[1]:t[2]}},n.prototype.show_pagination=function(
){if(this.total_entries)return this.total_entries>this.per_page;if(this.pagination
)return this.pagination.total_pages>1},n.prototype.list_tags=function(){var e,t=[
];if(this.tag_list_cache)e=this.tag_list_cache.split(/,\s?/);else{if(!this.top_tags
)return"";e=this.top_tags}for(var r=0;r<e.length;r++)t.push(n.prototype.tag(e[r],!1
,!1,"tag"));return t.join("")},n.prototype.link_top_genre=function(){if(!this.tags_list
)return"";var e="";this["tags_list"].length==1?e+=this.tags_list[0]:this["tags_list"
].length==2?e+=this.tags_list[0]+" and "+this.tags_list[1]:_.each(this.tags_list,
function(t,n){n!=this["tags_list"].length-1?e+=t+", ":e+="and "+t},this);var n=_.
collect(this.tags_list,t.toUrlParam).join("+"),r='<a href="/explore/'+n+'">'+e+"</a>"
;return r},n.prototype.list_genres=function(){if(!this.genres)return"";var e=[];for(
var t=0;t<this.genres.length;t++)e.push(n.prototype.tag(this.genres[t],!1,!1,""))
;return e.join("")},n.prototype.list_artists=function(){if(!this.artist_tags)return""
;var e=[];for(var t=0;t<this.artist_tags.length;t++)e.push(n.prototype.artist_link
(this.artist_tags[t],!1,!1,""));return e.join("")},n.prototype.grid_tags=function(
){if(!this.tag_list_cache)return"";var e=this.tag_list_cache.split(/,\s?/),t=[];for(
var r=0;r<5;r++)e[r]&&t.push(n.prototype.tag(e[r],!1,!1,"tag"));return t.join("")
},n.prototype.first_tag=function(){if(!this.tag_list_cache)return"";var e=this.tag_list_cache
.split(/,\s?/);return e[0]},n.prototype.seo_pagination=function(){var e=this.link_structure||
(this.web_path||this.path)+"/::page::";ret="";if(this.pagination){var t=this.pagination
,n=t.total_pages&&t.total_pages<=1e3?t.total_pages:"1000+";if(!t.previous_page&&!
t.next_page)return"";ret+='<div class="new_pagination clear">';if(t.previous_page
){ret+='<div class="pages_before">',ret+='<a href="'+e.replace("::page::",t.previous_page
)+'" class="prev_page white_button"><span class="i-arrow-left"></span>&nbsp;&nbsp;Prev page</a> '
;for(page=t.previous_page-2;page<=t.previous_page;page++)page>0&&(ret+='<a href="'+
e.replace("::page::",page)+'" class="white_button">'+page+"</a> ");ret+="</div>"}
if(t.next_page){ret+='<div class="pages_after">',ret+='<a href="'+e.replace("::page::"
,t.next_page)+'" class="next_page white_button">Next page&nbsp;&nbsp;<span class="i-arrow-right"></span></a> '
;for(page=t.next_page+2;page>=t.next_page;page--)page<=t.total_pages&&(ret+='<a href="'+
e.replace("::page::",page)+'" class="white_button">'+page+"</a> ");ret+="</div>"}
ret+='<div class="page_counter">';if(t.previous_page||t.next_page)ret+=(t.page||t
.current_page)+" of "+n;ret+="</div>",ret+="</div>"}return ret},n.prototype.more_pagination=
function(e){return function(e){ret="";if(this.pagination&&this.pagination.next_page
){var t=this.path.replace(/[&|\?]page=[0-9]+/,"");t+=t.indexOf("?")>-1?"&":"?",ret+='<div class="more_pagination clear">'
,ret+='<a href="'+t+"page="+this.pagination.next_page+"&per_page="+this.pagination
.per_page+"&include="+this.include+'" class="more white_button">More</a> ',ret+='<div id="show-spinner" class="spin"><span style="display:none">&nbsp;</span></div>'
,ret+="</div>"}return ret}},n.prototype.badge=function(){return function(e){if(!this
.designation)return"";var t=e;return t||(t="small"),'<span href="/mixes/all/new?u='+
this.designation+'" class="badge_'+t+" badge_"+this.designation+'">'+this.designation
.replace("_"," ")+"</span>"}},n.prototype.page_break=function(e,t){return this.index!=1&&
this.index%e==1?'</div><div class="'+t+'" style="display: none;">':""},n.prototype
.spinner=function(){return function(e){return e?id='id="'+e+'-spinner"':id="","<div "+
id+' class="spinner"><span class="spin"></span></div>'}},n.prototype.similar=function(
e){return this.smart_type=="similar"?e:!1},n.prototype.collection_show_users=function(
){return this.mode.toLowerCase()=="feed"?"mixes_with_users":!1},n.prototype.tag_link=
function(){var e=typeof this=="object"?this.name:this;return n.prototype.tag(e,!1
,!1,"tag",this.artist_avatar)},n.prototype.tag=function(e,n,r,i,s,o,u){return'<a href="/explore/'+
t.toUrlParam(e)+'" class="'+i+" "+(n?" active":"")+(r?" just_clicked":"")+'" title="'+
e+'" '+(s?' style="background-color:'+s+"; color:"+o+"; border-color: "+s+'"':"")+">"+
(u?'<img src="'+u+'&w=64&h=64" class="avatar" />':"")+"<span>"+e+"</span>"+"</a>"
},n.prototype.artist_link=function(e,n,r,i){return'<a href="/explore/'+t.toUrlParam
(e)+'" class="tag '+i+" "+(n?" active":"")+(r?" just_clicked":"")+'" title="'+e+'"><span>'+
e+"</span>"+"</a>"},n.prototype.tags_path=function(e,n,r,i){newtags=_.collect(e,t
.toUrlParam).join("+");var s="mixes";return typeof n=="undefined"&&(n="",s="explore"
),newtags.length>0?url="/"+s+"/"+newtags+"/"+n+"?page="+r:url="/"+s+"/all/"+n+"?page="+
r,i&&(url+="&q="+i),url},n.prototype.imgix_url=function(e,t){if(!t)return"";var n=
e.split(/,\s*/),r=n[0],i=n[1],s,o,u,a;if(i){o=i.match(/w=(\d+)/i)[1],u=i.match(/h=(\d+)/i
)[1];if(window.dpr==2||window.dpr==3)o*=2,u*=2;var f=i.match(/&blur=(\d+)/i);f&&(
a=f[0])}if(t.cropped_imgix_url&&o)if(t.cropped_imgix_size<=o)s=t.cropped_imgix_url
;else{var l=0;while(l<IMGIX_PREFERRED_SIZES.length){if(IMGIX_PREFERRED_SIZES[l]>=
o||l==IMGIX_PREFERRED_SIZES.length-1){o=IMGIX_PREFERRED_SIZES[l];break}l+=1}s=t.cropped_imgix_url+"&w="+
o+"&h="+o}else t.original_imgix_url&&i?s=t.original_imgix_url+"&"+i:t.original&&t
.original.match("imgix")&&i?s=t.original+i:s=t[r];return a&&(s+=a),s.match(/images\.8tracks\.com/
)&&window.location.protocol=="https:"&&(s=s.replace("http://images.8tracks.com","https://d2ykdu8745rm9t.cloudfront.net"
)),s},n.prototype.dpr=function(){if(window.dpr!==undefined&&window.dpr>1)return"@2x"
},n.prototype.to_url_param=function(){return function(e){return t.toUrlParam(this
[e])}},n.prototype.buy_link_class=function(){if(this.buy_link&&!!this.buy_link.match
(/:\/\/.*\.bandcamp.com\//))return"bandcamp_buy"},n.prototype.facebook_authorize_button=
function(){return'<a href="/auth/facebook" class="facebook_connect_button facebook-signup" data-site="facebook" data-win-height="362" data-win-name="facebook" data-win-width="640" rel="popup" target="_blank" title="Connect with Facebook">  <span class="i-facebook icon"></span>  <span class="text">SIGN IN</span></a>'
},n.prototype.google_plus_authorize_button=function(){var e="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/youtube.readonly"
;return'<div class="google-plus-container" id="gplus-button"> <span class="i-gplus icon"></span> <span class="text">SIGN IN</span></div>'
},e.templateHelpers=new n({}),String.prototype.to_url_param=function(){return t.toUrlParam
(this)},String.prototype.blank=function(){return this.length===0},String.prototype
.capitalize=function(){return this[0].toUpperCase()+this.substr(1)},String.fromCamelCase=
function(){return this.match(/([A-Z]*[a-z0-9]+)/g).join("_").toLowerCase()},Number
.prototype.to_human_number=function(){return t.addCommas(this)},Number.prototype.
nonzero=function(){return this!==0},n}),define("hgn!templates/tracks/editable_track"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<span class="number">'
),r.b(r.v(r.f("number",e,t,0))),r.b("</span>"),r.b("\n"+n),r.b("\n"+n),r.b('<span class="player">'
),r.b("\n"+n),r.b('  <span class="i-play"></span>'),r.b("\n"+n),r.b('  <span class="i-pause"></span>'
),r.b("\n"+n),r.b('  <a href="#" class="button" title="Preview track"></a>'),r.b("\n"+
n),r.b("</span>"),r.b("\n"+n),r.b("\n"+n),r.b('<a href="#" class="x close_medium red_button" title="Remove track from playlist"><span class="i-x"></span></a>'
),r.b("\n"+n),r.b('<a href="#" class="add turquoise_button" title="Add track to playlist"><span class="i-plus"></span></a>'
),r.b("\n"+n),r.b("\n"+n),r.s(r.f("should_show_info",e,t,1),e,t,0,427,508,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b('<a href="#" class="info gray_button" title="See where this track is used">?</a>'
),n.b("\n")}),e.pop()),r.b("\n"+n),r.b("\n"+n),r.s(r.f("track",e,t,1),e,t,0,542,1461
,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('<div class="track_info">'),r.b("\n"+n),
r.b('  <span class="t">'),r.b(r.v(r.f("name",e,t,0))),r.b("</span>"),r.b("\n"+n),
r.b('  <span class="a">'),r.b(r.v(r.f("performer",e,t,0))),r.b("</span>"),r.b("\n"+
n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b('<div class="track_details clear">')
,r.b("\n"+n),r.b('  <div class="track_metadata">'),r.b("\n"+n),r.b('    <span class="track_edit_link">'
),r.b("\n"+n),r.b("      "),r.s(r.f("editable",e,t,1),e,t,0,768,857,"{{ }}")&&(r.
rs(e,t,function(e,t,n){n.b('<a href="/tracks/'),n.b(n.v(n.f("id",e,t,0))),n.b('/edit" class="edit icon-link"><span class="i-edit"></span>Edit</a>'
)}),e.pop()),r.b("\n"+n),r.b('      <span class="annotate" '),r.s(r.f("track_annotation"
,e,t,1),e,t,0,921,943,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('style="display: none;"'
)}),e.pop()),r.b('><a href="#" class="icon-link"><span class="i-annotation"></span> Annotate</a></span>'
),r.b("\n"+n),r.b("    </span>"),r.b("\n"+n),r.b("\n"+n),r.b('    <span class="player player_placeholder"></span>'
),r.b("\n"+n),r.b("\n"+n),r.s(r.f("release_name",e,t,1),e,t,0,1137,1235,"{{ }}")&&
(r.rs(e,t,function(e,t,r){r.b('    <div class="album">'),r.b("\n"+n),r.b('      Album: <span class="detail">'
),r.b(r.v(r.f("release_name",e,t,0))),r.b("</span>"),r.b("\n"+n),r.b("    </div>"
),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("year",e,t,1),e,t,0,1267,1354,"{{ }}")&&
(r.rs(e,t,function(e,t,r){r.b('    <div class="year">Year:'),r.b("\n"+n),r.b('      <span class="detail">'
),r.b(r.v(r.f("year",e,t,0))),r.b("</span>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"
)}),e.pop()),r.b("\n"+n),r.b('    <div style="clear: both;"></div>'),r.b("\n"+n),
r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="track_annotation">'),r
.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n")}),e.pop()),r.fl()}
,"",e,{});return n.template=t,n}),define("hgn!templates/tracks/editable_track_details"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.s(r.f("used_in_mixes"
,e,t,1),e,t,0,18,505,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('  <p class="owned_mixes_header"><b>"'
),r.b(r.v(r.f("track_name",e,t,0))),r.b('"</b> is used in '),r.b(r.v(r.f("num_mixes"
,e,t,0))),r.b(" "),r.b(r.v(r.f("mix_word",e,t,0))),r.b(".</p>"),r.b("\n"+n),r.b("  <ul>"
),r.b("\n"+n),r.s(r.f("owned_mixes",e,t,1),e,t,0,145,344,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.b('    <li class="owned_mix">'),r.b("\n"+n),r.b("      "),r.s(r.f("mix_cover_img"
,e,t,1),e,t,0,197,212,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq56, w=56&h=56")}
),e.pop()),r.b("\n"+n),r.b('      <span class="name"><a href="'),r.b(r.v(r.f("web_path"
,e,t,0))),r.b('" target="_blank" rel="external">'),r.b(r.v(r.f("name",e,t,0))),r.
b("</a></span>"),r.b("\n"+n),r.b("    </li>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.
b('    <p style="padding-top: 20px;"> If you want to delete this track from your library, please remove it from the playlists above. </p>'
),r.b("\n"+n),r.b("  </ul>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("used_in_mixes"
,e,t,1),e,t,1,0,0,"")||(r.b('  <p class="owned_mixes_header"><b>"'),r.b(r.v(r.f("track_name"
,e,t,0))),r.b('"</b> is not used in any mix.</p>'),r.b("\n"+n),r.b('  <a class="remove_track" href="#">'
),r.b("\n"+n),r.b('    <img src="/assets/icon/delete.track.png" />'),r.b("\n"+n),
r.b("    <span>delete it from your library</span>"),r.b("\n"+n),r.b("  </a>"),r.b
("\n")),r.fl()},"",e,{});return n.template=t,n}),define("views/editable_track_details_view"
,["views/trax_view","hgn!templates/tracks/editable_track_details","lib/_template_helpers"
],function(e,t,n){var r=e.extend({className:"track_details_box",events:{"click a.remove_track"
:"onRemove"},initialize:function(e){_.bindAll(this,"onTrackDestroyed"),this.info=
e.info,this.track=e.track,this.rendered=!1,this.track.bind("destroy",this.onTrackDestroyed
)},render:function(){var e=this.info.owned_mixes,r=e.length,i=r>1?"mixes":"mix",s=
r>0,o=new n({owned_mixes:e,used_in_mixes:s,mix_word:i,num_mixes:r,track_name:this
.track.get("name")}),u=t(o);this.$el.html(u),this.rendered=!0},show:function(){!this
.rendered&&this.render(),$.facebox(this.$el)},onRemove:function(e){e.preventDefault
(),this.track.remove()},onTrackDestroyed:function(){this.close(),$(document).trigger
("close.facebox")}});return r}),define("views/editable_track_view",["global_trax"
,"views/trax_view","views/track_annotation_view","views/track_form_view","models/track_annotation"
,"lib/_template_helpers","hgn!templates/tracks/editable_track","views/editable_track_details_view"
],function(e,t,n,r,i,s,o,u){var a=t.extend({tagName:"li",className:"editable_track track clear"
,initialize:function(t){this.$el=$(this.el),this.track=t.track,this.number=t.number
;if(!this.track)return;this.track.get("track_annotation")&&(this.track_annotation=new 
i(this.track.get("track_annotation"),{mix:e.mix,track:this.track})),_.bindAll(this
,"render","updateState","onSelected","onUnselected","updateNumber","annotate","onInfo"
,"onTrackDestroyed"),this.track.bind("change",this.render),this.track.bind("onStateChange"
,this.updateState),this.track.bind("onSelected",this.onSelected),this.track.bind("onUnselected"
,this.onUnselected),this.track.bind("destroy",this.onTrackDestroyed),_.isUndefined
(e.mix)||e.mix.onReady("tracks",_.bind(function(){e.mix.tracks.bind("onChangeOrder:"+
this.track.id,this.updateNumber)},this))},events:{"click .player":"onPlayClick","click a.add"
:"onAddClick","click a.edit":"showEditLightbox","click .annotate a":"annotate","click a.info"
:"onInfo"},render:function(e){var t;if(!this.track)return;this.$el.data("id",this
.track.get("id"));var n=new s({track:this.track.toJSON()});return n.number=this.number
,n.editable=this.ownedByCurrentUser(),n.should_show_info=!0,t=o(n),this.$el.html(
t),this.newAnnotation(),this.track.selected()?(this.$el.addClass("selected"),this
.track.get("uid").match&&this.track.get("uid").match(/^sc-/)&&(this.$el.addClass("soundcloud_unreplaceable"
),this.$(".track_details").prepend('<div class="warning_message">This SoundCloud track will no longer be available after September 28. <br /><a class="upload_track_link" href="#">Click here</a> to upload a replacement.</div>'
))):this.track.get("full_length")===!1&&this.$el.addClass("selected"),this.updateState
(),this},ownedByCurrentUser:function(){return e.currentUser.get("admin")||this.track
.get("user_id")==e.currentUser.id},onPlayClick:function(){return this.track.togglePlayPreview
(),!1},onAddClick:function(){return e.mix.tracks.addTrack(this.track),!1},onInfo:
function(){var e=this.track;return this.track.loadInfo().success(function(t){(new 
u({info:t,track:e})).show()}),!1},onTrackDestroyed:function(){e.hide_flash_error(
),this.$el.slideUp(200,this.close);var t={notices:"It may take a few minutes before the track goes away."
},n=1e4;e.update_flash(t,n,$("#belly"))},updateState:function(){this.$el.removeClass
("playing loading paused").removeClass(this.track.possibleValidationErrors.join(" "
)).addClass(this.track.playableState).addClass(this.track.validationErrors.join(" "
)),this.track.validationErrors.join(" ").match(/repeat_album/)},onSelected:function(
){this.$el.addClass("selected")},onUnselected:function(){this.$el.removeClass("selected"
)},showEditLightbox:function(e){var t=new r({model:this.track});return t.show(),!1
},updateNumber:function(e){this.number!==e&&(this.number=e,this.$(".number").html
(e))},newAnnotation:function(){this.track_annotation&&(this.annotationView=new n(
{track_annotation:this.track_annotation,parentView:this}),this.annotationView.render
(),this.$(".track_annotation").replaceWith(this.annotationView.el))},annotate:function(
){return this.$(".annotate").hide(),this.track_annotation||(this.track_annotation=new 
i({},{track:this.track,mix:e.mix})),this.newAnnotation(),this.annotationView.editMode
(),!1}});return a}),define("hgn!templates/tracks/featurefm",["hogan"],function(e)
{function n(){return t.render.apply(t,arguments)}var t=new e.Template(function(e,
t,n){var r=this;return r.b(n=n||""),r.b('<div id="feature_fm">'),r.b("\n"+n),r.s(
r.f("song",e,t,1),e,t,0,33,1615,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b("  <style>"
),r.b("\n"+n),r.b("  #player_artist_info_button.active:before{"),r.b("\n"+n),r.b("    border-top: 10px solid #2a0066;"
),r.b("\n"+n),r.b("  }"),r.b("\n"+n),r.b("  </style>"),r.b("\n"+n),r.b('  <!--div class="background_blur"></div-->'
),r.b("\n"+n),r.b('  <div class="container">'),r.b("\n"+n),r.b('    <div class="row">    '
),r.b("\n"+n),r.b('      <div id="artist_details" class="col-sm-8 col-xs-12">'),r
.b("\n"+n),r.b('        <div id="artist_photo"><a href="'),r.s(r.f("soundcloud_url"
,e,t,1),e,t,0,352,357,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b(n.v(n.d(".",e,t,0))
)}),e.pop()),r.s(r.f("soundcloud_url",e,t,1),e,t,1,0,0,"")||r.b(r.v(r.f("buy_url"
,e,t,0))),r.b('"><img width="120" src="'),r.b(r.v(r.f("albumart_url",e,t,0))),r.b
('" /></a></div>'),r.b("\n"+n),r.b("\n"+n),r.b('        <div id="artist_bio">'),r
.b("\n"+n),r.b('          <strong style="font-size: 16px;">'),r.b(r.v(r.d("artist.name"
,e,t,0))),r.b("</strong><br />"),r.b("\n"+n),r.b("          "),r.s(r.d("artist.bio"
,e,t,1),e,t,0,610,631,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("<p>"),n.b(n.v(n.d("artist.bio"
,e,t,0))),n.b("</p>")}),e.pop()),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.
b("\n"+n),r.b('        <div class="feature_links">'),r.b("\n"+n),r.b('          <div id="button-test" class="feature-fm-action-buttons" data-song-play-id="'
),r.b(r.v(r.f("song_play_id",e,t,0))),r.b('"></div>'),r.b("\n"+n),r.b("        </div>"
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("      "),r.b("\n"+n),r.b('      <div class="col-sm-4 hidden-xs">'
),r.b("\n"+n),r.b("        <p>"),r.b("\n"+n),r.s(r.f("soundcloud_url",e,t,1),e,t,0
,924,1093,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('            <a href="'),n.b(n.
v(n.f("soundcloud_url",e,t,0))),n.b('" target="_blank" rel="external"><span class="favicon_soundcloud"></span>Hear on <strong>Soundcloud</strong></a><br />'
),n.b("\n")}),e.pop()),r.s(r.f("buy_song_url",e,t,1),e,t,0,1140,1263,"{{ }}")&&(r
.rs(e,t,function(e,t,n){n.b('            <a href="'),n.b(n.v(n.f("buy_song_url",e
,t,0))),n.b('" target="_blank" rel="external"><strong>Buy now &rarr;</strong></a><br />'
),n.b("\n")}),e.pop()),r.b('          <a href="'),r.b(r.v(r.f("share_url",e,t,0))
),r.b('" target="_blank" rel="external">Hear on <strong>Feature.fm</strong></a><br />'
),r.b("\n"+n),r.b("        </p>"),r.b("\n"+n),r.b("\n"+n),r.b('        <div class="feature_logo">'
),r.b("\n"+n),r.b('          Promoted via <a href="http://feature.fm" target="_blank"><img src="/assets/logo/featurefm.png" width="80" /></a>'
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r
.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n")}),e.pop()),r.b
("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("collections/_base_collection"
,[],function(){return typeof App.Collections.BaseCollection!="undefined"?App.Collections
.BaseCollection:(App.Collections.BaseCollection=Backbone.Collection.extend({load:
function(e){if(_.isArray(e)){var t=[];return _.each(e,function(e){t.push(this.loadOne
(e))},this),t}return this.loadOne(e)},loadOne:function(e){return this.loadOneByAttributes
(e)},loadOneByAttributes:function(e){if(_.isUndefined(e))return!1;var t=this.get(
e.id);return t?t.set(e):this.add(e),this.get(e.id)}}),App.Collections.BaseCollection
)}),define("lib/player/preview_player",["lib/client_storage","global_trax","lib/jsonh.jquery"
],function(e,t,n){if(!_.isUndefined(t.previewPlayer))return t.previewPlayer;var r=
Class.extend({initialize:function(t){_.bindAll(this,"fadeOut","whilePlaying","seekTo"
),this.soundManager=t,this.smSound=null,this.setVolume(e.get("vol")||80)},togglePlay
:function(e){e.playingSample==0?this.playingSample=!1:this.playingSample=!0,this.
playable===e?this.smSound&&(this.smSound.paused?this.resume():this.pause()):this.
play(e)},pause:function(){this.playable&&this.playable.onPauseAction(),this.smSound&&
this.soundManager.pause(this.smSound.sID)},resume:function(){t.pausePlayback(),this
.playable.onPlayAction(),this.soundManager.resume(this.smSound.sID),this.smSound&&
(this.smSound.playState===0?this.soundManager.play(this.smSound.sID):this.soundManager
.resume(this.smSound.sID))},play:function(e){t.pausePlayback(),t.windowIsPlaying(
),e.onPlayAction(),this.unloadPlayable(),this.playable=e;if(this.playable.isExternal
()){var n=this.playable.getStreamUrl();if(!n)return!1;this.playingSample=!1,this.
playUrl(n)}else this.playable.get("play_full_track")?this.playable.get("stream_url"
)?this.playUrl(this.playable.get("stream_url")):this.playFullTrackId(this.playable
.id):this.playTrackId(this.playable.id)},playFullTrackId:function(e){return this.
playTrackId(e,"/sets/play_full_track/")},playTrackId:function(e,r){r=r||"/sets/play_track/"
,n.now_with_context(r+e,this,function(e){e.success&&(t.isOwner(this.playable)&&(this
.playingSample=!1),this.smPlay(e.track.id,e.track.track_file_stream_url))},{spinner
:"none"})},playUrl:function(e){this.smPlay(Math.round(1e7*Math.random()),e)},smPlay
:function(t,n){t="p"+t,n=n;if(!n)return App.Trax.show_flash_error_with_timeout('"'+
this.playable.get("name")+'" is unavavailable for preview right now.',3e3),!1;this
.soundManager.onready(_.bind(function(){this.soundManager.createSound({id:t,url:n
,onplay:_.bind(function(){this.playable.onSmPlay()},this),onresume:_.bind(function(
){this.playable.onSmPlay()},this),whileplaying:this.whilePlaying,onfinish:_.bind(
function(){var e=this.playable;this.unloadPlayable(),e.onFinishAction()},this)}),
this.smSound=this.soundManager.getSoundById(t),this.soundManager.setVolume(this.smSound
.sID,e.get("vol")||80),this.soundManager.play(this.smSound.sID),this.playingSample&&
this.smSound.onposition(27e3,_.bind(this.fadeOut,this))},this))},seekTo:function(
e){var t=parseInt(e*this.smSound.durationEstimate,10);try{this.smSound.duration<t&&
(t=this.smSound.duration-1e3),this.soundManager.setPosition(this.smSound.sID,t),this
.soundManager.unmute(this.smSound.sID)}catch(n){throw n}},unloadPlayable:function(
){this.playable&&(this.pause(),this.playable=null),this.smSound&&(this.soundManager
.stop(this.smSound.sID),this.soundManager.unload(this.smSound.sID),this.smSound=null
)},isPlaying:function(){return!!this.smSound&&!this.smSound.paused},fadeOut:function(
e,t){if(this.isPlaying()){_.isUndefined(t)&&(t=this.smSound.sID),this.fadingOut=!0
;var n=parseInt(this.smSound.volume,0);if(n>0)this.soundManager.setVolume(t,n-1),
this.smSound.sID==t&&_.delay(this.fadeOut,15,e,t);else{var r=this.playable;_.isFunction
(e)?e():this.unloadPlayable(),r.onFinishAction()}}},setVolume:function(t){t>100&&
(t=100),t<0&&(t=0),this.soundManager.defaultOptions.volume=t,this.smSound&&this.soundManager
.setVolume(this.smSound.sID,t),e.set("vol",t)},whilePlaying:function(){this.playable
.onWhilePlaying(this.smSound.position)}});return r}),define("models/modules/playable"
,["lib/player/preview_player","global_trax"],function(e,t){var n,r={play:function(
){_.isUndefined(t.previewPlayer)&&(t.previewPlayer=new e(soundManager)),_.isUndefined
(n)&&(n=t.previewPlayer),n.togglePlay(this)},togglePlayPreview:function(e){this.playingSample=
e,this.play()},isPlaying:function(){return this.playableState=="playing"},pause:function(
){n&&n.playable===this&&n.pause()},resume:function(){_.isUndefined(n)||n.playable!==
this?this.play():n.resume()},seek:function(e){n.seekTo(e)},isExternal:function(){
throw"Not implemented yet"},onPauseAction:function(){this.playableState="paused",
this.trigger("onStateChange")},onPlayAction:function(){this.playableState="loading"
,this.trigger("onStateChange")},onSmPlay:function(){this.playableState="playing",
this.trigger("onStateChange")},onFinishAction:function(){this.playableState="paused"
,this.trigger("onStateChange"),this.trigger("onFinish")},onWhilePlaying:function(
e){this.trigger("whilePlaying",e,n.smSound.durationEstimate)}};return r}),define("models/track"
,["global_trax","models/modules/playable","lib/jsonh.jquery","lib/events"],function(
e,t,n,r){var i=Backbone.Model.extend(t).extend({urlRoot:"/tracks",validationErrors
:[],possibleValidationErrors:["dupe","missing_metadata","repeat_artist","repeat_album"
,"repeat_track","processing","saving"],initialize:function(){e.mix&&this.updateValidationErrors
(e.mix.validationErrorsForTrack(this.get("uid"))),_.bindAll(this,"onUnselected","sendDestroyEvent"
),this.bind("onUnselected",this.onUnselected)},sync:function(t,r,i){n.ajax({url:this
.url(),data:this.toRails(),type:t=="create"?"POST":"PUT",complete:_.bind(function(
t){t.success?(i.success(r,t.track,i),t.mix&&e.mix.set(t.mix)):i.error(t.track)},this
),spinner:"#track_update-spinner"})},mixAttrsToStore:function(){return{id:this.id
}},isExternal:function(){return this.get("stream_source")=="ext_sc"||this.get("stream_source"
)=="match_sc"?!0:!1},getStreamUrl:function(){return this.get("track_file_stream_url"
)},toRails:function(){var t={track:{name:this.get("name"),performer:this.get("performer"
),release_name:this.get("release_name"),year:this.get("year"),buy_url:this.get("buy_url"
)}};return this.selected()&&(t.mix_id=e.mix.id),t},selected:function(){return e.mix?
e.mix.hasTrackUid(this.get("uid")):null},onUnselected:function(){this.isPlaying()&&
e.previewPlayer.fadeOut()},loadInfo:function(){var e=this.url();return $.ajax({url
:e+"/info",data:{format:"jsonh"}})},remove:function(){var e=this.url(),t=$.ajax({
type:"delete",url:e});return t.success(this.sendDestroyEvent),t},sendDestroyEvent
:function(){this.trigger("destroy")},updateValidationErrors:function(t){_.isEqual
(this.validationErrors,t)||(this.validationErrors=t,this.get("missing_metadata")&&
this.validationErrors.push("missing_metadata"),_.include(this.validationErrors,"processing"
)&&e.mix&&e.mix.enableUpdatePolling(),this.trigger("onStateChange"))},openYoutubePopup
:function(){r.clickYoutube(),e.youtubePopup=window.open("about:blank","youtube","height=525,width=700"
),this.findOnYoutube(function(t){if(t&&t.items&&t.items.length){var n=t.items[0].
id.videoId;e.youtubePopup.location.href="http://www.youtube.com/v/"+n+"?autoplay=1"
,e.pausePlayback()}else e.youtubePopup.close(),e.show_flash_error("Sorry, we couldn't find a matching YouTube video for that track."
)})},getYoutubeEmbed:function(t){var t=t;this.findOnYoutube(function(n){if(n&&n.items&&
n.items.length){var r=n.items[0].id.videoId;t.apply(window,[r])}else e.show_flash_error
("Sorry, we couldn't find a matching YouTube video for that track."),t.apply()})}
,findOnYoutube:function(e,t){_.isFunction(e)&&(t=e,e={limit:1});var n="AIzaSyD6SKUqnOJuaM1LQVdduQviPvOlLXRz65I"
,r=e.limit||1,i=this.attributes.performer,s=this.attributes.name;$.ajax({url:"https://www.googleapis.com/youtube/v3/search?part=snippet&key="+
n+"&maxResults="+r,dataType:"jsonp",data:{q:i+" "+s},success:t})},toggleFav:function(
e,t){e=e||!1,!this.get("faved_by_current_user")&&r.favTrack(),this.set({faved_by_current_user
:!this.attributes.faved_by_current_user},{silent:!1});if(e)return;var i=t?{from_mix_id
:t.id}:{};n.now("/tracks/"+this.id+"/toggle_fav",i,_.bind(function(e){this.attributes
["faved_by_current_user"]!=e.track.faved_by_current_user&&this.toggleFav(!0)},this
))}});return i}),define("models/external_track",["global_trax","models/track"],function(
e,t){var n=t.extend({initialize:function(){this.attributes=_.extend(this.attributes
,this.mixAttrsToStore())},sync:function(){return!1},getStreamUrl:function(){throw"Not implemented yet"
},selected:function(){return e.mix?e.mix.hasTrackUid(this.get("uid")):null},mixAttrsToStore
:function(){throw"Not implemented yet"},isExternal:function(){return!0}});return n
}),define("models/soundcloud_track",["models/external_track"],function(e){var t=e
.extend({getStreamUrl:function(){return this.get("stream_url")?this.get("stream_url"
).match(/\?client_id=/)?this.get("stream_url"):this.get("stream_url")+(this.get("stream_url"
).match(/\?/)?"&":"?")+"client_id="+SOUNDCLOUD_CLIENT_ID:(alert("this track is not streamable"
),null)},mixAttrsToStore:function(){return{id:this.get("id"),title:this.get("title"
),permalink_url:this.get("permalink_url"),duration:this.get("duration"),playback_count
:this.get("playback_count"),username:this.get("user")?this.get("user").username:this
.get("username"),stream_url:this.get("stream_url"),purchase_url:this.get("purchase_url"
),release:this.get("release"),year:this.get("release_year"),name:this.get("title"
),performer:this.get("user")?this.get("user").username:"",url:this.get("stream_url"
),release_name:this.get("release")}}});return t}),define("collections/soundcloud_tracks"
,["collections/_base_collection","models/soundcloud_track"],function(e,t){if(typeof 
SC_TRACKS!="undefined")return SC_TRACKS;var n=e.extend({model:t,loadOne:function(
e){var t=e.id.toString();return t.indexOf("sc")===-1&&(e.id="sc-"+t,e.uid="sc-"+t
),this.loadOneByAttributes(e)}});return SC_TRACKS=new n,SC_TRACKS}),define("models/fma_track"
,["models/external_track"],function(e){var t=e.extend({getStreamUrl:function(){return this
.get("track_url")+"/download"},mixAttrsToStore:function(){return{id:this.get("id"
),title:this.get("track_title"),name:this.get("track_title"),performer:this.get("artist_name"
),release_name:this.get("track_title"),year:null,url:this.getStreamUrl()}}});return t
}),define("collections/fma_tracks",["collections/_base_collection","models/fma_track"
],function(e,t){if(typeof FMA_TRACKS!="undefined")return FMA_TRACKS;var n=e.extend
({model:t,loadOne:function(e){return e.id="fma-"+e.track_id,this.loadOneByAttributes
(e)}});return FMA_TRACKS=new n,FMA_TRACKS}),define("collections/tracks",["collections/_base_collection"
,"models/track","collections/soundcloud_tracks","collections/fma_tracks"],function(
e,t,n,r){if(typeof App.Collections.Tracks!="undefined")return App.Collections.Tracks
;var i=e.extend({model:t,getByUid:function(e){if(_.isString(e)&&e.match(/^sc-/))return n
.get(e);if(_.isString(e)&&e.match(/^fma-/))return r.get(e);var t=this.get(e);return t&&
_.isString(t.get("uid"))&&t.get("uid").match(/^(sc|ofm|fma)-/)&&this.getByUid(t.get
("uid"))?this.getByUid(t.get("uid")):t},loadByUids:function(e){return m=[],_.each
(e,function(e){m.push(this.getByUid(e))},this),m}});return App.Collections.Tracks=new 
i,App.Collections.Tracks}),define("views/feature_fm_view",["global_trax","views/trax_view"
,"lib/jsonh.jquery","lib/client_storage","hgn!templates/tracks/featurefm","collections/tracks"
],function(e,t,n,r,i,s){var o=t.extend({api_key:"a24448de641e8639c531b7cec403c1ef"
,scriptUrl:"//www.feature.fm/widgets/init.js",events:{},initialize:function(e){_.
bindAll(this,"show","enableTracking","render","onEverySecond","onSkip","onFinish"
,"onFav","getTrack","resolve","bindTrackEvents","onIframeClose"),this.mixPlayer=e
.mixPlayer,this.mixPlayerView=e.mixPlayerView,this.token=r.get("feature_fm_token"
)},setup:function(e){var t=this.scriptUrl;try{window.featureFM=function(e,n,r){var i
,s,o=e.getElementsByTagName(n)[0];if(e.getElementById(r))return;return s=e.createElement
(n),s.id=r,s.src=t,o.parentNode.insertBefore(s,o),window.featureFM||(i={_e:[],ready
:function(e){i._e.push(e)}})}(document,"script","featurefm-widgets"),window.featureFM
.ready=_.bind(e)}catch(n){this.onFinish()}$("head").append('<link rel="stylesheet" href="https://ds6y5vhqiduvy.cloudfront.net/__iframe-8tracks-banner.css">'
)},show:function(){if(!window.featureFM){this.setup(this.show);return}this.organic=!1
,featureFM.api.setApiKey(this.api_key),this.token?(featureFM.api.setConsumer(this
.token),this.getTrack()):this.identify(this.getTrack)},enableTracking:function(e)
{e&&(this.track=e,this.organic=!0);if(!window.featureFM){this.setup(this.enableTracking
);return}this.song_play_id=this.track.getStreamUrl().match(/\/([0-9a-f]+)\??|$/i)
[1],featureFM.api.setApiKey(this.api_key),this.token?(featureFM.api.setConsumer(this
.token),this.bindTrackEvents()):this.identify(this.bindTrackEvents)},identify:function(
t){var n,i,s;e.currentUser&&(n=e.currentUser.get("id"),i={M:"male",F:"female"}[e.
currentUser.get("gender")]||null,s=App.Trax.currentUser.get("dob_year")),featureFM
.api.registerNewConsumer(n,i,s,_.bind(function(e,n){if(!!e)return console.log(n.message
),!1;this.token=n.consumer_token,r.set("feature_fm_token",this.token),featureFM.api
.setConsumer(this.token),t.call()},this),{type:"POST"})},getTrack:function(){var e=
_.union(this.mixPlayer.mix.get("genres"),this.mixPlayer.mix.get("tag_list_cache")
.split(", ")),t=this.ffmGenres(e),n=e,r=_.union(this.mixPlayer.mix.get("top_artists"
),this.mixPlayer.mix.get("related_artists"),this.mixPlayer.mix.get("artist_list")
);featureFM.api.getFeaturedSongV3("play",1,null,t,n,!1,r,_.bind(function(e,t){t.data&&
t.data.song?(this.trackResponse=t.data,this.song_play_id=this.trackResponse.song_play_id
,this.playTrack(this.trackResponse.song),this.renderBanner(t)):(this.mixPlayer.timeForNextMix
(!0),this.close())},this),{type:"POST"})},resolve:function(e,t){e&&(this.query=e)
,t&&(this.resolveCallback=t);if(!window.featureFM){this.setup(this.resolve);return}
featureFM.api.setApiKey(this.api_key);if(!this.token){this.identify(this.resolve)
;return}n.now(this.query.replace("www","api").replace("staging","api.staging").replace
("/share/","/thread/"),{consumer_token:this.token,api_key:this.api_key},_.bind(function(
e){e.data.song.id||(e.data.song.id=parseInt(e.data.song_play_id.slice(-10),16));var t=
this.loadTrack(e.data.song),r=t;r.track_file_stream_url=e.data.song.stream_url,n.
now("/tracks/fav_and_create",{external_track:r,skip_fav:1},this.resolveCallback,{
type:"POST"})},this)),this.query=null},render:function(e){var t=i(e);$("#player_artist_details"
).html(t),this.mixPlayerView.showArtistDetails(!0),this.mixPlayerView.showArtistPhoto
(),featureFM.widgets.loadButtons(this.token)},renderBanner:function(e){$("#player_artist_details"
).removeClass("hidden-xs collapsed").addClass("feature_fm_details"),featureFM.api
.showBanner("player_artist_details",e),this.mixPlayerView.showArtistDetails(!0),featureFM
.hideBanner=this.onIframeClose},onIframeClose:function(){return $("#player_artist_details"
).addClass("collapsed"),!1},playTrack:function(e){var t=this.loadTrack(e);this.mixPlayer
.unloadTrack(),this.mixPlayer.updateSetAndPlay({track:t,after_end:!0}),this.track=
this.mixPlayer.track,this.bindTrackEvents(),this.mixPlayerView.showCurrentTrack({
track:this.track})},bindTrackEvents:function(){this.mixPlayer.on("skip",this.onSkip
),this.track.bind("fav",this.onFav),this.mixPlayer.trackPlayer.on("finish",this.onFinish
),this.mixPlayer.trackPlayer.on("everySecond",this.onEverySecond)},loadTrack:function(
e){return{id:"ffm-"+e.id,uid:"ffm-"+e.id,partner:"ffm",partner_id:e.id,name:e.title
,performer:e.artist.name,release_name:"Promoted via Feature.fm",buy_link:e.buy_song_url||
e.soundcloud_url||e.share_url,buy_text:e.buy_song_url?"Buy":"Share",duration:e.duration
,full_length:!0,sponsored:!0,track_file_stream_url:e.stream_url+"?consumer_token="+
this.token,artist:{name:e.artist.name,bio:e.artist.bio,bio_url:e.artist.facebook_page_url
}}},onEverySecond:function(e,t){featureFM.api.playProgressUpdate(e,this.song_play_id
)},onSkip:function(){var e=this.mixPlayer.trackPlayer.currentPositionInMs/1e3||0;
featureFM.api.playProgressUpdate(e,this.song_play_id),featureFM.api.reportSkip(this
.song_play_id),this.onFinish()},onFinish:function(){this.close()},onFav:function(
e){console.log("onFav: "),featureFM.api.reportFavorite(this.song_play_id);var t=this
.track.toJSON();this.organic||(t.track_file_stream_url=this.trackResponse.song.stream_url
,n.now("/tracks/fav_and_create",{external_track:t},function(e){},{type:"POST"}))}
,onClose:function(){this.mixPlayer.unbind("skip",this.onSkip),this.mixPlayer.trackPlayer
.unbind("finish",this.onFinish),this.mixPlayer.trackPlayer.unbind("everySecond",this
.onEverySecond),$("#player_artist_details").addClass("collapsed").removeClass("feature_fm_details"
),featureFM.api.destroyBanner()},ffmGenres:function(e){var t={rock:0,"classic rock"
:0,metal:0,punk:0,"soul/r&b":1,soul:1,"r&b":1,rnb:1,"alternative/indie":2,alternative
:2,indie:2,"indie rock":2,"alternative rock":2,pop:3,"electronica/dance":4,electronic
:4,dance:4,dubstep:4,electro:4,trance:4,"drum n bass":4,dnb:4,"rap/hip hop":5,rap
:5,"hip hop":5,"hip-hop":5,"comedy/spoken word":6,comedy:6,"spoken word":6,world:7
,"classical/opera":8,classical:8,opera:8,piano:8,"reggae/ska":9,reggae:9,ska:9,dub
:9,"christian/gospel":10,christian:10,gospel:10,soundtracks:11,soundtrack:11,ost:11
,"new age":12,folk:13,"indie folk":13,acoustic:13,"singer-songwriter":13,"singer/songwriter"
:13,latin:14,"cast recordings/cabaret":15,country:16,instrumental:17,"children's"
:18,jazz:19,vocals:20,seasonal:21,christmas:21,blues:22},n=[];for(var r=0;r<e.length
;r++)n.push(t[e[r]]);return _.uniq(_.compact(n))}});return o}),define("hgn!templates/tracks/track_search"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('  <div class="tracks">'
),r.b("\n"+n),r.b('    <div id="track_search_header">'),r.b("\n"+n),r.b('      <form action="/tracks" method="GET" id="search_tracks_sidebar">'
),r.b("\n"+n),r.b('        <input type="text" name="q" class="tracks_q roundText" placeholder="Search tracks" autocomplete="off" />'
),r.b("\n"+n),r.b('        <span class="i-search"></span>'),r.b("\n"+n),r.b('        <div id="tracks-search-spinner" class="spin"><span>&nbsp;</span></div>'
),r.b("\n"+n),r.b("      </form>"),r.b("\n"+n),r.b("\n"+n),r.b("    </div>"),r.b("\n"+
n),r.b('    <div id="track_search_results">'),r.b("\n"+n),r.b("\n"+n),r.b('      <div class="crate">'
),r.b("\n"+n),r.b('        <div class="crate_header">'),r.b("\n"+n),r.b('          <div id="track_search_pagination" class="mini_paging">'
),r.b("\n"+n),r.b('            <a href="#" class="icon-link prev inactive" title="Previous page of tracks"><span class="i-chevron-left"></span> Prev</a>'
),r.b("\n"+n),r.b('            <a href="#" class="icon-link next" title="Next page of tracks">Next <span class="i-chevron-right"></span></a>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b('          <h6 style="display: inline;" class="black">My Crate</h6>'
),r.b("\n"+n),r.b('          <span class="my_tracks_count"></span>'),r.b("\n"+n),
r.b("        </div>"),r.b("\n"+n),r.b("\n"+n),r.b('        <div id="my_tracks_results" class="section" data-category="my" style="display: none;">'
),r.b("\n"+n),r.b('          <a class="upload_tracks_link icon-link turquoise" id="upload_to_my_tracks" href="#"><span class="i-arrow-up"></span>Upload tracks</a>'
),r.b("\n"+n),r.b('          <h6 class="section_header">Uploads</h5>'),r.b("\n"+n
),r.b("\n"+n),r.b('          <div class="collapsable">'),r.b("\n"+n),r.b('            <ul class="track_results results clear"></ul>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("\n"+n),r.b('          <div style="clear:both;"></div>'
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("\n"+n),r.b('        <!--div id="fav_tracks_results" class="section" data-category="fav" style="display:none;">'
),r.b("\n"+n),r.b('          <h6 class="section_header">Favorite tracks</h5>'),r.
b("\n"+n),r.b('          <div class="collapsable">'),r.b("\n"+n),r.b('            <ul class="track_results results clear"></ul>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b('          <div style="clear:both;"></div>'
),r.b("\n"+n),r.b("        </div-->"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n)
,r.b("\n"+n),r.b('      <div class="crate">'),r.b("\n"+n),r.b('        <div class="crate_header">'
),r.b("\n"+n),r.b('          <div id="track_search_pagination" class="mini_paging">'
),r.b("\n"+n),r.b('            <a href="#" class="icon-link prev inactive" title="Previous page of tracks"><span class="i-chevron-left"></span> Prev</a>'
),r.b("\n"+n),r.b('            <a href="#" class="icon-link next" title="Next page of tracks">Next <span class="i-chevron-right"></span></a>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b('          <h6 style="display: inline;" class="black">Library</h6>'
),r.b("\n"+n),r.b('          <span class="library_tracks_count"></span>'),r.b("\n"+
n),r.b("        </div>"),r.b("\n"+n),r.b("\n"+n),r.s(r.d("currentUser.admin",e,t,1
),e,t,0,2563,2903,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('        <div id="trax_tracks_results" class="section" data-category="trax" style="display: none;">'
),r.b("\n"+n),r.b('          <!--h6 class="section_header">8tracks Library</h5-->'
),r.b("\n"+n),r.b('          <div class="collapsable">'),r.b("\n"+n),r.b('            <ul class="track_results results clear"></ul>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("\n"+n),r.b('          <div style="clear:both;"></div>'
),r.b("\n"+n),r.b("        </div>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.b('        <div id="rf_tracks_results" class="section" data-category="rf" style="display: none;">'
),r.b("\n"+n),r.b('          <h6 class="section_header">Public Library</h5>'),r.b
("\n"+n),r.b('          <div class="collapsable">'),r.b("\n"+n),r.b('            <ul class="track_results results clear"></ul>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("\n"+n),r.b('          <div style="clear:both;"></div>'
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("\n"+n),r.b('        <div id="trax_tracks_results" class="section" data-category="trax" style="display: none;">'
),r.b("\n"+n),r.b("          <!--h5>8tracks</h5-->"),r.b("\n"+n),r.b('          <div class="collapsable">'
),r.b("\n"+n),r.b('            <ul class="track_results results clear"></ul>'),r.
b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("\n"+n),r.b('          <div style="clear:both;"></div>'
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("\n"+n),r.b('        <!--div id="rf_tracks_results" class="section" data-category="rf" style="display: none;">'
),r.b("\n"+n),r.b("          <h5>Public Library</h5>"),r.b("\n"+n),r.b('          <div class="collapsable">'
),r.b("\n"+n),r.b('            <ul class="track_results results clear"></ul>'),r.
b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("\n"+n),r.b('          <div style="clear:both;"></div>'
),r.b("\n"+n),r.b("        </div-->"),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+
n),r.s(r.d("currentUser.can_use_network_tracks",e,t,1),e,t,0,3903,4241,"{{ }}")&&
(r.rs(e,t,function(e,t,r){r.b('        <div id="network_tracks_results" class="section" data-category="network" style="display:none;">'
),r.b("\n"+n),r.b('          <h6 class="section_header">Network tracks</h5>'),r.b
("\n"+n),r.b('          <div class="collapsable">'),r.b("\n"+n),r.b('            <ul class="track_results results clear"></ul>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b('          <div style="clear:both;"></div>'
),r.b("\n"+n),r.b("        </div>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.b("\n"+n),
r.b('        <div id="fma_tracks_results" class="section" data-category="fma" style="display: none;">'
),r.b("\n"+n),r.b('          <h6 class="section_header">Free Music Archive</h5>')
,r.b("\n"+n),r.b('          <div class="collapsable">'),r.b("\n"+n),r.b('            <ul class="track_results results clear">'
),r.b("\n"+n),r.b("            </ul>"),r.b("\n"+n),r.b("          </div>"),r.b("\n"+
n),r.b("\n"+n),r.b('          <div style="clear:both;"></div>'),r.b("\n"+n),r.b("        </div>"
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("\n"+n),r.b("    </div>"),r.b("\n"+
n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.fl()},"",e,{});return n
.template=t,n}),define("views/track_search_view",["global_trax","views/trax_view"
,"views/editable_track_view","views/feature_fm_view","collections/tracks","lib/jsonh.jquery"
,"hgn!templates/tracks/track_search"],function(e,t,n,r,s,o,u){var a=t.extend({el:"#track_search"
,events:{"click .upload_tracks_link":"upload_tracks","click #track_search_pagination a:not(.inactive)"
:"paging","click .section_header":"categoryChanged","keyup .tracks_q":"triggerDelayedSearch"
},initialize:function(e){_.bindAll(this,"onFormSubmit","showResolvedTrack"),this.
requestsCountValue=0,this.lastSearchCategories=[],this.template=u,this.$el=$(this
.el),this.stick=1,this.currentPage=1,$(window).bind("resize",this.resizeTrackSearch
)},render:function(){return this.$el.html(this.template({currentUser:e.currentUser
.toJSON()})),this.$("form").submit(this.onFormSubmit),this},show:function(){e.trackSearchView=
this,$("#tracklist").append(this.render().el),this.search()},incrementRequestsCount
:function(e){this.requestsCountValue=this.requestsCountValue+e,this.requestsCountValue>0?
this.$el.addClass("loading"):this.$el.removeClass("loading")},search:function(t){!
_.isUndefined(e.previewPlayer)&&e.previewPlayer.playable&&!e.previewPlayer.playable
.selected()&&e.previewPlayer.fadeOut(),$section=this.$(".section.collapsed").addClass
("loading").find("ul").empty(),this.currentPage=t||1,this.currentPage>1?this.$("#track_search_pagination .prev"
).removeClass("inactive"):this.$("#track_search_pagination .prev").addClass("inactive"
),this.lastSearchCategories=this.selectedCategories();var n=$(".tracks_q").val();
if(n.match(/feature\.fm/)){this.resolveFeatureFmTrack(n);return}this.searchBackend
(n)},selectedBackendCategories:function(){return _.intersection(this.selectedCategories
(),["my","network","fav","rf","trax"])},searchBackend:function(e){var t=12,n=this
.selectedBackendCategories();if(n.length>0){var r={q:e,page:this.currentPage,per_page
:t,categories:n.join(",")};this.incrementRequestsCount(1),this._request&&(this._request
.abort(),this.incrementRequestsCount(-1)),this._request=o.now_with_context("/tracks/search"
,r,this,function(e){for(i=0;i<n.length;i++){var t=n[i];if(e[t]&&e[t].length>0)this
.updateTrackSearchResults(t,e[t]);else{var s=r.q.length>0?"No results.":"You haven't uploaded anything yet."
;if(t=="my"){var o=this.ulForCategory(t);o.empty().append('<li class="blank_result">'+
s+' <a class="upload_tracks_link">Click here</a> to upload tracks from your computer.</li>'
),o.parents(".section").removeClass("loading")}else if(t=="trax"){var o=this.ulForCategory
(t);o.show().empty().append('<li class="blank_result">Use the search bar above to find tracks for your playlist!</li>'
)}}}this.incrementRequestsCount(-1)},{locking:!0,spinner:!1})}},selectedCategories
:function(){return _.map(this.$(".section:not(.collapsed)"),function(e){return $(
e).data("category")})},onFormSubmit:function(){return this.search(),!1},triggerDelayedSearch
:function(){clearTimeout(this.searchTimer),this.searchTimer=setTimeout(_.bind(function(
){this.search()},this),200)},categoryChanged:function(e){var t=$(e.currentTarget)
,n=t.parent(),r=n.find(".collapsable");n.hasClass("collapsed")?(n.removeClass("collapsed"
),r.show(),this.triggerSearchIfOutdatedFor(n.data("category"))):(n.addClass("collapsed"
),r.hide())},triggerSearchIfOutdatedFor:function(e){_.indexOf(this.lastSearchCategories
,e)===-1&&this.search()},updateTrackSearchResults:function(e,t){var r=this.ulForCategory
(e);r.empty().parents(".section").removeClass("loading"),_.each(t,function(e){if(
_.isNull(e))return;var t=new n({track:s.load(e)});try{r.append(t.render().el)}catch(
i){}})},ulForCategory:function(e){return this.$("#"+e+"_tracks_results").show().find
(".track_results")},paging:function(e){var t;return $(e.currentTarget).hasClass("next"
)?t=this.currentPage+1:this.currentPage>1&&(t=this.currentPage-1),this.search(t||1
),!1},upload_tracks:function(){return $("#trackdrop_input").show(),$("#track_file"
).click(),!1},resolveFeatureFmTrack:function(e){this.feature_fm_view||(this.feature_fm_view=new 
r({})),this.feature_fm_view.resolve(e,this.showResolvedTrack)},showResolvedTrack:
function(e){e.track.full_length=!0,this.updateTrackSearchResults("my",[e.track])}
});return a}),define("hgn!templates/mixes/validation",["hogan"],function(e){function n
(){return t.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=
this;return r.b(n=n||""),r.b('<div id="validation_container" class="container">')
,r.b("\n"+n),r.b('  <div class="row clearfix">'),r.b("\n"+n),r.b('   <div id="mix_validation" class="'
),r.s(r.f("publishable",e,t,1),e,t,0,130,141,"{{ }}")&&(r.rs(e,t,function(e,t,n){
n.b("publishable")}),e.pop()),r.b(" "),r.s(r.f("published",e,t,1),e,t,0,172,181,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b("published")}),e.pop()),r.b('">'),r.b("\n"+n),r.
b("    "),r.b("\n"+n),r.b('    <div class="col-xs-12 col-sm-5 col-md-6 body_container">'
),r.b("\n"+n),r.b('      <div class="body">'),r.b("\n"+n),r.s(r.f("dmca_override_invalid"
,e,t,1),e,t,0,323,569,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('          <span class="dmca_override_invalid">This has been marked as non-compliant by a moderator. Email us at support@8tracks.com.</span>'
),r.b("\n"+n),r.b("\n"+n),r.s(r.f("playlistErrors",e,t,1),e,t,0,494,529,"{{ }}")&&
(r.rs(e,t,function(e,t,n){n.b("            <br>"),n.b(n.t(n.d(".",e,t,0))),n.b("\n"
)}),e.pop()),r.b("          "),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("dmca_override_invalid"
,e,t,1),e,t,1,0,0,"")||(r.s(r.f("at_least_eight_tracks",e,t,1),e,t,0,668,1182,"{{ }}"
)&&(r.rs(e,t,function(e,t,r){r.b("            "),r.b("\n"+n),r.s(r.f("published",
e,t,1),e,t,0,708,769,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("              <h4>Your playlist is public.</h4>"
),n.b("\n")}),e.pop()),r.s(r.f("published",e,t,1),e,t,1,0,0,"")||(r.s(r.f("publishable"
,e,t,1),e,t,0,828,903,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("                <h4>Your playlist is ready to publish!</h4>"
),n.b("\n")}),e.pop()),r.s(r.f("publishable",e,t,1),e,t,1,0,0,"")||(r.b('                <ul class="dmca_errors">'
),r.b("\n"+n),r.s(r.f("playlistErrors",e,t,1),e,t,0,1014,1070,"{{ }}")&&(r.rs(e,t
,function(e,t,n){n.b("                    <li>"),n.b(n.t(n.d(".",e,t,0))),n.b("</li>"
),n.b("\n")}),e.pop()),r.b("                </ul>"),r.b("\n"))),r.b("\n")}),e.pop
()),r.s(r.f("at_least_eight_tracks",e,t,1),e,t,1,0,0,"")||(r.b("            <div>"
),r.b("\n"+n),r.b("              Upload <strong>at least 8 tracks</strong> and cover art.<br>Then enter a <strong>title</strong>, <strong>description</strong> and 2 or more <strong>tags</strong>."
),r.b("\n"+n),r.b("            </div>"),r.b("\n")),r.b("          "),r.b("\n")),r
.b("      </div>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("\n"+n),r.b('    <div id="publish_buttons" class="col-xs-12 col-sm-7 col-md-6">'
),r.b("\n"+n),r.b('      <div class="mix_status flatbutton">'),r.b("\n"+n),r.s(r.
f("publishable",e,t,1),e,t,0,1690,1913,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.s(n.
f("published",e,t,1),e,t,0,1715,1790,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b('            <div class="led green"></div><span>PUBLISHED</span>'
),n.b("\n")}),e.pop()),n.s(n.f("published",e,t,1),e,t,1,0,0,"")||(n.b('            <div class="led white"></div><span>READY!</span>'
),n.b("\n"))}),e.pop()),r.s(r.f("publishable",e,t,1),e,t,1,0,0,"")||(r.s(r.f("dmca_override_invalid"
,e,t,1),e,t,0,1982,2053,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('            <div class="led red"></div><span>INVALID</span>'
),n.b("\n")}),e.pop()),r.s(r.f("dmca_override_invalid",e,t,1),e,t,1,0,0,"")||(r.b
('            <div class="led amber"></div><span>NOT READY</span>'),r.b("\n"))),r
.b("      </div>"),r.b("\n"+n),r.b("\n"+n),r.b('      <a href="#" class="publish flatbutton turquoise_button" rel="local" data-action="mix_publish" draggable="false">Publish &rarr;</a>'
),r.b("\n"+n),r.b('      <a href="#" class="unpublish flatbutton red_button" rel="local" data-action="mix_private" draggable="false">Unpublish</a>'
),r.b("\n"+n),r.b('      <a href="#" id="unedit_button" class="unedit flatbutton gray_button" rel="local">Save&nbsp;&amp;&nbsp;close</a>'
),r.b("\n"+n),r.b("      "),r.b("\n"+n),r.b("    "),r.b("\n"+n),r.b('      <div id="validation-spinner" class="spin"><i class="i i-checkmark"></i><span style="display: none;">&nbsp;</span></div>'
),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("\n"+n),r.b("   </div><!--.row -->"
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r
.b('<!--div id="validation_prop"></div-->'),r.b("\n"),r.fl()},"",e,{});return n.template=
t,n}),define("hgn!templates/mixes/agree_to_terms",["hogan"],function(e){function n
(){return t.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=
this;return r.b(n=n||""),r.b('<div id="agree_to_terms" class="clearfix">'),r.b("\n"+
n),r.b('   <input type="checkbox" name="mix[agree_to_terms]" id="mix_agree_to_terms"/>'
),r.b("\n"+n),r.b("\n"+n),r.b('  <label for="mix_agree_to_terms" class="agree_to_terms"> I agree that the tracks in this playlist have been lawfully acquired, are not bootlegged or pre-release, and are properly identified. This playlist fully complies with the 8tracks <a href="/terms" rel="external" target="_blank">terms of use</a>.</label>'
),r.b("\n"+n),r.b("\n"+n),r.b('  <div style="clear:both"></div>'),r.b("\n"+n),r.b
('  <a href="#" class="publish turquoise_button flatbutton" rel="local" data-action="mix_publish" >Publish &rarr;</a>'
),r.b("\n"+n),r.b("\n"+n),r.b("</div>"),r.fl()},"",e,{});return n.template=t,n}),
define("hgn!templates/mixes/publish_options",["hogan"],function(e){function n(){return t
.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r
.b(n=n||""),r.b('<div class="publish_options_container">'),r.b("\n"+n),r.b('    <form id="publish_option_values">'
),r.b("\n"+n),r.b('      <div class="publish_option">'),r.b("\n"+n),r.b('        <input id="mix_unlisted" name="unlisted" type="checkbox" value="1" '
),r.s(r.f("unlisted",e,t,1),e,t,0,224,241,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b
('checked="checked"')}),e.pop()),r.b(">"),r.b("\n"+n),r.b('        <label for="mix_unlisted">'
),r.b("\n"+n),r.b("          This playlist is unlisted."),r.b("\n"+n),r.b("        </label>"
),r.b("\n"+n),r.b('        <div class="black_tooltip_indicator">'),r.b("\n"+n),r.
b('          <div class="black_tooltip">Unlisted playlists will not appear in search results and will only be accessible to users with the URL.</div>'
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r
.b("\n"+n),r.b('      <div class="publish_option">'),r.b("\n"+n),r.b('        <input id="mix_nsfw" name="nsfw" type="checkbox" value="1"'
),r.s(r.f("nsfw",e,t,1),e,t,0,677,695,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b(' checked="checked"'
)}),e.pop()),r.s(r.f("nsfw_locked",e,t,1),e,t,0,720,736,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b(' disabled="true"')}),e.pop()),r.b(" />"),r.b("\n"+n),r.b('        <label for="mix_nsfw">'
),r.b("\n"+n),r.b('          This playlist is <a href="/content_policy" target="_blank" rel="external" title="Not Safe For Work">NSFW</a>.'
),r.b("\n"+n),r.b("        </label>"),r.b("\n"+n),r.b('        <div class="black_tooltip_indicator">'
),r.b("\n"+n),r.b('          <div class="black_tooltip">Not safe for work (NSFW) playlists will be hidden for users who opt-in to our content filter.</div>'
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r
.b("    </form>"),r.b("\n"+n),r.b("\n"+n),r.s(r.f("withDelete",e,t,1),e,t,0,1188,1581
,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('    <div class="publish_option">'),r.b("\n"+
n),r.b('      <a id="pick_next_mix_button" href="#">Pick next mix &rarr;</a>'),r.
b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("\n"+n),r.b('    <div id="delete_button">'
),r.b("\n"+n),r.b('      <form action="/mixes/'),r.b(r.v(r.f("id",e,t,0))),r.b('" method="POST" >'
),r.b("\n"+n),r.b('        <input type="hidden" name="_method" value="delete" />'
),r.b("\n"+n),r.b('        <a href="/mixes/'),r.b(r.v(r.f("id",e,t,0))),r.b('" class="destroy red_button" rel="nofollow"><span class="i-x">&nbsp;Delete</a>'
),r.b("\n"+n),r.b("      </form>"),r.b("\n"+n),r.b("    </div>"),r.b("\n")}),e.pop
()),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("views/mix_publish_options_view"
,["views/trax_view","lib/sessions","hgn!templates/mixes/publish_options"],function(
e,t,n){var r=e.extend({id:"mix_publish_options",className:"publish_options editmode clearfix"
,initialize:function(e){_.bindAll(this,"render","update","onMixChange"),this.mix=
e.mix,this.withDelete=e.withDelete,this.alwaysShow=e.alwaysShow,this.template=n,this
.mix.bind("change",this.onMixChange)},onMixChange:function(){this.stateChanged()&&
this.render()},stateChanged:function(){return this.previousState=this.state,this.
updateState(),_.isEqual(this.previousState,this.state)},updateState:function(){this
.state={id:this.mix.id,showCheckboxes:!!(this.alwaysShow||this.mix.get("published"
)||this.mix.get("first_published_at")),unlisted:this.mix.get("unlisted"),publishable
:this.mix.get("publishable"),nsfw:this.mix.get("nsfw"),nsfw_locked:this.mix.nsfw&&
this.mix.first_published_at&&!t.isAdmin(),withDelete:this.withDelete}},render:function(
){return this.state||this.updateState(),$(this.el).html(this.template(this.state)
),this},show:function(){this.render(),$("#mix_edit_details").append(this.el)},events
:{'change input[type="checkbox"]':"update","click #delete_button a":"onDelete"},update
:function(){var e={};this.$('input[type="checkbox"]').each(function(){e[$(this).attr
("name")]=this.checked}),this.mix.set(e),this.mix.save({},{spinner:"#validation-spinner"
,showSave:!0})},onDelete:function(e){e.preventDefault();if(confirm("Are you sure you want to delete this playlist?"
)){this.mix.deleteFromLocalStorage();var t=$(e.target).parents("form");t.submit()
}return!1}});return r}),define("views/mix_validation_view",["global_trax","views/trax_view"
,"hgn!templates/mixes/validation","hgn!templates/mixes/agree_to_terms","views/mix_publish_options_view"
],function(e,t,n,r,i){var s=t.extend({id:"mix_validation_wrapper",className:"",currentState
:{},initialize:function(e){this.mix=e.mix,this.mixEditView=e.mixEditView,_.bindAll
(this,"render","onMixChange","disableUnedit","enableUnedit","stickValidationHeader"
,"scrollToId"),this.mix.bind("change",this.onMixChange),this.mix.bind("uploading"
,this.disableUnedit),this.mix.bind("uploadsComplete",this.enableUnedit),$(window)
.bind("scroll",this.stickValidationHeader),this.template=n,this.$el=$(this.el),this
.$el.hide()},buildState:function(){return{id:this.mix.id,published:this.mix.get("published"
),publishable:this.mix.get("publishable"),dmca_override_invalid:this.mix.get("validation_status"
).dmca_override==="invalid",at_least_eight_tracks:this.mix.hasAtLeast8Tracks(),playlistErrors
:_.first(this.mix.globalValidationErrors(),2)}},isSameState:function(){return this
.currentState.at_least_eight_tracks==0&&this.mix.hasAtLeast8Tracks()==0&&this.currentState
.publishable==this.mix.get("publishable")?!0:this.currentState.id==this.mix.id&&this
.currentState.published==this.mix.get("published")&&this.currentState.publishable==
this.mix.get("publishable")&&this.currentState.dmca_override_invalid==(this.mix.get
("validation_status").dmca_override==="invalid")&&this.currentState.at_least_eight_tracks==
this.mix.hasAtLeast8Tracks()&&_.isEqual(this.currentState.playlistErrors,_.first(
this.mix.globalValidationErrors(),2))},render:function(){return this.currentState=
this.buildState(),console.log("MixValidationView.render()",this.currentState),this
.$el.html(this.template(this.currentState)),this.$el.show(),this.mix.isValid()&&$
("#mix_validation").addClass("publishable"),this},onMixChange:function(){(this.mix
.hasChanged("validation_status")||this.mix.hasChanged("published")||this.mix.hasChanged
("publishable"))&&this.animatedRender()},animatedRender:function(){console.log("MixValidationView.animated_render()"
,"fields changed:",this.mix.changedAttributes()),this.isSameState()?this.$(".body"
).animate({left:"-20px"},100,"swing",_.bind(function(){this.$(".body").animate({left
:"20px"},100,"swing",_.bind(function(){this.$(".body").animate({left:"-8px"},100,"swing"
,_.bind(function(){this.$(".body").animate({left:"8px"},100,"swing",_.bind(function(
){this.$(".body").animate({left:""},100,"swing")},this))},this))},this))},this)):
this.animateOut(_.bind(function(){this.render(),this.stickValidationHeader(),this
.animateIn()},this))},animateOut:function(e){this.$(".body").animate({left:"-1000px"
},{duration:300,complete:e})},animateIn:function(){this.$(".body").hide().css("left"
,"").css("top","-100px").show().animate({top:""},300)},show:function(){this.render
(),this.$("#validation_container, #validation_prop").hide(),$("#interstitial_container"
).after(this.el),this.$("#validation_container, #validation_prop").slideDown(),this
.stickValidationHeader()},events:{"click a.publish:not(.disabled)":"publish","click a.unpublish:not(.disabled)"
:"unpublish","click a.unedit:not(.disabled)":"unedit","click a.disabled":"disabled"
,"click .js-scroll":"scrollToId"},scrollToId:function(e){var t=$(e.currentTarget)
;return $("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-200
},1e3),!1},publish:function(){return this.mix.get("publishable")&&(this.mix.get("first_published_at"
)===null&&!this.termsAgreed()?this.agreeToTerms():this.mix.publish()),!1},unpublish
:function(){return this.mix.unpublish(),!1},unedit:function(){return this.mixEditView
.unEditMode(),!1},disableUnedit:function(){this.$(".publish, .unpublish, .unedit"
).addClass("disabled")},enableUnedit:function(){this.$(".publish, .unpublish, .unedit"
).removeClass("disabled")},disabled:function(){return!1},termsAgreed:function(){return $
("#mix_agree_to_terms").is(":checked")},agreeToTerms:function(){var t=$(document.
createElement("div"));t.html("<h2>Terms of use</h2>"),t.append(r(this.mix));var n=new 
i({mix:this.mix,withDelete:!1,alwaysShow:!0});n.render(),n.$(".publish_options_container"
).show(),t.find("#agree_to_terms").prepend(n.el),$.facebox(t),$("#agree_to_terms a.publish"
).click(_.bind(function(){return this.termsAgreed()?(this.mix.publish(),$.facebox
.close(),!1):(e.update_flash({errors:"You must agree to our terms of use."}),!1)}
,this))},stickValidationHeader:function(e){var t=this.$el.offset();if(t){var n=$(
window).scrollTop(),r=n>t.top;r?$("#validation_container").addClass("sticky"):$("#validation_container"
).removeClass("sticky")}return!0}});return s}),define("models/modules/smartscroll"
,[],function(){var e={container:$("body"),smartScroll:function(e,t){_.bindAll(this
,"mouseMove","mouseUp","cancelScroll"),this.windowSize=$(window).height(),this.docHeight=
$(document).height(),this.zones={1:{action:!0,from:0,to:.04*this.windowSize,direction
:-1,speed:10},2:{action:!0,from:.04*this.windowSize,to:.1*this.windowSize,direction
:-1,speed:5},3:{action:!0,from:.1*this.windowSize,to:.18*this.windowSize,direction
:-1,speed:2},4:{action:!0,from:.18*this.windowSize,to:.28*this.windowSize,direction
:-1,speed:1},5:{action:!1,from:.28*this.windowSize,to:.72*this.windowSize},6:{action
:!0,from:.72*this.windowSize,to:.82*this.windowSize,direction:1,speed:1},7:{action
:!0,from:.82*this.windowSize,to:.9*this.windowSize,direction:1,speed:2},8:{action
:!0,from:.9*this.windowSize,to:.96*this.windowSize,direction:1,speed:5},9:{action
:!0,from:.96*this.windowSize,to:this.windowSize,direction:1,speed:10}},dragged_element=
$($(t.item)[0]),$(document).mousemove(this.mouseMove),$(document).mouseup(this.mouseUp
)},mouseMove:function(e){pos=e.pageY-$(window).scrollTop();for(var t in this.zones
)pos>=this.zones[t].from&&pos<this.zones[t].to&&(clearTimeout(this.container.timer
),this.zones[t].action&&pos<this.windowSize&&this.smartMove(this.zones[t]))},mouseUp
:function(){clearTimeout(this.container.timer)},smartMove:function(e){var t=$(window
).scrollTop();if(e.direction==1&&t<this.docHeight-this.windowSize||e.direction==-1&&
t>0)$(window).scrollTop(t+e.direction*e.speed),dragged_element.offset({top:dragged_element
.offset().top+e.direction*e.speed}),this.container.timer=setTimeout(_.bind(function(
){this.smartMove(e)},this),10)},cancelScroll:function(e,t){$(window).stop(),$(document
).unbind("mousemove")}};return e}),define("hgn!templates/dead_tracks",["hogan"],function(
e){function n(){return t.render.apply(t,arguments)}var t=new e.Template(function(
e,t,n){var r=this;return r.b(n=n||""),r.b('<a href="#" class="toggle_deleted_tracks">+ Show previously deleted tracks</a>'
),r.b("\n"+n),r.b("\n"+n),r.b('<ul class="tracks results clear" style="display: none;">'
),r.b("\n"+n),r.s(r.f("sorted_dead_tracks",e,t,1),e,t,0,162,567,"{{ }}")&&(r.rs(e
,t,function(e,t,r){r.b('  <li class="dead_track">'),r.b("\n"+n),r.b('    <span class="actions">'
),r.b("\n"+n),r.b('      <a href="#" class="remove-from-grave close_medium" data-id="'
),r.b(r.v(r.f("id",e,t,0))),r.b('" title="Remove track forever"><span class="i-x"></span></a>'
),r.b("\n"+n),r.b("      "),r.s(r.f("file_present",e,t,1),e,t,0,372,481,"{{ }}")&&
(r.rs(e,t,function(e,t,n){n.b('<a href="#" class="restore-from-grave close_medium" data-id="'
),n.b(n.v(n.f("id",e,t,0))),n.b('" title="Add track back to playlist">+</a>')}),e
.pop()),r.b("\n"+n),r.b("    </span>"),r.b("\n"+n),r.b("    <strong>"),r.b(r.v(r.
f("name",e,t,0))),r.b("</strong> - "),r.b(r.v(r.f("performer",e,t,0))),r.b("\n"+n
),r.b("  </li>"),r.b("\n")}),e.pop()),r.b("</ul>"),r.b("\n"),r.fl()},"",e,{});return n
.template=t,n}),define("views/dead_tracks_view",["views/trax_view","lib/_template_helpers"
,"hgn!templates/dead_tracks"],function(e,t,n){var r=e.extend({tagName:"div",className
:"dead_tracks_view",events:{"click .toggle_deleted_tracks":"toggle","click .remove-from-grave"
:"removeFromGrave","click .restore-from-grave":"restoreFromGrave"},initialize:function(
e){_.bindAll(this,"render","afterToggle"),this.neverRendered=!0,this.mix=e.mix,this
.template=n,this.mix.bind("change:dead_tracks",this.render),this.hidden=!0},toggle
:function(){this.$(".tracks").slideToggle(),this.afterToggle()},afterToggle:function(
){this.hidden=!this.hidden;var e=this.hidden?"+ Show previously deleted tracks":"- Hide previously deleted tracks"
;this.$(".toggle_deleted_tracks").text(e)},removeFromGrave:function(e){var t=$(e.
currentTarget),n=t.data("id");t.parents(".dead_track").slideUp(),this.mix.removeTrackFromGrave
(n)},restoreFromGrave:function(e){var t=$(e.currentTarget),n=t.data("id");t.parents
(".dead_track").slideUp(),this.mix.restoreTrackFromGrave(n)},render:function(){var e=new 
t(this.mix.toJSON());e.sorted_dead_tracks=this.mix.sortedDeadTracks();var n=this.
mix.get("dead_tracks")&&this.mix.get("dead_tracks").length>0,r=this.template(e),i=
$(this.el);if(!n)return this.hidden=!0,this.$(".toggle_deleted_tracks").text("Show previously deleted tracks"
),i.slideUp(),this;if(this.neverRendered)i.html(r),i.slideUp();else{var s=$(r).find
("li");this.$(".tracks").html(s),this.hidden&&this.$(".tracks").hide(),i.slideDown
()}return this.neverRendered=!1,this}});return r}),define("hgn!templates/tracks/track_placeholder"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<span class="number">'
),r.b(r.v(r.f("number",e,t,0))),r.b("</span>"),r.b("\n"+n),r.b('<div class="track_info">'
),r.b("\n"+n),r.b('	<span class="t">'),r.b(r.v(r.f("name",e,t,0))),r.b("</span>")
,r.b("\n"+n),r.b('	<span class="a">'),r.b(r.v(r.f("performer",e,t,0))),r.b("</span>"
),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define
("views/track_placeholder_view",["views/trax_view","hgn!templates/tracks/track_placeholder"
],function(e,t){var n=e.extend({tagName:"li",className:"track_placeholder",initialize
:function(e){this.template=t,this.$el=$(this.el),this.placeholder_track=e.placeholder_track
,this.$el.addClass(e.odd)},render:function(e){return this.$el.html(this.template(
this.placeholder_track)),this}});return n}),define("hgn!templates/tracks/selected_tracks"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="edit_tracks">'
),r.b("\n"+n),r.b('  <div class="editmode">'),r.b("\n"+n),r.b("\n"+n),r.s(r.f("show_intl_warning"
,e,t,1),e,t,0,75,460,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('      <div class="international_warning">'
),r.b("\n"+n),r.b('        <a href="#" class="close"><span class="i-close"></span></a>'
),r.b("\n"+n),r.b('        <p><span class="i-warning"></span> Due to international streaming restrictions, this playlist may have'
),r.b("\n"+n),r.b('  limited playback in your region. <a href="http://blog.8tracks.com/2016/02/12/a-change-in-our-international-streaming/">Learn more&rarr;</a></p>'
),r.b("\n"+n),r.b("      </div>"),r.b("\n")}),e.pop()),r.b("      "),r.b("\n"+n),
r.b('    <div id="track_selection_header">'),r.b("\n"+n),r.b('      <div id="track_list_duration">'
),r.b("\n"+n),r.b('        <span class="i-recent"></span>'),r.b("\n"+n),r.b('        <span id="length">'
),r.b(r.v(r.f("tracks_count",e,t,0))),r.b(" "),r.s(r.f("pluralize",e,t,1),e,t,0,661
,686,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("tracks_count track tracks")}),e.pop
()),r.b("</span>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b('      <h6 style="display: inline;" class="black">Tracklist</h6>'
),r.b("\n"+n),r.b("      &mdash; Choose at least 8 tracks"),r.b("\n"+n),r.b("    </div>"
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="playlist editmode" id="playlist_editor">'
),r.b("\n"+n),r.b('    <ul id="selected_tracks" class="big_tracks tracks results clear">'
),r.b("\n"+n),r.b("\n"+n),r.b('      <li class="upload_placeholder">'),r.b("\n"+n
),r.b('        <span class="number">'),r.b(r.v(r.f("tracks_count",e,t,0))),r.b("</span>"
),r.b("\n"+n),r.b("          "),r.b("\n"+n),r.b('        <div id="trackdrop" class="step">'
),r.b("\n"+n),r.b('          <div id="trackdrop_instructions" style="display:none;">'
),r.b("\n"+n),r.b('            <p><a href="#" id="trackdrop_link" class="flatbutton turquoise_button" draggable="false">Upload tracks</a></p>'
),r.b("\n"+n),r.b("            <p>"),r.b("\n"+n),r.b("              Drag tracks from the <strong>Library</strong> and drop in the tracklist below.<br />"
),r.b("\n"+n),r.b("              Or, drop files here from your desktop to use our HTML5 uploader."
),r.b("\n"+n),r.b("            </p>"),r.b("\n"+n),r.b('            <div id="trackdrop_input" style="display:none; visibility: hidden;">'
),r.b("\n"+n),r.b('              <input type="file" name="track[file]" id="track_file" class="file" size="11" multiple="true">'
),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b("          </div>"),r.b("\n"+
n),r.b('          <div id="flash_upload_instructions" style="display:none;">'),r.
b("\n"+n),r.b('            <p><a href="#" id="swfupload_track" flass="flatbutton turquoise_button" draggable="false">Upload tracks</a></p>'
),r.b("\n"+n),r.b("            <p>Drag tracks from the Library and drop in the tracklist below.</p>"
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b('          <div id="basic_upload_instructions" style="display: none;">'
),r.b("\n"+n),r.b("            <p>Looks like you don't have HTML5 or Flash.</p>")
,r.b("\n"+n),r.b('            <a href="/tracks/basic_upload?popup=true" target="_blank" id="basic_upload_link">Click here to use our basic uploader.</a>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("        </div>"),r.b("\n"+
n),r.b("      </li>"),r.b("\n"+n),r.b("\n"+n),r.b("    </ul>"),r.b("\n"+n),r.b("\n"+
n),r.b('    <div id="dead_tracks">'),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.
b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <ul id="upload_queue"></ul>'),r.b("\n"+
n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n
.template=t,n}),define("views/selected_tracks_view",["global_trax","views/trax_view"
,"models/modules/smartscroll","views/dead_tracks_view","views/editable_track_view"
,"views/track_placeholder_view","hgn!templates/tracks/selected_tracks","lib/_template_helpers"
],function(e,t,n,r,i,s,o,u){var a=t.extend(n).extend({el:"#track_selection",initialize
:function(e){this.mix=e.mix,this.template=o,_.bindAll(this,"updateTracklist","createSortable"
,"onAddTrack","onDurationChange"),this.mix.tracks.bind("add",this.onAddTrack),this
.mix.bind("change:duration",this.onDurationChange),this.mix.bind("change:tracks_count"
,this.onDurationChange),this.deadTracksView=new r({mix:this.mix})},events:{"click a.x"
:"removeTrack","click .international_warning .close":"onWarningClose"},render:function(
){var t=new u(this.mix.toJSON());return t.show_intl_warning=e.regionallyBlocked()
,this.$el.html(this.template(t)),this.$ul=this.$("ul#selected_tracks"),this.$deadTracks=
this.$("div#dead_tracks"),PAGE.track_views=[],this.mix.tracks.each(_.bind(function(
e,t){e.set({number:t+1},{silent:!0});var n=new i({track:e,number:t+1});PAGE.track_views
.push(n),this.$ul.children().last().before(n.render().el)},this)),this.showDeletedTracks
(),this.updatePlaceholderTracks(),this},show:function(){return this.render(),this
.createSortable(),App.views.mixView&&App.views.mixView.adjustPlaylistHeight(),this
},showDeletedTracks:function(){var e=this.deadTracksView.render().el;this.$deadTracks
.html(e)},onWarningClose:function(){return $(".international_warning").hide(),!1}
,createSortable:function(){sortable_options={cursor:"move",opacity:.6,scroll:!1,start
:_.bind(function(t,n){this.smartScroll(t,n),e.trackSearchView.preventScroll=!0},this
),stop:_.bind(function(t,n){$(n.helper).children(".track_details").show(),this.cancelScroll
(),e.trackSearchView.preventScroll=!1},this)},$(".track_results").sortable(_.extend
({connectWith:this.$ul,cancel:":input, .selected, .blank_result"},sortable_options
)).disableSelection(),this.$ul.sortable(_.extend({connectWith:".track_results",cancel
:":input, .track_placeholder, .track_upload, .display .text, .upload_placeholder"
,update:this.updateTracklist},sortable_options)).disableSelection()},onAddTrack:function(
e,t,n){var r=new i({track:e,number:n.position||this.nextTrackNumber()}),s=this.$ul
.children();n.position&&s.length?$(s[n.position-1]).before(r.render().el):this.$ul
.append(r.render().el),this.updatePlaceholderTracks(),this.updateTracklist(),App.
views.mixView.adjustPlaylistHeight()},removeTrack:function(e,t){var n=$(e.target)
.parents("li").remove();return this.updateTracklist(),!1},updateTracklist:function(
){var e=[];_.each(this.$ul.children(),_.bind(function(t,n){$(t).hasClass("editable_track"
)?e.push($(t).data("id")):$(t).hasClass("track_upload")},this)),e=_.compact(e),this
.mix.updateTracklist(e),this.updatePlaceholderTracks()},appendTrackUploadView:function(
e){this.$ul.append(e.render().el),this.updatePlaceholderTracks()},updatePlaceholderTracks
:function(){this.clearPlaceholderTracks(),this.$ul.append(this.$(".upload_placeholder"
)),this.$(".upload_placeholder .number").text(this.nextTrackNumber()),this.addPlaceholderTracks
()},clearPlaceholderTracks:function(){this.$(".track_placeholder").remove()},nextTrackNumber
:function(){return this.$ul.children(".editable_track, .track_upload").length+1},
addPlaceholderTracks:function(){var e=this.$ul.children().length,t=e>=8?0:8-e;for(
var n=0;n<t;n++){var r=n+e+1,i=r%2?"odd":"even",o=new s({placeholder_track:{number
:r,name:"• • •"},odd:i});this.$ul.append(o.render().el)}},onDurationChange:function(
){var e=new u;this.$("#duration").html(e.human_duration().call({duration:this.mix
.get("duration")},"duration")),this.$("#length").html((this.mix.tracks.length.toString
()||"0")+(this.mix.tracks.length==1?" track":" tracks"))}});return a});if(typeof 
deconcept=="undefined")var deconcept=new Object;typeof deconcept.util=="undefined"&&
(deconcept.util=new Object),typeof deconcept.SWFObjectUtil=="undefined"&&(deconcept
.SWFObjectUtil=new Object),deconcept.SWFObject=function(e,t,n,r,i,s,o,u,a,f){if(!
document.getElementById)return;this.DETECT_KEY=f?f:"detectflash",this.skipDetect=
deconcept.util.getRequestParameter(this.DETECT_KEY),this.params=new Object,this.variables=new 
Object,this.attributes=new Array,e&&this.setAttribute("swf",e),t&&this.setAttribute
("id",t),n&&this.setAttribute("width",n),r&&this.setAttribute("height",r),i&&this
.setAttribute("version",new deconcept.PlayerVersion(i.toString().split("."))),this
.installedVer=deconcept.SWFObjectUtil.getPlayerVersion(),!window.opera&&document.
all&&this.installedVer.major>7&&(deconcept.SWFObject.doPrepUnload=!0),s&&this.addParam
("bgcolor",s);var l=o?o:"high";this.addParam("quality",l),this.setAttribute("useExpressInstall"
,!1),this.setAttribute("doExpressInstall",!1);var c=u?u:window.location;this.setAttribute
("xiRedirectUrl",c),this.setAttribute("redirectUrl",""),a&&this.setAttribute("redirectUrl"
,a)},deconcept.SWFObject.prototype={useExpressInstall:function(e){this.xiSWFPath=
e?e:"expressinstall.swf",this.setAttribute("useExpressInstall",!0)},setAttribute:
function(e,t){this.attributes[e]=t},getAttribute:function(e){return this.attributes
[e]},addParam:function(e,t){this.params[e]=t},getParams:function(){return this.params
},addVariable:function(e,t){this.variables[e]=t},getVariable:function(e){return this
.variables[e]},getVariables:function(){return this.variables},getVariablePairs:function(
){var e=new Array,t,n=this.getVariables();for(t in n)e[e.length]=t+"="+n[t];return e
},getSWFHTML:function(){var e="";if(navigator.plugins&&navigator.mimeTypes&&navigator
.mimeTypes.length){this.getAttribute("doExpressInstall")&&(this.addVariable("MMplayerType"
,"PlugIn"),this.setAttribute("swf",this.xiSWFPath)),e='<embed type="application/x-shockwave-flash" src="'+
this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this
.getAttribute("height")+'" style="'+this.getAttribute("style")+'"',e+=' id="'+this
.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';var t=this.getParams(
);for(var n in t)e+=[n]+'="'+t[n]+'" ';var r=this.getVariablePairs().join("&");r.
length>0&&(e+='flashvars="'+r+'"'),e+="/>"}else{this.getAttribute("doExpressInstall"
)&&(this.addVariable("MMplayerType","ActiveX"),this.setAttribute("swf",this.xiSWFPath
)),e='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+
this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this
.getAttribute("style")+'">',e+='<param name="movie" value="'+this.getAttribute("swf"
)+'" />';var i=this.getParams();for(var n in i)e+='<param name="'+n+'" value="'+i
[n]+'" />';var s=this.getVariablePairs().join("&");s.length>0&&(e+='<param name="flashvars" value="'+
s+'" />'),e+="</object>"}return e},write:function(e){if(this.getAttribute("useExpressInstall"
)){var t=new deconcept.PlayerVersion([6,0,65]);this.installedVer.versionIsValid(t
)&&!this.installedVer.versionIsValid(this.getAttribute("version"))&&(this.setAttribute
("doExpressInstall",!0),this.addVariable("MMredirectURL",escape(this.getAttribute
("xiRedirectUrl"))),document.title=document.title.slice(0,47)+" - Flash Player Installation"
,this.addVariable("MMdoctitle",document.title))}if(this.skipDetect||this.getAttribute
("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"
))){var n=typeof e=="string"?document.getElementById(e):e;return n.innerHTML=this
.getSWFHTML(),!0}return this.getAttribute("redirectUrl")!=""&&document.location.replace
(this.getAttribute("redirectUrl")),!1}},deconcept.SWFObjectUtil.getPlayerVersion=
function(){var e=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator
.mimeTypes.length){var t=navigator.plugins["Shockwave Flash"];t&&t.description&&(
e=new deconcept.PlayerVersion(t.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/
,".").split(".")))}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE"
)>=0){var n=1,r=3;while(n)try{r++,n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+
r),e=new deconcept.PlayerVersion([r,0,0])}catch(i){n=null}}else{try{var n=new ActiveXObject
("ShockwaveFlash.ShockwaveFlash.7")}catch(i){try{var n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"
);e=new deconcept.PlayerVersion([6,0,21]),n.AllowScriptAccess="always"}catch(i){if(
e.major==6)return e}try{n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(
i){}}n!=null&&(e=new deconcept.PlayerVersion(n.GetVariable("$version").split(" ")
[1].split(",")))}return e},deconcept.PlayerVersion=function(e){this.major=e[0]!=null?
parseInt(e[0]):0,this.minor=e[1]!=null?parseInt(e[1]):0,this.rev=e[2]!=null?parseInt
(e[2]):0},deconcept.PlayerVersion.prototype.versionIsValid=function(e){return this
.major<e.major?!1:this.major>e.major?!0:this.minor<e.minor?!1:this.minor>e.minor?!0
:this.rev<e.rev?!1:!0},deconcept.util={getRequestParameter:function(e){var t=document
.location.search||document.location.hash;if(e==null)return t;if(t){var n=t.substring
(1).split("&");for(var r=0;r<n.length;r++)if(n[r].substring(0,n[r].indexOf("="))==
e)return n[r].substring(n[r].indexOf("=")+1)}return""}},deconcept.SWFObjectUtil.cleanupSWFs=
function(){var e=document.getElementsByTagName("OBJECT");for(var t=e.length-1;t>=0
;t--){e[t].style.display="none";for(var n in e[t])typeof e[t][n]=="function"&&(e[
t][n]=function(){})}},deconcept.SWFObject.doPrepUnload&&(deconcept.unloadSet||(deconcept
.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=
function(){},window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs)},
window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload),deconcept
.unloadSet=!0)),!document.getElementById&&document.all&&(document.getElementById=
function(e){return document.all[e]});var getQueryParamValue=deconcept.util.getRequestParameter
,FlashObject=deconcept.SWFObject,SWFObject=deconcept.SWFObject;define("lib/swfobject"
,function(){});var SWFUpload;SWFUpload==undefined&&(SWFUpload=function(e){this.initSWFUpload
(e)}),SWFUpload.prototype.initSWFUpload=function(e){try{this.customSettings={},this
.settings=e,this.eventQueue=[],this.movieName="SWFUpload_"+SWFUpload.movieCount++
,this.movieElement=null,SWFUpload.instances[this.movieName]=this,this.initSettings
(),this.loadFlash(),this.displayDebugInfo()}catch(t){throw delete SWFUpload.instances
[this.movieName],t}},SWFUpload.instances={},SWFUpload.movieCount=0,SWFUpload.version="2.2.0 2009-03-25"
,SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE
:-120,INVALID_FILETYPE:-130},SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL
:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250
,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280
,UPLOAD_STOPPED:-290},SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE
:-4,CANCELLED:-5},SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD
:-120},SWFUpload.CURSOR={ARROW:-1,HAND:-2},SWFUpload.WINDOW_MODE={WINDOW:"window"
,TRANSPARENT:"transparent",OPAQUE:"opaque"},SWFUpload.completeURL=function(e){if(typeof 
e!="string"||e.match(/^https?:\/\//i)||e.match(/^\//))return e;var t=window.location
.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location
.port:""),n=window.location.pathname.lastIndexOf("/");return n<=0?path="/":path=window
.location.pathname.substr(0,n)+"/",path+e},SWFUpload.prototype.initSettings=function(
){this.ensureDefault=function(e,t){this.settings[e]=this.settings[e]==undefined?t
:this.settings[e]},this.ensureDefault("upload_url",""),this.ensureDefault("preserve_relative_urls"
,!1),this.ensureDefault("file_post_name","Filedata"),this.ensureDefault("post_params"
,{}),this.ensureDefault("use_query_string",!1),this.ensureDefault("requeue_on_error"
,!1),this.ensureDefault("http_success",[]),this.ensureDefault("assume_success_timeout"
,0),this.ensureDefault("file_types","*.*"),this.ensureDefault("file_types_description"
,"All Files"),this.ensureDefault("file_size_limit",0),this.ensureDefault("file_upload_limit"
,0),this.ensureDefault("file_queue_limit",0),this.ensureDefault("flash_url","swfupload.swf"
),this.ensureDefault("prevent_swf_caching",!0),this.ensureDefault("button_image_url"
,""),this.ensureDefault("button_width",1),this.ensureDefault("button_height",1),this
.ensureDefault("button_text",""),this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;"
),this.ensureDefault("button_text_top_padding",0),this.ensureDefault("button_text_left_padding"
,0),this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES),this
.ensureDefault("button_disabled",!1),this.ensureDefault("button_placeholder_id",""
),this.ensureDefault("button_placeholder",null),this.ensureDefault("button_cursor"
,SWFUpload.CURSOR.ARROW),this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE
.WINDOW),this.ensureDefault("debug",!1),this.settings.debug_enabled=this.settings
.debug,this.settings.return_upload_start_handler=this.returnUploadStart,this.ensureDefault
("swfupload_loaded_handler",null),this.ensureDefault("file_dialog_start_handler",
null),this.ensureDefault("file_queued_handler",null),this.ensureDefault("file_queue_error_handler"
,null),this.ensureDefault("file_dialog_complete_handler",null),this.ensureDefault
("upload_start_handler",null),this.ensureDefault("upload_progress_handler",null),
this.ensureDefault("upload_error_handler",null),this.ensureDefault("upload_success_handler"
,null),this.ensureDefault("upload_complete_handler",null),this.ensureDefault("debug_handler"
,this.debugMessage),this.ensureDefault("custom_settings",{}),this.customSettings=
this.settings.custom_settings,!this.settings.prevent_swf_caching||(this.settings.
flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&"
)+"preventswfcaching="+(new Date).getTime()),this.settings.preserve_relative_urls||
(this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url),this.settings
.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)),delete this
.ensureDefault},SWFUpload.prototype.loadFlash=function(){var e,t;if(document.getElementById
(this.movieName)!==null)throw"ID "+this.movieName+" is already in use. The Flash Object could not be added"
;e=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder
;if(e==undefined)throw"Could not find the placeholder element: "+this.settings.button_placeholder_id
;t=document.createElement("div"),t.innerHTML=this.getFlashHTML(),e.parentNode.replaceChild
(t.firstChild,e),window[this.movieName]==undefined&&(window[this.movieName]=this.
getMovieElement())},SWFUpload.prototype.getFlashHTML=function(){return['<object id="'
,this.movieName,'" type="application/x-shockwave-flash" data="',this.settings.flash_url
,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">'
,'<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="'
,this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />'
,'<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+
this.getFlashVars()+'" />',"</object>"].join("")},SWFUpload.prototype.getFlashVars=
function(){var e=this.buildParamString(),t=this.settings.http_success.join(",");return["movieName="
,encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings
.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string
),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess="
,encodeURIComponent(t),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings
.assume_success_timeout),"&amp;params=",encodeURIComponent(e),"&amp;filePostName="
,encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent
(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings
.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit
),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit="
,encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent
(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings
.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width
),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText="
,encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent
(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent
(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent
(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings
.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled
),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")}
,SWFUpload.prototype.getMovieElement=function(){this.movieElement==undefined&&(this
.movieElement=document.getElementById(this.movieName));if(this.movieElement===null
)throw"Could not find Flash element";return this.movieElement},SWFUpload.prototype
.buildParamString=function(){var e=this.settings.post_params,t=[];if(typeof e=="object"
)for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n.toString())+"="+
encodeURIComponent(e[n].toString()));return t.join("&amp;")},SWFUpload.prototype.
destroy=function(){try{this.cancelUpload(null,!1);var e=null;e=this.getMovieElement
();if(e&&typeof e.CallFunction=="unknown"){for(var t in e)try{typeof e[t]=="function"&&
(e[t]=null)}catch(n){}try{e.parentNode.removeChild(e)}catch(r){}}return window[this
.movieName]=null,SWFUpload.instances[this.movieName]=null,delete SWFUpload.instances
[this.movieName],this.movieElement=null,this.settings=null,this.customSettings=null
,this.eventQueue=null,this.movieName=null,!0}catch(i){return!1}},SWFUpload.prototype
.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: "
,SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","	","upload_url:               "
,this.settings.upload_url,"\n","	","flash_url:                ",this.settings.flash_url
,"\n","	","use_query_string:         ",this.settings.use_query_string.toString(),"\n"
,"	","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","	"
,"http_success:             ",this.settings.http_success.join(", "),"\n","	","assume_success_timeout:   "
,this.settings.assume_success_timeout,"\n","	","file_post_name:           ",this.
settings.file_post_name,"\n","	","post_params:              ",this.settings.post_params
.toString(),"\n","	","file_types:               ",this.settings.file_types,"\n","	"
,"file_types_description:   ",this.settings.file_types_description,"\n","	","file_size_limit:          "
,this.settings.file_size_limit,"\n","	","file_upload_limit:        ",this.settings
.file_upload_limit,"\n","	","file_queue_limit:         ",this.settings.file_queue_limit
,"\n","	","debug:                    ",this.settings.debug.toString(),"\n","	","prevent_swf_caching:      "
,this.settings.prevent_swf_caching.toString(),"\n","	","button_placeholder_id:    "
,this.settings.button_placeholder_id.toString(),"\n","	","button_placeholder:       "
,this.settings.button_placeholder?"Set":"Not Set","\n","	","button_image_url:         "
,this.settings.button_image_url.toString(),"\n","	","button_width:             ",
this.settings.button_width.toString(),"\n","	","button_height:            ",this.
settings.button_height.toString(),"\n","	","button_text:              ",this.settings
.button_text.toString(),"\n","	","button_text_style:        ",this.settings.button_text_style
.toString(),"\n","	","button_text_top_padding:  ",this.settings.button_text_top_padding
.toString(),"\n","	","button_text_left_padding: ",this.settings.button_text_left_padding
.toString(),"\n","	","button_action:            ",this.settings.button_action.toString
(),"\n","	","button_disabled:          ",this.settings.button_disabled.toString()
,"\n","	","custom_settings:          ",this.settings.custom_settings.toString(),"\n"
,"Event Handlers:\n","	","swfupload_loaded_handler assigned:  ",(typeof this.settings
.swfupload_loaded_handler=="function").toString(),"\n","	","file_dialog_start_handler assigned: "
,(typeof this.settings.file_dialog_start_handler=="function").toString(),"\n","	"
,"file_queued_handler assigned:       ",(typeof this.settings.file_queued_handler=="function"
).toString(),"\n","	","file_queue_error_handler assigned:  ",(typeof this.settings
.file_queue_error_handler=="function").toString(),"\n","	","upload_start_handler assigned:      "
,(typeof this.settings.upload_start_handler=="function").toString(),"\n","	","upload_progress_handler assigned:   "
,(typeof this.settings.upload_progress_handler=="function").toString(),"\n","	","upload_error_handler assigned:      "
,(typeof this.settings.upload_error_handler=="function").toString(),"\n","	","upload_success_handler assigned:    "
,(typeof this.settings.upload_success_handler=="function").toString(),"\n","	","upload_complete_handler assigned:   "
,(typeof this.settings.upload_complete_handler=="function").toString(),"\n","	","debug_handler assigned:             "
,(typeof this.settings.debug_handler=="function").toString(),"\n"].join(""))},SWFUpload
.prototype.addSetting=function(e,t,n){return t==undefined?this.settings[e]=n:this
.settings[e]=t},SWFUpload.prototype.getSetting=function(e){return this.settings[e
]!=undefined?this.settings[e]:""},SWFUpload.prototype.callFlash=function(functionName
,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement
(),returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+
functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0
)+"</invoke>"),returnValue=eval(returnString)}catch(ex){throw"Call to "+functionName+" failed"
}return returnValue!=undefined&&typeof returnValue.post=="object"&&(returnValue=this
.unescapeFilePostParams(returnValue)),returnValue},SWFUpload.prototype.selectFile=
function(){this.callFlash("SelectFile")},SWFUpload.prototype.selectFiles=function(
){this.callFlash("SelectFiles")},SWFUpload.prototype.startUpload=function(e){this
.callFlash("StartUpload",[e])},SWFUpload.prototype.cancelUpload=function(e,t){t!==!1&&
(t=!0),this.callFlash("CancelUpload",[e,t])},SWFUpload.prototype.stopUpload=function(
){this.callFlash("StopUpload")},SWFUpload.prototype.getStats=function(){return this
.callFlash("GetStats")},SWFUpload.prototype.setStats=function(e){this.callFlash("SetStats"
,[e])},SWFUpload.prototype.getFile=function(e){return typeof e=="number"?this.callFlash
("GetFileByIndex",[e]):this.callFlash("GetFile",[e])},SWFUpload.prototype.addFileParam=
function(e,t,n){return this.callFlash("AddFileParam",[e,t,n])},SWFUpload.prototype
.removeFileParam=function(e,t){this.callFlash("RemoveFileParam",[e,t])},SWFUpload
.prototype.setUploadURL=function(e){this.settings.upload_url=e.toString(),this.callFlash
("SetUploadURL",[e])},SWFUpload.prototype.setPostParams=function(e){this.settings
.post_params=e,this.callFlash("SetPostParams",[e])},SWFUpload.prototype.addPostParam=
function(e,t){this.settings.post_params[e]=t,this.callFlash("SetPostParams",[this
.settings.post_params])},SWFUpload.prototype.removePostParam=function(e){delete this
.settings.post_params[e],this.callFlash("SetPostParams",[this.settings.post_params
])},SWFUpload.prototype.setFileTypes=function(e,t){this.settings.file_types=e,this
.settings.file_types_description=t,this.callFlash("SetFileTypes",[e,t])},SWFUpload
.prototype.setFileSizeLimit=function(e){this.settings.file_size_limit=e,this.callFlash
("SetFileSizeLimit",[e])},SWFUpload.prototype.setFileUploadLimit=function(e){this
.settings.file_upload_limit=e,this.callFlash("SetFileUploadLimit",[e])},SWFUpload
.prototype.setFileQueueLimit=function(e){this.settings.file_queue_limit=e,this.callFlash
("SetFileQueueLimit",[e])},SWFUpload.prototype.setFilePostName=function(e){this.settings
.file_post_name=e,this.callFlash("SetFilePostName",[e])},SWFUpload.prototype.setUseQueryString=
function(e){this.settings.use_query_string=e,this.callFlash("SetUseQueryString",[
e])},SWFUpload.prototype.setRequeueOnError=function(e){this.settings.requeue_on_error=
e,this.callFlash("SetRequeueOnError",[e])},SWFUpload.prototype.setHTTPSuccess=function(
e){typeof e=="string"&&(e=e.replace(" ","").split(",")),this.settings.http_success=
e,this.callFlash("SetHTTPSuccess",[e])},SWFUpload.prototype.setAssumeSuccessTimeout=
function(e){this.settings.assume_success_timeout=e,this.callFlash("SetAssumeSuccessTimeout"
,[e])},SWFUpload.prototype.setDebugEnabled=function(e){this.settings.debug_enabled=
e,this.callFlash("SetDebugEnabled",[e])},SWFUpload.prototype.setButtonImageURL=function(
e){e==undefined&&(e=""),this.settings.button_image_url=e,this.callFlash("SetButtonImageURL"
,[e])},SWFUpload.prototype.setButtonDimensions=function(e,t){this.settings.button_width=
e,this.settings.button_height=t;var n=this.getMovieElement();n!=undefined&&(n.style
.width=e+"px",n.style.height=t+"px"),this.callFlash("SetButtonDimensions",[e,t])}
,SWFUpload.prototype.setButtonText=function(e){this.settings.button_text=e,this.callFlash
("SetButtonText",[e])},SWFUpload.prototype.setButtonTextPadding=function(e,t){this
.settings.button_text_top_padding=t,this.settings.button_text_left_padding=e,this
.callFlash("SetButtonTextPadding",[e,t])},SWFUpload.prototype.setButtonTextStyle=
function(e){this.settings.button_text_style=e,this.callFlash("SetButtonTextStyle"
,[e])},SWFUpload.prototype.setButtonDisabled=function(e){this.settings.button_disabled=
e,this.callFlash("SetButtonDisabled",[e])},SWFUpload.prototype.setButtonAction=function(
e){this.settings.button_action=e,this.callFlash("SetButtonAction",[e])},SWFUpload
.prototype.setButtonCursor=function(e){this.settings.button_cursor=e,this.callFlash
("SetButtonCursor",[e])},SWFUpload.prototype.queueEvent=function(e,t){t==undefined?
t=[]:t instanceof Array||(t=[t]);var n=this;if(typeof this.settings[e]=="function"
)this.eventQueue.push(function(){this.settings[e].apply(this,t)}),setTimeout(function(
){n.executeNextEvent()},0);else if(this.settings[e]!==null)throw"Event handler "+
e+" is unknown or is not a function"},SWFUpload.prototype.executeNextEvent=function(
){var e=this.eventQueue?this.eventQueue.shift():null;typeof e=="function"&&e.apply
(this)},SWFUpload.prototype.unescapeFilePostParams=function(e){var t=/[$]([0-9a-f]{4})/i
,n={},r;if(e!=undefined){for(var i in e.post)if(e.post.hasOwnProperty(i)){r=i;var s
;while((s=t.exec(r))!==null)r=r.replace(s[0],String.fromCharCode(parseInt("0x"+s[1
],16)));n[r]=e.post[i]}e.post=n}return e},SWFUpload.prototype.testExternalInterface=
function(){try{return this.callFlash("TestExternalInterface")}catch(e){return!1}}
,SWFUpload.prototype.flashReady=function(){var e=this.getMovieElement();if(!e){this
.debug("Flash called back ready but the flash movie can't be found.");return}this
.cleanUp(e),this.queueEvent("swfupload_loaded_handler")},SWFUpload.prototype.cleanUp=
function(e){try{if(this.movieElement&&typeof e.CallFunction=="unknown"){this.debug
("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)"
);for(var t in e)try{typeof e[t]=="function"&&(e[t]=null)}catch(n){}}}catch(r){}window
.__flash__removeCallback=function(e,t){try{e&&(e[t]=null)}catch(n){}}},SWFUpload.
prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler")
},SWFUpload.prototype.fileQueued=function(e){e=this.unescapeFilePostParams(e),this
.queueEvent("file_queued_handler",e)},SWFUpload.prototype.fileQueueError=function(
e,t,n){e=this.unescapeFilePostParams(e),this.queueEvent("file_queue_error_handler"
,[e,t,n])},SWFUpload.prototype.fileDialogComplete=function(e,t,n){this.queueEvent
("file_dialog_complete_handler",[e,t,n])},SWFUpload.prototype.uploadStart=function(
e){e=this.unescapeFilePostParams(e),this.queueEvent("return_upload_start_handler"
,e)},SWFUpload.prototype.returnUploadStart=function(e){var t;if(typeof this.settings
.upload_start_handler=="function")e=this.unescapeFilePostParams(e),t=this.settings
.upload_start_handler.call(this,e);else if(this.settings.upload_start_handler!=undefined
)throw"upload_start_handler must be a function";t===undefined&&(t=!0),t=!!t,this.
callFlash("ReturnUploadStart",[t])},SWFUpload.prototype.uploadProgress=function(e
,t,n){e=this.unescapeFilePostParams(e),this.queueEvent("upload_progress_handler",
[e,t,n])},SWFUpload.prototype.uploadError=function(e,t,n){e=this.unescapeFilePostParams
(e),this.queueEvent("upload_error_handler",[e,t,n])},SWFUpload.prototype.uploadSuccess=
function(e,t,n){e=this.unescapeFilePostParams(e),this.queueEvent("upload_success_handler"
,[e,t,n])},SWFUpload.prototype.uploadComplete=function(e){e=this.unescapeFilePostParams
(e),this.queueEvent("upload_complete_handler",e)},SWFUpload.prototype.debug=function(
e){this.queueEvent("debug_handler",e)},SWFUpload.prototype.debugMessage=function(
e){if(this.settings.debug){var t,n=[];if(typeof e=="object"&&typeof e.name=="string"&&typeof 
e.message=="string"){for(var r in e)e.hasOwnProperty(r)&&n.push(r+": "+e[r]);t=n.
join("\n")||"",n=t.split("\n"),t="EXCEPTION: "+n.join("\nEXCEPTION: "),SWFUpload.
Console.writeLine(t)}else SWFUpload.Console.writeLine(e)}},SWFUpload.Console={},SWFUpload
.Console.writeLine=function(e){var t,n;try{t=document.getElementById("SWFUpload_Console"
),t||(n=document.createElement("form"),document.getElementsByTagName("body")[0].appendChild
(n),t=document.createElement("textarea"),t.id="SWFUpload_Console",t.style.fontFamily="monospace"
,t.setAttribute("wrap","off"),t.wrap="off",t.style.overflow="auto",t.style.width="700px"
,t.style.height="350px",t.style.margin="5px",n.appendChild(t)),t.value+=e+"\n",t.
scrollTop=t.scrollHeight-t.clientHeight}catch(r){alert("Exception: "+r.name+" Message: "+
r.message)}},define("lib/swfupload",function(){}),define("models/modules/flash_upload"
,["lib/swfobject","lib/swfupload"],function(){var e={useFlash:function(){var e=deconcept
.SWFObjectUtil.getPlayerVersion();return e.major>="9"?!0:!1},swfu:function(e){var t=
{flash_url:"/swf/swfupload/swfupload_2.2.0.swf",button_cursor:SWFUpload.CURSOR.HAND
,button_window_mode:SWFUpload.WINDOW_MODE.OPAQUE};return new SWFUpload($.extend({
},t,e))}};return e}),define("hgn!templates/tracks/track_upload",["hogan"],function(
e){function n(){return t.render.apply(t,arguments)}var t=new e.Template(function(
e,t,n){var r=this;return r.b(n=n||""),r.b('<span class="number">'),r.b(r.v(r.f("number"
,e,t,0))),r.b("</span>"),r.b("\n"+n),r.b("\n"+n),r.b('<div class="upload_progress">'
),r.b("\n"+n),r.b('  <div class="upload_progress_width"><div class="upload_progress_bar" style="width: 0%;"></div></div>'
),r.b("\n"+n),r.b('  <div class="upload_content">'),r.b("\n"+n),r.b('    <a class="upload_cancel close_medium" href="#"><span class="i-x"></span></a>'
),r.b("\n"+n),r.b('    <span class="upload_filename">'),r.b(r.v(r.f("fileName",e,
t,0))),r.b("</span>"),r.b("\n"+n),r.b('    <span class="upload_progress_num">0%</span>'
),r.b("\n"+n),r.b("    "),r.b(r.t(r.f("spinner",e,t,0))),r.b("\n"+n),r.b('    <div style="clear:both;"></div>'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"),r.fl()},"",e,{});return n
.template=t,n}),define("views/track_upload_view",["global_trax","views/trax_view"
,"hgn!templates/tracks/track_upload"],function(e,t,n){var r=t.extend({tagName:"li"
,className:"track_upload clear editable_track",initialize:function(t){this.uploader=
t.uploader,this.file=t.file,this.$el=$(this.el),this.$el.data("file_id","f"+this.
file.id),_.bindAll(this,"onStateChange","updateNumber"),this.uploader.bind("stateChange:"+
this.file.id,this.onStateChange),_.isUndefined(e.mix)||e.mix.onReady("tracks",_.bind
(function(){e.mix.tracks.bind("onChangeOrder:f"+this.file.id,this.updateNumber)},
this))},events:{"click .upload_cancel":"onCancelClick"},render:function(){return this
.number=e.selectedTracksView.nextTrackNumber(),this.$el.html(n({number:this.number
,fileName:this.file.name})),this},onCancelClick:function(e){return this.uploader.
removeFromQueue(this.file),this.close(),!1},onStateChange:function(t,n){n||(n={})
;if(t==="uploading")this.$el.find(" .upload_cancel").hide(),this.$el.find(" .upload_progress"
).show(),this.$el.find(".spin span").hide(),n.percentage&&this.updateProgress(n.percentage
);else if(t==="processing")this.updateProgress(100),this.$el.find(" .upload_cancel"
).hide(),this.$el.find(".spin span").show();else if(t==="complete")e.mix.tracks.addTrack
(n.track,{position:this.number}),this.close();else if(t==="error"){this.$el.addClass
("error"),this.$el.find(".upload_cancel").show(),this.$el.find(".spin span").hide
();var r="Error";n.message&&(r+=": <span>"+n.message+"</span>"),this.$el.find(".upload_progress_num"
).html(r)}},updateProgress:function(e){this.$el.find(".upload_progress_bar").css("width"
,e+"%"),this.$el.find(".upload_progress_num").html(e+"%")},updateNumber:function(
e){this.number!==e&&(this.number=e,this.$(".number").html(e))}});return r}),define
("views/track_uploader_view",["global_trax","lib/events","views/trax_view","models/modules/flash_upload"
,"views/track_upload_view","collections/tracks","views/editable_track_view"],function(
e,t,n,r,s,o,u){var a=n.extend(Backbone.Events).extend(r).extend({el:"#tracklists"
,AUDIO_EXTENSION_REGEX:/(mp3|m4a|aac)$/,AUDIO_TYPES:["audio/mpeg","audio/x-mpeg","audio/mp4"
,"audio/mp3","audio/aac","audio/x-m4a","audio/m4a","audio/x-mp3","application/x-mp3"
,"application/x-aac","application/x-m4a","application/x-m4p","x-audio/mpeg","audio/mpeg3"
,"application/force-download","audio/xamzaudio"],IMAGE_REGEX:/image|jpg|png|gif/,
UPLOADING:"uploading",PROCESSING:"processing",CANCELLED:"cancelled",ERROR:"error"
,COMPLETE:"complete",html5UploadQueue:[],currentUploadIdx:-1,initialize:function(
e){this.mix=e.mix,this.$el=$(this.el),_.bindAll(this,"onFlashStart","onFlashQueued"
,"exitDuringUpload","onFlashSuccess","onFlashError","onFlashProgress","onUploadSuccess"
,"onUploadError","onUploadResponse","onUploadProgress"),window.onbeforeunload=this
.exitDuringUpload},events:{"click #trackdrop_link":"manualFileSelect","click .upload_track_link"
:"manualFileSelect","change #track_file":"manualFileUpload","click #basic_upload_link"
:"basicUploadPopup"},show:function(){e.html5Upload.useHTML5()?(this.mode="html5",
$("#trackdrop_instructions").show(),e.html5Upload.bind("fileDrop",this.uploadTracksWithHtml5
,this)):r.useFlash()?(this.mode="flash",$("#flash_upload_instructions").show(),this
.initializeFlashUpload()):(this.mode="basic",this.$("#basic_upload_instructions")
.show())},manualFileSelect:function(){return $("#trackdrop_input").show(),$("#track_file"
).click(),!1},manualFileUpload:function(e){return this.uploadTracksWithHtml5(e.currentTarget
.files),!1},basicUploadPopup:function(e){var t=window.open(e.currentTarget.href,"uploader"
,"width=1000,height=800,scrollbars=no,left=50,top=50");return!1},addToQueue:function(
n){t.trackUploadStarted(),this.isUploading()||this.mix.trigger("uploading"),this.
mode=="html5"?(n.id=_.uniqueId(),this.html5UploadQueue.push(n)):this.mode=="flash"
;var r=new s({uploader:this,file:n});e.selectedTracksView.appendTrackUploadView(r
)},onUploadProgress:function(e,t){t>=98?this.trigger("stateChange:"+e.id,this.PROCESSING
):this.trigger("stateChange:"+e.id,this.UPLOADING,{percentage:t})},removeFromQueue
:function(n){t.trackUploadCancelled(),e.selectedTracksView.updateTracklist(),e.selectedTracksView
.updatePlaceholderTracks(),this.mode==="html5"?n.cancelled=!0:this.mode==="flash"&&
this.swfu.cancelUpload(n.id)},onUploadResponse:function(e,t){parseInt(t.status,10
)===201?this.onUploadSuccess(e,t):this.onUploadError(e,t.validation_errors)},onUploadSuccess
:function(e,t){var n=o.loadOne(t.track),r=new u({track:n});$("#my_tracks_results .track_results"
).prepend(r.render().el),this.trigger("stateChange:"+e.id,this.COMPLETE,{track:n}
),this.onUploadComplete(e)},onUploadError:function(e,t){this.trigger("stateChange:"+
e.id,this.ERROR,{message:t}),this.onUploadComplete(e)},onUploadComplete:function(
e){this.mode==="html5"?this.currentUploadIdx+1==this.html5UploadQueue.length&&this
.onQueueComplete():this.mode=="flash"&&this.swfu.getStats().files_queued===0&&this
.onQueueComplete(),t.uploadTrack(),t.postToStats("js.track.upload.finished")},onQueueComplete
:function(){this.mix.trigger("uploadsComplete")},uploadTracksWithHtml5:function(t
){var n=[];for(i=0;i<t.length;i++)this.isCorrectAudioFileFormat(t[i].type,t[i].name
)?n.push(t[i]):t[i].type.match(this.IMAGE_REGEX)||e.show_flash_error("Sorry, this file type ("+
t[i].type+") is not supported. Please try another file.",!0);for(i=0;i<n.length;i++
)this.addToQueue(t[i]);return this.uploadNextInHtml5Queue(),!0},isCorrectAudioFileFormat
:function(e,t){return t=$.trim(t),e=$.trim(e),e&&e!==""&&_.indexOf(this.AUDIO_TYPES
,e)!=-1?!0:t&&t!==""&&t.match(this.AUDIO_EXTENSION_REGEX)?!0:!1},onHtml5Progress:
function(e,t){t.lengthComputable&&this.onUploadProgress(e,Math.round(t.loaded*100/
t.total))},onHtml5Complete:function(e,t){var n;try{n=$.parseJSON(t.responseText)}
catch(r){n={status:500}}n==null&&(n={status:500}),this.onUploadResponse(e,n),this
.uploadNextInHtml5Queue()},uploadNextInHtml5Queue:function(){while(this.currentUploadIdx+1<
this.html5UploadQueue.length){this.currentUploadIdx++;var t=this.html5UploadQueue
[this.currentUploadIdx];if(t&&!t.cancelled){this.trigger("stateChange:"+t.id,this
.UPLOADING);var n=e.html5Upload.create(t,"/tracks/create_through_nginx.jsonh?mix_id="+
e.mix.id,"track[file]",_.bind(function(e){this.onHtml5Progress(t,e)},this),_.bind
(function(e){this.onHtml5Complete(t,e)},this));return $.ajax(n),!0}}this.onQueueComplete
()},initializeFlashUpload:function(){var t={upload_url:"/tracks/create_through_nginx.json200"
,file_size_limit:"50 MB",file_types:"*.mp3; *.MP3; *.m4a; *M4A; *.aac; *.AAC; *.mp4; *.MP4"
,file_types_description:"All MP3 or AAC files",file_upload_limit:25,file_queue_limit
:0,post_params:{mix_id:this.mix.id,user_token:e.currentUser.get("user_token")},custom_settings
:{progressTarget:"fsUploadProgress"},button_width:165,button_height:38,button_placeholder_id
:"swfupload_track",button_text_style:"upload",button_image_url:"/assets/buttons/upload_tracks.png"
,upload_start_handler:this.onFlashStart,upload_progress_handler:this.onFlashProgress
,upload_success_handler:this.onFlashSuccess,upload_error_handler:this.onFlashError
,file_queued_handler:this.onFlashQueued};this.swfu=r.swfu(t)},onFlashQueued:function(
e){this.addToQueue(e),this.swfu.startUpload()},onFlashStart:function(e){this.trigger
("stateChange:"+e.id,this.UPLOADING)},onFlashProgress:function(e,t,n){this.onUploadProgress
(e,Math.round(t*100/n))},onFlashSuccess:function(e,t){var n;try{n=$.parseJSON(t)}
catch(r){n={status:500}}this.onUploadResponse(e,n)},onFlashError:function(e){this
.onUploadError(e)},exitDuringUpload:function(){if(this.isUploading())return"Currently uploading tracks will be interrupted."
},isUploading:function(){return this.mode==="html5"?this.html5UploadQueue.length>0&&
this.currentUploadIdx<this.html5UploadQueue.length-1:this.swfu.getStats().in_progress>0
}});return a}),define("hgn!templates/mixes/_instagram_no_results",["hogan"],function(
e){function n(){return t.render.apply(t,arguments)}var t=new e.Template(function(
e,t,n){var r=this;return r.b(n=n||""),r.b('<li class="instagram-no-results">'),r.
b("\n"+n),r.b("  <h3>Looks like you don't have any photos yet.</h3>"),r.b("\n"+n)
,r.b("  <p> Fire up your Instagram and hit the streets - when you're back all your pictures will be waiting right here. </p>"
),r.b("\n"+n),r.b("</li>"),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/mixes/_instagram_disconnected"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<li class="instagram-no-results">'
),r.b("\n"+n),r.b("  <h3>Looks like you disconnected your account from instagram.</h3>"
),r.b("\n"+n),r.b("  <p> Please reload this page and try connecting your account again. </p>"
),r.b("\n"+n),r.b("</li>"),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/mixes/_instagram_photo"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b("<li>"),r.b("\n"+n)
,r.b(' <img class="instagram-photo" src="'),r.b(r.v(r.f("thumbnail",e,t,0))),r.b('" data-link="'
),r.b(r.v(r.f("photo",e,t,0))),r.b('" title="'),r.b(r.v(r.f("caption",e,t,0))),r.
b('" />'),r.b("\n"+n),r.b("</li>"),r.fl()},"",e,{});return n.template=t,n}),define
("hgn!templates/mixes/instagram_feed",["hogan"],function(e){function n(){return t
.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r
.b(n=n||""),r.b('<div style="position:relative">'),r.b("\n"+n),r.b('  <div class="instagram-header">'
),r.b("\n"+n),r.b('    <img class="instagram-logo" src="/assets/logo/logo.instagram.mini.png" />'
),r.b("\n"+n),r.b("    <div>Choose an Instagram photo</div>"),r.b("\n"+n),r.b('    <a href="#" class="icon-link close-instagram-box"><span class="i-close"></span></a>'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <ul id="instagram_feed">'
),r.b("\n"+n),r.b("\n"+n),r.b("  </ul>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="instagram-feed-load-more" style="display: none;">'
),r.b("\n"+n),r.b('    <img src="/assets/spinner/spinner-large.gif" alt="loading" />'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div id="instagram-loading-message">'
),r.b("\n"+n),r.b('    <img src="/assets/spinner/spinner-large.gif" alt="loading" />'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"),r.fl()},"",e,{});return n
.template=t,n}),define("views/instagram_feed_view",["views/trax_view","lib/jsonh.jquery"
,"lib/events","hgn!templates/mixes/_instagram_no_results","hgn!templates/mixes/_instagram_disconnected"
,"hgn!templates/mixes/_instagram_photo","hgn!templates/mixes/instagram_feed"],function(
e,t,n,r,i,s,o){var u=e.extend({initialize:function(e){this.parent=e.parent,this.feed=
[],this._loadFeed(null)},show:function(e){$.facebox(this.render(),{dontRemove:!0}
),this._hideFaceboxCloseButton(),this._disablePageScroll()},_loadFeed:function(e)
{this.loading=!0;var n=e?{max_id:e}:{},r=this;t.now("/instagram/recent_media",n,function(
t){r._renderFeed(t,e===undefined),r.loading=!1})},_renderFeed:function(e,t){var n=
_.map(e.feed,this._mapFeed);this.feed=_.union(this.feed,n),this._adjustLoading(n)
,this._appendPhotos(n),this.feed.length===0&&this._feedContainer().append(r()),e.
errors&&this._feedContainer().empty().append(i()),this._bindEvents()},_adjustLoading
:function(e){$("#instagram-loading-message").hide(),$(".instagram-feed-load-more img"
).hide();var t=$(".instagram-feed-load-more");e.length>0?t.show():t.hide()},_appendPhotos
:function(e){var t=this;_.each(e,function(e){var n=s(e);t._feedContainer().append
(n)})},_mapFeed:function(e){var t="";return e.caption&&(t=e.caption.text),{photo:
e.images.standard_resolution.url,thumbnail:e.images.thumbnail.url,caption:t,id:e.
id}},_bindEvents:function(){this._bindPhotos(),this._bindLoadMore(),this._replaceFaceboxButton
()},_replaceFaceboxButton:function(){function e(){$(".close.icon-link").show(),$(".popup .content"
).removeClass("borderless")}$(".close-instagram-box").click($.facebox.close),this
._hideFaceboxCloseButton(),$(document).bind("afterClose.facebox",e)},_hideFaceboxCloseButton
:function(){$(".close.icon-link").hide(),$(".popup .content").addClass("borderless"
)},_bindPhotos:function(){var e=this;$(".instagram-photo").click(function(){e.selectPhoto
(this)})},_bindLoadMore:function(){var e=this,t=this._feedContainer();t.scroll(function(
n){n.stopImmediatePropagation(),t.outerHeight()===t.get(0).scrollHeight-t.scrollTop
()&&e._loadMore()})},_loadMore:function(){var e=_.last(this.feed).id;return this.
loading||($(".instagram-feed-load-more img").show(),this._loadFeed(e)),!1},_feedContainer
:function(){return $("ul#instagram_feed")},_disablePageScroll:function(){this._feedContainer
().mouseenter(function(){$("body").css("overflow","hidden")}),this._feedContainer
().mouseleave(function(){$("body").css("overflow","auto")})},selectPhoto:function(
e){var t=$(e).data("link");this.parent.sendPhotoToBackEnd(t),$("#cover_art_preview_img"
).attr("src",t).css({width:196,height:196,marginLeft:0,marginTop:0}),$.facebox.close
(),n.selectInstagramPhoto()},render:function(){return this.el=o(),this.el}});return u
}),define("hgn!templates/shared/img_cropper",["hogan"],function(e){function n(){return t
.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r
.b(n=n||""),r.b('<img class="original_img" src="'),r.b(r.v(r.f("original_img_url"
,e,t,0))),r.b('" style="max-width:'),r.b(r.v(r.f("max_width",e,t,0))),r.b("px; max-height:"
),r.b(r.v(r.f("max_height",e,t,0))),r.b('px;">'),r.b("\n"+n),r.b("\n"+n),r.b('<a class="submit_crop turquoise_button flatbutton" href="#">Crop!</a>'
),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),function(e){function s(){return e
("<div/>")}var t=Math.abs,n=Math.max,r=Math.min,i=Math.round;e.imgAreaSelect=function(
o,u){function G(e){return e+y.left-S.left}function Y(e){return e+y.top-S.top}function Z
(e){return e-y.left+S.left}function et(e){return e-y.top+S.top}function tt(e){return e
.pageX-S.left}function nt(e){return e.pageY-S.top}function rt(e){var t=e||k,n=e||
L;return{x1:i(q.x1*t),y1:i(q.y1*n),x2:i(q.x2*t),y2:i(q.y2*n),width:i(q.x2*t)-i(q.
x1*t),height:i(q.y2*n)-i(q.y1*n)}}function it(e,t,n,r,s){var o=s||k,u=s||L;q={x1:
i(e/o||0),y1:i(t/u||0),x2:i(n/o||0),y2:i(r/u||0)},q.width=q.x2-q.x1,q.height=q.y2-
q.y1}function st(){if(!f||!a.width())return;y={left:i(a.offset().left),top:i(a.offset
().top)},b=a.innerWidth(),w=a.innerHeight(),y.top+=a.outerHeight()-w>>1,y.left+=a
.outerWidth()-b>>1,O=i(u.minWidth/k)||0,M=i(u.minHeight/L)||0,_=i(r(u.maxWidth/k||1<<24
,b)),D=i(r(u.maxHeight/L||1<<24,w)),e().jquery=="1.3.2"&&T=="fixed"&&!R.getBoundingClientRect&&
(y.top+=n(document.body.scrollTop,R.scrollTop),y.left+=n(document.body.scrollLeft
,R.scrollLeft)),S=/absolute|relative/.test(E.css("position"))?{left:i(E.offset().
left)-E.scrollLeft(),top:i(E.offset().top)-E.scrollTop()}:T=="fixed"?{left:e(document
).scrollLeft(),top:e(document).scrollTop()}:{left:0,top:0},m=G(0),g=Y(0),(q.x2>b||
q.y2>w)&&pt()}function ot(t){if(!H)return;l.css({left:G(q.x1),top:Y(q.y1)}).add(c
).width(J=q.width).height(K=q.height),c.add(h).add(d).css({left:0,top:0}),h.width
(n(J-h.outerWidth()+h.innerWidth(),0)).height(n(K-h.outerHeight()+h.innerHeight()
,0)),e(p[0]).css({left:m,top:g,width:q.x1,height:w}),e(p[1]).css({left:m+q.x1,top
:g,width:J,height:q.y1}),e(p[2]).css({left:m+q.x2,top:g,width:b-q.x2,height:w}),e
(p[3]).css({left:m+q.x1,top:g+q.y2,width:J,height:w-q.y2}),J-=d.outerWidth(),K-=d
.outerHeight();switch(d.length){case 8:e(d[4]).css({left:J>>1}),e(d[5]).css({left
:J,top:K>>1}),e(d[6]).css({left:J>>1,top:K}),e(d[7]).css({top:K>>1});case 4:d.slice
(1,3).css({left:J}),d.slice(2,4).css({top:K})}t!==!1&&(e.imgAreaSelect.onKeyPress!=
St&&e(document).unbind(e.imgAreaSelect.keyPress,e.imgAreaSelect.onKeyPress),u.keys&&
e(document)[e.imgAreaSelect.keyPress](e.imgAreaSelect.onKeyPress=St)),Nt&&h.outerWidth
()-h.innerWidth()==2&&(h.css("margin",0),setTimeout(function(){h.css("margin","auto"
)},0))}function ut(e){st(),ot(e),B=G(q.x1),j=Y(q.y1),F=G(q.x2),I=Y(q.y2)}function at
(e,t){u.fadeSpeed?e.fadeOut(u.fadeSpeed,t):e.hide()}function ft(e){var t=Z(tt(e))-
q.x1,n=et(nt(e))-q.y1;Q||(st(),Q=!0,l.one("mouseout",function(){Q=!1})),A="",u.resizable&&
(n<=u.resizeMargin?A="n":n>=q.height-u.resizeMargin&&(A="s"),t<=u.resizeMargin?A+="w"
:t>=q.width-u.resizeMargin&&(A+="e")),l.css("cursor",A?A+"-resize":u.movable?"move"
:""),v&&v.toggle()}function lt(t){e("body").css("cursor",""),(u.autoHide||q.width*
q.height==0)&&at(l.add(p),function(){e(this).hide()}),e(document).unbind("mousemove"
,dt),l.mousemove(ft),u.onSelectEnd(o,rt())}function ct(t){return t.which!=1?!1:(st
(),A?(e("body").css("cursor",A+"-resize"),B=G(q[/w/.test(A)?"x2":"x1"]),j=Y(q[/n/
.test(A)?"y2":"y1"]),e(document).mousemove(dt).one("mouseup",lt),l.unbind("mousemove"
,ft)):u.movable?(N=m+q.x1-tt(t),C=g+q.y1-nt(t),l.unbind("mousemove",ft),e(document
).mousemove(mt).one("mouseup",function(){u.onSelectEnd(o,rt()),e(document).unbind
("mousemove",mt),l.mousemove(ft)})):a.mousedown(t),!1)}function ht(e){P&&(e?(F=n(
m,r(m+b,B+t(I-j)*P*(F>B||-1))),I=i(n(g,r(g+w,j+t(F-B)/P*(I>j||-1)))),F=i(F)):(I=n
(g,r(g+w,j+t(F-B)/P*(I>j||-1))),F=i(n(m,r(m+b,B+t(I-j)*P*(F>B||-1)))),I=i(I)))}function pt
(){B=r(B,m+b),j=r(j,g+w),t(F-B)<O&&(F=B-O*(F<B||-1),F<m?B=m+O:F>m+b&&(B=m+b-O)),t
(I-j)<M&&(I=j-M*(I<j||-1),I<g?j=g+M:I>g+w&&(j=g+w-M)),F=n(m,r(F,m+b)),I=n(g,r(I,g+
w)),ht(t(F-B)<t(I-j)*P),t(F-B)>_&&(F=B-_*(F<B||-1),ht()),t(I-j)>D&&(I=j-D*(I<j||-1
),ht(!0)),q={x1:Z(r(B,F)),x2:Z(n(B,F)),y1:et(r(j,I)),y2:et(n(j,I)),width:t(F-B),height
:t(I-j)},ot(),u.onSelectChange(o,rt())}function dt(e){return F=/w|e|^$/.test(A)||
P?tt(e):G(q.x2),I=/n|s|^$/.test(A)||P?nt(e):Y(q.y2),pt(),!1}function vt(t,n){F=(B=
t)+q.width,I=(j=n)+q.height,e.extend(q,{x1:Z(B),y1:et(j),x2:Z(F),y2:et(I)}),ot(),
u.onSelectChange(o,rt())}function mt(e){return B=n(m,r(N+tt(e),m+b-q.width)),j=n(
g,r(C+nt(e),g+w-q.height)),vt(B,j),e.preventDefault(),!1}function gt(){e(document
).unbind("mousemove",gt),st(),F=B,I=j,pt(),A="",p.is(":visible")||l.add(p).hide()
.fadeIn(u.fadeSpeed||0),H=!0,e(document).unbind("mouseup",yt).mousemove(dt).one("mouseup"
,lt),l.unbind("mousemove",ft),u.onSelectStart(o,rt())}function yt(){e(document).unbind
("mousemove",gt).unbind("mouseup",yt),at(l.add(p)),it(Z(B),et(j),Z(B),et(j)),this instanceof 
e.imgAreaSelect||(u.onSelectChange(o,rt()),u.onSelectEnd(o,rt()))}function bt(t){
return t.which!=1||p.is(":animated")?!1:(st(),N=B=tt(t),C=j=nt(t),e(document).mousemove
(gt).mouseup(yt),!1)}function wt(){ut(!1)}function Et(){f=!0,Tt(u=e.extend({classPrefix
:"imgareaselect",movable:!0,parent:"body",resizable:!0,resizeMargin:10,onInit:function(
){},onSelectStart:function(){},onSelectChange:function(){},onSelectEnd:function()
{}},u)),l.add(p).css({visibility:""}),u.show&&(H=!0,st(),ot(),l.add(p).hide().fadeIn
(u.fadeSpeed||0)),setTimeout(function(){u.onInit(o,rt())},0)}function xt(e,t){for(
var n in t)u[n]!==undefined&&e.css(t[n],u[n])}function Tt(t){t.parent&&(E=e(t.parent
)).append(l.add(p)),e.extend(u,t),st();if(t.handles!=null){d.remove(),d=e([]),X=t
.handles?t.handles=="corners"?4:8:0;while(X--)d=d.add(s());d.addClass(u.classPrefix+"-handle"
).css({position:"absolute",fontSize:0,zIndex:x+1||1}),!parseInt(d.css("width"))>=0&&
d.width(5).height(5),(V=u.borderWidth)&&d.css({borderWidth:V,borderStyle:"solid"}
),xt(d,{borderColor1:"border-color",borderColor2:"background-color",borderOpacity
:"opacity"})}k=u.imageWidth/b||1,L=u.imageHeight/w||1,t.x1!=null&&(it(t.x1,t.y1,t
.x2,t.y2),t.show=!t.hide),t.keys&&(u.keys=e.extend({shift:1,ctrl:"resize"},t.keys
)),p.addClass(u.classPrefix+"-outer"),c.addClass(u.classPrefix+"-selection");for(
X=0;X++<4;)e(h[X-1]).addClass(u.classPrefix+"-border"+X);xt(c,{selectionColor:"background-color"
,selectionOpacity:"opacity"}),xt(h,{borderOpacity:"opacity",borderWidth:"border-width"
}),xt(p,{outerColor:"background-color",outerOpacity:"opacity"}),(V=u.borderColor1
)&&e(h[0]).css({borderStyle:"solid",borderColor:V}),(V=u.borderColor2)&&e(h[1]).css
({borderStyle:"dashed",borderColor:V}),l.append(c.add(h).add(v)).append(d),Nt&&((
V=(p.css("filter")||"").match(/opacity=(\d+)/))&&p.css("opacity",V[1]/100),(V=(h.
css("filter")||"").match(/opacity=(\d+)/))&&h.css("opacity",V[1]/100)),t.hide?at(
l.add(p)):t.show&&f&&(H=!0,l.add(p).fadeIn(u.fadeSpeed||0),ut()),P=(W=(u.aspectRatio||""
).split(/:/))[0]/W[1],a.add(p).unbind("mousedown",bt);if(u.disable||u.enable===!1
)l.unbind("mousemove",ft).unbind("mousedown",ct),e(window).unbind("resize",wt);else{
if(u.enable||u.disable===!1)(u.resizable||u.movable)&&l.mousemove(ft).mousedown(ct
),e(window).resize(wt);u.persistent||a.add(p).mousedown(bt)}u.enable=u.disable=undefined
}var a=e(o),f,l=s(),c=s(),h=s().add(s()).add(s()).add(s()),p=s().add(s()).add(s()
).add(s()),d=e([]),v,m,g,y={left:0,top:0},b,w,E,S={left:0,top:0},x=0,T="absolute"
,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q={x1:0,y1:0,x2:0,y2:0,width:0,height:0},R=document
.documentElement,U=navigator.userAgent,z,W,X,V,J,K,Q,St=function(e){var t=u.keys,
i,s,o=e.keyCode;i=!isNaN(t.alt)&&(e.altKey||e.originalEvent.altKey)?t.alt:!isNaN(
t.ctrl)&&e.ctrlKey?t.ctrl:!isNaN(t.shift)&&e.shiftKey?t.shift:isNaN(t.arrows)?10:
t.arrows;if(t.arrows=="resize"||t.shift=="resize"&&e.shiftKey||t.ctrl=="resize"&&
e.ctrlKey||t.alt=="resize"&&(e.altKey||e.originalEvent.altKey)){switch(o){case 37
:i=-i;case 39:s=n(B,F),B=r(B,F),F=n(s+i,B),ht();break;case 38:i=-i;case 40:s=n(j,
I),j=r(j,I),I=n(s+i,j),ht(!0);break;default:return}pt()}else{B=r(B,F),j=r(j,I);switch(
o){case 37:vt(n(B-i,m),j);break;case 38:vt(B,n(j-i,g));break;case 39:vt(B+r(i,b-Z
(F)),j);break;case 40:vt(B,j+r(i,w-et(I)));break;default:return}}return!1};this.remove=
function(){Tt({disable:!0}),l.add(p).remove()},this.getOptions=function(){return u
},this.setOptions=Tt,this.getSelection=rt,this.setSelection=it,this.cancelSelection=
yt,this.update=ut;var Nt=(/msie ([\w.]+)/i.exec(U)||[])[1],Ct=/opera/i.test(U),kt=/webkit/i
.test(U)&&!/chrome/i.test(U);z=a;while(z.length)x=n(x,isNaN(z.css("z-index"))?x:z
.css("z-index")),z.css("position")=="fixed"&&(T="fixed"),z=z.parent(":not(body)")
;x=u.zIndex||x,Nt&&a.attr("unselectable","on"),e.imgAreaSelect.keyPress=Nt||kt?"keydown"
:"keypress",Ct&&(v=s().css({width:"100%",height:"100%",position:"absolute",zIndex
:x+2||2})),l.add(p).css({visibility:"hidden",position:T,overflow:"hidden",zIndex:
x||"0"}),l.css({zIndex:x+2||2}),c.add(h).css({position:"absolute",fontSize:0}),o.
complete||o.readyState=="complete"||!a.is("img")?Et():a.one("load",Et),!f&&Nt&&Nt>=7&&
(o.src=o.src)},e.fn.imgAreaSelect=function(t){return t=t||{},this.each(function()
{e(this).data("imgAreaSelect")?t.remove?(e(this).data("imgAreaSelect").remove(),e
(this).removeData("imgAreaSelect")):e(this).data("imgAreaSelect").setOptions(t):t
.remove||(t.enable===undefined&&t.disable===undefined&&(t.enable=!0),e(this).data
("imgAreaSelect",new e.imgAreaSelect(this,t)))}),t.instance?e(this).data("imgAreaSelect"
):this}}(jQuery),define("vendor/jquery/jquery.imgareaselect",function(){}),define
("views/img_cropper_view",["views/trax_view","hgn!templates/shared/img_cropper","vendor/jquery/jquery.imgareaselect"
],function(e,t){var n=e.extend({initialize:function(e){this.mix=e.mix,this.template=
t,_.bindAll(this,"onFaceboxClose","onSelectChange","onSelectEnd","onImageFetched"
,"onImageUpdated")},MAX_PREVIEW_WIDTH:800,MAX_PREVIEW_HEIGHT:600,render:function(
){return this.onImageFetched(),$(document).bind("close.facebox",this.onFaceboxClose
),this},onImageFetched:function(){this.$el.html(this.template({max_width:this.MAX_PREVIEW_WIDTH
,max_height:this.MAX_PREVIEW_HEIGHT,original_img_url:this.mix.image.get("original_url"
)})),$.facebox(this.el),this.$("img").load(function(){$("#facebox").css("left",$(
window).width()/2-$("#facebox .popup").width()/2)}),this.viewRatio=this.calculateViewRatio
(),this.setupEditPreview(),this.imgAreaSelect=this.$("img").imgAreaSelect(this.imgAreaSelectOptions
())},show:function(){return this.render(),this},events:{"click .submit_crop":"submitCrop"
},onFaceboxClose:function(){this.imgAreaSelect&&this.imgAreaSelect.cancelSelection
(),this.saving||this.mix.image.fetch()},submitCrop:function(){this.saving=!0,$.facebox
.close(),this.mix.image.save({success:this.onImageUpdated})},onImageUpdated:function(
){this.saving=!0},setupEditPreview:function(e){$("#cover_art_preview_img").attr("src"
,this.mix.image.get("original_url"))},imgAreaSelectOptions:function(){return _.extend
({instance:!0,zIndex:9999999,aspectRatio:"1:1",minHeight:this.viewRatio*400,minWidth
:this.viewRatio*400,onSelectChange:this.onSelectChange,onSelectEnd:this.onSelectEnd
},this.cropAttributes())},cropAttributes:function(){return this.mix.image.get("crop_width"
)||this.mix.image.setDefaultCropAttributes(),{x1:this.viewRatio*this.mix.image.get
("crop_x1"),y1:this.viewRatio*this.mix.image.get("crop_y1"),x2:this.viewRatio*(this
.mix.image.get("crop_x1")+this.mix.image.get("crop_width")),y2:this.viewRatio*(this
.mix.image.get("crop_y1")+this.mix.image.get("crop_height"))}},onSelectChange:function(
e,t){if(!t.width||!t.height)return;this.setCropCoordinates(t)},onSelectEnd:function(
e,t){this.setCropCoordinates(t)},setCropCoordinates:function(e){this.mix.image.set
({crop_x1:e.x1/this.viewRatio,crop_y1:e.y1/this.viewRatio,crop_width:e.width/this
.viewRatio,crop_height:e.height/this.viewRatio})},calculateViewRatio:function(){var e=
this.MAX_PREVIEW_WIDTH/this.mix.image.get("original_width"),t=this.MAX_PREVIEW_HEIGHT/
this.mix.image.get("original_height");return Math.min(e,t)}});return n}),define("hgn!templates/mixes/upload_cover_art"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="cover_art_preview">'
),r.b("\n"+n),r.b('	<img src="'),r.b(r.v(r.d("mix.cover_urls.sq500",e,t,0))),r.b('" id="cover_art_preview_img" />'
),r.b("\n"+n),r.b("\n"+n),r.b('	<div id="cover_art_instructions">'),r.b("\n"+n),r
.s(r.f("useHTML5",e,t,1),e,t,0,147,228,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('			<div id="cover_art_html5_cta">Drop image file here to add cover art.</div>'
),n.b("\n")}),e.pop()),r.b("		Keep your mix page beautiful! Use an image at least 500 x 500 pixels."
),r.b("\n"+n),r.b("	</div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.
b('<a href="#" id="cover_art_crop_link" class="flatbutton">[ Crop ] </a>'),r.b("\n"+
n),r.b("\n"+n),r.b('<div id="upload_cover_art_buttons">'),r.b("\n"+n),r.b('	<form action="/images?mix_id='
),r.b(r.v(r.d("mix.id",e,t,0))),r.b('" method="POST" class="image_upload_form">')
,r.b("\n"+n),r.b("		"),r.b("\n"+n),r.b('		<div id="upload_from_url">'),r.b("\n"+n
),r.b('			<input type="text" id="mix_new_cover_url" name="mix[new_cover_download_url]" class="text" placeholder="Enter URL here" />'
),r.b("\n"+n),r.b('			<!--input type="submit" value="Upload" /-->'),r.b("\n"+n),r
.b('			<div id="cover_art-spinner" class="spin"><span style="display: none;">&nbsp;</span></div>'
),r.b("\n"+n),r.b("		</div>"),r.b("\n"+n),r.b("		<div>"),r.b("\n"+n),r.b('			<a href="#" id="cover_art_upload_link" class="turquoise_button flatbutton">Upload image</a>'
),r.b("\n"+n),r.b('			<span id="upload_from_file" style="display:none;">'),r.b("\n"+
n),r.b('				<input type="file" name="mix[new_cover]" id="mix_new_cover" class="file" size="11">'
),r.b("\n"+n),r.b("			</span>"),r.b("\n"+n),r.b("\n"+n),r.s(r.f("instagram_connected"
,e,t,1),e,t,1,0,0,"")||(r.b('			 <a href="'),r.b(r.v(r.f("absolute_path",e,t,0)))
,r.b('/auth/instagram" class="flatbutton js-connect cover_art_instagram" data-site="instagram" data-win="instagram" rel="popup" title="Connect with Instagram" data-win-width="960" data-win-height="660">Instagram</a>'
),r.b("\n")),r.b("\n"+n),r.s(r.f("instagram_connected",e,t,1),e,t,0,1407,1500,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b('			 <a href="#" id="instagram_feed" class="flatbutton cover_art_instagram">Instagram</a>'
),n.b("\n")}),e.pop()),r.b("		</div>"),r.b("\n"+n),r.b("	</form>"),r.b("\n"+n),r.
b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/mixes/upload_cover_preview"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="cover_art_upload_progress" class="upload_progress">'
),r.b("\n"+n),r.b('	<div id="cover_art_upload_progress_bar" class="upload_progress_bar" style="width: 0%;">'
),r.b(r.v(r.f("filename",e,t,0))),r.b("</div>"),r.b("\n"+n),r.b('  <span id="cover_art_upload_progress_num" class="upload_progress_num">0%</span>'
),r.b("\n"+n),r.b("</div>"),r.fl()},"",e,{});return n.template=t,n}),define("views/mix_cover_upload_view"
,["global_trax","views/trax_view","models/modules/flash_upload","views/instagram_feed_view"
,"views/img_cropper_view","hgn!templates/mixes/upload_cover_art","hgn!templates/mixes/upload_cover_preview"
,"lib/jsonh.jquery"],function(e,t,n,r,i,s,o,u){var a=t.extend(n).extend({el:"#upload_cover_art"
,className:"editmode",IMAGE_REGEX:/image|jpg|png|gif/,initialize:function(e){this
.$el=$(this.el),this.mix=e.mix,this.template=s,_.bindAll(this,"initializeProgressBar"
,"onFlashStart","onFlashSuccess","onUploadResponse","onFlashProgress","onFlashQueued"
,"onFormComplete","onFileDataUrlLoad","onUploadProgress","onMixImageIdChange")},render
:function(){return this.$el.html(this.template({useHTML5:e.html5Upload.useHTML5()
,mix:this.mix.toJSON(),instagram_connected:this.instagramConnectedState()})),this
.$form=this.$("form"),this.bindEvents(),this.show(),this.mix.image.bind("change:id"
,this.onMixImageIdChange),this},bindEvents:function(){this.$form.submit(_.bind(this
.onFormSubmit,this))},events:{"click #cover_art_upload_link":"manualFileSelect","click #cover_art_url_link"
:"manualURLSelect","click #cover_art_crop_link":"onCropClick","change #mix_new_cover"
:"manualFileUpload","click .cover_art_cancel":"hideInputs","focus #mix_new_cover_url"
:"selectUrl","click #instagram_feed":"showInstagramFeed"},instagramConnected:!1,forceInstagramFeed
:function(){this.instagramConnected=!0,this.render(),this.showInstagramFeed()},instagramConnectedState
:function(){try{return this.instagramConnected||e.currentUser.get("partners").instagram
.status=="connected"}catch(t){return!1}},show:function(){e.html5Upload.useHTML5()?
(this.mode="html5",e.html5Upload.bind("fileDrop",this.uploadCoverWithHtml5,this))
:n.useFlash()?(this.mode="flash",this.initializeFlashUpload()):this.mode="basic"}
,showInstagramFeed:function(e){return e&&e.preventDefault(),(new r({parent:this})
).show(),!1},onCropClick:function(){if(this.mix.image){var e=new i({mix:this.mix}
);e.show()}return!1},selectUrl:function(){return $("#mix_new_cover_url").select()
,!1},manualFileSelect:function(){return $("#upload_from_url").hide(),$("#upload_from_file"
).show(),$("#mix_new_cover").focus().click(),!1},manualFileUpload:function(e){return e
.currentTarget.files&&this.uploadCoverWithHtml5(e.currentTarget.files[0]),!1},manualURLSelect
:function(){return $("#upload_from_url").show(),$("#upload_from_file").hide(),$("#mix_new_cover_url"
).focus(),!1},sendPhotoToBackEnd:function(e){this.manualURLSelect(),$("#mix_new_cover_url"
).val(e),this.onFormSubmit()},onFormSubmit:function(e){return this._uploadRequest&&
this._uploadRequest.abort(),this._uploadRequest=u.now($(".image_upload_form").attr
("action"),{image_url:$("#mix_new_cover_url").val()},this.onFormComplete,{spinner
:"#cover_art-spinner",type:"POST"}),!1},onFormComplete:function(e){this.onUploadResponse
(null,e)},hideInputs:function(){return $("#upload_from_url, #upload_from_file").hide
(),!1},onMixImageIdChange:function(){this.mix.image.id&&this.$el.addClass("hasImage"
)},uploadCoverWithHtml5:function(t){if(_.isArray(t)||Object.prototype.toString.call
(t).match("FileList"))t=t[0];return!t||!t.type.match(this.IMAGE_REGEX)?!1:(this.initializeProgressBar
(t.fileName||t.name),window.FileReader&&(preview=new FileReader,preview.onload=this
.onFileDataUrlLoad,preview.readAsDataURL(t)),$("#cover_art-spinner span, #cover_art_upload_progress"
).show(),this._uploadRequest&&this._uploadRequest.abort(),this._uploadRequest=$.ajax
(e.html5Upload.create(t,"/images.jsonh?mix_id="+this.mix.id,"image",_.bind(function(
e){this.onHtml5Progress(t,e)},this),_.bind(function(e){this.onHtml5Complete(t,e)}
,this))),!0)},onHtml5Progress:function(e,t){t.lengthComputable&&this.onUploadProgress
(e,Math.round(t.loaded*100/t.total))},onHtml5Complete:function(e,t){var n;try{n=$
.parseJSON(t.responseText)}catch(r){n={status:500}}this.onUploadResponse(e,n)},initializeFlashUpload
:function(){var t={upload_url:"/images.json200?mix_id="+this.mix.id,file_size_limit
:"5 MB",file_types:"*.jpg; *.JPG; *.jpeg; *JPG; *.png; *.PNG; *.gif; *.GIF",file_types_description
:"All JPG, GIF, or PNG files",file_upload_limit:0,file_queue_limit:0,post_params:
{user_token:e.currentUser.get("user_token")},button_width:105,button_height:18,button_placeholder_id
:"cover_art_upload_link",button_text_style:"upload_text",button_image_url:"/assets/buttons/upload_image.png"
,upload_start_handler:this.onFlashStart,upload_progress_handler:this.onFlashProgress
,upload_success_handler:this.onFlashSuccess,file_queued_handler:this.onFlashQueued
};this.swfu=n.swfu(t)},onFileDataUrlLoad:function(e){this.mix.image.onDataUrlLoad
(e.target.result)},onFlashQueued:function(e){$("#cover_art_upload_progress").show
(),this.swfu.startUpload()},initializeProgressBar:function(e){this.$("#cover_art_preview"
).append(o({filename:e}))},resetProgessBar:function(){this.$("#cover_art_upload_progress"
).remove()},onFlashStart:function(e){this.initializeProgressBar(e.name)},onFlashProgress
:function(e,t,n){this.onUploadProgress(e,Math.round(t*100/n))},onUploadProgress:function(
e,t){this.$("#cover_art_upload_progress_bar").css("width",t+"%"),this.$("#cover_art_upload_progress_num"
).html(t+"%"),t>99&&this.$("#cover_art_upload_progress").addClass("processing")},
onFlashSuccess:function(e,t){var n;try{n=$.parseJSON(t)}catch(r){n={status:500}}this
.onUploadResponse(e,n)},onUploadResponse:function(e,t){parseInt(t.status,10)===201?
this.onUploadSuccess(e,t):this.onUploadError(e,t.validation_errors)},onUploadSuccess
:function(e,t){this.mix.image.set(t.image),this.$("#cover_art-spinner span, #upload_from_file"
).hide(),this.$("#cover_art_upload_progress").remove(),this.$("#mix_new_cover").val
(""),this.$("#cover_art_crop_link").show(),this.hideInputs(),this.mix.save()},onUploadError
:function(t,n){n?e.show_flash_error(n):e.show_flash_error("Something went wrong while uploading the image."
),this.resetProgessBar()}});return a}),define("views/mix_editable_field_view",["views/trax_view"
],function(e){var t=e.extend({placeholder_values:{name:"Mix title",description:"Describe your mix"
},initialize:function(e){this.mix=e.mix,this.fieldName=e.fieldName,this.nextEditableView=
e.nextEditableView,this.mix=e.mix,this.$el=$(this.el),_.bindAll(this,"updateField"
,"updateValidation","onBlur","onKeydown"),this.$el.blur(this.onBlur),this.$el.keydown
(this.onKeydown),this.mix.bind("change:"+this.fieldName,this.updateField),this.mix
.bind("change:validation_status",this.updateValidation)},updateField:function(){this
.$el.val(this.mix.get(this.fieldName))},updateValidation:function(){this.mix.validationErrorsForField
(this.fieldName).length>0?this.$el.addClass("invalid"):this.$el.removeClass("invalid"
)},onBlur:function(){var e={};e[this.fieldName]=this.$el.val();var t=this.mix.saveIfChanged
(e,{success:_.bind(function(){this.$el.removeClass("saving")},this)});t!==!1&&this
.$el.addClass("saving")},updateTextareaHeight:function(){return!0},onKeydown:function(
e){if(this.$el.is(":focus")){this.updateTextareaHeight();if(e.which==27)return this
.$el.val(this.mix.get(this.fieldName)),this.el.blur(),!1;if(e.which==13||e.which==10
)if(this.fieldName!="description")return this.el.blur(),!1;if(e.which==9){this.el
.blur();if(this.nextEditableView)return this.nextEditableView.$el.focus(),!1}}}})
;return t}),define("models/modules/html5_upload",[],function(){var e=Backbone.Model
.extend({justDragged:!1,dragging:!1,leaveTimer:null,initialize:function(){_.bindAll
(this,"handleDragDrop","handleDragLeave","handleDragEnter","handleDragOver","setLeaveTimer"
),this.useHTML5()&&(document.documentElement.addEventListener("dragenter",this.handleDragEnter
,!1),document.documentElement.addEventListener("mouseout",this.handleDragLeave,!1
),document.documentElement.addEventListener("drop",this.handleDragDrop,!1),document
.getElementById("drop_box_overlay").addEventListener("dragover",this.handleDragOver
,!1),document.getElementById("drop_box_overlay").addEventListener("drop",this.handleDragDrop
,!1),document.getElementById("drop_box_text").addEventListener("dragover",this.handleDragOver
,!1),document.getElementById("drop_box_text").addEventListener("drop",this.handleDragDrop
,!1))},handleDragEnter:function(e){clearTimeout(this.leaveTimer),this.dragging===!1&&
(this.justDragged=!0,this.dragging=!0,$("#drop_box_overlay").fadeIn(125),$("#drop_box_text"
).fadeIn(125),setTimeout(_.bind(function(){this.justDragged=!1},this),150),this.setLeaveTimer
())},handleDragLeave:function(e){this.dragging&&(this.dragging=!1,this.hideDropZone
())},handleDragDrop:function(e){return e.stopPropagation(),e.preventDefault(),this
.dragging=!1,clearTimeout(this.leaveTimer),this.justDragged===!0?setTimeout(_.bind
(function(){this.hideDropZone()},this),150):this.hideDropZone(),(!e.dataTransfer||!
e.dataTransfer.files||!e.dataTransfer.files.length>0)&&console.log("Error: Not a supported file."
),this.trigger("fileDrop",e.dataTransfer.files),!1},hideDropZone:function(){$("#drop_box_overlay"
).fadeOut(125),$("#drop_box_text").fadeOut(125)},handleDragOver:function(e){e.stopPropagation
(),e.preventDefault(),this.setLeaveTimer()},setLeaveTimer:function(){clearTimeout
(this.leaveTimer),this.leaveTimer=setTimeout(_.bind(function(){this.handleDragLeave
()},this),300)},create:function(e,t,n,r,i){var s=new FormData;s.append(n,e);var o=
$.ajaxSettings.xhr();return o.upload&&o.upload.addEventListener("progress",function(
e){r(e)}),{url:t,data:s,processData:!1,contentType:!1,type:"POST",xhr:function(){
return o},complete:function(e){i(e)}}},useHTML5:function(){return!!(window.File&&
window.FileList&&window.Blob&&window.FormData)}});return e}),define("hgn!templates/mixes/_edit"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="container editmode" style="display: none;" id="mix_metadata_edit">'
),r.b("\n"+n),r.b('  <div class="row">'),r.b("\n"+n),r.b("\n"+n),r.b('    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-5 clearfix" id="mix_edit_cover">'
),r.b("\n"+n),r.b('      <div class="step clearfix">'),r.b("\n"+n),r.b('        <div id="upload_cover_art"></div>'
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("\n"+
n),r.b('    <div id="mix_edit_details" class="col-md-8 col-sm-7">'),r.b("\n"+n),r
.b('        <form action="/mixes/'),r.b(r.v(r.f("id",e,t,0))),r.b('" method="post">'
),r.b("\n"+n),r.b('          <div class="step">'),r.b("\n"+n),r.b('            <input type="text" id="mix_edit_name" name="mix[name]" placeholder="Title" value="'
),r.b(r.v(r.f("name",e,t,0))),r.b('" class="mixedit roundText" />'),r.b("\n"+n),r
.b("          </div>"),r.b("\n"+n),r.b("\n"+n),r.b('          <div class="step">'
),r.b("\n"+n),r.b('            <textarea id="mix_edit_description" name="mix[description]" placeholder="Describe your playlist" class="mixedit roundText">'
),r.b(r.t(r.f("description",e,t,0))),r.b("</textarea>"),r.b("\n"+n),r.b("          </div>"
),r.b("\n"+n),r.b("\n"+n),r.b('          <div class="step tag_step">'),r.b("\n"+n
),r.b('            <div class="tags_editor">'),r.b("\n"+n),r.b('              <input id="mix_edit_tag_list" name="tag_list" class="mediumText roundText"  value="'
),r.b(r.v(r.f("tag_list_cache",e,t,0))),r.b('" autocomplete="off" size="30" placeholder="Type to search tags to add to your mix" />'
),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b("          </div>"),r.b("\n"+
n),r.b("        </form>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("\n"+n),r
.b("  </div><!--.row -->"),r.b("\n"+n),r.b("</div>"),r.fl()},"",e,{});return n.template=
t,n}),define("hgn!templates/mixes/tags",["hogan"],function(e){function n(){return t
.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r
.b(n=n||""),r.b('<div class="tags_display">'),r.b("\n"+n),r.s(r.f("tags",e,t,1),e
,t,0,38,146,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('    <a class="tag" title="')
,r.b(r.t(r.f("this",e,t,0))),r.b('" href="/explore/'),r.b(r.t(r.f("this",e,t,0)))
,r.b('">'),r.b("\n"+n),r.b("      <span>"),r.b(r.t(r.f("this",e,t,0))),r.b("</span>"
),r.b("\n"+n),r.b("    </a>"),r.b("\n")}),e.pop()),r.b("</div>"),r.b("\n"),r.fl()
},"",e,{});return n.template=t,n}),define("views/mix_tags_view",["views/trax_view"
,"hgn!templates/mixes/tags"],function(e,t){var n=e.extend({id:"mix_tags",className
:"tags clear",initialize:function(e){this.template=t,this.mix=e.mix,_.bindAll(this
,"onTagListCacheChange"),this.mix.bind("change:tag_list_cache",this.onTagListCacheChange
)},render:function(){return $(this.el).html(this.template({tags:this.mix.tagList(
)})),this},events:{},onTagListCacheChange:function(){this.render()}});return n}),
define("hgn!templates/shared/autocomplete",["hogan"],function(e){function n(){return t
.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r
.b(n=n||""),r.s(r.f("results",e,t,1),e,t,0,12,354,"{{ }}")&&(r.rs(e,t,function(e,
t,r){r.b('  <li class="result '),r.b(r.v(r.f("type",e,t,0))),r.b('" data-href="/explore/'
),r.s(r.f("to_url_param",e,t,1),e,t,0,80,84,"{{ }}")&&(r.rs(e,t,function(e,t,n){n
.b("term")}),e.pop()),r.b('" data-tag="'),r.b(r.v(r.f("term",e,t,0))),r.b('">'),r
.b("\n"+n),r.b("    "),r.s(r.f("selected_tags",e,t,1),e,t,0,146,201,"{{ }}")&&(r.
rs(e,t,function(e,t,n){n.b('<span class="tag">'),n.b(n.v(n.d(".",e,t,0))),n.b("</span>&nbsp;&nbsp;+&nbsp;&nbsp;"
)}),e.pop()),r.b(" "),r.b("\n"+n),r.b('    <span class="tag">'),r.b(r.v(r.f("term"
,e,t,0))),r.b("</span>"),r.b("\n"+n),r.b("    "),r.s(r.f("count",e,t,1),e,t,0,273
,335,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<span class="count">'),n.b(n.v(n.d("count.to_human_number"
,e,t,0))),n.b(" playlists</span>")}),e.pop()),r.b("\n"+n),r.b("  </li>"),r.b("\n"
)}),e.pop()),r.b("\n"+n),r.b("\n"+n),r.s(r.d("mtags.length.nonzero",e,t,1),e,t,0,394
,431,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('  <li class="header skip">Tags</li>'
),n.b("\n")}),e.pop()),r.s(r.f("mtags",e,t,1),e,t,0,467,640,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.b('  <li class="result mtag" data-href="'),r.b(r.v(r.f("path",e,t,0))),r
.b('">'),r.b("\n"+n),r.b('    <span class="tag">'),r.b(r.v(r.d("data.tag1",e,t,0)
)),r.b("</span>"),r.b("\n"+n),r.b("    "),r.s(r.d("data.tag2",e,t,1),e,t,0,577,617
,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('+ <span class="tag">'),n.b(n.v(n.d("data.tag2"
,e,t,0))),n.b("</span>")}),e.pop()),r.b("\n"+n),r.b("  </li>"),r.b("\n")}),e.pop(
)),r.b("\n"+n),r.s(r.d("tags.length.nonzero",e,t,1),e,t,0,676,713,"{{ }}")&&(r.rs
(e,t,function(e,t,n){n.b('  <li class="header skip">Tags</li>'),n.b("\n")}),e.pop
()),r.s(r.f("tags",e,t,1),e,t,0,747,949,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('  <li class="result mtag" data-href="'
),r.b(r.v(r.f("path",e,t,0))),r.b('" data-tag="'),r.b(r.v(r.f("name",e,t,0))),r.b
('">'),r.b("\n"+n),r.b('    <span class="tag">'),r.b(r.v(r.f("name",e,t,0))),r.b("</span>"
),r.b("\n"+n),r.b("    "),r.s(r.f("count",e,t,1),e,t,0,868,930,"{{ }}")&&(r.rs(e,
t,function(e,t,n){n.b('<span class="count">'),n.b(n.v(n.d("count.to_human_number"
,e,t,0))),n.b(" playlists</span>")}),e.pop()),r.b("\n"+n),r.b("  </li>"),r.b("\n"
)}),e.pop()),r.b("\n"+n),r.s(r.d("artists.length.nonzero",e,t,1),e,t,0,987,1027,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b('  <li class="header skip">Artists</li>'),n.b("\n"
)}),e.pop()),r.s(r.f("artists",e,t,1),e,t,0,1067,1459,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.b('  <li class="result artist" data-href="'),r.b(r.v(r.f("path",e,t,0)))
,r.b('" data-name="'),r.b(r.v(r.f("name",e,t,0))),r.b('" data-id="'),r.b(r.v(r.f("id"
,e,t,0))),r.b('">'),r.b("\n"+n),r.b('  <div class="thumb_container">'),r.b("\n"+n
),r.b("    <img"),r.b("\n"+n),r.s(r.d("data.artist_image_url",e,t,1),e,t,0,1227,1268
,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('    src="'),n.b(n.v(n.d("data.artist_image_url"
,e,t,0))),n.b('"'),n.b("\n")}),e.pop()),r.s(r.d("data.artist_image_url",e,t,1),e,
t,1,0,0,"")||(r.b('    src="'),r.b(r.v(r.d("data.original_imgix_url",e,t,0))),r.b
('"'),r.b("\n")),r.b('    class="thumb">'),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n
),r.b("  <strong>"),r.b(r.v(r.f("name",e,t,0))),r.b("</strong>"),r.b("\n"+n),r.b("  </li>"
),r.b("\n")}),e.pop()),r.b("\n"+n),r.b("\n"+n),r.s(r.d("users.length.nonzero",e,t
,1),e,t,0,1499,1537,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('  <li class="header skip">Users</li>'
),n.b("\n")}),e.pop()),r.s(r.f("users",e,t,1),e,t,0,1573,1866,"{{ }}")&&(r.rs(e,t
,function(e,t,r){r.b('  <li class="result user" data-href="'),r.b(r.v(r.f("path",
e,t,0))),r.b('" data-id="'),r.b(r.v(r.f("id",e,t,0))),r.b('" data-name="'),r.b(r.
v(r.f("name",e,t,0))),r.b('" data-email="'),r.b(r.v(r.d("data.email",e,t,0))),r.b
('">'),r.b("\n"+n),r.b('    <span class="user">'),r.b("\n"+n),r.b('      <div class="thumb_container">'
),r.b("\n"+n),r.b('        <img src="'),r.b(r.v(r.d("data.image_url",e,t,0))),r.b
('" class="thumb">'),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("      <strong>"
),r.b(r.v(r.f("name",e,t,0))),r.b("</strong>"),r.b("\n"+n),r.b("    </span>"),r.b
("\n"+n),r.b("  </li>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.d("mixes.length.nonzero"
,e,t,1),e,t,0,1903,1945,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('  <li class="header skip">Playlists</li>'
),n.b("\n")}),e.pop()),r.s(r.f("mixes",e,t,1),e,t,0,1981,2360,"{{ }}")&&(r.rs(e,t
,function(e,t,r){r.b('  <li class="result mix" data-href="'),r.b(r.v(r.f("web_path"
,e,t,0))),r.b('">'),r.b("\n"+n),r.b('    <div class="thumb_container">'),r.b("\n"+
n),r.s(r.d("data.image_url",e,t,1),e,t,0,2092,2152,"{{ }}")&&(r.rs(e,t,function(e
,t,n){n.b('        <img src="'),n.b(n.v(n.d("data.image_url",e,t,0))),n.b('" class="thumb">'
),n.b("\n")}),e.pop()),r.s(r.d("cover_urls.sq56",e,t,1),e,t,0,2198,2259,"{{ }}")&&
(r.rs(e,t,function(e,t,n){n.b('        <img src="'),n.b(n.v(n.d("cover_urls.sq56"
,e,t,0))),n.b('" class="thumb">'),n.b("\n")}),e.pop()),r.b("    </div>"),r.b("\n"+
n),r.b("    <strong>"),r.b(r.v(r.f("name",e,t,0))),r.b("</strong> <br />"),r.b("\n"+
n),r.b("    "),r.b(r.v(r.d("data.user_login",e,t,0))),r.b("\n"+n),r.b("  </li>"),
r.b("\n")}),e.pop()),r.b("\n"+n),r.b("\n"+n),r.s(r.d("collections.length.nonzero"
,e,t,1),e,t,0,2404,2448,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('  <li class="header skip">Collections</li>'
),n.b("\n")}),e.pop()),r.s(r.f("collections",e,t,1),e,t,0,2496,2725,"{{ }}")&&(r.
rs(e,t,function(e,t,r){r.b('  <li class="result collection" data-href="'),r.b(r.v
(r.f("path",e,t,0))),r.b('">'),r.b("\n"+n),r.b('    <div class="thumb_container">'
),r.b("\n"+n),r.b('      <img src="'),r.b(r.v(r.d("data.image_url",e,t,0))),r.b('" class="thumb">'
),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("    <strong>"),r.b(r.v(r.f("name"
,e,t,0))),r.b("</strong> by <strong>"),r.b(r.v(r.d("data.user_login",e,t,0))),r.b
("</strong>"),r.b("\n"+n),r.b("  </li>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.b("\n"+
n),r.s(r.f("colleges",e,t,1),e,t,0,2757,3e3,"{{ }}")&&(r.rs(e,t,function(e,t,r){r
.b('  <li class="result college" data-id="'),r.b(r.v(r.f("id",e,t,0))),r.b('" data-name="'
),r.b(r.v(r.d("data.institution_name",e,t,0))),r.b('">'),r.b("\n"+n),r.b('    <strong><span class="college_name"> '
),r.b(r.v(r.d("data.institution_name",e,t,0))),r.b(" </span></strong>"),r.b("\n"+
n),r.b('    <span class="college_location gray"> '),r.b(r.v(r.d("data.location",e
,t,0))),r.b("</span>"),r.b("\n"+n),r.b("  </li>"),r.b("\n")}),e.pop()),r.b("\n"+n
),r.b("\n"+n),r.b("\n"+n),r.s(r.f("show_view_all",e,t,1),e,t,0,3035,3201,"{{ }}")&&
(r.rs(e,t,function(e,t,r){r.b('<li class="result view_all">'),r.b("\n"+n),r.b('  <a href="/search/'
),r.b(r.v(r.f("encoded_query",e,t,0))),r.b('/results">'),r.b("\n"+n),r.b('    <span class="i-search"></span>View all results for "<em>'
),r.b(r.v(r.f("query",e,t,0))),r.b('</em>"'),r.b("\n"+n),r.b("  </a>"),r.b("\n"+n
),r.b("</li>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.b('<li class="skip algolia_placeholder" style="text-align: right; padding: 15px 5px;">'
),r.b("\n"+n),r.b('  <a href="http://algolia.com/" target="_blank" style="color: #666;">Powered by <img title="Algolia" src="/assets/technology/algolia_logotype.png" height="20" style="display: inline-block; margin-bottom: -5px;"/></a>'
),r.b("\n"+n),r.b("</li>"),r.fl()},"",e,{});return n.template=t,n}),define("views/autocomplete_view"
,["views/trax_view","hgn!templates/shared/autocomplete","lib/jsonh.jquery","lib/trax_utils"
],function(e,t,n,r){var i=e.extend({initialize:function(e){_.bindAll(this,"render"
,"search","onBlur"),this.placeholder=e.placeholder,this.emptyMessage=e.emptyMessage
,this.queryOptions=e.queryOptions,this.interval=e.interval||250,this.endpoint=e.endpoint||"/algolia/search.jsonh"
,this.showViewAll=!1,this.autoSelect=_.isUndefined(e.autoSelect)?!0:e.autoSelect,
this.mix_id=e.mix_id,this.dataMapper=e.dataMapper,this.minQueryLength=e.minQueryLength||1
,this.$input=e.$input||this.$('input[type="text"]:first'),this.localSearch=e.localSearch
,this.$input.length==0&&(this.$input=this.$("textarea:first")),this.$results=this
.$(".autocomplete"),this.$results.length==0&&(this.$results=$('<div class="autocomplete"></div>'
),this.$el.append(this.$results)),this.$results.hide(),this.symbol=e.symbol,this.
query="",this.searchLater=_.debounce(this.search,this.interval),this.template=t,this
.onEnterCallback=e.onEnter,this.onSelectCallback=e.onSelect,this.$input.is(":focus"
)&&this.onFocus()},events:{"click #search_button":"onSearchClick","click .result:not(.view_all)"
:"onClick","click .view_all":"onViewAll","mouseenter .result":"onHover",'focus input[type="text"]'
:"onFocus",'blur  input[type="text"]':"onBlur",'keyup input[type="text"]':"onKeyUp"
,'keydown input[type="text"]':"onKeyDown","focus textarea":"onFocus","blur textarea"
:"onBlur","keyup textarea":"onKeyUp","keydown textarea":"onKeyDown","submit form"
:"onEnter"},all_categories:["mixes","users","tags","mtags","artists","colleges","collections"
],onSearchClick:function(e){this.$("#search_button").length>0&&($("#thin_header")
.addClass("searching"),this.$("input:first").focus())},search:function(e){var t=e||
this.$input.val();this.query=t;if(t&&t.length>=this.minQueryLength){this.symbol&&
(t=t.replace(/^@/,"")),this.cancel(!1),this.$el.addClass("loading");if(this.localSearch
)return this.localSearch.call(this,t);this.request=n.now(this.endpoint,_.extend({
q:t,types:this.categories,mix_id:this.mix_id},this.queryOptions||{}),_.bind(function(
e){typeof this.dataMapper=="function"&&(e=this.dataMapper(e)),this.render(e)},this
))}else this.cancel(!0)},cancel:function(e){this.request&&this.request.abort(),e&&
(this.$el.removeClass("loading"),this.render)},clear:function(){this.$results.empty
().hide()},render:function(e){e?(e.results&&e.results.length>0||e.mixes||e.users||
e.tags?(e.show_view_all=this.showViewAll,e.query=this.query,e.selected_tags=this.
filter,e.encoded_query=encodeURIComponent(this.query),this.$results.html(this.template
(e)).css("display","")):this.emptyMessage?this.$results.html('<div class="placeholder">'+
this.emptyMessage+"</div>").css("display",""):this.$results.html('<div class="placeholder">Search <strong>'+
this.query+"</strong> by keyword &rarr;</div>").css("display",""),this.autoSelect==1?
this.navigate(!0):this.autoSelect=="exact_match_only"&&this.$('.result[data-tag="'+
this.query+'"]:first').addClass("selected")):this.clear(),this.$el.removeClass("loading"
),this.$input.is(":focus")&&!this.$tokenfield&&this.$el.addClass("active")},onHover
:function(e){$(e.currentTarget).addClass("selected").siblings().removeClass("selected"
)},onFocus:function(e){this.$tokenfield||this.$el.addClass("active"),this.showPlaceholder
()},onBlur:function(e){(!this.$tokenfield||!this.$tokenfield.hasClass("focus"))&&
_.delay(_.bind(function(){this.$el.removeClass("active")},this),200),this.$("#search_button"
).length>0&&$("#thin_header").removeClass("searching")},onClick:function(e){this.
onSelect($(e.currentTarget))},onViewAll:function(e){return this.$input.val(""),this
.onSearchEnter(this.query)},onEnter:function(e){return this.currentSelection().length==1?
this.currentSelection().hasClass("view_all")?this.onSearchEnter(this.$input.val()
):this.onSelect(this.currentSelection()):typeof this.onEnterCallback=="function"?
this.onEnterCallback.call(null,this.$input.val()):this.onSearchEnter(this.$input.
val()),this.onBlur(),!1},onSearchEnter:function(e){if(e=="")return;url="/explore/"+
r.toUrlParam(e),App.router.navigate(url,{trigger:!0}),this.$input.val(""),this.$el
.removeClass("active")},onSelect:function(e){return typeof this.onSelectCallback=="function"?
this.onSelectCallback.call(null,e):this.onSearchSelect(e),!1},onSearchSelect:function(
e){App.router.navigate(e.data("href"),{trigger:!0}),this.$input.val(""),this.$el.
removeClass("active")},currentSelection:function(){return this.$(".selected").first
()},onKeyUp:function(e){switch(e.which){case 27:this.$input.blur();break;case 38:
case 40:case 13:return e.preventDefault,!1;default:if(this.symbol){var t=e.target
.value.substring(0,this.caretPosition()),n=t.match(/@\S*$/i);n&&n[0]?this.search(
n[0]):this.render()}else this.searchLater(),this.showPlaceholder()}return!1},showPlaceholder
:function(){this.$input.val()==""&&this.render()},setFilter:function(e){e.length>0?
this.$input.attr("placeholder",""):this.$input.attr("placeholder",this.placeholder
),this.filter=e,this.render()},onKeyDown:function(e){switch(e.which){case 38:return this
.navigate(!1),!1;case 40:return this.navigate(!0),!1;case 13:return this.onEnter(
),e.preventDefault,!1;default:return this.currentSelection().removeClass("selected"
),!0}},navigate:function(e){var t=this.currentSelection();t.length==1&&(t.removeClass
("selected"),e?t.nextAll("li.result:first").addClass("selected"):t.prevAll("li.result:first"
).addClass("selected"));if(t.length==0||this.currentSelection().length==0)var n=this
.$("li.result:"+(e?"first":"last")).addClass("selected")},caretPosition:function(
e){var e=this.$input[0],t,n,r;return e.selectionStart?e.selectionStart:document.selection?
(e.focus(),t=document.selection.createRange(),t?(r=e.createTextRange(),n=r.duplicate
(),r.moveToBookmark(t.getBookmark()),n.setEndPoint("EndToStart",r),n.text.length)
:0):0},setCaretPosition:function(e,t){var n;if(e.setSelectionRange){e.focus(),e.setSelectionRange
(t,t);return}if(e.createTextRange)return n=e.createTextRange(),n.collapse(!0),n.moveEnd
("character",t),n.moveStart("character",t),n.select()}});return i}),function(e){e
(jQuery,window)}(function(e,t){"use strict";var n=function(n,r){var i=this;this.$element=
e(n),this.textDirection=this.$element.css("direction"),this.options=e.extend(!0,{
},e.fn.tokenfield.defaults,{tokens:this.$element.val()},this.$element.data(),r),this
._delimiters=typeof this.options.delimiter=="string"?[this.options.delimiter]:this
.options.delimiter,this._triggerKeys=e.map(this._delimiters,function(e){return e.
charCodeAt(0)}),this._firstDelimiter=this._delimiters[0];var s=e.inArray(" ",this
._delimiters),o=e.inArray("-",this._delimiters);s>=0&&(this._delimiters[s]="\\s")
,o>=0&&(delete this._delimiters[o],this._delimiters.unshift("-"));var u=["\\","$"
,"[","{","^",".","|","?","*","+","(",")"];e.each(this._delimiters,function(t,n){var r=
e.inArray(n,u);r>=0&&(i._delimiters[t]="\\"+n)});var a=t&&typeof t.getMatchedCSSRules=="function"?
t.getMatchedCSSRules(n):null,f=n.style.width,l,c=this.$element.width();a&&e.each(
a,function(e,t){t.style.width&&(l=t.style.width)});var h=e("body").css("direction"
)==="rtl"?"right":"left",p={position:this.$element.css("position")};p[h]=this.$element
.css(h),this.$element.data("original-styles",p).data("original-tabindex",this.$element
.prop("tabindex")).css("position","absolute").css(h,"-10000px").prop("tabindex",-1
),this.$wrapper=e('<div class="tokenfield form-control" />'),this.$element.hasClass
("input-lg")&&this.$wrapper.addClass("input-lg"),this.$element.hasClass("input-sm"
)&&this.$wrapper.addClass("input-sm"),this.textDirection==="rtl"&&this.$wrapper.addClass
("rtl");var d=this.$element.prop("id")||(new Date).getTime()+""+Math.floor((1+Math
.random())*100);this.$input=e('<input type="'+this.options.inputType+'" class="token-input" autocomplete="off" />'
).appendTo(this.$wrapper).prop("placeholder",this.$element.prop("placeholder")).prop
("id",d+"-tokenfield").prop("tabindex",this.$element.data("original-tabindex"));var v=
e('label[for="'+this.$element.prop("id")+'"]');v.length&&v.prop("for",this.$input
.prop("id")),this.$copyHelper=e('<input type="text" />').css("position","absolute"
).css(h,"-10000px").prop("tabindex",-1).prependTo(this.$wrapper),f?this.$wrapper.
css("width",f):l?this.$wrapper.css("width",l):this.$element.parents(".form-inline"
).length&&this.$wrapper.width(c),(this.$element.prop("disabled")||this.$element.parents
("fieldset[disabled]").length)&&this.disable(),this.$element.prop("readonly")&&this
.readonly(),this.$mirror=e('<span style="position:absolute; top:-999px; left:0; white-space:pre;"/>'
),this.$input.css("min-width",this.options.minWidth+"px"),e.each(["fontFamily","fontSize"
,"fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"
],function(e,t){i.$mirror[0].style[t]=i.$input.css(t)}),this.$mirror.appendTo("body"
),this.$wrapper.insertBefore(this.$element),this.$element.prependTo(this.$wrapper
),this.update(),this.setTokens(this.options.tokens,!1,!this.$element.val()&&this.
options.tokens),this.listen();if(!e.isEmptyObject(this.options.autocomplete)){var m=
this.textDirection==="rtl"?"right":"left",g=e.extend({minLength:this.options.showAutocompleteOnFocus?0
:null,position:{my:m+" top",at:m+" bottom",of:this.$wrapper}},this.options.autocomplete
);this.$input.autocomplete(g)}if(!e.isEmptyObject(this.options.typeahead)){var y=
this.options.typeahead,b={minLength:this.options.showAutocompleteOnFocus?0:null},
w=e.isArray(y)?y:[y,y];w[0]=e.extend({},b,w[0]),this.$input.typeahead.apply(this.
$input,w),this.$hint=this.$input.prev(".tt-hint"),this.typeahead=!0}};n.prototype=
{constructor:n,createToken:function(t,n){var r=this;typeof t=="string"?t={value:t
,label:t}:t=e.extend({},t),typeof n=="undefined"&&(n=!0),t.value=e.trim(t.value.toString
()),t.label=t.label&&t.label.length?e.trim(t.label):t.value;if(!t.value.length||!
t.label.length||t.label.length<=this.options.minLength)return;if(this.options.limit&&
this.getTokens().length>=this.options.limit)return;var i=e.Event("tokenfield:createtoken"
,{attrs:t});this.$element.trigger(i);if(!i.attrs||i.isDefaultPrevented())return;var s=
e('<div class="token" />').append('<span class="token-label" />').append('<a href="#" class="close" tabindex="-1">&times;</a>'
).data("attrs",t);this.$input.hasClass("tt-input")?this.$input.parent().before(s)
:this.$input.before(s),this.$input.css("width",this.options.minWidth+"px");var o=
s.find(".token-label"),u=s.find(".close");return this.maxTokenWidth||(this.maxTokenWidth=
this.$wrapper.width()-u.outerWidth()-parseInt(u.css("margin-left"),10)-parseInt(u
.css("margin-right"),10)-parseInt(s.css("border-left-width"),10)-parseInt(s.css("border-right-width"
),10)-parseInt(s.css("padding-left"),10)-parseInt(s.css("padding-right"),10),parseInt
(o.css("border-left-width"),10)-parseInt(o.css("border-right-width"),10)-parseInt
(o.css("padding-left"),10)-parseInt(o.css("padding-right"),10),parseInt(o.css("margin-left"
),10)-parseInt(o.css("margin-right"),10)),o.text(t.label).css("max-width",this.maxTokenWidth
),s.on("mousedown",function(e){if(r._disabled||r._readonly)return!1;r.preventDeactivation=!0
}).on("click",function(e){if(r._disabled||r._readonly)return!1;r.preventDeactivation=!1
;if(e.ctrlKey||e.metaKey)return e.preventDefault(),r.toggle(s);r.activate(s,e.shiftKey
,e.shiftKey)}).on("dblclick",function(e){if(r._disabled||r._readonly||!r.options.
allowEditing)return!1;r.edit(s)}),u.on("click",e.proxy(this.remove,this)),this.$element
.trigger(e.Event("tokenfield:createdtoken",{attrs:t,relatedTarget:s.get(0)})),n&&
this.$element.val(this.getTokensList()).trigger(e.Event("change",{initiator:"tokenfield"
})),this.update(),this.$element.get(0)},setTokens:function(t,n,r){if(!t)return;n||
this.$wrapper.find(".token").remove(),typeof r=="undefined"&&(r=!0),typeof t=="string"&&
(this._delimiters.length?t=t.split(new RegExp("["+this._delimiters.join("")+"]"))
:t=[t]);var i=this;return e.each(t,function(e,t){i.createToken(t,r)}),this.$element
.get(0)},getTokenData:function(t){var n=t.map(function(){var t=e(this);return t.data
("attrs")}).get();return n.length==1&&(n=n[0]),n},getTokens:function(t){var n=this
,r=[],i=t?".active":"";return this.$wrapper.find(".token"+i).each(function(){r.push
(n.getTokenData(e(this)))}),r},getTokensList:function(t,n,r){t=t||this._firstDelimiter
,n=typeof n!="undefined"&&n!==null?n:this.options.beautify;var i=t+(n&&t!==" "?" "
:"");return e.map(this.getTokens(r),function(e){return e.value}).join(i)},getInput
:function(){return this.$input.val()},listen:function(){var n=this;this.$element.
on("change",e.proxy(this.change,this)),this.$wrapper.on("mousedown",e.proxy(this.
focusInput,this)),this.$input.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy
(this.blur,this)).on("paste",e.proxy(this.paste,this)).on("keydown",e.proxy(this.
keydown,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this
.keyup,this)),this.$copyHelper.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy
(this.blur,this)).on("keydown",e.proxy(this.keydown,this)).on("keyup",e.proxy(this
.keyup,this)),this.$input.on("keypress",e.proxy(this.update,this)).on("keyup",e.proxy
(this.update,this)),this.$input.on("autocompletecreate",function(){var t=e(this).
data("ui-autocomplete").menu.element,r=n.$wrapper.outerWidth()-parseInt(t.css("border-left-width"
),10)-parseInt(t.css("border-right-width"),10);t.css("min-width",r+"px")}).on("autocompleteselect"
,function(e,t){return n.createToken(t.item)&&(n.$input.val(""),n.$input.data("edit"
)&&n.unedit(!0)),!1}).on("typeahead:selected typeahead:autocompleted",function(e,
t,r){n.createToken(t)&&(n.$input.typeahead("val",""),n.$input.data("edit")&&n.unedit
(!0))}),e(t).on("resize",e.proxy(this.update,this))},keydown:function(t){function r
(e){if(n.$input.is(document.activeElement)){if(n.$input.val().length>0)return;e+="All"
;var r=n.$input.hasClass("tt-input")?n.$input.parent()[e](".token:first"):n.$input
[e](".token:first");if(!r.length)return;n.preventInputFocus=!0,n.preventDeactivation=!0
,n.activate(r),t.preventDefault()}else n[e](t.shiftKey),t.preventDefault()}function i
(r){if(!t.shiftKey)return;if(n.$input.is(document.activeElement)){if(n.$input.val
().length>0)return;var i=n.$input.hasClass("tt-input")?n.$input.parent()[r+"All"]
(".token:first"):n.$input[r+"All"](".token:first");if(!i.length)return;n.activate
(i)}var s=r==="prev"?"next":"prev",o=r==="prev"?"first":"last";n.$firstActiveToken
[s+"All"](".token").each(function(){n.deactivate(e(this))}),n.activate(n.$wrapper
.find(".token:"+o),!0,!0),t.preventDefault()}if(!this.focused)return;var n=this;switch(
t.keyCode){case 8:if(!this.$input.is(document.activeElement))break;this.lastInputValue=
this.$input.val();break;case 37:r(this.textDirection==="rtl"?"next":"prev");break;
case 38:i("prev");break;case 39:r(this.textDirection==="rtl"?"prev":"next");break;
case 40:i("next");break;case 65:if(this.$input.val().length>0||!t.ctrlKey&&!t.metaKey
)break;this.activateAll(),t.preventDefault();break;case 9:case 13:if(this.$input.
data("ui-autocomplete")&&this.$input.data("ui-autocomplete").menu.element.find("li:has(a.ui-state-focus), li.ui-state-focus"
).length)break;if(this.$input.hasClass("tt-input")&&this.$wrapper.find(".tt-cursor"
).length)break;if(this.$input.hasClass("tt-input")&&this.$wrapper.find(".tt-hint"
).val()&&this.$wrapper.find(".tt-hint").val().length)break;if(this.options.autocomplete&&
this.$wrapper.find(".autocomplete").find(".result.selected"))break;if(this.$input
.is(document.activeElement)&&this.$input.val().length||this.$input.data("edit"))return this
.createTokensFromInput(t,this.$input.data("edit"));if(t.keyCode===13){if(!this.$copyHelper
.is(document.activeElement)||this.$wrapper.find(".token.active").length!==1)break;
if(!n.options.allowEditing)break;this.edit(this.$wrapper.find(".token.active"))}}
this.lastKeyDown=t.keyCode},keypress:function(t){if(e.inArray(t.which,this._triggerKeys
)!==-1&&this.$input.is(document.activeElement))return this.$input.val()&&this.createTokensFromInput
(t),!1},keyup:function(e){this.preventInputFocus=!1;if(!this.focused)return;switch(
e.keyCode){case 8:if(this.$input.is(document.activeElement)){if(this.$input.val()
.length||this.lastInputValue.length&&this.lastKeyDown===8)break;this.preventDeactivation=!0
;var t=this.$input.hasClass("tt-input")?this.$input.parent().prevAll(".token:first"
):this.$input.prevAll(".token:first");if(!t.length)break;this.activate(t)}else this
.remove(e);break;case 46:this.remove(e,"next")}this.lastKeyUp=e.keyCode},focus:function(
e){this.focused=!0,this.$wrapper.addClass("focus"),this.$input.is(document.activeElement
)&&(this.$wrapper.find(".active").removeClass("active"),this.$firstActiveToken=null
,this.options.showAutocompleteOnFocus&&this.search())},blur:function(e){this.focused=!1
,this.$wrapper.removeClass("focus"),!this.preventDeactivation&&!this.$element.is(
document.activeElement)&&(this.$wrapper.find(".active").removeClass("active"),this
.$firstActiveToken=null),!this.preventCreateTokens&&(this.$input.data("edit")&&!this
.$input.is(document.activeElement)||this.options.createTokensOnBlur)&&this.createTokensFromInput
(e),this.preventDeactivation=!1,this.preventCreateTokens=!1},paste:function(e){var t=
this;t.options.allowPasting&&setTimeout(function(){t.createTokensFromInput(e)},1)
},change:function(e){if(e.initiator==="tokenfield")return;this.setTokens(this.$element
.val())},createTokensFromInput:function(e,t){if(this.$input.val().length<this.options
.minLength)return;var n=this.getTokensList();return this.setTokens(this.$input.val
(),!0),n==this.getTokensList()&&this.$input.val().length?!1:(this.$input.hasClass
("tt-input")?this.$input.typeahead("val",""):this.$input.val(""),this.$input.data
("edit")&&this.unedit(t),!1)},next:function(e){if(e){var t=this.$wrapper.find(".active:first"
),n=t&&this.$firstActiveToken?t.index()<this.$firstActiveToken.index():!1;if(n)return this
.deactivate(t)}var r=this.$wrapper.find(".active:last"),i=r.nextAll(".token:first"
);if(!i.length){this.$input.focus();return}this.activate(i,e)},prev:function(e){if(
e){var t=this.$wrapper.find(".active:last"),n=t&&this.$firstActiveToken?t.index()>
this.$firstActiveToken.index():!1;if(n)return this.deactivate(t)}var r=this.$wrapper
.find(".active:first"),i=r.prevAll(".token:first");i.length||(i=this.$wrapper.find
(".token:first"));if(!i.length&&!e){this.$input.focus();return}this.activate(i,e)
},activate:function(t,n,r,i){if(!t)return;if(typeof i=="undefined")var i=!0;if(r)
var n=!0;this.$copyHelper.focus(),n||(this.$wrapper.find(".active").removeClass("active"
),i?this.$firstActiveToken=t:delete this.$firstActiveToken);if(r&&this.$firstActiveToken
){var s=this.$firstActiveToken.index()-2,o=t.index()-2,u=this;this.$wrapper.find(".token"
).slice(Math.min(s,o)+1,Math.max(s,o)).each(function(){u.activate(e(this),!0)})}t
.addClass("active"),this.$copyHelper.val(this.getTokensList(null,null,!0)).select
()},activateAll:function(){var t=this;this.$wrapper.find(".token").each(function(
n){t.activate(e(this),n!==0,!1,!1)})},deactivate:function(e){if(!e)return;e.removeClass
("active"),this.$copyHelper.val(this.getTokensList(null,null,!0)).select()},toggle
:function(e){if(!e)return;e.toggleClass("active"),this.$copyHelper.val(this.getTokensList
(null,null,!0)).select()},edit:function(t){if(!t)return;var n=t.data("attrs"),r={
attrs:n,relatedTarget:t.get(0)},i=e.Event("tokenfield:edittoken",r);this.$element
.trigger(i);if(i.isDefaultPrevented())return;t.find(".token-label").text(n.value)
;var s=t.outerWidth(),o=this.$input.hasClass("tt-input")?this.$input.parent():this
.$input;t.replaceWith(o),this.preventCreateTokens=!0,this.$input.val(n.value).select
().data("edit",!0).width(s),this.update(),this.$element.trigger(e.Event("tokenfield:editedtoken"
,r))},unedit:function(e){var t=this.$input.hasClass("tt-input")?this.$input.parent
():this.$input;t.appendTo(this.$wrapper),this.$input.data("edit",!1),this.$mirror
.text(""),this.update();if(e){var n=this;setTimeout(function(){n.$input.focus()},1
)}},remove:function(t,n){if(this.$input.is(document.activeElement)||this._disabled||
this._readonly)return;var r=t.type==="click"?e(t.target).closest(".token"):this.$wrapper
.find(".token.active");if(t.type!=="click"){if(!n)var n="prev";this[n]();if(n==="prev"
)var i=r.first().prevAll(".token:first").length===0}var s={attrs:this.getTokenData
(r),relatedTarget:r.get(0)},o=e.Event("tokenfield:removetoken",s);this.$element.trigger
(o);if(o.isDefaultPrevented())return;var u=e.Event("tokenfield:removedtoken",s),a=
e.Event("change",{initiator:"tokenfield"});r.remove(),this.$element.val(this.getTokensList
()).trigger(u).trigger(a),(!this.$wrapper.find(".token").length||t.type==="click"||
i)&&this.$input.focus(),this.$input.css("width",this.options.minWidth+"px"),this.
update(),t.preventDefault(),t.stopPropagation()},update:function(e){var t=this.$input
.val(),n=parseInt(this.$input.css("padding-left"),10),r=parseInt(this.$input.css("padding-right"
),10),i=n+r;if(this.$input.data("edit")){t||(t=this.$input.prop("placeholder"));if(
t===this.$mirror.text())return;this.$mirror.text(t);var s=this.$mirror.width()+10
;if(s>this.$wrapper.width())return this.$input.width(this.$wrapper.width());this.
$input.width(s),this.$hint&&this.$hint.width(s)}else{var o=this.textDirection==="rtl"?
this.$input.offset().left+this.$input.outerWidth()-this.$wrapper.offset().left-parseInt
(this.$wrapper.css("padding-left"),10)-i-1:this.$wrapper.offset().left+this.$wrapper
.width()+parseInt(this.$wrapper.css("padding-left"),10)-this.$input.offset().left-
i;isNaN(o)?this.$input.width("100%"):this.$input.width(o),this.$hint&&(isNaN(o)?this
.$hint.width("100%"):this.$hint.width(o))}},focusInput:function(t){if(e(t.target)
.closest(".token").length||e(t.target).closest(".token-input").length||e(t.target
).closest(".tt-dropdown-menu").length)return;var n=this;setTimeout(function(){n.$input
.focus()},0)},search:function(){this.$input.data("ui-autocomplete")&&this.$input.
autocomplete("search")},disable:function(){this.setProperty("disabled",!0)},enable
:function(){this.setProperty("disabled",!1)},readonly:function(){this.setProperty
("readonly",!0)},writeable:function(){this.setProperty("readonly",!1)},setProperty
:function(e,t){this["_"+e]=t,this.$input.prop(e,t),this.$element.prop(e,t),this.$wrapper
[t?"addClass":"removeClass"](e)},destroy:function(){this.$element.val(this.getTokensList
()),this.$element.css(this.$element.data("original-styles")),this.$element.prop("tabindex"
,this.$element.data("original-tabindex"));var t=e('label[for="'+this.$input.prop("id"
)+'"]');t.length&&t.prop("for",this.$element.prop("id")),this.$element.insertBefore
(this.$wrapper),this.$element.removeData("original-styles").removeData("original-tabindex"
).removeData("bs.tokenfield"),this.$wrapper.remove(),this.$mirror.remove();var n=
this.$element;return n}};var r=e.fn.tokenfield;return e.fn.tokenfield=function(t,
r){var i,s=[];Array.prototype.push.apply(s,arguments);var o=this.each(function(){
var o=e(this),u=o.data("bs.tokenfield"),a=typeof t=="object"&&t;typeof t=="string"&&
u&&u[t]?(s.shift(),i=u[t].apply(u,s)):!u&&typeof t!="string"&&!r&&(o.data("bs.tokenfield"
,u=new n(this,a)),o.trigger("tokenfield:initialize"))});return typeof i!="undefined"?
i:o},e.fn.tokenfield.defaults={minWidth:60,minLength:0,allowEditing:!0,allowPasting
:!0,limit:0,autocomplete:{},typeahead:{},showAutocompleteOnFocus:!1,createTokensOnBlur
:!1,delimiter:",",beautify:!0,inputType:"text"},e.fn.tokenfield.Constructor=n,e.fn
.tokenfield.noConflict=function(){return e.fn.tokenfield=r,this},n}),define("vendor/bootstrap-tokenfield"
,function(){}),define("views/mix_edit_view",["global_trax","lib/events","jquery_ui"
,"jquery_ui_interactions","views/trax_view","views/track_search_view","views/mix_validation_view"
,"views/selected_tracks_view","views/track_uploader_view","views/mix_cover_upload_view"
,"views/mix_publish_options_view","views/mix_editable_field_view","models/modules/html5_upload"
,"lib/jsonh.jquery","hgn!templates/mixes/_edit","views/mix_tags_view","views/autocomplete_view"
,"lib/client_storage","vendor/bootstrap-tokenfield"],function(e,t,n,r,i,s,o,u,a,f
,l,c,h,p,d,v,m,g,y){var b=i.extend({tagName:"div",id:"mix_edit",tagsEditor:null,TAG_LIST_MINIMUM
:2,events:{"click #unedit_button":"unEditMode"},initialize:function(e){this.mix=e
.mix,this.$el=$(this.el),this.childViews=[],_.bindAll(this,"saveTags","onTokensUpdated"
,"onTagListCacheChange","onAutocompleteSelect","onAutocompleteEnter","onPublish","onFirstPublish"
,"onMixImageChange","hideSoundcloudWarning","onReadOnlyChange"),this.mix.bind("change:tag_list_cache"
,this.onTagListCacheChange),this.mix.on("change:read_only",this.onReadOnlyChange)
,this.mix.bind("publish",this.onPublish),new v({el:"#mix_tags",mix:this.mix}),this
.render()},render:function(){this.$el.html(d(this.mix.toJSON())),$("#play_area").
append(this.el)},initializeViews:function(t){if(this.viewsInitialized)return t(),!1
;this.viewsInitialized=!0,$("a.edit").hide(),$("#edit-spinner, #edit-spinner span"
).show(),this.mix.withTracks(_.bind(function(){App.Views.trackSearchView=this.trackSearchView=new 
s({mix:this.mix}),this.trackSearchView.show(),e.html5Upload=new h,this.mixValidationView=new 
o({mix:this.mix,mixEditView:this}),this.childViews.push(this.mixValidationView),this
.mixValidationView.show(),e.selectedTracksView=(new u({mix:this.mix})).show(),this
.childViews.push(e.selectedTracksView),this.trackUploaderView=new a({mix:this.mix
}),this.childViews.push(this.trackUploaderView),this.trackUploaderView.show(),this
.mix.loadImage(),App.views.mixCoverUploadView=this.mixCoverUploadView=new f({mix:
this.mix}),this.mixCoverUploadView.render(),this.childViews.push(this.mixCoverUploadView
),this.$coverArtPreviewImg=this.$("#cover_art_preview_img"),this.mix.image.on("change:original_imgix_url change:crop_values"
,this.onMixImageChange),this.publishOptionsView=new l({mix:this.mix,withDelete:!0
,alwaysShow:!1}),this.childViews.push(this.publishOptionsView),this.publishOptionsView
.show(),e.mixDescriptionView=new c({mix:this.mix,el:this.$("#mix_edit_description"
),fieldName:"description"}),this.childViews.push(e.mixDescriptionView),e.mixTitleView=new 
c({mix:this.mix,el:this.$("#mix_edit_name"),fieldName:"name",nextEditableView:e.mixDescriptionView
}),this.childViews.push(e.mixTitleView),App.Views.mixView&&App.Views.mixView.adjustPlaylistHeight
(),this.showSoundcloudWarning(),$("#edit_button").show(),$("#edit-spinner, #edit-spinner span"
).hide(),this.initializeTagEditor(),t()},this))},enableBackButton:function(){try{typeof 
window.onpopstate=="object"&&(window.onpopstate=_.bind(function(e){e.state&&e.state
.PAGE&&(PAGE.editMode===!1&&e.state.PAGE.editMode===!0&&this.editMode(),PAGE.editMode===!0&&
e.state.PAGE.editMode===!1&&this.unEditMode())},this))}catch(e){}},onReadOnlyChange
:function(){this.cleanUpView=!0},unEditMode:function(){PAGE.editMode=!1,this.$(".editable"
).removeClass("editing"),this.$(".editable .edit").hide(),this.$(".editable .display, a.edit"
).show(),this.$(".edit_disable").removeClass(".edit_disabled"),$(".editmode, #edit-spinner span"
).hide(),$(".displaymode, a.edit").show(),$("#sidebar").height("auto"),$("#mix_validation_wrapper"
).slideUp(),App.views.mixView&&App.views.mixView.adjustPlaylistHeight(),!_.isUndefined
(e.previewPlayer)&&e.previewPlayer.isPlaying()&&e.previewPlayer.fadeOut(),this.trigger
("mixUnedit"),e.pushCurrentState(this.mix.get("web_path")),this.cleanUpView&&(App
.views.mixView.render(),this.close())},editMode:function(){PAGE.editMode=!0,!_.isUndefined
(e.mixPlayer)&&e.mixPlayer.isPlaying()&&e.mixPlayer.fadeOut(),this.initializeViews
(_.bind(function(){$("#edit_button").removeClass("loading"),this.$(".edit_disable"
).addClass(".edit_disabled"),this.$(".editable").addClass("editing"),$(".editmode"
).show(),$(".displaymode, #superheader, #page_description").hide(),$("#mix_validation_wrapper"
).slideDown(300,_.bind(function(){App.views.mixView&&App.views.mixView.adjustPlaylistHeight
()},this)),this.trigger("mixEdit")},this)),t.enterMixEditMode(),e.pushCurrentState
(this.mix.get("web_path")+"/edit")},initializeTagEditor:function(){this.$tagsInput=
this.$("#mix_edit_tag_list"),this.$tagsInput.on("tokenfield:removedtoken",this.onTokensUpdated
),this.$tagsInput.on("tokenfield:createdtoken",this.onTokensUpdated),this.$tagsInput
.on("tokenfield:initialize",_.bind(function(){this.autocompleteView=new m({el:this
.$(".tags_editor"),$input:this.$(".tags_editor .token-input"),categories:["mtags"
],onSelect:this.onAutocompleteSelect,onEnter:this.onAutocompleteEnter,autoSelect:!1
})},this)),this.tokenField=this.$tagsInput.tokenfield({tokens:this.mix.get("tags"
),limit:5,createTokensOnBlur:!1,autocomplete:!0})},onTokensUpdated:function(){this
.saveTags()},getTags:function(){return this.$tagsInput.tokenfield("getTokensList"
)},onAutocompleteSelect:function(e){return console.log("onAutocompleteSelect"),this
.$tagsInput.tokenfield("createToken",e.data("tag").toString()),this.autocompleteView
.clear(),this.$("#mix_edit_tag_list-tokenfield").val(""),!1},onAutocompleteEnter:
function(e){return this.autocompleteView.clear(),this.$tagsInput.tokenfield("createToken"
,e),this.$(".token-input").val(""),!1},saveTags:function(){var e=_.bind(function(
){this.mix.setTags(this.getTags())},this);clearTimeout(this.saveTagsTimer),this.saveTagsTimer=
_.delay(e,750),this.updateTagsValidation()},onTagListCacheChange:function(){this.
mix.tagsTouched||this.$tagsInput.tokenfield("setTokens",this.mix.tagList())},updateTagsValidation
:function(){this.$tagsInput.tokenfield("getTokens")<this.TAG_LIST_MINIMUM&&this.mix
.tracks.length>8?this.$(".tags_edit").addClass("invalid"):this.$(".tags_edit").removeClass
("invalid")},onMixImageChange:function(){this.$coverArtPreviewImg.attr("src",this
.mix.image.get("cropped_imgix_url")),$("#upload_cover_art").removeClass("mix_art_blank"
)},onPublish:function(e){e&&this.onFirstPublish()},onFirstPublish:function(){this
.unEditMode(),t.publishMix(this.mix),p.now_with_context(this.mix.url()+"/share",this
,function(e){e.success&&this.mix.get("published")&&$.facebox(e.html)})},showSoundcloudWarning
:function(){var e=_.map(App.views.mixView.mix.get("tracks"),function(e){return e.
user_id});_.include(e,-2)&&!g.get("hide_soundcloud_warning_mix_"+this.mix.id)&&($
("#track_selection").before('<div class="soundcloud_warning"><span class="i-warning"></span>Some tracks you selected may have changed due to alterations in our Soundcloud integration. Please double check your tracklist and make any necessary changes.<a href="#" class="close"><span class="i-x"></span></a></div>'
),$(".soundcloud_warning .close").click(this.hideSoundcloudWarning))},hideSoundcloudWarning
:function(){return $(".soundcloud_warning").remove(),g.set("hide_soundcloud_warning_mix_"+
this.mix.id,!0),!1}});return b});