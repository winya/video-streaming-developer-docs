(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{jvKN:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("XbGe");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},o={_frontmatter:l},c=r.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,i({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"UstreamPlayers initialized with ",Object(a.b)("inlineCode",{parentName:"p"},"RECORDED")," content can be buffered ahead of time.\nThis way an illusion of instantly starting videos can be achieved.\nBy the time a player is needed (",Object(a.b)("inlineCode",{parentName:"p"},"PlayerView")," is set and ",Object(a.b)("inlineCode",{parentName:"p"},"play()")," is called) it is likely already in the ",Object(a.b)("inlineCode",{parentName:"p"},"Paused")," state, and playback can start immediately.\nThis feature’s most obvious use-case is a newsfeed like playback experience,\nwhen video contents are scrolling into the view and need to be started as soon as possible."),Object(a.b)("h2",null,"Usage"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a ",Object(a.b)("inlineCode",{parentName:"li"},"ustreamPlayer")," instance with an ID. (The ID can be the ",Object(a.b)("inlineCode",{parentName:"li"},"contentDescriptors.toString()")," value for simplicity, if duplicate contents are not required.)"),Object(a.b)("li",{parentName:"ul"},"Initialize the created player with a ",Object(a.b)("strong",{parentName:"li"},"RECORDED")," content."),Object(a.b)("li",{parentName:"ul"},"Call ",Object(a.b)("inlineCode",{parentName:"li"},"pause()")," on the player. The UstreamPlayer will buffer the content then it will wait.\nAt this stage it is not required to call ",Object(a.b)("inlineCode",{parentName:"li"},"setPlayerListener()"),", ",Object(a.b)("inlineCode",{parentName:"li"},"setErrorListener()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"attach()")," if the callbacks are not relevant for you.\nBut you are free to do so if you are interested in the callbacks, but make sure you call ",Object(a.b)("inlineCode",{parentName:"li"},"detach()")," before changing listeners or playerView on the player,\nand call ",Object(a.b)("inlineCode",{parentName:"li"},"attach()")," again so these changes can take effect."),Object(a.b)("li",{parentName:"ul"},"Later when the player is needed set your listeners and the ",Object(a.b)("inlineCode",{parentName:"li"},"playerView"),", call ",Object(a.b)("inlineCode",{parentName:"li"},"attach()")),Object(a.b)("li",{parentName:"ul"},"Call ",Object(a.b)("inlineCode",{parentName:"li"},"ustreamPlayer.play()")," and if it is buffered the playback will start instantly.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example"),":"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"UstreamPlayerFactory ustreamPlayerFactory = new UstreamPlayerFactory(API_KEY, activity);\nContentDescriptor contentDescriptor = new ContentDescriptor(ContentType.RECORDED, 123456L);\nUstreamPlayer player1 = ustreamPlayerFactory.createUstreamPlayer(contentDescriptor.toString());\nplayer1.initWithContent(contentDescriptor);\nplayer1.pause();\n\n//... AT A LATER POINT, WHEN THE PLAYER IS NEEDED:\n\nplayer1.setPlayerListener(playerListener);\nplayer1.setErrorListener(errorListener);\nplayer1.setPlayerView(playerView);\nplayer1.attach();\nplayer1.play();\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Only your device capabilities (mostly RAM) limit how many players you can pre-buffer. Keeping too many players can cause an OutOfMemoryError."),Object(a.b)("li",{parentName:"ul"},"When the players are no longer needed don’t forget to ",Object(a.b)("inlineCode",{parentName:"li"},"destroy()")," them.")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-android-pre-buffering-mdx-3bbe135938f746258d1e.js.map