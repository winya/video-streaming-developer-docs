(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"+1WA":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),l=n("XbGe");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={},i={_frontmatter:b},o=l.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(o,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Videos can be uploaded by FTP. To upload a file you must do the following steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Initiate an upload process by an API call. In the response you can find the details needed to connect through FTP."),Object(a.b)("li",{parentName:"ol"},"Upload the video."),Object(a.b)("li",{parentName:"ol"},"When the upload is finished, send a “file in place” signal, which tells the IBM server that it can start to process the file."),Object(a.b)("li",{parentName:"ol"},"Call the API to check the status of processing the video.")),Object(a.b)("h2",null,"Initialize an upload"),Object(a.b)("p",null,"Initiate the upload process."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"POST https://api.video.ibm.com/channels/{channel_id}/uploads.json?type=videoupload-ftp\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The parameters for the POST request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"title")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Video title")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"description")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Video description")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"protect")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Video protection level. Supported values: ",Object(a.b)("inlineCode",{parentName:"td"},"public"),", ",Object(a.b)("inlineCode",{parentName:"td"},"private"))))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the key-value pairs containing the details of the FTP access."),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "protocol": "ftp",\n  "host": "red44.ustream.tv",\n  "port": 21,\n  "path": "/1_12345_12345678901234",\n  "user": "1_12345_1234567890",\n  "password": "ftppw",\n  "videoId": "52177361",\n  "url": "ftp://1_1234_1234567890:ftppw@red44.ustream.tv/1_12345_12345678901234"\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"protect_level_invalid")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Invalid protect level has been sent")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Channel was not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Upload the video file"),Object(a.b)("p",null,"Use the credentials you received in the response when you initialized the process to upload your video file to IBM servers. Once you log in to the FTP server, you should put your file to the root, under a name that matches with the ",Object(a.b)("inlineCode",{parentName:"p"},"path")," value of the response, followed by the extension."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"url")," part of the response makes it easier to transfer files, with a single FTP command. For example, if you have a file called ",Object(a.b)("inlineCode",{parentName:"p"},"test.mov"),", you can use the following FTP command to upload it:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"ftp -u\nftp://1_1234_1234567890:ftppw@red44.ustream.tv/1_12345_12345678901234.mov\ntest.mov\n")),Object(a.b)("p",null,"Or using the cURL command:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"curl \\\n  ftp://1_1234_1234567890:ftppw@sjc03-vod-upload02.services.video.ibm.com/1_12345_12345678901234 \\\n  -v -T test.mov\n")),Object(a.b)("p",null,"Supported file extensions are: mp4, mov, flv."),Object(a.b)("p",null,"Don’t forget to set your FTP client to binary file transfer mode, before uploading the video file."),Object(a.b)("h2",null,"Send “file in place” signal"),Object(a.b)("p",null,"A “file in place” signal tells to our server that it can start to process the file."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"PUT https://api.video.ibm.com/channels/{channel_id}/uploads/uploads/{video_id}.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The parameters for the PUT request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"status")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Upload status (the value should be ",Object(a.b)("inlineCode",{parentName:"td"},"ready"),")")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success, a response with HTTP status “202 Accepted” is returned."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Channel or video was not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h3",null,"Check status of processing"),Object(a.b)("p",null,"Returns the status of processing the specific video."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channel_id}/uploads/uploads/{video_id}.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"This request has no parameters."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with a key-value pair."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"status")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The current status. Possible values: ",Object(a.b)("inlineCode",{parentName:"td"},"initiated"),", ",Object(a.b)("inlineCode",{parentName:"td"},"transferred"),", ",Object(a.b)("inlineCode",{parentName:"td"},"queued"),", ",Object(a.b)("inlineCode",{parentName:"td"},"pending"),", ",Object(a.b)("inlineCode",{parentName:"td"},"transcoding"),", ",Object(a.b)("inlineCode",{parentName:"td"},"complete"),", ",Object(a.b)("inlineCode",{parentName:"td"},"error"))))),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Channel was not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",r({parentName:"tr"},{align:null})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-video-management-upload-videos-mdx-53e4a389e72d782eb313.js.map