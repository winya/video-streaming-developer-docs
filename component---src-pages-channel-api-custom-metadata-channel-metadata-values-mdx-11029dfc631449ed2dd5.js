(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{o3vd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return i}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),l=a("XbGe");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={},c={_frontmatter:b},o=l.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(o,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Get all metadata values of a channel"),Object(n.b)("p",null,"Get all metadata values set for a selected channel."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"GET https://api.video.ibm.com/channels/{channel_id}/custom-metadata.json\n")),Object(n.b)("h3",null,"Parameters"),Object(n.b)("p",null,"This request has no parameters."),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pair."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"KEY"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"array"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Array of data for fields containing ",Object(n.b)("inlineCode",{parentName:"td"},"field_id")," and ",Object(n.b)("inlineCode",{parentName:"td"},"value"))))),Object(n.b)("p",null,"Example of a success response:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "metadata": [\n    {\n      "field_id": "7865",\n      "value": "some text"\n    },\n    {\n      "field_id": "7866",\n      "value": "false"\n    }\n  ]\n}\n')),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Channel not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(n.b)("h2",null,"Set channel metadata value"),Object(n.b)("p",null,"Set value of a custom field on a selected channel."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"PUT https://api.video.ibm.com/channels/{channel_id}/custom-metadata/{field_id}.json\n")),Object(n.b)("h3",null,"Parameters"),Object(n.b)("p",null,"The parameters for the PUT request:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"TYPE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"(mixed)",Object(n.b)("inlineCode",{parentName:"td"},"*")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"REQUIRED"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The metadata field value")))),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"*")," Data type may vary based on selected field."),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success, a response with HTTP status “204 No Content” is returned."),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"403 Forbidden"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Channel not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(n.b)("h2",null,"Remove channel metadata value"),Object(n.b)("p",null,"Remove value of a custom field on a selected channel."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"DELETE https://api.video.ibm.com/channels/{channel_id}/custom-metadata/{field_id}.json\n")),Object(n.b)("h3",null,"Parameters"),Object(n.b)("p",null,"This request has no parameters."),Object(n.b)("h3",null,"Success response"),Object(n.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),Object(n.b)("h3",null,"Error responses"),Object(n.b)("p",null,"Possible error responses:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"403 Forbidden"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"404 Not Found"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"not_found")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Channel not found")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-custom-metadata-channel-metadata-values-mdx-11029dfc631449ed2dd5.js.map