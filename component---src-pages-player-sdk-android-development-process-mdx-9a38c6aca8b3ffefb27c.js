(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{VD56:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("XbGe");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={},l={_frontmatter:o},c=r.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Step 1: Create credentials for your mobile app"),Object(a.b)("p",null,"The SDK requires the use of an ",Object(a.b)("strong",{parentName:"p"},"IBM Video Streaming Player SDK key"),", which is validated whenever the SDK communicates with IBM’s Video Streaming\nstreaming servers. The sample application contains a sample SDK key which you can use for testing. The sample SDK key\ncan only be used to play content on the test channel(s) also used in the sample app."),Object(a.b)("p",null,"Before you can download and start using the ",Object(a.b)("em",{parentName:"p"},"IBM Video Streaming Player SDK for Android")," for playing content from your own channel(s), you will need\nto register the ",Object(a.b)("strong",{parentName:"p"},"Key Hash")," of every app in which you will integrate the ",Object(a.b)("em",{parentName:"p"},"IBM Video Streaming Player SDK for Android"),".\nEvery registered application will have its own ",Object(a.b)("em",{parentName:"p"},"IBM Video Streaming Player SDK key"),". Although there is a provided SDK key for the sample\napp’s sample content, you still need to register your ",Object(a.b)("strong",{parentName:"p"},"Key Hash")," at IBM Video Streaming. This will ensure that you can build the sample\nproject using your own certificates.\nEvery time you create an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"UstreamPlayerFactory")," you must use your ",Object(a.b)("strong",{parentName:"p"},"IBM Video Streaming Player SDK key"),"."),Object(a.b)("h3",null,"Generate your Key Hash"),Object(a.b)("p",null,"There are three types of certificates that your application can be signed with.\nEach certificate generates a different ",Object(a.b)("strong",{parentName:"p"},"Key Hash"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("strong",{parentName:"li"},"debug key")," is used for development and testing (debug build)."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("strong",{parentName:"li"},"release key")," (or App Signing key) is used to sign your app when you release it to the Google Play Store (release build)."),Object(a.b)("li",{parentName:"ul"},"(Optional) The third type has been recently introduced with ",Object(a.b)("strong",{parentName:"li"},"Google Play App Signing"),".\nUsing this feature when you upload your release build to the Play Store Google will sign it again with your true release key.\nTherefore, you will must generate key hashes for all three of your keys (Debug key, Upload key, App Signing key - managed by Google).\nFor more information visit: ",Object(a.b)("a",i({parentName:"li"},{href:"https://support.google.com/googleplay/android-developer/answer/7384423"}),"Google Play App Signing"))),Object(a.b)("p",null,"There are two ways to generate your ",Object(a.b)("strong",{parentName:"p"},"Key Hash"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In your Android app:"),Object(a.b)("p",{parentName:"li"},"  Execute this in a debug build ",Object(a.b)("strong",{parentName:"p"},"and")," a in a release build too:"),Object(a.b)("p",{parentName:"li"},"  Starting with 1.3.0 you can use ",Object(a.b)("inlineCode",{parentName:"p"},"tv.ustream.player.android.SignatureUtil.keyHashFromContext(Context)"),"\nto generate or check your current Key Hash from your application. This method basically executes\nthe following lines without printing to the output:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),'String packageName = context.getPackageName();\nPackageInfo packageInfo = context.getPackageManager().getPackageInfo(packageName, PackageManager.GET_SIGNATURES);\nbyte[] signature = packageInfo.signatures[0].toByteArray();\nMessageDigest messageDigest = MessageDigest.getInstance("SHA");\nString keyHash = Base64.encodeToString(messageDigest.digest(signature), Base64.NO_WRAP);\nSystem.out.println("Key Hash is: "+keyHash);\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Using the command line:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Install OpenSSL for your development platform.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Locate your ",Object(a.b)("inlineCode",{parentName:"p"},"keystore_file")," and replace ",Object(a.b)("inlineCode",{parentName:"p"},"CERTIFICATION_ALIAS")," with your alias below and execute the commands:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"keytool -exportcert -alias CERTIFICATION_ALIAS -keystore /path/to/keystore_file >your_company-debug.key\nopenssl dgst -sha1 -binary your_company-debug.key | base64\n")),Object(a.b)("p",{parentName:"li"},"  The output of the last command is your ",Object(a.b)("strong",{parentName:"p"},"Key Hash"),". "),Object(a.b)("p",{parentName:"li"},"  Remember to generate the identifier for your release certificate’s public key ",Object(a.b)("strong",{parentName:"p"},"and")," every other debug certificate\nthat your developers will use."))))),Object(a.b)("h3",null,"Enter credentials"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Log-in into your account, navigate to the ",Object(a.b)("a",i({parentName:"p"},{href:"https://video.ibm.com/dashboard"}),"Dashboard")," and select ",Object(a.b)("a",i({parentName:"p"},{href:"https://video.ibm.com/dashboard/integrations/api-access"}),"“API/SDK access”"),"\nunder the “Integrations & Apps” menu.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In the “Mobile Player SDK” section, click on “Create new credentials” and provide a name for your application in the\n“Application name” field. Your credentials will be listed under the ",Object(a.b)("a",i({parentName:"p"},{href:"https://video.ibm.com/dashboard/integrations/api-access"}),"“API/SDK access”")," page based on this name.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Select Android in the “Platform” drop-down. Enter your ",Object(a.b)("strong",{parentName:"p"},"Key Hash")," and ",Object(a.b)("strong",{parentName:"p"},"Google Play Package Name")," in the respective fields.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"After you have completed all fields, hit “Save” to generate your IBM Video Streaming Player SDK for Android credentials. Make sure that\nthe “Key Hash” and “Google Play Package Name” are introduced correctly.\nIf you accidentally saved wrong values, you can edit or delete your credentials,\nbut beware as this will break any existing applications relying on those credentials."))),Object(a.b)("h2",null,"Step 2: Download SDK package"),Object(a.b)("p",null,"After hitting “Save” in the “Create new credentials” step, you will see your credentials listed with the newly generated\n",Object(a.b)("strong",{parentName:"p"},"IBM Video Streaming Player SDK key"),"."),Object(a.b)("p",null,"Click to the “Android Player SDK” link near the “Download” to download the zip archive containing the SDK package."),Object(a.b)("h2",null,"Step 3: Explore the SDK package"),Object(a.b)("p",null,"The provided zip archive contains the sample Android application project for IBM Video Streaming Player SDK for Android. The sample\napplication uses the Player SDK as an AAR dependency found in the ",Object(a.b)("inlineCode",{parentName:"p"},"/m2repository")," folder in the archive."),Object(a.b)("h2",null,"Step 4: Create (or open) your project"),Object(a.b)("p",null,"Open the project that you would like to integrate the IBM Video Streaming Player SDK in.\nUpdate the ",Object(a.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," of your application with the following permission:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-xml"}),'<uses-permission android:name="android.permission.INTERNET" />\n')),Object(a.b)("h2",null,"Step 5: Add the SDK to the project"),Object(a.b)("p",null,"Import from local repo: copy the ",Object(a.b)("inlineCode",{parentName:"p"},"m2repository")," folder to your project. In your project’s ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle")," put the Player SDK\ndependency:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-gradle"}),"repositories {\n    maven {\n        name 'IBMLocal'\n        url new File(\"${rootProject.rootDir.path}/m2repository\").toURI()\n    }\n}\n\ndependencies {\n    implementation 'tv.ustream.player:ibm-player-sdk-android-external:1.4.0'\n}\n")),Object(a.b)("p",null,"You can find this in the sample application also, just copy those settings."),Object(a.b)("h2",null,"Step 6: Create a Player"),Object(a.b)("h3",null,"In your layout .xml"),Object(a.b)("p",null,"Place a ",Object(a.b)("inlineCode",{parentName:"p"},"PlayerView")," in your layout:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-xml"}),'<tv.ustream.player.android.PlayerView\nandroid:id="@+id/playerview"\nandroid:layout_height="match_parent"\nandroid:layout_width="match_parent" />\n')),Object(a.b)("h3",null,"In your Activity or Fragment"),Object(a.b)("p",null,"Create a ",Object(a.b)("inlineCode",{parentName:"p"},"UstreamPlayerFactory")," in your Activity or Fragment with the Activity’s context:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"private final UstreamPlayerFactory ustreamPlayerFactory = new UstreamPlayerFactory(USTREAM_PLAYER_SDK_KEY, context);\n")),Object(a.b)("p",null,"This factory can be used to create or retrieve IBM Video Streaming Player instances.\nIBM Video Streaming Players created for a specific ",Object(a.b)("inlineCode",{parentName:"p"},"playerId")," will be retained across configuration changes (like orientation change).\nRequesting a player with the same ",Object(a.b)("inlineCode",{parentName:"p"},"playerId")," will create a new UstreamPlayer interface, but that interface will\nbelong to the same player instance. The previous player for the same id must be detached before attaching a new one."),Object(a.b)("p",null,"In your Fragment’s ",Object(a.b)("inlineCode",{parentName:"p"},"onCreateView()")," or Activity’s ",Object(a.b)("inlineCode",{parentName:"p"},"onCreate()")," find your playerView and get a player instance from the factory:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"final PlayerView playerView = (PlayerView)findViewById(R.id.playerview);\nUstreamPlayer ustreamPlayer = ustreamPlayerFactory.createUstreamPlayer(playerId);\n")),Object(a.b)("p",null,"Where ",Object(a.b)("inlineCode",{parentName:"p"},"playerId")," can be:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a constant String value if the Activity will only contain ",Object(a.b)("strong",{parentName:"li"},"one")," player instance."),Object(a.b)("li",{parentName:"ul"},"a persisted String value for every player instance that the Activity contains. (saved in ",Object(a.b)("inlineCode",{parentName:"li"},"onSaveInstanceState()")," restored in ",Object(a.b)("inlineCode",{parentName:"li"},"onCreate()"),")")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"tv.ustream.player.api.UstreamPlayer")," class is the point where you can interface with the Player SDK. Its methods send\nevents to the player, and its states are observed through the listeners (see below). The ",Object(a.b)("inlineCode",{parentName:"p"},"UstreamPlayer"),"’s methods are\nexplained further in its ",Object(a.b)("em",{parentName:"p"},"Javadoc"),"."),Object(a.b)("h2",null,"Step 7: Play live or recorded content"),Object(a.b)("p",null,"After the ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer")," is created, initialize it with a live or previously recorded video content. This will most likely be in your\nActivity’s ",Object(a.b)("inlineCode",{parentName:"p"},"onCreate()")," (Fragment’s ",Object(a.b)("inlineCode",{parentName:"p"},"onCreateView()"),"). A player instance can be initialized more than once with different\ncontent, but ",Object(a.b)("inlineCode",{parentName:"p"},"connect()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"play()")," must be called in order to reconnect to the servers. The ",Object(a.b)("inlineCode",{parentName:"p"},"connect()")," method is\noptional (a ",Object(a.b)("inlineCode",{parentName:"p"},"play()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"pause()")," call will also handle it implicitly) though the player will respond to ",Object(a.b)("inlineCode",{parentName:"p"},"play()")," calls\nmore quickly because it is already connected to IBM Video Streaming’s servers."),Object(a.b)("p",null,"First time initialization:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"// To play videos, use ContentType.RECORDED and the video id\nContentDescriptor contentDescriptor = new ContentDescriptor(ContentType.RECORDED, 54321);\n")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"// To play live streams, use ContentType.LIVE and the channel id\nContentDescriptor contentDescriptor = new ContentDescriptor(ContentType.LIVE, 12345);\n")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),'if (!ustreamPlayer.isInitialized()) {\n    ustreamPlayer.initWithContent(contentDescriptor);\n\n    /*\n    If the password (or birthday) is known in advance (and it is known to be required)\n    it can be supplied here, for example:\n    ustreamPlayer.setPassword("super-secret");\n    */\n    ustreamPlayer.connect();\n}\n')),Object(a.b)("p",null,"Remember to define a string constant ",Object(a.b)("inlineCode",{parentName:"p"},"USTREAM_PLAYER_SDK_KEY")," with your actual ",Object(a.b)("strong",{parentName:"p"},"IBM Video Streaming Player SDK key"),"."),Object(a.b)("p",null,"IBM Video Streaming Player SDK version 1.3.0 introduced changes in the user facing interface, see the ",Object(a.b)("a",i({parentName:"p"},{href:"changelog"}),"CHANGELOG")," for details."),Object(a.b)("h3",null,"Setting your listeners"),Object(a.b)("p",null,"To receive state changes and other events from the player you need to set listeners. There are mandatory and optional ones,\nbut all listeners must be set prior to calling ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.attach()")," on your player instance. This should\nhappen in the ",Object(a.b)("inlineCode",{parentName:"p"},"onResume()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"onStart()")," callback of your activity or fragment. Calling ",Object(a.b)("inlineCode",{parentName:"p"},"attach()")," is an important step, this is where\nyour listeners and the player view is bound to the Player SDK. Forgetting to call this will cause the player to not render\nvideo upon viewing, and you will not receive any callback on your listeners.\nAlso, since version 0.9.0 this is the place to set your ",Object(a.b)("inlineCode",{parentName:"p"},"PlayerView")," to the IBM Video Streaming player.\nThe reason behind this is, now you can optionally pre-buffer your player by calling ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.pause()")," without the need to add a ",Object(a.b)("inlineCode",{parentName:"p"},"PlayerView"),".\nPlayerView can be set later, when it is appropriate. For example, a news feed like application’s ",Object(a.b)("inlineCode",{parentName:"p"},"PlayerView"),"s will be in a ",Object(a.b)("inlineCode",{parentName:"p"},"RecyclerView"),"."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"@Override\nprotected void onResume() {\n    super.onResume();\n    ustreamPlayer.setPlayerListener(playerListener);\n    ustreamPlayer.setErrorListener(errorListener);\n    ustreamPlayer.setProgressListener(progressListener);\n    ustreamPlayer.setViewerCountListener(viewerCountListener);\n    ustreamPlayer.setLogoClickListener(logoClickListener);\n    ustreamPlayer.setMetaDataListener(metaDataListener);\n    ustreamPlayer.setBufferingListener(bufferingListener);\n    ustreamPlayer.setPlayerView(playerView);\n    ustreamPlayer.attach();\n}\n")),Object(a.b)("p",null,"You also need to call ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.detach()")," in your Activity’s or Fragment’s ",Object(a.b)("inlineCode",{parentName:"p"},"onPause()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"onStop()")," callback, so your views can\nbe recycled properly."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"@Override\nprotected void onPause() {\n    ustreamPlayer.detach();\n    super.onPause();\n}\n")),Object(a.b)("p",null,"See the next section and the sample application for more details."),Object(a.b)("h3",null,"Changing content"),Object(a.b)("p",null,"Changing content on an already initialized player (Please note ",Object(a.b)("inlineCode",{parentName:"p"},"detach()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"attach()")," must be called to properly\nreinitialize views):"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"private void changeContent(ContentDescriptor nextContent) {\n    ustreamPlayer.detach();\n    ustreamPlayer.initWithContent(nextContent);\n    ustreamPlayer.connect();\n    ustreamPlayer.attach();\n}\n")),Object(a.b)("h2",null,"Step 8: Handle Player callbacks"),Object(a.b)("h3",null,"State flow of the Player SDK"),Object(a.b)("p",null,"This diagram represents the state flow of the Player SDK, the nodes are the states reported by the player, while the named edges\nare events that can be sent to the player. There is a decision in the flow that happens automatically based on the content\nselected (live or recorded)."),Object(a.b)("img",{src:"/images/android-state-flow-diagram-0.5.png",alt:"State flow diagram",title:"State flow diagram"}),Object(a.b)("h3",null,"Catching callbacks"),Object(a.b)("p",null,"There are eight different listeners that you can add to the Player SDK instance to receive callbacks. Some of these\nlisteners are mandatory, others are optional, but each listener represents a group of functionalities of of the Player SDK."),Object(a.b)("p",null,"The eight listeners are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"PlayerListener ",Object(a.b)("strong",{parentName:"li"},"(mandatory)")),Object(a.b)("li",{parentName:"ul"},"ErrorListener ",Object(a.b)("strong",{parentName:"li"},"(mandatory)")),Object(a.b)("li",{parentName:"ul"},"BufferingListener"),Object(a.b)("li",{parentName:"ul"},"ProgressListener"),Object(a.b)("li",{parentName:"ul"},"ViewerCountListener"),Object(a.b)("li",{parentName:"ul"},"LogoClickListener"),Object(a.b)("li",{parentName:"ul"},"MetaDataListener"),Object(a.b)("li",{parentName:"ul"},"MediaTrackChangeListener")),Object(a.b)("h4",null,"PlayerListener"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"PlayerListener")," is the most important listener, this is also a mandatory one, you must provide it, or you will receive\nan exception. The Player SDK’s state is observed through this interface."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"package tv.ustream.player.api;\n\n/**\n* Observes the state of the content playback.\n*\n* All callbacks represent mutually exclusive states.\n*/\npublic interface PlayerListener {\n\n    /**\n    * Called when the player is initialized.\n    * This is the initial state, and this is the state the player\n    * returns to after re-initialized with a new content.\n    * The Player SDK is not connected to the internet in this state.\n    */\n    void onInitialized();\n\n    /**\n    * Called when the player is stopped.\n    * This is the state the player returns to after a stop() or disconnect() call.\n    * The Player SDK is not connected to the internet in this state.\n    */\n    void onStopped();\n    \n    /**\n    * The requested live channel is not broadcasting, or the stream is not\n    * available in a playable format.\n    * Note: in this state, the player is still connected to IBM Video Streaming's servers,\n    * waiting for the stream to become online.\n    */\n    void onWaitingForContent();\n\n    /**\n    * Called when everything is ready to play the requested content.\n    * Note: At this point buffering of the content did not start yet\n    */\n    void onContentReady();\n\n    /**\n    * Called at playback paused or stopped.\n    */\n    void onPaused();\n\n    /**\n    * Called at playback start or restart.\n    */\n    void onPlaying();\n}\n")),Object(a.b)("h4",null,"ErrorListener"),Object(a.b)("p",null,"This is also a mandatory listener; the Player SDK reports all playback errors here. When an error occurs, the SDK will call\nthe corresponding callback, then it will return to the stopped state, notifying the application using\n",Object(a.b)("inlineCode",{parentName:"p"},"PlayerListener.onStopped()"),"."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"package tv.ustream.player.api;\n\n/**\n* Observes the errors that can possibly occur in the player.\n*\n* The callbacks are called when playback is not possible and each callback\n* represent a reason for the playback error.\n*/\npublic interface ErrorListener {\n    /**\n     * The requested recorded video is not available in a playable format.\n     */\n    void onContentNotPlayable();\n\n    /**\n     * The requested live channel or recorded video does not exist.\n     */\n    void onNoSuchContent();\n\n    /**\n     * The requested content requires a password authentication.\n     */\n    void onPasswordLock();\n\n    /**\n     * The requested content is restricted by age.\n     */\n    void onAgeLock();\n\n    /**\n     * The requested content requires a HashLock authentication\n     * or the provided Hash is invalid/expired.\n     */\n    void onHashLock();\n\n    /**\n     * The requested content can not be accessed in the current area.\n     */\n    void onGeoLock();\n\n    /**\n     * The requested content can not be accessed due to restrictions.\n     */\n    void onRestricted();\n\n    /**\n     * The provided IBM Video Streaming Player SDK key is invalid or this key is not authorized to\n     * access this content.\n     */\n    void onInvalidApiKey();\n\n    /**\n     * The broadcaster's viewer hours are spent. Receiving this callback means\n     * that Your clients will not be able to watch your streams at the moment.\n     */\n    void onViewerHourLimitLock();\n\n    /**\n     * Connection error.\n     */\n    void onConnectionError();\n\n    /**\n     * Unknown error.\n     */\n    void onUnknownError();\n}\n")),Object(a.b)("h4",null,"BufferingListener"),Object(a.b)("p",null,"This is an optional listener, notifying the application about buffering starts and stops. The player will resume its\nprevious operation when buffering is completed."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"package tv.ustream.player.api;\n\n/**\n* Observes background network communication's state\n*/\npublic interface BufferingListener {\n    \n    /**\n    * Called when the player does not have enough video frame to continue\n    * playing and it is started to download data from the server\n    */\n    void onBufferingStarted();\n    \n    /**\n    * Called when the player is finished receiving data from the server\n    * either if there is sufficient amount of data is received and the\n    * playback is continued or an error occurred.\n    */\n    void onBufferingStopped();\n}\n")),Object(a.b)("h4",null,"ProgressListener"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ProgressListener")," provides information about the content’s duration and progress. This is an optional listener.\nDuration and progress values are in milliseconds."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"package tv.ustream.player.api;\n\npublic interface ProgressListener {\n    void onPositionUpdated(long positionMs);\n    void onDurationUpdated(long durationMs);\n    void onDurationDisabled();\n}\n")),Object(a.b)("h4",null,"ViewerCountListener"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ViewerCountListener")," provides information about the content’s audience (all-time viewers and current concurrent viewers).\nThis is an optional listener."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"package tv.ustream.player.api;\n\n/**\n* Provides information about the current and total viewer numbers\n*/\npublic interface ViewerCountListener {\n\n    /**\n    * Update of current viewer number.\n    * @param viewers number of current viewers, display this on your layout\n    */\n    \n    void onCurrentViewersUpdated(long viewers);\n    \n    /**\n    * Current viewers module is disabled, remove the indicator from your\n    * layout.\n    */\n    void onCurrentViewersDisabled();\n    \n    /**\n    * Update of total viewer number.\n    * @param totalViewers number of all-time combined viewers, display this on\n    * your layout.\n    */\n    void onTotalViewersUpdated(long totalViewers);\n    \n    /**\n    * Total viewers module is disabled, remove the indicator from your\n    * layout.\n    */\n    void onTotalViewersDisabled();\n}\n")),Object(a.b)("h4",null,"LogoClickListener"),Object(a.b)("p",null,"The displayed logo has been clicked; you should open the URL in the callback’s parameter. This is an optional listener."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"package tv.ustream.player.api;\n\nimport java.net.URI;\n\n/**\n* Observes the click of the logo of a branded channel.\n*/\npublic interface LogoClickListener {\n\n    /**\n    * Called when the logo of the branded channel has been clicked.\n    *\n    * @param url The url which should be opened on a logo click.\n    */\n    void onLogoClick(URI url);\n    \n}\n")),Object(a.b)("h4",null,"MetaDataListener"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MetaDataListener")," provides updates of the content’s meta data, the callback is called when the metadata becomes available.\nThis is an optional listener."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),"package tv.ustream.player.api;\n\n/**\n* Observes the metaData of the content\n*/\npublic interface MetaDataListener {\n\n    /**\n    * Called when the content metadata becomes available\n    * (title, category, etc...).\n    */\n    void onMetaData(MetaData data);\n    \n    /**\n    * Called when the content's conversation settings become available.\n    * @param data Holder for the IRC chat and SocialStream settings.\n    */\n    void onChatAndSocialStreamData(ChatAndSocialStreamData data);\n}\n")),Object(a.b)("h4",null,"MediaTrackChangeListener"),Object(a.b)("p",null,"An optional listener to observe track changes in the player (audio, video, text)."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"onMediaTracksChanged(MediaTrackGroupHolder mediaTrackGroups)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"  - called when the tracks become available or change during playback.\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"onVideoTrackSelectionChanged(@Nullable MediaTrackSelection trackSelection)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"  - called when the selected video track is changed\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"onAudioTrackSelectionChanged(@Nullable MediaTrackSelection trackSelection)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"  - called when the selected audio track is changed\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"onTextTrackSelectionChanged(@Nullable MediaTrackSelection trackSelection)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"  - called when the selected text (subtitle / closed caption) track is changed\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"onVideoFormatChanged(MediaFormat videoFormat)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"  - called when the video format of the selected video track is changed\n")))),Object(a.b)("p",null,"The track selection can be controlled with following methods of ",Object(a.b)("inlineCode",{parentName:"p"},"UstreamPlayer"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"selectTrackForRenderer(MediaTrack mediaTrack, @Nullable int[] selectedFormatIndices)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"  - selects the supplied media track on the appropriate renderer.\n  The Formats identified with the `selectedFormatIndices`'s values will take part in the selection.\n  The latter parameter can be used to filter specific format for the selection, e.g. HD only.\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"selectDefaultTrack(MediaTrack.TrackType trackType)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"  - Commands the appropriate renderer for the provided TrackType to switch to the default mediaTrack.\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"disableRenderer(MediaTrack.TrackType trackType)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"  - Commands the appropriate renderer for the provided TrackType to disable rendering.\n")))),Object(a.b)("p",null,"For more details see javadoc in ",Object(a.b)("inlineCode",{parentName:"p"},"MediaTrackChangeListener")," and ",Object(a.b)("inlineCode",{parentName:"p"},"UstreamPlayer")," classes."),Object(a.b)("h3",null,"Interactive callbacks"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"onStopped()")," callback in ",Object(a.b)("inlineCode",{parentName:"p"},"PlayerListener")," indicate a full stop and disconnect from IBM Video Streaming’s servers. If the disconnect\nhappened due to an error, the appropriate callback of ",Object(a.b)("inlineCode",{parentName:"p"},"ErrorListener")," indicates the reason.\nSome of these errors can be resolved by you or the user of your application."),Object(a.b)("p",null,"Errors that can be resolved by user (or developer) interaction:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onPasswordLock()")," – Call ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.setPassword(password);")," then restart the playback by ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.play();"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onAgeLock()")," – Call ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.setBirthDate(date);")," then restart the playback by ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.play();"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onHashLock()")," – Call ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.setHash(hash);")," then restart the playback by ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.play();")))),Object(a.b)("p",null,"Transient errors:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onConnectionError()")," – There is a problem with the internet connection,",Object(a.b)("br",{parentName:"p"}),"\n","(most likely temporary) try again later by calling: ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.play();"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onUnknownError()")," – This indicates a problem that the Player SDK can’t determine,\n(most likely temporary) try again by calling: ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.play();"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onViewerHourLimitLock()")," – The broadcaster’s viewer hours are spent. This user can not watch the stream at the moment,\ntry again by calling: ",Object(a.b)("inlineCode",{parentName:"p"},"ustreamPlayer.play();")))),Object(a.b)("p",null,"Other errors:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onInvalidApiKey()")," – The provided IBM Video Streaming Player SDK key is not authorized to play this content. You need to create a\nnew Player SDK Factory instance to provide the correct key. The key needs to be set upon factory creation:\n",Object(a.b)("inlineCode",{parentName:"p"},"new UstreamPlayerFactory(USTREAM_PLAYER_SDK_KEY, context);"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onNoSuchContent()")," – The requested live channel or recorded video does not exist.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onContentNotPlayable()")," – The requested recorded video is not available in a playable format.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onGeoLock()")," – The requested content is not playable in the user’s current geo location.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"onRestricted()")," – There are security restrictions set for the channel, that does not enable the Player SDK to play\nthis content, or your channel has reached its maximum concurrent viewer number. The latter can be resolved by retrying\nlater, to resolve the former the channel’s settings must be modified."))),Object(a.b)("p",null,"These callbacks are found in ",Object(a.b)("inlineCode",{parentName:"p"},"tv.ustream.player.api.ErrorListener"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-android-development-process-mdx-9a38c6aca8b3ffefb27c.js.map