(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{CkJn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("XbGe");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},o={_frontmatter:l},p=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"USPrebufferingController")," provides an API allowing the buffering of content ahead of time, to support near instantaneous playback starts.\nIf you provide a content list to be prepared for playback before it is actually required to be started, you will likely get a player prepared to start the playback instantly once it is actually needed by the user of your app."),Object(n.b)("h2",null,"Usage"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a content list in priority order as soon as possible. For example, if the application contains a list of videos then the priority order may be determined based on the distance of the video cell from the screen centre. The list must contain ",Object(n.b)("inlineCode",{parentName:"p"},"USMediaDescriptor")," objects.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Enqueue the content list for preparation using the ",Object(n.b)("inlineCode",{parentName:"p"},"enqueueForPlaybackPreparation:")," method.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Update the list whenever it is needed by calling ",Object(n.b)("inlineCode",{parentName:"p"},"enqueueForPlaybackPreparation:")," with a new list. For example, when the user is scrolling up/down in the list.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Request a ",Object(n.b)("inlineCode",{parentName:"p"},"USUstreamPlayer")," for a media using ",Object(n.b)("inlineCode",{parentName:"p"},"playerForMedia:")," when the user is initiating a playback, eg. when a video is selected.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Present the requested player."))),Object(n.b)("h2",null,"Notes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The content list can be updated freely anytime, it won’t trigger re-buffering on an existing player."),Object(n.b)("li",{parentName:"ul"},"The provided player is owned by the caller, it may be used as any other player created with ",Object(n.b)("inlineCode",{parentName:"li"},"[[USUstreamPlayer alloc] init]")," for example."),Object(n.b)("li",{parentName:"ul"},"If the caller releases the player its resources will be reused for the other enqueued content."),Object(n.b)("li",{parentName:"ul"},"If a content was not enqueued but a player is requested for it then the user will get a cold player which will start in buffering state, but it is a completely valid usage."),Object(n.b)("li",{parentName:"ul"},"If it is appropriate, call ",Object(n.b)("inlineCode",{parentName:"li"},"cancelPlaybackPreparations")," to release system resources."),Object(n.b)("li",{parentName:"ul"},"If ",Object(n.b)("inlineCode",{parentName:"li"},"playerForMedia:")," is called multiple times with the same ",Object(n.b)("inlineCode",{parentName:"li"},"USMediaDescriptor")," it will return the same player instance. You should create a different ",Object(n.b)("inlineCode",{parentName:"li"},"USMediaDescriptor")," object for each occurrence in order to get different players for them.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-ios-pre-buffering-mdx-13b0a4882a446d89d144.js.map