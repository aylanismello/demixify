(function(){var e=!1,t=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(
){},Class.extend=function(n){function o(){!e&&this.initialize&&this.initialize.apply
(this,arguments)}var r=this.prototype;e=!0;var i=new this;e=!1;for(var s in n)i[s
]=typeof n[s]=="function"&&typeof r[s]=="function"&&t.test(n[s])?function(e,t){return function(
){var n=this._super;this._super=r[e];var i=t.apply(this,arguments);return this._super=
n,i}}(s,n[s]):n[s];return o.prototype=i,o.constructor=o,o.extend=arguments.callee
,o}})(),define("jquery.class",function(e){return function(){var t,n;return t||e.window
.Class}}(this)),define("lib/client_storage",[],function(){return TraxClientStorage
}),define("global_trax",["lib/client_storage"],function(e){function r(e){return _
.isObject(e)?_.map(e,function(e,t){return _.map(e,function(e){return t.charAt(0).
toUpperCase()+t.slice(1)+" "+e+"."})}):e}if(typeof App.Trax!="undefined")return App
.Trax;var t=App.Trax={};t.View=Backbone.View.extend({});var n;t.hide_flash_timer=
function(e){e=e||1e4,n=setTimeout(function(){$(".flash_container").slideUp()},e)}
,t.hide_flash_error=function(){$(".flash_container").slideUp()},t.hide_flash_notices=
function(){$(".flash_container ul.notices").size()>0&&$(".flash_container ul.errors"
).size()===0&&t.hide_flash_timer()},t.show_flash_error=function(e,n){t.update_flash
({errors:e}),n&&t.hide_flash_timer()},t.show_flash_error_with_timeout=function(e,
n){t.update_flash({errors:e},n)},t.show_private_redirection_message=function(){t.
show_flash_error("Oops! It looks like the mix you are trying to listen to is not currently available. In the meantime, check out these playlists."
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
)},t}),define("lib/jsonh.jquery",["jquery.class","global_trax"],function(e,t){var n=
function(){var n={},r=function(e,t,n,r,s){return _.isFunction(r)||(s=r,r=n,n=t,t=
null),s||(s={}),s.context=n,i(e,t,r,s)},i=function(e,t,n,r){_.isFunction(t)&&(r=n
,n=t,t=null);var i={url:e,data:t,complete:n};return r&&(i=$.extend(i,r)),f(i)},s=
{},o=function(e,t,n){return n&&s[e]?!1:e(e,t,function(){n&&delete s[e]})},u=function(
e,t,n){var r={complete:t};n=n||{};if(e.nodeName.toUpperCase()=="FORM")r.action="submit"
,r.form=e;else{if(e.nodeName.toUpperCase()!="A")throw"You must pass a <form> or an <a> tag"
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
){return r.ajax(n),!1})})}}),n()}),define("lib/traxhead",[],function(){if(typeof 
App.Traxhead!="undefined")return App.Traxhead;var e=App.Traxhead={};return e.looksLoggedIn=
function(){return!!document.cookie.match("auth_token")},e.initFbAppId=function(t)
{t=_.extend({music:!1},t),FB.init({appId:"166738216681933",status:!0,channelUrl:"//8tracks.com/channel.html"
,cookie:!0,xfbml:!0,music:t.music,oauth:!0}),setTimeout(function(){e.FbLoaded=!0}
,500)},e.onFbInit=function(){try{e.initFbAppId(),ParsedLocation.urlParams.load_fb_bridge&&
TRAX.trackPageView.loadFbMusicBridge(),FB.Event.subscribe("edge.create",function(
e){App.Events&&App.Events.gaSocial("facebook","like",e)}),FB.Event.subscribe("edge.remove"
,function(e){App.Events&&App.Events.gaSocial("facebook","unlike",e)}),FB.Event.subscribe
("message.send",function(e){App.Events&&App.Events.gaSocial("facebook","send",e)}
)}catch(t){}},e.onFbMusicInit=function(){try{e.initFbAppId({music:!0}),App.views.
fbPlayerIframeView.loadFbMusicBridge()}catch(t){}},e.zeroFill=function(e,t){return t-=
e.toString().length,t>0?(new Array(t+(/\./.test(e)?2:1))).join("0")+e:e},e}),define
("lib/trax_utils",[],function(){var e={};return e.addCommas=function(e){e+="";var t=
e.split("."),n=t[0],r=t.length>1?"."+t[1]:"",i=/(\d+)(\d{3})/;while(i.test(n))n=n
.replace(i,"$1,$2");return n+r},e.coolNumber=function(e){return e<500?e:e<1e3?e.toString
().substr(0,1)+e.toString().substr(1,9):e<=5e3?e.toString().substr(0,1)+","+e.toString
().substr(1,9):Math.floor(e/1e3)+",000+"},e.toUrlParam=function(e){if(_.isString(
e))return encodeURIComponent(e.replace(/_/g,"__").replace(/\s/g,"_").replace("+","&&"
)).replace(/\//g,"%2F").replace(/\./g,"%5E")},e.capitalizeFirstLetter=function(e)
{return e.charAt(0).toUpperCase()+e.slice(1)},e.toTitleCase=function(e){return e.
replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase
()})},e}),define("lib/events",["lib/client_storage","lib/traxhead","global_trax","lib/jsonh.jquery"
,"lib/trax_utils"],function(e,t,n,r,i){if(typeof App.Events!="undefined")return App
.Events;var s=App.Events={pageReadyToUse:_.once(function(){}),pageView:function(e
,t,n){s.gaPageview(t),TraxEvents.pageView(e,n)},postToStatsTimer:function(e,t){s.
postToStats(e,t,"timer")},postToStats:function(e,t,n){n=n||"counter",r.now("/stats"
,{type:n,k:e,v:t},null,{type:"POST"})},postToLog:function(e,t){t["@collection"]=e
,r.now("/log",t,null,{type:"POST"})},startMix:function(e,t){s.gaTrack("Mix","Start"
,e?e.id:null),t,s.setGACohort()},setGACohort:function(){e.get("listened")===null&&
(ga("set","dimension1",s.timestamp()),e.set("listened",1))},trackClick:function(e
,t){TraxEvents.trackClick(e,t)},likeMix:function(e){console.log("[EVENT] likeMix"
),s.gaTrack("Mix","Like",e?e.id:null)},commentOnMix:function(e){s.gaTrack("Mix","Comment"
,e?e.id:null)},playTrack:function(e,t){s.gaTrack("Track","Play"),TraxEvents.refreshSession
()},favTrack:function(){s.gaTrack("Track","Fav")},buyTrack:function(e){s.gaTrack("Track"
,"Buy",e)},followUser:function(){s.gaTrack("User","Follow")},selectInstagramPhoto
:function(){s.gaTrack("Instagram","SelectPhoto")},login:function(e){s.updateGaLoggedInState
(),s.gaTrack("User","Login")},signup:function(e){s.updateGaLoggedInState(),s.gaPageview
("/signup/success")},clickMixShare:function(){},clickMixShareOption:function(e){s
.gaSocial(e.network,e.action,e.url)},shareMix:function(e){s.gaTrack("Mix Share",e
.network)},clickUserShareOption:function(e){s.gaTrack("User Share",e.network)},addPreset
:function(){},removePreset:function(){},clickFindFriends:function(){},enterMixEditMode
:function(){},uploadTrack:function(){s.gaTrack("Mix","TrackUpload")},trackUploadStarted
:function(){s.postToStats("js.track.upload.started")},trackUploadCancelled:function(
){s.postToStats("js.track.upload.started")},trackUploadFinished:function(){s.postToStats
("js.track.upload.finished")},publishMix:function(e){s.gaTrack("Mix","Publish",e?
e.id:null)},playNextMix:function(e){},skipMix:function(){},TRACKS_REPORTED_COUNT_KEY
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
("Collection","AddMix",e?e.id:null)}};return s.init(),s}),define("lib/router",[],
function(){return Backbone.Router.extend({routes:{"":"homepage",homepage:"homepage"
,home:"homepage",home_beta:"dashboard","home/feed(/:page)":"feed","home(/:smart_id(/:page))"
:"home_mix_set","blogs(/:id/:action)":"reload","mixes/:id/soundcloud_matches":"reload"
,mixes:"explore","mixes(/:tags)(/:sort(/:page))":"explore","mixes/songs/:q_artist(/:sort(/:page))"
:"explore",explore:"explore","explore(/q/:query)":"explore","explore(/:tags)(/:sort(/:page))"
:"explore","explore/songs/:q_artist(/:sort(/:page))":"explore","mix_sets/:smart_id(/:page)"
:"mix_set","search/:query/results(/:offset)":"search","search/:query/:type(/:offset)"
:"search","users/:user_slug/favorite_tracks":"favorite_tracks","news-feed":"feed"
,notifications:"notifications",about:"html",api:"html","apps(/:platform)":"html",
artists:"html",content_policy:"html",copyright:"html",festivals:"html",labels:"html"
,licensing:"html",media:"html","help/media_kit":"reload",blog:"html",contact_us:"html"
,wordpress:"html",joomla:"html",privacy:"html",team:"html",terms:"html",login:"html"
,signup:"html","/help/(:action)":"html",nsfw:"nsfw",advertising:"reload",switchfoot
:"reload",xbox:"reload",jobs:"reload",refunds:"reload",plus_faq:"reload","subscriptions(/:action)"
:"reload","subscriptions/:id/edit":"reload","subscriptions/:id":"reload",help:"reload"
,account:"reload","users/:id/edit":"reload",create_mix:"create_mix","settings/1":"reload"
,admin:"reload",troubleshoot:"reload",troubleshooting:"reload",uploader:"reload",
faq:"reload",iphone:"reload",android:"reload",windows8:"reload",store:"reload",tags
:"reload",plus:"reload","api_urls(/:id/edit)":"reload","blogs(/:id)(/:action)":"reload"
,"developers/(:action)":"reload","collections/:collection_slug":"collection",":user_slug"
:"profile",":user_slug/mixes(/:page)":"profile",":user_slug/liked_mixes(/:page)":"profile"
,":user_slug/:mix_slug":"mix",":user_slug/:mix_slug/edit":"mix",":user_slug/:mix_slug/stats"
:"mix_stats",":user_slug/collections/:collection_slug(/:page)":"collection","users/:user_slug/:action"
:"reload","assets/(:folder)(/:image)":"reload"},initialize:function(e){this.appView=
e.appView},explore:function(e){this.appView.loadBrowseView(this.getPath())},mix_set
:function(e,t){_.include(["listened","liked","recommended"],e)?this.appView.loadHomeMixSetView
(this.getPath()):this.appView.loadBrowseView(this.getPath())},search:function(e){
this.appView.loadSearchView(this.getPath())},profile:function(e){this.appView.loadUserView
(this.getPath())},mix:function(e,t){this.appView.loadMixView(this.getPath())},mix_edit
:function(e,t){},mix_stats:function(e,t){this.appView.loadMixStatsView(this.getPath
())},feed:function(e){this.appView.loadNewsFeedView(e)},notifications:function(){
this.appView.loadNotificationsView()},collection:function(e,t){this.appView.loadCollectionView
(this.getPath())},homepage:function(){this.appView.loadHomepageView()},dashboard:
function(){this.appView.loadDashboardView()},home_mix_set:function(e,t){this.appView
.loadHomeMixSetView(this.getPath())},favorite_tracks:function(e){this.appView.loadFavoriteTracksView
(this.getPath())},html:function(e){var t=this.appView.loadHTML(this.getPath())},create_mix
:function(){App.Sessions.loggedIn()?this.reload():this.html()},nsfw:function(e){this
.appView.loadNSFW()},reload:function(){return App.views.mixPlayerView&&App.views.
mixPlayerView.mixPlayer.isPlaying()?window.open(this.getPath()):window.location=this
.getPath(),!1},getPath:function(){return Backbone.history._hasPushState?window.location
.pathname:window.location.hash.substring(1)}})}),define("models/modules/backbone_client_storage"
,["lib/client_storage"],function(e){var t={getModel:function(t){return e.get(this
._modelKey(t))},getModels:function(t){var n=this._collectionKey(t);return _.map(e
.get(n),function(t){return e.get(n+"-"+t)})},setModel:function(t){return this._addToCollection
(t),e.set(this._modelKey(t),t)},setModels:function(e){return _.each(e,function(e)
{this.setModel(e)},this),e},destroyModel:function(t){return this._removeFromCollection
(t),e.destroy(this._modelKey(t))},_modelKey:function(e){return(e.storeKey||e.collection
.storeKey)+"-"+e.id},_collectionKey:function(e){return e.storeKey},_addToCollection
:function(t){if(t.collection){var n=this._collectionKey(t.collection),r=e.get(n);
r||(r=[]),r.push(t.id),e.set(n,r)}},_removeFromCollection:function(t){if(t.collection
){var n=this._collectionKey(t.collection),r=e.get(n);r||(r=[]),r=_.reject(r,function(
e){return e==t.id.toString()}),e.set(n,r)}}};return t}),define("models/modules/flexible_store"
,["models/modules/backbone_client_storage","lib/jsonh.jquery"],function(e,t){Backbone
.jsonhSync=function(e,n,r){var i=function(e){var t={};return _.each(e.FIELDS_TO_BACKEND
,function(n){if(!_.isUndefined(e.get(n))){var r=e.get(n);r===!0&&(r=1),r===!1&&(r=0
),t[n]=r}}),t},s,o,u,a;_.isUndefined(n.id)?(o=n,s=null,u=o.urlRoot,a=o.jsonhKey):
(s=n,o=null,u=s.url(),a=s.jsonhKey||s.collection.jsonhKey),_.isUndefined(r)&&(r={
});var f={url:u,type:Backbone.methodMap[e],complete:function(e){e.success?_.isFunction
(r.success)&&r.success(n,e[a],r):_.isFunction(r.error)&&r.error(n,e[a],r)}};return r
.data&&(f.data=r.data),e==="update"&&(f.data=f.data||{},f.data[a]=i(s)),t.ajax(f)
},Backbone.flexibleSync=function(t,n,r){_.isUndefined(r)&&(r={});var i,s,o;_.isUndefined
(n.id)?(i=n,s=null):(s=n,i=null);if(t==="read"){var u=!1,a;s?(a=e.getModel(s),a&&
(u=!0,_.isFunction(r.success)&&r.success(s,a,r))):i&&(a=e.getModels(i),a&&a.length>0&&
(u=!0,_.isFunction(r.success)&&r.success(i,a,r))),u||(o=_.clone(r),o.success=_.bind
(function(t){_.isFunction(r.success)&&r.success(this,t,r),this.models?e.setModels
(this.models):e.setModel(this)},s||i),Backbone.jsonhSync(t,s||i,o))}else t==="create"||
t==="update"?(e.setModel(s),Backbone.jsonhSync(t,s,o)):t==="delete"&&(e.destroyModel
(s),Backbone.jsonhSync(t,s,o))};var n={localSave:function(){e.setModel(this)},localDestroy
:function(){e.destroyModel(this)},sync:function(e,t,n){return Backbone.flexibleSync
(e,t,n)}};return n}),define("models/user",["global_trax","models/modules/flexible_store"
,"lib/jsonh.jquery"],function(e,t,n){var r=Backbone.Model.extend(t).extend({urlRoot
:"/users",storeKey:"Users",jsonhKey:"user",FIELDS_TO_BACKEND:["login","bio","web_safe_browse"
,"next_mix_prefs"],PARTNER_CONNECTED:"connected",PARTNER_NOT_CONNECTED:"not_connected"
,PARTNER_CONNECTED_BUT_EXPIRED:"connected_but_expired",CONTACTS_UPDATING:"updating"
,CONTACTS_ERROR:"error",CONTACTS_UPDATED:"updated",CONTACTS_UPDATED_BUT_EXPIRED:"contacts_updated_but_expired"
,initialize:function(e){},isAdmin:function(){return this.get("admin")},isJuniorModerator
:function(){return this.get("junior_moderator")},toggleFollow:function(t){!t,t={}
;if(!e.currentUser)return!1;e.currentUser.trigger("follow"),n.ajax({url:this.url(
)+"/toggle_follow",type:"POST",complete:_.bind(function(e){e.success&&t.success?t
.success(e):t.error&&t.error(e)},this)})},hasConnectedPartners:function(){return _
.any(this.get("partners"),_.bind(function(e){return e.status===this.PARTNER_CONNECTED||
e.status===this.PARTNER_CONNECTED_BUT_EXPIRED},this))},hasConnected:function(e){return this
.get("partners")&&this.get("partners")[e]&&(this.get("partners")[e].status===this
.PARTNER_CONNECTED||this.get("partners")[e].status===this.PARTNER_CONNECTED_BUT_EXPIRED
)},hasConnectedAndNotExpired:function(e){return this.get("partners")&&this.get("partners"
)[e]&&this.get("partners")[e].status===this.PARTNER_CONNECTED},updatingContactsFor
:function(e){return this.get("partners")[e]&&this.get("partners")[e].contacts_status===
this.CONTACTS_UPDATING},updatingContacts:function(){return this.updatingContactsFor
("facebook")},partnerContactsState:function(e){if(this.get("partners")&&this.get("partners"
)[e]){var t=this.get("partners")[e],n="";return t.status===this.PARTNER_CONNECTED||
t.status===this.PARTNER_CONNECTED_BUT_EXPIRED?n=this.PARTNER_CONNECTED:n=this.PARTNER_NOT_CONNECTED
,t.contacts_status&&(n+=" "+t.contacts_status),n}},updateRecentMixes:function(e){
this.set("recent_mixes",e),this.set("has_recent_mixes",e.length>0),this.localSave
()},allPartnersConnected:function(){return this.hasConnected("facebook")},hasPresetSmartId
:function(e){var t=!!_.find(this.get("preset_smart_ids"),function(t){return t.replace
(/:safe$/,"")===e.replace(/:safe$/,"")});return t?!0:!!_.find(this.get("presets")
,function(t){return"tags:"+t===e})},hasYoutubeConnected:function(){return App.models
.toc&&App.models.toc.hasYoutubeRecommendations()},flag:function(e){return $.ajax("/user_flaggings.jsonh"
,{data:{flagged_user_id:e},type:"POST"})}});return r}),define("lib/sessions",["global_trax"
,"lib/traxhead","lib/client_storage","models/user","lib/events","lib/jsonh.jquery"
],function(e,t,n,r,i,s){if(typeof App.Sessions!="undefined")return App.Sessions;var o=
App.Sessions={};return _.extend(o,Backbone.Events,{whenUserReadyOrChanged:function(
t,n){e.currentUser&&_.defer(t,e.currentUser),n&&n.listenTo(o,"sessions:user_changed"
,t)},_onUserChanged:function(){this.trigger("sessions:user_changed",e.currentUser
)},onPageLoad:function(){t.looksLoggedIn()?this.tryToSetCurrentUserFromPage()||this
.tryToSetCurrentUserFromStorage()||this.tryToSetCurrentUserFromBackend():this.getCountryCode
(),this.logoutUserIfAuthenticationFailed(),i.onSessionsLoaded()},logoutUserIfAuthenticationFailed
:function(){PAGE.failed_authentication&&PAGE.failed_authentication.length>0&&this
.unsetCurrentUser()},tryToSetCurrentUserFromPage:function(){if(PAGE.currentUser)return this
.setCurrentUserByAttributes(PAGE.currentUser)},tryToSetCurrentUserFromStorage:function(
){return n.get("currentUserId")?(e.currentUser=new r({id:n.get("currentUserId")})
,e.currentUser.fetch({success:_.bind(function(){this._onCurrentUserSet(!0)},this)
}),!0):!1},reloadIfOutdated:function(){(!e.currentUser.get("last_logged_in")||Date
.now()-Date.parse(e.currentUser.get("last_logged_in"))>18e5)&&this.updateNotifications
()},updateNotifications:function(){s.now("/users/"+e.currentUser.id+"/notifications_count"
,_.bind(function(t){t.success&&(e.currentUser.set("last_logged_in",new Date),e.currentUser
.set(t.user),e.currentUser.localSave(),this._onCurrentUserSet(!0))},this))},tryToSetCurrentUserFromBackend
:function(e){s.now("/users/current",{include:"recent_mixes,web_preferences,tracking_settings"
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
this.isOwner(e)||!!this.isAdmin()}}),o}),define("views/trax_view",["lib/sessions"
],function(e){return Backbone.View.extend({close:function(e){_.isUndefined(e)&&(e=
{}),e=_.defaults(e,{keepDomElement:!1}),this.childViews&&_.each(_.compact(this.childViews
),function(e){e.close()}),e.keepDomElement?this.cleanupElement():this.remove(),this
.unbind&&this.unbind(),this.onClose&&this.onClose(),this.dormant=!0},cleanupElement
:function(){this.$el.empty(),this.undelegateEvents()},whenUserReadyOrChanged:function(
t){e.whenUserReadyOrChanged(t,this)},afterRender:function(){}})}),define("views/google_plus_view"
,["views/trax_view","lib/jsonh.jquery","lib/sessions","global_trax"],function(e,t
,n,r){var i=e.extend({initialize:function(e){e&&(this.customCallback=e.customCallback
),_.bindAll(this,"enabled","renderCustomButton","loadGapi","asyncGooglePlus","sendAuthCode"
,"unauthorized","logIn","signInCallBack"),window.gapi&&gapi.load("auth2",this.loadGapi
)},enabled:function(){return!0},renderCustomButton:function(e,t){var n={scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.login"
,client_id:GOOGLE_CLIENT_ID,redirecturi:"postmessage",requestvisibleactions:"http://schemas.google.com/ListenActivity"
,cookiepolicy:"single_host_origin",callback:"googlePlusCallback"};_.isUndefined(t
)||_.extend(n,t),gapi.signin2.render(e,n)},loadGapi:function(){typeof auth2=="undefined"&&
(auth2=gapi.auth2.init({client_id:GOOGLE_CLIENT_ID,scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.login"
}));var e=$(".google-plus-container:not(.attached)");for(var t=0;t<e.length;t++)auth2
.attachClickHandler(e[t],{},this.signInCallBack,function(e){console.log("error signing in"
)}),$(e[t]).addClass("attached")},asyncGooglePlus:function(e,t){var n=$("#"+e);if(
n.data("gapiattached"))return;this.renderCustomButton(e,t)},sendAuthCode:function(
e){var r=this,i=e.getAuthResponse();id_token=i.id_token,access_token=i.access_token
,t.now("/auth/google-plus/callback",{access_token:access_token},function(e){r.logIn
(e),i.scope&&i.scope.match(/youtube/)&&n.trigger("youtube-connected")},{type:"POST"
}).error(this.unauthorized)},unauthorized:function(){r.show_flash_error("Something is wrong with Google+. Please try again."
)},logIn:function(e){n.onBackendLogin(e)},signInCallBack:function(e){var t=e.getAuthResponse
();t.scope&&t.scope.match(/youtube/)&&n.trigger("youtube-started"),this.sendAuthCode
(e)}});return i}),define("views/login_view",["global_trax","views/trax_view","lib/sessions"
,"views/google_plus_view","lib/jsonh.jquery"],function(e,t,n,r,i){var s=t.extend(
{id:"login_container",initialize:function(e){_.bindAll(this,"onBackendLogin"),this
.attempted_path=e.attempted_path,this.success_callback=e.success_callback,$(document
).bind("onBackendLogin",this.onBackendLogin)},events:{"click a.signup":"onSignupClick"
,"submit #login_form":"onSubmit","click .forgot":"onForgot","click .facebook_connect_button"
:"onFbConnect"},onSubmit:function(){var e={login:this.$("#login").val(),password:
this.$("#password").val(),attempted_path:this.attempted_path||this.$("#attempted_path"
).val(),play_token:cookie.get("play_token"),include:"recent_mixes,web_preferences,tracking_settings"
,api_version:"2.1",visitor_id:TraxEvents.getVisitorId(),session_id:TraxEvents.refreshAndGetSessionId
()},t="/sessions/create_get.jsonp";return App.env=="production"&&(t="https://8tracks.com/sessions/create_get.jsonp"
),this.$("form").addClass("loading"),i.now_with_context(t,e,this,function(e){this
.$("form").removeClass("loading");if(e.success){var t=!!this.attempted_path||!!this
.success_callback;n.onBackendLogin(e,t)}else this.render(e.html)},{with_lock:!0,dataType
:"jsonp",spinner:"#login_form-spinner",headers:{}}),!1},onBackendLogin:function(e
){typeof this.success_callback=="function"?this.success_callback.call():this.attempted_path&&
(window.location=this.attempted_path),$.facebox.close(),_.delay(_.bind(function()
{this.close()},this),1e3)},render:function(t){return this.$el.html(t),$.facebox(this
.$el,{dontRemove:!0}),this.msg&&e.show_flash_error(this.msg),new r,this},show:function(
t){t.msg&&(this.msg=t.msg);if(this.$el.text()!==""){$.facebox(this.$el,{dontRemove
:!0});return}i.now("/login",_.bind(function(t){t.success&&(t.logged_in?n.setCurrentUserByAttributes
(t):(this.render(t.html),e.initial_focus(this.$el)))},this))},onSignupClick:function(
){return e.showSignupView({attempted_path:this.attempted_path,success_callback:this
.success_callback}),this.close(),!1},onForgot:function(){return $.facebox.close()
,!0},onFbConnect:function(){},onClose:function(){$(document).unbind("onBackendLogin"
,this.onBackendLogin)}});return s}),define("views/signup_view",["global_trax","views/trax_view"
,"lib/sessions","views/google_plus_view","lib/jsonh.jquery"],function(e,t,n,r,i){
var s=t.extend({id:"signup",initialize:function(e){_.bindAll(this,"checkLogin","checkEmail"
,"checkPassword","onBackendLogin","renderCaptcha"),this.onPage=e.onPage,this.attempted_path=
e.attempted_path,this.success_callback=e.success_callback,this.message=e.message,
$(document).bind("onBackendLogin",this.onBackendLogin),this.validation={login:null
,email:null,password:null}},renderCaptcha:function(){if(!window.grecaptcha){window
.recaptchaCallback=this.renderCaptcha;var e=document.createElement("script");e.type="text/javascript"
,e.src=window.location.protocol+"//www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit"
,document.body.appendChild(e),window.recaptcha=!0}else{if(this.recaptcha_id)return;
this.recaptcha_id=grecaptcha.render(this.$(".g-recaptcha")[0],{sitekey:"6LfcvwkTAAAAADOkNP5kVg2yCFkl4unbkprEGZxu"
})}},events:{"click a.login":"onLoginClick","submit #signup_form":"onSubmit","click .facebook_connect_button"
:"onFbConnect","keydown input":"clearValidation","keyup #user_login":"checkLogin"
,"keyup #user_email":"checkEmail","keyup #user_password":"checkPassword","click .email-cta"
:"onEmailCTAClick","focus input":"onInputFocus","blur input":"onInputBlur"},onSubmit
:function(){var t={user:{login:this.$("#user_login").val(),password:this.$("#user_password"
).val(),email:this.$("#user_email").val(),agree_to_terms:"1","g-recaptcha-response"
:grecaptcha.getResponse(this.recaptcha_id)},attempted_path:this.attempted_path,include
:"recent_mixes,web_preferences,tracking_settings",api_version:"2.1",visitor_id:TraxEvents
.getVisitorId(),session_id:TraxEvents.refreshAndGetSessionId()},r="/users/create_get.jsonp"
;return App.env=="production"&&(r="https://8tracks.com/users/create_get.jsonp"),this
.$("form").addClass("loading"),i.now_with_context(r,t,this,function(t){this.$("form"
).removeClass("loading");if(t.success){var r=!!this.attempted_path||!!this.success_callback
;n.onBackendLogin(t,!0),this.showOnboardingView()}else t.errors=t.validation_errors
,e.update_flash(t),grecaptcha.reset(this.recaptcha_id)},{with_lock:!0,dataType:"jsonp"
,headers:{}}),!1},onBackendLogin:function(){typeof this.success_callback=="function"?
this.success_callback.call():this.attempted_path&&(window.location=this.attempted_path
),$.facebox.close(),_.delay(_.bind(function(){this.close()},this),1e3)},render:function(
e){return this.$el.html(e),this.onPage||($.facebox(this.$el,{dontRemove:!0}),new 
r,this.renderCaptcha()),this.message&&App.Trax.show_flash_error(this.message),this
},show:function(){if($(this.$el).text()!==""){$.facebox(this.$el,{dontRemove:!0})
;return}i.now("/signup",_.bind(function(t){t.success&&(this.render(t.html),e.initial_focus
(this.$el))},this))},onEmailCTAClick:function(){this.$(".email-cta").hide(),this.
$(".email-signup").fadeIn(),this.$("#user_email").focus()},onLoginClick:function(
){return e.showLoginView({attempted_path:this.attempted_path,success_callback:this
.success_callback}),this.onPage||this.close(),!1},onInputFocus:function(e){$(e.currentTarget
).parent(".row").addClass("focus")},onInputBlur:function(e){$(e.currentTarget).parent
(".row").removeClass("focus")},clearValidation:function(e){if(e.keyCode==9||e.keyCode==13
)return console.log("TAB"),!0;var t={};t[e.currentTarget.name.match(/\[(.+)\]/)[1
]]=null,this.updateValidation(t)},checkLogin:_.debounce(function(e){var t=this.$("#user_login"
).val();if(t.length==0){this.updateValidation({login:null});return}this.userRequest&&
this.userRequest.abort(),this.$(".reminder").show(),this.userRequest=i.now("/users/check_username"
,{login:t},_.bind(function(e){this.updateValidation({login:e.available})},this))}
,250),checkEmail:_.debounce(function(e){var t=this.$("#user_email").val();if(t.length<4
)return;var n=t.indexOf("@"),r=t.indexOf(".");while(r!=-1&&r!=t.length-1&&t.indexOf
(".",r+1)!=-1)r=t.indexOf(".",r+1);var i=n<1||r<1||r<n||n==t.length-1||r==t.length-1||
t.indexOf("@",n+1)!=-1;this.updateValidation({email:!i})},250),checkPassword:_.debounce
(function(e){var t=e.currentTarget.value;if(t.length==0){this.updateValidation({password
:null});return}var n=t.length>=4&&t.length<=22;this.updateValidation({password:n}
)},250),updateValidation:function(e){this.validation=_.extend(this.validation,e);
var t=!0;_.each(this.validation,_.bind(function(e,n){var r=this.$("."+n+"-field")
;e==0?(t=!1,r.addClass("invalid").removeClass("valid")):_.isNull(e)?(r.removeClass
("invalid valid"),t=!1):r.addClass("valid").removeClass("invalid")},this)),t?this
.$(".submit").removeAttr("disabled").removeClass("disabled"):this.$(".submit").attr
("disabled","disabled").addClass("disabled")},onFbConnect:function(){},showOnboardingView
:function(){App.views.appView.loadOnboarding()},onClose:function(){$(document).unbind
("onBackendLogin",this.onBackendLogin)}});return s}),define("collections/_base_collection"
,[],function(){return typeof App.Collections.BaseCollection!="undefined"?App.Collections
.BaseCollection:(App.Collections.BaseCollection=Backbone.Collection.extend({load:
function(e){if(_.isArray(e)){var t=[];return _.each(e,function(e){t.push(this.loadOne
(e))},this),t}return this.loadOne(e)},loadOne:function(e){return this.loadOneByAttributes
(e)},loadOneByAttributes:function(e){if(_.isUndefined(e))return!1;var t=this.get(
e.id);return t?t.set(e):this.add(e),this.get(e.id)}}),App.Collections.BaseCollection
)}),define("models/suggested_user",[],function(){return Backbone.Model.extend({})
}),define("collections/suggested_social_users",["collections/_base_collection","models/suggested_user"
,"lib/jsonh.jquery"],function(e,t,n){var r=e.extend({model:t,initialize:function(
e){this.partner=e,this.attempts=0,_.bindAll(this,"loadFriends","getWhenLoaded","loadOne"
,"_updateAndReload","onError","onDoneLoading")},loadFriends:function(){this.attempts=0
,$.getJSON("/who_to_follow/"+this.partner+"/get_and_reload.jsonh",this._updateAndReload
).error(this.onError)},getWhenLoaded:function(){this.attempts=this.attempts+1,$.getJSON
("/who_to_follow/"+this.partner+"/get_when_loaded.jsonh",this._updateAndReload).error
(this.onError)},_updateAndReload:function(e){var t=this;_.each(e.suggested_friends
,function(e){!e.suggested_user||t.loadOne(e)}),e.state.contacts_status!="updated"&&
this.attempts<15?_.delay(this.getWhenLoaded,1e3):this.attempts==15?this.onError()
:this.onDoneLoading()},onError:function(){this.trigger("suggested_friends:not_responding"
)},onDoneLoading:function(){this.trigger("suggested_friends:done_loading")}});return r
}),define("lib/_template_helpers",["global_trax","lib/trax_utils"],function(e,t){
var n=function(e){this.initTplParams(e)};return n.prototype.initTplParams=function(
e){_.extend(this,e)},n.prototype.escape=function(){return function(e){return escape
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
nonzero=function(){return this!==0},n}),define("hogan",["require","exports","module"
],function(e,t,n){var r={};(function(e,t){function a(e){return String(e===null||e===
undefined?"":e)}function f(e){return e=a(e),u.test(e)?e.replace(n,"&amp;").replace
(r,"&lt;").replace(i,"&gt;").replace(s,"&#39;").replace(o,"&quot;"):e}e.Template=
function(e,n,r,i){this.r=e||this.r,this.c=r,this.options=i,this.text=n||"",this.buf=
t?[]:""},e.Template.prototype={r:function(e,t,n){return""},v:f,t:a,render:function(
t,n,r){return this.ri([t],n||{},r)},ri:function(e,t,n){return this.r(e,t,n)},rp:function(
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
,s;return{load:o,write:f}}),define("hgn!templates/suggested_users/suggested_user"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="user_about">'
),r.b("\n"+n),r.b('  <div class="avatar">'),r.b("\n"+n),r.b('    <a href="'),r.b(
r.v(r.f("profile_path",e,t,0))),r.b('" class="avatar" rel="external">'),r.b("\n"+
n),r.b("      "),r.s(r.f("avatar_img",e,t,1),e,t,0,131,146,"{{ }}")&&(r.rs(e,t,function(
e,t,n){n.b("sq56, w=56&h=56")}),e.pop()),r.b("\n"+n),r.b("    </a>"),r.b("\n"+n),
r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="options">'),r.b("\n"+n
),r.b('    <a href="/users/'),r.b(r.v(r.f("id",e,t,0))),r.b('/toggle_follow" class="follow '
),r.b(r.v(r.f("activeClass",e,t,0))),r.b(" p p_not_owner "),r.b(r.v(r.f("onOffState"
,e,t,0))),r.b(' skip" title="Follow this DJ">'),r.b(r.v(r.f("followButtonText",e,
t,0))),r.b("</a>"),r.b("\n"+n),r.b("\n"+n),r.b("    <!-- hide button goes here -->"
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="profile-info">'
),r.b("\n"+n),r.b('      <a href="'),r.b(r.v(r.f("profile_path",e,t,0))),r.b('" class="propername" rel="external">'
),r.b(r.v(r.f("login",e,t,0))),r.b("</a> "),r.b("\n"+n),r.b("      "),r.s(r.f("mixes_count"
,e,t,1),e,t,0,539,631,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<span class="gray medium">'
),n.b(n.v(n.f("mixes_count",e,t,0))),n.b(" mix"),n.s(n.f("multiple_mixes",e,t,1),
e,t,0,603,605,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("es")}),e.pop()),n.b("</span>"
)}),e.pop()),r.b("\n"+n),r.b('    <p class="friends">'),r.b("\n"+n),r.b("      ")
,r.b(r.v(r.f("full_name",e,t,0))),r.b("\n"+n),r.b("    </p>"),r.b("\n"+n),r.b("  </div>"
),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define
("collections/suggested_users",["collections/_base_collection","models/modules/flexible_store"
,"models/suggested_user","models/modules/backbone_client_storage","lib/jsonh.jquery"
],function(e,t,n,r,i){if(typeof App.Collections.SuggestedUsers!="undefined")return App
.Collections.SuggestedUsers;var s=e.extend({model:n,url:"/suggested_friends.jsonh"
,parse:function(e,t){return e.suggested_friends},follow:function(e){this.callBackend
(e,"follow")},hide:function(e){this.callBackend(e,"hide")},callBackend:function(e
,t){this.remove(this.get(e)),i.now_with_context("/suggested_friends/"+e+"/"+t,{ids_to_exclude
:_.map(this.models,function(e){return e.id})},this,function(e){e.next_friend&&this
.loadOne(e.next_friend),t==="follow"&&this.trigger("suggested_users:follow"),this
.models.length===0&&this.trigger("empty")})}});return App.Collections.SuggestedUsers=new 
s({}),App.Collections.SuggestedUsers}),define("views/suggested_user_view",["global_trax"
,"views/trax_view","models/user","lib/_template_helpers","hgn!templates/suggested_users/suggested_user"
,"collections/suggested_users"],function(e,t,n,r,i,s){var o=t.extend({tagName:"div"
,className:"suggested-user clear",initialize:function(e){this.$el=$(this.el),this
.suggestedUser=e.suggestedUser,this.user=new n(this.suggestedUser.get("suggested_user"
)),_.bindAll(this,"onChange"),this.suggestedUser.bind("change",this.onChange),this
.user.bind("change",this.onChange)},events:{"click .follow":"follow"},render:function(
){var e=new r({id:this.user.id,email:this.user.get("email"),login:this.user.get("login"
),full_name:"",location:"",mixes_count:this.user.get("public_mixes_count"),multiple_mixes
:this.user.get("public_mixes_count")>1,profile_path:this.user.get("web_path"),avatar_path
:this.user.get("avatar_urls").sq56,twitter_username:this.user.get("twitter_username"
),lastfm_username:this.user.get("lastfm_username"),gp_friend:this.suggestedUser.get
("gp_friend"),fb_friend:this.suggestedUser.get("fb_friend"),avatar_urls:this.user
.get("avatar_urls")});return this.user.has("first_name")&&this.user.has("last_name"
)&&(e.full_name=this.user.get("first_name")+" "+this.user.get("last_name")),this.
user.has("neighborhood")&&(e.location+=this.user.get("neighborhood")),this.user.has
("city")&&(e.location.length>0&&(e.location+=", "),e.location+=this.user.get("city"
)),e.onOffState=this.user.get("fav_owner")?"off":"on",e.followButtonText=e.isFollowing?"Unfollow"
:"Follow",this.$el.html(i(e)),this},follow:function(){return $(this.el).slideUp()
,this.$(".user_about").fadeOut(),e.overlay_animation("follow"),s.follow(this.suggestedUser
.id),!1},onChange:function(e,t){}});return o}),define("hgn!templates/news_feed/_friends_finder"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b("<div>"),r.b("\n"+n
),r.b(r.rp("header_partial",e,t,"  ")),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b('<hr style="margin-top: -13px;" />'
),r.b("\n"+n),r.b("\n"+n),r.b('<div class="friends_container">'),r.b("\n"+n),r.b('  <div class="suggested_people">'
),r.b("\n"+n),r.b('    <p class="blank_state">'),r.b("\n"+n),r.b("      We couldn't find any more of your friends right now. <br />"
),r.b("\n"+n),r.b("      Please try another service."),r.b("\n"+n),r.b("    </p>"
),r.b("\n"+n),r.b("\n"+n),r.b('    <p class="error_state">'),r.b("\n"+n),r.b("      There is something wrong with your connection. <br />"
),r.b("\n"+n),r.b("      Please try connecting your account again."),r.b("\n"+n),
r.b("    </p>"),r.b("\n"+n),r.b('    <img src="/assets/spinner/spinner-large.gif" class="suggested_people_spinner" alt="loading">'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"),r.fl()},"",e,{});return n
.template=t,n}),define("views/base_friends_finder_view",["views/trax_view","collections/suggested_social_users"
,"views/suggested_user_view","hgn!templates/news_feed/_friends_finder"],function(
e,t,n,r){var i=e.extend({events:{"click .show_services":"onShowServices"},initialize
:function(e){_.bindAll(this,"renderSuggestedUser","onCurrentUserSet","onShowServices"
,"onDoneLoading","onNotResponding"),this.parent=e.parent,this.partner=e.partner,this
.suggestedSocialUsers=new t(this.partner),this.suggestedUserViews=[],this.whenUserReadyOrChanged
(this.onCurrentUserSet),this.init()},startLoading:function(){this.suggestedSocialUsers
.reset(),this.listenTo(this.suggestedSocialUsers,"add",this.renderSuggestedUser),
this.listenTo(this.suggestedSocialUsers,"suggested_friends:done_loading",this.onDoneLoading
),this.listenTo(this.suggestedSocialUsers,"suggested_friends:not_responding",this
.onNotResponding),this.suggestedSocialUsers.loadFriends(this.partner)},render:function(
){$(".service_options").animate({"margin-top":0}),this.$el.html(r({},{header_partial
:this.headerPartial.template}))},renderSuggestedUser:function(e){var t=new n({suggestedUser
:e});this.suggestedUserViews[e.id]=t,this.$el.find(".suggested_people").prepend(t
.render().el)},onCurrentUserSet:function(e){e.hasConnected(this.partner)&&this.startLoading
(),this.render()},onDoneLoading:function(){this.$el.find(".suggested_people_spinner"
).hide(),this.hasSuggestions()||this.$el.find(".blank_state").show()},onNotResponding
:function(){this.$el.find(".suggested_people_spinner").hide(),this.hasSuggestions
()||this.$el.find(".error_state").show()},hasSuggestions:function(){return this.suggestedUserViews
.length>0},onShowServices:function(e){e.preventDefault(),this.parent.render(),this
.close()}});return i}),define("hgn!templates/news_feed/_facebook_header",["hogan"
],function(e){function n(){return t.render.apply(t,arguments)}var t=new e.Template
(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="find_friends_line facebook-line" data-partner="facebook">'
),r.b("\n"+n),r.b('  <span class="i-facebook icon suggested_facebook"></span>'),r
.b("\n"+n),r.b('  <span class="find_friends_text">'),r.b("\n"+n),r.b('    <h3 style="font-size:20px;">Facebook Friends</h3>'
),r.b("\n"+n),r.b("  </span>"),r.b("\n"+n),r.b('  <div class="clearfix"></div>'),
r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b("<p>Facebook friends you are not yet following on 8tracks.</p>"
),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("views/facebook_friends_finder_view"
,["views/base_friends_finder_view","hgn!templates/news_feed/_facebook_header"],function(
e,t){var n=e.extend({init:function(){this.headerPartial=t}});return n}),define("hgn!templates/news_feed/_google_plus_header"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="find_friends_line google_plus-line" data-partner="google_plus">'
),r.b("\n"+n),r.b('  <span class="i-google-plus icon suggested_google_plus"></span>'
),r.b("\n"+n),r.b('  <span class="find_friends_text">'),r.b("\n"+n),r.b('    <h3 style="font-size:20px;">Google+ Friends</h3>'
),r.b("\n"+n),r.b("  </span>"),r.b("\n"+n),r.b('  <div class="clearfix"></div>'),
r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b("<p>Google+ friends you are not yet following on 8tracks.</p>"
),r.fl()},"",e,{});return n.template=t,n}),define("views/google_plus_friends_finder_view"
,["views/base_friends_finder_view","hgn!templates/news_feed/_google_plus_header"]
,function(e,t){var n=e.extend({init:function(){this.headerPartial=t}});return n})
,define("hgn!templates/news_feed/find_your_friends",["hogan"],function(e){function n
(){return t.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=
this;return r.b(n=n||""),r.b("<h2>Find friends</h2>"),r.b("\n"+n),r.b("\n"+n),r.b
("Connect your other accounts to find friends using 8tracks."),r.b("\n"+n),r.b("\n"+
n),r.b("<hr />"),r.b("\n"+n),r.b("\n"+n),r.b('<div class="service_options">'),r.b
("\n"+n),r.b('  <div class="find_friends_line facebook-line" data-partner="facebook">'
),r.b("\n"+n),r.b('    <span class="i-facebook icon suggested_facebook"></span>')
,r.b("\n"+n),r.b('    <span class="find_friends_text">'),r.b("\n"+n),r.b('      <a href="#" class="find_friends"><strong>Facebook Friends</strong></a>'
),r.b("\n"+n),r.b("    </span>"),r.b("\n"+n),r.b('    <div class="clearfix"></div>'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div id="google_plus_find_friends" class="find_friends_line google_plus-line" data-partner="google_plus">'
),r.b("\n"+n),r.b('    <span class="i-google-plus icon suggested_google_plus"></span>'
),r.b("\n"+n),r.b('    <span class="find_friends_text">'),r.b("\n"+n),r.b('      <a href="#" class="find_friends"><strong>Google+ Circles</strong></a>'
),r.b("\n"+n),r.b("    </span>"),r.b("\n"+n),r.b('    <div class="clearfix"></div>'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r
.b("\n"+n),r.b('<div class="friends_container"> '),r.b("\n"+n),r.b("</div>"),r.b("\n"
),r.fl()},"",e,{});return n.template=t,n}),define("views/find_friends_view",["views/trax_view"
,"views/facebook_friends_finder_view","views/google_plus_friends_finder_view","hgn!templates/news_feed/find_your_friends"
,"lib/sessions","views/google_plus_view"],function(e,t,n,r,i,s){var o=e.extend({id
:"find_friends",tagName:"div",events:{"click .find_friends_line":"findFriendsForService"
},friend_finders:{facebook:t,google_plus:n},initialize:function(){_.bindAll(this,"onCurrentUserSet"
),this.childViews=[],this.whenUserReadyOrChanged(this.onCurrentUserSet),this.googlePlusView=new 
s,this.childViews.push(this.googlePlusView)},render:function(){return this.$el.html
(r()),this.delegateEvents(),this},show:function(){$.facebox(this.el),this.googlePlusView
.asyncGooglePlus("google_plus_find_friends")},findFriendsForService:function(e){var t=
$(e.currentTarget),n=t.data("partner");this.currentPartner=n,this.promptLogin(n)}
,showPartnerView:function(e){var t=this.friend_finders[e],n=e+"FriendsFinderView"
,r=this[n],i=this[n]=new t({parent:this,partner:e});r||this.childViews.push(i),this
.$el.html(i.$el),this.undelegateEvents()},promptLogin:function(e){this.currentPartner=
e,e=="facebook"&&window.open("/auth/facebook","facebook","height=362,width=640")}
,onCurrentUserSet:function(e){this.user=e;var t=this;this.listenTo(i,"jsonh:current_user:set_from_backend"
,function(e){t.showPartnerView(t.currentPartner||"google_plus"),t.currentPartner=
null,t.stopListening(i)})},onClose:function(){this.$el.html("")}});return o}),define
("hgn!templates/shared/_auth_nav_logged_in",["hogan"],function(e){function n(){return t
.render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r
.b(n=n||""),r.b('<div id="logged_in_topnav">'),r.b("\n"+n),r.b('  <div id="topnav_element">'
),r.b("\n"+n),r.b('    <a href="'),r.s(r.f("web_path",e,t,1),e,t,0,82,94,"{{ }}")&&
(r.rs(e,t,function(e,t,n){n.b(n.v(n.f("web_path",e,t,0)))}),e.pop()),r.s(r.f("web_path"
,e,t,1),e,t,1,0,0,"")||r.b(r.v(r.f("path",e,t,0))),r.b('" id="profile_link" rel="user">'
),r.b("\n"+n),r.b('      <img alt="'),r.b(r.v(r.f("login",e,t,0))),r.b('" class="avatar sq56" src="'
),r.s(r.f("avatar_url",e,t,1),e,t,0,240,255,"{{ }}")&&(r.rs(e,t,function(e,t,n){n
.b("sq56, w=56&h=56")}),e.pop()),r.b('" title="Go to '),r.b(r.v(r.f("login",e,t,0
))),r.b("'s profile\" />"),r.b("\n"+n),r.b('      <span class="i-triangle-down"></span>'
),r.b("\n"+n),r.b("    </a>"),r.b("\n"+n),r.b('    <span id="unread_notifications" class="unread_notifications notifications_counter '
),r.s(r.d("unread_notifications_count.nonzero",e,t,1),e,t,0,487,493,"{{ }}")&&(r.
rs(e,t,function(e,t,n){n.b("active")}),e.pop()),r.b('">'),r.b(r.v(r.f("unread_notifications_count"
,e,t,0))),r.b("</span>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b('  <div id="logged_in_dropdown">'
),r.b("\n"+n),r.b('    <a class="menu-item profile_link" href="'),r.s(r.f("web_path"
,e,t,1),e,t,0,671,683,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b(n.v(n.f("web_path",
e,t,0)))}),e.pop()),r.s(r.f("web_path",e,t,1),e,t,1,0,0,"")||r.b(r.v(r.f("path",e
,t,0))),r.b('">Your profile</a>'),r.b("\n"+n),r.b("\n"+n),r.b('    <div class="')
,r.s(r.f("has_recent_mixes",e,t,1),e,t,0,787,797,"{{ }}")&&(r.rs(e,t,function(e,t
,n){n.b("create-mix")}),e.pop()),r.b('">'),r.b("\n"+n),r.b('      <a class="menu-item create_mix_link" href="/create_mix">Create playlist</a>'
),r.b("\n"+n),r.b("\n"+n),r.s(r.f("has_recent_mixes",e,t,1),e,t,0,931,1421,"{{ }}"
)&&(r.rs(e,t,function(e,t,r){r.b('      <div class="recent-mixes">'),r.b("\n"+n),
r.b('        <a class="new-playlist item" href="/create_mix">New playlist</a>'),r
.b("\n"+n),r.b("        "),r.s(r.f("spinner",e,t,1),e,t,0,1058,1070,"{{ }}")&&(r.
rs(e,t,function(e,t,n){n.b("recent-mixes")}),e.pop()),r.b("\n"+n),r.b('        <div class="recent-mixes-body">'
),r.b("\n"+n),r.b('          <div class="continue-editing item">Continue editing...</div>'
),r.b("\n"+n),r.b('          <div class="recent-mixes-list">'),r.b("\n"+n),r.b(r.
rp("recent_mixes",e,t,"            ")),r.b("          </div>"),r.b("\n"+n),r.b('          <!--div class="item"><a href="'
),r.b(r.v(r.f("web_path",e,t,0))),r.b('" class="view-all item">View all &rarr;</a></div-->'
),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("      </div>"),r.b("\n")}),e
.pop()),r.b("    </div>"),r.b("\n"+n),r.b("    "),r.b("\n"+n),r.s(r.f("has_recent_mixes"
,e,t,1),e,t,0,1484,1624,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('      <a class="menu-item" href="'
),n.s(n.f("web_path",e,t,1),e,t,0,1531,1549,"{{ }}")&&(n.rs(e,t,function(e,t,n){n
.b("/users"),n.b(n.v(n.f("web_path",e,t,0)))}),e.pop()),n.s(n.f("web_path",e,t,1)
,e,t,1,0,0,"")||n.b(n.v(n.f("path",e,t,0))),n.b('/comments">Comments</a>'),n.b("\n"
)}),e.pop()),r.b("\n"+n),r.b('    <a class="menu-item unread_notifications_link" href="/notifications">'
),r.b("\n"+n),r.b('      <span class="inverted_counter unread_notifications">'),r
.b(r.v(r.f("unread_notifications_count",e,t,0))),r.b("</span>"),r.b("\n"+n),r.b("      Notifications"
),r.b("\n"+n),r.b("    </a>"),r.b("\n"+n),r.b("\n"+n),r.b('    <a class="menu-item discourse_notifications" href="http://forums.8tracks.com/" target="_blank" rel="external">'
),r.b("\n"+n),r.b('      <span class="inverted_counter notifications_counter">'),
r.b(r.v(r.f("discourse_notifications_count",e,t,0))),r.b("</span>"),r.b("\n"+n),r
.b("      Forums"),r.b("\n"+n),r.b("    </a>"),r.b("\n"+n),r.b("\n"+n),r.b('    <a class="menu-item settings_link" href="'
),r.s(r.f("web_path",e,t,1),e,t,0,2143,2161,"{{ }}")&&(r.rs(e,t,function(e,t,n){n
.b("/users"),n.b(n.v(n.f("web_path",e,t,0)))}),e.pop()),r.s(r.f("web_path",e,t,1)
,e,t,1,0,0,"")||(r.b("/users"),r.b(r.v(r.f("path",e,t,0)))),r.b('/edit">Settings</a>'
),r.b("\n"+n),r.b("\n"+n),r.b("    "),r.s(r.f("admin",e,t,1),e,t,0,2249,2353,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b('<a class="menu-item" href="#" onclick="App.views.appView.loadOnboarding(); return false;">Onboarding</a>'
)}),e.pop()),r.b("\n"+n),r.b("\n"+n),r.b('    <a class="menu-item logout_link" href="/logout" id="logout_link">Log out</a>'
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b('<a href="#" class="hidden-xl hidden-lg hidden-md nav_item show_footer bullets" id="menu_link"><span class="bullet">•••</span></a>'
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+
n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("\n"+
n),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/shared/_auth_nav_logged_out"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<a href="'),r.b(r.
v(r.f("ssl_host_url",e,t,0))),r.b('/login" class="hidden-xs login nav_item">Log in</a>'
),r.b("\n"+n),r.b('<a href="'),r.b(r.v(r.f("ssl_host_url",e,t,0))),r.b('/signup" class="hidden-xs signup nav_item" id="signup_link">Sign up</a>'
),r.b("\n"+n),r.b('<a href="#" class="hidden-xl hidden-lg hidden-md hidden-sm nav_item bullets show_footer" id="menu_link"><span class="bullet">•••</span></a>'
),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/shared/auth_nav_recent_mixes"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.s(r.f("recent_mixes",
e,t,1),e,t,0,17,256,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('    <a href="'),r.b(
r.v(r.f("url",e,t,0))),r.b('" class="mix">'),r.b("\n"+n),r.b('      <img src="'),
r.b(r.v(r.f("cover_url",e,t,0))),r.b('" height="28" width="28">'),r.b("\n"+n),r.b
('      <span class="title">'),r.b(r.v(r.f("name",e,t,0))),r.b("</span>"),r.b("\n"+
n),r.b('      <span class="detail">'),r.b(r.v(r.f("tracks_count",e,t,0))),r.b(" tracks</span>"
),r.b("\n"+n),r.b('      <div style="clear: both;"></div>'),r.b("\n"+n),r.b("    </a>"
),r.b("\n")}),e.pop()),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/shared/_ttw_header"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="ttw_header" class="clearfix">'
),r.b("\n"+n),r.b('  <div class="container">'),r.b("\n"+n),r.b('    <div class="hidden-xs col-sm-1 col-md-3 col-lg-2 col-xl-2">'
),r.b("\n"+n),r.b('        <a href="#" onclick="hideTtw(); return false;" style="margin: 4px 0px 20px -9px; font-size: 23px;"><span class="i-x"></span></a> '
),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b('    <div class="col-xs-12 col-sm-8 col-md-6 col-lg-8 col-xl-8" id="ttw_message">'
),r.b("\n"+n),r.b("      <h2>Want to own shares in 8tracks?</h2>"),r.b("\n"+n),r.
b("      <p>"),r.b("\n"+n),r.b('        <strong>Check out how you can invest in the future of online radio!<a href="#" class="show_footer" onclick="App.views.authNavView.onFooterToggle(); return false;">*</a></strong>'
),r.b("\n"+n),r.b("      </p>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b('    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2 col-xl-2">'
),r.b("\n"+n),r.b('      <a href="https://www.seedinvest.com/8tracks/series.a?utm_source=8tracks-web&utm_medium=banner&utm_content=live-round&utm_campaign=live-round-prompt" id="ttw_button" target="_blank">'
),r.b("\n"+n),r.b('        <!--span class="i-logo"></span--> '),r.b("\n"+n),r.b("        FIND OUT MORE &rarr;"
),r.b("\n"+n),r.b("      </a>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b('    <div class="col-xs-1 hidden-sm hidden-md hidden-lg hidden-xl"></div>'
),r.b("\n"+n),r.b('    <div class="col-xs-12 hidden-sm hidden-md hidden-lg hidden-xl" style="text-align: center; padding: 15px 0 10px 0px;">'
),r.b("\n"+n),r.b('      <a href="#" onclick="hideTtw(); return false;">NO THANKS</a> '
),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+
n),r.b("  <style>"),r.b("\n"+n),r.b("  #ttw_header{"),r.b("\n"+n),r.b("    background: #00735B; /* Old browsers */"
),r.b("\n"+n),r.b("    background: -moz-linear-gradient(90deg,  #00735B 0%, #00B7A0 100%); /* FF3.6+ */"
),r.b("\n"+n),r.b("    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%,#00735B), color-stop(100%,#00B7A0)); /* Chrome,Safari4+ */"
),r.b("\n"+n),r.b("    background: -webkit-linear-gradient(90deg,  #00735B 0%,#00B7A0 100%); /* Chrome10+,Safari5.1+ */"
),r.b("\n"+n),r.b("    background: -o-linear-gradient(90deg,  #00735B 0%,#00B7A0 100%); /* Opera 11.10+ */"
),r.b("\n"+n),r.b("    background: -ms-linear-gradient(90deg,  #00735B 0%,#00B7A0 100%); /* IE10+ */"
),r.b("\n"+n),r.b("    background: linear-gradient(90deg,  #00735B 0%,#00B7A0 100%); /* W3C */"
),r.b("\n"+n),r.b("    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00735B', endColorstr='#00B7A0',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */"
),r.b("\n"+n),r.b("    color: #fff; "),r.b("\n"+n),r.b("    padding: 30px 0 7px;"
),r.b("\n"+n),r.b("  }"),r.b("\n"+n),r.b("\n"+n),r.b("  #ttw_header a{"),r.b("\n"+
n),r.b("    color: #fff;"),r.b("\n"+n),r.b("  }"),r.b("\n"+n),r.b("  "),r.b("\n"+
n),r.b("  #ttw_header a:hover{"),r.b("\n"+n),r.b("    color: #eee;"),r.b("\n"+n),
r.b("    text-decoration: none;"),r.b("\n"+n),r.b("  }"),r.b("\n"+n),r.b("\n"+n),
r.b("  #ttw_message{"),r.b("\n"+n),r.b("    margin-top: -15px;"),r.b("\n"+n),r.b("    font-size: 15px;"
),r.b("\n"+n),r.b("    text-align: center;"),r.b("\n"+n),r.b("  }"),r.b("\n"+n),r
.b("\n"+n),r.b("  #ttw_message h2{"),r.b("\n"+n),r.b("    font-size: 28px;"),r.b("\n"+
n),r.b("    margin-bottom: 0;"),r.b("\n"+n),r.b("  }"),r.b("\n"+n),r.b("\n"+n),r.
b("\n"+n),r.b("  #ttw_button{"),r.b("\n"+n),r.b("    display: block;"),r.b("\n"+n
),r.b("    float: right;"),r.b("\n"+n),r.b("    width: auto;"),r.b("\n"+n),r.b("    text-align: center;"
),r.b("\n"+n),r.b("    border-radius: 5px;"),r.b("\n"+n),r.b("    border: 2px solid #fff;"
),r.b("\n"+n),r.b("    padding: 15px 10px;"),r.b("\n"+n),r.b("    font-weight: bold;"
),r.b("\n"+n),r.b("    color: #fff;"),r.b("\n"+n),r.b("    background: rgba(255,255,255,0.2);"
),r.b("\n"+n),r.b("    margin-top: -10px;"),r.b("\n"+n),r.b("    -webkit-transition: background-color 0.1s linear;"
),r.b("\n"+n),r.b("    -moz-transition: background-color 0.1s linear;"),r.b("\n"+
n),r.b("    transition: background-color 0.1s linear;"),r.b("\n"+n),r.b("    text-indent: 5px;"
),r.b("\n"+n),r.b("    border-radius: 30px;"),r.b("\n"+n),r.b("    font-size: 13px;"
),r.b("\n"+n),r.b("  }"),r.b("\n"+n),r.b("\n"+n),r.b("  #ttw_button .i-logo{"),r.
b("\n"+n),r.b("    font-size: 20px;"),r.b("\n"+n),r.b("    margin-right: 10px;"),
r.b("\n"+n),r.b("    display: inline-block;"),r.b("\n"+n),r.b("    margin-bottom: 6px;"
),r.b("\n"+n),r.b("    position: relative;"),r.b("\n"+n),r.b("    top: 4px;"),r.b
("\n"+n),r.b("  }"),r.b("\n"+n),r.b("\n"+n),r.b("  #ttw_button:hover{"),r.b("\n"+
n),r.b("    background-color: rgba(255,255,255,0.4);"),r.b("\n"+n),r.b("    text-decoration: none;"
),r.b("\n"+n),r.b("  }"),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("  </style>"),r.
b("\n"+n),r.b("\n"+n),r.b("  <style>"),r.b("\n"+n),r.b("  @media(max-width: 640px) {"
),r.b("\n"+n),r.b("    #ttw_message{"),r.b("\n"+n),r.b("      padding-bottom: 10px;"
),r.b("\n"+n),r.b("    }"),r.b("\n"+n),r.b("\n"+n),r.b("    #ttw_button{"),r.b("\n"+
n),r.b("      width: 200px;"),r.b("\n"+n),r.b("      float: none;"),r.b("\n"+n),r
.b("      margin: 0 auto;"),r.b("\n"+n),r.b("    }"),r.b("\n"+n),r.b("  }"),r.b("\n"+
n),r.b("  </style>"),r.b("\n"+n),r.b("\n"+n),r.b("</div> "),r.fl()},"",e,{});return n
.template=t,n}),define("jquery.hoverDelegate",[],function(){return $.fn.hoverDelegate=
function(e,t,n,r,i){_.isUndefined(r)&&(r=100),_.isUndefined(i)&&(i=100),this.delegate
(e,"mouseover mouseout",function(e){var s=(e.type=="mouseover"?e.fromElement:e.toElement
)||e.relatedTarget;while(s&&s!=this)try{s=s.parentNode}catch(e){s=this}if(s==this
)return!1;var o=this;typeof o.hoverDelegateState=="undefined"&&(o.hoverDelegateState=0
,o.hoverDelegateOver=_.bind(t,this),o.hoverDelegateOut=_.bind(n,this)),e.type=="mouseover"?
o.hoverDelegateState===0?o.hoverDelegateTimer=setTimeout(function(){o.hoverDelegateState=1
,o.hoverDelegateOver()},r):clearTimeout(o.hoverDelegateTimer):o.hoverDelegateState===1?
o.hoverDelegateTimer=setTimeout(function(){o.hoverDelegateState=0,o.hoverDelegateOut
()},i):clearTimeout(o.hoverDelegateTimer)})},$}),define("views/auth_nav_view",["global_trax"
,"views/trax_view","lib/sessions","lib/events","views/find_friends_view","hgn!templates/shared/_auth_nav_logged_in"
,"hgn!templates/shared/_auth_nav_logged_out","hgn!templates/shared/auth_nav_recent_mixes"
,"hgn!templates/shared/_ttw_header","lib/_template_helpers","jquery.hoverDelegate"
],function(e,t,n,r,i,s,o,u,a,f){var l=t.extend({el:"#thin_header",initialize:function(
e){this.loggedInTemplate=s,this.loggedOutTemplate=o,_.bindAll(this,"onCurrentUserSet"
,"onCurrentUserUnset","renderRecentMixes","onFooterToggle"),this.whenUserReadyOrChanged
(this.onCurrentUserSet),n.bind("current_user:unset",this.onCurrentUserUnset),this
.$navlinks=this.$(".navlinks"),this.setupHover(),App.currentPage!="browse"&&$(".sticky"
).Stickyfill()},events:{"click a:not(.show_footer)":"hideFooter","click a.login":"onLoginClick"
,"click a.signup":"onSignupClick","click .show_footer":"onFooterToggle","click #profile_link"
:"onProfileLinkClick","click .create_mix_link":"onCreateMixClick","click .navlinks a"
:"onMixNavigationClick","click #logout_link":"onLogoutClick","click .find_friends_link"
:"onFindFriendsClick","click #discourse_notifications":"onDiscourseClick","click .unread_notifications_link"
:"onUnreadNotificationsClick"},onLoginClick:function(){if(App.currentPage!=="login"&&
App.currentPage!=="signup")return e.showLoginView(),!1},onSignupClick:function(){
if(App.currentPage!=="login"&&App.currentPage!=="signup")return e.showSignupView(
),!1},hideFooter:function(){return $("#footer").slideUp(),e.hide_overlay(),!0},onFooterToggle
:function(){return $("#footer").is(":visible")?e.hide_overlay():(e.show_overlay()
,$("#footer").slideDown()),!1},onFindFriendsClick:function(){return _.isUndefined
(App.views.findFriendsView)&&(App.views.findFriendsView=new i({}),r.clickFindFriends
()),App.views.findFriendsView.render().show(),!1},render:function(){var t=this.$("#auth_nav"
);if(n.logged_in()){var r=new f(e.currentUser.toJSON());t.html(this.loggedInTemplate
(r)),this.renderRecentMixes(),t.addClass("logged_in"),e.currentUser.get("admin")&&
this.$(".p_admin").show()}else{var r={ssl_host_url:e.sslHostUrl()};t.html(this.loggedOutTemplate
(r)),t.removeClass("logged_in")}return this},renderRecentMixes:function(){this.$("#recent-mixes-spinner span"
).hide(),this.$(".recent-mixes-list").html(u({recent_mixes:e.currentUser.get("recent_mixes"
)}))},onMixNavigationClick:function(e){return $(e.currentTarget).addClass("active"
).siblings().removeClass("active default"),!0},onCreateMixClick:function(){if(!!this
.createMixClicked)return!1;this.createMixClicked=!0},onCurrentUserSet:function(){
if(n.loggedIn()){if(this.$("#logged_in_topnav").length===0)this.render();else{var t=
e.currentUser.get("discourse_notifications_count"),r=this.$(".discourse_notifications .notifications_counter"
);r.text(t),t>0?r.show():r.hide();var i=e.currentUser.get("unread_notifications_count"
),s=this.$(".unread_notifications");i>99?(s.text("99+"),s.show()):i>0?(s.text(i),
s.show()):s.hide()}$("#logged_out_header").remove(),App.currentPage=="home"&&this
.renderTtwHeader()}this.setupHover()},onLogoutClick:function(){return n.unsetCurrentUser
(),!1},onCurrentUserUnset:function(){this.render(),this.$("p_logged_out").show(),
this.$("p_logged_in").hide()},setupHover:function(){$(this.el).hoverDelegate("#logged_in_topnav"
,function(){$(this).addClass("active")},function(){var e=this;_.delay(function(){
$(e).removeClass("active")})},0,500),$(this.el).hoverDelegate(".create-mix",_.bind
(function(){this.$(".create-mix").addClass("active"),this.updateRecentMixes()},this
),function(){$(this).removeClass("active")},0,500)},onProfileLinkClick:function(e
){return $("#logged_in_topnav").hasClass("active")?!0:!1},updateRecentMixes:function(
){Math.floor((Date.now()-Date.parse(App.Trax.currentUser.get("last_logged_in")))/1e3
)>120&&(this.$("#recent-mixes-spinner span").show(),App.Sessions.tryToSetCurrentUserFromBackend
(this.renderRecentMixes))},onDiscourseClick:function(t){$(t.currentTarget).removeClass
("active"),e.currentUser.set("discourse_notifications_count",0),e.currentUser.localSave
()},onUnreadNotificationsClick:function(){this.$(".unread_notifications").text("0"
).hide(),e.currentUser.set("unread_notifications_count",0),e.currentUser.localSave
()},renderTtwHeader:function(){if($("#ttw_header").length>0||App.Trax.regionallyBlocked
()||cookie.get("hidecrowdfund"))return!1;$("#interstitial_container").prepend(a()
),window.hideTtw=function(){return $("#ttw_header").hide(),cookie.set("hidecrowdfund"
,!0),cookie.remove("hidettw"),!1}}});return l}),define("hgn!templates/shared/autocomplete"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.s(r.f("results",e,t,1
),e,t,0,12,354,"{{ }}")&&(r.rs(e,t,function(e,t,r){r.b('  <li class="result '),r.
b(r.v(r.f("type",e,t,0))),r.b('" data-href="/explore/'),r.s(r.f("to_url_param",e,
t,1),e,t,0,80,84,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("term")}),e.pop()),r.b('" data-tag="'
),r.b(r.v(r.f("term",e,t,0))),r.b('">'),r.b("\n"+n),r.b("    "),r.s(r.f("selected_tags"
,e,t,1),e,t,0,146,201,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b('<span class="tag">'
),n.b(n.v(n.d(".",e,t,0))),n.b("</span>&nbsp;&nbsp;+&nbsp;&nbsp;")}),e.pop()),r.b
(" "),r.b("\n"+n),r.b('    <span class="tag">'),r.b(r.v(r.f("term",e,t,0))),r.b("</span>"
),r.b("\n"+n),r.b("    "),r.s(r.f("count",e,t,1),e,t,0,273,335,"{{ }}")&&(r.rs(e,
t,function(e,t,n){n.b('<span class="count">'),n.b(n.v(n.d("count.to_human_number"
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
("character",t),n.moveStart("character",t),n.select()}});return i}),define("views/safe_browse_view"
,["global_trax","views/trax_view"],function(e,t){return t.extend({el:"#safe_browse_container"
,web_safe_browse:!1,events:{"click #safe_browse":"toggleMode"},initialize:function(
e){this.$el=$(this.el),this.whenUserReadyOrChanged(_.bind(this.updateView,this)),
this.updateView()},webSafe:function(){if(e.currentUser)return e.currentUser.get("web_safe_browse"
);if(!_.isNull(cookie.get("web_safe_browse")))return cookie.get("web_safe_browse"
)},updateView:function(){this.webSafe()?this.$el.addClass("enabled").removeClass("disabled"
):this.$el.addClass("disabled").removeClass("enabled")},toggleMode:function(e){return $
(e.currentTarget).rel=="external"?!0:(this.setSetting(this.$el.hasClass("disabled"
)),this.updateView(),!1)},setSetting:function(t){e.currentUser?e.currentUser.save
({web_safe_browse:t}):cookie.set("web_safe_browse",t)}})}),define("views/ads_view"
,["global_trax","views/trax_view"],function(e,t){return t.extend({initialize:function(
){_.bindAll(this,"dfpLoaded","setRefreshTimer","onSlotRendered"),this.nextAdSize=0
,this.refreshable=!1,this.refresh_minimum_ms=2e4,googletag.cmd.push(this.dfpLoaded
);var e=document.createElement("script");e.setAttribute("src","//www.googletagservices.com/tag/js/gpt.js"
),document.getElementsByTagName("head").item(0).appendChild(e);var t=document.getElementsByClassName
("afs_ads"),n=t[t.length-1];if(!n||n.innerHTML.length==0||n.clientHeight===0){this
.adblock=!0;return}},sizeMap:{box:[[300,250],[300,600]],smallbox:[[300,250],[475,330
]],boxcard:[[300,250],[300,600],[475,330]],banner:[[728,90],[970,250],[970,90],[1
,1]],overlay:[[900,600]]},dfpLoaded:function(){this.wide_mapping=googletag.sizeMapping
().addSize([970,90],[970,250],[728,90],[1,1]).build(),this.narrow_mapping=googletag
.sizeMapping().addSize([300,250],[300,600]).build(),this.adSlots={},googletag.pubads
().addEventListener("slotRenderEnded",this.onSlotRendered),googletag.pubads().enableSingleRequest
(),googletag.pubads().disableInitialLoad(),googletag.pubads().collapseEmptyDivs(!0
),googletag.enableServices(),this.setRefreshTimer(),PAGE.skipAds||this.fillEmptyAds
()},fillEmptyAds:function(e){if(!googletag.apiReady)return;var t=$(".advertisement"
).removeClass("advertisement"),n=[];for(var r=0;r<t.length;r++)n.push(this.createSlot
($(t[r])));this.setTargeting(),e||googletag.pubads().refresh(n)},createSlot:function(
e){var t=e.attr("id"),n=e.data("size"),r=e.data("slot-name");if(this.adSlots[t])return;
var i=googletag.defineSlot("/3322514/"+r,this.sizeMap[n]||[300,250],t);return i&&
(this.adSlots[t]=i.addService(googletag.pubads())),googletag.display(t),this.adSlots
[t]},refreshExistingAds:function(){var e=[];for(slot_name in this.adSlots)if(document
.getElementById(slot_name)){e.push(this.adSlots[slot_name]),this.adSlots[slot_name
].setTargeting();for(key in _.keys(this.targeting))this.adSlots[slot_name].setTargeting
(key,this.targeting[key])}googletag.pubads().refresh(e)},onSlotRendered:function(
e){e.slot==this.adSlots["headerboard"]?this.renderHeaderboard(e):e.slot==this.adSlots
["Superheader"]?this.renderSuperheader(e):e.slot==this.adSlots["Mixpage_Sidebar"]?
this.renderSidebar(e):e.slot==this.adSlots["web_overlay"]?this.renderOverlay(e):e
.slot.getAdUnitPath().match(/Profile_Box$/)?this.renderProfileBox():e.size[1]==600?
$("#"+e.slot.getSlotElementId()).parent(".card").addClass("double_card"):$("#"+e.
slot.getSlotElementId()).parent(".card").addClass("card_"+e.size[0])},renderHeaderboard
:function(e){e.isEmpty?this.showMasthead():$("#headerboard").addClass("card ad_card wide_card hidden-xs hidden-sm"
)},renderSuperheader:function(e){e.isEmpty?$("#superheader_box").addClass("hidden"
):$("#superheader_box").removeClass("hidden").height("auto")},renderSidebar:function(
e){e.size[0]==475?($(".sidebar").addClass("sidebar_wide"),$("#mix_content").addClass
("content_narrow")):e.size[0]>300&&$("#Mixpage_Sidebar").addClass("card ad_card wide_card"
)},renderOverlay:function(e){if(e.isEmpty){$("#web_overlay_container").remove(),console
.log("ADS: empty_overlay");return}$("#web_overlay_container, #body_overlay").addClass
("visible").fadeIn(),$("#web_overlay_container .close, #body_overlay").click(_.bind
(this.onOverlayClose,this))},onOverlayClose:function(){return $("#web_overlay_container"
).remove(),$("#body_overlay").fadeOut().removeClass("visible"),!1},renderProfileBox
:function(e){e.isEmpty||$("#"+e.slot.getSlotElementId()).parent(".card").removeClass
("hidden")},onFaceboxClose:function(){$("#web_overlay").remove(),$(document).unbind
("close.facebox",this.onFaceboxClose)},refreshSidebarAd:function(e){if(!googletag
.apiReady)return;if(this.refreshable===!0||e===!0)googletag.pubads().refresh([this
.adSlots.Mixpage_Sidebar]),this.setRefreshTimer()},setRefreshTimer:function(e){this
.refreshable=!1,clearTimeout(this.refresh_timer),this.refresh_timer=setTimeout(_.
bind(function(){this.refreshable=!0},this),e?e:this.refresh_minimum_ms)},delayRefresh
:function(e){this.setRefreshTimer(e*1e3)},randomAd:function(e){return this.nextAd
(e)},resetAds:function(){this.nextAdSize=0},nextAd:function(e){var t;e?(unit_name=
e,this.nextAdSize=0):this.nextAdSize==1&&window.innerWidth>1e3?(unit_name="ROS_Banner"
,this.nextAdSize=0):(unit_name="ROS_Box",this.nextAdSize+=1);var n="ad_"+Math.floor
(Math.random()*1e5,0),r=this["ad_"+unit_name].apply(this,[n]);return r},ad_ROS_Box
:function(e){return this.adCard("half_card","boxcard",e,"Web_300x250")},ad_Small_Box
:function(e){return this.adCard("half_card","smallbox",e,"Web_300x250")},ad_ROS_Banner
:function(e){return this.adCard("card wide_card small_card","banner",e,"Web_970x250"
,!0)},ad_320:function(e){return this.adCard("card small_card flush_card","320x50"
,e,"Web_320x50")},ad1x1:function(e){return'<div class="hidden-xs hidden-sm advertisement ad_970x250" id="'+
e+'" data-slot-name="HPTO"></div>'},ad_Profile_Box:function(e){return this.adCard
("half_card hidden","300x250",e,"Profile_Box")},adCard:function(e,t,n,r,i){return'<div><div class="card ad_card '+
e+'">'+'  <div class="advertisement ad_'+t+'" id="'+n+'" data-slot-name="'+r+'" data-size="'+
t+'"></div>'+"</div>"+(i?'<p class="plus_cta"><a href="/plus" target="_blank">Remove ads</a></p>'
:"")+"</div>"},appendSidebarAd:function(){this.adSlots.sidebar_ad_btf||(this.adSlots
.sidebar_ad_btf=googletag.defineSlot("/3322514/Mixpage_Sidebar_BTF",[300,250],"sidebar_ad_btf"
).addService(googletag.pubads()))},setTargeting:function(){this.targeting={env:App
.env,page:this.targetPage(),dj:null,mix_id:null,gender:null,age_group:null,genre:
[],nsfw:"false",first_impression:"false"};if(!cookie.get("lastAction")||(new Date
).getTime()-cookie.get("lastAction")>36e5)this.targeting.first_impression="true";
App.currentPage=="mix"?App.views.mixView?(this.targeting.dj=App.views.mixView.mix
.get("user").login,this.targeting.genre=App.views.mixView.mix.tagList(),this.targeting
.nsfw=App.views.mixView.mix.get("nsfw")?"true":"false",this.targeting.mix_id=App.
views.mixView.mix.id):(this.targeting.dj=PAGE.mix.user.login,this.targeting.genre=
PAGE.mix.tag_list_cache.split(", "),this.targeting.nsfw=PAGE.mix.nsfw?"true":"false"
,this.targeting.mix_id=PAGE.mix.id):App.currentPage=="user"?(App.views.userProfileView?
this.targeting.dj=App.views.userProfileView.user.login:this.targeting.dj=PAGE.user
.login,this.targeting.nsfw=$('.mix[data-nsfw="true"]').length>0?"true":"false"):App
.currentPage=="browse"?(App.views.exploreView?this.targeting.genre=App.views.exploreView
.tags:this.targeting.genre=PAGE.tags,this.targeting.nsfw=_.intersection(this.genre
,this.dirtyWords).length>0?"true":$('.mix[data-nsfw="true"]').length>0?"true":"false"
):App.currentPage=="collection"?this.targeting.nsfw=App.views.collectionEditView.
collection.get("nsfw"):App.currentPage=="track"&&(this.targeting.nsfw=_.contains(
["Sky Ferreira"],$("#track_info .a").text().trim())?"true":"false",this.targeting
.nsfw=="false"&&(this.targeting.nsfw=$('.mix[data-nsfw="true"]').length>0?"true":"false"
)),this.targeting.genre&&this.targeting.genre.length>0&&(this.targeting.genre=this
.cleanValues(this.targeting.genre)),this.targeting.dj&&(this.targeting.dj=this.cleanValue
(this.targeting.dj));if(App.Sessions.loggedIn()){this.targeting.gender=App.Trax.currentUser
.get("gender");if(!this.targeting.age_group&&App.Trax.currentUser.get("dob_year")
){var e=(new Date).getFullYear()-App.Trax.currentUser.get("dob_year")-1,t=[[13,"Under 13"
],[18,"13-17"],[21,"18-20"],[25,"21-24"],[30,"25-29"],[35,"30-34"],[45,"35-44"],[55
,"45-54"],[65,"55-64"],[1e3,"Over 65"]],n=_.find(t,function(t){return e<t[0]});this
.targeting.age_group=n[1]}}typeof window.ParsedLocation.urlParams["test_mode"]!="undefined"&&
(this.targeting.test_mode=window.ParsedLocation.urlParams.test_mode);for(slot in 
this.adSlots){this.adSlots[slot].setTargeting();var r=this;for(key in this.targeting
)this.adSlots[slot].setTargeting(key,this.targeting[key])}},targetPage:function()
{return App.currentPage=="home_logged_in"||App.currentPage=="home_returning"?"home"
:App.currentPage},clearAds:function(){return!0},cleanValue:function(e){return e.replace
(/[\"\'=!+#*~;\^\(\)<>\[\]]+/ig,"")},cleanValues:function(e){return _.collect(e,this
.cleanValue)},showMasthead:function(e){if(!MASTHEAD_ENABLED||window.innerWidth<1e3
)return;var e=e,t,n,r=this.targetPage(),n="980x250";if(r=="browse"){var i=window.
innerWidth<1485?2:3;$(".mix_set .card:nth-of-type("+i+")").after('<div id="browse_video_masthead" style="display: none;"></div>'
),t="#browse_video_masthead"}else{if(r=="mix")return;if(r!="home"&&r!="feed")return;
t="#video_masthead"}try{if(App.views.featuredCollectionView)return;if(App.views.mastheadView
){App.views.mastheadView.close(),e.apply();return}require(["views/preroll_view"],
function(r){App.views.mastheadView=new r({el:t,adUnit:"VideoMasthead",size:"640x360"
,displaySize:"452x250",companionSize:n}),App.views.mastheadView.bind("onAdEmpty",
e),App.views.mastheadView.showAd()})}catch(s){$("#video_masthead").hide()}},showOverlay
:function(){if(window.innerHeight<640||window.innerWidth<900)return!1;var e=$('<div id="web_overlay_container"></div>'
);e.html('<div id="web_overlay" data-slot-name="Web_Overlay" data-size="overlay"></div><a href="#" class="close"><span class="i-x"></span></a>'
),$("body").append(e),this.setTargeting(),this.adSlots.web_overlay||(this.adSlots
.web_overlay=this.createSlot($("#web_overlay"))),googletag.pubads().refresh([this
.adSlots.web_overlay])}})}),define("hgn!templates/layouts/browse",["hogan"],function(
e){function n(){return t.render.apply(t,arguments)}var t=new e.Template(function(
e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="station" class="dark_bg clearfix"></div><!--station/search-->'
),r.b("\n"+n),r.b("\n"+n),r.b('<div id="explore_description" class="clearfix"></div><!--seo text-->'
),r.b("\n"+n),r.b("\n"+n),r.b('<div id="related_artists"></div><!-- filters -->')
,r.b("\n"+n),r.b("  "),r.b("\n"+n),r.b('<div id="explore" class="container"><!-- results -->'
),r.b("\n"+n),r.b('  <div class="browse_header"></div>'),r.b("\n"+n),r.b("\n"+n),
r.b('  <div class="mix_set"></div>'),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="row">'
),r.b("\n"+n),r.b('    <div class="col-md-12">'),r.b("\n"+n),r.b('      <div id="collections">'
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b('      <div id="mixes_paging"></div>'
),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"
),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("hgn!templates/layouts/_home_abc_test"
,["hogan"],function(e){function n(){return t.render.apply(t,arguments)}var t=new 
e.Template(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="about_8tracks_splash" class="dark-bg">'
),r.b("\n"+n),r.b('  <div class="container">'),r.b("\n"+n),r.b('    <div class="row">'
),r.b("\n"+n),r.b('      <div class="col-md-1 col-sm-2 col-lg-3 col-xl-2 hidden-xs">&nbsp;</div>'
),r.b("\n"+n),r.b('      <div class="col-md-10 col-sm-8 col-lg-6 col-xl-8">'),r.b
("\n"+n),r.b("\n"+n),r.b('        <div class="text">'),r.b("\n"+n),r.b('          <p><span class="i-logotype"></span></p>'
),r.b("\n"+n),r.b('          <div class="splash_copy desktop">'),r.b("\n"+n),r.b('            <div class="desktop">'
),r.b("\n"+n),r.b("              "),r.s(r.f("splash_text",e,t,1),e,t,0,417,434,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b(n.t(n.f("splash_text",e,t,0)))}),e.pop()),r.b("\n"+
n),r.b("            </div>"),r.b("\n"+n),r.b('            <div class="mobile">'),
r.b("\n"+n),r.b("              <h2>"),r.b("\n"+n),r.b("                8tracks is the best place to make and discover playlists"
),r.b("\n"+n),r.b("              </h2>"),r.b("\n"+n),r.b("              <p>"),r.b
("\n"+n),r.b("                Listen to music for every mood, activity, and artist you love with our free mobile app."
),r.b("\n"+n),r.b("              </p>"),r.b("\n"+n),r.b("            </div>"),r.b
("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b('          <div class="js-connected-sites desktop">'
),r.b("\n"+n),r.b('             <a href="/auth/facebook" class="facebook_connect_button facebook-signup" data-site="facebook" data-win-height="362" data-win-name="facebook" data-win-width="640" rel="popup" target="_blank" title="Connect with Facebook">'
),r.b("\n"+n),r.b('              <span class="i-facebook icon"></span>'),r.b("\n"+
n),r.b('              <span class="text">SIGN IN</span>'),r.b("\n"+n),r.b("            </a>"
),r.b("\n"+n),r.b('            <div class="google-plus-container" id="gplus-button">'
),r.b("\n"+n),r.b('                <span class="i-gplus icon"></span>'),r.b("\n"+
n),r.b('                <span class="text">SIGN IN</span>'),r.b("\n"+n),r.b("            </div>"
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("\n"+n),r.b('          <div class="downloadApp desktop hidden-international">'
),r.b("\n"+n),r.b('            <a href="https://bnc.lt/8tracks-ios" class="apple_appstore"></a>'
),r.b("\n"+n),r.b('            <a href="https://bnc.lt/8tracks-android" class="android_appstore"></a>'
),r.b("\n"+n),r.b("          </div>"),r.b("\n"+n),r.b("\n"+n),r.b('          <script type="text/javascript">'
),r.b("\n"+n),r.b("            if (window.device != 'desktop') {"),r.b("\n"+n),r.
b("              $('.splash_copy, .downloadApp, .js-connected-sites').removeClass('desktop').addClass(window.device);"
),r.b("\n"+n),r.b("            }"),r.b("\n"+n),r.b("          </script>"),r.b("\n"+
n),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),
r.b('      <div class="col-md-2 hidden-xs">&nbsp;</div>'),r.b("\n"+n),r.b("    </div>"
),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b('  <div class="clear"></div>'),r.b("\n"+
n),r.b("</div>"),r.b("\n"+n),r.b("\n"+n),r.b('<div class="container first_time_home">'
),r.b("\n"+n),r.b('  <div id="featured_collection"></div>'),r.b("\n"+n),r.b("\n"+
n),r.s(r.f("mix_set_name",e,t,1),e,t,0,2113,2361,"{{ }}")&&(r.rs(e,t,function(e,t
,r){r.b('    <h4 class="collection_title clear '),r.b(r.v(r.f("sort",e,t,0))),r.b
(' tooltip_container">'),r.b("\n"+n),r.b("      <hr />"),r.b("\n"+n),r.b('      <a href="'
),r.b(r.v(r.f("web_path",e,t,0))),r.b('" title="'),r.b(r.v(r.f("name",e,t,0))),r.
b('" class="title_front">'),r.b("\n"+n),r.b("        "),r.b(r.t(r.f("mix_set_name"
,e,t,0))),r.b(" "),r.s(r.f("collection_mode",e,t,1),e,t,1,0,0,"")||r.b("playlists"
),r.b("\n"+n),r.b("      </a>"),r.b("\n"+n),r.b("    </h4>"),r.b("\n")}),e.pop())
,r.b('  <div id="mix_sets"></div>'),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},""
,e,{});return n.template=t,n}),define("hgn!templates/layouts/_home_logged_in",["hogan"
],function(e){function n(){return t.render.apply(t,arguments)}var t=new e.Template
(function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="clear container" id="homepage_body">'
),r.b("\n"+n),r.b('  <div class="row">'),r.b("\n"+n),r.b('    <div id="left_masthead" class="col-md-12">'
),r.b("\n"+n),r.b('      <div class="big_menu">'),r.b("\n"+n),r.b('        <a class="item '
),r.s(r.f("home",e,t,1),e,t,0,177,185,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("selected"
)}),e.pop()),r.b('"               href="/">Home</a>'),r.b("\n"+n),r.b('        <a class="item '
),r.s(r.f("history",e,t,1),e,t,0,263,271,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("selected"
)}),e.pop()),r.b('"         href="/home/listened">History</a>'),r.b("\n"+n),r.b('        <a class="item '
),r.s(r.f("feed",e,t,1),e,t,0,359,367,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("selected"
)}),e.pop()),r.b('"               href="/home/feed">Feed</a>'),r.b("\n"+n),r.b('        <a class="item '
),r.s(r.f("liked",e,t,1),e,t,0,452,460,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("selected"
)}),e.pop()),r.b('"             href="/home/liked">Liked</a>'),r.b("\n"+n),r.b('        <a class="item '
),r.s(r.f("listen_later",e,t,1),e,t,0,553,561,"{{ }}")&&(r.rs(e,t,function(e,t,n)
{n.b("selected")}),e.pop()),r.b('" href="/home/listen_later">Listen Later</a>'),r
.b("\n"+n),r.s(r.f("admin",e,t,1),e,t,0,641,817,"{{ }}")&&(r.rs(e,t,function(e,t,
r){r.b('          <a class="item '),r.s(r.f("youtube_rec",e,t,1),e,t,0,683,691,"{{ }}"
)&&(r.rs(e,t,function(e,t,n){n.b("selected")}),e.pop()),r.b('" href="/home/youtube_rec">YouTube Recs</a>'
),r.b("\n"+n),r.b('          <a class="item" href="/home_beta">Home beta</a>'),r.
b("\n")}),e.pop()),r.b('        <!--a class="item '),r.s(r.f("published",e,t,1),e
,t,0,868,876,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b("selected")}),e.pop()),r.b('" href="/mix_sets/dj">Published</a-->'
),r.b("\n"+n),r.b("      </div>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="row">'),r.b("\n"+n),r.b('    <div class="col-md-12">'
),r.b("\n"+n),r.b("\n"+n),r.b("      <!-- high-impact ad units -->"),r.b("\n"+n),
r.b('      <div id="featured_collection_unit"><div id="sponsored_mix"></div></div>'
),r.b("\n"+n),r.b('      <div id="featured_collection" style="display: none;"></div>'
),r.b("\n"+n),r.b('      <div id="headerboard" class="advertisement" data-size="banner" data-slot-name="HPTO" style="display: none;"></div>'
),r.b("\n"+n),r.b('      <div id="video_masthead" class="video_masthead" style="display: none;"></div>'
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b('      <div class="clear"></div>'),r.b("\n"+
n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b("\n"+
n),r.b('  <div class="row">'),r.b("\n"+n),r.b('    <div class="col-md-12">'),r.b("\n"+
n),r.b('      <div id="mix_sets">'),r.b("\n"+n),r.s(r.f("mix_set",e,t,1),e,t,0,1547
,1585,"{{ }}")&&(r.rs(e,t,function(e,t,n){n.b(n.rp("mixes/mix_set",e,t,"          "
))}),e.pop()),r.b("      </div>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n
.template=t,n}),define("hgn!templates/layouts/_home_segmented",["hogan"],function(
e){function n(){return t.render.apply(t,arguments)}var t=new e.Template(function(
e,t,n){var r=this;return r.b(n=n||""),r.b("<p></p>"),r.b("\n"+n),r.b("\n"+n),r.b('<div class="clear container" id="homepage_body">'
),r.b("\n"+n),r.b('  <div class="row">'),r.b("\n"+n),r.b('    <div class="col-md-12">'
),r.b("\n"+n),r.b("\n"+n),r.b("      <!-- high-impact ad units -->"),r.b("\n"+n),
r.b('      <div id="featured_collection_unit"><div id="sponsored_mix"></div></div>'
),r.b("\n"+n),r.b('      <div id="featured_collection" style="display: none;"></div>'
),r.b("\n"+n),r.b('      <div id="headerboard" class="advertisement" data-size="banner" data-slot-name="HPTO" style="display: none;"></div>'
),r.b("\n"+n),r.b('      <div id="video_masthead" class="video_masthead" style="display: none;"></div>'
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b('      <div class="clear"></div>'),r.b("\n"+
n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r.b("\n"+
n),r.b('  <div class="row" id="dashboard">'),r.b("\n"+n),r.b('    <div class="col-md-12">'
),r.b("\n"+n),r.b('      <div id="segments">'),r.b("\n"+n),r.b("      </div>"),r.
b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("\n"+n),r
.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define
("hgn!templates/layouts/_collection",["hogan"],function(e){function n(){return t.
render.apply(t,arguments)}var t=new e.Template(function(e,t,n){var r=this;return r
.b(n=n||""),r.b('<article id="collection_wrapper">'),r.b("\n"+n),r.b('  <div id="collection_details"></div>'
),r.b("\n"+n),r.b("\n"+n),r.b("\n"+n),r.b('  <div class="container clearfix displaymode">'
),r.b("\n"+n),r.b('    <div class="row">'),r.b("\n"+n),r.b('     <div class="col-md-12">'
),r.b("\n"+n),r.b('      <div class="mix_set" id="mix_set_sortable" data-id="">')
,r.b("\n"+n),r.b('        <div class="mixes"></div>'),r.b("\n"+n),r.b("      </div>"
),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("  </div>"),r.b("\n"+n),r.b("</div>"
),r.b("\n"),r.fl()},"",e,{});return n.template=t,n}),define("views/app_view",["global_trax"
,"views/trax_view","lib/jsonh.jquery","lib/client_storage","hgn!templates/layouts/browse"
,"hgn!templates/layouts/_home_abc_test","hgn!templates/layouts/_home_logged_in","hgn!templates/layouts/_home_segmented"
,"hgn!templates/layouts/_collection"],function(e,t,n,r,i,s,o,u,a){var f=t.extend(
{initialize:function(){_.bindAll(this,"showMixView","showHomepageView","showDashboardView"
,"showBrowseView","showSearchView","showCollectionView","showFavoriteTracksView","showUserView"
,"cancel","showNotificationsView","_renderMixOrFollowRedirect","showMixStatsView"
,"showOnboarding")},loadViewData:function(t,r,i,s,o){delete this.json,s||this.loadingState
(!0);var u=function(e){ParsedLocation.init(),this.json=e,i()};u=_.bind(u,this);var a=
function(t,n){this.loadingState(!1);if(typeof o=="function")return o();t&&t.status&&
t.status!=200&&e.update_flash({notices:"Sorry, something went wrong loading that page."
})};a=_.bind(a,this),this.request=n.now(t,r,u,{error:a})},closeView:function(){$.
facebox.close(),App.currentView&&App.currentView.close(),App.views.mastheadView&&
(console.log("closing masthead view"),App.views.mastheadView.close({keepDomElement
:!0})),App.views.adsView&&App.views.adsView.resetAds(),this._deleteDormantViews()
,this._cleanupDOM(),this.loadingState(!1)},_deleteDormantViews:function(){_.each(
this.dormantViews(),function(e){delete App.views[e]})},_cleanupDOM:function(){$("#sidebar"
).remove(),$("#main").html('<div id="belly"><div id="content"></div><div id="sidebar"></div></div>'
),$("#interstitial_container, #headerboard, #superheader_box, .prWrap").empty(),$
("#page_description, #footer").hide(),$("#body_overlay").removeClass("visible"),$
("#legacy_container").removeClass("container")},dormantViews:function(){var e=[];
return _.each(App.views,function(t,n){t.dormant===!0&&e.push(n)}),e},loadingState
:function(e){e?($("#loading-stripe").show(),$("#loadingbar").addClass("waiting").
width(50+Math.random()*30+"%")):($("#loadingbar").width("100%"),_.delay(function(
){$("#loading-stripe").fadeOut(500,function(){$("#loadingbar").removeClass("loading"
).width("0%")})},200));return},showView:function(e,t){App.currentView=e,App.currentView
.render(t),scrollTo(0,0)},trackPageview:function(){if(App.Events){var e=window.location
.pathname+window.location.search,t;if(App.currentPage=="mix"){var n=App.views.mixView?
App.views.mixView.mix.id:PAGE.mix.id;t={mix_id:n}}else if(App.currentPage=="browse"
){var r=App.views.browseView?App.views.browseView.tags:[];t={tag1:r[0],tag2:r[1],
tag3:r[2],tag4:r[3],tag5:r[4]}}App.Events.pageView(App.currentPage,e,t)}},updateTitle
:function(e){var t=App.views.mixPlayerView&&App.views.mixPlayerView.mixPlayer.playing?"► "
:"";document.title=t+e+" | 8tracks | Handcrafted internet radio"},refreshAds:function(
){App.views.adsView?(App.views.adsView.fillEmptyAds(!0),App.views.adsView.refreshExistingAds
()):$(".sidebar_ad_wrapper").hide()},cancel:function(){this.request&&this.request
.abort()},loadMixView:function(e){this.cancel(),PAGE.serverRendered=!1;if(App.views
.mixView&&e.match(App.views.mixView.mix.get("web_path"))){e.match(/\/edit$/)?App.
views.mixView.switchToEditView():App.views.mixView.mixEditView&&App.views.mixView
.mixEditView.unEditMode();return}this.loadViewData(e,{include:"description_html,likes_count,user_with_followed,genres,artist_tags"
},this._renderMixOrFollowRedirect),require(["pages/mixes_show"]),window.dummySound=
soundManager.createSound({id:"silence",url:"about:blank"}),window.dummySound.load
(),window.dummySound.play()},_renderMixOrFollowRedirect:function(){if(this.json&&
this.json.mix)return this.showMixView();if(!this.json)return;var e=ParsedLocation
.parse(window.location.href),t=e.urlHashParams.s,n="/";return!t||(n="/explore/q/"+
t),this.json.mix_set&&!t&&(n=this.json.mix_set.web_path),App.router.navigate(n+"#private"
,{trigger:!0})},showMixView:function(){if(this.json&&App.Views.MixView){if(!this.
json.mix)return!1;this.closeView();var t=App.Collections.Mixes.load(this.json.mix
);App.views.mixView=new App.Views.MixView({mix:t,user_mixes:this.json.user_mixes,
similar_mixes:this.json.similar_mixes,related_collections:this.json.related_collections
}),e.mix=t,this.showView(App.views.mixView),App.currentPage="mix",this.updateTitle
(this.json.mix.name+" by "+this.json.mix.user.login),this.trackPageview()}},loadMixStatsView
:function(e){this.cancel(),PAGE.serverRendered=!1,this.loadViewData(e,{},this.showMixStatsView
),require(["pages/mixes_stats"])},showMixStatsView:function(){this.json&&App.Views
.MixStatsView&&(this.closeView(),$("#content").empty().html('<div id="stats"></div>'
),$("#sidebar").empty(),App.views.mixStatsView=new App.Views.MixStatsView(this.json
),this.showView(App.views.mixStatsView,this.json),App.currentPage="stats",this.updateTitle
("Stats for "+this.json.mix.name),this.trackPageview())},loadBrowseView:function(
e){this.cancel(),PAGE.serverRendered=!1;var t=App.Views.ExploreView&&App.currentView instanceof 
App.Views.ExploreView;t&&App.currentView.unloadContent();var n=["likes_count","user"
,"length","artist_tags"];e.match("recommended")&&n.push("recommended_story[reason_object]"
);var i={include:"details,mixes["+n.join(",")+"],pagination,relative_name,current_user_prefs,explore_filters"
};r.get("browse_sort")&&(i.sort=r.get("browse_sort")),this.loadViewData(e,i,this.
showBrowseView,t),require(["pages/mixes_index"])},showBrowseView:function(){if(this
.json&&App.Views.ExploreView){var t=App.Views.ExploreView&&App.currentView instanceof 
App.Views.ExploreView;t||this.closeView();var n=i({});$("#content").empty().html(
n);var r=this.json.mix_set.tags_list;App.views.exploreView=new App.Views.ExploreView
({initialTags:r}),App.currentPage="browse",this.showView(App.views.exploreView,this
.json),App.views.exploreView.afterRender(),this.updateTitle(this.json.mix_set.relative_name||"Explore"
),this.trackPageview(),this.refreshAds(),window.location.hash.match("#private")&&
e.show_private_redirection_message(),App.views.pslightbox&&(App.views.appView.loadPostSignup
(),App.views.pslightbox=!1)}},loadSearchView:function(e){this.cancel(),PAGE.serverRendered=!1
;var t=App.Views.SearchView&&App.currentView instanceof App.Views.SearchView;this
.loadViewData(e,{},this.showSearchView,t),require(["pages/search_results"])},showSearchView
:function(){this.json&&App.Views.SearchResultsView&&(this.closeView(),$("#content"
).empty().html('<div id="search_page"></div>'),App.views.searchResultsView=new App
.Views.SearchResultsView,this.showView(App.views.searchResultsView,this.json),App
.views.searchResultsView.afterRender(this.json),App.currentPage="search",this.trackPageview
(),this.refreshAds(),window.location.hash.match("#private")&&e.show_private_redirection_message
())},loadCollectionView:function(e){this.cancel(),PAGE.serverRendered=!1;var t="details,user[profile+location_summary],mixes[likes_count,length,artist_tags],pagination,mix_cluster,length"
;this.loadViewData(e,{include:t},this.showCollectionView),require(["pages/collection_edit"
])},showCollectionView:function(){if(this.json&&App.Views.CollectionEditView){this
.closeView(),$("#content").empty().html(a({}));var e=new App.Models.Collection(this
.json.collection);App.views.collectionEditView=new App.Views.CollectionEditView({
collection:e}),this.showView(App.views.collectionEditView,this.json),App.views.collectionEditView
.appendItems(App.views.collectionEditView.renderItems()),App.views.collectionEditView
.afterRender(),App.currentPage="collection",this.updateTitle(this.json.collection
.name),this.trackPageview(),this.refreshAds()}},loadHomepageView:function(e,t){this
.cancel(),PAGE.serverRendered=!1;var n,r;App.Sessions.logged_in()?(require(["pages/home_feed"
]),this.loadViewData("/home-feed",{rebuild:t},this.showHomepageView)):this.loadHomeMixSetView
("/")},loadHomeMixSetView:function(e){this.cancel(),PAGE.serverRendered=!1;var t=
["likes_count","user","length","artist_tags"],n={include:"details,mixes["+t.join(","
)+"],pagination,current_user_prefs"};cookie.get("home_page_experiment")&&!App.Trax
.currentUser&&(e="/home_"+cookie.get("home_page_experiment")),this.loadViewData(e
,n,this.showHomepageView),require(["pages/home_feed"])},showHomepageView:function(
){if(this.json&&App.Views.HomeMenuView){if(!App.views.homeMenuView){this.closeView
();var e={logged_in:App.Sessions.logged_in(),returning:!App.Sessions.logged_in(),
admin:App.Sessions.isAdmin(),class_name:" ",google_client_id:GOOGLE_CLIENT_ID,splash_text
:this.json.splash_text||!1,mix_set_name:this.json.mix_set?this.json.mix_set.html_name
:!1},t=e.logged_in?o:s;$("#content").html(t(e)),App.views.homeMenuView=new App.Views
.HomeMenuView}else this.loadingState(!1);App.currentPage="home",this.showView(App
.views.homeMenuView,this.json),this.updateTitle("Home"),this.trackPageview(),App.
views.pslightbox&&(App.views.appView.loadPostSignup(),App.views.pslightbox=!1)}},
loadDashboardView:function(e){this.cancel(),PAGE.serverRendered=!1,this.loadViewData
("/home_beta",{},this.showDashboardView),require(["views/dashboard_view"],_.bind(
function(e){App.Views.DashboardView=e,this.showDashboardView()},this))},showDashboardView
:function(e){this.json&&App.Views.DashboardView&&(App.views.dashboardView?this.loadingState
(!1):(this.closeView(),$("#content").html(u()),App.views.dashboardView=new App.Views
.DashboardView({dashboard:this.json})),App.currentPage="home_beta",this.showView(
App.views.dashboardView,this.json),this.updateTitle("Home"),this.trackPageview(),
App.views.pslightbox&&(App.views.appView.loadPostSignup(),App.views.pslightbox=!1
))},loadNewsFeedView:function(e){this.cancel(),PAGE.serverRendered=!1,this.loadViewData
("/news-feed",{include:"web+pagination+stories_count",page:e},this.showHomepageView
,!1),require(["pages/home_feed"])},loadNotificationsView:function(){this.cancel()
,PAGE.serverRendered=!1,this.loadViewData("/notifications",{},this.showNotificationsView
,!1),require(["pages/notifications"])},showNotificationsView:function(){if(!App.Views
.NotificationsView||!this.json||!this.json.notifications)return;this.closeView(),
$("#content").html('<div class="container"><div class="row"><div class="col-md-12"><br /><h1>Notifications</h1><div id="notifications"></div><div style="display: none;" class="large-spinner" id="stories-spinner"></div></div></div></div>'
),App.views.notificationsView=new App.Views.NotificationsView(this.json.news_feed
),this.showView(App.views.notificationsView,this.json),this.loadingState(!1),App.
currentPage="feed",this.updateTitle("Notifications"),this.trackPageview(),this.refreshAds
()},loadFavoriteTracksView:function(e){this.cancel(),PAGE.serverRendered=!1,this.
loadViewData(e,{include:"user[profile+location_summary]+pagination"},this.showFavoriteTracksView
,!1),require(["pages/favorite_tracks"])},showFavoriteTracksView:function(){this.json&&
App.Views.FavoriteTracksView&&(this.closeView(),$("#content").html('<div id="favorite_tracks"><ul class="tracks big_tracks playlist"></ul></div>'
),App.views.favoriteTracksView=new App.Views.FavoriteTracksView({favorites:{tracks
:this.json.tracks,pagination:this.json.pagination,user:this.json.user},user:this.
json.user,rendered:!1,mini_player:!1}),this.showView(App.views.favoriteTracksView
,this.json),this.loadingState(!1),App.currentPage="favorite_tracks",this.updateTitle
("Favorite Tracks"),this.trackPageview(),this.refreshAds())},loadUserView:function(
e){this.cancel(),PAGE.serverRendered=!1,this.loadViewData(e,{include:"profile_counts"
},this.showUserView,!1,_.bind(function(){this.loadHTML(e)},this)),require(["pages/users_show"
])},showUserView:function(){if(this.json&&App.Views.UserProfileView){if(!this.json
.user)return this.loadHTML(window.location.pathname),!1;this.closeView(),App.views
.userProfileView=new App.Views.UserProfileView({user:this.json.user}),this.showView
(App.views.userProfileView,this.json),App.currentPage="user",this.updateTitle(this
.json.user.login),this.trackPageview(),this.refreshAds()}},loadHTML:function(t,n)
{return this.cancel(),this.loadingState(!0),$.ajax(t,{success:_.bind(function(e){
this.loadingState(!1),this.closeView();var r=$(e);$("#belly").replaceWith(r.find("#belly"
));var i=e.match("<title>(.*?)</title>")[1];this.updateTitle(i),t=="mix_madness"?
require(["pages/mix_madness"]):App.currentPage="other",scrollTo(0,0),typeof n=="function"&&
n()},this),error:_.bind(function(t){this.loadingState(!1),e.update_flash({notices
:"Sorry, something went wrong loading that page."})},this)})},loadNSFW:function()
{this.cancel();var e=$.Deferred(),t=$.Deferred();this.loadHTML("/nsfw",function()
{e.resolve()}),require(["views/nsfw_view"],function(e){t.resolve(e)}),$.when(e,t)
.done(function(e,t){App.views.currentView=App.views.nsfwView=new t})},loadOnboarding
:function(){App.router.navigate("/home/onboarding",{trigger:!1}),require(["views/onboarding_view"
],this.showOnboarding)},showOnboarding:function(e){App.Views.OnboardingView||(App
.Views.OnboardingView=e),this.closeView(),App.views.onboardingView=new e({}),this
.showView(App.views.onboardingView,{}),App.currentPage="onboarding",this.updateTitle
("Welcome to 8tracks"),this.trackPageview()},loadPostSignup:function(){require(["views/post_signup_view"
],this.showPostSignup)},showPostSignup:function(e){App.Views.PostSignupView=new e
({}),App.Views.PostSignupView.render().show()}});return f}),define("initializer",
["lib/jsonh.jquery","lib/events","lib/router","lib/trax_utils","views/login_view"
,"views/signup_view","views/auth_nav_view","views/autocomplete_view","views/safe_browse_view"
,"views/ads_view","views/app_view","lib/sessions","global_trax","lib/traxhead","lib/client_storage"
],function(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d){function b(e){if(e.data("method")!=="delete"
)return;var t=e.data("confirm");if(t===undefined||confirm(t)){var n=$('<form method="post" action="'+
e.attr("href")+'"></form>'),r='<input name="_method" value="delete" type="hidden" />'
;n.hide().append(r).appendTo("body"),n.submit()}return!1}function w(e){if(e.target
.activeElement.nodeName=="IFRAME"&&App.Trax.mixPlayer&&App.Trax.mixPlayer.isPlaying
())return"Playback will be interrupted! Proceed?"}var v=function(){var e=cookie.get
("initial_source");return e||ParsedLocation.parsedReferrerUrl&&ParsedLocation.parsedReferrerUrl
.host!=="8tracks.com"&&(e=ParsedLocation.parsedReferrerUrl.host,cookie.set("initial_source"
,e)),e},m=function(){var e=_.keys(ParsedLocation.urlHashParams),t=_.contains(e,"private"
);t&&h.show_private_redirection_message()},g=function(){$.facebox.settings.opacity=.36
,$.facebox.settings.loadingImage="/assets/spinner/spinner-large.gif",$.facebox.settings
.closeImage="/assets/buttons/closelabel.png",$.facebox.html='      <div id="facebox" style="display:none;">       <div class="popup">         <div class="content">         </div>         <a href="#" class="close"><img src="/assets/buttons/closelabel.png" title="close" class="close_image" /></a>       </div>     </div>'
,$("a[rel*=facebox]").facebox()};h.showLoginView=function(e){return App.views.loginView=new 
i(e||{}),App.views.loginView.show(e||{}),$("#footer").slideUp(),!1},h.showSignupView=
function(e){return App.views.signupView=new s(e||{}),App.views.signupView.show(),
$("#footer").slideUp(),!1};var y=function(e){$("body").on("click","a",function(e)
{if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||this.getAttribute&&this.getAttribute
("href").match(/^#/))return!0;if(this.rel.match("external")||this.rel==="me"){this
.target="_blank",this.className.match("buy")?t.buyTrack(this.hostname.match(/[^.]+\.[^.]+$/
)):t.clickExternalLink(this.href);return}if(!c.loggedIn()){var n={};if(this.rel==="login_required"
)return this.pathname!="/login"&&(n.attempted_path=this.href),h.showLoginView(n),!1
;if(this.rel.match("signup_required"))return this.pathname!="/signup"&&(n.attempted_path=
this.href),h.showSignupView(n),!1}if(this.rel==="popup"){if(this.href.match(/\/auth\/facebook$/
)&&window.navigator.userAgent.match(/android/i)){var r=this.href+"?attempted_path="+
(PAGE.attempted_path||window.location.pathname)+"&display=touch";return window.location=
r,!1}var i=$(this),s="popup";i.data("win-name")&&(s=i.data("win-name"));var o=500
;parseInt(i.data("win-height"),10)&&(o=i.data("win-height"));var u=500;parseInt(i
.data("win-width"),10)&&(u=i.data("win-width"));var a=window.open(this.href,s,"height="+
o+",width="+u);return window.focus&&a.focus(),!1}if(this.rel=="play_page")return h
.play_page(),!1;var f=$(this);if(f.data("track")==="true"||f.data("track")===!0){
var l=f.data(),p="click",d={};for(key in f.data())if(key==="event_name"&&(l[key]!=""||!
_.isNull(l[key])||!_.isUndefined(l[key])))p=l[key];else{if(!key.match(/^event_properties_/
))continue;var v=key.replace(/^event_properties_/,"");d[v]=l[key]}!_.isNull(p)&&!
_.isUndefined(p)&&App.Events.trackClick(p,d)}return this.hostname==window.location
.hostname&&!PAGE.noHistory?(App.router&&App.router.navigate(this.pathname+this.hash
,{trigger:!0}),e.preventDefault(),!1):h.mixPlayer&&h.mixPlayer.isPlaying()?(this.
target="_blank",!0):b(f)})},E=function(){try{d.get("hide_welcome_text")&&$("#page_description"
).hide()}catch(e){throw"Error in hide_seo_text() "+e}},S=function(){window.location
.href.match("no_mobile_ui")&&cookie.set("no_mobile_ui","temp",{expires:""})};return self
.init=function(){var e=v();m(),TraxEvents.refreshSession(),c.onPageLoad(),g(),y()
,h.hide_flash_notices(),E(),S(),App.views.authNavView=new o({el:"#thin_header"}),
App.views.authNavView.render();var t=new a({});App.views.autocompleteView=new u({
el:"#search",endpoint:"/search/combined_autocomplete.jsonh",autoSelect:"exact_match_only"
,queryOptions:{tags_per_page:6,mixes_per_page:3,users_per_page:3}}),$(document).ready
(function(){h.isReady=!0,h.showAds()&&(App.views.adsView=new f({}),App.views.dfpView=
App.views.adsView),App.views.appView=new l,App.router=new n({appView:App.views.appView
}),App.views.appView.trackPageview();if(!PAGE.noHistory){var e=!0;window.location
.hash.length>1&&(window.history&&window.history.pushState&&window.history.replaceState?
window.history.replaceState({},document.title,window.location.pathname+window.location
.search):e=!1),Backbone.history.start({pushState:!0,silent:e,hashChange:!0})}else Backbone
.history.start({pushState:!1,hashChange:!1,silent:!0});window.addEventListener("beforeunload"
,w)})},self.init(),self});