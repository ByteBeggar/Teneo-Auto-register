const a0_0x40b7da=a0_0x2ade;(function(_0x1075b4,_0x55d659){const _0x26076e=a0_0x2ade,_0x4600c3=_0x1075b4();while(!![]){try{const _0xcf7a9b=parseInt(_0x26076e(0x181))/0x1*(-parseInt(_0x26076e(0x185))/0x2)+-parseInt(_0x26076e(0x17b))/0x3+-parseInt(_0x26076e(0x18b))/0x4+-parseInt(_0x26076e(0x176))/0x5*(-parseInt(_0x26076e(0x175))/0x6)+parseInt(_0x26076e(0x17c))/0x7*(-parseInt(_0x26076e(0x178))/0x8)+-parseInt(_0x26076e(0x182))/0x9+-parseInt(_0x26076e(0x187))/0xa*(-parseInt(_0x26076e(0x18d))/0xb);if(_0xcf7a9b===_0x55d659)break;else _0x4600c3['push'](_0x4600c3['shift']());}catch(_0x5790fd){_0x4600c3['push'](_0x4600c3['shift']());}}}(a0_0x29ae,0x2a3e2));const fs=require('fs'),axios=require('axios'),chalk=require(a0_0x40b7da(0x189)),config=require(a0_0x40b7da(0x179)),displayWelcome=()=>{const _0x2a409c=a0_0x40b7da;console[_0x2a409c(0x173)]('\x0a*\x20Teneo\x20account\x20creator\x20*\x0a*\x20github.com/ByteBeggar\x20*\x0a\x20\x20\x20\x20');},regurl=a0_0x40b7da(0x17f),AUTH=a0_0x40b7da(0x18a),API_KEY=a0_0x40b7da(0x183);async function delay(_0x59cd60){return new Promise(_0x2ca64b=>setTimeout(_0x2ca64b,_0x59cd60));}async function registerUser(_0x34019c){const _0x53ab48=a0_0x40b7da;try{const _0x44ccf0=await axios[_0x53ab48(0x186)](regurl,{'email':_0x34019c,'password':config[_0x53ab48(0x17d)],'data':{'invited_by':_0x53ab48(0x18e)},'gotrue_meta_security':{},'code_challenge':null,'code_challenge_method':null},{'headers':{'Authorization':AUTH,'apikey':API_KEY}});console['log'](chalk['green'](_0x53ab48(0x188),_0x34019c));}catch(_0x2059bc){console[_0x53ab48(0x184)](chalk[_0x53ab48(0x17e)](_0x53ab48(0x174),_0x34019c));}}async function readEmailsAndRegister(){const _0x566843=a0_0x40b7da;fs['readFile']('email.txt',_0x566843(0x18c),async(_0x4d6ca2,_0x42bd2a)=>{const _0x1c62f6=_0x566843;if(_0x4d6ca2){console[_0x1c62f6(0x184)](chalk[_0x1c62f6(0x17e)]('Error\x20reading\x20email\x20file:',_0x4d6ca2));return;}const _0x29a30a=_0x42bd2a['split']('\x0a')[_0x1c62f6(0x17a)](_0x362725=>_0x362725[_0x1c62f6(0x177)]()!=='');for(const _0x3c685d of _0x29a30a){await registerUser(_0x3c685d[_0x1c62f6(0x177)]()),await delay(config[_0x1c62f6(0x180)]);}});}function a0_0x2ade(_0x46884e,_0x3ee812){const _0x29ae6c=a0_0x29ae();return a0_0x2ade=function(_0x2ade41,_0x296356){_0x2ade41=_0x2ade41-0x173;let _0x48b3d5=_0x29ae6c[_0x2ade41];return _0x48b3d5;},a0_0x2ade(_0x46884e,_0x3ee812);}displayWelcome(),readEmailsAndRegister();function a0_0x29ae(){const _0x4e68a9=['Bearer\x20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlra25uZ3JneHV4Z2pocGxicGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0MzgxNTAsImV4cCI6MjA0MTAxNDE1MH0.DRAvf8nH1ojnJBc3rD_Nw6t1AV8X_g6gmY_HByG2Mag','905284RoIfNP','utf8','6428389kBvZIR','wKP36','log','Error\x20during\x20register\x20for','588sSGAMz','5975bqmQdY','trim','8TNohbs','./config','filter','185637PgLqSs','858179LpKGBK','password','red','https://ikknngrgxuxgjhplbpey.supabase.co/auth/v1/signup','delay','1322kgDRpv','963990ljZQlE','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlra25uZ3JneHV4Z2pocGxicGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0MzgxNTAsImV4cCI6MjA0MTAxNDE1MH0.DRAvf8nH1ojnJBc3rD_Nw6t1AV8X_g6gmY_HByG2Mag','error','16HXaUHl','post','10cERdbH','successfully\x20register,\x20please\x20confirm\x20your\x20email\x20:','chalk'];a0_0x29ae=function(){return _0x4e68a9;};return a0_0x29ae();}