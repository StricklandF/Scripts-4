
/***************************************
2.0
脚本功能：知乎 盐故事+知识+书刊+测评+去部分广告
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2023-02-01
问题反馈：QQ+55749353
作者QQ:55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
作者忠告: 如果你是大佬请不要盗用此包，创作不易谢谢各位，
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法

**************************************

[mitm]

hostname = *1*1*,120.220.198.*,120.222.234.*,103.41.167.*,www.zhihu.com, api.zhihu.com, zhuanlan.zhihu.com, appcloud2.zhihu.com, m-cloud.zhihu.com,116.136.170.105

[rewrite_local]

^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2 url reject-dict
^http[s]?:\/\/.*zhihu\.(com|cn)\/(appview\/v2\/answer|sku\/reversion_sku_ext\?sku_id|remix-web\/paid_columns|km_player\/album|market\/paid_column|appview\/p|api\/v3\/books).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/xuany.js
^http[s]?:\/\/api\.zhihu\.com\/(people\/self|unlimited\/go\/my_card).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/zhu.js

***************************************/
/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', xlukf = '__0xf48ad',  __0xf48ad=['O8OrwpTDqg==','w7nDjBVcw5Q=','w4EuwrFybg==','TsKfw4zCjm4KRBfDmA==','QsO4QMO9w7s=','wrXDon1sw4E=','w40nwqFSKg==','ccOvwp9wwqxmfA==','M8Oew4Z+','ERbDrMONwpU4fw==','wrXDisOYPnA=','a2JIBBROaw==','w6DCnj3CqcKz','w65DG8OewpA0Ng==','fcKqwozDuVU=','dyjCmGXDrG7Cgg==','e8Ouwpds','RsOrw4XDgMKewqRc','KcOywoXDocKBL3rDoGU=','w4wtacORw5MEcQ==','woxLOA==','w5cjwrDCmX8=','wp3DjE19w6E=','w5pmIcOcwrE=','w4klw6suwrw=','w7rCiR3Dgx4=','fMO0ZMO/w6Q=','KxTDoMO7wqg=','NMKOw5Fzw7s=','FsKNw4J2w4U=','WsOMwqZXwq4=','wpfDpFdaw5w=','woxBNsKhaw==','w7fDkMKWNMKm','wqDCuwnCtxM=','w6DDl8KzIsKu','XzjCncOUcg==','cMOXZsOxw60=','N3BWesOW','JEvCpzXDsg==','w4fChxXDjBA=','w7nCgiHDnnQ=','QsKbw7jDl0A=','w7fDjxNRw5A=','wqDDnMK5w7fDoQ==','w43DrcOY','AcOPw5F8eA==','I0zCqD7DgQ==','w5oWUcOAw7g=','woLDjsO1','XcK0wow=','HMOuwr4=','w73DiB4=','wpfDocKVw7PDh8KQSEXCh1g4CH7CkcKdVw==','w6l3wow6K8Okw7/CkiHCs2rDmsKAwpXDvGHDhibCq3/ChyoCbcOaZcObwqtuQcKPUMOGGmHDrVPDgnPCqcKPWMKow4PClcOcwpnCvMKWwqxUdnjCiBTCuMOYOcKjXB7Dqg==','w6fCux9W','J8OXw5V5Tg==','K8O0wpQHwr8=','Z8Knw4Y=','bcKQw6k=','IcO8w4N/w7Z2LQYnw6cpw6LCsMKlUMKmwro=','IjjDq8Obwq4=','FTbClCHClQ==','LsKEH8KLw5g=','wpXDssOBEGU=','JErCjQrDrQ==','asKKwo3DgE8=','YVxIMiw=','RAbCn3PDlw==','w6/CogJow7U=','YsOBwq3Dtks=','TsKSw59+Bg==','BlnClznDkQ==','w63CshBKw64=','w4wPUcO4w6U=','wok+NyoJ','XMKUwqbDhlQ=','woARJB8z','w4Amw740wrY=','w6jDmxRH','w6bCmAPDi1o=','woHDpjQySg==','wo0tMyQ=','Z8KQw6jDvHM=','dsOAwq5SYQ==','CyDDpsOxwow=','wpzCvzPClyM=','w7glwqdBBw==','YcOwwp1qwrc=','J8OiwocXwrvCrz/ClHI=','w7FpLMKQw6g=','w4MPw7U=','wqfDoCwpYg==','wrTDpDwy','w7zCpyTDnA==','KcO4wpTDq8KD','Y8OTw7s=','w7fDtcKgCsKSHQ==','QAzCt8OkXCI=','A8KYw7s=','fsKKw6E=','w4k0dix2w4EtFsOrwoDDk8K8Sw==','bUpy','w6/DsQ4=','w4jDlyRRw74=','w7ISwrpFSQ==','ZS/CsHLDgQ==','NEzCjB7DgA==','eMOoTMOuw6g=','acOdw4zDlcKZ','w7Y5w6Mawr8=','f8OEU8OFw6U=','w4Yvwq99Ow==','w54qQcOGw74=','w6UjYsO0w7A=','w4XDtsKBB8Ky','wrdOw5TDkxQ=','VcK4w75ewqs=','ScKzw53CqVs=','NMKDw7F2w40=','w6dPP8Kxw4g=','wp7CqQnCliw=','w6k2wqR1Gg==','wrzCghbCoxc=','aMOHwpBIZA==','w7nCpiU=','w7TCvMKRH8KVwpPCuw==','SsKaw4x3D20gw7fDqg==','woNLMcKcb3Ap','w4YsYcON','OsKYw51mw7jDuxE=','f8OSwp5Udw==','w6Z0I8KAw6LDtMKr','ZsKiw69/woU=','wpdEw7fDkxlWwoo=','cTXChHnDsQ==','L8OlwojDt8KeN3Y=','ZcOhwoNt','wrVMw6HDlzg=','wohdCcK/RA==','w5MTwpdycw==','QsK6wrrDi3s=','AMKqC8Knw6g=','w7XCvMKbFQ==','WRvCtQ==','w59cJcO7wr0=','JkVDYMOSw50o','Z8KuwoHDj33DisONwo3CjsK8Ui7ClEnDr8Oww6zCo8Kbwq3CtsKCw7MywoImKsK/a14NwpFh','NsOaw4R8QXEC','fmRWKA9bfjLDoBjCjg==','w6XCtsKPAMKbwpzCuw==','w6rCmjLCucO2w7wDwp5zS+S8s+S6vQ==','YMOlwoFvwqJpfA==','w6wxwq3Cu1VbwoETw5zDlcO0Gg==','w50nd8OOw50LcQ==','dHrCiyjDscOGCMKGwoQ3wpsbMC3DkeeCsuWHkea0k+WKm+S9huiDmxdx6aOQ6YOr','wqzCoR9Ww4E/w6fDqDDDk8ODwrUuOsOoIsO+ST3Cm+WKl+acvw==','acOSwoxNcXrCpg==','L8K6wprDnlbDnsONwr7DmcO0HGTDmh3CvcOrwqLDuMOEwqrCosOAwrluwqEiN8KEbR42wrlVw7fDuXYAKTrDpcOpfcKQwrDCpmtMwqPCqBU8w4jCnMODQ8KrUXDCrnQwF8KJAMKCwrgtT8KHFlE8w7fClFbDo2s0w7wgw6TCo1rCosKoWTIyK8KHGk9QwoMGw5/Cn8KQwoxd','wpscwqMrw7RQwonDgzoHw7zDvcKQwpQp','w7DDgcO5','cTXCgg==','eMK1wojDmkTDlsORwoTDiA==','w4/DkMORd8OUTsOGwqLDmRgfw5fDuAU=','w5/CjyA=','w53DqT8=','54ut5p6P5Y2M77ySw59Q5L615ayW5p6l5b2O56ul77+16L2W6K+H5paK5o6z5oqA5LuV55iO5bSd5LyG','5Yit6Zq/54qk5p6T5Y+V776zw5XCkuS+tuWsnOadr+W9v+eptw==','wqfDjcOXPmEKw5d3EMKheBA2eDvDhw==','VCZ6XFsIJmjDuH3Cj8KMAMKZLcOUwrdWw6/DoMK+G0DDuyDDr8OpwrrDiTMkIy7DmVrCgXzCusOPw4hhWzbDnVpgeSjDjxzDgMOCw77CqcK2LnAWw7Uiw7kZ','w6x1JMKH','RcO1Q8Ohw7I=','e8OTc8OPw5U=','w4LDgGXCgUzDpA==','QMOoTMOrw6jDocKjw4U=','RMOxw4k=','GhLDuA==','w4MFw7wwwrJE','wrLCh2/CoMOmwroVwoA5SRl7woQ=','ZcKLw6zCm2w=','fsKrwoDDllY=','w5rDqcODwr5L','w6TCjzlVw54=','wp/CtBLCpQc=','w4fCpMKwDcKT','w6/CkTFEw6I=','OEVaQsOY','I21bScOy','ZsOowppswqU=','wqHDqyozZw==','wo1DNsKiTQ==','ZsOjw5nDosKp','PsKjw7hcw50=','acOLw73DvMK7','BXLCqTDDgw==','wq1Tw50=','wqvDusKiw7jDvw==','wrfDtcKfw4rDpg==','w6vDg2vCvno=','wrXDiT8=','FcKWIQ==','X8OfUg==','w7XDmcKm','5YmS6Zid54uK5p6S5YyN772YcMKI5Lyo5a255pyA5byI56uG','C8O3wpEwwp0=','w4EYwrnCqkY=','wqZONcKNVw==','w4h5OsOJwq8=','wp3CnwnCkB0=','PMOqw4BgRQ==','TRnCqcOvUQ==','SsKXw5/Ch2c=','w7bDiRF2w6g=','TsO3w6PDlcK2','wpTDqcOywrUH','D8Kfw6Vmw7U=','wqLClh/ClC0=','wrdcw7vDljI=','w4oywr5P','BhrDpMOcwpw=','bsOLw6XDm8Kd','WAzCqsO3','woLDkx8Taw==','woXDlcORNHE=','FRrCoRbCjQ==','wpgmAxcj','wqXDssO1wrUb','DMKgw5c=','wosEJD8c','w6tcAMK9w4I=','wp/Dk8K2w57DvA==','wqDDiMOJMWw=','wqlTPsK6aA==','w78sw5YDwqQ=','w5Ejwp5QDw==','w53CmMKNDcKW','e8K1w7rDr1Q=','bcK7w5xcNA==','w6sURMOUw4s=','wqXDqnZsw5c=','DMKoAsK6w75vew==','a8K0w6xkCA==','woRfw53DsT4=','YcOpw5HDscKf','DcOIw5VFSA==','w6HCnRzCtMKg','bcK2w6BiOw==','w4sFwqhIBg==','w6HDtcO4aMOC','w5DDs8KIOcKY','TwbCt8OwRyY5','w4HCkm3CrkZ1ZsOreScNdQLCuMOrGR0=','wrrCuhTCsBE=','w7ZrIcKaw7k=','OE9U','asOYwr/Dkw=='];(function(_0x1f185b,_0x46858d){var _0x24b880=function(_0xb636ee){while(--_0xb636ee){_0x1f185b['push'](_0x1f185b['shift']());}};var _0x4f8942=function(){var _0x29a931={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1607e9,_0x386103,_0x148443,_0x2a89c6){_0x2a89c6=_0x2a89c6||{};var _0x2bc925=_0x386103+'='+_0x148443;var _0x169dd0=0x0;for(var _0x169dd0=0x0,_0x458af4=_0x1607e9['length'];_0x169dd0<_0x458af4;_0x169dd0++){var _0x472f21=_0x1607e9[_0x169dd0];_0x2bc925+=';\x20'+_0x472f21;var _0x4ba154=_0x1607e9[_0x472f21];_0x1607e9['push'](_0x4ba154);_0x458af4=_0x1607e9['length'];if(_0x4ba154!==!![]){_0x2bc925+='='+_0x4ba154;}}_0x2a89c6['cookie']=_0x2bc925;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3e2798,_0x49f340){_0x3e2798=_0x3e2798||function(_0x362d0c){return _0x362d0c;};var _0x554930=_0x3e2798(new RegExp('(?:^|;\x20)'+_0x49f340['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x4b2630=function(_0x2e050e,_0x4e1ea6){_0x2e050e(++_0x4e1ea6);};_0x4b2630(_0x24b880,_0x46858d);return _0x554930?decodeURIComponent(_0x554930[0x1]):undefined;}};var _0x477357=function(){var _0x564047=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x564047['test'](_0x29a931['removeCookie']['toString']());};_0x29a931['updateCookie']=_0x477357;var _0x29fbb0='';var _0x52ff95=_0x29a931['updateCookie']();if(!_0x52ff95){_0x29a931['setCookie'](['*'],'counter',0x1);}else if(_0x52ff95){_0x29fbb0=_0x29a931['getCookie'](null,'counter');}else{_0x29a931['removeCookie']();}};_0x4f8942();}(__0xf48ad,0x18f));var _0x2e1d=function(_0x316bf5,_0x1f6ed0){_0x316bf5=_0x316bf5-0x0;var _0x55dd67=__0xf48ad[_0x316bf5];if(_0x2e1d['initialized']===undefined){(function(){var _0x170bd9=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1e399b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x170bd9['atob']||(_0x170bd9['atob']=function(_0x46f3a6){var _0x219063=String(_0x46f3a6)['replace'](/=+$/,'');for(var _0x6b96c8=0x0,_0x57a908,_0x16d106,_0x2cf936=0x0,_0xadf4='';_0x16d106=_0x219063['charAt'](_0x2cf936++);~_0x16d106&&(_0x57a908=_0x6b96c8%0x4?_0x57a908*0x40+_0x16d106:_0x16d106,_0x6b96c8++%0x4)?_0xadf4+=String['fromCharCode'](0xff&_0x57a908>>(-0x2*_0x6b96c8&0x6)):0x0){_0x16d106=_0x1e399b['indexOf'](_0x16d106);}return _0xadf4;});}());var _0x433c32=function(_0xc8bd99,_0x593170){var _0x5e7556=[],_0xb802e1=0x0,_0x13d376,_0x1298d1='',_0x3d6f63='';_0xc8bd99=atob(_0xc8bd99);for(var _0x4a880a=0x0,_0x38cf68=_0xc8bd99['length'];_0x4a880a<_0x38cf68;_0x4a880a++){_0x3d6f63+='%'+('00'+_0xc8bd99['charCodeAt'](_0x4a880a)['toString'](0x10))['slice'](-0x2);}_0xc8bd99=decodeURIComponent(_0x3d6f63);for(var _0x185f3b=0x0;_0x185f3b<0x100;_0x185f3b++){_0x5e7556[_0x185f3b]=_0x185f3b;}for(_0x185f3b=0x0;_0x185f3b<0x100;_0x185f3b++){_0xb802e1=(_0xb802e1+_0x5e7556[_0x185f3b]+_0x593170['charCodeAt'](_0x185f3b%_0x593170['length']))%0x100;_0x13d376=_0x5e7556[_0x185f3b];_0x5e7556[_0x185f3b]=_0x5e7556[_0xb802e1];_0x5e7556[_0xb802e1]=_0x13d376;}_0x185f3b=0x0;_0xb802e1=0x0;for(var _0x65e85a=0x0;_0x65e85a<_0xc8bd99['length'];_0x65e85a++){_0x185f3b=(_0x185f3b+0x1)%0x100;_0xb802e1=(_0xb802e1+_0x5e7556[_0x185f3b])%0x100;_0x13d376=_0x5e7556[_0x185f3b];_0x5e7556[_0x185f3b]=_0x5e7556[_0xb802e1];_0x5e7556[_0xb802e1]=_0x13d376;_0x1298d1+=String['fromCharCode'](_0xc8bd99['charCodeAt'](_0x65e85a)^_0x5e7556[(_0x5e7556[_0x185f3b]+_0x5e7556[_0xb802e1])%0x100]);}return _0x1298d1;};_0x2e1d['rc4']=_0x433c32;_0x2e1d['data']={};_0x2e1d['initialized']=!![];}var _0x568d8c=_0x2e1d['data'][_0x316bf5];if(_0x568d8c===undefined){if(_0x2e1d['once']===undefined){var _0x492804=function(_0x2f3991){this['rc4Bytes']=_0x2f3991;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x492804['prototype']['checkState']=function(){var _0x486069=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x486069['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x492804['prototype']['runState']=function(_0x1aa13a){if(!Boolean(~_0x1aa13a)){return _0x1aa13a;}return this['getState'](this['rc4Bytes']);};_0x492804['prototype']['getState']=function(_0x1a5d94){for(var _0x446280=0x0,_0xdad801=this['states']['length'];_0x446280<_0xdad801;_0x446280++){this['states']['push'](Math['round'](Math['random']()));_0xdad801=this['states']['length'];}return _0x1a5d94(this['states'][0x0]);};new _0x492804(_0x2e1d)['checkState']();_0x2e1d['once']=!![];}_0x55dd67=_0x2e1d['rc4'](_0x55dd67,_0x1f6ed0);_0x2e1d['data'][_0x316bf5]=_0x55dd67;}else{_0x55dd67=_0x568d8c;}return _0x55dd67;};var _0x14de2a=$response[_0x2e1d('0x0','KZGQ')];var _0x5982ac=$request[_0x2e1d('0x1','@t0r')];setInterval(function(){var _0x2b622d={'RpPVB':function _0x4b3f83(_0x485ff3){return _0x485ff3();}};_0x2b622d[_0x2e1d('0x2','ff!w')](_0x31618c);},0xfa0);_0x14de2a=_0x14de2a[_0x2e1d('0x3','gbiw')](/jump_url":"[^"]+/g,_0x2e1d('0x4','T5nt'))[_0x2e1d('0x5',']ySL')](/vip_type":\d/g,_0x2e1d('0x6','g@2M'))[_0x2e1d('0x7','KZGQ')](/name":"[^"]+/g,_0x2e1d('0x8','7B$!'))[_0x2e1d('0x9','z01i')](/is_vip":\w+/g,_0x2e1d('0xa','e[kB'))[_0x2e1d('0xb','E@(k')](/"button_text":"[^"]+/g,_0x2e1d('0xc','lA[m'))[_0x2e1d('0x3','gbiw')](/"title":"[^"]+/g,_0x2e1d('0xd','1n&X'))[_0x2e1d('0xe','^^nu')](/"avatar_url":"[^"]+/g,_0x2e1d('0xf','T5nt'));$done({'body':_0x14de2a});;(function(_0x1a8d9e,_0x3868ac,_0x3eeb1b){var _0x325453={'NlCpr':_0x2e1d('0x10','fGm1'),'icEEi':function _0x184b5c(_0x33faf0,_0x3f10cb){return _0x33faf0!==_0x3f10cb;},'jZOws':_0x2e1d('0x11','NRq6'),'PwOai':_0x2e1d('0x12','qv@f'),'aDGfO':function _0x4a4728(_0x2ae401,_0x25b588){return _0x2ae401!==_0x25b588;},'leiNk':_0x2e1d('0x13','T5nt'),'wMhEA':function _0x4ef76a(_0x194e7b,_0x4e1721){return _0x194e7b===_0x4e1721;},'thkof':_0x2e1d('0x14','NRq6'),'bndob':function _0x29d8d0(_0x1cb0a0,_0x339671){return _0x1cb0a0===_0x339671;},'mgiMM':_0x2e1d('0x15','1n&X'),'CgrQX':_0x2e1d('0x16','BTp@'),'gTKIJ':function _0x1ec53d(_0x2377dc,_0x216979){return _0x2377dc+_0x216979;},'LOVOJ':_0x2e1d('0x17','NRq6'),'SjWlF':_0x2e1d('0x18','T5nt'),'HLWTm':function _0x1cac2a(_0x1727ac,_0x49df88,_0x3e750e){return _0x1727ac(_0x49df88,_0x3e750e);},'RaBTC':_0x2e1d('0x19','4g2A'),'rmIpZ':_0x2e1d('0x1a','g@2M'),'WJTqN':function _0x3a702b(_0x2ef64e,_0x7a324b){return _0x2ef64e(_0x7a324b);},'fEyyz':_0x2e1d('0x1b','QSNx'),'mAyEi':function _0xa4cec4(_0x4446aa,_0x2b3bec){return _0x4446aa+_0x2b3bec;},'ZiFwx':_0x2e1d('0x1c','fM3F'),'YmbER':function _0x227f87(_0x315674,_0x4e1ea6){return _0x315674+_0x4e1ea6;},'mybfl':_0x2e1d('0x1d','Ri]O'),'OzqcR':function _0x266eab(_0x45c4d9){return _0x45c4d9();},'xESWg':function _0x5b6cdb(_0xec57a3,_0x199da0){return _0xec57a3!==_0x199da0;},'sQDWZ':function _0x346c49(_0x4fbe2e,_0x392205){return _0x4fbe2e===_0x392205;},'UUTeg':_0x2e1d('0x1e','I#[w'),'dVaAR':_0x2e1d('0x1f','fM3F'),'VJDyq':_0x2e1d('0x20','W#$Y'),'cPeve':_0x2e1d('0x21','LF@8'),'rSYiw':function _0x288b96(_0x25407d,_0x2cdbaf){return _0x25407d+_0x2cdbaf;},'POqJg':function _0x3f8043(_0x309768,_0x22f477){return _0x309768/_0x22f477;},'lKcmX':_0x2e1d('0x22','fGm1'),'VZQSE':function _0x5c206e(_0x2e02a3,_0xd6a4b8){return _0x2e02a3%_0xd6a4b8;},'kqtbv':_0x2e1d('0x23','7B$!'),'QHBgR':function _0x49ee3c(_0x167629){return _0x167629();}};var _0x33b6a1=_0x325453[_0x2e1d('0x24','2lnZ')][_0x2e1d('0x25','T5nt')]('|'),_0x57d986=0x0;while(!![]){switch(_0x33b6a1[_0x57d986++]){case'0':try{if(_0x325453[_0x2e1d('0x26','GbBO')](_0x325453[_0x2e1d('0x27','1n&X')],_0x325453[_0x2e1d('0x28','PycY')])){debugger;}else{_0x3eeb1b+=_0x325453[_0x2e1d('0x29','KZGQ')];_0x3868ac=encode_version;if(!(_0x325453[_0x2e1d('0x2a','1n&X')](typeof _0x3868ac,_0x325453[_0x2e1d('0x2b','gbiw')])&&_0x325453[_0x2e1d('0x2c','gbiw')](_0x3868ac,_0x325453[_0x2e1d('0x2d','z01i')]))){if(_0x325453[_0x2e1d('0x2e','uLIQ')](_0x325453[_0x2e1d('0x2f','[MKZ')],_0x325453[_0x2e1d('0x30','W#$Y')])){}else{_0x1a8d9e[_0x3eeb1b](_0x325453[_0x2e1d('0x31','K&*[')]('删除',_0x325453[_0x2e1d('0x32','W#$Y')]));}}}}catch(_0x37162b){_0x1a8d9e[_0x3eeb1b](_0x325453[_0x2e1d('0x33','lA[m')]);}continue;case'1':var _0x18505d=function(){var _0x564f60={'ZnYhL':function _0x203d1c(_0x2f444e,_0x4658be){return _0x2f444e===_0x4658be;},'FadZU':_0x2e1d('0x34','U5YD')};if(_0x564f60[_0x2e1d('0x35','Vp2(')](_0x564f60[_0x2e1d('0x36','Vp2(')],_0x564f60[_0x2e1d('0x37','I#[w')])){var _0x15236b=!![];return function(_0x29a66c,_0x1ccc7a){var _0x42e25b={'EUOdP':function _0x4beef1(_0x51cf96,_0x1f2d21){return _0x51cf96===_0x1f2d21;},'hqTBi':_0x2e1d('0x38','uLIQ'),'xUtpe':_0x2e1d('0x39','Zekw'),'ImuBV':function _0x2266e0(_0x4eab18,_0x472f86){return _0x4eab18!==_0x472f86;},'DZKgz':_0x2e1d('0x3a','Ri]O'),'FjjbW':_0x2e1d('0x3b','6!dU'),'jwvEN':_0x2e1d('0x3c','LF@8')};if(_0x42e25b[_0x2e1d('0x3d','I^Ow')](_0x42e25b[_0x2e1d('0x3e','e[kB')],_0x42e25b[_0x2e1d('0x3f','[MKZ')])){var _0x4e42d8=_0x15236b?function(){if(_0x42e25b[_0x2e1d('0x40','ff!w')](_0x42e25b[_0x2e1d('0x41','PycY')],_0x42e25b[_0x2e1d('0x42',']ySL')])){var _0x59d0a3=_0x1ccc7a[_0x2e1d('0x43','@t0r')](_0x29a66c,arguments);_0x1ccc7a=null;return _0x59d0a3;}else{if(_0x1ccc7a){var _0x246400=_0x1ccc7a[_0x2e1d('0x44','2lnZ')](_0x29a66c,arguments);_0x1ccc7a=null;return _0x246400;}}}:function(){};_0x15236b=![];return _0x4e42d8;}else{_0x1a8d9e[_0x3eeb1b](_0x42e25b[_0x2e1d('0x45','BTp@')]);}};}else{while(!![]){}}}();continue;case'2':(function(){_0x34e4e1[_0x2e1d('0x46','W#$Y')](_0x18505d,this,function(){var _0x111b4c=new RegExp(_0x34e4e1[_0x2e1d('0x47','sK3L')]);var _0xa6016f=new RegExp(_0x34e4e1[_0x2e1d('0x48','K&*[')],'i');var _0x1d99a5=_0x34e4e1[_0x2e1d('0x49','PycY')](_0x31618c,_0x34e4e1[_0x2e1d('0x4a','U5YD')]);if(!_0x111b4c[_0x2e1d('0x4b','k[IU')](_0x34e4e1[_0x2e1d('0x4c','LF@8')](_0x1d99a5,_0x34e4e1[_0x2e1d('0x4d','W#$Y')]))||!_0xa6016f[_0x2e1d('0x4e','@t0r')](_0x34e4e1[_0x2e1d('0x4f','uLIQ')](_0x1d99a5,_0x34e4e1[_0x2e1d('0x50','4g2A')]))){_0x34e4e1[_0x2e1d('0x51','PAJg')](_0x1d99a5,'0');}else{_0x34e4e1[_0x2e1d('0x52','*Br1')](_0x31618c);}})();}());continue;case'3':var _0x679a31=_0x325453[_0x2e1d('0x53','sK3L')](_0x2bd64e,this,function(){var _0x46f2aa=function(){var _0x3097f6={'rLdoY':function _0xc3a739(_0x2cec8c,_0x1b3de1){return _0x2cec8c!==_0x1b3de1;},'nGMNO':_0x2e1d('0x54','K&*[')};if(_0x3097f6[_0x2e1d('0x55','*Br1')](_0x3097f6[_0x2e1d('0x56','QSNx')],_0x3097f6[_0x2e1d('0x57','Vp2(')])){if(fn){var _0x188a5a=fn[_0x2e1d('0x58','4g2A')](context,arguments);fn=null;return _0x188a5a;}}else{}};var _0x3f398a=_0x34e4e1[_0x2e1d('0x59','[MKZ')](typeof window,_0x34e4e1[_0x2e1d('0x5a','fGm1')])?window:_0x34e4e1[_0x2e1d('0x5b','k[IU')](typeof process,_0x34e4e1[_0x2e1d('0x5c','KZGQ')])&&_0x34e4e1[_0x2e1d('0x5d','&nhO')](typeof require,_0x34e4e1[_0x2e1d('0x5e','uIcA')])&&_0x34e4e1[_0x2e1d('0x5f','E@(k')](typeof global,_0x34e4e1[_0x2e1d('0x60','%uoz')])?global:this;if(!_0x3f398a[_0x2e1d('0x61','Zekw')]){if(_0x34e4e1[_0x2e1d('0x62','uIcA')](_0x34e4e1[_0x2e1d('0x63','U5YD')],_0x34e4e1[_0x2e1d('0x64','W#$Y')])){if(_0x34e4e1[_0x2e1d('0x65',']ySL')](_0x34e4e1[_0x2e1d('0x66','7B$!')]('',_0x34e4e1[_0x2e1d('0x67','uIcA')](counter,counter))[_0x34e4e1[_0x2e1d('0x68','k[IU')]],0x1)||_0x34e4e1[_0x2e1d('0x69','NRq6')](_0x34e4e1[_0x2e1d('0x6a','6!dU')](counter,0x14),0x0)){debugger;}else{debugger;}}else{_0x3f398a[_0x2e1d('0x6b','@t0r')]=function(_0x2c4d5c){var _0x2cddce={'OTIbe':_0x2e1d('0x6c','PycY')};var _0x5acbcd=_0x2cddce[_0x2e1d('0x6d','PycY')][_0x2e1d('0x6e','QSNx')]('|'),_0x550e5a=0x0;while(!![]){switch(_0x5acbcd[_0x550e5a++]){case'0':_0x3eeb1b[_0x2e1d('0x6f','gbiw')]=_0x2c4d5c;continue;case'1':_0x3eeb1b[_0x2e1d('0x70','[dML')]=_0x2c4d5c;continue;case'2':_0x3eeb1b[_0x2e1d('0x71','vHlQ')]=_0x2c4d5c;continue;case'3':_0x3eeb1b[_0x2e1d('0x72','BTp@')]=_0x2c4d5c;continue;case'4':var _0x3eeb1b={};continue;case'5':_0x3eeb1b[_0x2e1d('0x73','h*VG')]=_0x2c4d5c;continue;case'6':return _0x3eeb1b;case'7':_0x3eeb1b[_0x2e1d('0x74','2lnZ')]=_0x2c4d5c;continue;case'8':_0x3eeb1b[_0x2e1d('0x75','fM3F')]=_0x2c4d5c;continue;}break;}}(_0x46f2aa);}}else{var _0x384bf2=_0x34e4e1[_0x2e1d('0x76','%uoz')][_0x2e1d('0x77','k[IU')]('|'),_0x8336ea=0x0;while(!![]){switch(_0x384bf2[_0x8336ea++]){case'0':_0x3f398a[_0x2e1d('0x78','z01i')][_0x2e1d('0x79',']ySL')]=_0x46f2aa;continue;case'1':_0x3f398a[_0x2e1d('0x7a','LF@8')][_0x2e1d('0x7b','4g2A')]=_0x46f2aa;continue;case'2':_0x3f398a[_0x2e1d('0x7c','g@2M')][_0x2e1d('0x7d','7B$!')]=_0x46f2aa;continue;case'3':_0x3f398a[_0x2e1d('0x7e','ff!w')][_0x2e1d('0x7f','cISk')]=_0x46f2aa;continue;case'4':_0x3f398a[_0x2e1d('0x80','qv@f')][_0x2e1d('0x81','z01i')]=_0x46f2aa;continue;case'5':_0x3f398a[_0x2e1d('0x82','W#$Y')][_0x2e1d('0x83','vHlQ')]=_0x46f2aa;continue;case'6':_0x3f398a[_0x2e1d('0x84','E@(k')][_0x2e1d('0x85','[MKZ')]=_0x46f2aa;continue;}break;}}});continue;case'4':var _0x34e4e1={'yWPTq':_0x325453[_0x2e1d('0x86','e[kB')],'VhVsb':_0x325453[_0x2e1d('0x87','%uoz')],'WxBFY':function _0x2d4018(_0x6ab24c,_0x72dda0){return _0x325453[_0x2e1d('0x88','ff!w')](_0x6ab24c,_0x72dda0);},'CwbvD':_0x325453[_0x2e1d('0x89','fGm1')],'tcfbf':function _0x26b0fb(_0x182cb6,_0x15d8da){return _0x325453[_0x2e1d('0x8a','wgws')](_0x182cb6,_0x15d8da);},'KONhl':_0x325453[_0x2e1d('0x8b','fM3F')],'AVQOn':function _0x67f3e4(_0x22265f,_0x55d650){return _0x325453[_0x2e1d('0x8c','LF@8')](_0x22265f,_0x55d650);},'Dmhid':_0x325453[_0x2e1d('0x8d','K&*[')],'anCGf':function _0x35a150(_0xb0925e){return _0x325453[_0x2e1d('0x8e','K&*[')](_0xb0925e);},'ksHfG':function _0x13c5f4(_0xb9e9f5,_0x437833,_0x11d611){return _0x325453[_0x2e1d('0x8f','z01i')](_0xb9e9f5,_0x437833,_0x11d611);},'IwaUh':function _0x3491fb(_0x1515e3,_0x1f70be){return _0x325453[_0x2e1d('0x90','%uoz')](_0x1515e3,_0x1f70be);},'PLDTb':_0x325453[_0x2e1d('0x91','[MKZ')],'otSkQ':function _0xa4f8f6(_0x248b0e,_0x3df0cb){return _0x325453[_0x2e1d('0x92','6!dU')](_0x248b0e,_0x3df0cb);},'JKral':_0x325453[_0x2e1d('0x93','PycY')],'BYsNK':_0x325453[_0x2e1d('0x94','6!dU')],'DVCvw':function _0x217102(_0x29c9b5,_0x12dfe3){return _0x325453[_0x2e1d('0x95','@t0r')](_0x29c9b5,_0x12dfe3);},'ptDQH':_0x325453[_0x2e1d('0x96','fM3F')],'DmzBn':_0x325453[_0x2e1d('0x97','gbiw')],'efCht':function _0x14597a(_0x393639,_0x5c1d9c){return _0x325453[_0x2e1d('0x98','lA[m')](_0x393639,_0x5c1d9c);},'BTOpD':function _0x56405b(_0x3ef9a4,_0x133457){return _0x325453[_0x2e1d('0x99','wgws')](_0x3ef9a4,_0x133457);},'uResX':_0x325453[_0x2e1d('0x9a','N9Gf')],'TrZZd':function _0x2cde1a(_0x2fb839,_0x375b23){return _0x325453[_0x2e1d('0x9b','&nhO')](_0x2fb839,_0x375b23);},'ZCyaz':_0x325453[_0x2e1d('0x9c','BTp@')]};continue;case'5':_0x3eeb1b='al';continue;case'6':_0x325453[_0x2e1d('0x9d','Vp2(')](_0x679a31);continue;case'7':var _0x2bd64e=function(){var _0x3d0785={'EpelX':function _0x1e3922(_0x2c2386,_0x22c833){return _0x2c2386!==_0x22c833;},'uTVbD':_0x2e1d('0x9e','NRq6')};if(_0x3d0785[_0x2e1d('0x9f',']ySL')](_0x3d0785[_0x2e1d('0xa0','lA[m')],_0x3d0785[_0x2e1d('0xa1','E@(k')])){}else{var _0x800d04=!![];return function(_0x52141b,_0x4e1fe4){var _0x554c10={'TJxMp':function _0x5aa358(_0x4a287e,_0x135702){return _0x4a287e!==_0x135702;},'rRsVh':_0x2e1d('0xa2','4g2A'),'iQnEW':function _0x11b806(_0xed698e){return _0xed698e();},'PAieT':function _0x7a0f21(_0x295484,_0xcbb311){return _0x295484!==_0xcbb311;},'awtJX':_0x2e1d('0xa3','cISk'),'cgfhC':_0x2e1d('0xa4','vHlQ'),'cMVZY':_0x2e1d('0xa5','BTp@'),'pvwzL':_0x2e1d('0xa6','Vp2('),'QOJyv':_0x2e1d('0xa7','h*VG'),'yYdOv':function _0x14b488(_0x1cb106,_0x16ad90){return _0x1cb106(_0x16ad90);},'oFlcp':_0x2e1d('0xa8','1n&X'),'sQAxv':function _0x210644(_0x90b30c,_0x340499){return _0x90b30c+_0x340499;},'BcznO':_0x2e1d('0xa9',']ySL'),'mwRsq':_0x2e1d('0xaa','I^Ow'),'WTwqA':_0x2e1d('0xab','4RN#'),'ACsBI':_0x2e1d('0xac','uIcA'),'FrjzY':_0x2e1d('0xad','z01i')};if(_0x554c10[_0x2e1d('0xae','LF@8')](_0x554c10[_0x2e1d('0xaf','PAJg')],_0x554c10[_0x2e1d('0xb0','Zekw')])){var _0x572f49=_0x800d04?function(){if(_0x554c10[_0x2e1d('0xb1','4g2A')](_0x554c10[_0x2e1d('0xb2','lA[m')],_0x554c10[_0x2e1d('0xb3','cISk')])){_0x554c10[_0x2e1d('0xb4','g@2M')](_0x31618c);}else{if(_0x4e1fe4){if(_0x554c10[_0x2e1d('0xb5','qv@f')](_0x554c10[_0x2e1d('0xb6','1n&X')],_0x554c10[_0x2e1d('0xb7','[dML')])){debugger;}else{var _0x4aada6=_0x4e1fe4[_0x2e1d('0xb8','uIcA')](_0x52141b,arguments);_0x4e1fe4=null;return _0x4aada6;}}}}:function(){if(_0x554c10[_0x2e1d('0xb9','lA[m')](_0x554c10[_0x2e1d('0xba','1n&X')],_0x554c10[_0x2e1d('0xbb','E@(k')])){}else{var _0x21b560=new RegExp(_0x554c10[_0x2e1d('0xbc','*Br1')]);var _0x5cbeb8=new RegExp(_0x554c10[_0x2e1d('0xbd','T5nt')],'i');var _0x2cca6f=_0x554c10[_0x2e1d('0xbe','*Br1')](_0x31618c,_0x554c10[_0x2e1d('0xbf','fGm1')]);if(!_0x21b560[_0x2e1d('0xc0','BTp@')](_0x554c10[_0x2e1d('0xc1','N9Gf')](_0x2cca6f,_0x554c10[_0x2e1d('0xc2','uLIQ')]))||!_0x5cbeb8[_0x2e1d('0xc3','*Br1')](_0x554c10[_0x2e1d('0xc4','&nhO')](_0x2cca6f,_0x554c10[_0x2e1d('0xc5','^^nu')]))){_0x554c10[_0x2e1d('0xc6','LF@8')](_0x2cca6f,'0');}else{_0x554c10[_0x2e1d('0xc7','PycY')](_0x31618c);}}};_0x800d04=![];return _0x572f49;}else{var _0x324127=_0x554c10[_0x2e1d('0xc8','k[IU')][_0x2e1d('0xc9','z01i')]('|'),_0x45baa2=0x0;while(!![]){switch(_0x324127[_0x45baa2++]){case'0':_0x4722be[_0x2e1d('0xca','I^Ow')]=func;continue;case'1':_0x4722be[_0x2e1d('0xcb','QSNx')]=func;continue;case'2':_0x4722be[_0x2e1d('0xcc','fGm1')]=func;continue;case'3':var _0x4722be={};continue;case'4':_0x4722be[_0x2e1d('0xcd','uLIQ')]=func;continue;case'5':_0x4722be[_0x2e1d('0xce','uLIQ')]=func;continue;case'6':_0x4722be[_0x2e1d('0xcf','N9Gf')]=func;continue;case'7':_0x4722be[_0x2e1d('0xd0','vHlQ')]=func;continue;case'8':return _0x4722be;}break;}}};}}();continue;}break;}}(window));function _0x31618c(_0x5af8c0){var _0x4e53d6={'TiCbX':function _0x27597a(_0x355b1f,_0x3d6836){return _0x355b1f!==_0x3d6836;},'GNjTB':_0x2e1d('0xd1','W#$Y'),'qhFdB':function _0x466a72(_0x266ec4){return _0x266ec4();},'bTrBE':function _0xc93874(_0x1e17f7,_0x569d87){return _0x1e17f7===_0x569d87;},'jUOTI':_0x2e1d('0xd2','6!dU'),'JaeVL':function _0x1cd025(_0x195d5c,_0x5baab1){return _0x195d5c!==_0x5baab1;},'AwSdN':function _0x30ccb1(_0x17ce01,_0x1c0662){return _0x17ce01+_0x1c0662;},'CeMsb':function _0x22e9a3(_0x1a5965,_0x35a834){return _0x1a5965/_0x35a834;},'GhpBK':_0x2e1d('0xd3','@t0r'),'mtBcZ':function _0x54a764(_0x26d55f,_0x2f054e){return _0x26d55f%_0x2f054e;},'kGTDX':_0x2e1d('0xd4','K&*['),'WaiND':_0x2e1d('0xd5','uIcA'),'IlKqc':_0x2e1d('0xd6','*Br1'),'AgxwN':function _0x1a4ffe(_0x5a459a,_0x1c3f7c){return _0x5a459a(_0x1c3f7c);},'hyVPD':function _0x5a59a4(_0x498e94,_0x543a8c){return _0x498e94(_0x543a8c);},'fOGcx':function _0x5886db(_0x57bbde,_0x45c31f){return _0x57bbde===_0x45c31f;},'OaVtY':_0x2e1d('0xd7','g@2M'),'omgny':_0x2e1d('0xd8','BTp@')};function _0x48a9d1(_0x128c88){var _0x169d5b={'LYgfh':function _0x6e0490(_0x22635e,_0x36b478){return _0x4e53d6[_0x2e1d('0xd9','BTp@')](_0x22635e,_0x36b478);},'YYqMy':_0x4e53d6[_0x2e1d('0xda','h*VG')],'xxbFe':function _0x2d9d32(_0x20e76c){return _0x4e53d6[_0x2e1d('0xdb','qv@f')](_0x20e76c);}};if(_0x4e53d6[_0x2e1d('0xdc','lA[m')](typeof _0x128c88,_0x4e53d6[_0x2e1d('0xdd','Ri]O')])){var _0x57a9d1=function(){while(!![]){if(_0x169d5b[_0x2e1d('0xde','W#$Y')](_0x169d5b[_0x2e1d('0xdf','fGm1')],_0x169d5b[_0x2e1d('0xe0','fM3F')])){_0x169d5b[_0x2e1d('0xe1','k[IU')](_0x31618c);}else{}}};return _0x4e53d6[_0x2e1d('0xe2','E@(k')](_0x57a9d1);}else{if(_0x4e53d6[_0x2e1d('0xe3','E@(k')](_0x4e53d6[_0x2e1d('0xe4','6!dU')]('',_0x4e53d6[_0x2e1d('0xe5','U5YD')](_0x128c88,_0x128c88))[_0x4e53d6[_0x2e1d('0xe6','4RN#')]],0x1)||_0x4e53d6[_0x2e1d('0xe7','2lnZ')](_0x4e53d6[_0x2e1d('0xe8','K&*[')](_0x128c88,0x14),0x0)){if(_0x4e53d6[_0x2e1d('0xe9','QSNx')](_0x4e53d6[_0x2e1d('0xea','PycY')],_0x4e53d6[_0x2e1d('0xeb','k[IU')])){var _0x1893e1=_0x4e53d6[_0x2e1d('0xec','PycY')][_0x2e1d('0xed','^^nu')]('|'),_0x5052b2=0x0;while(!![]){switch(_0x1893e1[_0x5052b2++]){case'0':that[_0x2e1d('0x7c','g@2M')][_0x2e1d('0xee','N9Gf')]=_0x57a9d1;continue;case'1':that[_0x2e1d('0xef','KZGQ')][_0x2e1d('0xf0','uIcA')]=_0x57a9d1;continue;case'2':that[_0x2e1d('0xf1','[MKZ')][_0x2e1d('0xf2','E@(k')]=_0x57a9d1;continue;case'3':that[_0x2e1d('0xf3','K&*[')][_0x2e1d('0xf4','^^nu')]=_0x57a9d1;continue;case'4':that[_0x2e1d('0xf5','QSNx')][_0x2e1d('0xf6','4RN#')]=_0x57a9d1;continue;case'5':that[_0x2e1d('0xf7','U5YD')][_0x2e1d('0xf8','qv@f')]=_0x57a9d1;continue;case'6':that[_0x2e1d('0xf9','vHlQ')][_0x2e1d('0xfa','z01i')]=_0x57a9d1;continue;}break;}}else{debugger;}}else{debugger;}}_0x4e53d6[_0x2e1d('0xfb','U5YD')](_0x48a9d1,++_0x128c88);}try{if(_0x5af8c0){return _0x48a9d1;}else{_0x4e53d6[_0x2e1d('0xfc','[MKZ')](_0x48a9d1,0x0);}}catch(_0x133145){if(_0x4e53d6[_0x2e1d('0xfd','h*VG')](_0x4e53d6[_0x2e1d('0xfe','T5nt')],_0x4e53d6[_0x2e1d('0xff','Zekw')])){return _0x48a9d1;}else{}}};encode_version = 'jsjiami.com.v5';
