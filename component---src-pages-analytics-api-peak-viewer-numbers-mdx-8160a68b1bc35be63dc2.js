(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{j8gW:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("XbGe");n("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},i={_frontmatter:l},p=r.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,b({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Live and recorded peak concurrent viewership of all content for a given time period"),Object(a.b)("p",null,"Gives the number of peak concurrent viewers across live or on demand content for a specific timeframe."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://analytics-api.video.ibm.com/v1/peak-viewer-numbers\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The query parameters for the GET request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null})," DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"granularity")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"hour"),", ",Object(a.b)("inlineCode",{parentName:"td"},"minute")," ",Object(a.b)("inlineCode",{parentName:"td"},"day"),", ",Object(a.b)("inlineCode",{parentName:"td"},"month"),", the default value is ",Object(a.b)("inlineCode",{parentName:"td"},"minute"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"date_time_from")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Start date and time for a period in ISO8601 format")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"date_time_to")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"End date and time for a period in ISO8601 format")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"_page")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page number (value is 1 by default)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"_limit")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page size (value is 10 by default, max. 10 000)")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with an array under a ",Object(a.b)("inlineCode",{parentName:"p"},"data")," key. The elements of the array contain every data point wrapped in a ",Object(a.b)("inlineCode",{parentName:"p"},"PeakSeries")," object\nmatching the query parameters. Each object has the following attributes under the ",Object(a.b)("inlineCode",{parentName:"p"},"attributes")," key:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"content_type")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Type of the content, either ",Object(a.b)("inlineCode",{parentName:"td"},"live")," or ",Object(a.b)("inlineCode",{parentName:"td"},"recorded"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"content_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Live or recorded ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"time")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Date and time for the datapoint in ISO8601 format")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"value")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Number of peak viewers")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "data": [\n    {\n      "attributes": {\n        "content_type": "live",\n        "content_id": 238589,\n        "time": "2020-07-16T00:00:00+01:00",\n        "value": 11\n      },\n      "type": "PeakSeries"\n    }\n  ],\n  "pagination": {\n    "count": 10,\n    "first": {\n      "href": "/peak-viewer-numbers?_page=1&_limit=1"\n    },\n    "last": {\n      "href": "/peak-viewer-numbers?_page=10&_limit=1"\n    },\n    "next": {\n      "href": "/peak-viewer-numbers?_page=2&_limit=1"\n    },\n    "prev": null,\n    "self": {\n      "href": "/peak-viewer-numbers?_page=1&_limit=1"\n    }\n  }\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Validation of the parameters has failed, the response contains a detailed explanation")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Resource was not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Live or recorded peak concurrent viewer number of all or given content ids for a given time period"),Object(a.b)("p",null,"Gives the number of peak concurrent viewers across live or on demand content for a specific timeframe or limits this to just one content, either live or on demand, based on the ID of the channel or recorded video."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://analytics-api.video.ibm.com/v1/peak-viewer-numbers/{content_type}\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The query parameters for the GET request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null})," DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"content_type")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Type of the content, either ",Object(a.b)("inlineCode",{parentName:"td"},"live")," or ",Object(a.b)("inlineCode",{parentName:"td"},"recorded"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"granularity")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"hour"),", ",Object(a.b)("inlineCode",{parentName:"td"},"minute")," ",Object(a.b)("inlineCode",{parentName:"td"},"day"),", ",Object(a.b)("inlineCode",{parentName:"td"},"month"),", the default value is ",Object(a.b)("inlineCode",{parentName:"td"},"minute"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"date_time_from")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Start date and time for a period in ISO8601 format")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"date_time_to")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"End date and time for a period in ISO8601 format")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"content_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"A list of comma separated IDs")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"_page")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page number (value is 1 by default)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"_limit")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page size (value is 10 by default, max. 10 000)")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with an array under a ",Object(a.b)("inlineCode",{parentName:"p"},"data")," key. The elements of the array contain every data point wrapped in a ",Object(a.b)("inlineCode",{parentName:"p"},"PeakSeries")," object\nmatching the query parameters. Each object has the following attributes under the ",Object(a.b)("inlineCode",{parentName:"p"},"attributes")," key:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"content_type")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Type of the content, either ",Object(a.b)("inlineCode",{parentName:"td"},"live")," or ",Object(a.b)("inlineCode",{parentName:"td"},"recorded"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"content_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Live or recorded ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"time")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Date and time for the datapoint in ISO8601 format")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"value")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Number of peak viewers")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "data": [\n    {\n      "attributes": {\n        "content_type": "live",\n        "content_id": 238589,\n        "time": "2020-07-16T00:00:00+01:00",\n        "value": 11\n      },\n      "type": "PeakSeries"\n    }\n  ],\n  "pagination": {\n    "count": 10,\n    "first": {\n      "href": "/peak-viewer-numbers/live?_page=1&_limit=1"\n    },\n    "last": {\n      "href": "/peak-viewer-numbers/live?_page=10&_limit=1"\n    },\n    "next": {\n      "href": "/peak-viewer-numbers/live?_page=2&_limit=1"\n    },\n    "prev": null,\n    "self": {\n      "href": "/peak-viewer-numbers/live?_page=1&_limit=1"\n    }\n  }\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Validation of the parameters has failed, the response contains a detailed explanation")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Resource was not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Recorded peak viewership of all content on the defined channels for a given time period"),Object(a.b)("p",null,"Gives the number of peak concurrent viewers for on demand content for a specific timeframe on the defined channels."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://analytics-api.video.ibm.com/v1/peak-viewer-numbers/{content_type}\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The query parameters for the GET request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null})," DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"channel_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"A list of comma separated IDs")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"granularity")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"hour"),", ",Object(a.b)("inlineCode",{parentName:"td"},"minute")," ",Object(a.b)("inlineCode",{parentName:"td"},"day"),", ",Object(a.b)("inlineCode",{parentName:"td"},"month"),", the default value is ",Object(a.b)("inlineCode",{parentName:"td"},"minute"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"date_time_from")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Start date and time for a period in ISO8601 format")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"date_time_to")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"End date and time for a period in ISO8601 format")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"_page")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page number (value is 1 by default)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"_limit")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page size (value is 10 by default, max. 10 000)")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with an array under a ",Object(a.b)("inlineCode",{parentName:"p"},"data")," key. The elements of the array contain every data point wrapped in a ",Object(a.b)("inlineCode",{parentName:"p"},"PeakSeries")," object\nmatching the query parameters. Each object has the following attributes under the ",Object(a.b)("inlineCode",{parentName:"p"},"attributes")," key:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"content_type")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Type of the content, for this endpoint ",Object(a.b)("inlineCode",{parentName:"td"},"recorded")," only")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"content_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video ID")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"time")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Date and time for the datapoint in ISO8601 format")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"value")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Number of peak viewers")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "data": [\n    {\n      "attributes": {\n        "content_type": "recorded",\n        "content_id": 238589,\n        "time": "2020-07-16T00:00:00+01:00",\n        "value": 11\n      },\n      "type": "PeakSeries"\n    }\n  ],\n  "pagination": {\n    "count": 10,\n    "first": {\n      "href": "/peak-viewer-numbers/live?_page=1&_limit=1"\n    },\n    "last": {\n      "href": "/peak-viewer-numbers/live?_page=10&_limit=1"\n    },\n    "next": {\n      "href": "/peak-viewer-numbers/live?_page=2&_limit=1"\n    },\n    "prev": null,\n    "self": {\n      "href": "/peak-viewer-numbers/live?_page=1&_limit=1"\n    }\n  }\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Validation of the parameters has failed, the response contains a detailed explanation")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Resource was not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-analytics-api-peak-viewer-numbers-mdx-8160a68b1bc35be63dc2.js.map