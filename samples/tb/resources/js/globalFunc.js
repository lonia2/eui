window.devMode=true;var globalVar={contryTimeZone:[{code:"kr",condition:0},{code:"us",condition:-14},{code:"jp",condition:0},{code:"ru",condition:-6},{code:"vn",condition:-2},{code:"cn",condition:11},{code:"hk",condition:11},{code:"sg",condition:11}],csrfToken:"",HurlPrefixOz:"http://g1.htns.com/",localeLang:"en",webosShowWindowId:null,currentAjaxButtonId:null,SYSSETTING:{},HurlPrefix:function(){if(window.devMode){return"http://127.0.0.1:8080/"}else{return"/"}}(),OZViewer:"Util.globalInitDataLoading 내부에서 설정함.",connection_servlet:"Util.globalInitDataLoading 내부에서 설정함.",connection_pcount:"",connection_args1:"",globalPopupMsgCase:[{type:"OE",id:"FMS020110T"},{type:"OI",id:"FMS020213T"},{type:"AE",id:"FMS010108T"},{type:"AI",id:"FMS010204T"},{type:"LE",id:"FMS030103T"},{type:"LI",id:"FMS030203T"}]};if(!window.console||typeof console==="undefined"){var console={log:function(a){},warn:function(a){}}}var hblFunc=function(e,g,d){var h=Ext.ComponentQuery.query("webdesktop")[0],b=h.getViewModel().getStore("startmenus"),a=b.findRecord("ID",d,0,false,false,true);var f=h.getWindow(d);call=function(){f.down("hpopuptrigger[name=HBL_NO]").setValue(e);var i=f.down("#globalHBLSearchBtn");i.handler.call(i,i)};var c=function(){f=h.createCustomWindow(a.getData());if(f.active){call()}else{Ext.defer(function(){call()},1000)}};if(f){Ext.Msg.show({title:"Warning",buttons:Ext.Msg.YESNO,icon:Ext.Msg.QUESTION,message:Util.getLocaleValue("F000000227"),fn:function(i){if(i==="yes"){c()}}})}else{c()}};var fileClick=function(e,b,a){var c=new FormData();var d=new XMLHttpRequest();c.append("S_FUNC_CODE",e);c.append("FILE_MGT_CODE",b);d.open("POST",encodeURI(globalVar.HurlPrefix+"api/file/download"));d.responseType="arraybuffer";if(!window.devMode){d.setRequestHeader("X-CSRF-TOKEN",globalVar.csrfToken)}d.onload=function(){if(this.status===200){var i=d.getResponseHeader("Content-Type");var h=new Blob([this.response],{type:i});if(typeof window.navigator.msSaveBlob!=="undefined"){window.navigator.msSaveBlob(h,filename)}else{var f=window.URL||window.webkitURL;var j=f.createObjectURL(h);if(a){var g=document.createElement("a");if(typeof g.download==="undefined"){window.location=j}else{g.href=j;g.download=a;document.body.appendChild(g);g.click()}}else{window.location=j}setTimeout(function(){f.revokeObjectURL(j)},100)}}};d.send(c)};