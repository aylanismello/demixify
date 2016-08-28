define("lib/client_storage",[],function(){return TraxClientStorage}),define("global_trax"
,["lib/client_storage"],function(e){function r(e){return _.isObject(e)?_.map(e,function(
e,t){return _.map(e,function(e){return t.charAt(0).toUpperCase()+t.slice(1)+" "+e+"."
})}):e}if(typeof App.Trax!="undefined")return App.Trax;var t=App.Trax={};t.View=Backbone
.View.extend({});var n;t.hide_flash_timer=function(e){e=e||1e4,n=setTimeout(function(
){$(".flash_container").slideUp()},e)},t.hide_flash_error=function(){$(".flash_container"
).slideUp()},t.hide_flash_notices=function(){$(".flash_container ul.notices").size
()>0&&$(".flash_container ul.errors").size()===0&&t.hide_flash_timer()},t.show_flash_error=
function(e,n){t.update_flash({errors:e}),n&&t.hide_flash_timer()},t.show_flash_error_with_timeout=
function(e,n){t.update_flash({errors:e},n)},t.show_private_redirection_message=function(
){t.show_flash_error("Oops! It looks like the mix you are trying to listen to is not currently available. In the meantime, check out these playlists."
)},t.update_flash=function(e,i,s){str="",e.errors&&(str+='<ul class="errors"><li>'+
r(e.errors)+"</li></ul>"),e.notices&&(str+='<ul class="notices"><li>'+r(e.notices
)+"</li></ul>");if(str.length>0){clearTimeout(n),str='<div class="flash_container" onclick="$(\'.flash_container\').slideUp(); return false;"><div class="container clearfix"><div class="row"><div class="col-md-12">'+
str+"</div></div></div>";var o;_.isUndefined(s)&&($("#facebox .content").is(":visible"
)?s=$("#facebox .content"):s=$("#thin_header")),o=$(".flash_container",s),o.length>0?
o.replaceWith(str):s.prepend(str),t.hide_flash_timer(i)}},t.show_overlay=function(
){return $("#body_overlay").show().addClass("visible"),!1},t.hide_overlay=function(
){return $("#body_overlay").removeClass("visible"),$("#footer").slideUp(),_.delay
(function(){$("#body_overlay").hide()},200),!1},$("#body_overlay").click(t.hide_overlay
),t.overlay_animation=function(e){return!1},t.showAds=function(){return t.regionallyBlocked
()?!1:e&&e.get("currentUserId")&&e.get("Users-"+t.current)?!e.get("Users-"+t.current
).subscribed:!t.currentUser||!t.currentUser.get("subscribed")},t.windowIsPlaying=
function(){t.windowId||(t.windowId=Math.round(Math.random()*1e9));if(t.checkPlayingWindowTimer
)return;e.set("playingWindowId",t.windowId),t.checkPlayingWindowTimer=setInterval
(t.checkPlayingWindow,500)},t.checkPlayingWindow=function(){_.isNull(e.get("playingWindowId"
))?e.set("playingWindowId",t.windowId):e.get("playingWindowId")!==t.windowId&&(t.
clearCheckPlayingWindowTimer(),t.pausePlayback())},t.clearCheckPlayingWindowTimer=
function(){t.checkPlayingWindowTimer&&(clearInterval(t.checkPlayingWindowTimer),t
.checkPlayingWindowTimer=null)},t.pausePlayback=function(){_.isUndefined(t.mixPlayer
)||t.mixPlayer.pause(),_.isUndefined(t.previewPlayer)||t.previewPlayer.pause()},t
.isOwner=function(e){if(e){var n=e.get("user")?e.get("user").id:e.get("user_id");
return!!t.currentUser&&!!n&&n==t.currentUser.id}},t.refreshSidebarAd=function(){App
.views.adsView&&App.views.adsView.refreshSidebarAd(!1)},t.sslHostUrl=function(){return App
.env=="production"?"https://8tracks.com":"http://"+window.location.host},t.initial_focus=
function(e){$(".initial_focus",e).each(function(){this.focus(),input_in_focus=this
,$(this).parent().addClass("focus")})},t.show_application_spinner=function(){$("#header-spinner span"
).show()},t.pushCurrentState=function(e,t){App.router&&App.router.navigate(e,{trigger
:!1,replace:t});return},t.switchToHtml5Player=function(){return e.set("html5",1),
window.location.reload(),!1},t.switchToDefaultPlayer=function(){return e.destroy("html5"
),window.location.reload(),!1},t.quick_play_click=function(e){var t=$(e.currentTarget
),n=$.Deferred(),r=$.Deferred(),s;e.currentTarget.hash.length>0?s=ParsedLocation.
parseParamsStr(e.currentTarget.hash.substring(1)).smart_id:s=null,t.addClass("loading"
),t.jsonh_now(function(e){n.resolve(e.mix,s)}),App.Views.MixPlayerView?r.resolve(
t):require(["pages/player"],function(){r.resolve(t)}),$.when(n,r).done(i)},t.play_from_embed=
function(e,t){App.views.mixPlayerView?s(e,null,t):require(["pages/player"],function(
){s(e,null,t)})},t.play_page=function(e){return App.views.mixView?App.views.mixView
.play():App.views.browseView?App.views.browseView.play():App.views.userProfileView&&
App.views.userProfileView.play(),$("#page_description").slideUp(),!1};var i=function(
e,t){t.removeClass("loading");var n=e[0],r=e[1];s(n,r)},s=function(e,t,n){var r=App
.Collections.Mixes.load(e);App.views.mixPlayerView?App.views.mixPlayerView.loadMix
(r,t):(App.views.mixPlayerView=new App.Views.MixPlayerView({mix:r,smart_id:t}),App
.views.mixPlayerView.show()),App.views.mixPlayerView.playMix("quick"),n&&n.ui.startElement
.show()};return t.setGradient=function(e,t,n,r){try{var n=2,i=!1,s=!1;e.style.opacity>0&&
(i=e,e=$('<canvas class="background-blur" width="100%" height="100%" style="width: 100%; height: 100%; opacity: 0.6;"></canvas>'
)[0],$(i).before(e));if(!t||t.length==0){var o=$(e).data("palette");o&&o.length>0&&
(t=o.split(","))}var u=e.getContext("2d"),a=u.createLinearGradient(0,40,100,20);if(!
t||t.length==0)return;_.each(t,function(e,t){if(!e||!e.match||!e.match(/#[a-f0-9]{6}/i
))return;if(t<n){var r=t/(n-1);typeof e=="string"?a.addColorStop(r,e):a.addColorStop
(r,"rgb("+e[0]+", "+e[1]+", "+e[2]+")")}}),u.fillStyle=a,u.fillRect(0,0,100,100),
e.style.opacity=.6,i&&(i.style.opacity=0,setTimeout(function(){i.remove()},2500))
,$(e).removeClass("unrendered")}catch(f){console.log("Trax.setGradient():",f.message
)}},t.spinner=function(e){var t=(new Spinner(_.extend({lines:11,length:3,width:2,
radius:4,color:"#333",speed:1,trail:77,hwaccel:!0,className:"spin"},e))).spin();return t
.el},t.regionallyBlocked=function(e){return e||(e=cookie.get("country_code3")||""
),_.include(WHITELIST_COUNTRY_CODES,e.toLowerCase())?!1:App.sessions&&App.sessions
.isJuniorModerator()?!1:!0},t.resetRegionalBlocking=function(){cookie.remove("country_code3"
)},t}),define("models/modules/onready",[],function(){return{readyStates:{},onReady
:function(e,t){this.readyStates[e]?t():this.bind("onready:"+e,t)},isReady:function(
e){this.readyStates[e]||(this.readyStates[e]=!0,this.trigger("onready:"+e))}}}),define
("collections/_base_collection",[],function(){return typeof App.Collections.BaseCollection!="undefined"?
App.Collections.BaseCollection:(App.Collections.BaseCollection=Backbone.Collection
.extend({load:function(e){if(_.isArray(e)){var t=[];return _.each(e,function(e){t
.push(this.loadOne(e))},this),t}return this.loadOne(e)},loadOne:function(e){return this
.loadOneByAttributes(e)},loadOneByAttributes:function(e){if(_.isUndefined(e))return!1
;var t=this.get(e.id);return t?t.set(e):this.add(e),this.get(e.id)}}),App.Collections
.BaseCollection)}),function(){var e=!1,t=/xyz/.test(function(){xyz})?/\b_super\b/
:/.*/;this.Class=function(){},Class.extend=function(n){function o(){!e&&this.initialize&&
this.initialize.apply(this,arguments)}var r=this.prototype;e=!0;var i=new this;e=!1
;for(var s in n)i[s]=typeof n[s]=="function"&&typeof r[s]=="function"&&t.test(n[s
])?function(e,t){return function(){var n=this._super;this._super=r[e];var i=t.apply
(this,arguments);return this._super=n,i}}(s,n[s]):n[s];return o.prototype=i,o.constructor=
o,o.extend=arguments.callee,o}}(),define("jquery.class",function(e){return function(
){var t,n;return t||e.window.Class}}(this)),define("lib/jsonh.jquery",["jquery.class"
,"global_trax"],function(e,t){var n=function(){var n={},r=function(e,t,n,r,s){return _
.isFunction(r)||(s=r,r=n,n=t,t=null),s||(s={}),s.context=n,i(e,t,r,s)},i=function(
e,t,n,r){_.isFunction(t)&&(r=n,n=t,t=null);var i={url:e,data:t,complete:n};return r&&
(i=$.extend(i,r)),f(i)},s={},o=function(e,t,n){return n&&s[e]?!1:e(e,t,function()
{n&&delete s[e]})},u=function(e,t,n){var r={complete:t};n=n||{};if(e.nodeName.toUpperCase
()=="FORM")r.action="submit",r.form=e;else{if(e.nodeName.toUpperCase()!="A")throw"You must pass a <form> or an <a> tag"
;r.action="click",r.url=$(e).attr("href")}return n.spinner=="none"?r.spinner=null
:n.spinner!==null?r.spinner=n.spinner:$(e).find(".spin").length>0&&(r.spinner=$(e
).find(".spin")),n.data!==null&&(r.data=n.data),n.context&&(r.context=n.context),
r.ignore_flash=n.ignore_flash,r.type=n.type,r.with_lock=n.with_lock,r.element=e,r
},a=e.extend({initialize:function(e){_.bindAll(this,"sendRequest","send","unlock"
,"_jsonhComplete"),this.options=e,this.requestOptions={},this.requestOptions.url=
e.url,this.requestOptions.form=e.form,this.requestOptions.data=e.data,this.requestOptions
.type=e.type;var t=TraxEvents?TraxEvents.requestHeaders():{};e.headers?this.requestOptions
.headers=e.headers:this.requestOptions.headers=t,e.context&&(this.options.complete=
$.proxy(e.complete,e.context),this.options.unauthorized=$.proxy(e.unauthorized,e.
context)),e.spinner!==null?this.spinner=$(e.spinner):$("#facebox .content").is(":visible"
)?this.spinner=$("#facebox-spinner"):this.spinner=$("#header-spinner"),this.spinnerSpan=
this.spinner.children(".spin"),_.isFunction(this.options.complete)?this.originalCompleteFn=
this.options.complete:this.originalCompleteFn=function(){},_.isFunction(this.options
.error)&&(this.errorFn=this.options.error),this.requestOptions.complete=this._jsonhComplete
,this.options.unauthorized&&(this.requestOptions.unauthorized=this.options.unauthorized
),this.requestOptions.jsonhRequest=this},send:function(){return this.isLocked()&&
s[this.sendRequest]?!1:this.sendRequest()},sendRequest:function(){return this.spinnerSpan
.removeClass("saved").css({opacity:1}),c(this.requestOptions)},isLocked:function(
){return this.options.with_lock},unlock:function(){this.isLocked()&&delete s[this
.sendRequest]},_jsonhComplete:function(e){this.unlock(),this.options.showSave?(this
.spinner.addClass("saved"),this.spinnerSpan.css({opacity:0}),setTimeout(_.bind(function(
){this.spinner.children("i").fadeOut(1e3,function(){$(this).parent().removeClass("saved"
),$(this).css("display","")})},this),1200)):this.spinnerSpan.css({opacity:0}),e.status!=500&&
e.status!=503?this.originalCompleteFn.apply(this.options.element||this,[e]):_.isFunction
(this.options.error)?this.errorFn.apply(this.options.element||this,[e]):t.update_flash
(e)}}),f=function(e){var t=new a(e);return t.send()},l=function(e){var t=[];return $
.each(e,function(e,n){t[t.length]={name:e,value:n}}),t},c=function(e){var n=e.form&&
e.form.action||e.url,r=e.data||{},i;if(e.form){var s=$(e.form).serializeArray();r=
$.merge(s,l(r)),i=$(e.form).attr("method")}else i="GET";if(e.type=="PUT"||e.type=="put"
)e.type="POST",r._method="PUT";else if(e.type=="DELETE"||e.type=="delete")e.type="DELETE"
,r._method="DELETE";$.isArray(r)?r[r.length]={name:"format",value:"jsonh"}:typeof 
r=="string"?r+="&format=jsonh":r.format="jsonh";var o={url:n,data:r,type:e.type||
i,dataType:e.dataType||"json",headers:e.headers||{}};return o.complete=function(n
,r){var i={};if(r=="abort")return;if(n.responseText===" ")i.status="500";else try{
i=$.parseJSON(n.responseText),window.LAST_JSON=i}catch(s){i.status="500"}if(_.isUndefined
(i)||_.isNull(i))i={status:"500"};i.status?i.success=parseInt(i.status,0)>=200&&parseInt
(i.status,0)<300:i.success=n.status>=200&&n.status<300||n.status===304||n.status===1223
,i.status=parseInt(i.status,0),i.status===500&&(i.flash={errors:"Oops, there was a problem!<br/>We have been notified."
});if(i.status===401){if(typeof App.Sessions=="undefined")return;App.Sessions.unsetCurrentUser
(),_.isFunction(e.unauthorized)?e.unauthorized(i):(t.showSignupView(),App.views.appView&&
App.views.appView.loadingState(!1));var o=function(){e.jsonhRequest.send()};App.Sessions
.unbind("jsonh:current_user:set_from_backend",o).bind("jsonh:current_user:set_from_backend"
,o),$(document).bind("close.facebox",function(){App.Sessions.unbind("jsonh:current_user:set_from_backend"
,o)})}else _.isFunction(e.complete)&&e.complete(i),i.status!==401&&!(e.jsonhRequest&&
e.jsonhRequest.options&&e.jsonhRequest.options.ignore_flash)&&t.update_flash(i)},
$.ajax(o)};return n.build_options=u,n.ajax=f,n.now=i,n.now_with_context=r,n};return $
.fn.extend({jsonh_now:function(e,t){var r=n();return $(this).each(function(){var n=
r.build_options(this,e,t);r.ajax(n)})},jsonhify:function(e,t){var r=n();return $(
this).each(function(){var n=r.build_options(this,e,t);$(this)[n.action](function(
){return r.ajax(n),!1})})}}),n()}),define("lib/player/preview_player",["lib/client_storage"
,"global_trax","lib/jsonh.jquery"],function(e,t,n){if(!_.isUndefined(t.previewPlayer
))return t.previewPlayer;var r=Class.extend({initialize:function(t){_.bindAll(this
,"fadeOut","whilePlaying","seekTo"),this.soundManager=t,this.smSound=null,this.setVolume
(e.get("vol")||80)},togglePlay:function(e){e.playingSample==0?this.playingSample=!1
:this.playingSample=!0,this.playable===e?this.smSound&&(this.smSound.paused?this.
resume():this.pause()):this.play(e)},pause:function(){this.playable&&this.playable
.onPauseAction(),this.smSound&&this.soundManager.pause(this.smSound.sID)},resume:
function(){t.pausePlayback(),this.playable.onPlayAction(),this.soundManager.resume
(this.smSound.sID),this.smSound&&(this.smSound.playState===0?this.soundManager.play
(this.smSound.sID):this.soundManager.resume(this.smSound.sID))},play:function(e){
t.pausePlayback(),t.windowIsPlaying(),e.onPlayAction(),this.unloadPlayable(),this
.playable=e;if(this.playable.isExternal()){var n=this.playable.getStreamUrl();if(!
n)return!1;this.playingSample=!1,this.playUrl(n)}else this.playable.get("play_full_track"
)?this.playable.get("stream_url")?this.playUrl(this.playable.get("stream_url")):this
.playFullTrackId(this.playable.id):this.playTrackId(this.playable.id)},playFullTrackId
:function(e){return this.playTrackId(e,"/sets/play_full_track/")},playTrackId:function(
e,r){r=r||"/sets/play_track/",n.now_with_context(r+e,this,function(e){e.success&&
(t.isOwner(this.playable)&&(this.playingSample=!1),this.smPlay(e.track.id,e.track
.track_file_stream_url))},{spinner:"none"})},playUrl:function(e){this.smPlay(Math
.round(1e7*Math.random()),e)},smPlay:function(t,n){t="p"+t,n=n;if(!n)return App.Trax
.show_flash_error_with_timeout('"'+this.playable.get("name")+'" is unavavailable for preview right now.'
,3e3),!1;this.soundManager.onready(_.bind(function(){this.soundManager.createSound
({id:t,url:n,onplay:_.bind(function(){this.playable.onSmPlay()},this),onresume:_.
bind(function(){this.playable.onSmPlay()},this),whileplaying:this.whilePlaying,onfinish
:_.bind(function(){var e=this.playable;this.unloadPlayable(),e.onFinishAction()},
this)}),this.smSound=this.soundManager.getSoundById(t),this.soundManager.setVolume
(this.smSound.sID,e.get("vol")||80),this.soundManager.play(this.smSound.sID),this
.playingSample&&this.smSound.onposition(27e3,_.bind(this.fadeOut,this))},this))},
seekTo:function(e){var t=parseInt(e*this.smSound.durationEstimate,10);try{this.smSound
.duration<t&&(t=this.smSound.duration-1e3),this.soundManager.setPosition(this.smSound
.sID,t),this.soundManager.unmute(this.smSound.sID)}catch(n){throw n}},unloadPlayable
:function(){this.playable&&(this.pause(),this.playable=null),this.smSound&&(this.
soundManager.stop(this.smSound.sID),this.soundManager.unload(this.smSound.sID),this
.smSound=null)},isPlaying:function(){return!!this.smSound&&!this.smSound.paused},
fadeOut:function(e,t){if(this.isPlaying()){_.isUndefined(t)&&(t=this.smSound.sID)
,this.fadingOut=!0;var n=parseInt(this.smSound.volume,0);if(n>0)this.soundManager
.setVolume(t,n-1),this.smSound.sID==t&&_.delay(this.fadeOut,15,e,t);else{var r=this
.playable;_.isFunction(e)?e():this.unloadPlayable(),r.onFinishAction()}}},setVolume
:function(t){t>100&&(t=100),t<0&&(t=0),this.soundManager.defaultOptions.volume=t,
this.smSound&&this.soundManager.setVolume(this.smSound.sID,t),e.set("vol",t)},whilePlaying
:function(){this.playable.onWhilePlaying(this.smSound.position)}});return r}),define
("models/modules/playable",["lib/player/preview_player","global_trax"],function(e
,t){var n,r={play:function(){_.isUndefined(t.previewPlayer)&&(t.previewPlayer=new 
e(soundManager)),_.isUndefined(n)&&(n=t.previewPlayer),n.togglePlay(this)},togglePlayPreview
:function(e){this.playingSample=e,this.play()},isPlaying:function(){return this.playableState=="playing"
},pause:function(){n&&n.playable===this&&n.pause()},resume:function(){_.isUndefined
(n)||n.playable!==this?this.play():n.resume()},seek:function(e){n.seekTo(e)},isExternal
:function(){throw"Not implemented yet"},onPauseAction:function(){this.playableState="paused"
,this.trigger("onStateChange")},onPlayAction:function(){this.playableState="loading"
,this.trigger("onStateChange")},onSmPlay:function(){this.playableState="playing",
this.trigger("onStateChange")},onFinishAction:function(){this.playableState="paused"
,this.trigger("onStateChange"),this.trigger("onFinish")},onWhilePlaying:function(
e){this.trigger("whilePlaying",e,n.smSound.durationEstimate)}};return r}),define("lib/traxhead"
,[],function(){if(typeof App.Traxhead!="undefined")return App.Traxhead;var e=App.
Traxhead={};return e.looksLoggedIn=function(){return!!document.cookie.match("auth_token"
)},e.initFbAppId=function(t){t=_.extend({music:!1},t),FB.init({appId:"166738216681933"
,status:!0,channelUrl:"//8tracks.com/channel.html",cookie:!0,xfbml:!0,music:t.music
,oauth:!0}),setTimeout(function(){e.FbLoaded=!0},500)},e.onFbInit=function(){try{
e.initFbAppId(),ParsedLocation.urlParams.load_fb_bridge&&TRAX.trackPageView.loadFbMusicBridge
(),FB.Event.subscribe("edge.create",function(e){App.Events&&App.Events.gaSocial("facebook"
,"like",e)}),FB.Event.subscribe("edge.remove",function(e){App.Events&&App.Events.
gaSocial("facebook","unlike",e)}),FB.Event.subscribe("message.send",function(e){App
.Events&&App.Events.gaSocial("facebook","send",e)})}catch(t){}},e.onFbMusicInit=function(
){try{e.initFbAppId({music:!0}),App.views.fbPlayerIframeView.loadFbMusicBridge()}
catch(t){}},e.zeroFill=function(e,t){return t-=e.toString().length,t>0?(new Array
(t+(/\./.test(e)?2:1))).join("0")+e:e},e}),define("lib/trax_utils",[],function(){
var e={};return e.addCommas=function(e){e+="";var t=e.split("."),n=t[0],r=t.length>1?"."+
t[1]:"",i=/(\d+)(\d{3})/;while(i.test(n))n=n.replace(i,"$1,$2");return n+r},e.coolNumber=
function(e){return e<500?e:e<1e3?e.toString().substr(0,1)+e.toString().substr(1,9
):e<=5e3?e.toString().substr(0,1)+","+e.toString().substr(1,9):Math.floor(e/1e3)+",000+"
},e.toUrlParam=function(e){if(_.isString(e))return encodeURIComponent(e.replace(/_/g
,"__").replace(/\s/g,"_").replace("+","&&")).replace(/\//g,"%2F").replace(/\./g,"%5E"
)},e.capitalizeFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1
)},e.toTitleCase=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt
(0).toUpperCase()+e.substr(1).toLowerCase()})},e}),define("lib/events",["lib/client_storage"
,"lib/traxhead","global_trax","lib/jsonh.jquery","lib/trax_utils"],function(e,t,n
,r,i){if(typeof App.Events!="undefined")return App.Events;var s=App.Events={pageReadyToUse
:_.once(function(){}),pageView:function(e,t,n){s.gaPageview(t),TraxEvents.pageView
(e,n)},postToStatsTimer:function(e,t){s.postToStats(e,t,"timer")},postToStats:function(
e,t,n){n=n||"counter",r.now("/stats",{type:n,k:e,v:t},null,{type:"POST"})},postToLog
:function(e,t){t["@collection"]=e,r.now("/log",t,null,{type:"POST"})},startMix:function(
e,t){s.gaTrack("Mix","Start",e?e.id:null),t,s.setGACohort()},setGACohort:function(
){e.get("listened")===null&&(ga("set","dimension1",s.timestamp()),e.set("listened"
,1))},trackClick:function(e,t){TraxEvents.trackClick(e,t)},likeMix:function(e){console
.log("[EVENT] likeMix"),s.gaTrack("Mix","Like",e?e.id:null)},commentOnMix:function(
e){s.gaTrack("Mix","Comment",e?e.id:null)},playTrack:function(e,t){s.gaTrack("Track"
,"Play"),TraxEvents.refreshSession()},favTrack:function(){s.gaTrack("Track","Fav"
)},buyTrack:function(e){s.gaTrack("Track","Buy",e)},followUser:function(){s.gaTrack
("User","Follow")},selectInstagramPhoto:function(){s.gaTrack("Instagram","SelectPhoto"
)},login:function(e){s.updateGaLoggedInState(),s.gaTrack("User","Login")},signup:
function(e){s.updateGaLoggedInState(),s.gaPageview("/signup/success")},clickMixShare
:function(){},clickMixShareOption:function(e){s.gaSocial(e.network,e.action,e.url
)},shareMix:function(e){s.gaTrack("Mix Share",e.network)},clickUserShareOption:function(
e){s.gaTrack("User Share",e.network)},addPreset:function(){},removePreset:function(
){},clickFindFriends:function(){},enterMixEditMode:function(){},uploadTrack:function(
){s.gaTrack("Mix","TrackUpload")},trackUploadStarted:function(){s.postToStats("js.track.upload.started"
)},trackUploadCancelled:function(){s.postToStats("js.track.upload.started")},trackUploadFinished
:function(){s.postToStats("js.track.upload.finished")},publishMix:function(e){s.gaTrack
("Mix","Publish",e?e.id:null)},playNextMix:function(e){},skipMix:function(){},TRACKS_REPORTED_COUNT_KEY
:"tracks_reported_count",reportTrack:function(e,t){},clickYoutube:function(){},clickExternalLink
:function(e){},splashStep2Reported:!1,splashStep2:function(e){s.splashStep2Reported||
(s.splashStep2Reported=!0)},splashStep3Reported:!1,splashStep3:function(e){s.splashStep3Reported||
(s.splashStep3Reported=!0)},sawSite:!1,sawMix:!1,init:function(){e.get("saw_site"
)=="1"?s.sawSite=!0:e.set("saw_site",1),e.get("saw_mix")=="1"?s.sawMix=!0:App.currentPage=="mix"&&
e.set("saw_mix",1);if(!window.ga_initialized){var t="auto";App.env=="development"&&
(t={cookieDomain:"none"}),ga("create",s.GaProfileId(),t),ga("require","displayfeatures"
)}s.updateGaLoggedInState(),s.updateGaPageVar(),s.setGaUrlParams(),setInterval(s.
keepAlive,6e5)},onSessionsLoaded:function(){},onUserChanged:function(e){},onUserUnset
:function(){},GaProfileId:function(){return!_.isUndefined(App)&&App.env=="staging"||
App.env=="development"?"UA-2865123-14":"UA-2865123-1"},luckyOrangeActive:function(
){return e.get("luckyOrange")===null?e.set("luckyOrange",Math.random()<.01):e.get
("luckyOrange")},gaSocial:function(e,t,n){ga("send","social",e,t,n),console.log("[EVENT]"
,"social",e,t,n)},gaTrack:function(e,t,n,r){n&&(n=n.toString()),r&&(r=r.toString(
)),console.log("[EVENT] "+e+" "+t+" "+(n?"("+n+": "+r+")":"")),ga("send","event",
e,t,n,r)},gaPageview:function(e){s.updateGaPageVar(),ga("send","pageview",e)},mpUrlsToTitles
:{forgot_password:"Forgot Password",edit_password:"Reset Password",following:"Following"
,followers:"Followers"},timestamp:function(){var e=new Date;return e=new Date(e.getUTCFullYear
(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds
()),""+e.getFullYear()+t.zeroFill(e.getMonth()+1,2)+t.zeroFill(e.getDate(),2)},updateGaLoggedInState
:function(){ga("set","dimension2",t.looksLoggedIn()?"In":"Out")},updateGaPageVar:
function(){ga("set","dimension4",s.gaPageVar())},setGaUrlParams:function(){var e=
window.ParsedLocation.urlParams;e.utm_campaign&&ga("set","campaignName",e.utm_campaign
),e.utm_source&&ga("set","campaignSource",e.utm_source),e.utm_medium&&ga("set","campaignMedium"
,e.utm_medium),e.utm_term&&ga("set","campaignKeyword",e.utm_term),e.utm_content&&
ga("set","campaignContent",e.utm_content),ga("set","referrer",window.ParsedLocation
.parsedReferrerUrl.source)},gaPageVar:function(){if(App.currentPage=="browse")return App
.views.browseView&&App.views.browseView.artist_name?"artist":App.views.browseView&&
App.views.browseView.tags.length>0?"tag":"explore";return App.currentPage},keepAlive
:function(){s.gaTrack("Ignore","Keep-Alive")},blockedAd:function(){s.gaTrack("Ad"
,"Blocked")},onAdClick:function(){},vwoTrack:function(){},clickAddToCollection:function(
){},clickRemoveMixFromHistory:function(){},clickClearCollection:function(){},createCollection
:function(){s.gaTrack("Collection","Create")},addMixToCollection:function(e){s.gaTrack
("Collection","AddMix",e?e.id:null)}};return s.init(),s}),define("models/track",["global_trax"
,"models/modules/playable","lib/jsonh.jquery","lib/events"],function(e,t,n,r){var i=
Backbone.Model.extend(t).extend({urlRoot:"/tracks",validationErrors:[],possibleValidationErrors
:["dupe","missing_metadata","repeat_artist","repeat_album","repeat_track","processing"
,"saving"],initialize:function(){e.mix&&this.updateValidationErrors(e.mix.validationErrorsForTrack
(this.get("uid"))),_.bindAll(this,"onUnselected","sendDestroyEvent"),this.bind("onUnselected"
,this.onUnselected)},sync:function(t,r,i){n.ajax({url:this.url(),data:this.toRails
(),type:t=="create"?"POST":"PUT",complete:_.bind(function(t){t.success?(i.success
(r,t.track,i),t.mix&&e.mix.set(t.mix)):i.error(t.track)},this),spinner:"#track_update-spinner"
})},mixAttrsToStore:function(){return{id:this.id}},isExternal:function(){return this
.get("stream_source")=="ext_sc"||this.get("stream_source")=="match_sc"?!0:!1},getStreamUrl
:function(){return this.get("track_file_stream_url")},toRails:function(){var t={track
:{name:this.get("name"),performer:this.get("performer"),release_name:this.get("release_name"
),year:this.get("year"),buy_url:this.get("buy_url")}};return this.selected()&&(t.
mix_id=e.mix.id),t},selected:function(){return e.mix?e.mix.hasTrackUid(this.get("uid"
)):null},onUnselected:function(){this.isPlaying()&&e.previewPlayer.fadeOut()},loadInfo
:function(){var e=this.url();return $.ajax({url:e+"/info",data:{format:"jsonh"}})
},remove:function(){var e=this.url(),t=$.ajax({type:"delete",url:e});return t.success
(this.sendDestroyEvent),t},sendDestroyEvent:function(){this.trigger("destroy")},updateValidationErrors
:function(t){_.isEqual(this.validationErrors,t)||(this.validationErrors=t,this.get
("missing_metadata")&&this.validationErrors.push("missing_metadata"),_.include(this
.validationErrors,"processing")&&e.mix&&e.mix.enableUpdatePolling(),this.trigger("onStateChange"
))},openYoutubePopup:function(){r.clickYoutube(),e.youtubePopup=window.open("about:blank"
,"youtube","height=525,width=700"),this.findOnYoutube(function(t){if(t&&t.items&&
t.items.length){var n=t.items[0].id.videoId;e.youtubePopup.location.href="http://www.youtube.com/v/"+
n+"?autoplay=1",e.pausePlayback()}else e.youtubePopup.close(),e.show_flash_error("Sorry, we couldn't find a matching YouTube video for that track."
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
i,App.Collections.Tracks}),define("collections/selected_tracks",["global_trax","collections/_base_collection"
,"models/track","collections/tracks","lib/jsonh.jquery"],function(e,t,n,r,i){var s=
t.extend({model:n,mixValidationUpdated:function(e){console.log("mixValidationUpdated"
),this.forEach(function(t){t.updateValidationErrors(e[t.get("uid")]||[])})},hasUid
:function(e){if(e===undefined)return!1;if(this.get(e))return!0;var t=this.pluck("uid"
);return _.indexOf(t,e)!=-1},update:function(e){var t=this.pluck("id"),n=_.filter
(e,function(e){return!(e+"").match(/^f/)}),i=_.difference(t,n),s=_.difference(n,t
);_.each(i,function(e){var t=r.getByUid(e);t.trigger("onUnselected")}),_.each(s,function(
e,t){r.getByUid(e).trigger("onSelected")}),this.reset(r.loadByUids(n)),_.each(e,_
.bind(function(e,t){this.trigger("onChangeOrder:"+e,t+1)},this))},save:function()
{var t={tracks:_.map(this.models,function(e){return e.mixAttrsToStore()})};e.mix.
suggestTags()&&(t.suggest_tags=!0),this._updateTracksRequestId&&clearTimeout(this
._updateTracksRequestId),this._updateTracksRequest&&this._updateTracksRequest.abort
(),this._updateTracksRequestId=setTimeout(_.bind(function(){this._updateTracksRequest=
i.now_with_context("/mixes/"+e.mix.id+"/update_tracks",t,this,function(t){t.success&&
t.mix&&e.mix.set(t.mix)},{type:"POST",spinner:"#validation-spinner",showSave:!0})
},this),700)},addTrack:function(e,t){console.log(e,t),e.trigger("onSelected");if(
t&&t.position){var n=this.pluck("id"),r=n.slice(0,t.position-1).concat([e.id]).concat
(n.slice(t.position-1));this.update(r),this.trigger("add",e,this,{position:t.position
})}else this.add(e);this.save()}});return s}),define("collections/tracks_played",
["global_trax","collections/_base_collection","models/track","collections/tracks"
,"lib/jsonh.jquery"],function(e,t,n,r,i){var s=t.extend({model:n});return s}),define
("models/modules/backbone_client_storage",["lib/client_storage"],function(e){var t=
{getModel:function(t){return e.get(this._modelKey(t))},getModels:function(t){var n=
this._collectionKey(t);return _.map(e.get(n),function(t){return e.get(n+"-"+t)})}
,setModel:function(t){return this._addToCollection(t),e.set(this._modelKey(t),t)}
,setModels:function(e){return _.each(e,function(e){this.setModel(e)},this),e},destroyModel
:function(t){return this._removeFromCollection(t),e.destroy(this._modelKey(t))},_modelKey
:function(e){return(e.storeKey||e.collection.storeKey)+"-"+e.id},_collectionKey:function(
e){return e.storeKey},_addToCollection:function(t){if(t.collection){var n=this._collectionKey
(t.collection),r=e.get(n);r||(r=[]),r.push(t.id),e.set(n,r)}},_removeFromCollection
:function(t){if(t.collection){var n=this._collectionKey(t.collection),r=e.get(n);
r||(r=[]),r=_.reject(r,function(e){return e==t.id.toString()}),e.set(n,r)}}};return t
}),define("models/modules/flexible_store",["models/modules/backbone_client_storage"
,"lib/jsonh.jquery"],function(e,t){Backbone.jsonhSync=function(e,n,r){var i=function(
e){var t={};return _.each(e.FIELDS_TO_BACKEND,function(n){if(!_.isUndefined(e.get
(n))){var r=e.get(n);r===!0&&(r=1),r===!1&&(r=0),t[n]=r}}),t},s,o,u,a;_.isUndefined
(n.id)?(o=n,s=null,u=o.urlRoot,a=o.jsonhKey):(s=n,o=null,u=s.url(),a=s.jsonhKey||
s.collection.jsonhKey),_.isUndefined(r)&&(r={});var f={url:u,type:Backbone.methodMap
[e],complete:function(e){e.success?_.isFunction(r.success)&&r.success(n,e[a],r):_
.isFunction(r.error)&&r.error(n,e[a],r)}};return r.data&&(f.data=r.data),e==="update"&&
(f.data=f.data||{},f.data[a]=i(s)),t.ajax(f)},Backbone.flexibleSync=function(t,n,
r){_.isUndefined(r)&&(r={});var i,s,o;_.isUndefined(n.id)?(i=n,s=null):(s=n,i=null
);if(t==="read"){var u=!1,a;s?(a=e.getModel(s),a&&(u=!0,_.isFunction(r.success)&&
r.success(s,a,r))):i&&(a=e.getModels(i),a&&a.length>0&&(u=!0,_.isFunction(r.success
)&&r.success(i,a,r))),u||(o=_.clone(r),o.success=_.bind(function(t){_.isFunction(
r.success)&&r.success(this,t,r),this.models?e.setModels(this.models):e.setModel(this
)},s||i),Backbone.jsonhSync(t,s||i,o))}else t==="create"||t==="update"?(e.setModel
(s),Backbone.jsonhSync(t,s,o)):t==="delete"&&(e.destroyModel(s),Backbone.jsonhSync
(t,s,o))};var n={localSave:function(){e.setModel(this)},localDestroy:function(){e
.destroyModel(this)},sync:function(e,t,n){return Backbone.flexibleSync(e,t,n)}};return n
}),define("models/user",["global_trax","models/modules/flexible_store","lib/jsonh.jquery"
],function(e,t,n){var r=Backbone.Model.extend(t).extend({urlRoot:"/users",storeKey
:"Users",jsonhKey:"user",FIELDS_TO_BACKEND:["login","bio","web_safe_browse","next_mix_prefs"
],PARTNER_CONNECTED:"connected",PARTNER_NOT_CONNECTED:"not_connected",PARTNER_CONNECTED_BUT_EXPIRED
:"connected_but_expired",CONTACTS_UPDATING:"updating",CONTACTS_ERROR:"error",CONTACTS_UPDATED
:"updated",CONTACTS_UPDATED_BUT_EXPIRED:"contacts_updated_but_expired",initialize
:function(e){},isAdmin:function(){return this.get("admin")},isJuniorModerator:function(
){return this.get("junior_moderator")},toggleFollow:function(t){!t,t={};if(!e.currentUser
)return!1;e.currentUser.trigger("follow"),n.ajax({url:this.url()+"/toggle_follow"
,type:"POST",complete:_.bind(function(e){e.success&&t.success?t.success(e):t.error&&
t.error(e)},this)})},hasConnectedPartners:function(){return _.any(this.get("partners"
),_.bind(function(e){return e.status===this.PARTNER_CONNECTED||e.status===this.PARTNER_CONNECTED_BUT_EXPIRED
},this))},hasConnected:function(e){return this.get("partners")&&this.get("partners"
)[e]&&(this.get("partners")[e].status===this.PARTNER_CONNECTED||this.get("partners"
)[e].status===this.PARTNER_CONNECTED_BUT_EXPIRED)},hasConnectedAndNotExpired:function(
e){return this.get("partners")&&this.get("partners")[e]&&this.get("partners")[e].
status===this.PARTNER_CONNECTED},updatingContactsFor:function(e){return this.get("partners"
)[e]&&this.get("partners")[e].contacts_status===this.CONTACTS_UPDATING},updatingContacts
:function(){return this.updatingContactsFor("facebook")},partnerContactsState:function(
e){if(this.get("partners")&&this.get("partners")[e]){var t=this.get("partners")[e
],n="";return t.status===this.PARTNER_CONNECTED||t.status===this.PARTNER_CONNECTED_BUT_EXPIRED?
n=this.PARTNER_CONNECTED:n=this.PARTNER_NOT_CONNECTED,t.contacts_status&&(n+=" "+
t.contacts_status),n}},updateRecentMixes:function(e){this.set("recent_mixes",e),this
.set("has_recent_mixes",e.length>0),this.localSave()},allPartnersConnected:function(
){return this.hasConnected("facebook")},hasPresetSmartId:function(e){var t=!!_.find
(this.get("preset_smart_ids"),function(t){return t.replace(/:safe$/,"")===e.replace
(/:safe$/,"")});return t?!0:!!_.find(this.get("presets"),function(t){return"tags:"+
t===e})},hasYoutubeConnected:function(){return App.models.toc&&App.models.toc.hasYoutubeRecommendations
()},flag:function(e){return $.ajax("/user_flaggings.jsonh",{data:{flagged_user_id
:e},type:"POST"})}});return r}),define("lib/sessions",["global_trax","lib/traxhead"
,"lib/client_storage","models/user","lib/events","lib/jsonh.jquery"],function(e,t
,n,r,i,s){if(typeof App.Sessions!="undefined")return App.Sessions;var o=App.Sessions=
{};return _.extend(o,Backbone.Events,{whenUserReadyOrChanged:function(t,n){e.currentUser&&
_.defer(t,e.currentUser),n&&n.listenTo(o,"sessions:user_changed",t)},_onUserChanged
:function(){this.trigger("sessions:user_changed",e.currentUser)},onPageLoad:function(
){t.looksLoggedIn()?this.tryToSetCurrentUserFromPage()||this.tryToSetCurrentUserFromStorage
()||this.tryToSetCurrentUserFromBackend():this.getCountryCode(),this.logoutUserIfAuthenticationFailed
(),i.onSessionsLoaded()},logoutUserIfAuthenticationFailed:function(){PAGE.failed_authentication&&
PAGE.failed_authentication.length>0&&this.unsetCurrentUser()},tryToSetCurrentUserFromPage
:function(){if(PAGE.currentUser)return this.setCurrentUserByAttributes(PAGE.currentUser
)},tryToSetCurrentUserFromStorage:function(){return n.get("currentUserId")?(e.currentUser=new 
r({id:n.get("currentUserId")}),e.currentUser.fetch({success:_.bind(function(){this
._onCurrentUserSet(!0)},this)}),!0):!1},reloadIfOutdated:function(){(!e.currentUser
.get("last_logged_in")||Date.now()-Date.parse(e.currentUser.get("last_logged_in")
)>18e5)&&this.updateNotifications()},updateNotifications:function(){s.now("/users/"+
e.currentUser.id+"/notifications_count",_.bind(function(t){t.success&&(e.currentUser
.set("last_logged_in",new Date),e.currentUser.set(t.user),e.currentUser.localSave
(),this._onCurrentUserSet(!0))},this))},tryToSetCurrentUserFromBackend:function(e
){s.now("/users/current",{include:"recent_mixes,web_preferences,tracking_settings"
},_.bind(function(t){t.success?(t.user.last_logged_in=new Date,this.setCurrentUserByAttributes
(t),typeof e=="function"&&e.call()):this.getCountryCode()},this),{unauthorized:function(
){}})},getCountryCode:function(){var e=cookie.get("country_code3");e&&e.length>0?
this.onCountryCodeSet(e):$.ajax({url:"/users/current_country_code.jsonh",success:
_.bind(function(e){var t=new Date;t.setTime(t.getTime()+36e5),cookie.set("country_code3"
,e.country_code,{expires:t.toGMTString()}),this.onCountryCodeSet(e.country_code)}
,this)})},onCountryCodeSet:function(t){console.log("onCountryCodeSet: "+t);if(!t)
return;if(!e.regionallyBlocked(t)||e.currentUser&&e.currentUser.isJuniorModerator
())return;$("body").addClass("international"),this.showInternationalMessage()},showInternationalMessage
:function(){if(_.include(["mix","home","home_first_time","browse"],App.currentPage
)&&$(".international_message").length==0&&!cookie.get("intl_ack")){var e;$("#main"
).before('<div class="international_message"><div class="container clearfix"><div class="row"><div class="col-md-12"><div class="message"><span class="i-warning"></span> Unfortunately, some music can’t be played on 8tracks in your area right now. <a href="http://blog.8tracks.com/2016/02/12/a-change-in-our-international-streaming/" target="_blank">Learn more &rarr;</a><a href="#" style="float: right;" onclick="$(\'.international_message\').hide(); window.cookie.set(\'intl_ack\', \'1\'); return false;"><span class="i-x"></span></a></div></div></div></div></div>'
)}},setCurrentUserByAttributes:function(t,n){var i;t.user?i=t.user:t.current_user?
i=t.current_user:i=t;if(!i)return!1;var s=!0;return e.currentUser?(e.currentUser.
get("id")==i.id&&(s=!1),e.currentUser.set(i)):e.currentUser=new r(i),n&&n.backendLogin&&
(cookie.set("L",e.currentUser.id),cookie.set(this.authTokenCookieName(),e.currentUser
.get("user_token")),this.trigger("jsonh:current_user:set_from_backend",e.currentUser
)),this._onCurrentUserSet(s,n&&n.onSignup),!0},loggedIn:function(){return!!e.currentUser
},currentUserId:function(){if(this.loggedIn())return e.currentUser.id},loggedOut:
function(){return!e.currentUser},logged_in:function(){return!!e.currentUser},authTokenCookieName
:function(){var e="auth_token";try{App.env!=="production"&&(e+="_"+App.env)}catch(
t){}return e},onFacebookConnectFailure:function(t){e.update_flash({errors:t.user_error_message
})},unsetCurrentUser:function(){cookie.remove("L"),cookie.remove(this.authTokenCookieName
()),e.currentUser&&(e.currentUser.localDestroy(),e.currentUser=null,this.redirectUser
(!1)),n.clearAll(),this.updatePermissionsDisplay(),this.trigger("current_user:unset"
,e.currentUser),i.onUserUnset()},redirectUser:function(e){var t=App.currentPage,n=!!
t.match(/mix|user|browse/),r=window.location.toString(),i=r.match(/\/edit$/);if(n&&!
i)return;e||this.unsetCurrentUser(),App.views.appView.closeView(),App.views.appView
.loadHomepageView("/")},onBackendLogin:function(e,t){var n=o.loggedIn();this.setCurrentUserByAttributes
(e,{backendLogin:!0,onSignup:e.user_created}),e.user_created?i.signup(e.type):i.login
(e.type),!n&&!t&&this.redirectUser(!0),$(document).trigger("onBackendLogin",[e,t]
)},_onCurrentUserSet:function(t,r){e.currentUser.localSave(),n.set("currentUserId"
,e.currentUser.id),PAGE.attempted_path&&PAGE.attempted_path!==""?window.location.
pathname!=PAGE.attempted_path&&(window.location.href=PAGE.attempted_path):(App.currentPage==="login"||
App.currentPage==="signup")&&PAGE.attempted_path&&(window.location.href=PAGE.attempted_path
),this.updatePermissionsDisplay(),this.getCountryCode(),t&&(this._onUserChanged()
,i.onUserChanged(r)),this.reloadIfOutdated(),this.hideAds()},updatePermissionsDisplay
:function(){this.loggedIn()?($(".p_logged_out").removeClass("on").addClass("off")
,$(".p_logged_in").removeClass("off").addClass("on"),o.isAdmin()?($(".p_at_least_owner, .p_admin"
).removeClass("off").addClass("on"),$(".p_not_admin").removeClass("on").addClass("off"
)):($(".p_owner, .p_recipient").removeClass("on").addClass("off"),$("[data-owner_id="+
e.currentUser.id+"].p_owner").removeClass("off").addClass("on"),$("[data-owner_id="+
e.currentUser.id+"].p_at_least_owner").removeClass("off").addClass("on"),$("[data-recipient_id="+
e.currentUser.id+"].p_recipient").removeClass("off").addClass("on")),$(".p_not_owner"
).removeClass("on").addClass("off"),$("[data-owner_id!="+e.currentUser.id+"].p_not_owner"
).removeClass("off").addClass("on"),o.isAdmin()||$(".p_not_admin").removeClass("off"
).addClass("on"),this.update_toggle_statuses()):($(".p_logged_in").removeClass("on"
).addClass("off"),$(".p_logged_out").removeClass("off").addClass("on"))},update_toggle_statuses
:function(){var t={favs:[],likes:[],follows:[]},n=!1;$("form.like, a.like").each(
function(){n=!0,t.likes[t.likes.length]=$(this).attr("data-mix_id")}),$("form.follow:not(.skip), a.follow:not(.skip)"
).each(function(){n=!0,t.follows[t.follows.length]=$(this).attr("data-user_id")})
,App.currentPage!="home_logged_in"&&$("form.fav, a.fav").each(function(){n=!0,t.favs
[t.favs.length]=$(this).attr("data-track_id")});if(n===!1)return;s.now("/users/"+
e.currentUser.id+"/values_for",t,function(e){e.likes&&$.each(e.likes,function(e,t
){var n=$("form.like[data-mix_id="+e+"]");t?($(n).addClass("active").removeClass("inactive"
),$(n).find('input[type|="submit"]').val("Unlike")):($(n).addClass("inactive").removeClass
("active"),$(n).find('input[type|="submit"]').val("Like"));var r=$("a.like[data-mix_id="+
e+"]");t?r.addClass("active").removeClass("inactive"):r.addClass("inactive").removeClass
("active")}),e.follows&&$.each(e.follows,function(e,t){var n=$("form.follow[data-user_id="+
e+"]");t?($(n).addClass("active skip").removeClass("inactive"),$(n).find('input[type|="submit"]'
).val("Unfollow")):($(n).addClass("inactive skip").removeClass("active"),$(n).find
('input[type|="submit"]').val("Follow"));var r=$("a.follow[data-user_id="+e+"]");
t?r.addClass("active skip").removeClass("inactive").html('<span class="in">Unfollow</span><span class="out">Following</span>'
):r.hasClass("active")&&r.addClass("inactive skip").removeClass("active").html("Follow"
)}),e.favs&&$.each(e.favs,function(e,t){var n=$("form.fav[data-track_id="+e+"]");
t?$(n).addClass("active").removeClass("inactive"):$(n).addClass("inactive").removeClass
("active");var r=$("a.fav[data-track_id="+e+"]");t?r.addClass("active").removeClass
("inactive"):r.addClass("inactive").removeClass("active")})},{spinner:!1})},hideAds
:function(){!e.showAds()&&App.views.adsView&&(App.views.adsView.close(),delete App
.views.adsView)},isAdmin:function(){return e.currentUser&&e.currentUser.isAdmin()
},isJuniorModerator:function(){return e.currentUser&&e.currentUser.isJuniorModerator
()},isOwner:function(t){if(t){var n=t.get("user")?t.get("user").id:t.get("user_id"
);return!!e.currentUser&&!!n&&n==e.currentUser.id}},isAtLeastOwner:function(e){return!!
this.isOwner(e)||!!this.isAdmin()}}),o}),define("models/image",["global_trax","lib/sessions"
],function(e,t){var n=Backbone.Model.extend({urlRoot:"/images",jsonhKey:"image",FIELDS_TO_BACKEND
:["crop_x1","crop_y1","crop_width","crop_height"],sync:Backbone.jsonhSync,initialize
:function(e){this.on("change",this.onChange),this.mix=e.mix},onChange:function(){
(this.hasChanged("crop_x1")||this.hasChanged("crop_y1")||this.hasChanged("crop_width"
)||this.hasChanged("crop_height"))&&this.trigger("change:crop_values"),this.mix&&
(this.hasChanged("original_imgix_url")||this.hasChanged("cropped_imgix_url"))&&this
.mix.trigger("image:change")},mixpageUrl:function(){return this.croppedImgixUrlFor
(521)},onDataUrlLoad:function(t){var n=new Image;n.onload=_.bind(function(){n.width<400||
n.height<400?e.show_flash_error("Covers must be at least 400px by 400px."):this.set
({original_url:t,original_width:n.width,original_height:n.height,crop_x1:null,crop_y1
:null,crop_height:null,crop_width:null})},this),n.src=t},getCssFor:function(e){var t
,n,r,i,s;if(this.get("crop_width")){var o=e/this.get("crop_width"),u=e/this.get("crop_height"
);return{width:o*this.get("original_width"),height:u*this.get("original_height"),
marginLeft:-o*this.get("crop_x1"),marginTop:-u*this.get("crop_y1")}}return this.get
("original_height")<this.get("original_width")?(t=e/this.get("original_height"),n=
(this.get("original_width")-this.get("original_height"))/2,r=0):(t=e/this.get("original_width"
),n=0,r=(this.get("original_height")-this.get("original_width"))/2),{width:t*this
.get("original_width"),height:t*this.get("original_height"),marginLeft:-t*n,marginTop
:-t*r}},setDefaultCropAttributes:function(){this.get("original_height")<this.get("original_width"
)?(this.set("crop_x1",(this.get("original_width")-this.get("original_height"))/2)
,this.set("crop_y1",0),this.set("crop_width",this.get("original_height"))):(this.
set("crop_x1",0),this.set("crop_y1",(this.get("original_height")-this.get("original_width"
))/2),this.set("crop_width",this.get("original_width"))),this.set("crop_height",this
.get("crop_width"))},croppedImgixUrlFor:function(e){var t;return this.get("cropped_imgix_url"
)?t=this.get("cropped_imgix_url"):t=this.get("original_imgix_url"),t+"&w="+e+"&h="+
e}});return n}),define("models/mix",["global_trax","models/modules/onready","collections/selected_tracks"
,"collections/tracks","collections/tracks_played","models/image","lib/jsonh.jquery"
,"lib/events"],function(e,t,n,r,i,s,o,u){var a=Backbone.Model.extend(t).extend({urlRoot
:"/mixes",fieldsTouched:{},initialize:function(e){_.bindAll(this,"onValidationStatusChange"
,"onTracksAttrChanged","onPublish"),this.onTracksAttrChanged(),this.onValidationStatusChange
(),this.bind("change:validation_status",this.onValidationStatusChange),this.bind("change:tracks"
,this.onTracksAttrChanged),this.initTracksPlayed()},initTracksPlayed:function(){this
.tracksPlayed?this.tracksPlayed.reset():this.tracksPlayed=new i},onValidationStatusChange
:function(){this.disableUpdatePolling(),this.tracks&&this.tracks.mixValidationUpdated
(this.validationErrorsForTracks())},enableUpdatePolling:function(){},disableUpdatePolling
:function(){clearInterval(this.pollingTimer)},globalValidationErrors:function(){var e=
["playlist","cover","name","tags","description"],t=[];return this.get("validation_status"
)&&this.get("validation_status").errors&&_.each(this.get("validation_status").errors
,function(n,r){_.include(e,r)&&(r==="tags"&&(n='<a href="#mix_tags" class="js-scroll">'+
n+"</a>"),r==="description"&&(n='<a href="#mix_description" class="js-scroll">'+n+"</a>"
),t=t.concat(n))}),t},onTracksAttrChanged:function(){this.get("tracks")&&(this.tracks?
this.isReady("tracks"):(this.tracks=new n(r.load(this.get("tracks"))),this.isReady
("tracks")))},withTracks:function(e){this.tracks&&this.get("validation_status")?e
():this.fetch({include:"tracks publish_options dead_tracks",success:e})},withInternationalTracks
:function(e){if(!this.tracks){var t=this;return $.ajax(this.url()+"/tracks_for_international.jsonh"
).done(function(n){t.set("tracks",n.tracks),e()}).fail(function(e){t.trigger("international_error"
)})}e()},play:function(){e.previewPlayer=new e.PreviewPlayer},publish:function(){
var e=!this.get("first_published_at");this.get("publishable")&&this.save({published
:!0},{success:_.bind(this.onPublish,this,e)})},onPublish:function(e){this.trigger
("publish",e)},unpublish:function(){this.save({published:!1})},deleteFromLocalStorage
:function(){var t=this.get("name"),n=this.get("web_path"),r=e.currentUser.get("recent_mixes"
),i=_.reject(r,function(e){return e.name==t&&e.url==n});e.currentUser.updateRecentMixes
(i)},getTracksPlayed:function(e){this.playToken()&&this.get("published")?o.now_with_context
("/sets/"+this.playToken()+"/tracks_played",{mix_id:this.id,reverse:!0},this,function(
e){e.success&&e.tracks&&e.tracks.length>0&&this.tracksPlayed.add(r.load(e.tracks)
),this.isReady("tracksPlayed")},{spinner:!1}):this.isReady("tracksPlayed")},sync:
function(t,n,r){var i={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};return t=="update"?
data=this.toRails():t=="read"&&(data={}),data.api_version=2.1,r.include&&(data.include=
r.include),this._syncRequestId&&clearTimeout(this._syncRequestId),this._syncRequest&&
this._syncRequest.abort(),this._syncRequestId=setTimeout(_.bind(function(){this._syncRequest=
o.now_with_context(this.url(),data,this,function(t){t.mix?(this.set(t.mix,{}),r.success
(this,t.mix,r)):r.error?r.error(t.mix):e.update_flash(t)},{type:i[t],spinner:r.spinner||"#validation-spinner"
,showSave:!0})},this),700),this._currentRequest},saveIfChanged:function(e,t){var n
;for(var r in e)if(!_.isEqual(this.get(r),e[r])){n=!0,this.fieldsTouched[r]=!0;break}
return n?this.save(e,t):!1},toRails:function(){return{mix:{name:this.get("name"),
description:this.get("description")||"",tag_list:this.get("tag_list_cache"),unlisted
:this.get("unlisted"),nsfw:this.get("nsfw"),published:this.get("published")}}},updateTracklist
:function(e){this.tracks.update(e),this.tracks.save()},setTags:function(e){e=e.split
(/\s*,\s*/).join(", "),this.saveIfChanged({tag_list_cache:e})},tagList:function()
{return this.get("tag_list_cache").split(/\s*,\s*/)},suggestTags:function(){return!
this.fieldsTouched.tag_list_cache},validationErrorsForTracks:function(){return this
.get("validation_status")&&this.get("validation_status").errors&&this.get("validation_status"
).errors.tracks?this.get("validation_status").errors.tracks:[]},validationErrorsForTrack
:function(e){var t=this.validationErrorsForTracks();return t&&t[e]?t[e]:[]},validationErrorsForField
:function(e){return this.get("validation_status")&&this.get("validation_status").
errors&&this.get("validation_status").errors[e]?this.get("validation_status").errors
[e]:[]},hasTrackUid:function(e){return this.tracks&&this.tracks.hasUid(e)},hasAtLeast8Tracks
:function(){return this.tracks&&this.tracks.length>=8},playToken:function(){return cookie
.get("play_token")},embedCodeHtml5:function(e,t){return e=e||500,t=t||281,'<iframe src="http://8tracks.com/mixes/'+
this.id+'/player_v3_universal" width="'+e+'" height="'+t+'" style="border: 0px none;"></iframe>'
},loadImage:function(){return this.image=new s({id:"mix_"+this.id,mix:this}),this
.image.fetch(),this.image},toggleLike:function(){var t="/mixes/"+this.get("id")+"/toggle_like"
,n=this;o.now(t,{},function(t){n.set("liked_by_current_user",t.mix.liked_by_current_user
),t.mix.liked_by_current_user&&u.likeMix(e.mix)})},fb_opts:function(){return{name
:this.get("name"),description:this.get("description"),link:"https://8tracks.com"+
this.get("web_path"),picture:this.get("cover_urls").sq250}},sortedDeadTracks:function(
){var e=this.get("dead_tracks");return _.sortBy(e,function(e){return e.name})},removeTrackFromGrave
:function(e){var t="/mixes/"+this.id+"/dead_tracks/"+e+".jsonh",n=this;return $.ajax
(t,{type:"DELETE"}).done(function(e){n.set("dead_tracks",e.dead_tracks)})},restoreTrackFromGrave
:function(e){var t=_.find(this.get("dead_tracks"),function(t){return t.id==e});t=
r.load(t),this.tracks.addTrack(t)}});return a}),define("views/trax_view",["lib/sessions"
],function(e){return Backbone.View.extend({close:function(e){_.isUndefined(e)&&(e=
{}),e=_.defaults(e,{keepDomElement:!1}),this.childViews&&_.each(_.compact(this.childViews
),function(e){e.close()}),e.keepDomElement?this.cleanupElement():this.remove(),this
.unbind&&this.unbind(),this.onClose&&this.onClose(),this.dormant=!0},cleanupElement
:function(){this.$el.empty(),this.undelegateEvents()},whenUserReadyOrChanged:function(
t){e.whenUserReadyOrChanged(t,this)},afterRender:function(){}})}),define("lib/_template_helpers"
,["global_trax","lib/trax_utils"],function(e,t){var n=function(e){this.initTplParams
(e)};return n.prototype.initTplParams=function(e){_.extend(this,e)},n.prototype.escape=
function(){return function(e){return escape(this[e])}},n.prototype.mix_cover_url=
function(){return function(e){return n.prototype.imgix_url(e,this.cover_urls)}},n
.prototype.mixpage_mix_cover_url=function(e,t){return n.prototype.mix_cover_url(e
)},n.prototype.avatar_url=function(){return function(e){return n.prototype.imgix_url
(e,this.avatar_urls)}},n.prototype.mix_cover_img=function(){var e=this.cover_urls
;return function(t){return'<img src="'+n.prototype.imgix_url(t,e)+'" class="cover" alt="'+
_.escape(this.name)+'"  />'}},n.prototype.avatar_img=function(){var e=this.avatar_urls
;return function(t){return'<img src="'+n.prototype.imgix_url(t,e)+'" class="avatar" alt="'+
_.escape(this.login)+'"/>'}},n.prototype.external_img=function(){return function(
e){return args=e.split(/,\s*/),src_name=args[0],size=args[1],src=this[src_name],window
.dpr!==undefined&&window.dpr>1&&(size*=2),'<img src="'+external_image_url(src,size
)+'" class="artist_photo" width="'+size+'"/>'}},n.prototype.mix_set_sort_path=function(
){return function(e){return this.web_path.match(/(\/recent|\/popular|\/hot)/)?this
.web_path.replace(/(\/recent|\/popular|\/hot)/,e):this.web_path+e}},n.prototype.sort_name=
function(){return{hot:"Trending","new":"Newest",recent:"Newest",popular:"Popular"
}[this.sort]},n.prototype.dj_mode=function(){return this.smart_type=="dj"},n.prototype
.collection_mode=function(){return this.smart_type=="collection"},n.prototype.cool_number=
function(){return function(e){return t.coolNumber(this[e])}},n.prototype.human_number=
function(){return function(e){return t.addCommas(this[e])}},n.prototype.human_date=
function(){return function(e){var t=this[e]!==null?this[e]:"";return n.prototype.
human_date_value()(t)}},n.prototype.human_date_value=function(){return function(e
){var t="";if(e){if(e.match("TZ|T")){var n=e.split(/[-TZ]/);t=new Date(Date.parse
(n.slice(0,3).join("/")+" "+n[3]))}else t=new Date(Date.parse(e));var r=["January"
,"February","March","April","May","June","July","August","September","October","November"
,"December"];return r[t.getUTCMonth()]+" "+t.getDate()+", "+t.getFullYear()}return""
}},n.prototype.human_duration=function(){return function(e){var t=this[e];return t==0?"0min"
:_.compact(_.collect([[60,"sec"],[60,"min"],[24,"hr"],[1e3,"d"]],function(e){if(t>0
){var n=t%e[0];t=(t-n)/e[0];if(e[1]!="sec")return n+e[1]}})).reverse().join(" ")}
},n.prototype.dynamic_font_size=function(){var e=this.login;if(!e)return;var t=[[18
,16],[15,18],[12,20],[10,24],[8,25],[6,26],[1,28]];for(var n=0;n<t.length;n++){var r=
t[n];if(e.length>=r[0])return r[1].toString()+"px"}},n.prototype.dynamic_font_size2=
function(){return function(e){return e.length>20?"oversize":""}},n.prototype.track_duration=
function(){var e=this.duration;return _.compact(_.collect([[60,"sec"],[60,"min"],
[24,"hr"],[1e3,"d"]],function(t){if(e>0){var n=e%t[0];return e=(e-n)/t[0],("0"+(n+
t[1])).substr(-2)}})).reverse().join(":")},n.prototype.soundcloud_year=function()
{return this.release_date.substring(0,4)},n.prototype.first_sentence=function(){return function(
e){var t=e.split(" "),n=t[0]||"";n=(n.match(/.+/g)||[]).join(" ");var r=t[1]||100
,i=_.map(n.split(". "),function(e){return e.trim()});return i[0].length>r?n.substring
(0,r)+"...":i.length>1?i[0]+".":n}},n.prototype.pluralize=function(){return function(
e){var t=e.split(" ");return this[t[0]]==1?t[1]:t[2]}},n.prototype.show_pagination=
function(){if(this.total_entries)return this.total_entries>this.per_page;if(this.
pagination)return this.pagination.total_pages>1},n.prototype.list_tags=function()
{var e,t=[];if(this.tag_list_cache)e=this.tag_list_cache.split(/,\s?/);else{if(!this
.top_tags)return"";e=this.top_tags}for(var r=0;r<e.length;r++)t.push(n.prototype.
tag(e[r],!1,!1,"tag"));return t.join("")},n.prototype.link_top_genre=function(){if(!
this.tags_list)return"";var e="";this["tags_list"].length==1?e+=this.tags_list[0]
:this["tags_list"].length==2?e+=this.tags_list[0]+" and "+this.tags_list[1]:_.each
(this.tags_list,function(t,n){n!=this["tags_list"].length-1?e+=t+", ":e+="and "+t
},this);var n=_.collect(this.tags_list,t.toUrlParam).join("+"),r='<a href="/explore/'+
n+'">'+e+"</a>";return r},n.prototype.list_genres=function(){if(!this.genres)return""
;var e=[];for(var t=0;t<this.genres.length;t++)e.push(n.prototype.tag(this.genres
[t],!1,!1,""));return e.join("")},n.prototype.list_artists=function(){if(!this.artist_tags
)return"";var e=[];for(var t=0;t<this.artist_tags.length;t++)e.push(n.prototype.artist_link
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
nonzero=function(){return this!==0},n}),define("lib/player/sm_track_player",["jquery.class"
,"global_trax"],function(e,t){var n=e.extend({initialize:function(e){_.extend(this
,Backbone.Events),_.bindAll(this,"seekTo","fadeOut","fadeIn","on30Seconds","onListen"
,"load","onSMReady"),this.soundManager=e.soundManager,this.currentTrack=null,this
.smSound=null,this.id=null,this.bindSoundManagerEvents(),this.loadCallsCount=0,this
.oldTrigger=this.trigger,this.loggedEvents=[],this.trigger=function(){arguments[0
].match(/every|whilePlaying/)||this.loggedEvents.push(arguments),this.oldTrigger.
apply(this,arguments)}},isTrackLoaded:function(){return!!this.smSound&&!!this.currentTrack
},isPlaying:function(){return!!this.smSound&&!this.smSound.paused},isPaused:function(
){return this.smSound&&this.smSound.paused},load:function(e,t,n){console.log("smTrackPlayer.load"
);if(!e)throw"CUSTOM no track is set";return this.currentTrack=e,this.soundManager
.onready(_.bind(function(){this.onSMReady(e,t,n)},this)),this.smSound},onSMReady:
function(e,t,n){e=e||this.currentTrack,console.log("soundManager.onReady");var r="t"+
e.id+(n?"eq":"");if(!this.currentTrack.get("track_file_stream_url"))throw"CUSTOM this.currentTrack has no track_file_stream_url"
;if(!_.isString(this.currentTrack.get("track_file_stream_url")))throw"CUSTOM this.currentTrack.get('track_file_stream_url') is not a string"
;var i=this;this.smSound=this.soundManager.createSound(_.extend({id:r,url:this.currentTrack
.get("track_file_stream_url"),onload:function(e){this.readyState==2&&i.trigger("trackError"
,i.currentTrack)},useEQData:n},this.soundManagerHandlers()));if(!this.smSound){this
.loadCallsCount+=1;if(this.loadCallsCount<5){_.delay(this.onSMReady,200,e,t);return}
throw this.smSound=null,"CUSTOM could not load smSound. Tried "+this.loadCallsCount+" times. SoundManager.ok(): "+
this.soundManager.ok()}this.id=r,t&&this.seekTo(t);try{this.smSound.onposition(3e4
,this.on30Seconds),this.smSound.onposition((this.currentTrack.get("report_delay_s"
)||1)*1e3,this.onListen)}catch(s){throw"CUSTOM this.smSound is not set. \nthis.currentTrack="+
JSON.stringify(this.currentTrack)+"\n"+JSON.stringify(this.loggedEvents)}return this
.trigger("trackLoaded",this),this.smSound},unload:function(){this.currentTrack=null
,this.smSound&&(this.stop(),this.soundManager.unload(this.smSound.sID))},play:function(
){if(!this.smSound)return;this.smSound.setVolume(this.soundManager.defaultOptions
.volume),this.soundManager.play(this.smSound.sID),this.trigger("play")},stop:function(
){if(!this.smSound)return;this.soundManager.stop(this.smSound.sID),this.trigger("stop"
)},resume:function(){if(!this.smSound)return;this.soundManager.resume(this.smSound
.sID),this.trigger("resume")},pause:function(e){if(!this.smSound)return;this.soundManager
.pause(this.smSound.sID),this.trigger("pause")},seekTo:function(e){if(e<3e3){this
.soundManager.unmute(this.smSound.sID),this.trigger("seekToFinished");return}if(this
.smSound&&this.smSound.readyState==2)return this.trigger("trackError",this.currentTrack
),!1;try{this.smSound.loaded&&e>this.smSound.duration&&(e=Math.ceil(this.smSound.
duration)-3e3)}catch(t){throw"CUSTOM this.smSound.duration error in SMTrackPlayer.seekTo().\n"+
t.message+"\nthis.smSound="+JSON.stringify(this.smSound)+"\n"+JSON.stringify(this
.loggedEvents)}try{!this.smSound.duration||this.smSound.duration<e?_.delay(this.seekTo
,200,e):(this.soundManager.setPosition(this.smSound.sID,e),this.soundManager.unmute
(this.smSound.sID),this.trigger("seekToFinished"))}catch(t){throw"CUSTOM this.smSound.duration error #2 in SMTrackPlayer.seekTo().\n"+
t.message+"\nthis.smSound="+JSON.stringify(this.smSound)+"\n"+JSON.stringify(this
.loggedEvents)}},setGlobalVolume:function(e){this.soundManager.defaultOptions.volume=
e},setVolume:function(e){if(!this.smSound)return;this.soundManager.setVolume(this
.smSound.sID,e)},currentVolume:function(){return this.isTrackLoaded()?this.smSound
.volume:null},mute:function(){this.isTrackLoaded()&&(this.soundManager.mute(this.
id),this.trigger("mute"))},unmute:function(){this.isTrackLoaded()&&(this.soundManager
.unmute(this.id),this.trigger("unmute"))},fadeOut:function(e,t){if(this.isPlaying
()){_.isUndefined(t)&&(t=this.id);var n=parseInt(this.currentVolume(),0);n>0?(this
.soundManager.setVolume(t,n-1),this.id==t&&_.delay(this.fadeOut,15,e,t)):_.isFunction
(e)?e():this.pause()}},fadeIn:function(){if(this.isTrackLoaded()){this.isPaused()&&
this.resume();var e=parseInt(this.currentVolume(),0);e<this.soundManager.defaultOptions
.volume&&(this.soundManager.setVolume(this.id,e+1),setTimeout(this.fadeIn,15))}},
soundManagerHandlers:function(){return{onfinish:_.bind(function(){this.trigger("finish"
)},this),onplay:_.bind(function(){this.trigger("onPlay")},this),whileplaying:_.bind
(function(){if(this.smSound){var e=parseInt(this.smSound.position/1e3,0);if(this.
lastPositionInSec!=e){var t=parseInt(this.smSound.durationEstimate/1e3,0);t>0&&(this
.trigger("everySecond",e,t),this.lastPositionInSec=e)}}},this)}},bindSoundManagerEvents
:function(){this.soundManager.ontimeout(function(e){if(!e.success){var n;if(e.error&&
e.error.type&&e.error.type==="FLASHBLOCK"){var r=FlashDetect,i=r.installed;if(!i)
return n='Looks like Flash is not installed. <a href="http://get.adobe.com/flashplayer/">Get it here</a>'
,this.soundManager.html5.m4a&&(n+=' or <a href="javascript:TRAX.switchToHtml5Player()">switch to HTML5</a>'
),t.show_flash_error(n),!1;if(r.major<this.soundManager.flashVersion)return n='Looks like your Flash plugin is outdated. <a href="http://get.adobe.com/flashplayer/">Get the update</a>'
,this.soundManager.html5.m4a&&(n+=' or <a href="javascript:TRAX.switchToHtml5Player()">switch to HTML5</a>'
),t.show_flash_error(n),!1;n='Looks like Flash is blocked, you need to whitelist this site (check the button below), or try <a href="/troubleshoot">troubleshooting</a>'
,this.soundManager.html5.m4a&&(n+=' or <a href="javascript:TRAX.switchToHtml5Player()">switch to HTML5</a>'
),t.show_flash_error(n),this.soundManager.onready(function(e){e.success&&t.show_flash_error
("Thanks! You can press play now.",!0)})}else n="Sounds won't play.",e&&e.error&&
e.error.type&&(n+=" (Error type is "+e.error.type+")."),n+=' You can try <a href="/troubleshoot">troubleshooting</a>.'
,this.soundManager.html5.m4a&&(n+=' or <a href="javascript:TRAX.switchToHtml5Player()">switch to HTML5</a>'
),t.show_flash_error(n)}})},on30Seconds:function(){this.trigger("seconds:30")},onListen
:function(){this.trigger("onListen")}});return n}),define("lib/cast_sender",["jquery.class"
,"global_trax"],function(e,t){if(typeof App.cast!="undefined")return App.cast;var n=
e.extend({initialize:function(){if(typeof App.cast!="undefined")return App.cast;this
.session=null,_.extend(this,Backbone.Events),_.bindAll(this,"receiverListener","sessionListener"
,"messageListener","onInitSuccess","onInitError","onMediaDiscovered","sendHandshake"
,"onRequestSessionSuccess","onTrackEnded","onRequestSessionError","updateProgress"
,"updatePlayState","isPlaying","isPaused","isInitialized","onMediaError","updateLoadingState"
,"stopCasting","isResumingSession","sessionResumed","poll","startPolling","stopPolling"
,"seekTo")},receiverListener:function(e){e===chrome.cast.ReceiverAvailability.AVAILABLE?
(console.log("Chromecast found"),this.devicesPresent=!0,this.trigger("castDeviceFound"
)):(this.devicesPresent=!1,console.log("No chromecasts available"))},sessionListener
:function(e){console.log("Session listener invoked"),this.session=e,this.connected=!0
;try{var n=this.mix=App.Collections.Mixes.load(e.media[0].media.customData.mix),r=
this.track=App.Collections.Tracks.load(e.media[0].media.customData.track),i=this.
smart_id=e.media[0].media.customData.smart_id}catch(s){}if(!App.views.mixPlayerView
){var o=$.Deferred();require(["pages/player"],function(e){o.resolve(n,i)}),$.when
(o).done(function(e,t){var n=App.views.mixPlayerView=new App.Views.MixPlayerView(
{mix:e,smart_id:t});n.mixPlayer.track=r,n.show()})}this.trigger("connected"),t.chromecasting=!0
,this.startPolling(),e.addMessageListener(CHROMECAST_MSG_NS,this.messageListener)
,e.media.length!==0&&this.onMediaDiscovered("onRequestSessionSuccess",e.media[0])
},messageListener:function(e,t){console.log("cast_sender messageListener",e,t);try{
var n=JSON.parse(t);if(n.method=="progress_update")return this.updateProgress(n.progress
,n.duration);if(n.method=="play_state_update")return this.updatePlayState(n.playing
);if(n.method=="loading_update")return this.updateLoadingState(n.loading);if(n.method=="ended"
)return this.onTrackEnded();if(n.method=="disconnect")return this.stopCasting()}catch(
r){console.log("Bad message format",r)}},onTrackEnded:function(){console.log("cast_sender onTrackEnded"
),this.trigger("finish")},updateProgress:function(e,t){console.log("cast_sender updateProgress"
,e,t),this.positionInSec=e,this.trigger("updateProgress",e,t)},updatePlayState:function(
e){console.log("cast_sender updatePlayState",e),this.playing=!!e,this.trigger("updatePlayState"
,this.playing)},updateLoadingState:function(e){console.log("cast_sender updateLoadingState"
,e),e?this.trigger("loading"):this.trigger("doneLoading")},onInitSuccess:function(
){console.log("cast_sender initialized"),this.initialized=!0,this.trigger("initialized"
)},onInitError:function(){console.log("cast_sender Initialization failure")},onMediaDiscovered
:function(e,t){console.log("cast_sender onMediaDiscovered",e,t),currentMedia=t},onMediaError
:function(e){console.log("cast_sender onMediaError",e),this.trackLoaded=!1,this.trigger
("trackError")},onMediaSuccess:function(e){console.log("cast_sender onMediaSuccess"
,e),this.trackLoaded=!0},sendMessage:function(e){console.log("cast_sender sendMessage"
,e);if(!this.session)return console.log("cast_sender sendMessage: no Session"),this
.stopCasting();var t=this;this.session.sendMessage(CHROMECAST_MSG_NS,e,function(e
){console.log("cast_sender sendMessage Success",e)},function(n){console.log("cast_sender sendMessage Failure:"
,n),t.stopCasting(),TraxEvents.chromeCastError(n)})},sendHandshake:function(){console
.log("cast_sender sendHandshake"),this.sendMessage({method:"handshake",device_id:"12345"
,play:!1})},onRequestSessionSuccess:function(e){console.log("cast_sender onRequestSessionSuccess"
,e),this.session&&this.session.sessionId==e.sessionId?console.log("Session resumed"
):(this.session=e,this.sendHandshake({play:!0})),this.connected=!0,this.trigger("connected"
),this.startPolling(),t.chromecasting=!0,TraxEvents.launchChromecast(App.views.mixPlayerView
.mix.id),e.addMessageListener(CHROMECAST_MSG_NS,this.messageListener)},isResumingSession
:function(){return!!this.resumingSession},sessionResumed:function(){console.log("cast_sender sessionResumed"
),this.resumingSession=!1,this.updateLoadingState(!1),this.poll()},poll:function(
){this.sendMessage({method:"poll"})},onRequestSessionError:function(e){console.log
("cast_sender onRequestSessionError",e)},stopCasting:function(){console.log("cast_sender stopCasting"
);var e=this,n=function(){e.connected=!1,e.session=null,e.trigger("terminated")};
this.session&&this.session.stop(n,n),this.stopPolling(),t.chromecasting=!1},startPolling
:function(){this.pollInterval=setInterval(this.poll,5e3)},stopPolling:function(){
console.log("cast_sender stopPolling"),clearInterval(this.pollInterval)},trackMetaData
:function(e){var t=new chrome.cast.media.MusicTrackMediaMetadata;return t.title=e
.name,t.artist=e.performer,t},playMix:function(e,t){console.log("cast_sender playMix"
,t),this.playToken=e,this.mix=t,this.sendMessage({method:"playMix",playToken:e,mix
:t})},playTrack:function(e,t,n){console.log("cast_sender playTrack",e,t,n);var r=
this,i,s=!0,o=new chrome.cast.media.MediaInfo(t.track_file_stream_url);o.contentType="audio/mp4"
,o.duration=t.duration,o.metaData=this.trackMetaData(t),o.customData={mix:e,track
:t,positionInMs:n},i=new chrome.cast.media.LoadRequest(o),this.session.loadMedia(
i,function(){r.trigger("updatePlayState",s)},r.onMediaError)},isPaused:function()
{return!this.playing},isPlaying:function(){return!!this.playing},isDevicePresent:
function(){return!!this.devicesPresent},isInitialized:function(){return!!this.initialized
},isConnected:function(){return!!this.connected},pause:function(){this.sendMessage
({method:"action",action:"pause"})},seekTo:function(e){this.sendMessage({method:"action"
,action:"seek",time:e})},setVolume:function(e){this.session.setReceiverVolumeLevel
(e)},resume:function(){this.sendMessage({method:"action",action:"resume"})},skip:
function(){this.sendMessage({method:"action",action:"skip"})},launchChromecastApp
:function(){console.log("cast_sender launchChromecastApp");if(App.cast&&App.cast.
session)this.session=App.cast.session,console.log("Resuming old session"),this.onRequestSessionSuccess
(this.session);else{console.log("Launching chromecast app");var e=new chrome.cast
.SessionRequest(CHROMECAST_APP_ID);chrome.cast.requestSession(this.onRequestSessionSuccess
,this.onRequestSessionError,e)}}});return App.cast=new n,App.cast}),define("lib/player/cc_track_player"
,["jquery.class","lib/cast_sender"],function(e,t){var n=e.extend({initialize:function(
e){_.extend(this,Backbone.Events),_.bindAll(this,"onUpdatePlayState","onTrackFinish"
,"onUpdateProgress","onTrackError","doneLoading"),this.globalVolume=100,this.currentTrack=
null,this.bindEvents()},bindEvents:function(){t.on("updateProgress",this.onUpdateProgress
),t.on("updatePlayState",this.onUpdatePlayState),t.on("loading",this.loading),t.on
("doneLoading",this.doneLoading),t.on("finish",this.onTrackFinish),t.on("trackError"
,this.onTrackError)},onTrackFinish:function(){this.trigger("finish")},isTrackLoaded
:function(){return!0},isPlaying:function(){return t.isPlaying()},isPaused:function(
){return t.isPaused()},load:function(e,t){this.currentTrack=e,this.positionInMs=t
,this.trigger("trackLoaded",this)},unload:function(){this.currentTrack=null},onTrackError
:function(){this.trigger("trackError",this.currentTrack)},onUpdateProgress:function(
e,t){this.trigger("everySecond",e,t)},onUpdatePlayState:function(e){this.trigger(
e?"onPlay":"pause")},doneLoading:function(){this.trigger("seekToFinished")},play:
function(){t.playTrack(this.mixToSendToChromeCast(),this.currentTrack.toJSON(),this
.positionInMs),this.positionInMs=null,this.trigger("play")},stop:function(){this.
trigger("stop")},pause:function(){t.pause(),this.trigger("pause")},resume:function(
){t.resume(),this.trigger("resume")},setGlobalVolume:function(e){this.volume=e,t.
setVolume(e/100)},setVolume:function(e){this.volume=e,t.setVolume(e/100)},currentVolume
:function(){return this.volume},mute:function(){this.trigger("mute")},unmute:function(
){this.trigger("unmute")},fadeOut:function(){},fadeIn:function(){},mixToSendToChromeCast
:function(){return App.views.mixPlayerView.mixPlayer.mix.toJSON()}});return n}),define
("lib/player/track_player",["global_trax","jquery.class","lib/player/sm_track_player"
,"lib/player/cc_track_player"],function(e,t,n,r){var i=t.extend({initialize:function(
e){_.extend(this,Backbone.Events),_.bindAll(this,"onEverySecond","on30Seconds","onListen"
,"onTrackPlayerPlay","onTrackPlayerStop","onTrackPlayerResume","onTrackPlayerPause"
,"onTrackPlayerSeekToFinished","onTrackPlayerMute","onTrackPlayerUnmute","onTrackPlayerFinish"
,"onOnPlay","onTrackError","onTrackLoaded"),this.currentPlayer=null,this.soundManagerPlayer=
null,this.soundManager=e.soundManager||soundManager,this.switchPlayer("soundManager"
)},id:function(){return this.currentPlayer.id},name:function(){return this.isChromeCast
()?"cc":"sm"},isSoundManager:function(){return this.soundManagerPlayer&&this.currentPlayer==
this.soundManagerPlayer},isChromeCast:function(){return this.chromeCastPlayer&&this
.currentPlayer==this.chromeCastPlayer},initSoundManagerPlayer:function(){if(this.
soundManagerPlayer)return;this.soundManagerPlayer=new n({soundManager:this.soundManager
})},initChromeCastPlayer:function(){if(this.chromeCastPlayer)return;this.chromeCastPlayer=new 
r},switchPlayer:function(t){this.unbindEvents(this.currentPlayer),t=="chromecast"?
(this.initChromeCastPlayer(),this.currentPlayer=this.chromeCastPlayer,e.clearCheckPlayingWindowTimer
()):(this.initSoundManagerPlayer(),this.currentPlayer=this.soundManagerPlayer),this
.bindEvents(this.currentPlayer),this.setGlobalVolume(this.globalVolume),this.setVolume
(this.globalVolume)},isTrackLoaded:function(){return this.currentPlayer.isTrackLoaded
()&&this.currentPlayer.currentTrack},isPlaying:function(){return this.currentPlayer
.isPlaying()},isPaused:function(){return this.currentPlayer.isPaused()},loadTrackIfNecessary
:function(e,t){if(!t&&!this.currentPlayer.currentTrack)return;t&&e&&(!this.currentPlayer
.currentTrack||this.currentPlayer.currentTrack.id&&this.currentPlayer.currentTrack
.id!=e.id)?this.load(e,this.currentPositionInMs):t&&(this.seekTo(this.currentPositionInMs
),this.play())},load:function(e,t){this.newTrack=e,this.currentPlayer.load(e,t)},
unload:function(){this.currentPlayer.unload()},play:function(){console.log("trackPlayer.play()"
,this.name()),this.currentPlayer.play()},stop:function(){this.currentPlayer.stop(
)},resume:function(){this.currentPlayer.resume()},pause:function(e){this.currentPlayer
.pause()},seekTo:function(e){console.log("seekTo",e),this.currentPlayer.seekTo(e)
},setGlobalVolume:function(e){this.globalVolume=e,this.currentPlayer.setGlobalVolume
(e)},setVolume:function(e){this.currentPlayer.setVolume(e)},currentVolume:function(
){this.currentPlayer.currentVolume()},mute:function(){this.currentPlayer.mute()},
unmute:function(){this.currentPlayer.unmute()},fadeOut:function(e,t){this.currentPlayer
.fadeOut(e,t)},fadeIn:function(){this.currentPlayer.fadeIn()},bindEvents:function(
e){e.on("everySecond",this.onEverySecond),e.on("seconds:30",this.on30Seconds),e.on
("onListen",this.onListen),e.on("play",this.onTrackPlayerPlay),e.on("stop",this.onTrackPlayerStop
),e.on("resume",this.onTrackPlayerResume),e.on("pause",this.onTrackPlayerPause),e
.on("seekToFinished",this.onTrackPlayerSeekToFinished),e.on("mute",this.onTrackPlayerMute
),e.on("unmute",this.onTrackPlayerUnmute),e.on("finish",this.onTrackPlayerFinish)
,e.on("onPlay",this.onOnPlay),e.on("trackError",this.onTrackError),e.on("trackLoaded"
,this.onTrackLoaded)},unbindEvents:function(e){e&&e.off()},onEverySecond:function(
e,t){this.currentPositionInMs=e*1e3,this.trigger("everySecond",e,t)},on30Seconds:
function(){this.trigger("seconds:30")},onListen:function(){this.trigger("onListen"
)},onTrackPlayerPlay:function(){console.log("onTrackPlayerPlay"),this.isSoundManager
()&&e.windowIsPlaying(),this.trigger("play")},onTrackPlayerStop:function(){this.trigger
("stop")},onTrackPlayerResume:function(){console.log("onTrackPlayerResume"),this.
trigger("resume")},onTrackPlayerPause:function(){this.trigger("pause")},onTrackPlayerSeekToFinished
:function(){this.trigger("seekToFinished")},onTrackPlayerMute:function(){this.trigger
("mute")},onTrackPlayerUnmute:function(){this.trigger("unmute")},onTrackPlayerFinish
:function(){console.log("onTrackPlayerFinish"),this.trigger("finish")},onOnPlay:function(
){this.trigger("onPlay")},onTrackError:function(e){this.trigger("trackError",e)},
onTrackLoaded:function(e){var t=!this.oldTrack||this.oldTrack.id!=this.newTrack.id
;this.oldTrack=this.newTrack,e==this.currentPlayer&&this.trigger("trackLoaded",t)
}});return i}),define("collections/mixes",["collections/_base_collection","models/mix"
],function(e,t){if(typeof App.Collections.Mixes!="undefined")return App.Collections
.Mixes;var n=e.extend({model:t});return App.Collections.Mixes=new n,App.Collections
.Mixes}),define("lib/player/mix_player",["global_trax","jquery.class","lib/player/track_player"
,"lib/client_storage","lib/events","lib/jsonh.jquery","collections/tracks","collections/mixes"
,"lib/cast_sender"],function(e,t,n,r,i,s,o,u,a){var f=t.extend({initialize:function(
t){e.mixPlayer=this,_.extend(this,Backbone.Events),_.bindAll(this,"doneLoading","play"
,"pause","next","fadeOut","fadeIn","onListen","on30sec","onPlay","onEverySecond","reportTrackError"
,"onTrackPlayerResume","onTrackPlayerPause","onTrackLoaded","onFinish","launchCast"
,"onCastConnected","stopCasting"),this.mix=t.mix,this.smart_id=t.smart_id,this.mixPlayerView=
t.mixPlayerView,this.started=!1,this.playing=!1,this.loading=!1,this.casting=!1,this
.track=null,this.firstPlay=!0,this.initTrackPlayer(t),this.setVolume(r.get("vol")||80
)},startLoading:function(){this.loading=!0,this.trigger("startLoading")},doneLoading
:function(){this.loading=!1,this.trigger("doneLoading")},initTrackPlayer:function(
e){this.trackPlayer=new n({soundManager:e.soundManager||soundManager}),this.trackPlayer
.bind("everySecond",this.onEverySecond),this.trackPlayer.bind("onPlay",this.onPlay
),this.trackPlayer.bind("onListen",this.onListen),this.trackPlayer.bind("seconds:30"
,this.on30sec),this.trackPlayer.bind("trackError",this.reportTrackError),this.trackPlayer
.bind("pause",this.onTrackPlayerPause),this.trackPlayer.bind("resume",this.onTrackPlayerResume
),this.trackPlayer.bind("seekToFinished",this.doneLoading),this.trackPlayer.bind("finish"
,this.onFinish),this.trackPlayer.bind("trackLoaded",this.onTrackLoaded)},onPlay:function(
){console.log("mixPlayer onPlay"),this.playing=!0,this.trigger("smPlay"),this.doneLoading
();var e=this.getPositionFromCookie();e&&(this.startLoading(),this.trackPlayer.mute
(),e>(this.track.get("report_delay_s")||30)*1e3&&(this.startReported=!0,this.playReported=!0
),this.trackPlayer.seekTo(e)),this.updateTitle()},onEverySecond:function(e,t){this
.whilePlaying(e,t)},onTrackPlayerPause:function(){this.switchingPlayer||(this.playing=!1
,this.trigger("pause"),this.updateTitle())},onTrackPlayerResume:function(){this.switchingPlayer||
(this.playing=!0,this.trigger("resume"),this.updateTitle())},updateTitle:function(
){this.playing&&!document.title.match(/^►/)?document.title="► "+document.title:!this
.playing&&document.title.match(/^►/)&&(document.title=document.title.replace("► "
,""))},play:function(t){console.log("MixPlayer.play()",t),this.started=!0,this.trackPlayer
.isSoundManager()&&e.windowIsPlaying(),this.trackPlayer.isTrackLoaded()&&this.trackPlayer
.isPaused()?this.resume():this.trackPlayer.isTrackLoaded()&&this.trackPlayer.isPlaying
()?(this.pause(),this.setsAPI("pause")):(console.log("about to setsApi(play)"),this
.setsAPI("play",_.bind(function(e){e.smart_id&&(this.smart_id=e.smart_id)},this),
t)),i.startMix(this.mix,t),this.promptSignup=!0},pause:function(){this.trackPlayer
.pause()},toggle:function(){this.playing?this.pause():this.play()},fadeOut:function(
e,t){this.fadingOut=!0,this.trackPlayer.fadeOut(e,t)},fadeIn:function(){this.fadingOut=!1
,this.trackPlayer.fadeIn()},resume:function(){this.trigger("resume"),this.setsAPI
("resume"),this.fadingOut?this.fadeIn():this.trackPlayer.resume()},onFinish:function(
){this.next()},next:function(){this.set&&this.set.after_end?this.timeForNextMix()
:this.setsAPI("next")},skip:function(){if(!this.set)return this.playNextMix("go_button"
),!1;if(this.set.after_end)this.pause(),this.timeForNextMix();else{try{var e=this
.trackPlayer.currentPositionInMs/1e3;TraxEvents.track("skip",{mix_id:this.mix.id,
position:e})}catch(t){}this.setsAPI("skip")}},setVolume:function(e){e>100&&(e=100
),e<=0&&(e=0),this.trackPlayer.setGlobalVolume(e),this.trackPlayer.setVolume(e),r
.set("vol",e)},setsAPI:function(e,t,n){if(!this.checkPlayableAndCookies())return!1
;this.trigger(e),_.indexOf(["pause","resume","report","track_started"],e)===-1&&this
.startLoading(),this.withToken(_.bind(function(){s.now_with_context("/sets/"+this
.playToken+"/"+e,this.setsParams(e,n),this,function(n){if(n.success){_.isFunction
(t)&&t(n);if(_.indexOf(["report","next_mix","track_started"],e)>=0)return;n.set&&
(n.notices&&n.set.track&&n.set.track.full_length==0&&(n.set.track.sample_notice=n
.notices,n.notices=!1),this.updateSetAndPlay(n.set))}else this.doneLoading();if(n
.notices){options={};if(n.notices.match("allow more than one listen"))options.timeout=15e3
,options.callback=_.bind(function(){this.pause(),this.timeForNextMix()},this);else if(
n.notices.match("license"))this.trigger("skip_not_allowed");else if(n.notices.match
(/international|region/))return this.trigger("regional_blocking"),!1;this.trigger
("dmcaWarning",n.notices,options)}},{spinner:!1,with_lock:!0,ignore_flash:!0})},this
))},unloadTrack:function(){this.track&&(this.track.trigger("stopped"),this.track=
null),this.startReported=!1,this.playReported=!1,this.trackPlayer.stop(),this.trackPlayer
.unload()},updateSetAndPlay:function(e){this.unloadTrack(),this.set=e,this.track=
o.load(e.track),this.set.at_beginning&&this.trigger("atMixBeginning"),this.set.at_end&&
(this.playing=!1,this.timeForNextMix(),this.trigger("atMixEnd")),this.set.at_last_track&&
this.trigger("atMixLastTrack"),this.track&&(this.trackPlayer.load(this.track),this
.track.trigger("playing"),this.track.get("track_file_stream_url").match(/feature\.fm/
)&&this.mixPlayerView.loadFeatureFmTracking(this.track))},onTrackLoaded:function(
e){e&&(i.playTrack(this.track,this.mix),this.track&&!this.track.get("sponsored")&&
this.mix.tracksPlayed.push(this.track),this.trigger("trackPlay",{track:this.track
})),this.trackPlayer.play()},switchToChromeCastPlayer:function(e){console.log("switchToChromeCastPlayer"
,e),e=e||{},this.switchingPlayer=!0;var t=this.trackPlayer.isPlaying()||e.play;this
.trackPlayer.pause(),this.trackPlayer.switchPlayer("chromecast"),this.switchingPlayer=!1
,this.trigger("switchedToChromeCast"),this.trackPlayer.load(this.track)},switchToSoundManagerPlayer
:function(e){console.log("switchToSoundManagerPlayer",e),e=e||{},this.switchingPlayer=!0
;var t=this.trackPlayer.isPlaying()||e.play;this.trackPlayer.pause(),this.trackPlayer
.switchPlayer("soundManager"),this.trackPlayer.loadTrackIfNecessary(this.track,t)
,this.switchingPlayer=!1,this.trigger("switchedToSoundManager",{reason:e.reason})
},revertToSoundManagerTemporarily:function(e){this.switchToSoundManagerPlayer({play
:!0,reason:e.reason})},whilePlaying:function(e,t){this.trigger("whilePlaying",e,t
),r.set("m"+this.mix.id,this.trackPlayer.id()+"-"+e*1e3)},getPositionFromCookie:function(
){var e=r.get("m"+this.mix.id);if(e&&this.trackPlayer.isTrackLoaded()){var t=e.split
("-");if(t[0]==this.trackPlayer.id())return t[1]}return!1},onListen:function(){console
.log("listening!"),e.currentUser&&e.currentUser.get("connected_facebook_user")&&e
.currentUser.get("connected_facebook_user").post_listens&&(this.startReported||(this
.startReported=!0,this.setsAPI("track_started"))),this.playReported||(this.playReported=!0
,this.setsAPI("report"),i.reportTrack(this.track,this.mix),console.log("reporting play at "+
this.trackPlayer.currentPositionInMs/1e3+" seconds"))},on30sec:function(){this.track
.get("full_length")||(this.fadeOut(),this.next())},isPlaying:function(){return this
.playing},withToken:function(e){!this.playToken&&!this.loadTokenFromCookie()?s.now_with_context
("/sets/new",this,function(t){t.success&&(this.saveNewToken(t.play_token),e())},{
spinner:!1}):e()},saveNewToken:function(e){this.playToken=e,cookie.set("play_token"
,e)},loadTokenFromCookie:function(){var e=cookie.get("play_token");return e&&e!="null"&&
e!="undefined"?this.playToken=e:(e=parseInt(Math.random()*1e9,0),this.saveNewToken
(e)),e},setsParams:function(e,t){var n={player:this.currentlyPlayingWith(),include
:"track[faved+annotation+artist_details]"},r={click:"mix_start_click",quick:"mix_start_click"
,auto:"mix_start_click",skip_mix:"skip_mix",end_of_mix:"end_of_mix",go_button:"end_of_mix"
};playTypeReport=r[t],playTypeReport&&(this.firstPlay&&playTypeReport=="mix_start_click"&&
(playTypeReport="first_mix_start_click",this.firstPlay=!1),n.play_type=playTypeReport
),e=="next_mix"&&(n.include+=",user,mix_set"),this.mix&&(n.mix_id=this.mix.id);if(
e=="play"&&playTypeReport=="mix_start_click"||playTypeReport=="first_mix_start_click"
)n.smart_id=this.smart_id;return this.track&&(n.track_id=this.track.id),n},currentlyPlayingWith
:function(){return"sm"},cookiesRequired:function(){return window!=parent?!1:!0},checkPlayableAndCookies
:function(){return!this.mix&&!this.track?(e.show_flash_error("A track_id or mix_id need to be set."
),!1):this.cookiesRequired()&&!cookie.enabled()?(e.show_flash_error('Sorry, but you must <a href="http://www.google.com/cookies.html" rel="external">allow browser cookies</a> to play mixes on 8tracks.'
),!1):!0},reportTrackError:function(e){e.set("unplayable",!0),s.now("/tracks/"+e.
id+"/report_error",{stream_url:e.get("track_file_stream_url"),internet_connection
:navigator.onLine},_.bind(function(e){_.delay(_.bind(function(){this.next()},this
),1500)},this))},timeForNextMix:function(e){if(App.Trax.showAds()&&this.set&&!this
.set.after_end&&!e)return this.mixPlayerView.playFeatureFmTrack();switch(this.nextMixPrefs
()){case"stay":return!1;case"go":return this.playNextMix("go_button"),!1;default:
return this.setsAPI("next_mix",_.bind(function(e){this.nextMix=u.load(e.next_mix)
,this.smart_id=e.smart_id,require(["views/next_mix_view"],_.bind(function(e){this
.doneLoading(),(new e({nextMix:this.nextMix,mixPlayer:this})).show()},this))},this
)),!1}},skipMix:function(){i.skipMix(),this.setsAPI("skip_mix",_.bind(function(e)
{this.nextMix=u.load(e.next_mix),this.smart_id=e.smart_id,this.goToNextMix("skip_mix"
)},this))},playNextMix:function(e){this.fadeOut(this.unloadTrack()),this.nextMix?
(i.playNextMix(e),this.goToNextMix(e)):this.setsAPI("next_mix",_.bind(function(t)
{this.nextMix=u.load(t.next_mix),this.smart_id=t.smart_id,this.playNextMix(e)},this
));return},goToNextMix:function(e){this.mix=this.nextMix,this.nextMix=null,this.trigger
("nextMix",e)},nextMixPrefs:function(){return e.currentUser?e.currentUser.get("next_mix_prefs"
):r.get("next_mix_prefs")},launchCast:function(){this.on("connected",this.onCastConnected
),a.launchChromecastApp(this)},stopCasting:function(){a.stopCasting(),this.switchToSoundManagerPlayer
()},onCastConnected:function(){console.log("Connected to chromecast"),this.switchToChromeCastPlayer
()}});return f}),define("hogan",["require","exports","module"],function(e,t,n){var r=
{};(function(e,t){function a(e){return String(e===null||e===undefined?"":e)}function f
(e){return e=a(e),u.test(e)?e.replace(n,"&amp;").replace(r,"&lt;").replace(i,"&gt;"
).replace(s,"&#39;").replace(o,"&quot;"):e}e.Template=function(e,n,r,i){this.r=e||
this.r,this.c=r,this.options=i,this.text=n||"",this.buf=t?[]:""},e.Template.prototype=
{r:function(e,t,n){return""},v:f,t:a,render:function(t,n,r){return this.ri([t],n||
{},r)},ri:function(e,t,n){return this.r(e,t,n)},rp:function(e,t,n,r){var i=n[e];return i?
(this.c&&typeof i=="string"&&(i=this.c.compile(i,this.options)),i.ri(t,n,r)):""},
rs:function(e,t,n){var r=e[e.length-1],i,s;typeof r=="function"&&(i=r,s=this.buf.
length);if(!l(r)){n(e,t,this);if(i){var o=this.buf.substr(s);this.buf=this.buf.substr
(0,s),bunc=this.binderator(i,e[e.length-2]),this.b(bunc(o))}return}for(var u=0;u<
r.length;u++)e.push(r[u]),n(e,t,this),e.pop()},binderator:function(e,t){var n=Function
.prototype.bind;if(e.bind===n&&n)return n.apply(e,Array.prototype.slice.call(arguments
,1));var r=Array.prototype.slice.call(arguments,2);return function(){return e.apply
(t,r.concat(Array.prototype.slice.call(arguments)))}},s:function(e,t,n,r,i,s,o){var u
;if(l(e)&&e.length===0)return!1;var a;return typeof e=="function"&&(e=this.ms(e,t
,n),typeof e=="function"&&(a=e)),u=e===""||!!e,!r&&u&&t&&(a?t.push(a):t.push(typeof 
e=="object"?e:t[t.length-1])),u},ms:function(e,t,n){var r=t[t.length-1];return e.
call(r)},d:function(e,t,n,r){var i=e.split("."),s=this.f(i[0],t,n,r),o=null;if(e==="."&&
l(t[t.length-2]))return t[t.length-1];for(var u=1;u<i.length;u++)s?(o=s,typeof s[
i[u]]=="function"?s=s[i[u]]():s=s[i[u]]||""):s="";return r&&!s?!1:(!r&&typeof s=="function"&&
(t.push(o),s=this.lv(s,t,n),t.pop()),s)},f:function(e,t,n,r){var i=!1,s=null,o=!1
;for(var u=t.length-1;u>=0;u--){s=t[u];if(s&&typeof s=="object"&&e in s){i=s[e],o=!0
;break}}return o?(!r&&typeof i=="function"&&(i=this.lv(i,t,n)),i):r?!1:""},ho:function(
e,t,n,r,i){var s=this.c,o=this.options||{};o.delimiters=i;var r=e.call(t,r);return r=
r==null?String(r):r.toString(),this.b(s.compile(r,o).render(t,n)),!1},b:t?function(
e){this.buf.push(e)}:function(e){this.buf+=e},fl:t?function(){var e=this.buf.join
("");return this.buf=[],e}:function(){var e=this.buf;return this.buf="",e},ls:function(
e,t,n,r,i,s,o){var u=t[t.length-1],a=null;if(!r&&this.c&&e.length>0)return this.ho
(e,u,n,this.text.substring(i,s),o);a=e.call(u);if(typeof a=="function"){if(r)return!0
;if(this.c)return this.ho(a,u,n,this.text.substring(i,s),o)}return a},lv:function(
e,t,n){var r=t[t.length-1],i=e.call(r);if(typeof i=="function"){i=a(i.call(r));if(
this.c&&~i.indexOf("{{"))return this.c.compile(i,this.options).render(r,n)}return a
(i)}};var n=/&/g,r=/</g,i=/>/g,s=/\'/g,o=/\"/g,u=/[&<>\"\']/,l=Array.isArray||function(
e){return Object.prototype.toString.call(e)==="[object Array]"}})(typeof t!="undefined"?
t:r),function(e){function u(e){e.n.substr(e.n.length-1)==="}"&&(e.n=e.n.substring
(0,e.n.length-1))}function a(e){return e.trim?e.trim():e.replace(/^\s*|\s*$/g,"")
}function f(e,t,n){if(t.charAt(n)!=e.charAt(0))return!1;for(var r=1,i=e.length;r<
i;r++)if(t.charAt(n+r)!=e.charAt(r))return!1;return!0}function l(e,t,n,r){var i=[
],s=null,o=null;while(e.length>0){o=e.shift();if(o.tag=="#"||o.tag=="^"||c(o,r))n
.push(o),o.nodes=l(e,o.tag,n,r),i.push(o);else{if(o.tag=="/"){if(n.length===0)throw new 
Error("Closing tag without opener: /"+o.n);s=n.pop();if(o.n!=s.n&&!h(o.n,s.n,r))throw new 
Error("Nesting error: "+s.n+" vs. "+o.n);return s.end=o.i,i}i.push(o)}}if(n.length>0
)throw new Error("missing closing tag: "+n.pop().n);return i}function c(e,t){for(
var n=0,r=t.length;n<r;n++)if(t[n].o==e.n)return e.tag="#",!0}function h(e,t,n){for(
var r=0,i=n.length;r<i;r++)if(n[r].c==e&&n[r].o==t)return!0}function p(e){return e
.replace(s,"\\\\").replace(n,'\\"').replace(r,"\\n").replace(i,"\\r")}function d(
e){return~e.indexOf(".")?"d":"f"}function v(e){var t="";for(var n=0,r=e.length;n<
r;n++){var i=e[n].tag;i=="#"?t+=m(e[n].nodes,e[n].n,d(e[n].n),e[n].i,e[n].end,e[n
].otag+" "+e[n].ctag):i=="^"?t+=g(e[n].nodes,e[n].n,d(e[n].n)):i=="<"||i==">"?t+=
y(e[n]):i=="{"||i=="&"?t+=b(e[n].n,d(e[n].n)):i=="\n"?t+=E('"\\n"'+(e.length-1==n?""
:" + i")):i=="_v"?t+=w(e[n].n,d(e[n].n)):i===undefined&&(t+=E('"'+p(e[n])+'"'))}return t
}function m(e,t,n,r,i,s){return"if(_.s(_."+n+'("'+p(t)+'",c,p,1),'+"c,p,0,"+r+","+
i+',"'+s+'")){'+"_.rs(c,p,"+"function(c,p,_){"+v(e)+"});c.pop();}"}function g(e,t
,n){return"if(!_.s(_."+n+'("'+p(t)+'",c,p,1),c,p,1,0,0,"")){'+v(e)+"};"}function y
(e){return'_.b(_.rp("'+p(e.n)+'",c,p,"'+(e.indent||"")+'"));'}function b(e,t){return"_.b(_.t(_."+
t+'("'+p(e)+'",c,p,0)));'}function w(e,t){return"_.b(_.v(_."+t+'("'+p(e)+'",c,p,0)));'
}function E(e){return"_.b("+e+");"}var t=/\S/,n=/\"/g,r=/\n/g,i=/\r/g,s=/\\/g,o={"#"
:1,"^":2,"/":3,"!":4,">":5,"<":6,"=":7,_v:8,"{":9,"&":10};e.scan=function(n,r){function S
(){v.length>0&&(m.push(new String(v)),v="")}function x(){var e=!0;for(var n=b;n<m
.length;n++){e=m[n].tag&&o[m[n].tag]<o._v||!m[n].tag&&m[n].match(t)===null;if(!e)
return!1}return e}function T(e,t){S();if(e&&x())for(var n=b,r;n<m.length;n++)m[n]
.tag||((r=m[n+1])&&r.tag==">"&&(r.indent=m[n].toString()),m.splice(n,1));else t||
m.push({tag:"\n"});g=!1,b=m.length}function N(e,t){var n="="+E,r=e.indexOf(n,t),i=
a(e.substring(e.indexOf("=",t)+1,r)).split(" ");return w=i[0],E=i[1],r+n.length-1
}var i=n.length,s=0,l=1,c=2,h=s,p=null,d=null,v="",m=[],g=!1,y=0,b=0,w="{{",E="}}"
;r&&(r=r.split(" "),w=r[0],E=r[1]);for(y=0;y<i;y++)h==s?f(w,n,y)?(--y,S(),h=l):n.
charAt(y)=="\n"?T(g):v+=n.charAt(y):h==l?(y+=w.length-1,d=o[n.charAt(y+1)],p=d?n.
charAt(y+1):"_v",p=="="?(y=N(n,y),h=s):(d&&y++,h=c),g=y):f(E,n,y)?(m.push({tag:p,
n:a(v),otag:w,ctag:E,i:p=="/"?g-E.length:y+w.length}),v="",y+=E.length-1,h=s,p=="{"&&
(E=="}}"?y++:u(m[m.length-1]))):v+=n.charAt(y);return T(g,!0),m},e.generate=function(
t,n,r){var i='var _=this;_.b(i=i||"");'+v(t)+"return _.fl();";return r.asString?"function(c,p,i){"+
i+";}":new e.Template(new Function("c","p","i",i),n,e,r)},e.parse=function(e,t,n)
{return n=n||{},l(e,"",[],n.sectionTags||[])},e.cache={},e.compile=function(e,t){
t=t||{};var n=e+"||"+!!t.asString,r=this.cache[n];return r?r:(r=this.generate(this
.parse(this.scan(e,t.delimiters),e,t),e,t),this.cache[n]=r)}}(typeof t!="undefined"?
t:r)}),define("text",["module"],function(e){"use strict";var t=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"
,"Msxml2.XMLHTTP.4.0"],n=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im
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
,s;return{load:o,write:f}}),define("hgn!templates/tracks/_track_played",["hogan"]
,function(e){function n(){return t.render.apply(t,arguments)}var t=new e.Template
(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="track_details_container '
),r.s(r.f("sample_notice",e,t,1),e,t,0,54,71,"{{ }}")&&(r.rs(e,t,function(e,t,n){
n.b("tooltip_container")}),e.pop()),r.b('">'),r.b("\n"+n),r.s(r.f("sample_notice"
,e,t,1),e,t,0,110,199,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<div class="black_tooltip black_tooltip_up sample_notice_tooltip">'
),n.b(n.v(n.f("sample_notice",e,t,0))),n.b("</div>")}),e.pop()),r.b("\n"+n),r.b("\n"+
n),r.b('<a id="fav_'),r.b(r.v(r.f("id",e,t,0))),r.b('" href="/tracks/'),r.b(r.v(r
.f("id",e,t,0))),r.b('/toggle_fav" rel="nofollow" class="fav '),r.s(r.f("faved_by_current_user"
,e,t,1),e,t,0,323,331,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b(" active ")}),e.pop
()),r.s(r.f("faved_by_current_user",e,t,1),e,t,1,0,0,"")||r.b(" inactive "),r.b('" data-method="post" data-track_id="'
),r.b(r.v(r.f("id",e,t,0))),r.b('" title="Add this track to your favorites">'),r.
b("\n"+n),r.b('  <span class="i-favorite"></span>'),r.b("\n"+n),r.b("</a>"),r.b("\n"+
n),r.b("\n"+n),r.b('<div class="title_container '),r.s(r.f("full_length",e,t,1),e
,t,1,0,0,"")||r.b("tooltip_container"),r.b('">'),r.b("\n"+n),r.b('  <div class="title_artist">'
),r.b("\n"+n),r.b('    <span class="t">'),r.b(r.v(r.f("name",e,t,0))),r.b("</span>"
),r.b("\n"+n),r.b('    <span class="by_artist">by</span>'),r.b("\n"+n),r.b('    <span class="a">'
),r.b(r.v(r.f("performer",e,t,0))),r.b("</span>"),r.b("\n"+n),r.s(r.f("sample_notice"
,e,t,1),e,t,0,792,845,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('      <span class="sample_notice">Sample</span>'
),n.b("\n")}),e.pop()),r.b("  </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+
n),r.b('<div id="track_details_'),r.b(r.v(r.f("id",e,t,0))),r.b('" class="track_details clear">'
),r.b("\n"+n),r.b("  "),r.b("\n"+n),r.b('  <div class="amazon">'),r.b("\n"+n),r.s
(r.f("buy_link_class",e,t,1),e,t,1,0,0,"")||(r.b('      <a href="#" class="yt" title="Listen on YouTube">YouTube</a> <span class="pipe"> | </span>'
),r.b("\n")),r.b('    <a href="'),r.b(r.v(r.f("buy_link",e,t,0))),r.b('" title="Download" rel="external" target="_blank" class="buy '
),r.b(r.v(r.f("buy_link_class",e,t,0))),r.b('">'),r.b(r.v(r.f("buy_text",e,t,0)))
,r.b("</a>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="track_metadata">'
),r.b("\n"+n),r.s(r.d("release_name.length.nonzero",e,t,1),e,t,0,1312,1452,"{{ }}"
)&&(r.rs(e,t,function(e,t,r){r.b('      <div class="album">'),r.b("\n"+n),r.b('        <span class="label">Album:</span> '
),r.b("\n"+n),r.b('        <span class="detail">'),r.b(r.v(r.f("release_name",e,t
,0))),r.b("</span>"),r.b("\n"+n),r.b("      </div>"),r.b("\n")}),e.pop()),r.b("\n"+
n),r.s(r.f("year",e,t,1),e,t,0,1499,1628,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('      <div class="year">'
),r.b("\n"+n),r.b('        <span class="label">Year:</span>'),r.b("\n"+n),r.b('        <span class="detail">'
),r.b(r.v(r.f("year",e,t,0))),r.b("</span>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"
)}),e.pop()),r.b('    <div style="clear: both;"></div>'),r.b("\n"+n),r.b("  </div>"
),r.b("\n"+n),r.b("\n"+n),r.s(r.f("track_annotation",e,t,1),e,t,0,1708,2032,"{{ }}"
)&&(r.rs(e,t,function(e,t,r){r.b('    <div class="track_annotation">'),r.b("\n"+n
),r.b('      <div class="annotation_text">'),r.b("\n"+n),r.b('        <span class="i-annotation"></span>'
),r.b("\n"+n),r.b("    "),r.b("\n"+n),r.s(r.f("text",e,t,1),e,t,0,1845,1873,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b("          "),n.b(n.v(n.f("text",e,t,0))),n.b("\n"
)}),e.pop()),r.s(r.f("text",e,t,1),e,t,1,0,0,"")||(r.b("          "),r.b(r.v(r.f("track_annotation"
,e,t,0))),r.b("\n")),r.b("\n"+n),r.b('        <a href="#" class="close"><span class="i-x"></span></a>'
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("    </div>"),r.b("\n")}),e.pop
()),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl
()},"",e,{});return n.template=t,n}),define("views/_base_view",[],function(){return $
.fn.resetHeight=function(){var e=this;e.hide(),e.css("height","auto");var t=e.height
();e.css("height",0),e.show(),_.defer(function(){e.height(t+"px")})},$.fn.resetHeightByChildren=
function(){var e=this;e.show();var t=0;_.each(e.children(),function(e){t+=$(e).height
()}),_.defer(function(){e.height(t+"px")})},$.fn.mergeHtmlAndAttributes=function(
e){var t=$(e);this.html(t.html());for(var n in t[0].attributes)t[0].attributes[n]
.nodeName=="class"?this.addClass(t[0].attributes[n].value):this.attr(t[0].attributes
[n].nodeName,t[0].attributes[n].value)},$}),define("views/track_played_view",["views/trax_view"
,"hgn!templates/tracks/_track_played","global_trax","lib/_template_helpers","views/_base_view"
],function(e,t,n,r,i){var s=e.extend({tagName:"li",className:"track",initialize:function(
e){_.bindAll(this,"scrollTitle","onFavToggle","onFavClick"),this.track=e.track,this
.mix=e.mix,this.template=t,this.track.on("change:name, change:performer, change:release_name, change:buy_url"
,this.render,this),this.$el=$(this.el),this.track.on("change:faved_by_current_user"
,this.onFavToggle,this),this.track.on("playing",this.isPlaying,this),this.track.on
("stopped",this.isStopped,this),this.track.on("change:unplayable",this.onError,this
)},events:{"click .yt":"onYoutubeClick","click .fav":"onFavClick","click .track_annotation .i-x"
:"hideAnnotation","click .i-annotation":"showAnnotation"},isPlaying:function(e){this
.$el.addClass("now_playing open").siblings().removeClass("now_playing open")},isStopped
:function(){this.$el.removeClass("now_playing open")},render:function(e){var t=this
.track.toJSON();this.track.get("you_tube_status")!="banned"?t.showYouTubeLink=!0:
t.showYouTubeLink=!1;var n=new r(t);return this.$el.html(this.template(n)),this.$titleArtist=
this.$(".title_artist"),this.$album=this.$(".album"),this},onFavToggle:function()
{this.track.get("faved_by_current_user")?this.$(".fav").addClass("active"):this.$
(".fav").removeClass("active")},onFavClick:function(e){var t={};if(!n.currentUser
)return t.success_callback=_.bind(function(){this.track.toggleFav(!1,this.mix)},this
),n.showSignupView(t),!1;var r=$(e.currentTarget);return r.addClass("just_clicked"
).hover(function(){},function(){r.removeClass("just_clicked")}),this.track.trigger
("fav"),this.track.get("sponsored")?this.track.toggleFav(!0,this.mix):(this.track
.toggleFav(!1,this.mix),n.refreshSidebarAd()),!1},onError:function(e){this.$el.addClass
("unplayable"),this.$(".track_details").prepend('<p class="unplayable_warning"><span class="i-warning"></span>Oops! We\'re having a problem loading this track. ☹</p>'
)},onYoutubeClick:function(e){return this.track.openYoutubePopup(),!1},marquee:function(
){this.titleContainerWidth=this.$(".title_container").width(),this.titleWidth=this
.$titleArtist.width(),this.titleWidth>this.titleContainerWidth&&(this.$titleArtist
.append('<span class="gap"></span>'+this.$titleArtist.html()),this.titleScroller=
setTimeout(this.scrollTitle,8e3))},scrollTitle:function(){this.$titleArtist.css({
left:0}),this.$titleArtist.animate({left:-28-this.titleWidth},15e3,"linear",_.bind
(function(){this.titleScroller=setTimeout(this.scrollTitle,8e3)},this))},hideAnnotation
:function(){this.$(".track_annotation").slideUp()},showAnnotation:function(){this
.$(".track_annotation").slideDown()}});return s}),define("hgn!templates/mixes/mix_player"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="player_controls" class="player_controls player_gray dark-bg">'
),r.b("\n"+n),r.b("\n"+n),r.b('  <div id="player_controls_left">'),r.b("\n"+n),r.
b('    <div id="player_spinner"><span class="spin"></span></div>'),r.b("\n"+n),r.
b('    <div id="player_mix" class="tooltip_container"></div>'),r.b("\n"+n),r.b("\n"+
n),r.b('    <div id="player_play_button" class="player_button" title="Play"><span class="i-play"></span></div>'
),r.b("\n"+n),r.b('    <div id="player_pause_button" class="player_button" title="Pause" style="display:none"><span class="i-pause"></span></div>'
),r.b("\n"+n),r.b('    <div id="player_skip_button" class="player_button" title="Skip"><span class="i-skip"></span></div>'
),r.b("\n"+n),r.b('    <div id="next_mix_button" class="player_button" title="Next" style="display: none;"><span class="i-next"></span></div>'
),r.b("\n"+n),r.b('    <div id="player_like_button" class="mix_like '),r.s(r.f("liked_by_current_user"
,e,t,1),e,t,0,758,764,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("active")}),e.pop()
),r.b(' player_button"><span class="i-like"></span></div>'),r.b("\n"+n),r.b("  </div>"
),r.b("\n"+n),r.b("\n"+n),r.b('  <div id="player_progress_bar" class="player_progress_bar player_gray">'
),r.b("\n"+n),r.b('    <div id="player_progress_bar_meter" class="player_progress_bar_meter"/>'
),r.b("\n"+n),r.b('    <ul id="now_playing"></ul>'),r.b("\n"+n),r.b('    <div id="dmca_warnings"></div>'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="tracks_played" style="display: none;">'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div id="player_controls_right">'
),r.b("\n"+n),r.b('    <div id="volume_controls_container">'),r.b("\n"+n),r.b('      <div id="player_volume" class="hi">'
),r.b("\n"+n),r.b('        <span class="i-volume-hi"></span>'),r.b("\n"+n),r.b('        <span class="i-volume-med"></span>'
),r.b("\n"+n),r.b('        <span class="i-volume-lo"></span>'),r.b("\n"+n),r.b('        <span class="i-volume-mute"></span>'
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b('    <div id="use_chromecast" class="player_button" href="#" rel="local" title="Chromecast">'
),r.b("\n"+n),r.b('      <span class="i-chromecast"></span>'),r.b("\n"+n),r.b('      <span class="i-chromecast_active"></span>'
),r.b("\n"+n),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+
n),r.b("\n"+n),r.b('  <div class="clear: both;"></div>'),r.b("\n"+n),r.b("</div>"
),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/mixes/_player_mix_details"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.s(r.f("mix",e,t,1),e,
t,0,8,177,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('  <a href="'),r.b(r.v(r.f("web_path"
,e,t,0))),r.b('">'),r.b("\n"+n),r.b("    "),r.s(r.f("mix_cover_img",e,t,1),e,t,0,57
,74,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq56, w=100&h=100")}),e.pop()),r.b("\n"+
n),r.b('    <span class="black_tooltip black_tooltip_up">'),r.b("\n"+n),r.b("      "
),r.b(r.v(r.f("name",e,t,0))),r.b("\n"+n),r.b("    </span>"),r.b("\n"+n),r.b("  </a>"
),r.b("\n")}),e.pop()),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/artists/_player_details"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="background-blur-container">'
),r.b("\n"+n),r.b('  <canvas class="background-blur" width="100%" height="100%" style="width: 100%; height: 100%; opacity: 0.0;"></canvas> '
),r.b("\n"+n),r.b("      "),r.b("\n"+n),r.b('<div class="artist_details_container">'
),r.b("\n"+n),r.b(' <div class="container">'),r.b("\n"+n),r.b('  <div class="row">'
),r.b("\n"+n),r.b('    <div class="content">'),r.b("\n"+n),r.s(r.f("image_url",e,
t,1),e,t,0,298,586,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('        <div id="artist_photo" class="col-xl-2 col-lg-3 col-md-4 col-xs-4">'
),r.b("\n"+n),r.b('          <a href="'),r.b(r.v(r.f("image_url",e,t,0))),r.b('" target="_blank">'
),r.b("\n"+n),r.b('              <a href="'),r.b(r.v(r.f("image_url",e,t,0))),r.b
('">'),r.b("\n"+n),r.b("                "),r.s(r.f("external_img",e,t,1),e,t,0,498
,512,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("image_url, 120")}),e.pop()),r.b("\n"+
n),r.b("              </a>"),r.b("\n"+n),r.b("          </a> "),r.b("\n"+n),r.b("        </div>"
),r.b("\n")}),e.pop()),r.b("\n"+n),r.b('      <div id="artist_details" class="col-xl-10 col-lg-9 col-md-8 col-sm-8 col-xs-8">'
),r.b("\n"+n),r.b('        <div id="artist_bio">'),r.b("\n"+n),r.b("          <h4>"
),r.b(r.v(r.f("name",e,t,0))),r.b("</h4>"),r.b("\n"+n),r.b("          <p>"),r.b(r
.t(r.f("bio_intro",e,t,0))),r.b("</p>"),r.b("\n"+n),r.b('          <p><a class="flag_bio" href="/artists/flag_bio?source='
),r.b(r.v(r.d("info_source.source",e,t,0))),r.b("&source_id="),r.b(r.v(r.d("info_source.id"
,e,t,0))),r.b('"><span class="i-flag"></span> Flag incorrect bio</a></p>'),r.b("\n"+
n),r.b("        </div>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("    </div>"
),r.b("\n"+n),r.b("\n"+n),r.b('    <div class="sidebar hidden-sm hidden-xs">'),r.
b("\n"+n),r.b('      <a href="#" id="close_artist_details" class="icon-link"><span class="i-close"></span></a>'
),r.b("\n"+n),r.b("\n"+n),r.b('      <ul style="font-size: 12px; margin-top: -3px;">'
),r.b("\n"+n),r.b("        <li>"),r.b("\n"+n),r.b('          <a href="/explore/')
,r.b(r.v(r.d("name.to_url_param",e,t,0))),r.b('">More playlists with <strong>'),r
.b(r.v(r.f("name",e,t,0))),r.b("</strong> &rarr;</a>"),r.b("\n"+n),r.b("        </li>"
),r.b("\n"+n),r.b("\n"+n),r.s(r.d("info_source.bio_source",e,t,1),e,t,0,1360,1741
,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b("          <li>"),r.b("\n"+n),r.b('            <a href="'
),r.b(r.v(r.f("bio_url",e,t,0))),r.b('" class="favicon_'),r.b(r.v(r.d("info_source.bio_source"
,e,t,0))),r.b('" target="_blank" rel="external">'),r.b(r.v(r.f("name",e,t,0))),r.
b(" on "),r.b(r.v(r.d("info_source.bio_source.capitalize",e,t,0))),r.b("</a>"),r.
b("\n"+n),r.b("          </li>"),r.b("\n"+n),r.b("          <li>"),r.b("\n"+n),r.
b('            <a href="http://openaura.com/artist/'),r.b(r.v(r.d("info_source.id"
,e,t,0))),r.b('" class="favicon_openaura" target="_blank" rel="external">Powered by OpenAura</a>'
),r.b("\n"+n),r.b("          </li>"),r.b("\n")}),e.pop()),r.s(r.d("info_source.bio_source"
,e,t,1),e,t,1,0,0,"")||(r.b('          <a href="'),r.b(r.v(r.f("bio_url",e,t,0)))
,r.b('" class="favicon_'),r.b(r.v(r.d("info_source.source",e,t,0))),r.b('" target="_blank" rel="external">'
),r.b(r.v(r.f("name",e,t,0))),r.b(" on "),r.b(r.v(r.d("info_source.source.capitalize"
,e,t,0))),r.b("</a>"),r.b("\n")),r.b("      </ul>"),r.b("\n"+n),r.b("    </div>")
,r.b("\n"+n),r.b("  </div><!--.row-->"),r.b("\n"+n),r.b(" </div><!--.container-->"
),r.b("\n"+n),r.b("</div><!--.artist_details_container-->"),r.b("\n"+n),r.b("</div><!--.background-blur-container-->"
),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),function(e){e.fn.volume=function(
t){t=e.extend({min:0,max:100,scale:1,initialVolume:70,orientation:"y",curve:"lin"
,visible:!1},t);var n=this,r=e(this),i,s,o,u,a,f=!1;t.orientation=="x"&&(f=!0),t.
curve=="log"&&(a=!0);var l=t.visible;r.append('<div class="volume-container"><div class="volume-range"><div class="volume-selector"></div></div></div><div class="volume-mute"></div>'
);var c=r.children(".volume-container"),h=c.children(".volume-range"),p=h.children
(".volume-selector"),d=r.children("#player_volume"),v=r.children(".volume-mute"),
m=t.change,g=t.min,y=t.max,b=f?h.width():h.height(),w,E,S=t.rgb_player_volume,x=function(
){r.hover(T,k),h.on("mousedown",N),d.on("click",B)},T=function(){s=!0,clearTimeout
(i),r.addClass("open")},N=function(t){return o=!0,f?u=h.offset().left:u=h.offset(
).top+b,e(window).on("mousemove",A),e(window).on("mouseup",C),A(t),!1},C=function(
){o=!1,s&&k(),e(window).unbind("mouseup mousemove")},k=function(){s&&!o&&(i=setTimeout
(L,800))},L=function(){r.removeClass("open"),s=!1},A=function(e){var t=f?t=e.pageX-
u:u-e.pageY;t<0&&(t=0),t>b&&(t=b),f?p.width(t):p.height(t),a?D(M(t,b)):D(O(t,b))}
,O=function(e,n){return e/n*y*t.scale},M=function(e,n){return Math.pow(e,3)/Math.
pow(n,3)*n*t.scale},_=function(e,n){return Math.pow(e,1/3)/Math.pow(n,1/3)*n*t.scale
},D=function(e){w=e,m(w),P()},P=function(){w>0?(E=w,w<33?d.removeClass("hi med mute"
).addClass("lo"):w<66?d.removeClass("hi lo mute").addClass("med"):d.removeClass("med lo mute"
).addClass("hi")):d.removeClass("hi med lo").addClass("mute")},H=function(e){w=e;
var n;a?n=_(e,b)/t.scale:n=O(e,b)/t.scale,f?p.width(Math.floor(n)):p.height(Math.
floor(n)),P()},B=function(){w===0?(D(E),H(E)):(D(0),H(0))};H(t.initialVolume/t.scale
),x()}}(jQuery),define("jquery.volume",function(){}),define("jquery.hoverDelegate"
,[],function(){return $.fn.hoverDelegate=function(e,t,n,r,i){_.isUndefined(r)&&(r=100
),_.isUndefined(i)&&(i=100),this.delegate(e,"mouseover mouseout",function(e){var s=
(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(s&&s!=this
)try{s=s.parentNode}catch(e){s=this}if(s==this)return!1;var o=this;typeof o.hoverDelegateState=="undefined"&&
(o.hoverDelegateState=0,o.hoverDelegateOver=_.bind(t,this),o.hoverDelegateOut=_.bind
(n,this)),e.type=="mouseover"?o.hoverDelegateState===0?o.hoverDelegateTimer=setTimeout
(function(){o.hoverDelegateState=1,o.hoverDelegateOver()},r):clearTimeout(o.hoverDelegateTimer
):o.hoverDelegateState===1?o.hoverDelegateTimer=setTimeout(function(){o.hoverDelegateState=0
,o.hoverDelegateOut()},i):clearTimeout(o.hoverDelegateTimer)})},$}),define("hgn!templates/tracks/featurefm"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="feature_fm">'
),r.b("\n"+n),r.s(r.f("song",e,t,1),e,t,0,33,1615,"{{ }}")&&(r.rs(e,t,function(e,
t,r){r.b("  <style>"),r.b("\n"+n),r.b("  #player_artist_info_button.active:before{"
),r.b("\n"+n),r.b("    border-top: 10px solid #2a0066;"),r.b("\n"+n),r.b("  }"),r
.b("\n"+n),r.b("  </style>"),r.b("\n"+n),r.b('  <!--div class="background_blur"></div-->'
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
("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("views/feature_fm_view"
,["global_trax","views/trax_view","lib/jsonh.jquery","lib/client_storage","hgn!templates/tracks/featurefm"
,"collections/tracks"],function(e,t,n,r,i,s){var o=t.extend({api_key:"a24448de641e8639c531b7cec403c1ef"
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
;r++)n.push(t[e[r]]);return _.uniq(_.compact(n))}});return o}),define("views/mix_player_view"
,["global_trax","lib/events","views/trax_view","lib/_template_helpers","lib/player/mix_player"
,"views/track_played_view","hgn!templates/mixes/mix_player","hgn!templates/mixes/_player_mix_details"
,"hgn!templates/artists/_player_details","lib/client_storage","jquery.volume","jquery.hoverDelegate"
,"lib/jsonh.jquery","views/feature_fm_view","lib/cast_sender"],function(e,t,n,r,i
,s,o,u,a,f,l,c,h,p,d){var v=n.extend({el:"#player_box",initialize:function(e){_.bindAll
(this,"play","onPlay","onPause","onSmPlay","onSkip","onNext","onWhilePlaying","onVolumeChange"
,"showSpinner","atMixEnd","atMixBeginning","hideSpinner","removeOnDemandYTPlayer"
,"onTrackPlay","showCurrentTrack","switchSkipToNextMix","switchNextMixToSkip","onDmcaWarning"
,"loadNextMix","hideArtistDetails","showArtistDetails","hideArtistDetailsLater","onCastButtonClick"
,"onCastFound","onCastConnected","onCastDisconnected","onCastTerminated","onPrerollComplete"
,"onPrerollBegin","onPrerollException","updateLikeState"),this.childViews=[],this
.mix=e.mix,this.smart_id=e.smart_id,this.mixPlayer=new i({mix:this.mix,smart_id:this
.smart_id,mixPlayerView:this}),this.$container=$("#player_container"),this.$box=$
("#player_box")},render:function(){var t=new r({mix:this.mix.toJSON(),smart_id:this
.smart_id});return t.tooltip_down=!0,$(this.el).find("#player").html(o(t)),this.$volume=
this.$("#volume_controls_container"),this.loadVolumeSlider(),this.renderMix(),this
.mixPlayer.on("play skip resume pause",e.refreshSidebarAd),this.$playButton=this.
$("#player_play_button"),this.$pauseButton=this.$("#player_pause_button"),this.$skipButton=
this.$("#player_skip_button"),this.$nextButton=this.$("#next_mix_button"),this.$progressBar=
this.$("#player_progress_bar"),this.$progressBarMeter=this.$("#player_progress_bar_meter"
),this.$useChromecast=this.$("#use_chromecast"),this.$nowPlaying=this.$("#now_playing"
),this.$tracksPlayed=this.$(".tracks_played"),this.$artistDetails=$("#player_artist_details"
),this.$artistInfoButton=this.$("#player_artist_info_button"),this.bindPlayerEvents
(),this.bindSpacebar(),this.setupHover(),this.setupChromeCast(),this.$("#player_spinner"
).html(e.spinner({length:10,radius:10,color:"#ffffff",width:2})),window.onbeforeunload=
this.onWindowUnload,this},loadMix:function(e,t){this.mix&&this.mix.unbind("change:liked_by_current_user"
,this.updateLikeState),this.mix=e,this.mixPlayer.pause(),this.mixPlayer.unloadTrack
(),this.mix.on("change:liked_by_current_user",this.updateLikeState),this.updateLikeState
(),t&&(this.smart_id=t),this.mixPlayer.mix=this.mix,this.mixPlayer.smart_id=this.
smart_id,this.hideSpinner(),clearTimeout(this.skipTimer),this.switchNextMixToSkip
(),this.renderMix()},renderMix:function(){var e=new r({mix:this.mix.toJSON(),smart_id
:this.smart_id});e.tooltip_down=!0,$(this.el).find("#player_mix").html(u(e)),this
.setGradient()},show:function(){this.render(),this.$box.slideDown()},events:{"click #player_play_button"
:"playButton","click #player_pause_button":"pauseButton","click #player_skip_button"
:"skipButton","click #next_mix_button":"nextButton","click #use_chromecast":"onCastButtonClick"
,"click #player_like_button":"likeButton","click #close_artist_details, #player_artist_info_button, #now_playing .a"
:"toggleArtistDetails","click #close_artist_details":"disableArtistDetails","click .flag_bio"
:"flagArtistBio"},onWindowUnload:function(){if(this.mixPlayer&&this.mixPlayer.isPlaying
())return"Your playlist is still playing."},bindPlayerEvents:function(){this.mixPlayer
.on("play resume",this.onPlay),this.mixPlayer.on("smPlay",this.onSmPlay),this.mixPlayer
.on("pause",this.onPause),this.mixPlayer.on("skip",this.onSkip),this.mixPlayer.on
("next",this.onNext),this.mixPlayer.on("whilePlaying",this.onWhilePlaying),this.mixPlayer
.on("startLoading",this.showSpinner),this.mixPlayer.on("doneLoading",this.hideSpinner
),this.mixPlayer.on("trackPlay",this.onTrackPlay),this.mixPlayer.on("dmcaWarning"
,this.onDmcaWarning),this.mixPlayer.on("trackPlay",this.showCurrentTrack),this.mixPlayer
.on("play resume skip next",this.removeOnDemandYTPlayer),this.mixPlayer.on("skip_not_allowed"
,this.switchSkipToNextMix),this.mixPlayer.on("repeat_listen_limit_reached",this.playNextMix
),this.mixPlayer.on("nextMix",this.loadNextMix),this.mixPlayer.on("atMixEnd",this
.atMixEnd),this.mixPlayer.on("atMixBeginning",this.atMixBeginning),this.mixPlayer
.on("regional_blocking",this.onRegionalBlocking)},playButton:function(){return this
.waitForPreroll||this.mixPlayer.play("click"),!1},pauseButton:function(){return this
.waitForPreroll?!1:(this.mixPlayer.pause(),this.mixPlayer.setsAPI("pause"),!1)},skipButton
:function(){return this.waitForPreroll?!1:(this.mix.id==6437&&!this.feature_fm_view?
this.playFeatureFmTrack():(this.$("#player_progress_bar").removeClass("show_warnings"
),this.mixPlayer.skip()),!1)},nextButton:function(){return this.waitForPreroll?!1
:(this.mixPlayer.playNextMix("skip"),clearTimeout(this.dmcaWarningsTimer),this.$("#player_progress_bar"
).removeClass("show_warnings"),!1)},likeButton:function(t){var n={};if(!e.currentUser
)return n.success_callback=_.bind(function(){this.mix.toggleLike(!1,this.mix)},this
),e.showSignupView(n),!1;this.$("#player_like_button").toggleClass("active"),this
.mix.toggleLike()},updateLikeState:function(){var e=this.$("#player_like_button")
;this.mix.get("liked_by_current_user")?e.addClass("active").removeClass("inactive"
):e.removeClass("active").addClass("inactive")},showCurrentTrack:function(e){e.mix=
this.mix;var t=new s(e);t.render(),t.$(".track_details").height("auto"),this.nowPlayingTrackView
,this.nowPlayingTrackView=t,this.$nowPlaying.empty().append(t.$el),this.nowPlayingTrackView
.marquee(),this.renderArtistDetails()},renderArtistDetails:function(){if(this.mixPlayer
.track.get("artist_details")&&this.mixPlayer.track.get("artist_details").bio_intro
){var t=new r(this.mixPlayer.track.get("artist_details"));if(t.bio_intro=="--- !ruby/object:Nokogiri::XML::Element {}"
)this.$artistDetails.empty().html('<div class="container"><div class="row"><div class="col-md-12">We don\'t have any information on this artist.</div></div></div>'
),this.hideArtistDetails();else{t.bio_intro=t.bio_intro.replace(t.name,"<strong>"+
t.name+"</strong>"),this.$artistDetails.html(a(t)),this.showArtistPhoto(),this.shouldShowArtistInfo
()&&(this.showArtistDetails(),this.hideArtistDetailsLater(!0));var n=this.$artistDetails
.find(".background-blur")[0];e.setGradient(n,this.mix.get("color_palette"),2)}}else this
.$artistDetails.empty().html('<div class="container"><div class="row"><div class="col-md-12">We don\'t have any information on this artist.</div></div></div>'
),this.hideArtistDetails()},showArtistPhoto:function(){var e=this.$artistDetails.
find("img")[0];e?(e.onerror=_.bind(function(e){this.$("#artist_photo").hide(),this
.$nowPlaying.removeClass("with_artist");var t=new r(this.mixPlayer.track.get("artist_details"
));h.now("/artists/report_invalid_image",{source:t.info_source.source,source_id:t
.info_source.id},function(e){},{type:"POST"})},this),this.$nowPlaying.prepend('<span id="player_artist_info_button" style="background-image: url(\''+
e.src+"');\"/>").addClass("with_artist")):this.$nowPlaying.removeClass("with_artist"
)},showArtistDetails:function(e){this.keepArtistDetailsOpen=e,clearTimeout(this.artist_hide_timer
),this.$artistDetails.removeClass("collapsed")},toggleArtistDetails:function(){clearTimeout
(this.artist_hide_timer),this.$artistDetails.hasClass("collapsed")?(this.showArtistDetails
(!0),this.enableArtistDetails()):this.hideArtistDetails()},shouldShowArtistInfo:function(
){return!f.get("disabled_artist_info")},disableArtistDetails:function(){f.set("disabled_artist_info"
,!0)},enableArtistDetails:function(){f.destroy("disabled_artist_info")},hideArtistDetailsLater
:function(e){if(!this.keepArtistDetailsOpen||e)this.artist_hide_timer=setTimeout(
this.hideArtistDetails,8e3)},hideArtistDetails:function(){this.keepArtistDetailsOpen=!1
,this.$artistDetails.addClass("collapsed")},flagArtistBio:function(e){return $(e.
currentTarget).hasClass("disabled")?!1:($(e.currentTarget).addClass("disabled"),h
.now(e.currentTarget.href,{},function(){}),this.$("#artist_bio p").fadeOut().queue
(function(){var e=$('<p style="display: none;">Thanks for flagging! We\'ll review this biography.</p>'
);$("#artist_bio").append(e),e.fadeIn()}),!1)},setupChromeCast:function(){d.on("initialized"
,this.onCastInitialized),d.on("castDeviceFound",this.onCastFound),d.on("connected"
,this.onCastConnected),d.on("terminated",this.onCastTerminated),d.isInitialized()&&
d.isDevicePresent()&&this.onCastFound()},onCastFound:function(){d.isInitialized()?
(this.$el.addClass("has_chromecast"),d.isConnected()&&this.onCastConnected()):this
.$el.removeClass("has_chromecast")},onCastConnected:function(){console.log("in on cast connected"
),this.mixPlayer.onCastConnected(),this.$useChromecast.addClass("active")},onCastDisconnected
:function(){console.log("in on cast disconnected"),this.mixPlayer.switchToSoundManagerPlayer
(),this.$useChromecast.removeClass("active")},onCastTerminated:function(){this.onCastDisconnected
()},setupHover:function(){this.$artistDetails.hover(_.bind(function(){clearTimeout
(this.artist_hide_timer)})),this.$el.hoverDelegate("#player_artist_details, #player_box"
,_.bind(function(){clearTimeout(this.artist_hide_timer)},this),this.hideArtistDetailsLater
,1e3,500)},onDmcaWarning:function(e,t){t.timeout||(t.timeout=6e3),$("#dmca_warnings"
).html(e),this.$("#player_progress_bar").addClass("show_warnings"),clearTimeout(this
.dmcaWarningsTimer),this.dmcaWarningsTimer=setTimeout(function(){$("#player_progress_bar"
).removeClass("show_warnings"),_.isFunction(t.callback)&&t.callback()},t.timeout)
},onCastButtonClick:function(e){return $(e.currentTarget).hasClass("active")?this
.mixPlayer.stopCasting():this.mixPlayer.launchCast(),!1},play:function(){return this
.mixPlayer.play(),!1},onPlay:function(){App.views.mixView&&this.playAlready&&App.
views.mixView.overlay_animation("play"),this.$playButton.hide(),this.$pauseButton
.show(),this.playAlready=!0,this.promptSignup=!0},onPause:function(){App.views.mixView&&
App.views.mixView.overlay_animation("pause"),this.$playButton.show(),this.$pauseButton
.hide()},onSkip:function(){App.views.mixView&&App.views.mixView.overlay_animation
("skip")},onNext:function(){this.promptSignup&&(this.showSignupNag(),this.promptSignup=!1
)},onTrackPlay:function(){this.$progressBarMeter.hide().css({width:0}),_.defer(_.
bind(function(){this.$progressBarMeter.show()},this))},onSmPlay:function(){this.$playButton
.hide(),this.$pauseButton.show()},onWhilePlaying:function(e,t){this.$progressBarMeter
.css("width",parseInt(e/t*this.$progressBar.width(),10)+"px")},switchSkipToNextMix
:function(){seconds_remaining=15,this.$skipButton.hide(),this.$nextButton.show(),
this.skipTimer=setTimeout(this.switchNextMixToSkip,seconds_remaining*1e3)},switchNextMixToSkip
:function(){this.$nextButton.hide(),this.$skipButton.show()},removeOnDemandYTPlayer
:function(){$("#ytplayer").remove()},showSpinner:function(){this.$el.addClass("loading"
)},hideSpinner:function(){this.$el.removeClass("loading")},loadVolumeSlider:function(
){var e,t,n=this.mix.get("color_palette");n&&n.length>0?e=t="rgb("+this.hexToDesaturatedRgb
(n[0]).join(",")+")":(e="rgb(30, 30, 30)",t="rgb(3, 3, 3)"),this.$volume.volume({
initialVolume:soundManager.defaultOptions.volume,change:this.onVolumeChange,rgb_volume_container
:e,rgb_player_volume:t})},hexToDesaturatedRgb:function(e){var t=50,n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
.exec(e);return n?[Math.floor((parseInt(n[1],16)*1.5+t)/2.5),Math.floor((parseInt
(n[2],16)*1.5+t)/2.5),Math.floor((parseInt(n[3],16)*1.5+t)/2.5)]:[]},onVolumeChange
:function(e){this.mixPlayer.setVolume(e)},loadNextMix:function(e){var t="end_of_mix"
;e=="skip"&&(t="skip_mix"),this.smart_id=this.mixPlayer.smart_id;if(App.views.mixView&&
App.currentView==App.views.mixView&&App.views.mixView.mix==this.mix){this.loadMix
(this.mixPlayer.mix),App.router.navigate(this.mix.get("web_path"),{trigger:!0}),this
.mixPlayer.play(t);return}this.loadMix(this.mixPlayer.mix),this.mixPlayer.play(t)
},atMixEnd:function(){this.onPause(),this.hideSpinner(),App.currentPage=="mix"&&App
.currentView.mix==this.mix&&App.currentView.$("#play_overlay").show()},atMixBeginning
:function(){App.currentPage=="mix"&&App.currentView.mix==this.mix&&App.currentView
.mixTracksPlayedView.onAtMixBeginning()},bindSpacebar:function(){$(document).bind
("keydown",_.bind(function(e){if(e.keyCode==32&&!PAGE.editMode){var t=document.activeElement
.tagName;if(t!="INPUT"&&t!="TEXTAREA")return this.mixPlayer.play(),!1}},this))},playMix
:function(t,n){if(!e.showAds()||!PREROLL_ENABLED||n)return this.onPrerollComplete
(t),!1;console.log("SHOWING PREROLL in mixPlayer.playMix("+t+")"),this.playType=t
,this.showPrerollAd()},showPrerollAd:function(){if(!App.views.adsView||App.views.
adsView.adblock){e.show_flash_error_with_timeout("It looks like you have AdBlock enabled! Please consider whitelisting 8tracks.com. Your playlist will begin in 5 seconds."
,5e3),_.delay(this.onPrerollComplete,5e3);return}try{if(!cookie.get("play_token")&&!
cookie.get("auth_token")||this.mixView){this.onPrerollComplete();return}if(App.views
.mastheadView&&App.views.mastheadView.$el.is(":visible")||window.innerWidth<640){
this.onPrerollComplete();return}App.views.prerollView?(console.log("showPrerollAd ran again. waitForPreroll status: "+
this.waitForPreroll),this.waitForPreroll||this.onPrerollComplete()):(this.waitForPreroll=!0
,require(["views/preroll_view"],_.bind(function(e){App.views.prerollView=new e({el
:"#preroll_container",adUnit:"VideoPreroll",size:"640x360",unmuted:!0}),App.views
.prerollView.bind("onAdComplete",this.onPrerollComplete),App.views.prerollView.bind
("onAdBegin",this.onPrerollBegin),App.views.prerollView.bind("onTimeout",this.onPrerollException
),App.views.prerollView.bind("onAdEmpty",this.onPrerollEmpty),App.views.prerollView
.showAd()},this),_.bind(function(e){console.log(e),this.waitForPreroll=!1,this.onPrerollComplete
()},this)))}catch(t){console.log("Caught error in showPrerollAd:"+t),this.waitForPreroll=!1
,this.onPrerollComplete()}},onPrerollException:function(){this.waitForPreroll=!1;
if(this.mixPlayer.playing)return;this.onPrerollComplete(),this.onPrerollEmpty()},
onPrerollBegin:function(){console.log("onPrerollBegin!");var e="Here is a message from our sponsors. Your playlist will begin presently."
;this.$("#dmca_warnings").html(e),$("#player_progress_bar").addClass("show_warnings"
)},onPrerollComplete:function(e){console.log("onPrerollComplete!"+e),this.waitForPreroll=!1
,App.views.prerollView&&(App.views.prerollView.hide(),_.delay(function(){console.
log("closing preroll view"),App.views.prerollView&&(App.views.prerollView.close({
keepDomElement:!0}),delete App.views.prerollView)},5e3)),console.log("onPrerollComplete!"
),$("#player_progress_bar").removeClass("show_warnings"),this.mixPlayer.play(e||this
.playType),this.playType=!1},onPrerollEmpty:function(){console.log("showing overlay ad"
),App.views.adsView&&App.views.adsView.showOverlay()},playFeatureFmTrack:function(
){try{this.feature_fm_view||(this.feature_fm_view=new p({mixPlayer:this.mixPlayer
,mixPlayerView:this})),this.feature_fm_view.show()}catch(e){this.mixPlayer.timeForNextMix
(!0)}},loadFeatureFmTracking:function(e){this.feature_fm_view||(this.feature_fm_view=new 
p({mixPlayer:this.mixPlayer,mixPlayerView:this}),this.feature_fm_view.enableTracking
(e))},setGradient:function(){var t=this.$("#player_mix .cover")[0],n=this.$(".background-blur"
)[0];e.setGradient(n,this.mix.get("color_palette"),2);var r=this.mix.get("color_palette"
);if(r&&r.length>0){var i="rgb("+this.hexToDesaturatedRgb(r[0]).join(",")+")";this
.$(".volume-container").css("background",i)}else this.$(".volume-container").css("background"
,"rgb(30, 30, 30)")},showSignupNag:function(){if(App.Sessions.logged_in())return;
App.Trax.showSignupView()},onRegionalBlocking:function(){App.views.mixView&&App.views
.mixView.mix.id==this.mix.id?App.views.mixView.playOnYoutube():App.router.navigate
(this.mix.get("web_path")+"#play=1",{trigger:!0})},onClose:function(){this.mixPlayer
.pause()}});return v}),define("views/mix_tracks_played_view",["views/trax_view","global_trax"
,"lib/sessions","collections/tracks","views/track_played_view"],function(e,t,n,r,
i){var s=e.extend({el:"#playlist",views:[],initialize:function(e){this.mix=e.mix,
this.mixView=e.mixView,this.$tracksPlayed=this.$("#tracks_played").addClass("displaymode"
),_.bindAll(this,"render","showTrackPlayed","onAtMixBeginning","loadTrackPlayed")
,this.mix.onReady("tracksPlayed",this.render),this.mix.get("read_only")||this.mix
.getTracksPlayed()},render:function(){this.mix.get("read_only")?_.each(this.mix.tracks
.models,this.loadTrackPlayed):(_.each(this.mix.tracksPlayed.models,this.showTrackPlayed
),_.defer(this.mixView.adjustPlaylistHeight),this.mix.tracksPlayed.on("add",this.
showTrackPlayed))},showTrackPlayed:function(e,t){var n={track:e,mix:this.mix};t instanceof 
Element&&(n.el=t);var r=new i(n);return r.render(),n.el||this.$tracksPlayed.append
(r.el).show(),this.$el.show(),this.mixView&&this.mixView.adjustPlaylistHeight(),this
.views.push(r),r},loadTrackPlayed:function(e){var t=new i({track:e,mix:this.mix,el
:this.$('#tracks_played .track[data-id="'+e.id+'"]')});this.views.push(t)},onAtMixBeginning
:function(){this.$tracksPlayed.empty(),this.mix.initTracksPlayed(),_.defer(this.mixView
.adjustPlaylistHeight)},onClose:function(){this.mixPlayer&&this.mix.unbind("onready:tracksPlayed"
,this.onAtMixBeginning)}});return s}),define("hgn!templates/reviews/_review_form"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<form id="new_thread_form" accept-charset="UTF-8" action="/reviews" class="new_review displaymode" method="post">'
),r.b("\n"+n),r.b('  <div class="comment clearfix">'),r.b("\n"+n),r.b('    <div class="body">'
),r.b("\n"+n),r.b('      <div style="position: relative;">'),r.b("\n"+n),r.b('        <div class="mentions_highlights"></div>'
),r.b("\n"+n),r.b('        <textarea class="text prompt" cols="40" class="review_body" name="review[body]" rows="3" placeholder="What do you think of this playlist?"></textarea>'
),r.b("\n"+n),r.b('        <input type="hidden" name="review[body_encoded]" value="" />'
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("\n"+n),r.b("        <hr />"),r
.b("\n"+n),r.b("\n"+n),r.b('      <input id="review_mix_id" name="review[mix_id]" type="hidden" value="'
),r.b(r.v(r.f("mix_id",e,t,0))),r.b('" />'),r.b("\n"+n),r.b('      <div class="validation_errors"></div>'
),r.b("\n"+n),r.b('      <div class="captcha" style="display: none;"></div>'),r.b
("\n"+n),r.b('      <div class="comment_footer">'),r.b("\n"+n),r.b("        "),r.
s(r.f("spinner",e,t,1),e,t,0,762,773,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("review_form"
)}),e.pop()),r.b("\n"+n),r.b('        <a class="submit flatbutton"><span class="i-annotation"></span> Say it</a>'
),r.b("\n"+n),r.b('        <!--input name="commit" class="no_button i-annotation" type="submit" value="Say it" /-->'
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"
),r.b("\n"+n),r.b("</form>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define
("hgn!templates/mixes/_mix_reviews",["hogan"],function(e){function n(){return t.render
.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r.b(n=
n||""),r.b('<div id="reviews">'),r.b("\n"+n),r.s(r.f("review_threads",e,t,1),e,t,0
,40,74,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b(n.rp("reviews/review_thread",e,t,"    "
))}),e.pop()),r.b("\n"+n),r.b("  "),r.b(r.t(r.f("seo_pagination",e,t,0))),r.b("\n"+
n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/reviews/_review"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="comment clear '
),r.s(r.f("parent_id",e,t,1),e,t,0,40,45,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("reply"
)}),e.pop()),r.b('" data-review_id="'),r.b(r.v(r.f("id",e,t,0))),r.b('" data-review_user_id="'
),r.b(r.v(r.f("user_id",e,t,0))),r.b('">'),r.b("\n"+n),r.s(r.f("user",e,t,1),e,t,0
,131,234,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('    <a href="'),r.b(r.v(r.f("web_path"
,e,t,0))),r.b('" rel="user">'),r.b("\n"+n),r.b("      "),r.s(r.f("avatar_img",e,t
,1),e,t,0,192,207,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq72, w=75&h=75")}),e.
pop()),r.b("\n"+n),r.b("    </a>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("user"
,e,t,1),e,t,0,258,433,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('      <p class="byline"><strong><a href="'
),r.b(r.v(r.f("web_path",e,t,0))),r.b('" class="name" data-user_id="'),r.b(r.v(r.
f("user_id",e,t,0))),r.b('">'),r.b(r.v(r.f("login",e,t,0))),r.b("</a></strong>"),
r.b("\n"+n),r.b("      "),r.s(r.f("badge",e,t,1),e,t,0,393,398,"{{ }}")&&(r.rs(e,
t,function(e,t,n){n.b("small")}),e.pop()),r.b("\n"+n),r.b("      said</em></p>"),
r.b("\n")}),e.pop()),r.b("\n"+n),r.b("\n"+n),r.b('    <div class="body '),r.s(r.f
("parent_id",e,t,1),e,t,1,0,0,"")||r.b("left"),r.b('">'),r.b("\n"+n),r.b("\n"+n),
r.b('      <div class="body_text">'),r.b("\n"+n),r.b("        <p>"),r.b(r.t(r.f("body_html"
,e,t,0))),r.b("</p>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("\n"+n),r.b
("      <hr />"),r.b("\n"+n),r.b("\n"+n),r.b('      <div class="comment_footer">'
),r.b("\n"+n),r.b("\n"+n),r.b('        <div class="comment_links">'),r.b("\n"+n),
r.b('          <a class="reply_review icon-link"  rel="login_required" href="#"><span class="i-reply"></span> Reply</a>'
),r.b("\n"+n),r.b("\n"+n),r.b('          <a class="mark_as_spam icon-link"  rel="login_required" href="/reviews/'
),r.b(r.v(r.f("id",e,t,0))),r.b('/flag.jsonh"><span class="i-flag"></span> Spam</a>'
),r.b("\n"+n),r.b("\n"+n),r.b('          <a class="delete_review icon-link" rel="login_required" href="/reviews/'
),r.b(r.v(r.f("id",e,t,0))),r.b('.jsonh"><span class="i-x"></span> Delete</a>'),r
.b("\n"+n),r.b("\n"+n),r.b('          <a class="flag_user icon-link no_button" href="/user_flaggings" data-user_name='
),r.b(r.v(r.d("user.login",e,t,0))),r.b(" data-comment_id="),r.b(r.v(r.f("id",e,t
,0))),r.b(' data-user_id="'),r.b(r.v(r.d("user.id",e,t,0))),r.b('"><span class="i" style="font-size: 1.5em; margin-top: -0.3em;">&#8416;</span> Block</a>'
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("\n"+n),r.b('        <em class="datetime timeago" title="'
),r.b(r.v(r.f("created_at_timestamp",e,t,0))),r.b('">'),r.s(r.f("human_date",e,t,1
),e,t,0,1393,1403,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("created_at")}),e.pop()
),r.b("</em>"),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n
),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("\n"+n),r.b('    <div style="clear: both;"></div>'
),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define
("hgn!templates/reviews/_review_thread",["hogan"],function(e){function n(){return t
.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r
.b(n=n||""),r.b('<div id="comment_thread_'),r.b(r.v(r.f("id",e,t,0))),r.b('" class="comment_thread" data-thread_id="'
),r.b(r.v(r.f("id",e,t,0))),r.b('" '),r.s(r.f("hidden",e,t,1),e,t,0,90,110,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b('style="display:none"')}),e.pop()),r.b(">"),r.b("\n"+
n),r.s(r.f("reviews",e,t,1),e,t,0,136,162,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b
(n.rp("reviews/review",e,t,"  	"))}),e.pop()),r.b("</div>"),r.fl()},"",e,{});return n
.template=t,n}),define("hgn!templates/reviews/_captcha",["hogan"],function(e){function n
(){return t.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=
this;return r.b(n=n||""),r.b('<div class="captcha_question">'),r.b(r.v(r.f("question"
,e,t,0))),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b('<input type="text" name="review[captcha_submission]" id="captcha_submission" value="" placeholder="Enter your answer" />'
),r.b("\n"+n),r.b("\n"+n),r.b('<input name="review[captcha_key]" type="hidden" value="'
),r.b(r.v(r.f("key",e,t,0))),r.b('" />'),r.fl()},"",e,{});return n.template=t,n})
,define("hgn!templates/reviews/_reply_form",["hogan"],function(e){function n(){return t
.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r
.b(n=n||""),r.b('<form accept-charset="UTF-8" action="/reviews" class="new_review reply_form white_button_form" method="post">'
),r.b("\n"+n),r.b('	<div class="comment reply reply_form clearfix">'),r.b("\n"+n)
,r.s(r.f("user",e,t,1),e,t,0,171,275,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('	  	<img alt="'
),n.b(n.v(n.f("login",e,t,0))),n.b('" class="avatar sq72" src="'),n.s(n.f("avatar_url"
,e,t,1),e,t,0,237,252,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("sq72, w=75&h=75")}
),e.pop()),n.b('" />'),n.b("\n")}),e.pop()),r.b('		<div class="body">'),r.b("\n"+
n),r.b('			  <a class="cancel_reply" href="#">cancel [X]</a>'),r.b("\n"+n),r.b("			  <p>Reply to thread</p>"
),r.b("\n"+n),r.b("			<div>"),r.b("\n"+n),r.b('			  <div class="mentions_highlights"></div>'
),r.b("\n"+n),r.b('				<textarea class="text prompt" cols="40" class="review_body" name="review[body]" rows="3" placeholder="Enter your reply here">'
),r.s(r.f("mentions",e,t,1),e,t,0,583,594,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b
("@"),n.b(n.v(n.f("login",e,t,0))),n.b(" ")}),e.pop()),r.b("</textarea>"),r.b("\n"+
n),r.b('				<input type="hidden" name="review[body_encoded]" value="'),r.s(r.f("mentions"
,e,t,1),e,t,0,692,712,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("@["),n.b(n.v(n.f("id"
,e,t,0))),n.b(":"),n.b(n.v(n.f("login",e,t,0))),n.b("] ")}),e.pop()),r.b('" />'),
r.b("\n"+n),r.b("				<hr />"),r.b("\n"+n),r.b("			</div>"),r.b("\n"+n),r.b('			<div class="comment_links">'
),r.b("\n"+n),r.b('				<input id="review_mix_id" name="review[mix_id]" type="hidden" value="'
),r.b(r.v(r.d("mix.id",e,t,0))),r.b('" />'),r.b("\n"+n),r.b('				<input id="review_parent_id" name="review[parent_id]" type="hidden" value="'
),r.b(r.v(r.f("parent_id",e,t,0))),r.b('">'),r.b("\n"+n),r.b('				<div class="validation_errors"></div>'
),r.b("\n"+n),r.b('				<div class="captcha" style="display: none;"></div>'),r.b("\n"+
n),r.b("				"),r.s(r.f("spinner",e,t,1),e,t,0,1078,1089,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("review_form")}),e.pop()),r.b("\n"+n),r.b('				<a class="submit flatbt"><span class="i-annotation"></span> Say it</a>'
),r.b("\n"+n),r.b('			    <!--input name="commit" class="no_button i-annotation" type="submit" value="Say it" /-->'
),r.b("\n"+n),r.b("			</div>"),r.b("\n"+n),r.b("\n"+n),r.b("		</div><!-- bubble -->"
),r.b("\n"+n),r.b("	</div><!-- comment -->"),r.b("\n"+n),r.b("</form>	"),r.b("\n"
),r.fl()},"",e,{});return n.template=t,n}),function(e){e(jQuery)}(function(e){function r
(){var n=i(this),r=t.settings;return isNaN(n.datetime)||(r.cutoff==0||o(n.datetime
)<r.cutoff)&&e(this).text(s(n.datetime)),this}function i(n){n=e(n);if(!n.data("timeago"
)){n.data("timeago",{datetime:t.datetime(n)});var r=e.trim(n.text());t.settings.localeTitle?
n.attr("title",n.data("timeago").datetime.toLocaleString()):r.length>0&&(!t.isTime
(n)||!n.attr("title"))&&n.attr("title",r)}return n.data("timeago")}function s(e){
return t.inWords(o(e))}function o(e){return(new Date).getTime()-e.getTime()}e.timeago=
function(t){return t instanceof Date?s(t):typeof t=="string"?s(e.timeago.parse(t)
):typeof t=="number"?s(new Date(t)):s(e.timeago.datetime(t))};var t=e.timeago;e.extend
(e.timeago,{settings:{refreshMillis:6e4,allowFuture:!0,localeTitle:!1,cutoff:864e5
,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now"
,seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour"
,hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months"
,year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(
t){function l(r,i){var s=e.isFunction(r)?r(i,t):r,o=n.numbers&&n.numbers[i]||i;return s
.replace(/%d/i,o)}var n=this.settings.strings,r=n.prefixAgo,i=n.suffixAgo;this.settings
.allowFuture&&t<0&&(r=n.prefixFromNow,i=n.suffixFromNow);var s=Math.abs(t)/1e3,o=
s/60,u=o/60,a=u/24,f=a/365,c=s<45&&l(n.seconds,Math.round(s))||s<90&&l(n.minute,1
)||o<45&&l(n.minutes,Math.round(o))||o<90&&l(n.hour,1)||u<24&&l(n.hours,Math.round
(u))||u<42&&l(n.day,1)||a<30&&l(n.days,Math.round(a))||a<45&&l(n.month,1)||a<365&&
l(n.months,Math.round(a/30))||f<1.5&&l(n.year,1)||l(n.years,Math.round(f)),h=n.wordSeparator||""
;return n.wordSeparator===undefined&&(h=" "),e.trim([r,c,i].join(h))},parse:function(
t){var n=e.trim(t);return n=n.replace(/\.\d+/,""),n=n.replace(/-/,"/").replace(/-/
,"/"),n=n.replace(/T/," ").replace(/Z/," UTC"),n=n.replace(/([\+\-]\d\d)\:?(\d\d)/
," $1$2"),new Date(n)},datetime:function(n){var r=t.isTime(n)?e(n).attr("datetime"
):e(n).attr("title");if(r.length==10||r.length==13){var i=parseInt(r,0);if(i==r)return r
.length==10&&(i*=1e3),new Date(i)}return t.parse(r)},isTime:function(t){return e(
t).get(0).tagName.toLowerCase()==="time"}});var n={init:function(){var n=e.proxy(
r,this);n();var i=t.settings;i.refreshMillis>0&&setInterval(n,i.refreshMillis)},update
:function(n){e(this).data("timeago",{datetime:t.parse(n)}),r.apply(this)}};e.fn.timeago=
function(e,t){var r=e?n[e]:n.init;if(!r)throw new Error("Unknown function name '"+
e+"' for timeago");return this.each(function(){r.call(this,t)}),this},document.createElement
("abbr"),document.createElement("time")}),define("jquery.timeago",function(){}),define
("views/mix_comments_view",["views/trax_view","global_trax","lib/sessions","lib/events"
,"lib/jsonh.jquery","lib/_template_helpers","lib/client_storage","hgn!templates/reviews/_review_form"
,"hgn!templates/mixes/_mix_reviews","hgn!templates/reviews/_review","hgn!templates/reviews/_review_thread"
,"hgn!templates/reviews/_captcha","hgn!templates/reviews/_reply_form","jquery.timeago"
],function(e,t,n,r,i,s,o,u,a,f,l,c,h){var p=e.extend({el:"#mix_comments",SPAM_REVIEWS_KEY
:"reviews_marked_as_spam",initialize:function(e){_.bindAll(this,"render","setDeletePermission"
,"setBlockPermission","afterRender","setOwnershipPermission","onReviewBodyKeypress"
),this.mix=e.mix,this.per_page=e.per_page,this.reviews=e.reviews,this.onLoad=e.onLoad
,this.whenUserReadyOrChanged(this.afterRender),n.bind("current_user:unset",this.afterRender
),e.load?(this.$el=$(this.el),this.loadReviews()):this.afterRender(),this.matches=
[]},afterRender:function(){this.updateFormAvatar(),this.afterCommentRender(),this
.hideSpamReviews()},afterCommentRender:function(e){this.$(".timeago",e).timeago()
,this.setOwnershipPermissions(e||this.$el),this.setDeletePermissions(e||this.$el)
,this.setBlockPermissions(e||this.$el)},events:{"submit form":"onSubmit","click .submit"
:"onSubmit","click .delete_review":"onDeleteClick","click .new_pagination a":"paginateReviews"
,"click .reply_review":"onReplyClick","click .cancel_reply":"onCancelReplyClick","click .mark_as_spam"
:"onMarkAsSpamClick","click .flag_user":"onFlagUserClick","focus textarea":"loadAutocompleteView"
,"keydown textarea":"onReviewBodyKeydown"},loadReviews:function(){var e="/mixes/"+
this.mix.id+"/reviews";i.now(e,{page:1,per_page:this.per_page,include:"pagination"
},this.render)},render:function(e){this.$el.empty(),this.$el.append('<h6 id="comments_header"><span class="i-comment"></span> '+
(e.pagination.total_entries?e.pagination.total_entries:"")+" Comments on "+this.mix
.get("name")+'</h6><hr class="divide" />'),e.pagination.total_entries>e.pagination
.per_page&&this.$("#comments_header").append(' (<a href="'+this.mix.get("web_path"
)+'/comments">view all</a>)');var n=t.currentUser?t.currentUser.toJSON():!1,r=new 
s({user:n,mix_id:this.mix.id});this.$el.append(u(r));var i=new s(e);i.link_structure=
this.mix.get("web_path")+"/comments/::page::",this.$el.append(a(i,{"reviews/review"
:f.template,"reviews/review_thread":l.template})),this.afterRender(),e.current_page>1?
$("body").scrollTop(this.$el.offset().top):typeof this.onLoad=="function"&&this.onLoad
.call()},updateFormAvatar:function(){var e;t.currentUser&&(e=s.prototype.imgix_url
("sq72, w=72&h=72&fit=crop",t.currentUser.get("avatar_urls"))),$("form.new_review"
).find("img").attr("src",e)},setOwnershipPermissions:function(e){_.each(this.$(".comment"
,e),this.setOwnershipPermission)},setDeletePermissions:function(e){_.each(this.$(".comment"
,e),this.setDeletePermission)},setBlockPermissions:function(e){_.each(this.$(".comment"
,e),this.setBlockPermission)},setOwnershipPermission:function(e){$el=$(e),this.canDeleteComment
($el)?$el.addClass("comment_owner"):$el.removeClass("comment_owner")},setDeletePermission
:function(e){var t=$(e);this.canDeleteComment(t)?t.find(".delete_review").addClass
("on"):t.find(".delete_review").removeClass("on")},setBlockPermission:function(e)
{this.canFlagUser(e)?$(e).find(".flag_user").addClass("on"):$(e).find(".flag_user"
).removeClass("on")},canFlagUser:function(e){var n=t.currentUser?t.currentUser.toJSON
():!1;if(!n)return!1;var r=$(e).find(".flag_user").data("user_id");return n.id===
r?!1:this.mix&&this.mix.get("user").id===n.id},canDeleteComment:function(e){return n
.loggedIn()&&(n.isAdmin()||n.isJuniorModerator()||this.mix.get("user_id")===t.currentUser
.id||e.data("review_user_id")===t.currentUser.id)},fakeAttributesForBlockedReview
:function(e){reviewAttr.body_html=reviewAttr.body,reviewAttr.created_at_timestamp=
(new Date).getTime()},onSubmit:function(e){if(!n.loggedIn()){t.showSignupView();return}
var i=$(e.currentTarget);return i.is("form")||(i=i.parents("form")),i.data("busy"
)=="1"||i.find("textarea").val().length==0?!1:(i.data("busy","1"),i.jsonh_now(function(
e){i.data("busy","0");if(e.success){var n=e.review;n.user=t.currentUser.toJSON(),
n.mix_user_id=this.mix?this.mix.get("user_id"):null,!n.reviewer_blocked||this.fakeAttributesForBlockedReview
(n);if(e.review.parent_id){var o=new s(n),u=$(f(o));i.replaceWith(u),this.afterCommentRender
(u)}else{var o=new s({id:e.review.parent_id||e.review.id,reviews:[n],hidden:!0}),
a=$(l(o,{"reviews/review":f.template}));this.$("#reviews").prepend(a),a.slideDown
(),this.afterCommentRender(a),i.find('textarea, input[name="review[body_encoded]"]'
).val(""),i.find(".validation_errors, .mentions_highlights").empty(),i.find(".captcha"
).empty().hide()}r.commentOnMix(this.mix)}else{i.find(".validation_errors").html(
e.validation_errors);if(e.captcha){var h=new s(e.captcha);i.find(".captcha").html
(c(h)).show()}}},{spinner:i.find(".spinner"),context:this,with_lock:!0}),!1)},onDeleteClick
:function(e){var t=$(e.currentTarget),n=!!e.skipConfirmation;if(n||confirm("Are you sure you want to delete this comment?"
)){var r=t.parents(".comment"),i=r.parents(".comment_thread");r.fadeOut(150),t.jsonh_now
(function(e){e.success&&(r.hasClass("reply")?r.remove():i.remove())},{type:"delete"
})}return!1},onFlagUserClick:function(e){var n=$(e.target),r=n.data("user_name"),
i=confirm("Are you sure you want to block "+r+"? This will also remove this comment."
),s=n.data("user_id"),o=n.data("comment_id"),u=t.currentUser;if(!(u&&s&&i))return!1
;var a=this.mix.get("user").id===u.id,f=u.id!==s,l=this;if(a&&f){var c=u.flag(s);
c.success(function(){l.onCommentFlagged(o)})}return!1},onCommentFlagged:function(
e){var t=$('.comment[data-review_id="'+e+'"]'),n=jQuery.Event("click");n.skipConfirmation=!0
,t.find("a.delete_review").trigger(n)},onReplyClick:function(e){if(n.loggedOut())
return!0;var r=$(e.currentTarget),i=r.parents(".comment_thread"),o=i.children(".comment:first"
),u=i.find(".reply_form");if(u.length>0)return u.is(":visible")?(u.hide(),!1):(u.
show(),!1);var a=this.mix?this.mix.toJSON():{id:o.data("mix_id")};debugger;var f=new 
s({mix:a,user:t.currentUser.toJSON(),parent_id:i.data("thread_id")});i.append(h(f
)),$textarea=i.find(".reply_form textarea"),$textarea.focus();var l=_.reject(_.map
(i.find("a.name"),function(e){return{id:$(e).data("user_id"),term:$(e).text()}}),
function(e){return e.term==t.currentUser.get("login")}),c=[],p=l.length,d;for(d=0
;d<p;d++){if(c[l[d].id])continue;c[l[d].id]=!0,this.mentions.push(l[d])}for(var d=0
;d<this.mentions.length;d++)this.onReviewBodyKeypress(null,"@"+this.mentions[d].term+" "
);return this.autocompleteview&&this.autocompleteView.setCaretPosition($textarea,
$textarea.val().length),$textarea.is(":visible")||$("html, body").animate({scrollTop
:$(".reply_form textarea").offset().top-200},250),!1},onCancelReplyClick:function(
e){var t=$(e.currentTarget),n=t.parents("form.new_review");return n.length>0&&n.remove
(),!1},onMarkAsSpamClick:function(e){var t=$(e.currentTarget);i.now(t.attr("href"
),function(){},{spinner:!0,type:"post"});var n=t.parents(".comment"),r;n.is(".reply"
)?r=n.data("review_id"):(n=n.parents(".comment_thread"),r=n.data("thread_id")),n.
hide();var s=o.get(this.SPAM_REVIEWS_KEY);return _.isArray(s)?s=s.split(","):s=[]
,s.push(r),o.set(this.SPAM_REVIEWS_KEY,s.join(",")),!1},hideSpamReviews:function(
){var e=o.get(this.SPAM_REVIEWS_KEY);_.isString(e)&&(e=e.split(","),_.each(e,function(
e){$("#"+e).remove()}))},paginateReviews:function(e){var t=$(e.currentTarget),n=t
.attr("href");return this.per_page&&(n+=n.indexOf("?")!=-1?"&":"?",n+="per_page="+
this.per_page),i.now(n,this.render),!1},loadAutocompleteView:function(e){var t=$(
e.currentTarget).parent();if(this.autocompleteView){if(this.autocompleteView.el==
t[0])return;this.autocompleteView.undelegateEvents(),delete this.autocompleteView
}this.$input=t.find('textarea[name="review[body]"]'),this.$encodedInput=t.find('input[name="review[body_encoded]"]'
),this.$highlights=t.find(".mentions_highlights"),require(["views/autocomplete_view"
],_.bind(function(e){this.autocompleteView=new e({el:t,endpoint:"/mentions/autocomplete"
,mix_id:this.mix?this.mix.id:null,categories:["users"],symbol:"@",showViewAll:!1,
autoSelect:!0,placeholder:null,emptyMessage:"No users matched that name.",dataMapper
:this.dataMapper,minQueryLength:1,onEnter:this.onSearchEnter,onSelect:_.bind(this
.onSearchSelect,this)})},this)),t.find("textarea:first").keypress(this.onReviewBodyKeypress
),this.mentions=[]},dataMapper:function(e){return e.users.length?e.users=_.map(e.
users,function(e){return e.name=e.login,e.data={image_url:e.avatar_urls.sq72},e})
:delete e.users,e},onSearchEnter:function(e){return!1},encodedParts:function(){return this
.$encodedInput.val().match(/([^@]+|@\[[^\]]+\])/ig)},onReviewBodyKeydown:function(
e){e&&(e.which==8||e.which==46)&&_.defer(this.onReviewBodyKeypress)},onReviewBodyKeypress
:function(e,t){var n=this.$input.val(),r=e?String.fromCharCode(e.which):null,i;if(
t||r){i=this.autocompleteView&&this.autocompleteView.caretPosition()||0;var s=n.slice
(0,i);t?(s=s.split(/@[^@ ]*$/)[0],n=s+t+n.slice(i),i=s.length+t.length):n=s+r+n.slice
(i)}var o=n,u=n,a;for(a=0;a<this.mentions.length;a++){var f=this.mentions[a];f&&n
.match("@"+f.term)&&(o=o.replace("@"+f.term,"<span>@"+f.term+"</span>"),u=u.replace
("@"+f.term,"@["+f.id+":"+f.term+"]"))}t&&(this.$input.val(n),this.autocompleteView&&
this.autocompleteView.setCaretPosition(this.$input[0],this.$input.val().length)),
this.$highlights.html(o),this.$encodedInput.val(u)},onSearchSelect:function(e){var t=
$(e).data("name"),n,r,i,s=$(e).data("id");n=this.$encodedInput.val(),s=$(e).data("id"
);var o={id:s,term:t};return this.mentions.push(o),this.onReviewBodyKeypress(null
,"@"+t+" "),this.$input.focus(),this.autocompleteView.onBlur(),!1}});return p}),define
("hgn!templates/collections/add_to_collection",["hogan"],function(e){function n()
{return t.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this
;return r.b(n=n||""),r.b('<div class="box_header">'),r.b("\n"+n),r.b('	<a class="shareClose" href="#" title="Close menu" rel="local"><span class="i-close"></span></a>'
),r.b("\n"+n),r.b('	<span class="collecticon collection"></span><strong>Add <em>'
),r.b(r.v(r.f("name",e,t,0))),r.b("</em> to a collection</strong>"),r.b("\n"+n),r
.b('	<div id="collections-spinner" class="spin"><span style="display: none;"></span></div>'
),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b('<ul id="my_collections">'
),r.b("\n"+n),r.b('    <li><br /><div style="margin: 0 auto;" class="large-spinner" id="my-collections-spinner"></div><br /></li>'
),r.b("\n"+n),r.b("</ul>"),r.b("\n"+n),r.b("\n"+n),r.b('<form action="/collections" method="POST" id="create_collection">'
),r.b("\n"+n),r.b('	<input type="text" id="new_collection_name" name="collection[name]" value="" placeholder="New collection" class="roundText" tabindex="10" />'
),r.b("\n"+n),r.b('  <input type="hidden" name="mix_id" value="'),r.b(r.v(r.f("id"
,e,t,0))),r.b('" />'),r.b("\n"+n),r.b('	<input type="submit" class="disabled turquoise_button flatbutton submit" value="Create" id="create_collection_button" tabindex="12" />'
),r.b("\n"+n),r.b('  <textarea name="collection[description]" id="new_collection_description" placeholder="Describe your collection (optional)" class="roundText" style="display: none;" tabindex="11"></textarea>'
),r.b("\n"+n),r.b("  "),r.b("\n"+n),r.b("</form>"),r.b("\n"),r.fl()},"",e,{});return n
.template=t,n}),define("hgn!templates/collections/my_collections",["hogan"],function(
e){function n(){return t.render.apply(t,arguments)}var t=new e.Template(function(
e,t,n){var r=this;return r.b(n=n||""),r.s(r.f("collections",e,t,1),e,t,0,16,665,"{{ }}"
)&&(r.rs(e,t,function(e,t,r){r.b("  <li>"),r.b("\n"+n),r.b('		<div data-id="'),r.
b(r.v(r.f("id",e,t,0))),r.b('" class="my_collection '),r.s(r.f("contains_mix",e,t
,1),e,t,0,86,98,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("contains_mix")}),e.pop()
),r.b('">'),r.b("\n"+n),r.b('			<a href="'),r.b(r.v(r.f("web_path",e,t,0))),r.b('" class="view_link" target="_blank">View</a>'
),r.b("\n"+n),r.b('			<span class="status_icon">'),r.b("\n"+n),r.b('				<span class="i-plus"></span>'
),r.b("\n"+n),r.b('				<span class="i-checkmark"></span>'),r.b("\n"+n),r.b('				<span class="i-x"></span>'
),r.b("\n"+n),r.b("			</span>"),r.b("\n"+n),r.b("			"),r.s(r.f("show_slug",e,t,1)
,e,t,1,0,0,"")||r.b(r.v(r.f("name",e,t,0))),r.b("\n"+n),r.b("			"),r.s(r.f("show_slug"
,e,t,1),e,t,0,386,394,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b(n.v(n.f("slug",e,t,0
)))}),e.pop()),r.b("\n"+n),r.b('			<span class="mixes_count gray">'),r.b("\n"+n),
r.s(r.f("queue_message",e,t,1),e,t,0,466,496,"{{ }}")&&(r.rs(e,t,function(e,t,n){
n.b("					"),n.b(n.t(n.f("queue_message",e,t,0))),n.b("\n")}),e.pop()),r.s(r.f("queue_message"
,e,t,1),e,t,1,0,0,"")||(r.b("					("),r.b(r.v(r.f("mixes_count",e,t,0))),r.b(" ")
,r.s(r.f("pluralize",e,t,1),e,t,0,569,599,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b
("mixes_count playlist playlists")}),e.pop()),r.b(")"),r.b("\n")),r.b("			</span>"
),r.b("\n"+n),r.b("		</div>"),r.b("\n"+n),r.b("	</li>"),r.b("\n")}),e.pop()),r.b("\n"
),r.fl()},"",e,{});return n.template=t,n}),define("views/add_to_collection_view",
["global_trax","views/trax_view","lib/jsonh.jquery","lib/_template_helpers","lib/events"
,"hgn!templates/collections/add_to_collection","hgn!templates/collections/my_collections"
],function(e,t,n,r,i,s,o){var u=t.extend({className:"add_to_collections",collections
:null,closeTimer:null,events:{"click .my_collection":"onCollectionClick","submit #create_collection"
:"createCollection","keyup #new_collection_name":"onNameEnter"},initialize:function(
e){_.bindAll(this,"render","cancelClose","close","closeStillLater"),this.mix=e.mix
,this.mix.attributes&&(this.mix=this.mix.toJSON())},loadCollections:function(){n.
now("/users/"+e.currentUser.id+"/editable_collections",{mix_id:this.mix.id},_.bind
(function(e){for(var t=e.collections.length-1;t>=0;t--)e.collections[t].id=e.collections
[t].id;this.collections=new Backbone.Collection(e.collections);var n=this.collections
.where({slug:"listen-later",mixes_count:0});n.length&&n[0].set({queue_message:"(save to dashboard)"
}),this.renderMixSets()},this),{spinner:this.$("#my-collections-spinner")})},render
:function(){return this.$el.html(s(this.mix)).show(),this.collections?this.renderMixSets
():this.loadCollections(),this.el},showInFacebox:function(){$.facebox(this.$el),this
.faceboxed=!0,this.render()},renderMixSets:function(){var t=new r({collections:this
.collections.toJSON()});e.currentUser.get("admin")&&(t.show_slug=this.show_slug),
this.$("#my_collections").html(o(t)).show()},show_slug:function(){return this.smart_id=="collection:featured"||
this.smart_id=="collection:homepage"},onCollectionClick:function(e){if($(e.target
).hasClass("view_link"))return!0;this.cancelClose();var t=$(e.currentTarget),r=t.
data("id"),s={collection_mix:{collection_id:r,mix_id:this.mix.id}},o,u,a=this.collections
.get(r).get("mixes_count");return t.hasClass("contains_mix")?(o="DELETE",u="/collections_mixes/destroy"
,a+=-1):(o="POST",u="/collections_mixes",a+=1),t.toggleClass("contains_mix"),t.addClass
("just_clicked").hover(function(){},function(){t.removeClass("just_clicked")}),t.
find(".mixes_count").html("("+a+(a==1?" mix":" mixes")+")"),n.now(u,s,_.bind(function(
e){e.status==200&&(this.collections.get(e.collection.id).set({mixes_count:e.collection
.mixes_count}),i.addMixToCollection(this.mix)),this.faceboxed&&this.closeLater()}
,this),{spinner:!1,type:o}),this.updateCurrentUser(),!1},createCollection:function(
e){return this.$("#new_collection_name").val().length>0&&(this.cancelClose(),this
.$("#create_collection_button").hide(),this.$("#create_collection").jsonh_now(_.bind
(function(e){this.collections.add(e.collection),this.render(),this.$("#my_collections"
).scrollTop(5e3),i.createCollection(this.mix),i.addMixToCollection(this.mix),App.
views.tocView&&App.views.tocView.reload()},this),{spinner:this.$("#collections-spinner"
)})),this.closeLater(),this.updateCurrentUser(),!1},onNameEnter:function(e){this.
cancelClose(),$(e.target).val().length>0?(this.$("#create_collection_button").removeClass
("disabled"),this.$("#new_collection_description").slideDown()):this.$("#create_collection_button"
).addClass("disabled")},closeLater:function(){$(document).bind("close.facebox",this
.closeStillLater),this.closeTimer=setTimeout(function(){$.facebox.close()},2500)}
,closeStillLater:function(){setTimeout(this.close,2e3)},cancelClose:function(){clearTimeout
(this.closeTimer)},updateCurrentUser:function(){e.currentUser.set("uses_collections"
,!0),e.currentUser.localSave()},onClose:function(){this.cancelClose(),$(document)
.unbind("close.facebox",this.close)}});return u}),define("lib/link_helper",["global_trax"
,"lib/sessions","lib/events","views/add_to_collection_view","lib/jsonh.jquery"],function(
e,t,n,r,i){var s={},o;return s.follow_link_click=function(r){function u(){$link.addClass
("active").removeClass("inactive").html('<span class="out">Following</span><span class="in">Unfollow</span>'
),$link.siblings(".follow_counter").addClass("active").removeClass("inactive"),$link
.attr("href",$link.attr("href").replace(/follow|toggle_follow/,"unfollow"))}function a
(){$link.removeClass("active").addClass("inactive").html("Follow"),$link.siblings
(".follow_counter").removeClass("active").addClass("inactive"),$link.attr("href",
$link.attr("href").replace(/unfollow|toggle_follow/,"follow"))}function f(){$link
.hasClass("active")?a():u()}$link=$(r.currentTarget),t.loggedIn()?(s.toggle_link(
$link),$link.hasClass("active")?($link.html('<span class="out">Following</span><span class="in">Unfollow</span>'
),n.followUser()):$link.html("Follow"),$link.hasClass("collapse_user")&&$link.closest
(".user_about").slideUp(250)):e.showSignupView();var i=Math.random();o=i,$link.jsonh_now
(function(t){i==o&&t.success?t.user.followed_by_current_user?u():a():(f(),e.update_flash
(t))}),e.refreshSidebarAd()},s.toggle_link=function(e){return e.toggleClass("active"
),e.toggleClass("inactive"),e.addClass("just_clicked"),e.hover(function(){},function(
){e.removeClass("just_clicked")}),!0},s.quick_add_click=function(e){var t=$(e.currentTarget
).data("mix_id"),i=$(e.currentTarget).data("mix_name");App.views.addToCollectionView=new 
r({mix:{id:t,name:i}}),App.views.addToCollectionView.showInFacebox(),n.clickAddToCollection
()},s.quick_remove_click=function(e){var t=$(e.currentTarget).data("mix-id"),r=$(
e.currentTarget).data("smart-id"),s=$.Deferred();return i.now("/mix_sets/"+r+"/hide_mix"
,{mix_id:t},s.resolve,{type:"POST"}),n.clickRemoveMixFromHistory(),s},s.clear_collection_click=
function(e){var t=$(e.currentTarget).attr("href"),r=$.Deferred();return confirm("Are you sure you want to remove all the mixes from this collection?"
)&&(i.now(t,{},r.resolve,{type:"DELETE"}),n.clickClearCollection()),r},s}),define
("hgn!templates/users/_about",["hogan"],function(e){function n(){return t.render.
apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r.b(n=n||""
),r.b('<div class="full-width user_about profile clear favable vcard dark-bg"  style="position: relative; overflow: hidden;">'
),r.b("\n"+n),r.b('  <div class="background-blur-container">'),r.b("\n"+n),r.b('    <canvas class="background-blur" width="100%" height="100%" style="width: 100%; height: 100%; opacity: 0.0;" data-palette="'
),r.s(r.f("color_palette",e,t,1),e,t,0,305,311,"{{ }}")&&(r.rs(e,t,function(e,t,n
){n.b(n.v(n.d(".",e,t,0))),n.b(",")}),e.pop()),r.b('"></canvas>'),r.b("\n"+n),r.b
("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div id="profile_top" class="user_about about container">'
),r.b("\n"+n),r.b('    <div class="row">'),r.b("\n"+n),r.b('      <div id="user_avatar" class="col-xs-4 col-md-3 col-lg-2">'
),r.b("\n"+n),r.b('        <a href="'),r.b(r.v(r.f("web_path",e,t,0))),r.b('" rel="user" title="'
),r.b(r.v(r.f("login",e,t,0))),r.b("'s profile\">"),r.b("\n"+n),r.b("      	  "),
r.s(r.f("avatar_img",e,t,1),e,t,0,592,610,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b
("sq100, w=100&h=100")}),e.pop()),r.b("\n"+n),r.b("        </a>"),r.b("\n"+n),r.b
("        "),r.s(r.f("designation",e,t,1),e,t,0,663,718,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b('<span class="badge_small '),n.b(n.v(n.f("designation",e,t,0))),n.b('_small"></span>'
)}),e.pop()),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),
r.b('      <div class="user_details col-xs-8 col-md-9 col-lg-10">'),r.b("\n"+n),r
.b('      	<h1 class="nickname fn"><a href="'),r.b(r.v(r.f("web_path",e,t,0))),r.
b('">'),r.b(r.v(r.f("login",e,t,0))),r.b("</a></h1>"),r.b("\n"+n),r.b("\n"+n),r.s
(r.f("college_name",e,t,1),e,t,0,910,973,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('          <div class="college">'
),n.b(n.v(n.f("college_name",e,t,0))),n.b("</div>"),n.b("\n")}),e.pop()),r.s(r.f("college_name"
,e,t,1),e,t,1,0,0,"")||(r.b('          <div class="location">'),r.b(r.v(r.f("location"
,e,t,0))),r.b("</div>"),r.b("\n")),r.b("\n"+n),r.b("\n"+n),r.b('        <div class="options p p_not_owner on '
),r.s(r.f("location",e,t,1),e,t,0,1154,1159,"{{ }}")&&(r.rs(e,t,function(e,t,n){n
.b("fixed")}),e.pop()),r.b('" data-owner_id="'),r.b(r.v(r.f("id",e,t,0))),r.b('">'
),r.b("\n"+n),r.b(r.rp("users/follow_button",e,t,"        	")),r.b("        </div>"
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("    </div><!--.row-->"),r.b("\n"+
n),r.b('    <div class="clear"></div>'),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r
.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/users/_follow_button"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<a href="'),r.b(r.
v(r.f("path",e,t,0))),r.b('/toggle_follow" title="Follow '),r.b(r.v(r.f("login",e
,t,0))),r.b('" class="follow turquoise_button flatbutton p p_not_owner" data-owner_id="'
),r.b(r.v(r.f("id",e,t,0))),r.b('" data-user_id="'),r.b(r.v(r.f("id",e,t,0))),r.b
('" rel="signup_required nofollow"><span class="text">'),r.b("\n"+n),r.s(r.f("followed_by_current_user"
,e,t,1),e,t,0,242,259,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("    Following"),n.
b("\n")}),e.pop()),r.s(r.f("followed_by_current_user",e,t,1),e,t,1,0,0,"")||(r.b("	  Follow"
),r.b("\n")),r.b("  </span>"),r.b("\n"+n),r.b("</a>"),r.fl()},"",e,{});return n.template=
t,n}),define("views/user_about_view",["views/trax_view","lib/_template_helpers","lib/link_helper"
,"hgn!templates/users/_about","hgn!templates/users/_follow_button"],function(e,t,
n,r,i){var s=e.extend({id:"user_about",events:{"click .follow":"onFollowClick"},initialize
:function(e){this.user=e.user},render:function(){var e=new t(this.user);return this
.$el.html(r(e,{"users/follow_button":i.template})),this},onFollowClick:function(e
){return n.follow_link_click(e),!1}});return s}),define("hgn!templates/shared/sharing"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b("<div>"),r.b("\n"+n
),r.b('  <div class="share-buttons-block">'),r.b("\n"+n),r.b('    <span class="share-group">'
),r.b("\n"+n),r.s(r.f("facebook",e,t,1),e,t,0,92,356,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.b('      <a class="fb popupShare flatbutton shareOpenGraph"'),r.b("\n"+n
),r.b('        href="#"'),r.b("\n"+n),r.b('        title="Share on Facebook"'),r.
b("\n"+n),r.b('        data-win-width="500"'),r.b("\n"+n),r.b('        data-win-height="800"'
),r.b("\n"+n),r.b('        data-network="facebook">'),r.b("\n"+n),r.b('        <span class="logo i-facebook"></span>'
),r.b("\n"+n),r.b("      </a>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("twitter"
,e,t,1),e,t,0,389,968,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('      <a class="tw popupShare flatbutton"'
),r.b("\n"+n),r.b('        href="https://twitter.com/share?original_referer='),r.
b(r.v(r.f("url_escaped",e,t,0))),r.b("&source=tweetbutton&text="),r.b(r.v(r.f("description"
,e,t,0))),r.b("&related="),r.b("\n"+n),r.b("        8tracks:%20The%20world's%20best%20internet%20radio,"
),r.b(r.v(r.f("related_twitter",e,t,0))),r.b("&url="),r.b(r.v(r.f("url_escaped",e
,t,0))),r.b(r.v(r.d("sources.twitter",e,t,0))),r.b('%3Futm_source=twitter.com%26utm_medium=referral%26utm_content=mix-page%26utm_campaign=twitter_button"'
),r.b("\n"+n),r.b('        rel="popup"'),r.b("\n"+n),r.b('        title="Tweet"')
,r.b("\n"+n),r.b('        data-win-width="420"'),r.b("\n"+n),r.b('        data-win-height="550"'
),r.b("\n"+n),r.b('        data-network="Twitter">'),r.b("\n"+n),r.b('        <span class="logo i-twitter"></span>'
),r.b("\n"+n),r.b("      </a>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("tumblr"
,e,t,1),e,t,0,999,2047,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('      <a class="tb popupShare flatbutton"'
),r.b("\n"+n),r.s(r.f("embedCode",e,t,1),e,t,0,1064,1187,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b('          href="http://www.tumblr.com/share/video?embed='),n.b(n.v(n.
f("embedCode",e,t,0))),n.b("&name="),n.b(n.v(n.f("name",e,t,0))),n.b("&caption=")
,n.b(n.v(n.f("description_html",e,t,0))),n.b('"'),n.b("\n")}),e.pop()),r.s(r.f("embedCode"
,e,t,1),e,t,1,0,0,"")||(r.s(r.f("image",e,t,1),e,t,0,1236,1554,"{{ }}")&&(r.rs(e,
t,function(e,t,n){n.b('            href="http://www.tumblr.com/widgets/share/tool?posttype=photo&content='
),n.b(n.v(n.f("tumblr_image",e,t,0))),n.b("&caption="),n.b(n.v(n.f("description_html"
,e,t,0))),n.b("&tags="),n.b(n.v(n.f("hash_tags",e,t,0))),n.b("&canonicalUrl="),n.
b(n.v(n.f("url_escaped",e,t,0))),n.b("&clickthroughUrl="),n.b(n.v(n.f("url_escaped"
,e,t,0))),n.b('%3Futm_source=tumblr.com%26utm_medium=referral%26utm_content=mix-page%26utm_campaign=tumblr_button"'
),n.b("\n")}),e.pop()),r.s(r.f("image",e,t,1),e,t,1,0,0,"")||(r.b('          href="http://www.tumblr.com/share/link?name='
),r.b(r.v(r.f("name",e,t,0))),r.b("&description="),r.b(r.v(r.f("description_html"
,e,t,0))),r.b("&url="),r.b(r.v(r.f("url_escaped",e,t,0))),r.b('%3Futm_source=tumblr.com%26utm_medium=referral%26utm_content=mix-page%26utm_campaign=tumblr_button"'
),r.b("\n"))),r.b('        rel="popup"'),r.b("\n"+n),r.b('        title="Post to Tumblr"'
),r.b("\n"+n),r.b('        data-win-width="450"'),r.b("\n"+n),r.b('        data-win-height="430"'
),r.b("\n"+n),r.b('        data-network="Tumblr">'),r.b("\n"+n),r.b('        <span class="logo i-tumblr"></span>'
),r.b("\n"+n),r.b("      </a>"),r.b("\n")}),e.pop()),r.b("    </span>"),r.b("\n"+
n),r.b("\n"+n),r.b('    <span class="share-group">'),r.b("\n"+n),r.s(r.f("stumbleupon"
,e,t,1),e,t,0,2125,2455,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('      <a class="su popupShare flatbutton"'
),r.b("\n"+n),r.b('        href="http://www.stumbleupon.com/submit?url='),r.b(r.v
(r.f("url_escaped",e,t,0))),r.b('"'),r.b("\n"+n),r.b('        rel="popup"'),r.b("\n"+
n),r.b('        title="Share on Stumbleupon"'),r.b("\n"+n),r.b('        data-win-width="800"'
),r.b("\n"+n),r.b('        data-win-height="600"'),r.b("\n"+n),r.b('        data-network="Stumbleupon">'
),r.b("\n"+n),r.b('        <span class="logo i-stumbleupon"></span>'),r.b("\n"+n)
,r.b("      </a>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.b("      <!-- refactored using gplus share link for utm tracking -->"
),r.b("\n"+n),r.s(r.f("google",e,t,1),e,t,0,2556,3417,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.b('      <a class="g-interactivepost gl popupShare flatbutton"'),r.b("\n"+
n),r.b('        href="https://plus.google.com/share?url='),r.b(r.v(r.f("url_escaped"
,e,t,0))),r.b('%3Futm_source=google.com%26utm_medium=referral%26utm_content=mix-page%26utm_campaign=google_button"'
),r.b("\n"+n),r.b('        rel="popup"'),r.b("\n"+n),r.b('        title="Share on Google+"'
),r.b("\n"+n),r.b('        data-win-width="500"'),r.b("\n"+n),r.b('        data-win-height="600"'
),r.b("\n"+n),r.b('        data-network="Google">'),r.b("\n"+n),r.b('      <!--   data-contenturl="'
),r.b(r.v(r.f("decoded_url",e,t,0))),r.b("?"),r.b(r.v(r.d("sources.google",e,t,0)
)),r.b('"'),r.b("\n"+n),r.b('        data-contentdeeplinkid="'),r.b(r.v(r.f("path"
,e,t,0))),r.b('"'),r.b("\n"+n),r.b('        data-clientid="'),r.b(r.v(r.f("GOOGLE_CLIENT_ID"
,e,t,0))),r.b('"'),r.b("\n"+n),r.b('        data-cookiepolicy="single_host_origin"'
),r.b("\n"+n),r.b('        data-prefilltext="'),r.b(r.v(r.f("hash_tags",e,t,0))),
r.b('"'),r.b("\n"+n),r.b('        data-calltoactionlabel="LISTEN"'),r.b("\n"+n),r
.b('        data-calltoactionurl="'),r.b(r.v(r.f("decoded_url",e,t,0))),r.b("?"),
r.b(r.v(r.d("sources.google",e,t,0))),r.b('"'),r.b("\n"+n),r.b('        data-network="Google"'
),r.b("\n"+n),r.b('        data-calltoactiondeeplinkid="'),r.b(r.v(r.f("path",e,t
,0))),r.b('" -->'),r.b("\n"+n),r.b('        <span class="logo i-google-plus"></span>'
),r.b("\n"+n),r.b("      </a>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("pinterest"
,e,t,1),e,t,0,3450,3829,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b("      <a"),r.b("\n"+
n),r.b('       class="pn popupShare flatbutton"'),r.b("\n"+n),r.b('       href="http://pinterest.com/pin/create/button/?url='
),r.b(r.v(r.f("url_escaped",e,t,0))),r.b(r.v(r.d("sources.pinterest",e,t,0))),r.s
(r.f("image",e,t,1),e,t,0,3603,3627,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("&media="
),n.b(n.v(n.f("image_escaped",e,t,0)))}),e.pop()),r.b('"'),r.b("\n"+n),r.b('       rel="popup"'
),r.b("\n"+n),r.b('       title="Pin it"'),r.b("\n"+n),r.b('       data-win-width="720"'
),r.b("\n"+n),r.b('       data-height="560"'),r.b("\n"+n),r.b('       data-network="Pinterest">'
),r.b("\n"+n),r.b('       <span class="logo i-pinterest"></span>'),r.b("\n"+n),r.
b("      </a>"),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("email",e,t,1),e,t,0,3861
,4065,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b("      <a"),r.b("\n"+n),r.b('       class="em popupShare flatbutton"'
),r.b("\n"+n),r.b('       href="#"'),r.b("\n"+n),r.b('       rel="local"'),r.b("\n"+
n),r.b('       data-network="Email"'),r.b("\n"+n),r.b('       title="Share via email">'
),r.b("\n"+n),r.b('       <span class="logo i-email"></span>'),r.b("\n"+n),r.b("      </a>"
),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("embed",e,t,1),e,t,0,4093,4287,"{{ }}"
)&&(r.rs(e,t,function(e,t,r){r.b('      <a class="eb popupShare flatbutton"'),r.b
("\n"+n),r.b('       href="#"'),r.b("\n"+n),r.b('       rel="local"'),r.b("\n"+n)
,r.b('       title="Embed player"'),r.b("\n"+n),r.b('       data-network="Embed">'
),r.b("\n"+n),r.b('       <span class="logo i-embed"></span>'),r.b("\n"+n),r.b("      </a>"
),r.b("\n")}),e.pop()),r.b("    </span>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n)
,r.b("\n"+n),r.b('  <a class="shareClose flatbutton" href="#" title="Close menu" rel="local">Close</a>'
),r.b("\n"+n),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=
t,n}),define("lib/trax_facebook",["lib/traxhead"],function(e){var t={};return t.loadFacebookJs=
_.once(function(){if(ParsedLocation.urlParams&&ParsedLocation.urlParams["extJs"]=="nope"
)return!1;window.fbAsyncInit=e.onFbInit,function(e,t,n){var r,i=e.getElementsByTagName
(t)[0];if(e.getElementById(n))return;r=e.createElement(t),r.id=n,r.src="//connect.facebook.net/en_US/all.js#xfbml=1&appId=166738216681933"
,i.parentNode.insertBefore(r,i)}(document,"script","facebook-jssdk")}),t.loadFacebookMusicJs=
_.once(function(){window.fbAsyncInit=e.onFbMusicInit,function(e,t,n){var r,i=e.getElementsByTagName
(t)[0];if(e.getElementById(n))return;r=e.createElement(t),r.id=n,r.src="//connect.facebook.net/en_US/all/vb.js#xfbml=1&appId=166738216681933"
,i.parentNode.insertBefore(r,i)}(document,"script","facebook-jssdk")}),t.parseXFBML=
function(n,r){e.FbLoaded?FB.XFBML.parse(n,r):(t.loadFacebookJs(),_.delay(t.parseXFBML
,100,n,r))},t.openFbDialog=function(e,n,r){if(typeof FB=="undefined"){t.loadFacebookJs
(),_.delay(this.openFbDialog,500,e,n,r);return}var i=_.extend(n,{method:e,display
:"dialog",app_id:0x97a5c42d01cd});FB.ui(i,_.bind(function(){_.isFunction(r)&&r(),
App.Events.shareMix({network:"facebook",action:e+" Dialog",mix:this.mix}),this.hideSharing
()},this))},t}),define("views/sharing_view",["global_trax","views/trax_view","hgn!templates/shared/sharing"
,"lib/trax_facebook"],function(e,t,n,r){var i=t.extend({className:"share_view",events
:{"click .em":"onEmailClick","click .eb":"onEmbedClick","click .popupShare":"onPopupShareClick"
,"click .shareOpenGraph":"onShareOpenGraphClick"},initialize:function(e){this.atts=
{},this.childViews=[],this.mix=e.mix,this.atts.decoded_url=e.url,this.atts.url=encodeURIComponent
(e.url),this.atts.url_escaped=this.atts.url,this.atts.name=encodeURIComponent(e.name
),this.atts.embedCode=typeof e.embedCode=="string"?encodeURIComponent(e.embedCode
):!1,this.atts.image=e.image,this.atts.description=encodeURIComponent(e.description
),this.atts.description_html=e.description_html?encodeURIComponent(e.description_html
):this.atts.description,this.atts.twitter_related=encodeURIComponent(e.twitter_related
),this.mix&&(this.atts.path=this.mix.get("path")),r.loadFacebookJs(),r.parseXFBML
(),this.atts.hash_tags=this.hashTags(),_.each(e.buttons,_.bind(function(e){this.atts
[e]=!0},this)),this.template=n},hashTags:function(){if(this.mix){var e=["8tracks"
,"playlist"],t=this.mix.get("tag_list_cache").split(","),n=this.mix.get("artist_tags"
);return e=e.concat(t,n),e=_.map(e,function(e){return e?e.replace("#",""):""}),e}
},render:function(){return this.atts.sources={pinterest:escape("?utm_source=pinterest"
)},this.atts.image&&(this.atts.tumblr_image=encodeURIComponent(this.atts.image.split
("?")[0]+"?fm=jpg&fit=max&w=1024&h=1024"),this.atts.image_escaped=encodeURIComponent
(this.atts.image)),this.atts.GOOGLE_CLIENT_ID=window.GOOGLE_CLIENT_ID,this.$el.html
(this.template(this.atts)),this.el},fileFormat:function(){return this.atts.image.
includes("gif")?"gif":"jpg"},afterRender:function(){this.renderGooglePlus()},renderGooglePlus
:function(){gapi.interactivepost.go()},onEmailClick:function(){return this.mixRecommendView?
$.facebox(this.mixRecommendView.el):require(["views/mix_recommend_view"],_.bind(function(
t){this.mixRecommendView=new t({mix:this.mix,user:e.currentUser,parentView:this})
,this.childViews.push(this.mixRecommendView),$.facebox(this.mixRecommendView.render
().el)},this)),this.trigger("shareClick"),!1},onEmbedClick:function(e){this.trigger
("shareClick");if(this.mix){$.facebox('<div class="large-spinner" id="embed-spinner"></div>'
);var t=this.mix;return require(["views/embed_mix_lightbox_view"],function(e){var n=new 
e({mix:t,$sidebarAd:$("#sidebar_ad")});n.show()}),!1}return!0},onPopupShareClick:
function(e){this.trigger("shareClick");if(this.mix){var t=$(e.currentTarget).data
("network"),n=this.mix.get("user");TraxEvents.track("share attempt",{event_type:"click"
,content_type:"mix",page_type:"mix",share_target:t,mix_id:this.mix.get("id"),profile_id
:n&&n.id}),App.Events.clickMixShareOption({network:t,action:"share",url:"https://8tracks.com"+
this.mix.get("web_path")})}},onShareOpenGraphClick:function(){this.trigger("shareClick"
);var e=unescape(this.atts.url).replace(/^https{0,1}:/,"https:");FB.ui({method:"share"
,href:e.concat("?utm_source=facebook.com&utm_medium=referral&utm_content=mix-page&utm_campaign=facebook_button"
)},function(e){})}});return i}),define("hgn!templates/mixes/pick_next_mix",["hogan"
],function(e){function n(){return t.render.apply(t,arguments)}var t=new e.Template
(function(e,t,n){var r=this;return r.b(n=n||""),r.b("<h2>Pick next playlist</h2>"
),r.b("\n"+n),r.b("\n"+n),r.b('<div id="selected_nextmix">'),r.b("\n"+n),r.s(r.f("pick_next_mix"
,e,t,1),e,t,0,77,278,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('    <div class="mix selected">'
),r.b("\n"+n),r.b('      <img alt="'),r.b(r.v(r.f("name",e,t,0))),r.b('" class="cover sq56" default="true" src="'
),r.b(r.v(r.d("cover_urls.sq56",e,t,0))),r.b('" />'),r.b("\n"+n),r.b('      <div class="title">'
),r.b(r.v(r.f("name",e,t,0))),r.b("</div>"),r.b("\n"+n),r.b("      "),r.b(r.v(r.d
("user.login",e,t,0))),r.b("<br />"),r.b("\n"+n),r.b("    </div>"),r.b("\n")}),e.
pop()),r.s(r.f("pick_next_mix",e,t,1),e,t,1,0,0,"")||(r.b('    <div class="mix">'
),r.b("\n"+n),r.b('      <img class="cover sq56" default="true" src="/images/mix_covers_v2/sq56.gif" />'
),r.b("\n"+n),r.b('      <div class="title">None selected</div>'),r.b("\n"+n),r.b
("    </div>"),r.b("\n")),r.b("\n"+n),r.b('  <div id="nextmix_instructions">'),r.
b("\n"+n),r.b('      To provide a better experience for listeners, pick another DJ\'s playlist &mdash; based on style, mood or theme &mdash; to play after this mix.  Subscribe to <a href="/plus">8tracks+</a> to pick your own mix.'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b('  <div class="clearfix"></div>'),r
.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b('<div id="pick_next_mix">  '
),r.b("\n"+n),r.b('    <div id="pick_controls">'),r.b("\n"+n),r.b('      <input id="mixes_q" name="q" placeholder="Search playlists" type="text" />'
),r.b("\n"+n),r.b('      <div id="nextmix-spinner" class="spin"><span style="display:none">&nbsp;</span></div>'
),r.b("\n"+n),r.b('      <span class="searchtabs">'),r.b("\n"+n),r.b('        <a href="#" id="likedmixes" class="selected">Liked playlists</a>'
),r.b("\n"+n),r.b('        <a href="#" id="mixfeed">Feed</a>'),r.b("\n"+n),r.b('        <a href="#" id="allmixes" >All playlists</a>'
),r.b("\n"+n),r.b('          <a href="#" id="mymixes">My playlists</a>'),r.b("\n"+
n),r.b("      </span>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  "),r.b("\n"+
n),r.b('    <div id="mix_selector" class="results clear">  '),r.b("\n"+n),r.b('    	  <ul id="mixes_search_results">'
),r.b("\n"+n),r.b("        </ul>          "),r.b("\n"+n),r.b("    </div>"),r.b("\n"+
n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b('<form accept-charset="UTF-8" action="/mixes/'
),r.b(r.v(r.d("mix.id",e,t,0))),r.b('" class="edit_mix" id="pick_next_mix_form" method="post">'
),r.b("\n"+n),r.b('<input id="mix_next_mix_id" name="mix[next_mix_id]" type="hidden" value="'
),r.b(r.v(r.d("pick_next_mix.id",e,t,0))),r.b('" />'),r.b("\n"+n),r.b("\n"+n),r.b
('  <div class="save">'),r.b("\n"+n),r.b('          <input class="green_bt" name="mix[commit]" title="Save" type="submit" value="Save" />'
),r.b("\n"+n),r.b('          <div id="pick_next_mix-spinner" class="spin"><span style="display:none">&nbsp;</span></div>'
),r.b("\n"+n),r.b('          <div style="clear: both;"></div> '),r.b("\n"+n),r.b("  </div>"
),r.b("\n"+n),r.b("\n"+n),r.b("</form>"),r.fl()},"",e,{});return n.template=t,n})
,define("views/pick_next_mix_view",["views/trax_view","global_trax","hgn!templates/mixes/pick_next_mix"
,"lib/jsonh.jquery"],function(e,t,n,r){var i=e.extend({id:"pick_next_mix_wrapper"
,search_timer:null,initialize:function(e){this.$el=$(this.el),this.mix=e.mix,_.bindAll
(this,"search_q"),this.template=n},render:function(e){this.$el.html(this.template
({mix:this.mix,pick_next_mix:e}))},show:function(){r.now_with_context("/mixes/"+this
.mix.id+"/next_mix",this,function(e){this.render(e.pick_next_mix),$.facebox(this.
el),this.search_next_mixes("liked")})},events:{"click .save input":"save","click #mix_selector li.enabled"
:"pick","click .searchtabs a":"switchView","keyup #mixes_q":"delayed_search","click #mix_selector .more"
:"more"},save:function(e){return r.now(this.$("#pick_next_mix_form")[0].action,{mix
:{next_mix_id:$("#mix_next_mix_id").val()}},function(){$.facebox.close(),setTimeout
(function(){t.update_flash({notices:"Next mix selected successfully."})},750)},{type
:"PUT"}),!1},pick:function(e){var t=$(e.currentTarget);$("#mix_selector .mix").removeClass
("selected"),t.addClass("selected");var n=t.attr("id").split("mix_");return $("#mix_next_mix_id"
).val(n[1]),$("#selected_nextmix .mix").html(t.html()).addClass("selected"),!1},switchView
:function(e){$(e.currentTarget).addClass("selected").siblings().removeClass("selected"
);switch(e.currentTarget.id){case"allmixes":this.search_next_mixes("hot",1);break;
case"mixfeed":this.search_next_mixes("following",1);break;case"mymixes":this.search_next_mixes
("own",1);break;case"likedmixes":this.search_next_mixes("liked",1)}return!1},delayed_search
:function(){return clearTimeout(this.search_timer),this.search_timer=setTimeout(this
.search_q,250),!1},search_q:function(){this.search_next_mixes("/mixes.jsonh?&include=mixes_with_users&q="+
encodeURIComponent(this.$("#mixes_q").val())),this.$(".searchtabs #allmixes").addClass
("selected").siblings().removeClass("selected")},search_next_mixes:function(e,t){
this.$("#nextmix-spinner").children("span").show();var n="/mixes.jsonh?view="+e+"&include=mixes_with_users,pages&page="+
t;$.getJSON(n,_.bind(function(t){var n=t.mix_set,r="";n.pagination.current_page==1&&
(r='<ul id="mixes_search_results">');for(key in n.mixes){var i=n.mixes[key];r+=this
.next_mix_partial(i)}n.pagination.current_page==1?(r+="</ul>",n.pagination.next_page&&
(r+='<div class="pagination more_pagination"><a href="#" data-view="'+e+'" data-page="'+
n.pagination.next_page+'" class="more flatbutton turquoise_button" title="More">More</a></div>'
),this.$("#mix_selector").html(r)):(this.$("#mixes_search_results").append(r),n.pagination
.next_page?this.$("#mix_selector .more").data("page",n.pagination.next_page):this
.$("#mix_selector .more_pagination").hide()),$("#nextmix-spinner").children("span"
).hide(),this.search_timer=null},this))},more:function(e){return this.search_next_mixes
($(e.currentTarget).data("view"),$(e.currentTarget).data("page")),!1},next_mix_partial
:function(e){var n="enabled";return e.user.id===t.currentUser.id&&!t.currentUser.
get("subscribed")&&(n="disabled"),'<li class="'+n+' mix" id="mix_'+e.id+'"><img src="'+
e.cover_urls.sq56+'" class="cover sq56">'+'<div class="title">'+e.name.substring(0
,50)+"</div>"+e.user.login+"</li>"}});return i}),define("hgn!templates/mixes/_display"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="drop_box_overlay" style="display: none;"></div>'
),r.b("\n"+n),r.b('<div id="drop_box_text" style="display: none;">Drop files here to add tracks or artwork to your playlist</div>'
),r.b("\n"+n),r.b("\n"+n),r.b('<article id="mix_wrapper" itemscope itemtype="http://schema.org/MusicRecording" class="full-width">'
),r.b("\n"+n),r.b("  <!-- schema.org tags -->"),r.b("\n"+n),r.b('  <meta itemprop="url" content="http://8tracks.com'
),r.b(r.v(r.f("web_path",e,t,0))),r.b('" />'),r.b("\n"+n),r.b("\n"+n),r.b('  <div itemprop="byArtist" itemscope itemtype="http://schema.org/MusicGroup" style="display:none;">'
),r.b("\n"+n),r.b('    <a href="'),r.b(r.v(r.d("user.web_path",e,t,0))),r.b('"><span itemprop="name">'
),r.b(r.v(r.d("user.login",e,t,0))),r.b("</span></a>"),r.b("\n"+n),r.b("  </div>"
),r.b("\n"+n),r.b("\n"+n),r.b('  <div itemprop="audio" itemscope itemtype="http://schema.org/AudioObject" style="display: none;">'
),r.b("\n"+n),r.b('    <meta itemprop="embedUrl" content="https://8tracks.com/mixes/'
),r.b(r.v(r.f("id",e,t,0))),r.b('/player_v3_universal/autoplay" />'),r.b("\n"+n),
r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <meta name="thumbnailUrl" content="'
),r.s(r.f("mix_cover_url",e,t,1),e,t,0,823,841,"{{ }}")&&(r.rs(e,t,function(e,t,n
){n.b("sq100, w=100&h=100")}),e.pop()),r.b('" />'),r.b("\n"+n),r.b('  <meta name="image" content="'
),r.s(r.f("mix_cover_url",e,t,1),e,t,0,912,930,"{{ }}")&&(r.rs(e,t,function(e,t,n
){n.b("sq500, w=640&h=640")}),e.pop()),r.b('" />'),r.b("\n"+n),r.b("  <!-- end schema.org tags -->"
),r.b("\n"+n),r.b("\n"+n),r.b('	<div id="play_area" class="clear">'),r.b("\n"+n),
r.b('   <div class="background-blur-container displaymode">'),r.b("\n"+n),r.b('      <canvas class="background-blur" width="100%" height="100%" style="width: 100%; height: 100%; opacity: 0.0;" data-palette="'
),r.s(r.f("palette",e,t,1),e,t,0,1216,1222,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.
b(n.v(n.d(".",e,t,0))),n.b(",")}),e.pop()),r.b('"></canvas>'),r.b("\n"+n),r.b('      <!--div class="background-blur" style="background-image: url(\''
),r.s(r.f("mixpage_mix_cover_url",e,t,1),e,t,0,1340,1358,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("sq500, w=640&h=640")}),e.pop()),r.b("');\"></div-->"),r.b("\n"+n),r.b
("    </div>"),r.b("\n"+n),r.b("\n"+n),r.b('    <div class="container clearfix displaymode dark-bg">'
),r.b("\n"+n),r.b('    <div class="row" id="mix_audio">'),r.b("\n"+n),r.b('     <div class="col-xl-4 col-md-4 col-sm-6 clearfix">'
),r.b("\n"+n),r.b('      <div id="mix_art_wrapper">'),r.b("\n"+n),r.b("    "),r.b
("\n"+n),r.s(r.f("async",e,t,1),e,t,1,0,0,"")||(r.b("        <script>"),r.b("\n"+
n),r.b("          if (typeof($) !== 'function') {"),r.b("\n"+n),r.b("            document.write('<div id=\"cover_facade\"></div>');"
),r.b("\n"+n),r.b("          }"),r.b("\n"+n),r.b("          document.write('<div id=\"cover_facade\"></div>');"
),r.b("\n"+n),r.b("          window.hideFacade = function() {"),r.b("\n"+n),r.b("            var facade = document.getElementById('cover_facade');"
),r.b("\n"+n),r.b("            if (facade) facade.className = 'hidden';"),r.b("\n"+
n),r.b("          }"),r.b("\n"+n),r.b("          var src = '"),r.s(r.f("mix_cover_url"
,e,t,1),e,t,0,2018,2036,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq500, w=640&h=640"
)}),e.pop()),r.b("';"),r.b("\n"+n),r.b("          if (src.match('imgix') && window.dpr !== 1) {"
),r.b("\n"+n),r.b("            src = src + '&dpr=' + window.dpr;"),r.b("\n"+n),r.
b("          }"),r.b("\n"+n),r.b("\n"+n),r.b('          document.write(\'<img src="\' + src + \'" class="cover sq500" alt="'
),r.b(r.v(r.f("name",e,t,0))),r.b('" id="cover_art" onload="window.hideFacade()"/>\')'
),r.b("\n"+n),r.b("        </script>"),r.b("\n"+n),r.b("\n"+n),r.b("        <noscript>"
),r.b("\n"+n),r.b('          <img src="'),r.s(r.f("mix_cover_url",e,t,1),e,t,0,2380
,2398,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq500, w=640&h=640")}),e.pop()),r.
b('" class="cover sq500" alt="'),r.b(r.v(r.f("name",e,t,0))),r.b('" id="cover_art" />'
),r.b("\n"+n),r.b("        </noscript>"),r.b("\n")),r.s(r.f("async",e,t,1),e,t,0,2517
,2712,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('        <div id="cover_facade"></div>'
),r.b("\n"+n),r.b('        <img src="'),r.s(r.f("mix_cover_url",e,t,1),e,t,0,2592
,2610,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq500, w=640&h=640")}),e.pop()),r.
b('" class="cover sq500" alt="'),r.b(r.v(r.f("name",e,t,0))),r.b('" id="cover_art" onload="hideFacade();" />'
),r.b("\n")}),e.pop()),r.b("\n"+n),r.s(r.f("read_only",e,t,1),e,t,0,2744,2832,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b('        <!--span class="quick_actions"><span class="unplayable"></span></span-->'
),n.b("\n")}),e.pop()),r.s(r.f("read_only",e,t,1),e,t,1,0,0,"")||(r.b('        <a href="#" id="play_overlay" class="quick_actions hidden-international" onclick="window.playMixOnLoad=1; return false;" tile="Play mix" class="">'
),r.b("\n"+n),r.b('          <span class="quick_actions">'),r.b("\n"+n),r.b('            <span class="quick_play">'
),r.b("\n"+n),r.b('              <span class="i i-play"></span>'),r.b("\n"+n),r.b
("            </span>"),r.b("\n"+n),r.b("          </span>"),r.b("\n"+n),r.b("        </a>"
),r.b("\n")),r.b("\n"+n),r.b('      <span class="quick_actions secondary_cta visible-international hidden-xs">'
),r.b("\n"+n),r.b('        <a href="#" id="play_on_youtube_container">'),r.b("\n"+
n),r.b('          <span class="flatbutton" id="play_on_youtube">'),r.b("\n"+n),r.
b('            <span class="i-play"></span> Play via YouTube'),r.b("\n"+n),r.b("          </span>"
),r.b("\n"+n),r.b("        </a>"),r.b("\n"+n),r.b("      </span>"),r.b("\n"+n),r.
b("\n"+n),r.b('      <span class="quick_actions secondary_cta download hidden hidden-international">'
),r.b("\n"+n),r.b('        <a href="'),r.b(r.v(r.f("dynamic_branch_io_deeplink",e
,t,0))),r.b('" id="openInAppContainer">'),r.b("\n"+n),r.b('          <span class="flatbutton" id="openInApp">'
),r.b("\n"+n),r.b('            <span class="i-mobile-device"></span>'),r.b("\n"+n
),r.b('            <span class="text">OPEN IN APP</span>'),r.b("\n"+n),r.b("          </span>"
),r.b("\n"+n),r.b("        </a>"),r.b("\n"+n),r.b("      </span>"),r.b("\n"+n),r.
b("\n"+n),r.b('      <div class="flaggings graybox tooltip_container">'),r.b("\n"+
n),r.b('        <a class="flag_button nsfw red" href="#" rel="nofollow login_required" data-href="/flaggings?flag=nsfw_cover&mix_id='
),r.b(r.v(r.f("id",e,t,0))),r.b('"><span class="i-flag"></span> <span class="text">NSFW</span></a>'
),r.b("\n"+n),r.b('        <a class="flag_button safe green" href="#" rel="nofollow login_required" data-href="/flaggings?flag=safe_cover&mix_id='
),r.b(r.v(r.f("id",e,t,0))),r.b('"><span class="i-flag"></span> <span class="text">Safe</span></a>'
),r.b("\n"+n),r.b("        <!--"),r.s(r.f("spinner",e,t,1),e,t,0,4343,4352,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b("flaggings")}),e.pop()),r.b("-->"),r.b("\n"+n),r
.b('        <div class="black_tooltip black_tooltip_up">'),r.b("\n"+n),r.b("          Is this playlist safe for work?"
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r
.b("    "),r.b("\n"+n),r.b('      <div class="graybox" id="image_controls">'),r.b
("\n"+n),r.b('        <a id="pinterest_button" href="//www.pinterest.com/pin/create/button/?description='
),r.b(r.v(r.f("name",e,t,0))),r.b("&amp;media="),r.s(r.f("cover_urls",e,t,1),e,t,0
,4668,4697,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.s(n.f("escape",e,t,1),e,t,0,4679
,4686,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("max1024")}),e.pop())}),e.pop()),r.
b("&amp;url=http://8tracks.com"),r.b(r.v(r.f("web_path",e,t,0))),r.b('?utm_source=pinterest" data-pin-do="buttonPin" data-pin-config="none" rel="popup" data-win-width="770" data-win-height="340" target="_blank" title="Share to pinterest"><span class="i-pinterest"></a>'
),r.b("\n"+n),r.b("        "),r.b("\n"+n),r.b('        <a href="'),r.b(r.v(r.d("cover_urls.max1024"
,e,t,0))),r.b('" title="View full size" id="zoom" target="_blank" rel="external"></a>'
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n)
,r.b('      <div id="eight888"></div>'),r.b("\n"+n),r.b("\n"+n),r.s(r.f("certification"
,e,t,1),e,t,0,5142,5417,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('        <span class="certification '
),r.b(r.v(r.f("certification",e,t,0))),r.b('" title="This playlist is certified '
),r.b(r.v(r.f("certification",e,t,0))),r.b('">'),r.b("\n"+n),r.b('          <span class="certification_icon"></span> '
),r.b("\n"+n),r.b("          "),r.b(r.v(r.f("certification",e,t,0))),r.b("\n"+n),
r.b('          <meta itemprop="award" content="'),r.b(r.v(r.f("certification",e,t
,0))),r.b('" />'),r.b("\n"+n),r.b("        </span>"),r.b("\n")}),e.pop()),r.b("		</div>"
),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("\n"+n),r.b('    <div class="col-xl-8 col-md-8 col-sm-6">'
),r.b("\n"+n),r.b('    <div id="mix_details" class="favable">'),r.b("\n"+n),r.b('      <h1 id="mix_name" itemprop="name" '
),r.b("\n"+n),r.b('      class="'),r.s(r.f("dynamic_font_size",e,t,1),e,t,0,5621,5629
,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b(n.v(n.f("name",e,t,0)))}),e.pop()),r.b('">'
),r.b("\n"+n),r.b("        "),r.b(r.v(r.f("name",e,t,0))),r.b("\n"+n),r.b("        "
),r.s(r.f("name",e,t,1),e,t,1,0,0,"")||r.b('<div class="display placeholder">Title</div>'
),r.b("\n"+n),r.b("      </h1>"),r.b("\n"+n),r.b("\n"+n),r.b('      <div id="mix_description" class="description clear displaymode">'
),r.b("\n"+n),r.b('        <div class="metadata">'),r.b("\n"+n),r.b('          <div class="mix-data">'
),r.b("\n"+n),r.s(r.f("published",e,t,1),e,t,0,5916,6116,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.b('              <span class="datetime date_ago dtstart">'),r.b("\n"+n),
r.b("                "),r.s(r.f("human_date",e,t,1),e,t,0,6003,6021,"{{ }}")&&(r.
rs(e,t,function(e,t,n){n.b("first_published_at")}),e.pop()),r.b("\n"+n),r.b("              </span> "
),r.b("\n"+n),r.b('              <span class="pipe"> | </span>'),r.b("\n")}),e.pop
()),r.b("\n"+n),r.s(r.f("duration",e,t,1),e,t,0,6157,6470,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.s(r.f("tracks_count",e,t,1),e,t,0,6189,6298,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b('                <span id="tracks_count" class="gray hidden-xs">'),n.b
(n.v(n.f("tracks_count",e,t,0))),n.b(" tracks</span>"),n.b("\n")}),e.pop()),r.b("\n"+
n),r.b('              <meta itemprop="duration" content="UserPlays:'),r.b(r.v(r.f
("duration",e,t,0))),r.b('" />'),r.b("\n"+n),r.b("\n"+n),r.b('              <span class="pipe hidden-sm hidden-xs"> | </span>'
),r.b("\n")}),e.pop()),r.b("\n"+n),r.b("            "),r.b("\n"+n),r.b('            <span class="plays_count i-play" title="Number of plays" '
),r.s(r.f("plays_count",e,t,1),e,t,1,0,0,"")||r.b('style="display: none;"'),r.b(">"
),r.b("\n"+n),r.b("              <strong>&nbsp;"),r.b(r.v(r.d("plays_count.to_human_number"
,e,t,0))),r.b("</strong>"),r.b("\n"+n),r.b("            </span>"),r.b("\n"+n),r.b
('            <meta itemprop="interactionCount" content="UserPlays:'),r.b(r.v(r.f
("plays_count",e,t,0))),r.b('" />'),r.b("\n"+n),r.b("\n"+n),r.b("            &nbsp;&nbsp;"
),r.b("\n"+n),r.b("\n"+n),r.b('            <span class="likes_count i-like" title="Number of likes" '
),r.s(r.f("likes_count",e,t,1),e,t,1,0,0,"")||r.b('style="display: none;"'),r.b(">"
),r.b("\n"+n),r.b("              <strong>&nbsp;"),r.s(r.f("human_number",e,t,1),e
,t,0,6994,7005,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("likes_count")}),e.pop()),
r.b("</strong>"),r.b("\n"+n),r.b("            </span>"),r.b("\n"+n),r.b('            <!--span class="gray">(view latest)</span></span-->'
),r.b("\n"+n),r.b('            <meta itemprop="interactionCount" content="UserLikes:'
),r.b(r.v(r.f("likes_count",e,t,0))),r.b('" />'),r.b("\n"+n),r.b("\n"+n),r.b('            <span class="pipe p p_at_least_owner off hidden-xs"> | </span>'
),r.b("\n"+n),r.b("\n"+n),r.b('            <!--div id="mix_interactions_bottom">'
),r.b("\n"+n),r.b('              <fb:like href="http://8tracks.com'),r.b(r.v(r.f("web_path"
,e,t,0))),r.b('" layout="box_count" action="like" show_faces="false" share="false" id="facebook_like_mix"></fb:like>'
),r.b("\n"+n),r.b('              <div class="g-plusone" data-size="tall" data-href="http://8tracks.com'
),r.b(r.v(r.f("web_path",e,t,0))),r.b('"></div>'),r.b("\n"+n),r.b("             </div-->"
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b('             <a id="stats_button" href="'
),r.b(r.v(r.f("web_path",e,t,0))),r.b('/stats" title="View stats" class="'),r.s(r
.f("published",e,t,1),e,t,1,0,0,"")||r.b("inactive"),r.b(' p p_at_least_owner off hidden-xs" data-owner_id="'
),r.b(r.v(r.d("user.id",e,t,0))),r.b('">'),r.b("\n"+n),r.b('                <span class="i-popular"></span>'
),r.b("\n"+n),r.b("                Stats"),r.b("\n"+n),r.b("              </a>"),
r.b("\n"+n),r.b("          </div><!--.mix-data-->"),r.b("\n"+n),r.b("\n"+n),r.b('          <div id="mix_tags_display" itemprop="keywords">'
),r.b("\n"+n),r.b("            "),r.b(r.t(r.f("list_artists",e,t,0))),r.b("\n"+n)
,r.b("            "),r.b(r.t(r.f("list_tags",e,t,0))),r.b("\n"+n),r.b("          </div>"
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("\n"+n),r.b('        <div class="interactbox" id="mix_buttons">'
),r.b("\n"+n),r.b('          <div class="mix_interactions">'),r.b("\n"+n),r.b('            <a id="like_button" href="/mixes/'
),r.b(r.v(r.f("id",e,t,0))),r.b('/toggle_like" class="flatbutton like inactive edit_disable p p_not_owner on" data-method="post" data-mix_id="'
),r.b(r.v(r.f("id",e,t,0))),r.b('" data-owner_id="'),r.b(r.v(r.d("user.id",e,t,0)
)),r.b('" rel="signup_required nofollow" title="Add this playlist to my favorites">'
),r.b("\n"+n),r.b('              <span class="i-like"></span>'),r.b("\n"+n),r.b('              <span class="text hidden-xs hidden-sm">Like<span class="activated">d</span></span>'
),r.b("\n"+n),r.b("            </a>"),r.b("\n"+n),r.b("\n"+n),r.b('            <a id="add_button" class="flatbutton" href="#" title="Add to collection" rel="local">'
),r.b("\n"+n),r.b('              <span class="i-collection"></span>'),r.b("\n"+n)
,r.b('              <span class="text hidden-xs hidden-sm">Collect</span>'),r.b("\n"+
n),r.b("            </a>"),r.b("\n"+n),r.b("\n"+n),r.b('            <a id="share_button" class="flatbutton edit_disable" title="Share" href="#" rel="signup_required local" '
),r.s(r.f("published",e,t,1),e,t,1,0,0,"")||r.b('style="display: none;"'),r.b(">"
),r.b("\n"+n),r.b('              <span class="i-share"></span>'),r.b("\n"+n),r.b('             <span class="text hidden-xs hidden-sm">Share</span>'
),r.b("\n"+n),r.b("            </a>"),r.b("\n"+n),r.b("\n"+n),r.b('            <a id="edit_button" href="#" title="Edit playlist" class="flatbutton '
),r.s(r.f("published",e,t,1),e,t,0,9219,9228,"{{ }}")&&(r.rs(e,t,function(e,t,n){
n.b("published")}),e.pop()),r.b(' p p_at_least_owner off" data-owner_id="'),r.b(r
.v(r.d("user.id",e,t,0))),r.b('">'),r.b("\n"+n),r.b('              <span class="i-edit"></span>'
),r.b("\n"+n),r.b('              <span id="edit_spinner"></span>'),r.b("\n"+n),r.
b('              <span class="text hidden-xs hidden-sm">Edit</span>'),r.b("\n"+n)
,r.b("            </a>"),r.b("\n"+n),r.b("\n"+n),r.b('            <a id="visualize" href="#" title="Visualize" class="flatbutton hidden-xs" style="display: none;">'
),r.b("\n"+n),r.b('              <span class="i-logo"></span>'),r.b("\n"+n),r.b('              <span class="text hidden-xs hidden-sm">celebrate</span>'
),r.b("\n"+n),r.b("            </a>"),r.b("\n"+n),r.b("\n"+n),r.b("          </div>"
),r.b("\n"+n),r.b("\n"+n),r.b('          <div id="add_to_collections" style="display: none;"></div>'
),r.b("\n"+n),r.b("            "),r.b("\n"+n),r.b('          <div id="share" class="share_interactions" style="display: none;">'
),r.b("\n"+n),r.b('            <div class="like_share" style="display: none;">Liked! Share this mix with friends:</div>'
),r.b("\n"+n),r.b('            <div class="share_view"></div>'),r.b("\n"+n),r.b("          </div>"
),r.b("\n"+n),r.b("\n"+n),r.b('          <div id="share_by_email" class="interactbox" style="display: none;">'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("        </div>"),r.b("\n"+
n),r.b("\n"+n),r.b("      </div><!--mix_description-->"),r.b("\n"+n),r.b("\n"+n),
r.b("    </div><!--.mix_details -->"),r.b("\n"+n),r.b("    </div><!--.col -->"),r
.b("\n"+n),r.b("   </div><!-- #mix_audio -->"),r.b("\n"+n),r.b("  </div><!-- .container -->"
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b('  <div id="mix_youtube" class="clearfix" style="display: none;">'
),r.b("\n"+n),r.b('    <div class="container">'),r.b("\n"+n),r.b('      <div class="row hidden-xs">'
),r.b("\n"+n),r.b('        <div class="col-xs-12">'),r.b("\n"+n),r.b("          <h1>"
),r.b(r.v(r.f("name",e,t,0))),r.b("</h1>"),r.b("\n"+n),r.b("        </div>"),r.b("\n"+
n),r.b("      </div>"),r.b("\n"+n),r.b('      <div class="row clear">'),r.b("\n"+
n),r.b('        <div class="hidden-xs col-sm-1 col-md-2 col-xl-2">&nbsp;</div>'),
r.b("\n"+n),r.b('        <div class="col-sm-10 col-md-8 col-xl-8">'),r.b("\n"+n),
r.b('          <div id="mix_youtube_embed"></div>'),r.b("\n"+n),r.b("        </div>"
),r.b("\n"+n),r.b('        <div class="hidden-xs col-sm-1 col-md-2 col-xl-2">&nbsp;</div>'
),r.b("\n"+n),r.b("      </div><!--.row-->"),r.b("\n"+n),r.b("    </div><!--.container -->"
),r.b("\n"+n),r.b("\n"+n),r.b('    <div id="mix_youtube_player_controls" class="player_controls player_gray dark-bg clearfix clear">'
),r.b("\n"+n),r.b('      <div class="container">'),r.b("\n"+n),r.b('        <div class="row">'
),r.b("\n"+n),r.b('          <div class="player_controls_left col-xs-4 col-sm-3 col-md-3 col-lg-3 col-xl-2">'
),r.b("\n"+n),r.b('            <div id="player_mix" class="hidden-xs">'),r.b("\n"+
n),r.b('              <a href="'),r.b(r.v(r.d("cover_urls.max1024",e,t,0))),r.b('" title="View fullsize art">'
),r.b("\n"+n),r.b('                <img src="'),r.s(r.f("mix_cover_url",e,t,1),e,
t,0,11278,11296,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq100, w=100&h=100")}),e
.pop()),r.b('" class="cover" />'),r.b("\n"+n),r.b("              </a>"),r.b("\n"+
n),r.b("            </div>"),r.b("\n"+n),r.b("\n"+n),r.b('            <div id="youtube_play_button" class="player_button" title="Play"><span class="i-play"></span></div>'
),r.b("\n"+n),r.b('            <div id="youtube_pause_button" class="player_button" title="Pause"><span class="i-pause"></span></div>'
),r.b("\n"+n),r.b('            <div id="youtube_skip_button" class="player_button" title="Skip"><span class="i-skip"></span></div>'
),r.b("\n"+n),r.b('            <!--div id="next_mix_button" class="player_button" title="Next" style="display: none;"><span class="i-next"></span></div-->'
),r.b("\n"+n),r.b('            <div id="youtube_like_button" class="mix_like '),r
.s(r.f("liked_by_current_user",e,t,1),e,t,0,11931,11937,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("active")}),e.pop()),r.b(' player_button"><span class="i-like"></span></div>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("\n"+n),r.b('          <div class="player_progress_bar player_gray col-xs-7 col-sm-6 col-md-6 col-lg-6 col-xl-8">'
),r.b("\n"+n),r.b('            <ul id="now_playing"></ul>'),r.b("\n"+n),r.b('            <a href="#" class="flatbutton" id="youtube_flag_button" title="Wrong video"><span class="i-flag"></span><span class="hidden-xs hidden-sm">Wrong video</span></a>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("        "),r.b("\n"+n),r.b
('          <div class="hidden-xs col-md-3 col-lg-3 col-xl-2 transparentbox">'),r
.b("\n"+n),r.b('            <div class="mix_interactions">'),r.b("\n"+n),r.b('              <a id="add_button" class="flatbutton" href="#" title="Add to collection" rel="local">'
),r.b("\n"+n),r.b('                <span class="i-collection"></span>'),r.b("\n"+
n),r.b('                <span class="hidden-xs text">Collect</span>'),r.b("\n"+n)
,r.b("              </a>"),r.b("\n"+n),r.b('              <a id="yt_share_button" class="hidden-sm hidden-xs flatbutton edit_disable" title="Share" href="#" rel="signup_required local">'
),r.b("\n"+n),r.b('                <span class="i-share"></span>'),r.b("\n"+n),r.
b('                <span class="hidden-xs text">Share</span>'),r.b("\n"+n),r.b("              </a>"
),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b('            <div id="yt_share" class="share_interactions interactbox" style="display: none;">'
),r.b("\n"+n),r.b('              <div class="like_share" style="display: none;">Liked! Share this mix with friends:</div>'
),r.b("\n"+n),r.b('              <div class="share_view"></div>'),r.b("\n"+n),r.b
("            </div>"),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("\n"+n
),r.b('          <div class="clear: both;"></div>'),r.b("\n"+n),r.b("        </div>"
),r.b("\n"+n),r.b("       </div><!--.col-->"),r.b("\n"+n),r.b("     </div><!-- .container -->"
),r.b("\n"+n),r.b("  </div><!--#mix_youtube-->"),r.b("\n"+n),r.b("\n"+n),r.b("\n"+
n),r.b("\n"+n),r.b(" </div><!-- #play_area -->"),r.b("\n"+n),r.b("</article><!-- #mix_wrapper -->"
),r.b("\n"+n),r.b("\n"+n),r.s(r.f("read_only",e,t,1),e,t,0,13502,15185,"{{ }}")&&
(r.rs(e,t,function(e,t,r){r.b('  <div id="disabled_mix_field" class="displaymode">'
),r.b("\n"+n),r.b('   <div class="container">'),r.b("\n"+n),r.b('    <div class="row clearfix">'
),r.b("\n"+n),r.b('      <div class="col-xs-12">'),r.b("\n"+n),r.b('        <div class="card wide_card" id="disabled_mix_message">'
),r.b("\n"+n),r.b('          <span class="unplayable"></span>'),r.b("\n"+n),r.b("          "
),r.b("\n"+n),r.b('          <div class="disabled_cta">'),r.b("\n"+n),r.s(r.d("similar_mixes.mixes.length.nonzero?"
,e,t,1),e,t,0,13847,14045,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b("            Check out these similar <strong>"
),r.b(r.v(r.f("first_tag",e,t,0))),r.b("</strong> playlists "),r.b("\n"+n),r.b("            "
),r.s(r.d("artist_list.first",e,t,1),e,t,0,13960,13993,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("featuring <strong>"),n.b(n.v(n.d(".",e,t,0))),n.b("</strong> ")}),e.pop
()),r.b(" and other artists."),r.b("\n")}),e.pop()),r.s(r.d("similar_mixes.mixes.length.nonzero?"
,e,t,1),e,t,1,0,0,"")||(r.b("            Check out some more <strong>"),r.b(r.v(r
.f("first_tag",e,t,0))),r.b("</strong> playlists "),r.b("\n"+n),r.b("            "
),r.s(r.d("artist_list.first",e,t,1),e,t,0,14245,14261,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("featuring "),n.b(n.v(n.d(".",e,t,0))),n.b(" ")}),e.pop()),r.b(" "),r.
b("\n"+n),r.b("            in our library."),r.b("\n"+n),r.b('            <a href="/explore/'
),r.b(r.v(r.f("first_tag",e,t,0))),r.b('" class="turquoise_button flatbutton" style="float: right;">EXPLORE '
),r.b(r.v(r.f("first_tag",e,t,0))),r.b(" PLAYLISTS &rarr;</a>"),r.b("\n")),r.b("          </div>"
),r.b("\n"+n),r.b("\n"+n),r.b("          <div>"),r.b("\n"+n),r.b('            <span class="black">'
),r.b(r.v(r.f("name",e,t,0))),r.b('</span> <span style="font-weight: normal;">is currently not streamable.</span>'
),r.b("\n"+n),r.b('            <a class="learn-more turquoise" target="_blank" href="http://blog.8tracks.com/2015/07/24/soundcloud/"><strong>Learn More</strong></a>.'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("        </div>"),r.b("\n"+
n),r.b("      </div>"),r.b("\n"+n),r.b("      "),r.b("\n"+n),r.b('      <div class="col-xs-12" id="disabled_mix_related">'
),r.b("\n"+n),r.s(r.d("similar_mixes.mixes",e,t,1),e,t,0,14950,15117,"{{ }}")&&(r
.rs(e,t,function(e,t,r){r.b('          <div class="card col-xs-12 col-sm-12 col-md-6 mix_card mix" data-id="'
),r.b(r.v(r.f("id",e,t,0))),r.b('" data-nsfw="'),r.b(r.v(r.f("nsfw",e,t,0))),r.b('">'
),r.b("\n"+n),r.b(r.rp("mixes/mix_card",e,t,"            ")),r.b("          </div>"
),r.b("\n")}),e.pop()),r.b("      </div>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+
n),r.b("   </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n")}),e.pop()),r.b("\n"+n),
r.b("\n"+n),r.b('<div class="container displaymode">'),r.b("\n"+n),r.b('  <div class="row">'
),r.b("\n"+n),r.b('      <div class="hidden-md col-lg-1"></div>'),r.b("\n"+n),r.b
('      <div class="col-md-12 col-lg-10">'),r.b("\n"+n),r.b('          <!--span class="advertisement_text">ADVERTISEMENT</span-->'
),r.b("\n"+n),r.b('          <div class="billboard_container">'),r.b("\n"+n),r.b('            <div id="mix_video_masthead"></div>'
),r.b("\n"+n),r.b('            <div class="advertisement" id="Custom_Campaigns" data-slot-name="Custom_Campaigns" data-size="banner"></div>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n)
,r.b('      <div class="hidden-md col-lg-1">'),r.b("\n"+n),r.b("      </div>"),r.
b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b('<div class="displaymode">'
),r.b("\n"+n),r.b('  <div id="soundmanager-debug-container" style="display:none">'
),r.b("\n"+n),r.b('    <h6>Player Debug Information <span>Can\'t play anything? <a href="http://www.schillmania.com/projects/soundmanager2/troubleshoot/">Troubleshoot here</a></span></h6>'
),r.b("\n"+n),r.b('    <div id="soundmanager-debug"></div>'),r.b("\n"+n),r.b("  </div>"
),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define
("hgn!templates/mixes/_likes",["hogan"],function(e){function n(){return t.render.
apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r.b(n=n||""
),r.b('<div class="user_likes clearfix">'),r.b("\n"+n),r.s(r.f("likes",e,t,1),e,t
,0,46,232,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.s(r.f("user",e,t,1),e,t,0,60,220,"{{ }}"
)&&(r.rs(e,t,function(e,t,r){r.b('      <a href="'),r.b(r.v(r.f("web_path",e,t,0)
)),r.b('" title="'),r.b(r.v(r.f("login",e,t,0))),r.b('" class="user_like">'),r.b("\n"+
n),r.b('        <img src="'),r.s(r.f("avatar_url",e,t,1),e,t,0,160,164,"{{ }}")&&
(r.rs(e,t,function(e,t,n){n.b("sq72")}),e.pop()),r.b('" class="thumbnail sq64">')
,r.b("\n"+n),r.b("      </a>"),r.b("\n")}),e.pop())}),e.pop()),r.b("</div>"),r.fl
()},"",e,{});return n.template=t,n}),define("hgn!templates/mixes/_sidebar_collection"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sidebar_cards">'
),r.b("\n"+n),r.b('  <div class="card header_card">'),r.b("\n"+n),r.b("  <h6>"),r
.b("\n"+n),r.b('    <a href="'),r.b(r.v(r.f("web_path",e,t,0))),r.b('">'),r.b("\n"+
n),r.b("    "),r.b(r.v(r.f("name",e,t,0))),r.b("\n"+n),r.b('    <span class="turquoise right">'
),r.b(r.v(r.d("pagination.total_entries",e,t,0))),r.b("</span>"),r.b("\n"+n),r.b("    </a>"
),r.b("\n"+n),r.b("  </h6>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.
b("<div>"),r.b("\n"+n),r.s(r.f("mixes",e,t,1),e,t,0,222,264,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b(n.rp("mixes/sidebar_collection_mix",e,t,"    "))}),e.pop()),r.b("</div>"
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.s(r.f("web_path",e,t,1),e,t,0,297,424,"{{ }}"
)&&(r.rs(e,t,function(e,t,r){r.b('  <div class="card footer_card">'),r.b("\n"+n),
r.b('  <a href="'),r.b(r.v(r.f("web_path",e,t,0))),r.b('">View all '),r.b(r.v(r.d
("pagination.total_entries",e,t,0))),r.b(" playlists &rarr;</a>"),r.b("\n"+n),r.b
("  </div>"),r.b("\n")}),e.pop()),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n
.template=t,n}),define("hgn!templates/mixes/_sidebar_collection_mix",["hogan"],function(
e){function n(){return t.render.apply(t,arguments)}var t=new e.Template(function(
e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="card sidebar_mix">'),r.b("\n"+
n),r.b('  <div class="cover">'),r.b("\n"+n),r.b('    <a href="'),r.b(r.v(r.f("web_path"
,e,t,0))),r.b("#"),r.s(r.f("autoplay",e,t,1),e,t,0,92,99,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("play=1&")}),e.pop()),r.b("smart_id="),r.b(r.v(r.f("smart_id",e,t,0)))
,r.b('"rel="mix" class="cover">'),r.b("\n"+n),r.b("      "),r.s(r.f("mix_cover_img"
,e,t,1),e,t,0,183,199,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq100, w=75&h=75")
}),e.pop()),r.b("\n"+n),r.b("      "),r.s(r.f("autoplay",e,t,1),e,t,0,237,306,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b('<span class="play_circle_overlay"><span class="i-play"></span></span>'
)}),e.pop()),r.b("\n"+n),r.b("    </a>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),
r.b("\n"+n),r.b('  <a class="title black" href="'),r.b(r.v(r.f("web_path",e,t,0))
),r.b('" class="black">'),r.b(r.v(r.f("name",e,t,0))),r.b("</a>"),r.b("\n"+n),r.b
("  <!--p>"),r.s(r.f("first_sentence",e,t,1),e,t,0,438,449,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("description")}),e.pop()),r.b("</p-->"),r.b("\n"+n),r.b('  <p class="tags">'
),r.b(r.t(r.f("grid_tags",e,t,0))),r.b("</p>"),r.b("\n"+n),r.b("</div>"),r.b("\n"
),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/mixes/_mix_card"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('  <div class="mix_element">'
),r.b("\n"+n),r.b('    <div class="grid_square tooltip_container">'),r.b("\n"+n),
r.b("\n"+n),r.b('      <div class="cover '),r.s(r.d("cover_urls.animated",e,t,1),
e,t,0,125,133,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("animated")}),e.pop()),r.b('" '
),r.s(r.d("cover_urls.animated",e,t,1),e,t,0,183,279,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("style=\"background-image: url('"),n.b(n.v(n.d("cover_urls.static_cropped_imgix_url"
,e,t,0))),n.b("'); background-size: 100%;\"")}),e.pop()),r.b(">"),r.b("\n"+n),r.b
('        <a href="'),r.b(r.v(r.f("web_path",e,t,0))),r.b("#smart_id="),r.b(r.v(r
.f("smart_id",e,t,0))),r.b('" class="mix_url"'),r.s(r.f("track_click",e,t,1),e,t,0
,389,524,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b(' data-track="true" data-event_name="'
),n.b(n.v(n.f("event_name",e,t,0))),n.b('" '),n.s(n.f("event_properties",e,t,1),e
,t,0,462,503,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("data-event_properties_"),n.
b(n.v(n.f("name",e,t,0))),n.b('="'),n.b(n.v(n.f("val",e,t,0))),n.b('" ')}),e.pop(
))}),e.pop()),r.b(">"),r.b("\n"+n),r.b("          "),r.s(r.f("mix_cover_img",e,t,1
),e,t,0,570,588,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq250, w=245&h=245")}),e
.pop()),r.b("\n"+n),r.b("          "),r.s(r.f("certification",e,t,1),e,t,0,635,772
,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<span class="certification '),n.b(n.v(n
.f("certification",e,t,0))),n.b('" title="'),n.b(n.v(n.f("certification",e,t,0)))
,n.b('"><span class="certification_icon"></span> '),n.b(n.v(n.f("certification",e
,t,0))),n.b("</span>")}),e.pop()),r.b("\n"+n),r.b("          "),r.s(r.f("is_promoted"
,e,t,1),e,t,0,817,888,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<span class="sponsored" title="Sponsored mix" title="Sponsored"></span>'
)}),e.pop()),r.b("\n"+n),r.b("        </a>"),r.b("\n"+n),r.s(r.f("read_only",e,t,1
),e,t,0,940,992,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('          <span class="unplayable"></span>'
),n.b("\n")}),e.pop()),r.b("          "),r.b("\n"+n),r.b('        <div class="quick_actions">'
),r.b("\n"+n),r.s(r.f("read_only",e,t,1),e,t,1,0,0,"")||(r.b('            <a class="quick_play" href="'
),r.b(r.v(r.f("web_path",e,t,0))),r.b("#smart_id="),r.b(r.v(r.f("smart_id",e,t,0)
)),r.b('&play=1" title="play"'),r.s(r.f("track_click",e,t,1),e,t,0,1190,1325,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b(' data-track="true" data-event_name="'),n.b(n.v(
n.f("event_name",e,t,0))),n.b('" '),n.s(n.f("event_properties",e,t,1),e,t,0,1263,1304
,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("data-event_properties_"),n.b(n.v(n.f("name"
,e,t,0))),n.b('="'),n.b(n.v(n.f("val",e,t,0))),n.b('" ')}),e.pop())}),e.pop()),r.
b('><span class="i-play"></span></a>'),r.b("\n"+n),r.b('            <span class="pipe"></span>'
),r.b("\n"+n),r.b('            <a class="quick_add" data-mix_id="'),r.b(r.v(r.f("id"
,e,t,0))),r.b('" data-mix_name="'),r.b(r.v(r.f("name",e,t,0))),r.b('" title="Add to collection" href="#" ><span class="i-collection"></span></a>'
),r.b("\n")),r.b("\n"+n),r.s(r.f("show_remove",e,t,1),e,t,0,1620,1851,"{{ }}")&&(
r.rs(e,t,function(e,t,r){r.b('            <span class="pipe"></span>'),r.b("\n"+n
),r.b('            <a class="quick_remove" data-smart-id="'),r.b(r.v(r.f("smart_id"
,e,t,0))),r.b('" data-mix-id="'),r.b(r.v(r.f("id",e,t,0))),r.b('" data-mix-name="'
),r.b(r.v(r.f("name",e,t,0))),r.b('" title="Hide from your history" href="#"><span class="i-x"></span></a>'
),r.b("\n")}),e.pop()),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("        "
),r.s(r.d("cover_urls.animated",e,t,1),e,t,0,1916,1944,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b('<span class="gif">GIF</span>')}),e.pop()),r.b("\n"+n),r.b("      </div>"
),r.b("\n"+n),r.b("\n"+n),r.b('      <h3 class="title black">'),r.b("\n"+n),r.b('        <a href="'
),r.b(r.v(r.f("web_path",e,t,0))),r.b("#smart_id="),r.b(r.v(r.f("smart_id",e,t,0)
)),r.b('"'),r.s(r.f("track_click",e,t,1),e,t,0,2082,2184,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b(' data-track="true" '),n.s(n.f("event_properties",e,t,1),e,t,0,2122,2163
,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("data-event_properties_"),n.b(n.v(n.f("name"
,e,t,0))),n.b('="'),n.b(n.v(n.f("val",e,t,0))),n.b('" ')}),e.pop())}),e.pop()),r.
b(">"),r.b("\n"+n),r.b("          "),r.b(r.v(r.f("name",e,t,0))),r.b("\n"+n),r.b("        </a>"
),r.b("\n"+n),r.b("      </h3>"),r.b("\n"+n),r.b("\n"+n),r.b('      <p class="byline mix_card_date">'
),r.b("\n"+n),r.s(r.f("published",e,t,1),e,t,0,2308,2516,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.b("          Published"),r.b("\n"+n),r.b('          <span class="date">'
),r.b("\n"+n),r.b('            <abbr class="timeago" title="'),r.b(r.v(r.f("first_published_at_timestamp"
,e,t,0))),r.b('">'),r.s(r.f("human_date",e,t,1),e,t,0,2449,2467,"{{ }}")&&(r.rs(e
,t,function(e,t,n){n.b("first_published_at")}),e.pop()),r.b("</abbr>"),r.b("\n"+n
),r.b("          </span>"),r.b("\n")}),e.pop()),r.b("        "),r.s(r.f("published"
,e,t,1),e,t,1,0,0,"")||r.b("Private playlist"),r.b("\n"+n),r.b("      </p>"),r.b("\n"+
n),r.b("\n"+n),r.b('      <div class="frontside">'),r.b("\n"+n),r.b('        <div class="mix-stats">'
),r.b("\n"+n),r.b('          <span class="numbers">'),r.b("\n"+n),r.b('            <span class="plays_count i-miniplay" title="Number of plays">'
),r.b("\n"+n),r.b("              "),r.s(r.f("human_number",e,t,1),e,t,0,2796,2807
,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("plays_count")}),e.pop()),r.b("\n"+n),r.
b("            </span>"),r.b("\n"+n),r.b("            &nbsp;&nbsp;"),r.b("\n"+n),
r.b('            <span class="likes_count i-miniheart" title="Number of likes">')
,r.b("\n"+n),r.b("             "),r.s(r.f("human_number",e,t,1),e,t,0,2975,2986,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b("likes_count")}),e.pop()),r.b("\n"+n),r.b("            </span>"
),r.b("\n"+n),r.b("            &nbsp;&nbsp;"),r.b("\n"+n),r.b('            <span class="tracks_count i-feed-bold" title="Tracks count">'
),r.b("\n"+n),r.b("              <!--"),r.s(r.f("human_duration",e,t,1),e,t,0,3159
,3167,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("duration")}),e.pop()),r.b("-->"),r
.b("\n"+n),r.b("              "),r.s(r.f("tracks_count",e,t,1),e,t,0,3221,3246,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b(" "),n.b(n.v(n.f("tracks_count",e,t,0))),n.b(" tracks "
)}),e.pop()),r.b("\n"+n),r.b("            </span>"),r.b("\n"+n),r.b("          </span>"
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("\n"+n),r.b('        <div class="grid_tags tags">'
),r.b("\n"+n),r.b("          "),r.b(r.t(r.f("list_artists",e,t,0))),r.b("\n"+n),r
.b("          "),r.b(r.t(r.f("grid_tags",e,t,0))),r.b("\n"+n),r.b("        </div>"
),r.b("\n"+n),r.b("\n"+n),r.s(r.f("debug_info",e,t,1),e,t,0,3449,3544,"{{ }}")&&(
r.rs(e,t,function(e,t,r){r.b('          <div class="debug_info black_tooltip">'),
r.b("\n"+n),r.b("            "),r.b(r.t(r.d(".",e,t,0))),r.b("\n"+n),r.b("          </div>"
),r.b("\n")}),e.pop()),r.b("      </div>"),r.b("\n"+n),r.b("\n"+n),r.b('      <div class="description">'
),r.b("\n"+n),r.b("        "),r.s(r.f("first_sentence",e,t,1),e,t,0,3633,3644,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b("description")}),e.pop()),r.b("\n"+n),r.b("      </div>"
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"
),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/mixes/_details"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="card displaymode">'
),r.b("\n"+n),r.b('  <div id="user_byline">'),r.b("\n"+n),r.s(r.f("user",e,t,1),e
,t,0,69,1055,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('      <a href="'),r.b(r.v(r
.f("web_path",e,t,0))),r.b('" rel="user" title="'),r.b(r.v(r.f("login",e,t,0))),r
.b("'s profile\">"),r.b("\n"+n),r.b("        "),r.s(r.f("avatar_img",e,t,1),e,t,0
,162,180,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("sq100, w=100&h=100")}),e.pop())
,r.b("\n"+n),r.b("      </a>"),r.b("\n"+n),r.b("\n"+n),r.b('      <span class="byline">'
),r.b("\n"+n),r.b('        by <a class="propername" href="'),r.b(r.v(r.f("web_path"
,e,t,0))),r.b('" rel="user">'),r.b(r.v(r.f("login",e,t,0))),r.b("</a> "),r.b("\n"+
n),r.b("        "),r.s(r.f("badge",e,t,1),e,t,0,333,338,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("small")}),e.pop()),r.b("\n"+n),r.b("      </span>"),r.b("\n"+n),r.b("\n"+
n),r.b('      <span class="options p p_not_owner on '),r.s(r.f("location",e,t,1),
e,t,0,421,426,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("fixed")}),e.pop()),r.b('" data-owner_id="'
),r.b(r.v(r.f("id",e,t,0))),r.b('">'),r.b("\n"+n),r.s(r.f("followed_by_current_user"
,e,t,1),e,t,0,502,717,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('          <a href="'
),n.b(n.v(n.f("path",e,t,0))),n.b('/toggle_follow" title="Follow '),n.b(n.v(n.f("login"
,e,t,0))),n.b('" class="follow turquoise_button flatbutton p p_not_owner" data-owner_id="'
),n.b(n.v(n.f("id",e,t,0))),n.b('" data-user_id="'),n.b(n.v(n.f("id",e,t,0))),n.b
('" rel="signup_required">Following</a>'),n.b("\n")}),e.pop()),r.s(r.f("followed_by_current_user"
,e,t,1),e,t,1,0,0,"")||(r.b('            <a href="'),r.b(r.v(r.f("path",e,t,0))),
r.b('/toggle_follow" title="Follow '),r.b(r.v(r.f("login",e,t,0))),r.b('" class="follow turquoise_button flatbutton p p_not_owner" data-owner_id="'
),r.b(r.v(r.f("id",e,t,0))),r.b('" data-user_id="'),r.b(r.v(r.f("id",e,t,0))),r.b
('" rel="signup_required nofollow">Follow</a>'),r.b("\n")),r.b("      </span>"),r
.b("\n")}),e.pop()),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <hr class="divide" />'
),r.b("\n"+n),r.b("\n"+n),r.s(r.f("read_only",e,t,1),e,t,0,1116,1266,"{{ }}")&&(r
.rs(e,t,function(e,t,n){n.b('    <div id="play_on_youtube_container"><a href="#" class="flatbutton" id="play_on_youtube"><span class="i-play"></span> Play on YouTube</a></div>'
),n.b("\n")}),e.pop()),r.b("\n"+n),r.b("\n"+n),r.b("  "),r.s(r.d("description_html.length.nonzero"
,e,t,1),e,t,0,1321,1335,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("<h6>Notes</h6>")
}),e.pop()),r.b("\n"+n),r.b('  <div id="description_html" itemprop="description">'
),r.b("\n"+n),r.b("    "),r.b(r.t(r.f("description_html",e,t,0))),r.b("\n"+n),r.b
("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b("  <hr />"),r.b("\n"+n),r.b("\n"+n),r.b('  <div id="playlists">'
),r.b("\n"+n),r.b('    <div id="playlist" class="playlist displaymode"'),r.s(r.f("read_only"
,e,t,1),e,t,1,0,0,"")||r.b('style="display: none;"'),r.b(">"),r.b("\n"+n),r.b('      <ul id="tracks_played">'
),r.b("\n"+n),r.s(r.f("read_only",e,t,1),e,t,0,1650,1808,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.s(r.f("tracks",e,t,1),e,t,0,1672,1788,"{{ }}")&&(r.rs(e,t,function(e,t,r
){r.b('            <li class="track" data-id="'),r.b(r.v(r.f("id",e,t,0))),r.b('">'
),r.b("\n"+n),r.b(r.rp("tracks/track_played",e,t,"              ")),r.b("            </li>"
),r.b("\n")}),e.pop())}),e.pop()),r.b("      </ul>"),r.b("\n"+n),r.b("    </div>"
),r.b("\n"+n),r.b("    "),r.b("\n"+n),r.s(r.f("tracks_count",e,t,1),e,t,0,1872,1934
,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('      <h6 id="tracks_count">'),n.b(n.v(
n.f("tracks_count",e,t,0))),n.b(" tracks</h6>"),n.b("\n")}),e.pop()),r.b("  </div>"
),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define
("hgn!templates/mix_sets/_related_collections",["hogan"],function(e){function n()
{return t.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this
;return r.b(n=n||""),r.b('<div class="sidebar_cards suggested_collections">'),r.b
("\n"+n),r.b('  <div class="card header_card">'),r.b("\n"+n),r.b('    <h6> <span class="i-collection" style="font-size: 20px;"></span> Related collections</h6>'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b("  <div>  "),r.b("\n"+n
),r.b("\n"+n),r.s(r.f("collections",e,t,1),e,t,0,216,726,"{{ }}")&&(r.rs(e,t,function(
e,t,r){r.b('    <div class="suggested_collection card">'),r.b("\n"+n),r.b('      <a href="'
),r.b(r.v(r.f("web_path",e,t,0))),r.b('" class="suggestion">'),r.b("\n"+n),r.b('        <div class="covers" rel="mix">'
),r.b("\n"+n),r.s(r.f("cover_urls",e,t,1),e,t,0,374,439,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b('            <img src="'),n.b(n.v(n.d(".",e,t,0))),n.b('" class="cover_quarter" />'
),n.b("\n")}),e.pop()),r.b("        </div>"),r.b("\n"+n),r.b("\n"+n),r.b('        <span class="title black clear">'
),r.b(r.t(r.f("name",e,t,0))),r.b("</span>"),r.b("\n"+n),r.b('        <span class="featherweight">by '
),r.b(r.v(r.d("user.login",e,t,0))),r.b("</span> "),r.b("\n"+n),r.b('        <span class="gray">('
),r.b(r.v(r.f("mixes_count",e,t,0))),r.b(" "),r.s(r.f("pluralize",e,t,1),e,t,0,649
,679,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("mixes_count playlist playlists")}),
e.pop()),r.b(")</span>"),r.b("\n"+n),r.b("      </a>"),r.b("\n"+n),r.b("    </div>"
),r.b("\n")}),e.pop()),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=
t,n}),define("hgn!templates/admin/_nsfw_stats",["hogan"],function(e){function n()
{return t.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this
;return r.b(n=n||""),r.b('<div class="stats">'),r.b("\n"+n),r.b('  <strong>NSFW</strong> (<span class="not_safe_flags">'
),r.b(r.v(r.d("flaggings.regular_flags",e,t,0))),r.b('</span>) <span class="not_safe_percent">0%</span>'
),r.b("\n"+n),r.b('  <div class="not_safe stat" style="width: 0%;"></div>'),r.b("\n"+
n),r.b("  "),r.b("\n"+n),r.b('  <strong>Safe</strong> (<span class="safe_flags">'
),r.b(r.v(r.d("flaggings.safe_flags",e,t,0))),r.b('</span>) <span class="safe_percent">0%</span>'
),r.b("\n"+n),r.b('  <div class="safe stat" style="width: 0;"></div>'),r.b("\n"+n
),r.b("</div>"),r.fl()},"",e,{});return n.template=t,n}),define("views/mix_view",
["global_trax","lib/trax_utils","lib/sessions","lib/events","views/trax_view","views/mix_player_view"
,"views/mix_tracks_played_view","views/mix_comments_view","views/user_about_view"
,"views/sharing_view","views/add_to_collection_view","views/pick_next_mix_view","hgn!templates/mixes/_display"
,"hgn!templates/mixes/_likes","hgn!templates/mixes/_sidebar_collection","hgn!templates/mixes/_sidebar_collection_mix"
,"hgn!templates/mixes/_mix_card","hgn!templates/tracks/_track_played","hgn!templates/mixes/_details"
,"hgn!templates/mix_sets/_related_collections","hgn!templates/admin/_nsfw_stats","lib/link_helper"
,"lib/jsonh.jquery","lib/_template_helpers","lib/trax_facebook","views/_base_view"
,"jquery.hoverDelegate"],function(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x
,T){var N=i.extend({el:"#belly",events:{"click #edit_button":"switchToEditView","click .mix_art img"
:"mixArtPopup","click .likes_count":"likesDisplay","click .flag_button":"flagMix"
,"click .flag_genres":"flagGenres","click #like_button, #youtube_like_button":"onLikeClick"
,"click #share_button":"toggleSharing","click #yt_share_button":"toggleSharing","click .shareClose"
:"hideSharing","click #add_button":"onAddClick","click #next_mix_button":"nextMixButton"
,"click #pick_next_mix_button":"pickNextMixLightbox","click .sidebar_collection .view_all"
:"viewAllMixes","click #play_overlay, #overlay_animation":"onPlayPauseClick","click #description_html a"
:"onDescriptionLinkClick","click #pinterest_button":"onPinterestButtonClick","click #play_on_youtube"
:"playOnYoutube","click #youtube_play_button":"onYoutubePlayClick","click #youtube_pause_button"
:"onYoutubePauseClick","click #youtube_skip_button":"onYoutubeSkipClick","click #youtube_flag_button"
:"onYoutubeFlagClick","click #visualize":"visualize"},initialize:function(e){this
.childViews=[],this.mix=e.mix,this.reviews=e.reviews,this.user_mixes=e.user_mixes
,this.similar_mixes=e.similar_mixes,this.related_collections=e.related_collections
,this.eights=0,this.smart_id=ParsedLocation.urlHashParams.smart_id,_.bindAll(this
,"onMixPathChanged","onMixNameChanged","onTagsChange","onDescriptionChange","onTracksCountChange"
,"togglePublish","switchToEditView","hideSharing","playOnYoutube","onYoutubePlayerStateChange"
,"onYoutubePlayerReady","onYoutubePlayerError","adjustPlaylistHeight","onPlayerStateChange"
,"onMixCoverUrlChange","showModeratorControls","initComments","updateLikeState","play"
,"onKeyup","showStats","openInApp"),setTimeout(window.hideFacade,2e3),this.mix.on
("change:liked_by_current_user",this.updateLikeState),window.navigator.userAgent.
match(/iphone|ipad|android/i)&&(window.dummySound=soundManager.createSound({id:"silence"
,url:"about:blank"}),window.dummySound.load(),$("#play_overlay").click(function(e
){window.dummySound.play()})),$(document).on("keydown",this.onKeyup)},afterRender
:function(){this.setGradient(),this.$mixName=this.$("#mix_name"),this.$playlist=this
.$("#playlist"),this.whenUserReadyOrChanged(_.bind(this.onUserSet,this)),this.initComments
(),n.updatePermissionsDisplay(),this.togglePublish(),this.userAboutView||(App.views
.userAboutView=new a({el:this.$("#user_byline"),user:this.mix.get("user")}),this.
childViews.push(App.views.userAboutView)),this.initTracksPlayed(),this.updateCounts
(),this.toggleSidebarStyle(),this.freezeSharing=!1,ParsedLocation.urlHashParams.show_mix_likes==="1"&&
this.likesDisplay();if(window.playMixOnLoad||ParsedLocation.urlHashParams.play||ParsedLocation
.urlParams.play){var e="auto";window.playMixOnLoad&&(e="click"),window.playMixOnLoad=!1
,this.initPlayer()}$("#mix_details").attr("onclick",null),App.views.mixPlayerView&&
App.views.mixPlayerView.mix&&App.views.mixPlayerView.mix.id==this.mix.id&&(this.mixPlayerView=
App.views.mixPlayerView,this.mixPlayer=App.views.mixPlayerView.mixPlayer,this.onPlayerStateChange
()),r.pageReadyToUse(),this.renderPlusOne(),T.loadFacebookJs(),T.parseXFBML(),this
.initializeEditMode(),this.showCarousel(),this.showFakeLightbox(),this.openInApp(
)},setGradient:function(){var t=this.$("#cover_art")[0],n=this.$(".background-blur"
)[0];e.setGradient(n,this.mix.get("color_palette"),4,t);var r;canvases=this.$(".background-blur.unrendered"
),_.each(canvases,function(t){e.setGradient(t,!1,2)})},onUserSet:function(){this.
showModeratorControls(),n.isAtLeastOwner(this.mix)?(this.$("#stats_button").show(
),this.$("#play_overlay").css({display:"block"}),this.$("#play_on_youtube_container"
).parent().css({top:"80px"})):this.$("#stats_button").hide(),n.isAdmin()&&this.$("#play_on_youtube_container"
).parent().css({display:"block",top:"80px"})},initComments:function(){if(!PAGE.serverRendered
){var e=$('<div id="mix_comments" class="card displaymode"><img src="/assets/spinner/spinner-large.gif" id="reviews-spinner" /></div>'
);this.$("#mix_content").append(e),this.mixCommentsView=new u({mix:this.mix,per_page
:8,load:!0,onLoad:this.showSidebarAdBTF,el:e})}else this.mixCommentsView=new u({mix
:this.mix,per_page:8,reviews:this.reviews});this.childViews.push(this.mixCommentsView
)},showSidebarAdBTF:function(){$("#mix_comments .comment").length>3&&($("#sidebar"
).append('<div class="sidebar_ad_wrapper"><div id="sidebar_ad_btf"></div></div>')
,App.views.adsView.appendSidebarAd()),PAGE.serverRendered||(App.views.adsView.fillEmptyAds
(!0),App.views.adsView.refreshExistingAds())},renderPlusOne:function(){window.gapi&&
gapi.plusone.go()},render:function(){this.mixEditView&&delete this.mixEditView;var e=new 
x(this.mix.toJSON());e.async=!0,e.read_only&&(e.similar_mixes=this.similar_mixes)
,this.$el.html(h(e,{"mixes/mix_card":m.template}));var t='<div class="container">  <div id="superheader_box" class="hidden-xs hidden-sm hidden">    <div style="" class="advertisement" id="Superheader" data-slot-name="Superheader" data-size="banner"></div>  </div>  <div class="row">    <div id="sidebar" class="sidebar displaymode">       <div id="sidebar_ad">         <span class="advertisement_text">ADVERTISEMENT</span>         <div class="advertisement" id="Mixpage_Sidebar" data-slot-name="Web_300x250" data-size="boxcard"></div>       </div>    </div>    <div id="mix_content" class="content">      <div class="displaymode"><div id="moderator" style="display: none;" class="card"></div></div>    </div>    <div id="tracklists" class="editmode" style="display: none;">      <div class="col-xs-12 col-md-6 col-lg-6"><div id="track_selection" class="card"></div></div>      <div class="col-xs-12 col-md-6 col-lg-6"><div id="track_search" class="card"></div></div>    </div>    <div id="lower_sidebar" class="sidebar displaymode" style="display: block;"></div>  </div></div>'
;this.$el.append(t),this.$("#mix_content").prepend(y(e,{"tracks/track_played":g.template
}));var n=$('<div class="displaymode"></div>');if(this.user_mixes){var r=new x(this
.user_mixes);n.append(d(r,{"mixes/sidebar_collection_mix":v.template}))}if(this.similar_mixes&&
this.similar_mixes.mixes.length>0&&!this.mix.get("read_only")){var i=new x(this.similar_mixes
);n.append(d(i,{"mixes/sidebar_collection_mix":v.template}))}this.mix.on("image:change"
,this.onMixCoverUrlChange);if(this.related_collections&&this.related_collections.
collections.length>0){var s=new x(this.related_collections);n.append(b(s))}this.$
("#lower_sidebar").empty().append(n),this.afterRender()},bindMixEvents:function()
{this.mix.on("change:path",this.onMixPathChanged),this.mix.on("change:name",this.
onMixNameChanged),this.mix.on("change:published",this.togglePublish),this.mix.on("change:description_html"
,this.onDescriptionChange),this.mix.on("change:tracks_count",this.onTracksCountChange
),this.mix.on("change:tag_list_cache",this.onTagsChange),this.mix.on("image:change"
,this.onMixCoverUrlChange)},onMixCoverUrlChange:function(){this.$("#play_area .cover"
).attr("src",this.mix.image.mixpageUrl()),this.$("#zoom").hide()},bindMixPlayerEvents
:function(){this.onPlayerStateChange(),this.mixPlayer.on("play resume pause",this
.onPlayerStateChange),this.mixPlayer.on("switchedToYoutube",this.setHeight),this.
mixPlayer.on("switchedToSoundManager",this.setHeight),this.mixPlayer.autoPlay||this
.mixPlayer.on("play",this.rotateSidebarAdOnPlay)},toggleSidebarStyle:function(){}
,initializeEditMode:function(){$("#edit_spinner").html(e.spinner({length:5,radius
:5,color:"#eee"})).show(),window.location.href.match(/\/edit$/)&&(this.urlIsEditMode=!0
),(!this.mix.get("published")||this.urlIsEditMode)&&this.switchToEditView(),this.
bindMixEvents(),this.replaceState()},switchToEditView:function(){if(window.navigator
.userAgent.match(/iphone|ipad|android/i))return App.Trax.show_flash_error("Sorry, mix editing doesn't work on mobile devices yet. Please try again using a desktop browser."
,!0),!1;$("#edit_button").addClass("loading");var e=this;return require(["views/mix_edit_view"
],function(t){$("#edit_button").removeClass("loading"),e.mixEditView||(e.mixEditView=new 
t({mix:e.mix}),e.childViews.push(e.mixEditView)),e.mixEditView.editMode()}),!1},onMixPathChanged
:function(){this.replaceState()},replaceState:function(){if(ParsedLocation.urlParams
.keep_params)return!1;e.pushCurrentState(this.mix.get("web_path")+(PAGE.editMode?"/edit"
:""),!0)},onMixNameChanged:function(){document.title=this.mixPageTitle(),this.$("#mix_name"
).html(this.mix.get("name"))},mixPageTitle:function(){return this.mix.get("name")+" | "+
this.mix.get("user").login},onDescriptionChange:function(){var e=this.mix.get("description"
),t=this.mix.get("description_html");this.$("#description_html").html("<p>"+t+"</p>"
)},onTracksCountChange:function(){this.$("#tracks_count").html("("+this.mix.get("tracks_count"
)+" tracks)")},onTagsChange:function(){this.$("#mix_tags_display").html(e.templateHelpers
.list_tags.call(this.mix.toJSON()))},onMixCoverImgixUrlChange:function(){$("#play_area .cover"
).attr("src",this.mix.get("cover_imgix_url")+"&w=525")},togglePublish:function(){
this.mix.get("published")?(this.$("#embed_button, #share_button, #fb_share").show
(),this.$("#edit_button").addClass("published")):(this.$("#embed_button, #share_button, #fb_share"
).hide(),this.$("#edit_button").removeClass("published"))},showPublishedStatusView
:function(){n.isAtLeastOwner(this.mix)&&(new e.PublishStatusView({mix:e.mix})).show
()},initPlayer:function(){window.playMixOnLoad=!1;if(App.Trax.regionallyBlocked()&&!
this.intlPlaybackAllowed()){this.playOnYoutube();return}App.views.mixPlayerView?App
.views.mixPlayerView.loadMix(this.mix,this.smart_id):(App.views.mixPlayerView=new 
s({mix:this.mix,smart_id:this.smart_id}),App.views.mixPlayerView.show()),this.mixPlayer=
App.views.mixPlayerView.mixPlayer,App.views.mixPlayerView.loadMix(this.mix,this.smart_id
),this.bindMixPlayerEvents();var e=this.mix.id==this.carousel_mix_id;return App.views
.mixPlayerView.playMix("click",e),this.$("#visualize").show(),this.mixPlayer},intlPlaybackAllowed
:function(){return e.currentUser&&(n.isAtLeastOwner(this.mix)||e.currentUser.isJuniorModerator
())},play:function(){return this.mixPlayer?this.mixPlayer.play("auto"):this.onPlayPauseClick
(),!1},initTracksPlayed:function(){this.mixTracksPlayedView=new o({mix:this.mix,mixView
:this}),this.childViews.push(this.mixTracksPlayedView)},updateCounts:function(){S
.now_with_context("/mixes/"+this.mix.id+"/counts",this,function(e){e.plays_count&&
e.plays_count>0&&this.$("#mix_description .plays_count").html("&nbsp;"+t.addCommas
(e.plays_count)),e.likes_count&&e.likes_count>0&&this.$("#mix_description .likes_count"
).html("&nbsp;"+t.addCommas(e.likes_count))})},mixArtPopup:function(e){PAGE.editMode&&
$("#cover_art_upload_link").click()},likesDisplay:function(e){return $(".likes_count"
).addClass("active"),$("#mix_likes").toggleClass("active"),$("#mix_likes").hasClass
("active")?S.now("/mixes/"+this.mix.id+"/likes",function(e){var t=new x(e);$("#mix_likes"
).html(p(t)).slideDown("fast")}):($(".likes_count").removeClass("active"),$("#mix_likes"
).slideUp("fast")),!1},viewAllMixes:function(t){var n=$(t.currentTarget);return n
.hide().siblings(".spin").children("span").show(),S.now(n.attr("href"),_.bind(function(
t){_.each(t.mix_set.mixes,function(e){e.smart_id=t.mix_set.smart_id});var r=new x
(t.mix_set);r.pagination.next_page=!1;var i=d(r,{"mixes/sidebar_collection_mix":v
.template});n.parents(".sidebar_collection").replaceWith(i),e.refreshSidebarAd()}
,this)),!1},flagGenres:function(e){var t=$(e.currentTarget);this.$(".genres").fadeOut
(),S.now(t.data("href"),_.bind(function(e){},this),{with_lock:!0,type:"POST",spinner
:this.$("#flaggings-spinner")})},flagMix:function(t){var r=$(t.currentTarget);return n
.loggedIn()?(r.hasClass("flagged")||(r.addClass("flagged"),S.now(r.data("href"),_
.bind(function(e){this.$(".flaggings").removeClass("tooltip_container").html(w(e.
mix)).prepend('<a href="/nsfw" class="tooltip_container dws_logo"><img src="/assets/logo/DWS.logo.mini.png" /><div class="black_tooltip black_tooltip_up">Join the 8tracks Department of Workplace Safety!</div></a>'
),this.mix.set("flaggings",e.mix.flaggings),this.animate_stats(this.$(".flaggings"
),this.mix)},this),{with_lock:!0,type:"POST",spinner:this.$("#flaggings-spinner")
})),!1):(e.showSignupView(),!1)},animate_stats:function(e,t){if(!e||!t)return!1;var n=
t.get("flaggings").safe_flags+t.get("flaggings").regular_flags+t.get("flaggings")
.admin_flags+t.get("flaggings").admin_safe_flags,r=Math.round((t.get("flaggings")
.safe_flags+t.get("flaggings").admin_safe_flags)*100/n)||0,i=Math.round((t.get("flaggings"
).regular_flags+t.get("flaggings").admin_flags)*100/n)||0;e.find(".safe_percent")
.text(r+"%"),e.find(".safe_flags").text(t.get("flaggings").safe_flags+t.get("flaggings"
).admin_safe_flags),e.find(".safe.stat").width(r+"%"),e.find(".not_safe_percent")
.text(i+"%"),e.find(".not_safe_flags").text(t.get("flaggings").regular_flags+t.get
("flaggings").admin_flags),e.find(".not_safe.stat").width(i+"%")},nextMixButton:function(
){return this.mixPlayer&&(e.overlay_animation("next_mix"),this.mixPlayer.skipMix(
)),!1},adjustPlaylistHeight:function(){},setHeight:function(){e.dialogView&&e.dialogView
.setWindowVars()},onLikeClick:function(t){$link=$(t.currentTarget);if(n.loggedIn(
))e.refreshSidebarAd(),E.toggle_link($link),$link.hasClass("active")&&(this.overlay_animation
("like"),this.$("#share_button").hasClass("active")||(this.toggleSharing({from_like
:!0}),this.shareTimer=_.delay(this.hideSharing,5e3))),this.mix.toggleLike();else{
var r={};r.success_callback=_.bind(function(){this.mix.toggleLike(!1,this.mix)},this
),e.showSignupView(r)}return!1},updateLikeState:function(){var t=this.$("#like_button"
);this.mix.get("liked_by_current_user")?(t.addClass("active").removeClass("inactive"
),this.mix.get("user").id==645&&e.show_flash_error_with_timeout("secret mode unlocked. press 8888 to access vizimalizer."
)):t.removeClass("active").addClass("inactive")},toggleSharing:function(e){clearTimeout
(this.shareTimer);if(!this.sharingView){var t;_.include(this.mix.get("genres"),"hip hop"
)||this.mix.get("tag_list_cache").match(/beats|hip hop|rap|bass/)?t="These #beats doe! (via @8tracks)"
:t="This is why I love @8tracks #NP "+(this.mix.get("genres").length>0?"#"+this.mix
.get("genres")[0]+" ":"");var n=e.currentTarget&&e.currentTarget.id=="yt_share_button"?"#yt_share .share_view"
:"#share .share_view";this.sharingView=new f({el:n,mix:this.mix,url:"https://8tracks.com"+
this.mix.get("web_path"),name:this.mix.get("name"),image:this.mix.get("cover_urls"
).cropped_imgix_url,description:t,description_html:'Check out this playlist on @8tracks: <a href="http://8tracks.com'+
this.mix.get("web_path")+'?utm_campaign=tumblr_button&utm_source=tumblr.com&utm_medium=referral">'+
this.mix.get("name")+'</a> by <a href="http://8tracks.com'+this.mix.get("user").web_path+'?utm_campaign=tumblr_button&utm_source=tumblr.com&utm_medium=referral">'+
this.mix.get("user").login+"</a>.",twitter_related:this.mix.get("user").twitter_username
,buttons:["facebook","twitter","tumblr","google","email","embed"]}),this.childViews
.push(this.sharingView),this.sharingView.render(),this.sharingView.afterRender(),
this.sharingView.on("shareClick",this.hideSharing)}if(!this.$("#share_button").hasClass
("active")){this.hideSharing(),this.$("#mix_recommend, .mix_interactions").hide()
,this.$(".share_view").show(),this.$(".share_interactions").fadeIn(150),this.$("#share_button, #mix_buttons"
).addClass("active"),e.from_like?this.$(".like_share").show():this.$(".like_share"
).hide(),$(document).bind("keydown.sharing",_.bind(function(e){return e.keyCode==27&&
this.hideSharing(),!0},this)),r.clickMixShare();var i=e&&e.from_like,s=i?"auto show"
:"click",o=this.mix.get("user");TraxEvents.track("share dialog opened",{event_type
:s,content_type:"mix",page_type:"mix",mix_id:this.mix.get("id"),profile_id:o&&o.id
})}else this.hideSharing();return!1},hideSharing:function(){try{FB.Dialog.remove(
FB.Dialog._active)}catch(e){}return this.$(".share_interactions").hide(),this.$(".mix_interactions"
).fadeIn(150),this.$("#share_button, #add_button, #mix_buttons").removeClass("active"
),$(document).unbind("keydown.sharing"),!1},shareByEmail:function(){return!1},selectURL
:function(e){return $(e.currentTarget).focus().select(),!1},pickNextMixLightbox:function(
e){var t=new c({mix:this.mix});return this.childViews.push(t),t.show(),!1},onPlayPauseClick
:function(e){console.log("onPlayPauseClick",this.mixPlayer);if(e&&!_.include(["play_overlay"
,"overlay_animation"],e.currentTarget.id))return!0;this.onPlayerStateChange(!0);if(!
this.mixPlayer){if(!App.views.mixPlayerView||App.views.mixPlayerView.mix.id!=this
.mix.id)return this.initPlayer(),!1;this.mixPlayer=App.views.mixPlayerView.mixPlayer
}return this.mixPlayer.toggle(),!1},onPlayerStateChange:function(e){console.log("onPlayerStateChange:"+
e),(this.mixPlayer&&this.mixPlayer.started||e)&&this.$("#play_overlay .quick_play"
).hide()},overlay_animation:function(e){$("#overlay_animation").remove(),$overlay=
$('<div id="overlay_animation" class="'+e+'"></div>'),this.$("#play_area").prepend
($overlay)},onAddClick:function(t){if(!e.currentUser)return e.showSignupView(),!1
;var n=new l({mix:this.mix}),i=n.render();return $.facebox(i),r.clickAddToCollection
(),!1},onDescriptionLinkClick:function(e){if(e.currentTarget.host==window.location
.host)return App.router.navigate(e.currentTarget.pathname,{trigger:!0}),!1},showModeratorControls
:function(){if(e.currentUser&&(e.currentUser.get("admin")||e.currentUser.get("moderator"
))){var t=this;require(["views/moderator_view"],function(e){t.moderatorView=new e
({mix:t.mix}),t.childViews.push(this.moderatorView)})}},onPinterestButtonClick:function(
){App.Events.clickMixShareOption({network:"Pinterest",action:"share",url:"https://8tracks.com"+
this.mix.get("web_path")})},onClose:function(){this.$("#play_area").unbind("hover"
),this.mixPlayer&&(this.mixPlayer.unbind("play resume pause",this.onPlayerStateChange
),this.mixPlayer.unbind("play",this.rotateSidebarAdOnPlay)),this.cleanupSidebar()
,PAGE.editMode=null,$(document).unbind("onkeyup",this.onKeyup)},onKeyup:function(
e){App.views.mixPlayerView&&(e.which==56?this.eights+=1:this.eights=0,this.eights==4&&
this.visualize())},cleanupSidebar:function(){$("#moderator").remove(),$('#sidebar .displaymode > :not(".sidebar_ad_wrapper")'
).remove()},visualize:function(){return App.views.eight888View&&App.views.eight888View
.renderer?!1:(require(["views/8888_view"],function(e){App.views.eight888View=new 
e}),!1)},onViewStatsClick:function(e){if(!this.statsView){var t=$.Deferred(),n=$.
Deferred();return $(e.currentTarget).jsonh_now(function(e){t.resolve(e)}),App.Views
.MixStatsView?n.resolve(App.Views.MixStatsView):require(["views/mix_stats_view"],
function(e){App.Views.MixStatsView=e,n.resolve()}),$.when(t,n).done(this.showStats
),!1}this.$("#stats").slideDown()},showStats:function(e,t){this.statsView=new App
.Views.MixStatsView({mix:this.mix,stats:e.stats,serverRendered:!1}),this.$("#stats"
).slideDown()},carousel_mixes:{6996593:{clickthrough:"http://www.cwtv.com/shows/crazy-ex-girlfriend/"
,impression_tracker:"http://8trx.com/1Vlrn6L",images:["https://s3.amazonaws.com/8tr.ad.assets/carousel_images/CW_Crazy%20Ex_eCards_1.png"
,"https://s3.amazonaws.com/8tr.ad.assets/carousel_images/CW_Crazy%20Ex_eCards_2.png"
,"https://s3.amazonaws.com/8tr.ad.assets/carousel_images/CW_Crazy%20Ex_eCards_3.jpg"
,"https://s3.amazonaws.com/8tr.ad.assets/carousel_images/CW_Crazy%20Ex_eCards_4.png"
]},5325046:{impression_tracker:"http://8trx.com/1PdSvkz",clickthrough:"http://8trx.com/1l2csOt"
}},showCarousel:function(){if(_.include(_.keys(this.carousel_mixes),String(this.mix
.id))){var e=this;require(["views/carousel_view"],function(t){e.$("#mix_art_wrapper"
).addClass("carousel"),e.$("#play_area").addClass("has_carousel"),e.carouselView=
App.views.carouselView=new t({el:e.$("#mix_art_wrapper").parent(),data:e.carousel_mixes
[e.mix.id]})})}},playOnYoutube:function(t){App.views.mixPlayerView&&(App.views.mixPlayerView
.close(),delete App.views.mixPlayerView),this.sharingView&&(this.hideSharing(),this
.sharingView.close(),delete this.sharingView),this.youtubeTrackIndex=0;if(!this.mix
.tracks||this.mix.tracks.length==0)return this.mix.bind("international_error",_.bind
(function(){e.resetRegionalBlocking(),this.onPlayPauseClick()},this)),this.mix.withInternationalTracks
(this.playOnYoutube);$("#mix_audio").hide(),$("#mix_youtube").fadeIn(),$("#mix_youtube_embed"
).html(e.spinner({length:10,radius:10,color:"#fff"}));if(typeof YT=="object")this
.youtubeTrackIndex=-1,this.playNextTrackOnYoutube();else{window.onYouTubePlayerAPIReady=
_.bind(function(){this.youtubeTrackIndex=-1,this.playNextTrackOnYoutube()},this);
var n=document.createElement("script");n.src="https://www.youtube.com/player_api"
;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}
return!1},onYoutubePlayClick:function(){this.youtube_player.playVideo()},onYoutubePauseClick
:function(){this.youtube_player.pauseVideo()},onYoutubeSkipClick:function(){return this
.playNextTrackOnYoutube(),this.youtubeEvent("skip"),!1},playNextTrackOnYoutube:function(
){this.youtubeTrackIndex+=1;if(this.youtubeTrackIndex==this.mix.tracks.length)return;
var e=this.mix.tracks.models[this.youtubeTrackIndex];e.trigger("playing"),e.getYoutubeEmbed
(_.bind(function(e){e?this.youtube_player?(this.youtube_player.clearVideo(),this.
youtube_player.loadVideoById(e),this.youtubeEvent("play",e)):this.youtube_player=new 
YT.Player("mix_youtube_embed",{height:"100%",width:"100%",videoId:e,autoplay:1,events
:{onReady:this.onYoutubePlayerReady,onStateChange:this.onYoutubePlayerStateChange
,onError:this.onYoutubePlayerError}}):(this.youtubeTrackIndex+=1,this.playNextTrackOnYoutube
())},this)),this.nowPlayingTrackYoutubeTrackView&&this.nowPlayingTrackYoutubeTrackView
.close({keepDomElement:!0}),this.mixTracksPlayedView.showTrackPlayed(e),this.nowPlayingTrackYoutubeTrackView=
this.mixTracksPlayedView.showTrackPlayed(e,$("#mix_youtube #now_playing")[0]),this
.nowPlayingTrackYoutubeTrackView.render(),this.nowPlayingTrackYoutubeTrackView.marquee
()},youtubeEvent:function(e,t){typeof t=="undefined"&&(t=this.youtube_player.getVideoData
().video_id);var n=this.mix.tracks.models[this.youtubeTrackIndex];$.ajax("/you_tube_tracks/"+
n.id+"/"+e,{data:{you_tube_id:t},method:"POST"})},onYoutubePlayerReady:function(e
){e.target.playVideo(),this.youtubeEvent("play")},onYoutubePlayerStateChange:function(
e){switch(this.youtube_player.getPlayerState()){case 0:this.playNextTrackOnYoutube
();break;case 1:this.$("#mix_youtube").addClass("playing");break;case 2:this.$("#mix_youtube"
).removeClass("playing")}},onYoutubePlayerError:function(e){this.youtubeEvent("report_unplayable"
),this.playNextTrackOnYoutube()},onYoutubeFlagClick:function(t){return this.youtubeEvent
("flag_invalid"),this.playNextTrackOnYoutube(),e.show_flash_error("This video has been flagged as an incorrect track. Thanks for letting us know!"
,!0),!1},openInApp:function(){window.device!="desktop"&&(this.$(".quick_actions.download"
).removeClass("hidden"),this.mix.get("dynamic_branch_io_deeplink")&&$(".inlineAppBanner a"
).attr("href",this.mix.get("dynamic_branch_io_deeplink")))},showFakeLightbox:function(
e){if(e||PAGE.experiments&&PAGE.experiments.fake_lightbox&&PAGE.experiments.fake_lightbox
.variation=="lightbox"){if(cookie.get("sawfakelightbox"))return!1;cookie.set("sawfakelightbox"
,1),$.facebox('<div id="fake_lightbox" style="text-align: center;"><span class="i-logotype" style="font-size: 80px; color: #2f364a; "></span><br /><br /><br /><p>Welcome to 8tracks, the best place for people to share and discover playlists. Please enjoy this excellent mix!</p><p><a href="#" onclick="App.Trax.showLoginView(); return false;" id="login_link">Log in</a>&nbsp;&nbsp;|&nbsp;&nbsp;   <a href="#" onclick="App.Trax.showSignupView(); return false;">Sign up</a></p><br /><p><a href="#" class="flatbutton turquoise_button" onclick="$.facebox.close(); return false;">Awesome, thanks!</a></p></div>'
),_.bindAll(this,"onFakeLightboxClose"),$(document).on("close.facebox",this.onFakeLightboxClose
)}},onFakeLightboxClose:function(e){$(document).unbind("close.facebox",this.onFakeLightboxClose
),TraxEvents.track("fake_lightbox_closed",{event_type:"click"})}});return window.
hideFacade=function(){var e=document.getElementById("cover_facade");e&&(e.className="hidden"
)},N}),define("pages/mixes_show",["global_trax","models/mix","views/mix_view","views/user_about_view"
,"collections/mixes"],function(e,t,n,r,i){App.Views.MixView||(App.Views.MixView=n
,App.Views.UserAboutView=r,App.Models.Mix=t),PAGE.serverRendered||App.views.appView
.showMixView(),PAGE.serverRendered&&(e.mix=i.load(PAGE.mix),App.currentView=App.views
.mixView=new n({mix:e.mix}),App.views.mixView.afterRender())});