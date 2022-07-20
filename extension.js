game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"偶像梦幻祭",content:function (config,pack){
    if (lib.rank){
		lib.rank.rarity.junk.addArray(['shiinaniki','akehoshisubaru']);//~-0.5
		//lib.rank.rarity.normal.addArray(['hakazekaoru','otogariadonis','hibikiwataru','isaramao','yuukimakoto']);//-0.5~0
		lib.rank.rarity.rare.addArray(['kiryukuro','kanzakisouma','rannagisa','tomoehiyori','saegusaibara','shiratoriaira','sakumarei','ogamikoga','tenshouineichi','himemiyatori','fushimiyuzuru','shinkaikanata','sengokushinobu','hidakahokuto']);//0~0.5
		lib.rank.rarity.epic.addArray(['hasumikeito','sazanamijun','amagihiiro','kazehayatatsumi','ayasemayoi','oukawakohaku','aoihinata','aoiyuuta']);//0.5~1
		lib.rank.rarity.legend.addArray([]);//1~
	}
	var style1=document.createElement('style');
	style1.innerHTML=".player.identity[data-color='akatsuki'],";
	style1.innerHTML+="div[data-nature='akatsuki'],";
	style1.innerHTML+="span[data-nature='akatsuki'] {text-shadow: black 0 0 1px,rgba(208, 7, 9,1) 0 0 2px,rgba(208, 7, 9,1) 0 0 5px,rgba(208, 7, 9,1) 0 0 10px,rgba(208, 7, 9,1) 0 0 10px}";
	style1.innerHTML+="div[data-nature='akatsukim'],";
	style1.innerHTML+="span[data-nature='akatsukim'] {text-shadow: black 0 0 1px,rgba(208, 7, 9,1) 0 0 2px,rgba(208, 7, 9,1) 0 0 5px,rgba(208, 7, 9,1) 0 0 5px,rgba(208, 7, 9,1) 0 0 5px,black 0 0 1px;}";
	style1.innerHTML+="div[data-nature='akatsukimm'],";
	style1.innerHTML+="span[data-nature='akatsukimm'] {text-shadow: black 0 0 1px,rgba(208, 7, 9,1) 0 0 2px,rgba(208, 7, 9,1) 0 0 2px,rgba(208, 7, 9,1) 0 0 2px,rgba(208, 7, 9,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style1);
	lib.groupnature.akatsuki='akatsuki';
	lib.group.push('akatsuki');
	lib.translate['akatsuki']='紅月';
	
	var style2=document.createElement('style');
	style2.innerHTML=".player.identity[data-color='eden'],";
	style2.innerHTML+="div[data-nature='eden'],";
	style2.innerHTML+="span[data-nature='eden'] {text-shadow: black 0 0 1px,rgba(23, 32, 48,1) 0 0 2px,rgba(23, 32, 48,1) 0 0 5px,rgba(23, 32, 48,1) 0 0 10px,rgba(23, 32, 48,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='edenm'],";
	style2.innerHTML+="span[data-nature='edenm'] {text-shadow: black 0 0 1px,rgba(23, 32, 48,1) 0 0 2px,rgba(23, 32, 48,1) 0 0 5px,rgba(23, 32, 48,1) 0 0 5px,rgba(23, 32, 48,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='edenmm'],";
	style2.innerHTML+="span[data-nature='edenmm'] {text-shadow: black 0 0 1px,rgba(23, 32, 48,1) 0 0 2px,rgba(23, 32, 48,1) 0 0 2px,rgba(23, 32, 48,1) 0 0 2px,rgba(23, 32, 48,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style2);
	lib.groupnature.eden='eden';
	lib.group.push('eden');
	lib.translate['eden']='Eden';
	
	var style3=document.createElement('style');
	style3.innerHTML=".player.identity[data-color='alkaloid'],";
	style3.innerHTML+="div[data-nature='alkaloid'],";
	style3.innerHTML+="span[data-nature='alkaloid'] {text-shadow: black 0 0 1px,rgba(38, 183, 203,1) 0 0 2px,rgba(38, 183, 203,1) 0 0 5px,rgba(38, 183, 203,1) 0 0 10px,rgba(38, 183, 203,1) 0 0 10px}";
	style3.innerHTML+="div[data-nature='alkaloidm'],";
	style3.innerHTML+="span[data-nature='alkaloidm'] {text-shadow: black 0 0 1px,rgba(38, 183, 203,1) 0 0 2px,rgba(38, 183, 203,1) 0 0 5px,rgba(38, 183, 203,1) 0 0 5px,rgba(38, 183, 203,1) 0 0 5px,black 0 0 1px;}";
	style3.innerHTML+="div[data-nature='alkaloidmm'],";
	style3.innerHTML+="span[data-nature='alkaloidmm'] {text-shadow: black 0 0 1px,rgba(38, 183, 203,1) 0 0 2px,rgba(38, 183, 203,1) 0 0 2px,rgba(38, 183, 203,1) 0 0 2px,rgba(38, 183, 203,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style3);
	lib.groupnature.alkaloid='alkaloid';
	lib.group.push('alkaloid');
	lib.translate['alkaloid']='ALKALOID';
	
	var style4=document.createElement('style');
	style4.innerHTML=".player.identity[data-color='undead'],";
	style4.innerHTML+="div[data-nature='undead'],";
	style4.innerHTML+="span[data-nature='undead'] {text-shadow: black 0 0 1px,rgba(125, 42, 174,1) 0 0 2px,rgba(125, 42, 174,1) 0 0 5px,rgba(125, 42, 174,1) 0 0 10px,rgba(125, 42, 174,1) 0 0 10px}";
	style4.innerHTML+="div[data-nature='undeadm'],";
	style4.innerHTML+="span[data-nature='undeadm'] {text-shadow: black 0 0 1px,rgba(125, 42, 174,1) 0 0 2px,rgba(125, 42, 174,1) 0 0 5px,rgba(125, 42, 174,1) 0 0 5px,rgba(125, 42, 174,1) 0 0 5px,black 0 0 1px;}";
	style4.innerHTML+="div[data-nature='undeadmm'],";
	style4.innerHTML+="span[data-nature='undeadmm'] {text-shadow: black 0 0 1px,rgba(125, 42, 174,1) 0 0 2px,rgba(125, 42, 174,1) 0 0 2px,rgba(125, 42, 174,1) 0 0 2px,rgba(125, 42, 174,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style4);
	lib.groupnature.undead='undead';
	lib.group.push('undead');
	lib.translate['undead']='UNDEAD';
	
	var style5=document.createElement('style');
	style5.innerHTML=".player.identity[data-color='fine'],";
	style5.innerHTML+="div[data-nature='fine'],";
	style5.innerHTML+="span[data-nature='fine'] {text-shadow: black 0 0 1px,rgba(255, 255, 255,1) 0 0 2px,rgba(255, 255, 255,1) 0 0 5px,rgba(255, 255, 255,1) 0 0 10px,rgba(255, 255, 255,1) 0 0 10px}";
	style5.innerHTML+="div[data-nature='finem'],";
	style5.innerHTML+="span[data-nature='finem'] {text-shadow: black 0 0 1px,rgba(255, 255, 255,1) 0 0 2px,rgba(255, 255, 255,1) 0 0 5px,rgba(255, 255, 255,1) 0 0 5px,rgba(255, 255, 255,1) 0 0 5px,black 0 0 1px;}";
	style5.innerHTML+="div[data-nature='finemm'],";
	style5.innerHTML+="span[data-nature='finemm'] {text-shadow: black 0 0 1px,rgba(255, 255, 255,1) 0 0 2px,rgba(255, 255, 255,1) 0 0 2px,rgba(255, 255, 255,1) 0 0 2px,rgba(255, 255, 255,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style5);
	lib.groupnature.fine='fine';
	lib.group.push('fine');
	lib.translate['fine']='fine';
	
	var style6=document.createElement('style');
	style6.innerHTML=".player.identity[data-color='crazyb'],";
	style6.innerHTML+="div[data-nature='crazyb'],";
	style6.innerHTML+="span[data-nature='crazyb'] {text-shadow: black 0 0 1px,rgba(255, 255, 1,1) 0 0 2px,rgba(255, 255, 1,1) 0 0 5px,rgba(255, 255, 1,1) 0 0 10px,rgba(255, 255, 1,1) 0 0 10px}";
	style6.innerHTML+="div[data-nature='crazybm'],";
	style6.innerHTML+="span[data-nature='crazybm'] {text-shadow: black 0 0 1px,rgba(255, 255, 1,1) 0 0 2px,rgba(255, 255, 1,1) 0 0 5px,rgba(255, 255, 1,1) 0 0 5px,rgba(255, 255, 1,1) 0 0 5px,black 0 0 1px;}";
	style6.innerHTML+="div[data-nature='crazybmm'],";
	style6.innerHTML+="span[data-nature='crazybmm'] {text-shadow: black 0 0 1px,rgba(255, 255, 1,1) 0 0 2px,rgba(255, 255, 1,1) 0 0 2px,rgba(255, 255, 1,1) 0 0 2px,rgba(255, 255, 1,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style6);
	lib.groupnature.crazyb='crazyb';
	lib.group.push('crazyb');
	lib.translate['crazyb']='Crazy:B';
	
	var style7=document.createElement('style');
	style7.innerHTML=".player.identity[data-color='twowink'],";
	style7.innerHTML+="div[data-nature='twowink'],";
	style7.innerHTML+="span[data-nature='twowink'] {text-shadow: black 0 0 1px,rgba(255, 162, 255,1) 0 0 2px,rgba(255, 162, 255,1) 0 0 5px,rgba(255, 162, 255,1) 0 0 10px,rgba(255, 162, 255,1) 0 0 10px}";
	style7.innerHTML+="div[data-nature='twowinkm'],";
	style7.innerHTML+="span[data-nature='twowinkm'] {text-shadow: black 0 0 1px,rgba(255, 162, 255,1) 0 0 2px,rgba(255, 162, 255,1) 0 0 5px,rgba(255, 162, 255,1) 0 0 5px,rgba(255, 162, 255,1) 0 0 5px,black 0 0 1px;}";
	style7.innerHTML+="div[data-nature='twowinkmm'],";
	style7.innerHTML+="span[data-nature='twowinkmm'] {text-shadow: black 0 0 1px,rgba(255, 162, 255,1) 0 0 2px,rgba(255, 162, 255,1) 0 0 2px,rgba(255, 162, 255,1) 0 0 2px,rgba(255, 162, 255,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style7);
	lib.groupnature.twowink='twowink';
	lib.group.push('twowink');
	lib.translate['twowink']='2wink';
	
	var style8=document.createElement('style');
	style8.innerHTML=".player.identity[data-color='trickstar'],";
	style8.innerHTML+="div[data-nature='trickstar'],";
	style8.innerHTML+="span[data-nature='trickstar'] {text-shadow: black 0 0 1px,rgba(236, 162, 14,1) 0 0 2px,rgba(236, 162, 14,1) 0 0 5px,rgba(236, 162, 14,1) 0 0 10px,rgba(236, 162, 14,1) 0 0 10px}";
	style8.innerHTML+="div[data-nature='trickstarm'],";
	style8.innerHTML+="span[data-nature='trickstarm'] {text-shadow: black 0 0 1px,rgba(236, 162, 14,1) 0 0 2px,rgba(236, 162, 14,1) 0 0 5px,rgba(236, 162, 14,1) 0 0 5px,rgba(236, 162, 14,1) 0 0 5px,black 0 0 1px;}";
	style8.innerHTML+="div[data-nature='trickstarmm'],";
	style8.innerHTML+="span[data-nature='trickstarmm'] {text-shadow: black 0 0 1px,rgba(236, 162, 14,1) 0 0 2px,rgba(236, 162, 14,1) 0 0 2px,rgba(236, 162, 14,1) 0 0 2px,rgba(236, 162, 14,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style8);
	lib.groupnature.trickstar='trickstar';
	lib.group.push('trickstar');
	lib.translate['trickstar']='Trickstar';
	
	var style9=document.createElement('style');
	style9.innerHTML=".player.identity[data-color='knights'],";
	style9.innerHTML+="div[data-nature='knights'],";
	style9.innerHTML+="span[data-nature='knights'] {text-shadow: black 0 0 1px,rgba(44, 57, 89,1) 0 0 2px,rgba(44, 57, 89,1) 0 0 5px,rgba(44, 57, 89,1) 0 0 10px,rgba(44, 57, 89,1) 0 0 10px}";
	style9.innerHTML+="div[data-nature='knightsm'],";
	style9.innerHTML+="span[data-nature='knightsm'] {text-shadow: black 0 0 1px,rgba(44, 57, 89,1) 0 0 2px,rgba(44, 57, 89,1) 0 0 5px,rgba(44, 57, 89,1) 0 0 5px,rgba(44, 57, 89,1) 0 0 5px,black 0 0 1px;}";
	style9.innerHTML+="div[data-nature='knightsmm'],";
	style9.innerHTML+="span[data-nature='knightsmm'] {text-shadow: black 0 0 1px,rgba(44, 57, 89,1) 0 0 2px,rgba(44, 57, 89,1) 0 0 2px,rgba(44, 57, 89,1) 0 0 2px,rgba(44, 57, 89,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style9);
	lib.groupnature.knights='knights';
	lib.group.push('knights');
	lib.translate['knights']='Knights';
	
	var style10=document.createElement('style');
	style10.innerHTML=".player.identity[data-color='ryuseitai'],";
	style10.innerHTML+="div[data-nature='ryuseitai'],";
	style10.innerHTML+="span[data-nature='ryuseitai'] {text-shadow: black 0 0 1px,rgba(212, 2, 36,1) 0 0 2px,rgba(212, 2, 36,1) 0 0 5px,rgba(212, 2, 36,1) 0 0 10px,rgba(212, 2, 36,1) 0 0 10px}";
	style10.innerHTML+="div[data-nature='ryuseitaim'],";
	style10.innerHTML+="span[data-nature='ryuseitaim'] {text-shadow: black 0 0 1px,rgba(212, 2, 36,1) 0 0 2px,rgba(212, 2, 36,1) 0 0 5px,rgba(212, 2, 36,1) 0 0 5px,rgba(212, 2, 36,1) 0 0 5px,black 0 0 1px;}";
	style10.innerHTML+="div[data-nature='ryuseitaimm'],";
	style10.innerHTML+="span[data-nature='ryuseitaimm'] {text-shadow: black 0 0 1px,rgba(212, 2, 36,1) 0 0 2px,rgba(212, 2, 36,1) 0 0 2px,rgba(212, 2, 36,1) 0 0 2px,rgba(212, 2, 36,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style10);
	lib.groupnature.ryuseitai='ryuseitai';
	lib.group.push('ryuseitai');
	lib.translate['ryuseitai']='流星隊';
	
	lib.translate.akatsukiColor="#D00709";

	if (lib.config.extensions.includes('千幻聆音')){
		var dlList2=['akatsuki','eden','alkaloid','undead','fine','crazyb','twowink','trickstar','knights','ryuseitai'];
		if(!lib.qhly_groupcolor){
			lib.qhly_groupcolor = {};
		}
		lib.qhly_groupcolor['akatsuki'] = "#D00709";
		lib.qhly_groupcolor['eden'] = "#172030";
		lib.qhly_groupcolor['alkaloid'] = "#26B7CB";
		lib.qhly_groupcolor['undead'] = "#7D2AAE";
		lib.qhly_groupcolor['fine'] = "#FFFFFF";
		lib.qhly_groupcolor['crazyb'] = "#FFFF01";
		lib.qhly_groupcolor['twowink'] = "#FFA2FF";
		lib.qhly_groupcolor['trickstar'] = "#ECA20E";
		lib.qhly_groupcolor['knights'] = "#2C3959";
		lib.qhly_groupcolor['ryuseitai'] = "#D40224";
		var download=function(){
			var url_search='https://raw.githubusercontent.com/jy-umehara/noname-extensions/main/name_'+dlList2[0]+'.png';
			var destination='extension/千幻聆音/name_'+dlList2[0]+'.webp';
			if(lib.qhly_groupimage){lib.qhly_groupimage[dlList2[0]] = 'extension/千幻聆音/name_'+dlList2[0]+'.webp';}
			game.readFile(destination,function(){
				dlList2.remove(dlList2[0]);
				if (dlList2[0]) download();
			},function(){
				game.download(url_search,destination,function(){
					alert('下载'+get.translation(dlList2[0])+'图标成功');
					dlList2.remove(dlList2[0]);
					if (dlList2[0]) download();
				},function(){
					alert('下载'+get.translation(dlList2[0])+'失败，正在重试');
					download();
				});
			});
		}
		download();
	}
	//lib.translate.akatsuki='<img src='+lib.assetURL+"extension/偶像梦幻祭/name_akatsuki.png"+' width="28" height="28">';

},precontent:function (){
	if (lib.config.extensions.includes('十周年UI')){
		var dlList=['akatsuki','eden','alkaloid','undead','fine','crazyb','twowink','trickstar','knights','ryuseitai'];
		var download=function(){
			var url_search='https://raw.githubusercontent.com/jy-umehara/noname-extensions/main/name_'+dlList[0]+'.png';
			var destination='extension/十周年UI/image/decoration/name_'+dlList[0]+'.png';
			game.readFile(destination,function(){
				dlList.remove(dlList[0]);
				if (dlList[0]) download();
			},function(){
				game.download(url_search,destination,function(){
					alert('下载'+get.translation(dlList[0])+'图标成功');
					dlList.remove(dlList[0]);
					if (dlList[0]) download();
				},function(){
					alert('下载'+get.translation(dlList[0])+'失败，正在重试');
					download();
				});
			});
		}
		download();
	}
	
	lib.skill._EShide={
		trigger:{global:'gameStart'},
		charlotte:true,
		forced:true,
		silent:true,
		content:function (){
			if(player.name=='unknown') {player.changeGroup('jin')};
		}
	}

		/*var folder='extension/十周年UI/image/decoration/name_akatsuki.png';
		game.download(url,folder,function(){
			//alert('下载成功');
		},function(){
			if(confirm('下载失败，是否继续下载？')){
				EScopier();
			}
		});*/
    
},help:{},config:{},package:{
    character:{
        character:{
            hasumikeito:["male","akatsuki",4,["kulao","shuojiao","hongyue"],["zhu","des:《偶像梦幻祭》系列游戏及其衍生作品的登场角色。寺院住持的儿子，说教起来会喋喋不休无止无尽。性格虽然一本正经很难相处，但有点不擅长应对突发状况。歌声艳美通透，表演风格如行云流水般美丽。所属于「Rhythm Link」旗下的「红月」并担任队长一职。"]],
            kiryukuro:["male","akatsuki",5,["kongshou"],["des:外表虽然凶神恶煞，但其实擅长缝纫，也会亲手制作演出服装。性格上很会照顾人充满男子气概，但有时也会对年幼的妹妹过度保护。歌声不仅有力道而且又温柔，表演风格粗犷并有亮眼之处。所属于「Rhythm Link」旗下的「红月」。"]],
            rannagisa:["male","eden",4,["ESyizhi","gechen","leyuan"],["zhu","des:曾有很长一段时间的生活与尘世隔绝，因而有些不谙世事。同时和七种茨两人一起作为「Adam」展开偶像活动。性格沉稳文静，但心思缜密，同时也很珍视伙伴。歌声仿佛是在深深倾诉，表演风格有着令人着迷的魅力。所属于「COSMIC PRODUCTION」旗下的「Eden」并担任队长一职。"]],
            kanzakisouma:["male","akatsuki",4,["mashu","ESdaoshu"],["des:驰骋于现代，神马之武士偶像 从平时起就一直随身佩戴武士刀生活的现代武士。言行举止也十分有古代风格。性格一本正经爱照顾人，但有时也会盲目冒进。歌声舒展悠然，表演风格认真且犀利。所属于「Rhythm Link」旗下的「红月」。"]],
            saegusaibara:["male","eden",3,["qinling","ESzili"],["des:「COSMIC PRODUCTION」的副所长、偶像代表兼企业经营者。同时也是一位青年企业家。性格善于社交，但行事动机大多是为自身目的以及谋利。歌声通透甜美，表演风格精准无比又富有技巧。所属于「COSMIC PRODUCTION」旗下的「Eden」。"]],
            tomoehiyori:["male","eden",3,["liangri","ganjing"],["des:巴财团的富家公子。同时和涟纯两人一起作为「Eve」展开偶像活动。性格阳光善于社交，但会把别人带进自己的步调节奏里。歌声甜美华丽，表演风格优美而舒展悠然。所属于「COSMIC PRODUCTION」旗下的「Eden」。"]],
            sazanamijun:["male","eden",4,["yingcong","yuexian"],["des:性格认真满腔热忱，但一提起巴日和，说话就会变得很不客气。歌声略为沙哑听上去仿若摇曳的水面，表演风格能量十足。所属于「COSMIC PRODUCTION」旗下的「Eden」。"]],
            amagihiiro:["male","alkaloid",3,["miexiang","xiangshi","EShongyan","shengjian"],["zhu","des:在对偶像业界的知识一片空白的状态下就立志成为偶像的新人。性格积极纯真又热情，有时也会勉强自己。是天城燐音的弟弟。有时也会因为冲动贸然从事。歌声洪亮有底气，表演风格率直有力道。所属于「STARMAKER PRODUCTION」旗下的「ALKALOID」并担任队长一职。"]],
            kazehayatatsumi:["male","alkaloid",4,["tianjia","tane"],["des:因事故而暂停偶像活动，有偶像工作从业经验。家里是教堂。性格温柔又慢条斯理，有包容力。或许因为是圣职者，所以也能够感知到邪恶气息。歌声通透悠扬响至天空，表演风格温柔而又沉稳。所属于「STARMAKER PRODUCTION」旗下的「ALKALOID」。"]],
            ayasemayoi:["male","alkaloid",3,["biancang","ESmidao"],["des:喜欢弱小存在的奇怪的人。有时会把心中的冲动想法说漏嘴。性格胆小又自卑，无法对遇见困难的人视而不见。似乎并不太擅长在人前露面。歌声深邃摇曳，表演风格柔韧有张力。所属于「STARMAKER PRODUCTION」旗下的「ALKALOID」。"]],
            shiratoriaira:["male","alkaloid",3,["aixiang","biansheng"],["des:非常喜欢偶像的偶像宅。母亲是法日混血因此本人是四分之一混血儿。性格善于社交，开朗不怯场。有常识但也有会老实接受现实的一面。歌声具备少年特色天真无邪，表演风格时而能窥见其可爱一面。所属于「STARMAKER PRODUCTION」旗下的「ALKALOID」。"]],
            sakumarei:["male","undead",4,["ESxixue","yewang","busi"],["zhu","des:自称吸血鬼。博学多识但早上起不来床，晨间没有精神。性格上有时会显得看透尘世，做事深思熟虑，对于自己人的伙伴意识很强。溺爱弟弟朔间凛月。歌声美艳令人入迷，表演风格温柔而又有力道。所属于「Rhythm Link」旗下的「UNDEAD」并担任队长一职。"]],
            hakazekaoru:["male","undead",4,["qingfu","qiuhui","weigu"],["des:被女孩子众星捧月就能鼓起干劲。兴趣是冲浪。性格轻佻又无拘无束捉摸不定，但也重视关心伙伴并体贴周到。歌声美艳又有一丝沙哑，表演风格也很华丽。所属于「Rhythm Link」旗下的「UNDEAD」。"]],
            otogariadonis:["male","undead",4,["quanrou"],["des:从中东来到日本，充满异国风情的混血青年。性格善良，厌恶暴力行为并且对弱小生物有很强的保护欲。歌声温柔仿佛能包容一切，表演风格既有力道又温柔。所属于「Rhythm Link」旗下的「UNDEAD」。"]],
            ogamikoga:["male","undead",4,["kuangquan"],["des:以摇滚的活法为目标的孤高探求者。讨厌保守的做派。性格急躁易冲动，但有时却也懂得常识。歌声充满热情又有力道，表演风格夸张且倾尽全力。所属于「Rhythm Link」旗下的「UNDEAD」。"]],
            tenshouineichi:["male","fine",3,["fubing","xiaotu","jizhan","ESzhongjie"],["zhu","des:偶像事务所「STARMAKER PRODUCTION」的偶像代表兼企业经营者。性格冷静沉着，深思熟虑，比任何人都要热爱偶像。歌声温柔细腻，表演风格高雅又饱含温暖。所属于「STARMAKER PRODUCTION」旗下的「fine」并担任队长一职。"]],
            hibikiwataru:["male","fine",4,["qibian"],["des:具有戏剧表演的天赋、擅长魔术表演、多才多艺的多栖偶像。性格欢闹静不下来。十分重视爱与惊奇。歌声如起舞般雀跃欢快、表演风格大胆又华丽。所属于「STARMAKER PRODUCTION」旗下的「fine」。"]],
            himemiyatori:["male","fine",3,["aitao","suiying"],["des:姬宫家的长子、家境优渥。伏见弓弦是从他儿时就侍奉左右的执事兼照顾者以及顾问。性格开朗纯真、但同时身为富家公子的自尊心也很强。歌声稚嫩讨喜、表演风格也是十分可爱。所属于「STARMAKER PRODUCTION」旗下的「fine」。"]],
            fushimiyuzuru:["male","fine",4,["saozhang"],["des:一边作为执事侍奉姬宫桃李，一边与他一同进行偶像活动。性格冷静沉着，善于随机应变，长年的执事生涯造就了出色的辅佐能力。歌声柔和，表演风格精准无比而又高雅。所属于「STARMAKER PRODUCTION」旗下的「fine」。"]],
            amagirinne:["male","crazyb",4,["dubo","fengfeng"],["zhu","des:把兴趣和人生都当成博弈的偶像，与椎名丹希曾是双人搭档。性格开朗大方，但也有铺张浪费以及粗暴的一面。是天城一彩的哥哥。有时会试图检验自己的运气好坏。歌声听上去像是在玩耍一样调皮，表演风格有力道而豪爽。所属于「COSMIC PRODUCTION」旗下的「Crazy:B」并担任队长一职。 "]],
            shiinaniki:["male","crazyb",4,["wujie","ESzhishi"],["des:同时作为厨艺人从事工作的偶像，与天城燐音曾是双人搭档。性格静不下来，容易被别人带着跑，但同时也是很阳光。肚子一饿就会变得暴躁。平时为人随和，很好相处。歌声显得调皮，表演风格也很轻快活泼。所属于「COSMIC PRODUCTION」旗下的「Crazy:B」。"]],
            himeru:["male","crazyb",4,["remeizhi"],["des:原本是一名单人活动的偶像，说话方式总让人觉得像是在与别人保持距离。性格温柔沉稳，但却难以捉摸，时不时能看到他仿佛是在确认自身行动一样的言行。歌声好似在引诱魅惑，表演风格有一番超过其实际年龄的性感韵味。所属于「COSMIC PRODUCTION」旗下的「Crazy:B」。 "]],
            oukawakohaku:["male","crazyb",3,["fangxiao"],["des:对外界社会的认知仅限于从网络与电视上获取的信息，所以知识信息与现实有些落差。出身于朱樱家的分家。性格刻苦努力，有忍耐力，但在面对自己人时语气会变得强硬。说话带有京都方言特色，很多时候言行举止显得比实际年龄更为成熟。歌声锐利，表演风格细致犀利。所属于「COSMIC PRODUCTION」旗下的「Crazy:B」。 "]],
            aoihinata:["male","twowink",3,["exi","xitian","huti","shuangzha"],["zhu","des:双胞胎兄弟中的哥哥。喜欢恶作剧，行事迅速。性格阳光调皮，容易冲动，同时也非常珍视自己的弟弟裕太。歌声温暖又活力十足，表演风格异乎寻常自由自在。所属于「COSMIC PRODUCTION」旗下的「2wink」并担任队长一职。"]],
            aoiyuuta:["male","twowink",3,["duyuan","xila","huti"],["des:双胞胎兄弟中的弟弟，比起哥哥更沉稳一些。性格开朗善于社交，不过也因正值青春期时而会感到不安。很珍视自己的哥哥日向。歌声温柔又活力十足，表演风格异乎寻常自由自在。所属于「COSMIC PRODUCTION」旗下的「2wink」。"]],
            hidakahokuto:["male","trickstar",4,["lengwang","jixing"],["zhu","des:父亲是现役偶像，母亲是著名演员，属于演艺界的名门之后。性格冷静有胆识，但可能是成长环境所致，有时候会显得有些天然。歌声有力道而通透，表演风格也能量十足。所属于「STARMAKER PRODUCTION」旗下的「Trickstar」并担任队长一职。"]],
            akehoshisubaru:["male","trickstar",3,["shanxing","jiejin"],["des:一名父亲曾是偶像的偶像。如今正在追寻属于自己的光辉。性格天真烂漫，同时也有热情洋溢的一面。喜欢闪闪发光的事物。歌声如光芒一般闪耀动人，表演风格欢快动人活力十足。所属于「STARMAKER PRODUCTION」旗下的「Trickstar」。"]],
            yuukimakoto:["male","trickstar",3,["tanqing","biquan"],["des:过去拥有做童模的经历，摆造型的技术很优秀。性格开朗平易近人，眼镜是其魅力所在。歌声阳光富有亲和力，表演风格细致入微又具备柔韧性。所属于「STARMAKER PRODUCTION」旗下的「Trickstar」。"]],
            isaramao:["male","trickstar",3,["zhuwu","cunyi"],["des:平易近人又擅长与人沟通交流。在梦之咲学院担任学生会长一职。性格爽朗善于社交，但却容易被牵扯进麻烦事。 歌声明朗甜美，表演风格华丽又能量十足。所属于「STARMAKER PRODUCTION」旗下的「Trickstar」。"]],
            suoutsukasa:["male","knights",3,["waiqi","jiangjun","huyou"],["des:身为名门之子而且会以骑士道精神为原则行动，因此与同龄人相比更为沉稳。性格虽然认真且有责任感，但是也有急性子和孩子气的一面。歌声率真坦诚，表演风格有力道又不失优雅。所属于「NEW DIMENSION」旗下的「Knights」并担任队长一职。"]],
            tsukinagaleo:["male","knights",3,["yuxiang"],["des:身为卖座作曲家受到国内外的广泛关注。性格纯粹自由奔放，但也懂得关心伙伴，而且性格也会比较敏感。歌声如同玩乐般富于变化，表演风格充满自信。所属于「NEW DIMENSION」旗下的「Knights」。"]],
            senaizumi:["male","knights",4,["qiujin","zhuzhen"],["des:一边在欧洲从事模特工作同时也在做偶像工作。性格虽然专注又有些神经质，但对自己敞开心扉的人也会十分照顾。歌声洪亮有底气，表演风格舒展悠然又美丽。所属于「NEW DIMENSION」旗下的「Knights」。"]],
            narukamiarashi:["male","knights",4,["weiyou","yixin"],["des:自称「姐姐」，喜欢照顾人。喜欢可爱的事物。性格平易近人善于社交，但情绪起伏稍微有些激烈。歌声明快又温柔，表演风格细腻又充满自信。所属于「NEW DIMENSION」旗下的「Knights」。"]],
            sakumaritsu:["male","knights",3,["ESxixue","shenmian","qianghuan"],["des:白天时很难提起干劲，更多的时间是在各个地方小睡。性格我行我素又悠闲自在，但其实思维敏捷，偶尔也会说出些刻薄的话语。歌声如同耳边细语一般甜美，表演风格如行云流水般悠然。所属于「NEW DIMENSION」旗下的「Knights」。 就读于梦之咲3-B，担任红茶部部长。 "]],
            morisawachiaki:["male","ryuseitai",4,["rexiong"],["des:向往英雄，作为英雄而活的偶像。在演艺界的身份是「流星队M」的队长。性格直爽，做事全力拼搏，是个比任何人都要珍惜伙伴的热血男儿。歌声有力道，表演风格率直并竭尽全力。所属于「STARMAKER PRODUCTION」旗下的「流星队」并担任队长一职。担任红色流星。 "]],
            shinkaikanata:["male","ryuseitai",3,["shenhai","haiming","haishi"],["des:深爱大海，摸索身为人类的生存方式的偶像。家里经营海洋馆。性格安稳悠闲，拥有离开水就会变得呼吸困难压抑的体质。歌声柔和明快。表演风格悠缓恬静。所属于「STARMAKER PRODUCTION」旗下的「流星队」。担任蓝色流星。"]],
            sengokushinobu:["male","ryuseitai",3,["yinshen","shoujian"],["hiddenSkill","des:为推广传播忍者的魅力而进行活动的偶像。外表像小孩子，但其实很懂得注意周围察言观色。性格有些怕生，但面对熟人会很亲近开朗。歌声纯真充满活力，表演风格方面身材虽小但却十分灵活动感。所属于「STARMAKER PRODUCTION」旗下的「流星队」，担任黄色流星。"]],
        },
        translate:{
            hasumikeito:"莲巳敬人",
            kiryukuro:"鬼龙红郎",
            rannagisa:"乱凪砂",
            kanzakisouma:"神崎飒马",
            saegusaibara:"七种茨",
            tomoehiyori:"巴日和",
            sazanamijun:"涟纯",
            amagihiiro:"天城一彩",
            "偶像梦幻祭":"偶像梦幻祭",
            akatsuki:"紅月",
            eden:"Eden",
            alkaloid:"ALKALOID",
            kazehayatatsumi:"风早巽",
            ayasemayoi:"礼濑真宵",
            shiratoriaira:"白鸟蓝良",
            sakumarei:"朔间零",
            hakazekaoru:"羽风薰",
            otogariadonis:"阿多尼斯",
            ogamikoga:"大神晃牙",
            tenshouineichi:"天祥院英智",
            hibikiwataru:"日日树涉",
            himemiyatori:"姬宫桃李",
            fushimiyuzuru:"伏见弓弦",
            amagirinne:"天城燐音",
            shiinaniki:"椎名丹希",
            himeru:"HiMERU",
            oukawakohaku:"樱河琥珀",
            aoihinata:"葵日向",
            aoiyuuta:"葵裕太",
            hidakahokuto:"冰鹰北斗",
            akehoshisubaru:"明星昴流",
            yuukimakoto:"游木真",
            isaramao:"衣更真绪",
            suoutsukasa:"朱樱司",
            tsukinagaleo:"月永雷欧",
            senaizumi:"濑名泉",
            narukamiarashi:"鸣上岚",
            sakumaritsu:"朔间凛月",
            morisawachiaki:"守泽千秋",
            shinkaikanata:"深海奏汰",
            sengokushinobu:"仙石忍",
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
            kulao:{
                group:["kulao_mopai"],
                forced:true,
                subSkill:{
                    mopai:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                return (get.type(event.card)=='trick'&&player.isPhaseUsing());
            },
                        content:function (){
                "step 0"
                player.addTempSkill('kulao_count','phaseEnd');
                player.addMark('kulao_count',1,false);
                player.draw(player.countMark('kulao_count'));
                "step 1"
                if (player.countMark('kulao_count')>=3){
                    player.loseHp();
                    /*var evt=_status.event.getParent('phase');
                    if(evt){
                        game.resetSkills();
                        _status.event=evt;
                        _status.event.finish();
                        _status.event.untrigger(true);
                    }*/
                    var evt=_status.event.getParent('phaseUse');
                    if(evt&&evt.name=='phaseUse'){
                        evt.skipped=true;
                        event.finish();
                    }
                }
            },
                        ai:{
                            threaten:2.4,
                            effect:{
                                player:function (card,player,target){
                        if (get.type(card)=='trick'){
                            if (player.countMark('kulao_count')<2) return [1,player.countMark('kulao_count')+1];
                            return [1,-(player.countCards('h')-player.hp+2.5)];
                        }
                    },
                            },
                            noautowuxie:true,
                        },
                        sub:true,
                    },
                    count:{
                        mark:true,
                        intro:{
                            content:"本回合已发动#次",
                        },
                        onremove:true,
                        sub:true,
                    },
                },
            },
            shuojiao:{
                mark:false,
                intro:{
                    content:function (storage,player,skill){
            if(player.hasSkill('shuojiao')) return '手牌上限+'+player.countMark("shuojiao");
            return '本回合技能拥有者对其使用牌无次数限制';
        },
                },
                onremove:true,
                group:["shuojiao_xuanren","shuojiao_qingchu","shuojiao_jiabiaoji"],
                mod:{
                    cardUsableTarget:function (card,player,target){
            if(target.hasMark("shuojiao")&&target!=player) return true;
        },
                    maxHandcard:function (player,num){
            return num+player.countMark("shuojiao");
        },
                },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(target&&target.hasMark("shuojiao")) return [1,0.5];
            },
                    },
                    threaten:0.4,
                },
                subSkill:{
                    xuanren:{
                        direct:true,
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        content:function (){
                "step 0"
                player.chooseTarget("是否发动【说教】，在此阶段内对一名其他角色使用牌无次数限制？",function(card,player,target){
                    return player!=target;
                }).set("ai",function(target){
                    if (target.inRange(player)) return -get.attitude(player,target)*100;
                    return -get.attitude(player,target);
                });
                "step 1"
                if(result.bool){
                    result.targets[0].addMark("shuojiao");
                    player.logSkill('shuojiao',result.targets);
                    game.log(player,"在此阶段内对",result.targets,"使用牌无次数限制");
                }
            },
                        sub:true,
                    },
                    jiabiaoji:{
                        charlotte:true,
                        forced:true,
                        silent:true,
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        filter:function (event,player){
                return event.target.hasMark("shuojiao")&&event.target!=player;
            },
                        content:function (){
                player.addMark("shuojiao");
            },
                        sub:true,
                        popup:false,
                    },
                    qingchu:{
                        trigger:{
                            global:"phaseZhunbeiBegin",
                        },
                        filter:function (event,player){
                return game.hasPlayer(function(current){
                    return (current.hasMark("shuojiao"));
                });
            },
                        charlotte:true,
                        forced:true,
                        popup:false,
                        content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasMark("shuojiao")){
                        game.players[i].removeMark("shuojiao",game.players[i].countMark("shuojiao"));
                    }
                }
            },
                        sub:true,
                    },
                },
            },
            ESdaoshu:{
                group:["ESdaoshu_1"],
                shaRelated:true,
                ai:{
                    threaten:1.2,
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha') return [1.5,2];
            },
                    },
                },
                subSkill:{
                    "1":{
                        shaRelated:true,
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        prompt:function (event,player){
                return "是否弃置"+get.translation(event.target)+"的两张手牌？";
            },
                        filter:function (event,player){
                return event.card.name=='sha'&&event.target.countDiscardableCards(player,'h')>0;
            },
                        check:function (event,player){
                return get.attitude(player,event.target)<=0;
            },
                        content:function (){
                'step 0'
                player.line(trigger.target);
                player.discardPlayerCard(trigger.target,2,'h',true);
                if (get.position(trigger.cards[0],true)=='o'&&!player.hasSkill('ESdaoshu_phase')) {
                    player.gain(trigger.cards,'gain2');
                    player.addTempSkill('ESdaoshu_phase');
                }
                /*'step 1'
                if (trigger.target.countDiscardableCards(player,'e')>0){
                    player.discardPlayerCard(trigger.target,'e',false);
                }*/
            },
                        sub:true,
                    },
                    phase:{
                        sub:true,
                    },
                },
            },
            kongshou:{
                trigger:{
                    source:"damageBegin1",
                },
                filter:function (event,player){
        if (!player.hasSkill('kongshou_2')&&player.isEmpty(1))return true;
        if (!player.hasSkill('kongshou_3')&&!player.isEmpty(1))return true;
        return false;
    },
                check:function (event,player){
        if (!player.hasSkill('kongshou_2')&&player.isEmpty(1)){
            return get.attitude(player,event.player)<0;
        } else return true;
    },
                prompt:function (event,player){
        if (player.isEmpty(1)){
            return "你可以令此伤害+1";
        } else return "你可以弃置装备区里的武器牌";
    },
                content:function (){
        if (!player.hasSkill('kongshou_2')&&player.isEmpty(1)){
            player.line(trigger.player);
            game.log(player,"令此伤害+1");
            trigger.num++;
            player.addTempSkill('kongshou_2');
        } else if (!player.hasSkill('kongshou_3')&&!player.isEmpty(1)) {
            player.chooseToDiscard('e','选择装备区里的武器牌',function(card,player){

                return get.subtype(card)=='equip1';
            },true);
            player.addTempSkill('kongshou_3');    
        };
    },
                ai:{
                    threaten:1.4,
                    effect:{
                        target:function (card,player,target){
                if(get.subtype(card)=='equip1') return -2.5;
            },
                    },
                },
                subSkill:{
                    "2":{
                        sub:true,
                    },
                    "3":{
                        sub:true,
                    },
                },
            },
            gechen:{
                forced:true,
                mod:{
                    targetEnabled:function (card,player,target){
            if (player!=target&&!target.inRange(player)) return false;
        },
                },
            },
            qinling:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:true,
                filterCard:true,
                position:"h",
                check:function (card){
        if (get.tag(card,'damage')==1) return 2.5*get.value(card);
        return get.value(card);
    },
                discard:false,
                lose:false,
                delay:false,
                mark:false,
                intro:{
                    content:function (storage,player,skill){
            return get.translation(player)+'的'+get.translation(player.storage.qinlingSuit)+'牌对目标角色造成的伤害+1';
        },
                },
                content:function (){
        "step 0"
        player.showCards(cards);
        player.line(target);
        target.storage.qinlingSuit=get.suit(cards[0]);
        event.togain=[];
        for(var i=0;i<ui.discardPile.childNodes.length;i++){
            var current=ui.discardPile.childNodes[i];
            if(get.suit(current)==target.storage.qinlingSuit&&get.tag(current,'damage')) event.togain.push(current);
        }
        if(!event.togain.length) event.goto(3);
        "step 1"
        target.chooseButton(['获得其中的一张牌',event.togain]).ai=function(button){
            return get.value(button.link);
        };
        "step 2"
        if(result.bool){
            target.gain(result.links[0],'gain2');
        }
        "step 3"
        if (player!=target) {
            target.gain(cards[0],player,'give');
            player.draw();
        };
        game.log(target,'使用',target.storage.qinlingSuit,'牌对目标角色造成的伤害+1');
        target.addMark("qinling",1);
        target.addSkill('qinling_2');
        player.addSkill('qinling_3');
        
    },
                ai:{
                    order:15,
                    result:{
                        target:function (player,target){
                return (target.countCards('h')/4+1)*2.5+1;
            },
                        player:function (player,target){
                if (player!=target) return 0.3;
                return 0;
            },
                    },
                    threaten:2,
                },
                subSkill:{
                    "2":{
                        trigger:{
                            source:"damageBegin1",
                        },
                        filter:function (event,player){
                return event.card&&(event.card.suit==player.storage.qinlingSuit)&&event.notLink();
            },
                        forced:false,
                        check:function (event,player){
                return get.attitude(player,event.player)<0;
            },
                        content:function (){
                player.line(trigger.target);
                trigger.num++;
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                    "3":{
                        trigger:{
                            player:["phaseBegin","dieBegin"],
                        },
                        silent:true,
                        charlotte:true,
                        content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('qinling_2')){
                        game.players[i].removeSkill('qinling_2');
                        game.players[i].removeMark("qinling",1);
                    }
                }
                player.removeSkill('qinling_3');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            ESzili:{
                mod:{
                    playerEnabled:function (card,player,target){
            if(player!=target&&(card.name=='taoyuan'||card.name=='wugu')) return false;
        },
                },
            },
            liangri:{
                trigger:{
                    player:"phaseDrawBegin2",
                },
                frequent:true,
                filter:function (event,player){
        return !event.numFixed;
    },
                content:function (){
        'step 0'
        player.judge(function(card){
            if(get.color(card)=='red') return 1;
            return -1;
        });
        'step 1'
        if(result.color){event.color=result.color;};
        'step 2'
        if(event.color){
            if(event.color=='red'){
                if(player.hp<player.maxHp) {
                    player.chooseControl("回血","摸牌",true).set("prompt","请选择一项").set("ai",function(event,player){
                        return "回血";
                    });
                }
            }
        }
        'step 3'
        if(event.color){
            if(event.color=='red'){
                if (result.control=="回血"){player.recover();}
                else trigger.num+=2;
            }
        }
    },
                ai:{
                    threaten:0.8,
                },
            },
            ganjing:{
                mark:false,
                intro:{
                    content:"以此法获得了#张牌",
                },
                group:["ganjing_2"],
                trigger:{
                    player:"judgeEnd",
                },
                direct:true,
                filter:function (event,player){
        return get.position(event.result.card,true)=='o';
    },
                content:function (){
        "step 0"
        player.storage.ganjingNum=0;
        event.num=0;
        for(var i=0;i<game.players.length;i++){
            var current=game.players[i];
            if(current!=player&&current.countMark('ganjing')>event.num){
                player.storage.num=current.countMark('ganjing');
            }
        }
        player.chooseTarget("是否发动【甘阱】,将判定牌交给一名其他角色？",function(card,player,target){
            return player!=target;
            event.value=get.value(card);
        }).set("ai",function(target){
            if (player.storage.ganjingNum>0){
                if (target.countMark('ganjing')<player.storage.ganjingNum||event.value>8) return get.attitude(player,target);
            } 
            return -get.attitude(player,target);
        });
        "step 1"
        if (result.bool){
            player.logSkill('ganjing',result.targets);
            player.line(result.targets[0]);
            result.targets[0].gain(trigger.result.card,'gain2');
            result.targets[0].addMark('ganjing');
        }
    },
                subSkill:{
                    "2":{
                        charlotte:true,
                        forced:true,
                        trigger:{
                            global:"phaseJieshuBegin",
                        },
                        filter:function (event,player){
                return game.hasPlayer(function(current){
                    return current!=player&&current.hasMark('ganjing');
                });
            },
                        content:function (){
                "step 0"
                var num=0;
                for(var i=0;i<game.players.length;i++){
                    var current=game.players[i];
                    if(current!=player&&current.countMark('ganjing')>num){
                        num=current.countMark('ganjing');
                    }
                }
                event.playerCount=0;
                for (var i=0;i<game.players.length;i++){
                    var current=game.players[i];
                    if(current.countMark('ganjing')==num){
                        event.playerCount++;
                        event.target=current;
                    } 
                }
                if (event.playerCount>1){
                    player.chooseTarget(true,'请选择目标，令其失去1点体力',function(card,player,target){
                        return target!=player&&target.countMark('ganjing')==_status.event.num;
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    }).set('num',num);
                }
                "step 1"
                if(result.bool&&result.targets&&result.targets.length){
                    var target=result.targets[0];
                    event.target=target;
                    player.logSkill('ganjing',target);
                    player.line(target);
                    game.delay();
                } else if (event.target){
                    player.logSkill('ganjing',event.target);
                    player.line(event.target);
                    game.delay();
                }
                "step 2"
                event.target.loseHp();
                "step 3"
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasMark('ganjing')){
                        game.players[i].removeMark("ganjing",game.players[i].countMark('ganjing'));
                    }
                }
                
            },
                        sub:true,
                    },
                },
            },
            yingcong:{
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        if (_status.currentPhase==player) return false;
        return (player.countCards('he')>0);
    },
                check:function (event,player){
        if(get.attitude(player,event.player)>0) return true;
        return false;
    },
                content:function (){
        "step 0"
        player.chooseCard({
            position:'he',
            prompt:function(){
                return "将一张牌交给"+get.translation(trigger.player);
            },
            ai:function(card){
                var weight=0.5;
                if (get.type(card)=='equip') weight=1;
                return (20-get.value(card))*weight;
            },
        });
        "step 1"
        if(result.bool){
            player.logSkill('yingcong',_status.currentPhase);
            player.line(_status.currentPhase);
            player.draw();
            event.thisTarget=_status.currentPhase;
            var thisCard=result.cards[0];
            if (get.type(thisCard)=='equip') {
                event.thisTarget.equip(thisCard);
            } else {
                event.thisTarget.gain(thisCard,player,'give');
                };
        }
        else{
            event.finish();
        }
        "step 2"
        event.thisTarget.judge(function(card){
            if(get.color(card)=='black') return 1;
            return -1;
        });
        "step 3"
        if(result.color){
            if(result.color=='black'){
                event.thisTarget.draw();
            }
        }
    },
                ai:{
                    threaten:2.25,
                    result:{
                        target:0.5,
                        player:function (player,target){
                        if(get.attitude(player,target)>0)  return 0;
                        return -2.5;
            },
                    },
                },
            },
            yuexian:{
                frequent:true,
                trigger:{
                    player:["changeHp"],
                },
                content:function (){
        player.draw();
        player.storage.yuexian_change+=1;
        player.addSkill('yuexian_change');
    },
                ai:{
                    maihp:true,
                    threaten:0.5,
                },
                init:function (player){
        player.storage.yuexian_change=0;
    },
                subSkill:{
                    change:{
                        mod:{
                            maxHandcard:function (player,num){
                    if(player.storage.yuexian_change) return num+player.storage.yuexian_change;
                },
                        },
                        charlotte:true,
                        mark:true,
                        intro:{
                            content:(num)=>('手牌上限'+(num<0?'':'+')+num),
                        },
                        sub:true,
                    },
                },
            },
            miexiang:{
                enable:"phaseUse",
                usable:1,
                selectCard:1,
                filterCard:function (card){
      return get.suit(card)=="spade";
    },
                position:"h",
                selectTarget:1,
                filter:function (event,player){
        if(player.countCards('h')==0) return false;
        return game.hasPlayer(function(current){
            return current.hp>=player.hp&&current!=player;
        });
    },
                filterTarget:function (card,player,target){
        return target.hp>=player.hp&&target!=player;
    },
                check:function (card){
        return 8-get.value(card);
    },
                content:function (){
        target.damage(2,player);
    },
                ai:{
                    order:15,
                    result:{
                        target:function (player,target){
                return -5;
            },
                        player:function (player,target){
                return -1;
            },
                    },
                    threaten:3.2,
                },
            },
            xiangshi:{
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                filter:function (event,player){
        return (get.type(event.card,'trick')=='trick');
    },
                content:function (){
        game.log(trigger.card,'对',player,'无效');
        trigger.cancel();
    },
                mod:{
                    targetEnabled:function (card){
            if(get.type(card)=='delay') return false;
        },
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(get.type(card)=='trick') return 0;
            },
                    },
                    threaten:0.6,
                },
            },
            EShongyan:{
                forced:true,
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        return event.card&&get.color(event.card)=='red'&&(get.type(event.card)=='trick'||get.type(event.card)=='basic'&&!['shan','tao','jiu','du'].contains(event.card.name));
    },
                content:function (){
        trigger.directHit.addArray(game.filterPlayer(function(current){
            return current!=player;
        }));
        game.log(trigger.directHit,'不能使用或打出牌响应',trigger.card);
    },
                ai:{
                    "directHit_ai":true,
                    threaten:0.4,
                },
            },
            tianjia:{
                group:["tianjia_1"],
                subSkill:{
                    "1":{
                        enable:"phaseUse",
                        usable:1,
                        selectCard:0,
                        filter:function (event,player){
                if (player.hasSkill('tianjia_2')) return false;
                if (player.isEmpty(6)&&!player.countCards('e',{suit:'diamond'})) return false;
                if (player.hp==player.maxHp) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&get.distance(player,current)<=1;
                });
            },
                        filterTarget:function (card,player,target){
                return target!=player&&get.distance(player,target)<=1;;
            },
                        selectTarget:-1,
                        content:function (){
                "step 0"
                if(player.hp<player.maxHp && !player.hasSkill('tianjia_2')){
                    player.recover();
                    player.addTempSkill('tianjia_2');
                }
                "step 1"
                target.loseHp(1);
            },
                        ai:{
                            order:10,
                            result:{
                                target:function (player,target){
                        return -2.5;
                    },
                                player:function (player,target){
                        return 2-get.attitude(player,target)*2.5;
                    },
                            },
                            threaten:1.6,
                        },
                        sub:true,
                    },
                    "2":{
                        sub:true,
                    },
                },
            },
            tane:{
                mark:false,
                marktext:"邪",
                intro:{
                    name:"邪",
                    content:"mark",
                },
                group:["tane_1","tane_2"],
                subSkill:{
                    "1":{
                        trigger:{
                            global:"damageSource",
                        },
                        filter:function (event,player){
                return event.card&&event.source&&(get.color(event.card)=="black")&&event.source!=player&&event.source.countMark("tane")<2;
            },
                        forced:true,
                        locked:false,
                        content:function (){
                player.line(trigger.source);
                trigger.source.addMark("tane");
            },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            global:"phaseUseBegin",
                        },
                        filter:function (event,player){
                return game.hasPlayer(function(current){
                    return ((current.hasMark("tane"))&&_status.currentPhase!=current);
                });
            },
                        check:function (event,player){
                return (get.attitude(player,event.player)>0);
            },
                        content:function (){
                'step 0'
                player.chooseTarget("请选择任意名有“邪”标记的角色",[1,Infinity],function(card,player,target){
                    return _status.currentPhase!=target&&target.hasMark("tane");
                }).set("ai",function(target){
                    return -get.attitude(player,target);
                });
                'step 1'
                if(result.bool){
                    event.targets=result.targets.slice(0).sortBySeat();
                    event.list=event.targets.slice(0);
                    player.logSkill('tane',event.targets);
                };
                'step 2'
                if(event.targets&&event.targets.length){
                    var target=event.targets.shift();
                    target.removeMark("tane");
                    target.addTempSkill("baiban");
                    target.addTempSkill("tane_3");
                    game.log(target,'此回合所有武将技能无效且不能使用或打出牌且所有角色与其的距离为1');
                    event.redo();
                }
                else event.finish();
            },
                        ai:{
                            threaten:0.4,
                        },
                        sub:true,
                    },
                    "3":{
                        charlotte:true,
                        intro:{
                            content:function (storage){
                    game.log('不能使用/打出牌');
                },
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    return false;
                },
                            cardUsable:function (card,player){
                    return false;
                },
                            cardRespondable:function (card,player){
                    return false;
                },
                            globalTo:function (from,to,distance){
                    return -Infinity;
                },
                            cardSavable:function (card,player){
                    return false;
                },
                        },
                        ai:{
                            threaten:250,
                            effect:{
                                target:function (card,player,target){
                        return 1.5;
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            biancang:{
                mark:true,
                locked:false,
                zhuanhuanji:true,
                marktext:"☯",
                intro:{
                    content:function (storage,player,skill){
            if(player.storage.biancang==true) return '当你需要使用【杀】时，你可以将一张草花牌当【杀】对任意名角色使用。当你因以此法使用的【杀】对体力值不大于你的目标角色造成伤害时，你回复1点体力。';
            return '当你受到伤害后，你可以令其他角色与你的距离+2，直至你使用【杀】造成伤害时。';
        },
                },
                group:["biancang_1","biancang_2"],
                subSkill:{
                    "1":{
                        prompt:"当你受到伤害后，你可以令其他角色与你的距离+2，直至你使用【杀】造成伤害时。",
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function (event,player){
                return (player.storage.biancang!=true);
            },
                        check:function (event,player){return 1},
                        content:function (){
                player.changeZhuanhuanji('biancang');
                player.addSkill('biancang_3');
                player.addSkill('biancang_4');
            },
                        ai:{
                            result:{
                                player:function (player){
                        return 0.5;
                    },
                            },
                            threaten:0.5,
                        },
                        sub:true,
                    },
                    "2":{
                        prompt:"当你需要使用【杀】时，你可以将一张草花牌当【杀】对任意名角色使用。当你因以此法使用的【杀】对体力值不大于你的目标角色造成伤害时，你回复1点体力。",
                        enable:"chooseToUse",
                        filterCard:function (card,player){
                return get.suit(card)=='club';
            },
                        position:"hes",
                        viewAs:{
                            name:"sha",
                        },
                        filter:function (event,player){
                return (player.storage.biancang==true);
            },
                        viewAsFilter:function (player){
                if(!player.countCards('hes',{suit:'club'})) return false;
                return true;
            },
                        filterTarget:function (card,player,target){
                return target!=player;
            },
                        selectTarget:[1,Infinity],
                        check:function (card){
                var val=get.value(card);
                return 5-val;
            },
                        onuse:function (result,player){
                'step 0'
                player.changeZhuanhuanji('biancang');
                player.storage.biancangCard=result.card;
                player.storage.biancangCards=result.cards;
                game.log(result.card);
                game.log(result.cards);
                'step 1'
                player.addSkill('biancang_5');
                player.addSkill('biancang_6');
            },
                        ai:{
                            skillTagFilter:function (player){
                    if(!player.countCards('hes',{suit:'clover'})) return false;
                },
                            canLink:function (player,target,card){
                    if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                    if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                        target:target,
                        card:card,
                    },true)) return false;
                    if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
                    return true;
                },
                            basic:{
                                useful:[5,3,1],
                                value:[5,3,1],
                            },
                            order:15,
                            result:{
                                target:function (player,target,card,isLink){
                        var eff=function(){
                            if(!isLink&&player.hasSkill('jiu')){
                                if(!target.hasSkillTag('filterDamage',null,{
                                    player:player,
                                    card:card,
                                    jiu:true,
                                })){
                                    if(get.attitude(player,target)>0){
                                        return -7;
                                    }
                                    else{
                                        return -4;
                                    }
                                }
                                return -0.5;
                            }
                            return -1.5;
                        }();
                        if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                            target:target,
                            card:card,
                        },true)) return eff/1.2;
                        return eff;
                    },
                                player:function (player,target,card){
                        if (get.name(card)=='sha'&&get.suit(card)=='club') return 2;
                    },
                            },
                            tag:{
                                damage:function (card){
                        return 1;
                    },
                                natureDamage:function (card){
                        if(card.nature) return 1;
                    },
                                fireDamage:function (card,nature){
                        if(card.nature=='fire') return 1;
                    },
                                thunderDamage:function (card,nature){
                        if(card.nature=='thunder') return 1;
                    },
                                respond:1,
                                respondShan:1,
                                poisonDamage:function (card,nature){
                            if(card.nature=='poison') return 1;
                        },
                            },
                            yingbian:function (card,player,targets,viewer){
                        if(get.attitude(viewer,player)<=0) return 0;
                        var base=0,hit=false;
                        if(get.cardtag(card,'yingbian_hit')){
                            hit=true;
                            if(targets.filter(function(target){
                                return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                            })) base+=5;
                        }
                        if(get.cardtag(card,'yingbian_all')){
                            if(game.hasPlayer(function(current){
                                return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                            })) base+=5;
                        }
                        if(get.cardtag(card,'yingbian_damage')){
                            if(targets.filter(function(target){
                                return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                                },true))&&!target.hasSkillTag('filterDamage',null,{
                                    player:player,
                                    card:card,
                                    jiu:true,
                                })
                            })) base+=5;
                        }
                        return base;
                    },
                        },
                        sub:true,
                    },
                    "3":{
                        mod:{
                            globalTo:function (from,to,distance){
                    return distance+2;
                },
                        },
                        sub:true,
                    },
                    "4":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,player){
                return event.card&&(event.card.name=='sha');
            },
                        silent:true,
                        charlotte:true,
                        forced:true,
                        content:function (){
                if(player.hasSkill('biancang_3')){
                    player.removeSkill('biancang_3');
                    player.removeSkill('biancang_4');
                }
            },
                        sub:true,
                        popup:false,
                    },
                    "5":{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event,player){
                return event.card&&(event.card==player.storage.biancangCard)&&(event.cards[0]==player.storage.biancangCards[0])&&(player.hp>=event.player.hp);
            },
                        forced:true,
                        content:function (){
                player.recover();
            },
                        sub:true,
                    },
                    "6":{
                        trigger:{
                            player:["useCardAfter","dieBegin"],
                        },
                        filter:function (event,player){
                return event.card&&(event.card==player.storage.biancangCard)&&(event.cards[0]==player.storage.biancangCards[0]);
            },
                        charlotte:true,
                        forced:true,
                        silent:true,
                        content:function (){
                player.storage.biancangCard=null;
                player.storage.biancangCards=null;
                player.removeSkill('biancang_5');
                player.removeSkill('biancang_6');
            },
                        sub:true,
                        popup:false,
                    },
                },
            },
            ESmidao:{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-Infinity;
        },
                },
            },
            aixiang:{
                trigger:{
                    player:"phaseDrawBegin1",
                },
                forced:true,
                filter:function (event,player){
        return !event.numFixed;
    },
                content:function (){
        'step 0'
        trigger.changeToZero();
        'step 1'
        event.hasHeart=false;
        var cards=get.cards(Math.min(game.countPlayer(),7));
        game.cardsGotoOrdering(cards);
        player.showCards(cards);
        var cardsx=[];
        for(var i=0;i<cards.length;i++){
            if (get.suit(cards[i])=='heart') event.hasHeart=true;
            cardsx.push(cards[i]);
            game.delay(1);
        }
        event.cards=cardsx;
        'step 2'
        if (cards.length&&event.hasHeart) {
            player.gain(cards,'gain2');
        }
        else {
            game.cardsDiscard(cards);
            player.loseHp();
        }
    },
                ai:{
                    threaten:2,
                },
            },
            biansheng:{
                enable:"chooseToUse",
                filterCard:function (card,player){
        return get.suit(card)=='heart';
    },
                position:"hes",
                viewAs:{
                    name:"tao",
                },
                check:function (card){
        var val=get.value(card);
        return 16-val;
    },
                filter:function (event,player){
        return (event.type=='dying'&&player.isDying()&&event.dying==player);
    },
                viewAsFilter:function (player){
        if(!player.countCards('hes',{suit:'heart'})) return false;
        return true;
    },
                ai:{
                    threaten:0.8,
                    basic:{
                        order:function (card,player){
                            if(player.hasSkillTag('pretao')) return 5;
                            return 2;
                        },
                        useful:[6.5,4,3,2],
                        value:[6.5,4,3,2],
                    },
                    result:{
                        target:2,
                        "target_use":function (player,target){
                            // if(player==target&&player.hp<=0) return 2;
                            if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                            var nd=player.needsToDiscard();
                            var keep=false;
                            if(nd<=0){
                                keep=true;
                            }
                            else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                                keep=true;
                            }
                            var mode=get.mode();
                            if(target.hp>=2&&keep&&target.hasFriend()){
                                if(target.hp>2||nd==0) return 0;
                                if(target.hp==2){
                                    if(game.hasPlayer(function(current){
                                        if(target!=current&&get.attitude(target,current)>=3){
                                            if(current.hp<=1) return true;
                                            if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                                        }
                                    })){
                                        return 0;
                                    }
                                }
                            }
                            if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                            var att=get.attitude(player,target);
                            if(att<3&&att>=0&&player!=target) return 0;
                            var tri=_status.event.getTrigger();
                            if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                                    var num=game.countPlayer(function(current){
                                        if(current.identity=='fan'){
                                            return current.countCards('h','tao');
                                        }
                                    });
                                    if(num>1&&player==target) return 2;
                                    return 0;
                                }
                            }
                            if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                                if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                                    return 0;
                                }
                            }
                            if(mode=='stone'&&target.isMin()&&
                            player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                            tri.source!=target.getEnemy()){
                                return 0;
                            }
                            return 2;
                        },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            ESxixue:{
                enable:"phaseUse",
                usable:1,
                selectCard:2,
                filterCard:function (card){
      return get.color(card)=="black";
    },
                position:"he",
                filter:function (event,player){
        if (player.countCards('he',{color:'black'})<2) return false;
        return game.hasPlayer(function(current){
            return current!=player&&get.distance(player,current)<=1;
        });
    },
                filterTarget:function (card,player,target){
        return target!=player&&get.distance(player,target)<=1;
    },
                selectTarget:1,
                check:function (card){
        return 5-get.value(card);
    },
                content:function (){
        "step 0"
        target.damage(1,player);
        "step 1"
        player.recover();
    },
                ai:{
                    order:15,
                    result:{
                        target:function (player,target){
                return -2.5;
            },
                        player:function (player,target){
                if(get.attitude(player,target)>0) {
                    if (player.hp<player.maxHp) return -2.5;
                    else return -4.5;
                }else if (player.hp<player.maxHp) return 2.5;
                    else return 0.5;
            },
                    },
                    threaten:1,
                },
            },
            yewang:{
                mark:true,
                forced:true,
                locked:true,
                zhuanhuanji:true,
                marktext:"☯",
                intro:{
                    content:function (storage,player,skill){
            if(player.storage.yewang==true) return '出牌阶段开始时，你弃置一张牌。';
            return '出牌阶段开始时，你摸三张牌。';
        },
                },
                group:["yewang_1","yewang_2"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return (player.storage.yewang!=true&&!player.hasSkill('yewang_3'));
            },
                        content:function (){
                player.changeZhuanhuanji('yewang');
                player.draw(3);
                player.addTempSkill("yewang_3","phaseUseEnd");
            },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return (player.storage.yewang==true&&!player.hasSkill('yewang_3'));
            },
                        content:function (){
                player.changeZhuanhuanji('yewang');
                player.chooseToDiscard('he',1,true);
                player.addTempSkill("yewang_3","phaseUseEnd");
            },
                        sub:true,
                    },
                    "3":{
                        sub:true,
                    },
                },
            },
            qingfu:{
                group:["qingfu_2"],
                locked:false,
                enable:["chooseToUse","chooseToRespond"],
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
        if(!player.countCards('hs',{color:'black'})) return false;
    },
                position:"hs",
                prompt:"将一张黑色手牌当【闪】使用",
                check:function (){return 1},
                ai:{
                    order:3,
                    respondShan:true,
                    skillTagFilter:function (player){
            if(!player.countCards('hs',{color:'black'})) return false;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondShan')&&current<0) return 0.6;
            },
                    },
                    basic:{
                        useful:[7,5.1,2],
                        value:[7,5.1,2],
                    },
                    result:{
                        player:1,
                    },
                },
                subSkill:{
                    "2":{
                        trigger:{
                            player:["useCardAfter","respondAfter"],
                        },
                        forced:true,
                        charlotte:true,
                        popup:false,
                        filter:function (event,player){
                return event.skill=='qingfu';
            },
                        content:function (){
                player.draw();
            },
                        sub:true,
                    },
                },
            },
            qiuhui:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('hes')>=3;
    },
                selectTarget:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                selectCard:3,
                discard:false,
                lose:false,
                delay:false,
                filterCard:function (card,player){
        var type=get.type(card,'trick');
        for(var i=0;i<ui.selected.cards.length;i++){
            if(get.type(ui.selected.cards[i],'trick')==type) return false;
        }
        return true;
        /*if(ui.selected.cards.length){
            for(var i=0;i<ui.selected.cards.length;i++){
                if (get.type(card,'trick')==get.type(ui.selected.cards[i],'trick')) return false;
            }
        }
        var cards=player.getCards('hes');
        for(var i=0;i<cards.length;i++){
            if(card!=cards[i]){
                if(get.type(card,'trick')!=get.type(cards[i],'trick')) return true;
            }
        }
        return false;*/
        
        /*
        if(ui.selected.cards.length){
            for(var i=0;i<ui.selected.cards.length;i++){
                if (get.type(card)==get.type(ui.selected.cards[i])) return false;
                if ((get.type(card)=='trick')&&(get.type(ui.selected.cards[i])=='trick'||get.type(ui.selected.cards[i])=='delay')) return false;
            }
        }
        var cards=player.getCards('hes');
        for(var i=0;i<cards.length;i++){
            if(card!=cards[i]){
                if(get.type(card)!=get.type(cards[i])) return true;
            }
        }
        return false;*/
    },
                complexCard:true,
                position:"hes",
                check:function (card){
      return get.value(card);
    },
                content:function (){
        "step 0"
        target.gain(cards,player,'give');
        if (player.hp<player.maxHp&&target.hp<target.maxHp) event.type=0;
        else if (target.hp<target.maxHp) event.type=1;
        else if (player.hp<player.maxHp) event.type=2;
        else event.finish();
        switch (event.type){
            case 0:
                target.chooseControl("你回血","其回血").set("prompt","你可以选择一项").set("ai",function(event,player){
                    if (_status.event.att>0) {
                        if (_status.event.user.hp<player.hp){
                            return "其回血";
                        }
                    }
                    return "你回血";
                }).set('att',get.attitude(event.target,player)>0?1:-1).set('user',player);
                break;
            case 1:
                target.chooseBool('是否回血？').set("ai",function(event,player){
                    return true;
                });
                break;
            case 2:
                target.chooseBool('是否令',player,'回血？').set("ai",function(event,player){
                    if (_status.event.att>0) return true;
                    return false;
                }).set('att',get.attitude(event.target,player)>0?1:-1);
                break;
            default:
                event.finish();
        }
        "step 1"
        if(result){
            switch (event.type){
                case 0:
                    if (result.control=="其回血"){
                        game.log(target,'选择了令',player,'回血');
                        player.recover();
                    }
                    else if (result.control=="你回血"){
                        game.log(target,'选择了令',target,'回血');
                        target.recover();
                    }
                    break;
                case 1:
                    if (result.bool) {
                        game.log(target,'选择了令',target,'回血');
                        target.recover();
                    }
                    break;
                case 2:
                    if (result.bool) {
                        game.log(target,'选择了令',player,'回血');
                        player.recover();
                    }
                    break;
                default:
                    event.finish();
            }
        }
    },
                ai:{
                    order:15,
                    result:{
                        target:function (player,target){
                if (target.hp<target.maxHp) return 5;
                return 3;
            },
                        player:function (player,target){
                if (get.attitude(player,target)<0) return -3;
                if (player.hp<player.maxHp) return 2;
                return 0;
            },
                    },
                    threaten:1.05,
                },
            },
            quanrouzongheng:{
                enable:"chooseToUse",
                limited:true,
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player){
        player.storage.quanrouzongheng=false;
    },
                filter:function (event,player){
        return player.storage.quanrouzongheng==false;
    },
                filterCard:function (card,player){
        return get.color(card)=='black';
    },
                position:"hes",
                viewAs:{
                    name:"tao",
                },
                viewAsFilter:function (player){
        if(!player.countCards('hes',{color:'black'})) return false;
        return true;
    },
                onuse:function (result,player){
        player.storage.quanrouzongheng=true;
        player.awakenSkill("quanrouzongheng");
    },
                ai:{
                    basic:{
                        order:function (card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[6.5,4,3,2],
                        value:[6.5,4,3,2],
                    },
                    result:{
                        target:2,
                        "target_use":function (player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
                skillAnimation:true,
            },
            quanrou:{
                group:["quanrou_num","quanrou_zongheng"],
                derivation:"quanrouzongheng",
                usable:1,
                enable:"chooseToUse",
                filter:function (event,player){
        return !player.hasSkill('quanrou_2');
    },
                filterCard:function (card,player){
        return get.color(card)=='black';
    },
                position:"hes",
                viewAs:{
                    name:"tao",
                },
                viewAsFilter:function (player){
        if(!player.countCards('hes',{color:'black'})) return false;
        return true;
    },
                onuse:function (result,player){
        player.addTempSkill('quanrou_2','roundStart');
    },
                ai:{
                    basic:{
                        order:function (card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[6.5,4,3,2],
                        value:[6.5,4,3,2],
                    },
                    result:{
                        target:2,
                        "target_use":function (player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
                subSkill:{
                    "2":{
                        sub:true,
                    },
                    num:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event){
                var evt=event;
                return ['tao'].contains(evt.card.name)&&evt.skill=='quanrou'&&evt.cards&&(evt.cards[0].name=='nanman'||get.subtype(evt.cards[0])=='equip3'||get.subtype(evt.cards[0])=='equip4');
            },
                        content:function (){
                trigger.baseDamage++;
            },
                        sub:true,
                    },
                    zongheng:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                var evt=event;
                return ['tao'].contains(evt.card.name)&&evt.parent.skill=='quanrou'&&evt.target!=player&&!evt.target.hasSkill('quanrouzongheng');
            },
                        content:function (){
                'step 0'
                if (!trigger.target.hasSkill('quanrouzongheng')){
                    if (!trigger.target.storage.quanrouzongheng){
                        player.chooseBool('纵横：是否令'+get.translation(trigger.target)+'获得【劝肉·纵横】？').set('ai',function(){
                        return get.attitude(player,trigger.target)>0;
                    });
                    }
                }
                'step 1'
                if(result.bool){
                    trigger.target.addSkill('quanrouzongheng');
                    game.log(player,'发起了纵横，令',trigger.target,'获得了技能【劝肉·纵横】');
                }
            },
                        sub:true,
                    },
                },
            },
            kuangquan:{
                group:["kuangquan_2"],
                locked:false,
                enable:"chooseToUse",
                usable:1,
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAs:{
                    name:"juedou",
                },
                viewAsFilter:function (player){
        if(!player.countCards('hs',{color:'black'})) return false;
    },
                position:"hs",
                prompt:"将一张黑色手牌当【决斗】使用",
                check:function (card){
        return 8-get.value(card);
    },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5.5,
                    },
                    wuxie:function (target,card,player,viewer){
                        if(player==game.me&&get.attitude(viewer,player)>0){
                            return 0;
                        }
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target,card){
                            if(player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                            },true)){
                                return 0;
                            }
                            if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                                return 0;
                            }
                            var hs1=target.getCards('h','sha');
                            var hs2=player.getCards('h','sha');
                            if(hs1.length>hs2.length+1){
                                return -2;
                            }
                            var hsx=target.getCards('h');
                            if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                                return -2;
                            }
                            if(hsx.length>3&&hs2.length==0){
                                return -2;
                            }
                            if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                                return -2;
                            }
                            return -0.5;
                        },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
                subSkill:{
                    "2":{
                        trigger:{
                            player:["useCardToPlayered"],
                        },
                        prompt:function (event,player){
                return "是否弃置"+get.translation(event.target)+"的一张牌？";
            },
                        filter:function (event,player){
                return event.getParent().skill=='kuangquan'&&event.target.countDiscardableCards(player,'he')>0&&player.hp>=event.target.hp;
            },
                        check:function (event,player){
                return get.attitude(player,event.target)<=0;
            },
                        content:function (){
                player.discardPlayerCard(trigger.target,1,'he');
            },
                        sub:true,
                    },
                },
            },
            fubing:{
                forced:true,
                trigger:{
                    player:"phaseJieshuBegin",
                },
                content:function (){
        "step 0"
        player.judge(function(card){
            if(get.suit(card)=='spade') return -2.5;
            return 0;
        });
        "step 1"
        if(result.suit){
            if(result.suit=='spade'){
                player.loseHp();
            }
        }
    },
                ai:{
                    threaten:0.5,
                    result:{
                        player:function (player,target){
                return -3/4;
            },
                    },
                },
            },
            xiaotu:{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                check:function (event,player){
        return game.countPlayer(function(current){
            return get.sgn(get.attitude(player,current));
        })>=0;
    },
                content:function (){
        'step 0'
        var list=game.filterPlayer(function(current){
            return current!=player;
        });
        list.sortBySeat();
        event.targets=list;
        player.logSkill('xiaotu',event.targets);
        player.draw(game.countPlayer());
        'step 1'
        var target=event.targets.shift();
        event.target=target;
        player.chooseCard('he','交给其一张牌',true).set('ai',function(card){
            return (-get.attitude(player,event.target)*(9-get.value(card)));
        });
        'step 2'
        if(result.bool){
            event.target.gain(result.cards,player,'giveAuto');
        };
        'step 3'
        if(event.targets.length) event.goto(1);
    },
                ai:{
                    result:{
                        target:function (card,player,target){
                return get.value(card);
            },
                        player:function (card,player,target){
                return get.value(card);
            },
                    },
                    threaten:1.6,
                },
            },
            jizhan:{
                group:["jizhan_2"],
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(ui.selected.targets.length==1){
            return target.canUse({name:'juedou'},ui.selected.targets[0]);
        }
        return true;
    },
                targetprompt:["先出杀","后出杀"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        targets[1].useCard({name:'juedou',isCard:true},'nowuxie',targets[0],'noai').animate=false;
        game.delay(0.5);
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(ui.selected.targets.length==0){
                    return -3;
                }
                else{
                    return get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
                }
            },
                    },
                    threaten:3,
                },
                subSkill:{
                    "2":{
                        trigger:{
                            global:"damageSource",
                        },
                        forced:true,
                        filter:function (event,player){
                return (_status.currentPhase==player&&event.card&&(event.card.name=='juedou'));
            },
                        content:function (){
                trigger.source.draw();
            },
                        sub:true,
                    },
                },
            },
            qibian:{
                mark:true,
                zhuanhuanji:true,
                marktext:"☯",
                intro:{
                    content:function (storage,player,skill){
            if(player.storage.qibian==true) return '当判定结果确定前，你可打出一张牌替换之，然后若你以此法打出的牌与获得的牌颜色不同，你摸一张牌。';
            return '当一名角色A于其摸牌阶段外获得至少两张牌后，你可以获得另一名其他角色B区域里的一张牌，然后若A不为你，你可以展示并将一张牌交给A，然后若你以此法交给A的牌为装备牌/延时类锦囊牌，A可以使用之。';
        },
                },
                group:["qibian_1","qibian_2"],
                subSkill:{
                    "1":{
                        trigger:{
                            global:"gainAfter",
                        },
                        direct:true,
                        filter:function (event,player){
                if(event.parent.parent.name=='phaseDraw') return false;
                if (player.storage.qibian==true) return false;
                if(event.name=='gain') return event.cards&&event.cards.length&&event.cards.length>1;
                return false;
            },
                        content:function (){
                "step 0"
                player.chooseTarget("请选择另一名其他角色",function(card,player,target){
                    return (player!=target&&trigger.player!=target&&target.countCards('hej')>0);
                }).set("ai",function(target){
                  return -get.attitude(player,target);
                });
                "step 1"
                if(result.bool){
                    player.changeZhuanhuanji('qibian');
                    player.logSkill('qibian');
                    player.storage.qibiantarget1=result.targets[0];
                    player.gainPlayerCard(player.storage.qibiantarget1,'hej',true,1);
                }else event.finish();
                "step 2"
                if (player!=trigger.player&&result.cards.length) {
                    event.target=trigger.player;
                    player.chooseCard('he',1,"你可以交给"+get.translation(trigger.player)+"一张牌").set('ai',function(card){
                        return (get.attitude(player,event.target)*(get.value(card)));});
                }
                "step 3"
                if(result.cards){
                    event.card=result.cards;
                    trigger.player.gain(event.card,player,'give');
                } else event.finish();
                "step 4"
                if (event.card.length){
                    for (const element of event.card) {
                          if(trigger.player.getCards('h').contains(element)&&(get.type(element)=='equip'||get.type(element)=='delay')){
                            trigger.player.chooseUseTarget(element);
                        }
                    }
                }
            },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            global:"judge",
                        },
                        filter:function (event,player){
                return (player.countCards('hes')>0&&player.storage.qibian==true);
            },
                        direct:true,
                        content:function (){
                "step 0"
                player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                get.translation(trigger.player.judging[0])+'，'+get.prompt('qibian_2'),'hes',function(card){
                    var player=_status.event.player;
                    var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                    if(mod2!='unchanged') return mod2;
                    var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
                    if(mod!='unchanged') return mod;
                    return true;
                }).set('ai',function(card){
                    var trigger=_status.event.getTrigger();
                    var player=_status.event.player;
                    var judging=_status.event.judging;
                    var result=trigger.judge(card)-trigger.judge(judging);
                    var attitude=get.attitude(player,trigger.player);
                    if(attitude==0||result==0) return 0;
                    if(attitude>0){
                        return result;
                    }
                    else{
                        return -result;
                    }
                }).set('judging',trigger.player.judging[0]);
                "step 1"
                if(result.bool){
                    player.respond(result.cards,'highlight','qibian_2','noOrdering');
                }
                else{
                    event.finish();
                }
                "step 2"
                if(result.bool){
                    player.changeZhuanhuanji('qibian');
                    event.oldColor=get.color(trigger.player.judging[0]);
                    player.$gain2(trigger.player.judging[0]);
                    player.gain(trigger.player.judging[0]);
                    event.newColor=get.color(result.cards[0]);
                    trigger.player.judging[0]=result.cards[0];
                    trigger.orderingCards.addArray(result.cards);
                    game.log(trigger.player,'的判定牌改为',result.cards[0]);
                }
                "step 3"
                if (event.oldColor!=event.newColor){
                    player.draw();
                }
            },
                        ai:{
                            rejudge:true,
                            tag:{
                                rejudge:1,
                            },
                        },
                        sub:true,
                    },
                },
            },
            aitao:{
                trigger:{
                    player:"phaseDrawBegin1",
                },
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return current.hp==current.maxHp&&current!=player&&current.hp>player.hp;
        });
    },
                check:function (event,player){
        return game.countPlayer(function(current){
            if (current.hp==current.maxHp&&current!=player&&current.hp>player.hp){
                return get.sgn(-get.attitude(player,current));
            }
        })>=0;
    },
                content:function (){
        'step 0'
        var list=game.filterPlayer(function(current){
            return current.hp==current.maxHp&&current!=player&&current.hp>player.hp;
        });
        list.sortBySeat();
        event.targets=list;
        player.logSkill('aitao',event.targets);
        'step 1'
        var target=event.targets.shift();
        event.target=target;
        //event.target.chooseToDiscard(true,'he');
        event.target.chooseCard('he','交给其一张牌',true).set('ai',function(card){
            return (-get.attitude(player,event.target)*(9-get.value(card)));
        });
        'step 2'
        if(result.bool){
            player.gain(result.cards,event.target,'giveAuto');
        };
        'step 3'
        if(event.targets.length) event.goto(1);
    },
                ai:{
                    result:{
                        target:function (card,player,target){
                if (card.name=='tao') return 0.5;
            },
                    },
                    threaten:3.5,
                },
            },
            suiying:{
                trigger:{
                    global:"phaseDiscardBegin",
                },
                filter:function (event,player){
        return (event.player.countCards('h')>event.player.hp);
    },
                check:function (event,player){
        if(get.attitude(player,event.player)>0) return true;
        return false;
    },
                content:function (){
        trigger.player.addTempSkill('suiying_add','phaseAfter');;
    },
                ai:{
                    threaten:2,
                    result:{
                        target:function (card,player,target){
                return 1;
            },
                        player:function (card,player,target){
                return 0;
            },
                    },
                },
                subSkill:{
                    add:{
                        mod:{
                            maxHandcard:function (player,num){
                    return num+1;
                },
                        },
                        sub:true,
                    },
                },
            },
            saozhang:{
                trigger:{
                    global:["useCardToPlayered","phaseJudgeBegin"],
                },
                filter:function (event,player){
        if (event.card){
            if (event.targets.length!=1) return false;
            return (get.type(event.card,'trick')=='trick'&&get.color(event.card)=='red'&&event.player.countDiscardableCards(player,'h')>0);
        } else return event.player.countDiscardableCards(player,'j')>0;
    },
                logTarget:"player",
                check:function (event,player){
        if (event.card){
            return get.attitude(player,event.player)<0;
        } else return get.attitude(player,event.player)>0;
    },
                content:function (){
        if (trigger.card){
            player.discardPlayerCard(trigger.player,'h');
        } else player.discardPlayerCard(trigger.player,'j');
    },
                ai:{
                    threaten:2.85,
                },
            },
            dubozongheng:{
                inherit:"dubo",
                usable:1,
                ai:{
                    order:15,
                    result:{
                        target:function (player,target){
                if(!player.hasCard(function(card){
                    if(get.position(card)!="h") return false;
                    var val=get.value(card);
                    if(val<0) return true;
                    if(val<=5){
                        return card.number>=11;
                    }
                    if(val<=6){
                        return card.number>=13;
                    }
                    return false;
                })) return 0;
                return -Math.sqrt(1+target.countCards('he'))/(1+target.countCards('j'));
            },
                    },
                },
                enable:"phaseUse",
                filter:function (event,player){
        if(player.countCards('h')==0) return false;
        return game.hasPlayer(function(current){
            if(current.hasSkill('dubo_phase')||_status.currentPhase==current) return false;
            return current.countCards('h');
        });
    },
                filterTarget:function (card,player,target){
        if(target.hasSkill('dubo_phase')) return false;
        return player.canCompare(target);
    },
                direct:true,
                clearTime:true,
                content:function (){
        "step 0"
        player.chooseToCompare(target,function(card){
            if(card.name=='du') return 20;
            var player=get.owner(card);
            var target=_status.event.getParent().target;
            if(player!=target&&get.attitude(player,target)>0){
                if(player.countCards('h')>player.hp)return(-get.number(card));
                else return get.number(card);
            }
            return get.number(card);
        });
        "step 1"
        var list=[];
        if(get.position(result.player)=='d') list.push(result.player);
        if(get.position(result.target)=='d') list.push(result.target);
        if(!list.length) event.finish();
        event.list=list;
        target.addTempSkill('dubo_phase');
        if (event.name=='dubo') event.bonus=1;
        else event.bonus=1;
        if(!result.tie){
            if(result.bool){
                player.draw(event.bonus);
            } else {
                target.draw(event.bonus);
            };
        };
        if(event.name=='dubo'){
            player.chooseBool('是否令'+get.translation(target)+'获得【赌博·纵横】直至其下回合结束时？').set("ai",function(event,player){
                return get.attitude(player,target)>0;
            });
        } else event.finish();
        "step 2"
        if(result.bool){
            target.addTempSkill('dubozongheng',{player:'phaseEnd'});
            player.line(target);
            game.log(player,'发起了','#y纵横','，令',target,'获得了技能','#g【赌博·纵横】');
        }
    },
                derivation:"dubozongheng",
                subSkill:{
                    phase:{
                        sub:true,
                    },
                },
            },
            dubo:{
                enable:"phaseUse",
                filter:function (event,player){
        if(player.countCards('h')==0) return false;
        return game.hasPlayer(function(current){
            if(current.hasSkill('dubo_phase')||_status.currentPhase==current) return false;
            return current.countCards('h');
        });
    },
                filterTarget:function (card,player,target){
        if(target.hasSkill('dubo_phase')) return false;
        return player.canCompare(target);
    },
                direct:true,
                clearTime:true,
                content:function (){
        "step 0"
        player.chooseToCompare(target,function(card){
            if(card.name=='du') return 20;
            var player=get.owner(card);
            var target=_status.event.getParent().target;
            if(player!=target&&get.attitude(player,target)>0){
                if(player.countCards('h')>player.hp)return(-get.number(card));
                else return get.number(card);
            }
            return get.number(card);
        });
        "step 1"
        var list=[];
        if(get.position(result.player)=='d') list.push(result.player);
        if(get.position(result.target)=='d') list.push(result.target);
        if(!list.length) event.finish();
        event.list=list;
        target.addTempSkill('dubo_phase');
        if (event.name=='dubo') event.bonus=1;
        else event.bonus=1;
        if(!result.tie){
            if(result.bool){
                player.draw(event.bonus);
            } else {
                target.draw(event.bonus);
            };
        };
        if(event.name=='dubo'){
            player.chooseBool('是否令'+get.translation(target)+'获得【赌博·纵横】直至其下回合结束时？').set("ai",function(event,player){
                return get.attitude(player,target)>0;
            });
        } else event.finish();
        "step 2"
        if(result.bool){
            target.addTempSkill('dubozongheng',{player:'phaseEnd'});
            player.line(target);
            game.log(player,'发起了','#y纵横','，令',target,'获得了技能','#g【赌博·纵横】');
        }
    },
                ai:{
                    basic:{
                        order:15,
                    },
                    expose:0.2,
                    threaten:1.2,
                    result:{
                        target:function (player,target){
                if (get.attitude(player,target)>0) return 0.8;
                if(player.countCards('h','du')&&get.attitude(player,target)<0) return -1;
                var maxnum=0;
                var cards2=target.getCards('h');
                for(var i=0;i<cards2.length;i++){
                    if(get.number(cards2[i])>maxnum){
                        maxnum=get.number(cards2[i]);
                    }
                }
                if(maxnum>10) maxnum=10;
                if(maxnum<5&&cards2.length>1) maxnum=5;
                var cards=player.getCards('h');
                for(var i=0;i<cards.length;i++){
                    if(get.number(cards[i])<maxnum){                        
                        if (get.attitude(player,target)>0) return 1;            
                    } else if (get.number(cards[i])>maxnum&&get.attitude(player,target)<0) return -1.5;
                }

            },
                        player:function (player,target){
                if (get.attitude(player,target)>0){
                    if (player.countCards('h')>player.hp){
                        return 0;
                    }
                    return -1;
                }
            },
                    },
                },
                derivation:"dubozongheng",
                subSkill:{
                    phase:{
                        sub:true,
                    },
                },
            },
            wujie:{
                trigger:{
                    global:["loseAfter","addToExpansionAfter","cardsGotoSpecialAfter","loseAsyncAfter"],
                },
                filter:function (event,player,name){
        if(event.name=='lose'||event.name=='loseAsync'){
            if (event.getlx==false) return false;
            if (event.toStorage!==true) return false;
        };
        if(event.name=='cardGotoSpecial') {
            if (event.notrigger) return false;
        }
        return (game.hasPlayer(function(current){
            return (current.getExpansions('ESzhishi').length>current.maxHp&&current.maxHp>1);
        }))
    },
                forced:true,
                content:function (){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].getExpansions('ESzhishi').length>game.players[i].maxHp&&game.players[i].maxHp>1){
                event.num=game.players[i].maxHp-1;
                game.players[i].loseMaxHp(event.num,true);
            }
        }
    },
            },
            meizhi:{
                derivation:"meizhizongheng",
                group:["meizhi_3"],
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function (event,player){
        if(!event.isFirstTarget) return false;
        var type=get.type(event.card);
        if(type!='trick') return false;
        if (get.position(event.cards[0],true)!='o') return false;
        if (get.color(event.card)!='black')return false;
        return game.hasPlayer(function(current){
            return (event.targets.contains(current)&&!current.hasSkill('meizhi_phase'));
        });
    },
                check:function (card){
        return 4-get.value(card);
    },
                content:function (){
        'step 0'
        event.playerCount=0;
        for (var i=0;i<trigger.targets.length;i++){
            var current=trigger.targets[i];
            if(!current.hasSkill('meizhi_phase')){
                event.playerCount++;
                event.target=current;
            } 
        }
        if (event.playerCount>1){
            player.chooseTarget(get.prompt('meizhi'),'令一名目标角色获得处理区里的此牌并令其不能使用此牌指定你为目标',function(card,player,target){
                return (_status.event.targets.contains(target)&&!target.hasSkill('meizhi_phase'));
            }).set('ai',function(target){
                var player=_status.event.player;
                if(target==player) return 2;
                if(get.attitude(player,target)>0){
                    return 1
                }
                return 0.5;
            }).set('targets',trigger.targets);
        }
        'step 1'
        if(result.bool){
            event.target=result.targets[0];
        }
        else{
            if (event.playerCount>1) event.finish();
        }
        player.storage.meizhiCards=trigger.cards;
        event.target.addTempSkill('meizhi_phase');
        event.target.gain(trigger.cards,player,'giveAuto');        
        event.target.addSkill('meizhi_2');
        player.draw(2);
        if(event.target!=player&&!event.target.hasSkill('meizhizongheng')){
            player.chooseBool('是否令'+get.translation(event.target)+'获得【魅智·纵横】直至其下回合结束时？').set("ai",function(event,player){
                return get.attitude(player,event.target)>0;
            });
        } else event.finish();
        'step 2'
        if(result.bool){
            event.target.addTempSkill('meizhizongheng',{player:'phaseEnd'});
            player.line(target);
            game.log(player,'发起了','#y纵横','，令',event.target,'获得了技能','#g【魅智·纵横】');
        }
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if (get.type(card,'trick')=='trick'&&get.color(card)=='black'){
                    if (get.attitude(player,target)>0){
                        return [1,get.value(card)+8];
                    } else return [1,12-get.value(card)];
                }
            },
                    },
                    threaten:0.8,
                },
                subSkill:{
                    "2":{
                        mark:true,
                        intro:{
                            content:function (storage,player,skill){
                    return '不能对'+get.translation(player.storage.meizhiPlayer)+'使用因魅智获得的牌';
                },
                        },
                        init:function (player){
                player.storage.meizhiPlayer=[];
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('meizhi')){
                        player.storage.meizhiPlayer.push(game.players[i]);
                    }
                }
            },
                        forced:true,
                        charlotte:true,
                        mod:{
                            playerEnabled:function (card,player,target){
                    for(var i=0;i<player.storage.meizhiPlayer.length;i++){
                        if (player.storage.meizhiPlayer[i]==target&&card.storage.meizhi) return false;
                    }
                },
                        },
                        trigger:{
                            player:"loseAfter",
                        },
                        filter:function (event,player){
                for(var i=0;i<event.cards2.length;i++){
                    if (event.cards2[i].storage.meizhi) return true;
                } return false;
            },
                        content:function (){
                game.log(trigger.cards2);
                for(var i=0;i<trigger.cards2.length;i++){
                    if (trigger.cards2[i].storage.meizhi) delete trigger.cards2[i].storage.meizhi;
                } 
                var hs=trigger.player.getCards('h');
                var hasMeizhiCard=false;
                for(var i=0;i<hs.length;i++){
                    if (hs[i].hasGaintag('meizhi')) var hasMeizhiCard=true;
                }
                if (hasMeizhiCard==false) player.removeSkill('meizhi_2');
            },
                        sub:true,
                    },
                    "3":{
                        trigger:{
                            global:"gainAfter",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return true;
            },
                        content:function (){
                var hs=trigger.player.getCards('h');
                var cards=player.storage.meizhiCards.filter(function(card){
                    return hs.contains(card);
                });
                trigger.player.addGaintag(cards,'meizhi');
                for(var i=0;i<cards.length;i++){
                    cards[i].storage.meizhi=true;
                }
                player.storage.meizhiCards=[];
            },
                        sub:true,
                    },
                    phase:{
                        sub:true,
                    },
                },
            },
            meizhizongheng:{
                trigger:{
                    player:"useCardToPlayered",
                },
                usable:1,
                filter:function (event,player){
        if(!event.isFirstTarget) return false;
        var type=get.type(event.card);
        if(type!='trick') return false;
        if (get.color(event.card)!='black')return false;
        return true;
    },
                content:function (){
        player.draw(2);
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if (get.type(card)=='trick'&&get.color(card)=='black'){
                    return [1,3];
                }
            },
                    },
                    threaten:4,
                },
            },
            ESzhishi:{
                derivation:"ESzhishizongheng",
                enable:"phaseUse",
                filter:function (event,player){
        if (player.countCards('h')==0) return false;
        return game.hasPlayer(function(current){
            return (current.hp<current.maxHp);
        });
    },
                filterTarget:function (card,player,target){
        return target.hp<target.maxHp;
    },
                filterCard:true,
                position:"h",
                check:function (card){
        return 12-get.value(card);
    },
                discard:false,
                content:function (){
        "step 0"
        target.recover();
        target.draw();
        target.addToExpansion(cards[0],target,'giveAuto').gaintag.add('ESzhishi');
        "step 1"
        if(target!=player&&!target.hasSkill('ESzhishizongheng')){
            player.chooseBool('是否令'+get.translation(target)+'获得【制食·纵横】直至其下回合结束时？').set("ai",function(event,player){
                return get.attitude(player,target)>0;
            });
        } else event.finish();
        "step 2"
        if(result.bool){
            target.addTempSkill('ESzhishizongheng',{player:'phaseEnd'});
            player.line(target);
            game.log(player,'发起了','#y纵横','，令',target,'获得了技能','#g【制食·纵横】');
        }
    },
                ai:{
                    basic:{
                        order:15,
                    },
                    threaten:3.68,
                    result:{
                        target:function (player,target){            
                if (game.hasPlayer(function(current){
                        return (current.hasSkill('wujie'));
                    })&&(target.getExpansions('ESzhishi').length==target.maxHp)){
                    return -((target.maxHp-1)*3+(target.hp-1)*2);
                } else return 3*(target.maxHp-target.hp)-5*(target.getExpansions('ESzhishi').length/target.maxHp);
            },
                    },
                },
                marktext:"食",
                intro:{
                    content:"expansion",
                    markcount:"expansion",
                },
                onremove:function (player,skill){
        var cards=player.getExpansions(skill);
        if(cards.length) player.loseToDiscardpile(cards);
    },
            },
            remeizhi:{
                derivation:"remeizhizongheng",
                trigger:{
                    player:"useCardToPlayered",
                },
                direct:true,
                filter:function (event,player){
        var type=get.type(event.card);
        if(type!='trick'&&type!='delay') return false;
        if (event.target==player) return false;
        if (get.color(event.card)!='black')return false;
        return true;
    },
                content:function (){
        'step 0'
        player.chooseControl("其不能使用或打出牌响应此牌","其交给你一张手牌且其不能使用牌指定你为目标直至其下回合出牌阶段结束时","cancel2").set("prompt","是否对"+get.translation(trigger.target)+"发动【魅智】？").set("ai",function(event,player){
            if (get.attitude(player,trigger.target)>0)return"cancel2";
            if (get.tag(card,'damage')==0) return "其交给你一张手牌且其不能使用牌指定你为目标直至其下回合出牌阶段结束时";
            else return "其不能使用或打出牌响应此牌且此牌对其造成的伤害+1";
        });
        'step 1'
        if (result.control!='cancel2'){
            if (result.control=="其不能使用或打出牌响应此牌"){
                event.type=1;
                trigger.getParent().directHit.push(trigger.target);
                if (!player.storage.meizhiDamage) player.storage.meizhiDamage=[];
                game.log(trigger.target,'不能使用或打出牌响应',trigger.card);
            } else if (result.control=="其交给你一张手牌且其不能使用牌指定你为目标直至其下回合出牌阶段结束时"){
                event.type=2;
                trigger.target.chooseCard('交给'+get.translation(player)+'一张手牌',true).set('ai',function(card){
                    return -get.value(card);
                });
                game.log(trigger.target,'不能使用牌指定',player,'为目标直至',player,'下回合出牌阶段结束时');
                trigger.target.addSkill('remeizhi_2');
            }
        } 
        'step 2'
        if (event.type==2){
            if(result.bool){
                player.gain(result.cards,trigger.target,'giveAuto');
            }
        }
        if(trigger.target!=player&&!trigger.target.hasSkill('remeizhizongheng')){
            player.chooseBool('是否令'+get.translation(trigger.target)+'获得【魅智·纵横】直至其下回合结束时？').set("ai",function(event,player){
                return get.attitude(player,trigger.target)>0;
            });
        } else event.finish();
        'step 3'
        if(result.bool){
            trigger.target.addTempSkill('remeizhizongheng',{player:'phaseEnd'});
            player.line(target);
            game.log(player,'发起了','#y纵横','，令',trigger.target,'获得了技能','#g【魅智·纵横】');
        }
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if ((get.type(card,'trick')=='trick'||get.type(card,'trick')=='delay')&&get.color(card)=='black'){
                    if (get.attitude(player,target)>0){
                        return [3,2];
                    } else return [3,0];
                }
            },
                    },
                    threaten:0.9,
                },
                subSkill:{
                    "2":{
                        mark:true,
                        intro:{
                            content:function (storage,player,skill){
                    return '不能对'+get.translation(player.storage.meizhiPlayer)+'使用牌';
                },
                        },
                        init:function (player){
                player.storage.meizhiPlayer=[];
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('remeizhi')){
                        player.storage.meizhiPlayer.push(game.players[i]);
                    }
                }
            },
                        forced:true,
                        charlotte:true,
                        silent:true,
                        mod:{
                            playerEnabled:function (card,player,target){
                    for(var i=0;i<player.storage.meizhiPlayer.length;i++){
                        if (player.storage.meizhiPlayer[i]==target) return false;
                    }
                },
                        },
                        trigger:{
                            player:"phaseUseEnd",
                        },
                        filter:true,
                        content:function (){
                player.removeSkill('remeizhi_2');
            },
                        sub:true,
                        popup:false,
                    },
                },
            },
            remeizhizongheng:{
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function (event,player){
        var type=get.type(event.card);
        if(type!='trick'&&type!='delay') return false;
        if (event.target==player) return false;
        if (get.color(event.card)!='black')return false;
        if (event.target.countDiscardableCards(player,'h')==0) return false;
        return true;
    },
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                content:function (){
        'step 0'
        trigger.target.chooseCard('交给'+get.translation(player)+'一张手牌',true).set('ai',function(card){
            return -get.value(card);
        });
        'step 1'
        if(result.bool){
            player.gain(result.cards,trigger.target,'giveAuto');
        }
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if ((get.type(card,'trick')=='trick'||get.type(card,'trick')=='delay')&&get.color(card)=='black'){
                    return [3,0];
                }
            },
                    },
                    threaten:0.3,
                },
            },
            ESzhishizongheng:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return (player.countCards('h')!=0);
    },
                filterCard:true,
                position:"h",
                check:function (card){
        return 4-get.value(card);
    },
                discard:false,
                content:function (){
        "step 0"
        player.draw();
        player.addToExpansion(cards[0],player,'giveAuto').gaintag.add('ESzhishi');
    },
                ai:{
                    basic:{
                        order:10,
                    },
                    threaten:0.24,
                    result:{
                        player:function (player,target){    
                var cards=player.getCards('h');
                var minval=100;
                for(var i=0;i<cards.length;i++){
                    if (get.value(cards[i])<minval) {minval=get.value(cards[i])};
                }            
                if (game.hasPlayer(function(current){
                        return (current.hasSkill('wujie'));
                    })&&(player.getExpansions('ESzhishi').length==player.maxHp)){
                    return -((player.maxHp-1)*3+(player.hp-1)*2);
                } else return (4-minval)-5*(player.getExpansions('ESzhishi').length/player.maxHp);
            },
                    },
                },
            },
            xianzhi:{
            },
            fangxiao:{
                derivation:"fangxiaozongheng",
                trigger:{
                    global:"useCardEnd",
                },
                filter:function (event,player){
        if(player.countMark('fangxiao_count')>=player.hp) return false;
        if(player==event.player) return false;
        var bool=function(card){
            return (get.type(card,false)=='basic'||get.type(card,false)=='trick');
        };
        if(!bool(event.card)) return false;
        var evt=event.getParent('phaseUse');
        if(evt.player!=event.player) return false;
        if (event.player.getHistory('useCard',function(evtx){
            return bool(evtx.card)&&evtx.getParent('phaseUse')==evt;
        })[0]!=event) return false;
        return game.hasPlayer(function(current){
            return player.canUse(event.card.name,current);
        });
    },
                check:function (event,player){
        return player.getUseValue(event.card)>0;
    },
                prompt:function (event,player){
        return '是否发动【仿笑】，使用'+get.translation(event.card.name)+'？';
    },
                content:function (){
        'step 0'
        event.cardName=trigger.card.name;
        player.chooseUseTarget({name:event.cardName},false);
        'step 1'
        if(result.bool==true){
            player.addTempSkill('fangxiao_count','roundStart');
            player.addMark('fangxiao_count',1,false);
        }else event.finish();
        'step 2'
        if(trigger.player!=player&&!trigger.player.hasSkill('fangxiaozongheng')){
            if (!trigger.player.storage.fangxiaozongheng){
                player.chooseBool('是否令'+get.translation(trigger.player)+'获得【仿笑·纵横】直至其下回合开始时？').set("ai",function(event,player){
                    return get.attitude(player,trigger.player)>0;
                });
            }
        } else event.finish();
        'step 3'
        if(result.bool==true){
            trigger.player.addTempSkill('fangxiaozongheng',{player:'phaseBegin'});
            trigger.player.restoreSkill('fangxiaozongheng');
            player.line(trigger.player);
            game.log(player,'发起了','#y纵横','，令',trigger.player,'获得了技能','#g【仿笑·纵横】');
        }
    },
                subSkill:{
                    count:{
                        mark:true,
                        intro:{
                            content:"本轮已发动#次",
                        },
                        onremove:true,
                        sub:true,
                    },
                },
            },
            fangxiaozongheng:{
                limited:true,
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player){
        player.storage.fangxiaozongheng=false;
    },
                onremove:function (player){
        delete player.storage.fangxiaozongheng;
    },
                check:function (event,player){
        return player.getUseValue(event.card)>0;
    },
                trigger:{
                    global:"useCardEnd",
                },
                filter:function (event,player){
        if(player==event.player) return false;
        var bool=function(card){
            return (get.type(card,false)=='basic'||get.type(card,false)=='trick');
        };
        if(!bool(event.card)) return false;
        var evt=event.getParent('phaseUse');
        if(evt.player!=event.player) return false;
        if (event.player.getHistory('useCard',function(evtx){
            return bool(evtx.card)&&evtx.getParent('phaseUse')==evt;
        })[0]!=event) return false;
        return game.hasPlayer(function(current){
            return player.canUse(event.card.name,current);
        });
    },
                prompt:function (event,player){
        return '是否发动【仿笑·纵横】，使用'+get.translation(event.card.name)+'？';
    },
                content:function (){
        'step 0'
        event.cardName=trigger.card.name;
        player.chooseUseTarget({name:event.cardName},false);
        'step 1'
        if(result.bool==true){
            player.storage.fangxiaozongheng=true;
            player.awakenSkill("fangxiaozongheng");
        }
    },
                skillAnimation:false,
            },
            exi:{
                trigger:{
                    player:"useCardToPlayered",
                },
                usable:3,
                filter:function (event,player){
        return (event.target!=player&&event.target.countDiscardableCards(player,'he')>0);
    },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                content:function (){
        player.discardPlayerCard(trigger.target,'he',true);
    },
                prompt:function (event,player){
        return '是否发动【恶戏】，弃置'+get.translation(event.target)+'的一张牌？';
    },
                logTarget:"target",
                ai:{
                    threaten:0.99,
                    effect:{
                        player:function (card,player,target){
                if ((target!=player)&&get.attitude(player,target)<0) return [1,1];
            },
                    },
                },
            },
            xitian:{
                trigger:{
                    player:"recoverBegin",
                },
                filter:function (event,player){
        var evt=event;
        if (evt.card){
            return (evt.card.name=='tao'||evt.card.name=='taoyuan');
        }
    },
                content:function (){
        trigger.num++;
        player.draw(2);
    },
                prompt:"是否发动【喜甜】，令回复值+1并摸两张牌？",
                ai:{
                    threaten:0.83,
                    effect:{
                        target:function (card,player,target){
                if (card.name=='tao'||card.name=='taoyuan'){
                    if (player.maxHp-player.hp>1) return [1,4];
                    else return [1,2];
                }
            },
                    },
                },
            },
            huti:{
                enable:"phaseUse",
                filter:function (event,player){
        return (player.name=='aoihinata'||player.name2=='aoihinata'||player.name=='aoiyuuta'||player.name2=='aoiyuuta');
    },
                content:function (){
        'step 0'
        if (player.name=='aoihinata'||player.name2=='aoihinata'){
            event.you='aoihinata';
            event.brother='aoiyuuta';
        } else if (player.name=='aoiyuuta'||player.name2=='aoiyuuta'){
            event.you='aoiyuuta';
            event.brother='aoihinata';
        }
        event.swap=false;
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].name==event.brother||game.players[i].name2==event.brother){
                event.swap=game.players[i];
            }
        }
        if(event.swap!=false) {
            game.broadcastAll(function(target1,target2){
                game.swapSeat(target1,target2);
            },player,event.swap);
        } else {
            player.reinit(event.you,event.brother);
            if(_status.characterlist){
                _status.characterlist.add(event.you);
                _status.characterlist.remove(event.brother);
            }
        } 
        'step 1'
        player.removeSkill('huti');
    },
                ai:{
                    order:15,
                    result:{
                        player:function (player,target){return (player.countCards('h')-player.hp>4);},
                    },
                },
            },
            duyuan:{
                trigger:{
                    player:"useCardToPlayered",
                },
                usable:3,
                filter:function (event,player){
        return (event.target==player);
    },
                frequent:true,
                content:function (){
        player.draw();
    },
                ai:{
                    threaten:0.89,
                    effect:{
                        player:function (card,player,target){
                if (target==player) return [1,1];
            },
                    },
                },
            },
            xila:{
                trigger:{
                    source:"damageBegin1",
                    player:"damageBegin3",
                },
                filter:function (event,player){
        return event.nature=='fire'&&(event.source!=event.player);
    },
                check:function (event,player){
        if (event.source==player) return get.attitude(player,event.player)<0;
        return true;
    },
                content:function (){
        if (trigger.source==player){
            player.line(trigger.player);
            game.log(player,"令此伤害+1");
            trigger.num++;
        } else {
            game.log(player,"令此伤害-1");
            trigger.num--;
        }
        player.draw(2);
    },
                ai:{
                    threaten:0.848,
                    effect:{
                        player:function (card,player,target){
                if (get.tag(card,'damage')>0&&get.nature(card)=='fire') return [1,4.5];
            },
                        target:function (card,player,target){
                if (get.tag(card,'damage')>0&&get.nature(card)=='fire') return [1,-4];
            },
                    },
                },
            },
            lengwang:{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return (event.num>0)&&player.countCards('h')>0;
    },
                check:function (event,player){
        return game.hasPlayer(function(current){
            return (get.attitude(player,current)>0&&player!=current);
        });
    },
                content:function (){
        "step 0"
        player.chooseCardTarget({
            filterCard:true,
            selectCard:[1,Infinity],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                //if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (get.value(card));
                //return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return 1-att;
                }
                return att;
            },
            prompt:'请选择要送人的卡牌'
        });
        "step 1"
        if(result.bool){
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player,'giveAuto');
            player.draw(result.cards.length);
        }
        else event.finish();
    },
                ai:{
                    maixie:true,
                    result:{
                        effect:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    var num=1;
                    if(get.attitude(player,target)>0){
                        if(player.needsToDiscard()){
                            num=0.7;
                        }
                        else{
                            num=0.5;
                        }
                    }
                    if(player.hp>=4) return [1,num*2];
                    if(target.hp==3) return [1,num*1.5];
                    if(target.hp==2) return [1,num*0.5];
                }
            },
                    },
                    threaten:0.6,
                },
            },
            ESyizhi:{
                mark:false,
                intro:{
                    content:function (storage,player,skill){
            return '此阶段'+get.translation(player)+'的'+get.translation(player.storage.yizhiSuit)+'牌视为'+get.translation(player.storage.yizhiCard);
        },
                },
                onremove:true,
                trigger:{
                    player:"phaseUseBegin",
                },
                check:function (event,player){
            return game.hasPlayer(function(current){
                return (get.attitude(player,current)>0);
            });
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                direct:true,
                group:["ESyizhi_3"],
                content:function (){
        "step 0"
        player.chooseTarget("是否发动【依指】选择一名其他角色？",function(card,player,target){
            return player!=target;
        }).set("ai",function(target){
          return get.attitude(player,target);
        });
        "step 1"
        if(result.bool){
            player.storage.target=result.targets[0];
            game.log(player,'选择了',player.storage.target);
            var str=get.translation(player)+'的';
            var content=[str+'手牌',player.getCards('h')];
            game.log(player.storage.target,'观看了',player,'的手牌');

            player.storage.target.chooseControl('ok').set('dialog',content);
        } else event.finish();
        "step 2"
        player.storage.target.chooseControl(lib.suit).set('prompt','请选择一个花色').set('ai',function(){
            var maxSuit='spade';
            for(var i=0;i<lib.suit.length;i++){
                if (_status.event.pl.countCards('h',{suit:lib.suit[i]})>_status.event.pl.countCards('h',{suit:maxSuit})) maxSuit=lib.suit[i];
            };
            return maxSuit;
        }).set('pl',player);
        "step 3"
        if(result.control) {
            event.suit=result.control;
            player.popup(event.suit+2);
            game.log(player.storage.target,'选择了',event.suit+2);
            player.storage.yizhiSuit=event.suit;
        } else event.finish();
        "step 4"
        if(event.suit) {
            var list=[];
            for(var i=0;i<lib.inpile.length;i++){
                var name=lib.inpile[i];
                if(name=='sha'){
                    list.push(['基本','','sha']);
                    for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                }
                else if(get.type(name)=='basic') list.push(['基本','',name]);
                else if(get.type(name)=='trick') list.push(['锦囊','',name]);
            }
            player.storage.target.chooseButton(['依指',[list,'vcard']],true).set('ai',function(button){
                card={
                    name:button.link[2],
                    nature:button.link[3],
                };
                return _status.event.pl.getUseValue(card)*_status.event.att;
            }).set('att',get.attitude(event.target,player)>0?1:-1).set('pl',player);
        }
        "step 5"
        if(event.suit) {
            var chosen=result.links[0][2];
            var nature=result.links[0][3];
            game.log(player.storage.target,'声明了',get.translation(chosen));
            player.storage.yizhiCard=chosen;
            player.storage.yizhiNature=nature;
            player.addTempSkill('ESyizhi_2','phaseUseEnd');
            player.addMark('ESyizhi');
            game.log(player,'此阶段内所有',player.storage.yizhiSuit+2,'手牌皆视为',get.translation(chosen));
        }
    },
                subSkill:{
                    "2":{
                        mod:{
                            cardname:function (card,player,name){
                    if(get.suit(card)==player.storage.yizhiSuit) return player.storage.yizhiCard;
                },
                            cardnature:function (card,player){
                    if(get.suit(card)==player.storage.yizhiSuit) return player.storage.yizhiNature;
                },
                        },
                        sub:true,
                    },
                    "3":{
                        trigger:{
                            player:"phaseUseAfter",
                        },
                        charlotte:true,
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeMark('ESyizhi');
                player.storage.yizhiCard=null;
                player.storage.yizhiSuit=null;
                player.storage.yizhiNature=null;
            },
                        sub:true,
                    },
                },
            },
            shanxing:{
                enable:["chooseToUse","chooseToRespond"],
                viewAs:{
                    name:"shan",
                    isCard:true,
                },
                mark:false,
                filterCard:function (){return false},
                viewAsFilter:function (player){
        if(player.hasSkill('shanxing_disable')) return false;
        return true;
    },
                onuse:function (event,player){
        player.addTempSkill('shanxing_disable','roundStart');
    },
                selectCard:-1,
                prompt:"视为使用一张闪",
                ai:{
                    order:function (){
            return 3.15;
        },
                    skillTagFilter:function (player){
            if(player.hasSkill('shanxing_disable')) return false;
        },
                    respondShan:true,
                    basic:{
                        useful:[7,5.1,2],
                        value:[7,5.1,2],
                    },
                    result:{
                        player:1,
                    },
                },
                subSkill:{
                    disable:{
                        sub:true,
                    },
                },
            },
            jiejin:{
                group:["jiejin_2"],
                mark:false,
                marktext:"借",
                intro:{
                    content:function (storage,player,skill){
            return get.translation(player.storage.jiejinPlayer)+'于回合外使用或打出牌时，'+get.translation(player.storage.jiejinPlayer)+'可以令你摸一张牌并弃一枚“借”';
        },
                },
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        if (event.num==0) return false;
        return game.hasPlayer(function(current){
            return current.countGainableCards(player,'he')>0&&current!=player;
        });
    },
                popup:false,
                content:function (){
        "step 0"
        event.count=trigger.num;
        "step 1"
        player.chooseTarget('是否发动【借金】，获得一名角色的一张牌？',function(card,player,target){
            return player!=target&&target.countGainableCards(player,'he')>0;
        }).set('ai',function(target){
            var player=_status.event.player;
            if (get.attitude(_status.event.player,target)<0)  return -get.attitude(_status.event.player,target)*(target.getDamagedHp())*100;
            return get.attitude(_status.event.player,target)*target.countGainableCards(player,'he');
        })
        "step 2"
        if (result.bool){
            event.count--;
            player.logSkill(event.name,result.targets);    
            event.target=result.targets[0];
            result.targets[0].chooseCard('交给'+get.translation(player)+'一张牌','he',true).set('ai',function(card){
                if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
                    return 11-get.value(card);
                }
                else{
                    return 7-get.value(card);
                }
            });
        } else event.finish();
        "step 3"
        if(result.bool){
            player.gain(result.cards,event.target,'giveAuto');
            event.target.storage.jiejinPlayer=player;
            event.target.addMark('jiejin');
        } else event.finish();
        "step 4"
        if(result.bool&&event.count>0&&game.hasPlayer(function(current){
            return current.countGainableCards(player,'he')>0&&current!=player;
        })) event.goto(1);
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                if(player.countCards('he')>1&&get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                    if(get.attitude(target,player)<0) return [1,1];
                }
            },
                    },
                },
                subSkill:{
                    "2":{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        filter:function (event,player){
                if (_status.currentPhase==player) return false;
                return game.hasPlayer(function(current){
                    return current.hasMark('jiejin');
                });
            },
                        content:function (){
                "step 0"
                player.chooseTarget('选择一名有“借”的角色摸一张牌并弃一枚“借”。',true,function(card,player,target){
                    return player!=target&&target.hasMark('jiejin');
                }).set('ai',function(target){
                    return get.attitude(player,target);
                });
                "step 1"
                if(result.bool){
                    result.targets[0].draw();
                    result.targets[0].removeMark('jiejin');
                }
            },
                        sub:true,
                    },
                },
            },
            tanqing:{
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return player.canUse('zhibi',current);
        });
    },
                mod:{
                    selectTarget:function (card,player,range){
            if(card.name=='zhibi'&&range[1]!=-1) range[1]++;
        },
                },
                content:function (){
        player.chooseUseTarget('是否发动【探情】，选择【知己知彼】的目标？',{name:'zhibi'},true).logSkill='tanqing';
    },
            },
            biquan:{
                trigger:{
                    player:"phaseJieshuBegin",
                },
                direct:true,
                filter:function (event,player){
        return true;
    },
                content:function (){
        "step 0"
        player.chooseTarget('你可以令一名其他角色与你的距离+'+Math.max(player.getDamagedHp(),1)+'直至你的下回合开始时',1).set('ai',function(target){
            return get.attitude(player,target)*get.distance(target,player,'attack');
        });
        "step 1"
        if(result.bool){
            event.target=result.targets[0];
            player.logSkill('biquan',event.target);
            player.storage.biquanChara=event.target;
            player.storage.damagedHp=Math.max(player.getDamagedHp(),1);
            player.addTempSkill('biquan_2',{player:'phaseBegin'});
        }
        else{
            event.finish();
        }
        "step 2"
        if (!event.target.inRange(player)) player.draw(2);
    },
                subSkill:{
                    "2":{
                        mark:true,
                        intro:{
                            content:function (storage,player,skill){
                    return get.translation(player.storage.biquanChara)+'与你的距离+'+player.storage.damagedHp;
                },
                        },
                        mod:{
                            globalTo:function (from,to,distance){
                    if (to.storage.biquanChara==from) return distance+to.storage.damagedHp;
                },
                        },
                        onremove:function (player){
                delete player.storage.biquanChara;
                delete player.storage.damagedHp;
            },
                        sub:true,
                    },
                },
            },
            hongyue:{
                zhuSkill:true,
                trigger:{
                    global:"damageBegin1",
                },
                filter:function (event,player){
        if (!event.source) return false;
        if (event.source==player) return false;
        if (player.hasSkill('hongyue_phase')) return false;
        if (!player.hasZhuSkill('hongyue')) return false;
        return event.card&&get.color(event.card)=='red';
    },
                init:function (player){
        player.storage.hongyueBanned=[];
    },
                popup:false,
                direct:true,
                content:function (){
        'step 0'
        trigger.source.chooseBool('是否对'+get.translation(trigger.player)+'发动【红月】？').set('ai',function(){
            return (get.attitude(trigger.source,player)>0&&get.attitude(trigger.source,trigger.player)<0);
        });
        'step 1'
        if(result.bool){
            trigger.source.logSkill('hongyue');
            player.chooseBool('是否发动【红月】，令伤害值翻倍？').set('ai',function(){
                var player=get.player();
                if(_status.event.damaged.hasSkillTag('filterDamage',null,{
                    player:_status.event.source,
                    card:_status.event.damageCard,
                })) return false;
                if (get.attitude(player,_status.event.damaged)>=0) return false;
                return true;
            }).set('source',trigger.source).set('damaged',trigger.player).set('damageCard',trigger.card);
        } else event.finish();
        'step 2'
        if(result.bool==true){
            player.logSkill('hongyue',trigger.source);
            trigger.num*=2;
            player.addTempSkill('hongyue_phase');
            if (trigger.source.group!='akatsuki'){
                player.chooseToDiscard('弃置两张牌','he',2,true).set('ai',function(card){
                    return 9-get.value(card);
                })
            }
        } else event.finish();
    },
                subSkill:{
                    phase:{
                        sub:true,
                    },
                },
            },
            leyuan:{
                zhuSkill:true,
                trigger:{
                    global:"judgeEnd",
                },
                filter:function (event,player){
        //if (player.hasSkill('leyuan_phase')) return false;
        if (!player.hasZhuSkill('leyuan')) return false;
        if (player.countCards('hes')==0&&event.player.group!='eden') return false;
        if (player==event.player) return false;
        return true;
    },
                popup:false,
                direct:true,
                content:function (){
        'step 0'
        trigger.player.chooseBool('是否对'+get.translation(player)+'发动【乐园】？').set('ai',function(){
            return (get.attitude(trigger.player,player)>0);
        });
        'step 1'
        if(result.bool){
            switch(trigger.result.suit){
                case "spade":event.cardName='nanman';break;
                case "heart":event.cardName='huogong';break;
                case "club":event.cardName='shuiyanqijunx';break;
                case "diamond":event.cardName='juedou';break;
                default:event.finish();
            }
            var card={name:event.cardName};
            lib.skill.leyuan_x.viewAs=card;
            player.storage.leyuanSuit=trigger.result.suit;
            
            if (trigger.player.group!='eden'){
                var next=player.chooseToUse();
                next.logSkill='leyuan';
                next.set('ai',function(card){
                    return player.getUseValue(card)>0;
                });
                next.set('openskilldialog','是否发动【乐园】？ 将一张'+get.translation(trigger.result.suit)+'牌当作'+get.translation(event.cardName)+'使用？');
                next.set('norestore',true);
                next.set('_backupevent','leyuan_x');
                next.set('custom',{
                    add:{},
                    replace:{window:function(){},
                    }
                });
                next.backup('leyuan_x');
            } else {
                player.chooseUseTarget('###是否发动【乐园】？###视为使用一张'+get.translation(event.cardName)+'？',{name:event.cardName,suit:trigger.result.suit}).logSkill='leyuan';
                //player.chooseUseTarget({name:event.cardName/*,suit:trigger.result.suit*/},false);
            }
        } else event.finish();
        'step 2'
        delete player.storage.leyuanSuit;
    },
                subSkill:{
                    x:{
                        filterCard:function (card,player,event){
                return (get.suit(card)==player.storage.leyuanSuit);
            },
                        selectCard:1,
                        position:"hes",
                        popname:true,
                        check:function (card){return 12-get.value(card)},
                        sub:true,
                        viewAs:{
                            name:"huogong",
                        },
                        ai:{
                            wuxie:function (target,card,player,viewer){
                        if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
                            if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                        }
                    },
                            basic:{
                                order:9,
                                useful:[5,1],
                                value:5,
                            },
                            result:{
                                "target_use":function (player,target){
                            if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                            var nh=target.countCards('h');
                            if(get.mode()=='identity'){
                                if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                            }
                            if(nh==0) return -2;
                            if(nh==1) return -1.7
                            return -1.5;
                        },
                                target:function (player,target){
                            var nh=target.countCards('h');
                            if(get.mode()=='identity'){
                                if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                            }
                            if(nh==0) return -2;
                            if(nh==1) return -1.7
                            return -1.5;
                        },
                                player:function (player,target,card){
                            if(player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                            },true)){
                                return 0;
                            }
                            if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                                return 0;
                            }
                            var hs1=target.getCards('h','sha');
                            var hs2=player.getCards('h','sha');
                            if(hs1.length>hs2.length+1){
                                return -2;
                            }
                            var hsx=target.getCards('h');
                            if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                                return -2;
                            }
                            if(hsx.length>3&&hs2.length==0){
                                return -2;
                            }
                            if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                                return -2;
                            }
                            return -0.5;
                        },
                            },
                            tag:{
                                respond:1,
                                respondSha:1,
                                damage:1,
                                multitarget:1,
                                multineg:1,
                                fireDamage:1,
                                natureDamage:1,
                                norepeat:1,
                            },
                        },
                    },
                },
            },
            zhuwu:{
                global:"zhuwu_tag",
                trigger:{
                    global:["chooseToRespondBegin","chooseToUseBegin"],
                },
                filter:function (event,player){
        if(player.hasSkill('zhuwu_phase')) return false;
        if (player.countCards('h')==0) return false;
        if(event.player==_status.currentPhase||player==event.player||player==_status.currentPhase) return false;
        for(var i of lib.inpile){
            if(get.type(i)=='basic'&&event.filterCard({name:i},event.player,event)&&i!='tao') return true;
        }
        return false;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                logTarget:function (event,player){
        return event.player;
    },
                init:function (player){
        player.storage.zhuwu_change=0;
    },
                popup:false,
                priority:15,
                content:function (){
        'step 0'
        event.respondCard=[];
        'step 1'
        for(var i of lib.inpile){
            if (get.type(i)=='basic'&&trigger.filterCard({name:i},trigger.player,trigger)&&i!='tao') {
                event.respondCard.push(i);
            }
        }
        'step 2'
        player.chooseCard('交给'+get.translation(trigger.player)+'一张'+get.translation(event.respondCard)+'？',function(card){
            for (var i = 0; i < event.respondCard.length; i++) {
                if (event.respondCard[i]==card.name) return true;
            }
            return false;
        }).set('ai',function(card){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var attitude=get.attitude(player,trigger.player);
            return attitude>0;
        })
        "step 3"
        if(result.bool){
            player.logSkill('zhuwu');
            player.line(trigger.player);
            player.addTempSkill('zhuwu_phase','phaseEnd');
            trigger.player.gain(result.cards,player,'giveAuto');
            if(player.isDamaged()){
                player.storage.zhuwu_change+=1;
                player.addSkill('zhuwu_change');
            }
        }
    },
                ai:{
                    order:30,
                    result:{
                        player:function (player){
                if(_status.event.dying) return get.attitude(player,_status.event.dying);
                return 1;
            },
                    },
                    threaten:2,
                },
                subSkill:{
                    change:{
                        mod:{
                            maxHandcard:function (player,num){
                    if(player.storage.zhuwu_change) return num+player.storage.zhuwu_change;
                },
                        },
                        charlotte:true,
                        mark:true,
                        intro:{
                            content:(num)=>('手牌上限'+(num<0?'':'+')+num),
                        },
                        sub:true,
                    },
                    tag:{
                        ai:{
                            respondShan:true,
                            respondSha:true,
                            charlotte:true,
                            save:true,
                        },
                        tag:{
                            recover:1,
                            save:1,
                        },
                        sub:true,
                    },
                    phase:{
                        sub:true,
                    },
                },
            },
            cunyi:{
                trigger:{
                    global:"gainAfter",
                },
                frequent:true,
                filter:function (event,player){
        if(event.player!=player){
            var evt=event.getl(player);
            return evt&&evt.hs&&evt.hs.length>0;
        }
        return false;
    },
                content:function (){
        player.draw();
        if(player.isDamaged()){
            player.draw();
        }
    },
            },
            shengjian:{
                zhuSkill:true,
                group:["shengjian_detector"],
                trigger:{
                    global:"phaseJieshuBegin",
                },
                filter:function (event,player){
        if (!player.hasZhuSkill('shengjian')) return false;
        if (player==event.player) return false;
        if (player.getHistory('custom',function(evt){
            return evt.shengjian==true;
        }).length==0) return false;
        var suits=[];
        game.getGlobalHistory('cardMove',function(evt){
            if(suits.length>=4) return;
            if(evt.name=='lose'){
                if(evt.position==ui.discardPile){
                    for(var i of evt.cards) suits.add(get.suit(i,false));
                }
            }
            else{
                if(evt.name=='cardsDiscard'){
                    for(var i of evt.cards) suits.add(get.suit(i,false));
                }
            }
        });
        if (suits.length<4) return false;
        if (player.countCards('he')==0) return false;
        if (event.player.isEmpty(1)&&!lib.inpile.contains('feilongduofeng')&&!get.cardPile('feilongduofeng','field')&&!player.storage.shengjianCard.includes('feilongduofeng')) return true;
        if (event.player.isEmpty(2)&&!lib.inpile.contains('huxinjing')&&!get.cardPile('huxinjing','field')&&!player.storage.shengjianCard.includes('huxinjing')) return true;
        if (!lib.inpile.contains('liulongcanjia')&&!get.cardPile('liulongcanjia','field')&&!player.storage.shengjianCard.includes('liulongcanjia')) return true;
        if (event.player.isEmpty(5)&&!lib.inpile.contains('dinglanyemingzhu')&&!get.cardPile('dinglanyemingzhu','field')&&!player.storage.shengjianCard.includes('dinglanyemingzhu')) return true;
        return false;
    },
                popup:false,
                direct:true,
                init:function (player){
        player.storage.shengjianCard=[];
    },
                content:function (){
        'step 0'
        player.chooseBool('是否对'+get.translation(trigger.player)+'发动【生碱】？').set('ai',function(){
            return (get.attitude(player,trigger.player)>0);
        });
        'step 1'
        if(result.bool){
            player.chooseToDiscard('he',1).set('ai',function(card){
                return 7-get.value(card);
            });
        } else event.finish();
        'step 2'
        if(result.bool!=false){
            var list=[];
            if(trigger.player.isEmpty(1)&&!lib.inpile.contains('feilongduofeng')&&!get.cardPile('feilongduofeng','field')&&!player.storage.shengjianCard.includes('feilongduofeng')){list.push(game.createCard2('feilongduofeng','spade',2))};
            if(trigger.player.isEmpty(2)&&!lib.inpile.contains('huxinjing')&&!get.cardPile('huxinjing','field')&&!player.storage.shengjianCard.includes('huxinjing')){list.push(game.createCard2('huxinjing','club',2))};
            if(!lib.inpile.contains('liulongcanjia')&&!get.cardPile('liulongcanjia','field')&&!player.storage.shengjianCard.includes('liulongcanjia')){list.push(game.createCard2('liulongcanjia','heart',13))};
            if(trigger.player.isEmpty(5)&&!lib.inpile.contains('dinglanyemingzhu')&&!get.cardPile('dinglanyemingzhu','field')&&!player.storage.shengjianCard.includes('dinglanyemingzhu')){list.push(game.createCard2('dinglanyemingzhu','diamond',6))};
            player.chooseButton(['生碱',list],true).set('ai',function(button){
                return get.order(button.link);
            });
        } else event.finish();
        'step 3'
        if(result.links){
            player.logSkill('shengjian');
            player.line(trigger.player);
            trigger.player.equip(result.links[0]);
            player.storage.shengjianCard.push(result.links[0][2]);
            if (trigger.player.group=='alkaloid'){
                player.draw();
            }
        }
    },
                subSkill:{
                    detector:{
                        trigger:{
                            global:"changeHp",
                        },
                        charlotte:true,
                        forced:true,
                        silent:true,
                        content:function (){
                player.getHistory('custom').push({shengjian:true});
            },
                        sub:true,
                        popup:false,
                    },
                },
            },
            waiqi:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(player.countCards('h')==0) return false;
        return game.hasPlayer(function(current){
            if(_status.currentPhase==current) return false;
            return current.countCards('h');
        });
    },
                filterTarget:function (card,player,target){
        return player.canCompare(target);
    },
                direct:true,
                clearTime:true,
                content:function (){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        if(!result.tie){
            if(result.bool){
                if(result.target&&get.position(result.target)=='d') player.gain(result.target,'gain2','log');
                if (player.countCards('h')>0&&player.canCompare(target)){
                    player.chooseBool('是否再次发动【外棋】？').set("ai",function(event,player){
                        if(!player.hasCard(function(card){
                            if(get.position(card)!="h") return false;
                            var val=get.value(card);
                            if(val<0) return true;
                            if(val<=5){
                                return card.number>=11;
                            }
                            if(val<=6){
                                return card.number>=13;
                            }
                            return false;
                        })) return false;
                        return true;
                    });
                } 
            } else {
                if(result.player&&get.position(result.player)=='d') target.gain(result.player,'gain2','log');
                event.finish();
            }
        } else event.finish();
        "step 2"
        if(result.bool==true)event.goto(0);
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(!player.hasCard(function(card){
                    if(get.position(card)!="h") return false;
                    var val=get.value(card);
                    if(val<0) return true;
                    if(val<=5){
                        return card.number>=11;
                    }
                    if(val<=6){
                        return card.number>=13;
                    }
                    return false;
                })) return 0;
                return -Math.sqrt(1+target.countCards('he'))/(1+target.countCards('j'));
            },
                    },
                },
            },
            jiangjun:{
                trigger:{
                    player:["chooseToCompareAfter","compareMultipleAfter"],
                    target:["chooseToCompareAfter","compareMultipleAfter"],
                },
                locked:true,
                forced:true,
                filter:function (event,player){
        if(event.preserve) return false;
        if(player==event.player){
            if (event.num1>event.num2){
                return event.target.countCards('h')==0;
            }
            else if(event.num2>event.num1){
                return event.player.countCards('h')==0;
            }
        }
        else{
            if(event.num1<event.num2){
                return event.player.countCards('h')==0;
            }
            else if(event.num2<event.num1){
                return event.target.countCards('h')==0;
            }
        }
        return false;
    },
                content:function (){
        'step 0'
        if(player==trigger.player){
            if(trigger.num1>trigger.num2){
                event.loser=trigger.target;
                event.winner=trigger.player;
            }
            else if(trigger.num2>trigger.num1){
                event.loser=trigger.player;
                event.winner=trigger.target;
            }
        }
        else{
            if(trigger.num1<trigger.num2){
                event.loser=trigger.player;
                event.winner=trigger.target;
            }
            else if(trigger.num2<trigger.num1){
                event.loser=trigger.target;
                event.winner=trigger.player;
            }
        }
        'step 1'
        event.winner.discardPlayerCard(event.loser,1,'e',true);
    },
                ai:{
                    threaten:1,
                },
            },
            huyou:{
                trigger:{
                    global:"useCard",
                },
                limited:true,
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player){
        player.storage.huyou=false;
    },
                onremove:function (player){
        delete player.storage.huyou;
    },
                filter:function (event,player){
        if(event.player==player) return false;
        if(event.player==_status.currentPhase) return false;
        if (!event.player.isDamaged()) return false;
        return true;
    },
                check:function (event,player){
        if (get.attitude(player,event.player)<=0) return false;
        if (event.player.getDamagedHp()<2) return false;
        if (event.player.hp>1) return false;
        if (player.countCards('h')>3) return false;
        return true;
    },
                content:function (){
        'step 0'
        trigger.player.recover();
        player.awakenSkill("huyou");
        'step 1'
        if (player.countCards('h')>1){
            player.chooseCard('选择一张手牌，然后弃置其余的牌','h',1,true).set('ai',function(card){return get.value(card)});
        } else event.finish();
        'step 2'
        var cards=player.getCards('h');
        cards.remove(result.cards[0]);
        player.discard(cards);
    },
                skillAnimation:true,
            },
            busi:{
                zhuSkill:true,
                trigger:{
                    global:"useCardAfter",
                },
                popup:false,
                direct:true,
                filter:function (event,player){
        if (player.hasSkill('busi_phase')) return false;
        if (!player.hasZhuSkill('busi')) return false;
        if (event.targets&&event.targets.length>1) return false;
        return (get.type(event.card)!='equip'&&get.color(event.card)&&get.color(event.card)=='black'&&event.player!=player&&get.itemtype(event.cards)=='cards'&&get.position(event.cards[0],true)=='o');
    },
                content:function (){
        'step 0'
        trigger.player.chooseBool('是否对'+get.translation(player)+'发动【不死】？').set('ai',function(){
            return (get.attitude(trigger.player,player)>0&&(get.value(trigger.cards)>4||trigger.player.countCards('h')>trigger.player.hp));
        });
        'step 1'
        if(result.bool){
            trigger.player.logSkill('busi',player);
            player.gain(trigger.cards,'gain2');
            player.addTempSkill('busi_phase');
            if (trigger.player.group!='undead'){
                trigger.player.chooseToDiscard('弃置一张牌','he',true).set('ai',function(card){
                    return 4-get.value(card);
                })
            }
        }
    },
                subSkill:{
                    phase:{
                        sub:true,
                    },
                },
            },
            yuxiang:{
                enable:"phaseUse",
                filter:function (event,player){
        if(player.countMark('yuxiang_count')>=2) return false;
        return true;
    },
                chooseButton:{
                    dialog:function (){
            var list=lib.inpile;
            var list2=[];
            var x=Math.max(game.dead.length,1);
            for(var i=0;i<list.length;i++){
                if(get.type(list[i])=='trick') list2.push(['锦囊','',list[i]]);
            }
            specialList=[];
            specialList=specialList.concat(['diaohulishan','gz_guguoanbang','gz_haolingtianxia','gz_kefuzhongyuan','gz_wenheluanwu','shuiyanqijunx','yiyi','yuanjiao','zhibi']);
            specialList=specialList.concat(['qijia','shengdong','zengbin']);
            specialList=specialList.concat(['jiejia','kaihua','zhulu_card']);
            specialList=specialList.concat(['zhujinqiyuan','chenghuodajie','guaguliaodu','tuixinzhifu']);
            specialList=specialList.concat(['diaobingqianjiang','fudichouxin','geanguanhuo','shezhanqunru','shuiyanqijun','toulianghuanzhu','wangmeizhike','dz_mantianguohai']);
            specialList=specialList.concat(['binglinchengxiax','qizhengxiangsheng','tiaojiyanmei','wy_meirenji','wy_xiaolicangdao']);
            for(var i=0;i<specialList.length;i++){
                list2.push(['锦囊','',specialList[i]]);
            }
            list3=list2.randomGets(x).sort();
            var player=get.player();
            player.addTempSkill('yuxiang_count','phaseUseAfter');
            player.addMark('yuxiang_count',1,false);
            var displayList=[];
            for (var i = 0; i < list3.length; i++) {
                displayList.push(list3[i][2]);
            }
            game.log(player,'发动了','#g【宇想】','，抽取了',displayList);
            return ui.create.dialog('宇想',[list3,'vcard']);
        },
                    filter:function (button,player){
            var card={name:button.link[2]};
            var info=get.info(card);
            var num=Math.max(game.dead.length,1);
            //if(get.tag(card,'multitarget')&&get.select(info.selectTarget)[1]==-1){
            if(get.select(info.selectTarget)[1]==-1){
                if(game.countPlayer(function(current){
                    return player.canUse(card,current)
                })>num){
                    return false;
                }
            }
            else if(info.changeTarget){
                var giveup=true;
                var list=game.filterPlayer(function(current){
                    return player.canUse(card,current);
                });
                for(var i=0;i<list.length;i++){
                    var targets=[list[i]];
                    info.changeTarget(player,targets);
                    if(targets.length<=num){
                        giveup=false;break;
                    }
                }
                if(giveup){
                    return false;
                }
            }
            return lib.filter.filterCard(card,player,_status.event.getParent());
        },
                    check:function (button){
            return _status.event.player.getUseValue(button.link[2]);
        },
                    backup:function (links,player){
            return {
                filterCard:function(){return false},
                selectCard:-1,
                position:'h',
                selectTarget:function(){
                    var select=get.select(get.info(get.card()).selectTarget);
                    var nh=Math.max(game.dead.length,1);
                    if(select[1]>nh){
                        select[1]=nh;
                    }
                    return select;
                },
                filterTarget:function(card,player,target){
                    var info=get.info(card);
                    if(info.changeTarget){
                        var targets=[target];
                        info.changeTarget(player,targets);
                        if(targets.length>Math.max(game.dead.length,1)){
                            return false;
                        }
                    }
                    return lib.filter.filterTarget(card,player,target);
                },
                popname:true,
                viewAs:{name:links[0][2]},
                ai1:function(){
                    return 1;
                }
            }
        },
                    prompt:function (links,player){
            return '视为使用'+get.translation(links[0][2]);
        },
                },
                ai:{
                    order:15,
                    result:{
                        player:function (player){
                return 1;
            },
                    },
                    threaten:1.6,
                },
                subSkill:{
                    count:{
                        mark:true,
                        intro:{
                            content:"本回合已发动#次",
                        },
                        onremove:true,
                        sub:true,
                    },
                },
            },
            shenmian:{
                trigger:{
                    player:"phaseJieshuBegin",
                },
                check:function (event,player){
        return game.players.length>=4;
    },
                content:function (){
        player.draw(game.players.length);
        player.turnOver();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(card.name=='guiyoujie') return [0,1];
            },
                    },
                },
            },
            qianghuan:{
                trigger:{
                    player:"gainEnd",
                },
                locked:true,
                forced:true,
                filter:function (event,player){
        if (!player.isTurnedOver()) return false;
        if (!event.source||event.source==player) return false;
        return true;
    },
                content:function (){
        player.turnOver();
    },
            },
            qiujin:{
                global:["qiujin_1"],
                mod:{
                    targetInRange:function (card,player,target){
            if(target.isLinked()){
                return true;
            }
        },
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.name(card)=='tiesuo'&&!target.isLinked()) return [1,-0.75];
            },
                    },
                },
                subSkill:{
                    "1":{
                        mod:{
                            cardEnabled:function (card,player){
                    if(player.isLinked()&&_status.currentPhase.hasSkill('qiujin')&&_status.currentPhase!=player) return false;
                },
                            cardUsable:function (card,player){
                    if(player.isLinked()&&_status.currentPhase.hasSkill('qiujin')&&_status.currentPhase!=player) return false;
                },
                            cardRespondable:function (card,player){
                    if(player.isLinked()&&_status.currentPhase.hasSkill('qiujin')&&_status.currentPhase!=player) return false;
                },
                            cardSavable:function (card,player){
                    if(player.isLinked()&&_status.currentPhase.hasSkill('qiujin')&&_status.currentPhase!=player) return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            zhuzhen:{
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){
        return true;
    },
                selectCard:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        if(!target.isLinked()) target.link();
        "step 1"
        if (!game.hasPlayer(function(current){
            return current!=player&&!current.isLinked();
        })) player.draw();
    },
                check:function (card){
        return 11-get.value(card);
    },
                position:"he",
                ai:{
                    order:15,
                    result:{
                        player:function (player,target){
                if (!game.hasPlayer(function(current){
                    return current!=player&&!current.isLinked()&&current!=target;
                })) return 1;
                return 0;
            },
                        target:function (player,target){
                if (!target.isLinked()) return -2;
                return 0;
            },
                    },
                },
            },
            weiyou:{
                trigger:{
                    global:"damageBegin4",
                },
                limited:true,
                mark:true,
                derivation:"heyuan",
                intro:{
                    content:"limited",
                },
                init:function (player){
        player.storage.weiyou=false;
    },
                filter:function (event,player){
        if (event.player==player) return false;
        return event.num>=event.player.hp;
    },
                popup:false,
                direct:true,
                forceDie:true,
                content:function (){
        'step 0'
        trigger.player.chooseBool('是否对'+get.translation(player)+'发动【慰友】，立即死亡？').set('ai',function(){
            var player=get.player();
            if ((player.countCards('h','tao')+player.countCards('h','jiu'))>=trigger.num-player.hp+1) return false;
            else var possibleTao=trigger.player.countCards('h','tao')+trigger.player.countCards('h','jiu');
            for(var i=0;i<game.players.length;i++){
                if(get.attitude(trigger.player,game.players[i])>0&&trigger.player!=game.players[i]){
                    possibleTao+=game.players[i].countCards('h')/10;
                }
            }
            return (get.attitude(trigger.player,_status.event.pl)>0&&possibleTao<(trigger.num-player.hp+1));
        }).set('pl',player);
        'step 1'
        if (result.bool){
            trigger.player.line(player);
            player.logSkill("weiyou");
            player.awakenSkill("weiyou");
            lib.element.player.die.apply(trigger.player,[]);
            player.loseMaxHp();
            player.addSkill('heyuan');
        } else event.finish();
    },
                skillAnimation:true,
            },
            heyuan:{
                trigger:{
                    global:"damageBegin1",
                },
                filter:function (event,player){
        if (event.source) return (player.countCards('he')>=2);
        return false;
    },
                popup:false,
                direct:true,
                content:function (){
        'step 0'
        player.chooseToDiscard('是否发动【和愿】，弃置两张牌，令'+get.translation(trigger.player)+'受到的伤害值-1？',2,'he').set('ai',function(card){
            if (get.attitude(player,_status.event.damaged)>0) return 4-get.value(card);
            return 0;
        }).set('damaged',trigger.player);
        'step 1'
        if (result.bool){
            player.logSkill('heyuan');
            trigger.num--;
        }
    },
            },
            yixin:{
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        return (event.player.hasSex('female')&&event.player.isAlive());
    },
                check:function (event,player){
        return (get.attitude(player,event.player)>0);
    },
                content:function (){
        game.asyncDraw([trigger.player,player]);
    },
            },
            ESzhongjie:{
                group:["ESzhongjie_1","ESzhongjie_2","ESzhongjie_3","ESzhongjie_4"],
                zhuSkill:true,
                subSkill:{
                    "1":{
                        trigger:{
                            player:["phaseJudgeBegin"],
                        },
                        filter:function (event,player){
                if (!player.hasZhuSkill('ESzhongjie')) return false;
                if(player.countMark('ESzhongjie_count')>=game.countPlayer(function(current){
                    if(current.group=='fine') return 1;
                })) return false;
                return player.countCards('j')>0;
            },
                        direct:true,
                        popup:false,
                        content:function (){
                "step 0"
                player.chooseTarget('是否发动【终结】，令一名其他角色摸'+player.countCards('j')+'张牌？',function(card,player,target){
                    return target!=player;
                }).set('ai',function(target){
                    return get.attitude(_status.event.player,target);
                });
                "step 1"
                if(result.bool){
                    player.logSkill('ESzhongjie',result.targets);
                    result.targets[0].draw(player.countCards('j'));
                    player.addTempSkill('ESzhongjie_count','phaseUseAfter');
                    player.addMark('ESzhongjie_count',1,false);
                }
            },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            player:"gainEnd",
                        },
                        filter:function (event,player){
                if (_status.currentPhase!=player) return false;
                if (!player.hasZhuSkill('ESzhongjie')) return false;
                if(player.countMark('ESzhongjie_count')>=game.countPlayer(function(current){
                    if(current.group=='fine') return 1;
                })) return false;
                if (!event.source||event.source==player) return false;
                return true;
            },
                        check:function (event,player){
                return get.attitude(player,event.source)>0;
            },
                        content:function (){
                trigger.source.draw();
                player.addTempSkill('ESzhongjie_count','phaseAfter');
                player.addMark('ESzhongjie_count',1,false);
            },
                        sub:true,
                    },
                    "3":{
                        trigger:{
                            player:"phaseDiscardBegin",
                        },
                        filter:function (event,player){
                if (!player.hasZhuSkill('ESzhongjie')) return false;
                if(player.countMark('ESzhongjie_count')>=game.countPlayer(function(current){
                    if(current.group=='fine') return 1;
                })) return false;
                return player.countCards('h')<player.hp+1;
            },
                        check:function (event,player){
                return true;
            },
                        content:function (){
                player.drawTo(player.hp+1);
                player.addTempSkill('ESzhongjie_count','phaseAfter');
                player.addMark('ESzhongjie_count',1,false);
            },
                        sub:true,
                    },
                    "4":{
                        trigger:{
                            player:"loseHpBefore",
                        },
                        filter:function (event,player){
                if (_status.currentPhase!=player) return false;
                if (!player.hasZhuSkill('ESzhongjie')) return false;
                if(player.countMark('ESzhongjie_count')>=game.countPlayer(function(current){
                    if(current.group=='fine') return 1;
                })) return false;
                return true;
            },
                        check:function (event,player){
                return true;
            },
                        content:function (){
                trigger.cancel();
                player.addTempSkill('ESzhongjie_count','phaseAfter');
                player.addMark('ESzhongjie_count',1,false);
            },
                        sub:true,
                    },
                    count:{
                        mark:true,
                        intro:{
                            content:"本回合已发动#次",
                        },
                        onremove:true,
                        sub:true,
                    },
                },
            },
            rexiong:{
                trigger:{
                    global:"damageBegin3",
                },
                filter:function (event,player){
        return event.num>0&&player!=event.player;
    },
                check:function (event,player){
        if (get.attitude(player,event.player)<=0) return false;
        if (event.nature=='fire')return true;
        if (event.num>1){
            if(event.player.hasSkillTag('maixie_hp')) return false;
            return true;
        } else if(event.player.hasSkillTag('maixie')) return false;
        if (event.player.hp>player.hp&&player.hp==1) return false;
        return true;
    },
                prompt:function (event,player){
        return "是否发动【热雄】，防止"+get.translation(event.player)+"受到的伤害？";
    },
                content:function (){
        "step 0"
        event.nature=trigger.nature;
        trigger.cancel();
        "step 1"
        if (event.nature!='fire') player.damage(trigger.source||'nosource','nocard');
    },
                ai:{
                    "maixie_defend":true,
                    threaten:2,
                },
            },
            fengfeng:{
                zhuSkill:true,
                trigger:{
                    global:"phaseDiscardBegin",
                },
                filter:function (event,player){
        if (!player.hasZhuSkill('fengfeng')) return false;
        var skills=[];
        var list=[];
        skills=event.player.getSkills();
        for(var i=0;i<skills.length;i++){
            var info=get.translation(skills[i]);
            if(/纵横/.test(info)==true){
                return true;
            }
        }
        return false;
    },
                check:function (event,player){
        return (get.attitude(player,event.player)>0) ;
    },
                content:function (){
        'step 0'
        event.cbChara=game.countPlayer(function(current){
            if(current.group=='crazyb') return 1;
        });
        player.chooseControl(get.translation(trigger.player)+"加"+event.cbChara+"手牌上限",get.translation(trigger.player)+"摸"+event.cbChara+"张牌").set("ai",function(event,player){
            if (trigger.player.countCards('h')>trigger.player.hp) return get.translation(trigger.player)+"加"+event.cbChara+"手牌上限";
            else return get.translation(trigger.player)+"摸"+event.cbChara+"张牌";
        });
        'step 1'
        if (result){
            game.log(result.control);
            if (result.control==get.translation(trigger.player)+"加"+event.cbChara+"手牌上限"){
                trigger.player.addTempSkill('fengfeng_add','phaseAfter');
            } else if (result.control==get.translation(trigger.player)+"摸"+event.cbChara+"张牌"){
                trigger.player.draw(event.cbChara);
            };
        }

    },
                subSkill:{
                    add:{
                        mod:{
                            maxHandcard:function (player,num){
                    var cbChara=game.countPlayer(function(current){
                        if(current.group=='crazyb') return 1;
                    });
                    return num+cbChara;
                },
                        },
                        sub:true,
                    },
                },
            },
            shenhai:{
                trigger:{
                    player:"phaseDiscardBegin",
                },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        if(player.countCards('h')){
            player.chooseCard('将任意张手牌置于武将牌上作为“海”',[1,Infinity],'h').set('ai',function(card){
                if (player.getExpansions('shenhai').length==0&&ui.selected.cards.length==0) return 10-get.value(card);
                if (ui.selected.cards.length<Math.ceil((player.countCards('h')-player.getExpansions('shenhai').length-player.hp)/2)) return 6-get.value(card);
                return 0;
            });}
        "step 1"
        if(result.cards&&result.cards.length){
            player.addToExpansion(result.cards,player,'giveAuto').gaintag.add('shenhai');
        } else event.finish();
        "step 2"
        if(result.bool){
            player.logSkill('shenhai');
        }
    },
                marktext:"海",
                intro:{
                    content:"expansion",
                    markcount:"expansion",
                },
                onremove:function (player,skill){
        var cards=player.getExpansions(skill);
        if(cards.length) player.loseToDiscardpile(cards);
    },
                mod:{
                    maxHandcard:function (player,num){
            return num+player.getExpansions('shenhai').length;
        },
                },
                ai:{
                    threaten:1,
                },
            },
            haiming:{
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                locked:true,
                content:function (){
        'step 0'
        if (player.getExpansions('shenhai').length>0){
            player.chooseCardButton("将一张“海”置入弃牌堆并摸两张牌",player.getExpansions('shenhai'),true).set('ai',function(card){
                return -get.value(card);
            });
        } else {
            player.loseHp();
            event.finish();
        }
        'step 1'
        if(result.bool){
            player.loseToDiscardpile(result.links);
            player.draw(2);
        }
    },
            },
            haishi:{
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        return (event.source&&event.source.isAlive()&&event.player.isAlive()&&event.source!=player&&player.canUse('shuiyanqijunx',event.source)&&player.getExpansions('shenhai').length>0&&event.source.countCards('e')>0);
    },
                check:function (event,player){
        return (get.attitude(player,event.player)>0&&get.attitude(player,event.source)<0);
    },
                content:function (){
        var next=player.chooseToUse();
        next.set('ai',function(card){
            return player.getUseValue(card)>0;
        });
        next.set('openskilldialog',false);
        //next.set('openskilldialog','是否发动【海使】？ 将一张“海”当作'+get.translation('shuiyanqijunx')+'对'+get.translation(trigger.source)+'使用？');
        //next.set('norestore',true);
        next.set('_backupevent','haishi_x');
        next.set('filterTarget',function(card,player,target){
            if(target!=trigger.source) return false;
            return lib.filter.filterTarget.apply(this,arguments)&&player.canUse('shuiyanqijunx',target);
        });
        next.set('selectTarget',-1);
        //next.set('custom',{
        //    add:{},
        //    replace:{window:function(){},
        //    }
        //});
        next.backup('haishi_x');
    },
                subSkill:{
                    "2":{
                        trigger:{
                            player:["useCardAfter"],
                        },
                        forced:true,
                        charlotte:true,
                        popup:false,
                        forceDie:true,
                        filter:function (event,player){
                return (event.skill=='haishi_x_backup'&&player.storage.haishiChara);
            },
                        content:function (){
                var getter=player.storage.haishiChara[player.storage.haishiChara.length-1];
                player.storage.haishiChara.remove(getter);
                if (get.position(trigger.cards[0],true)=='o') getter.gain(trigger.cards,'gain2');
            },
                        sub:true,
                    },
                    x:{
                        chooseButton:{
                            dialog:function (event,player){
                    return ui.create.dialog('海使',player.getExpansions('shenhai'),'hidden');
                },
                            filter:function (button,player){
                    var card=button.link;
                    if(!game.checkMod(card,player,'unchanged','cardEnabled2',player)) return false;
                    var evt=_status.event.getParent();
                    return evt.filterCard(get.autoViewAs({name:'shuiyanqijunx'},[card]),player,evt);
                },
                            backup:function (links,player){
                    var skill=_status.event.buttoned;
                    return {
                        selectCard:-1,
                        position:'x',
                        filterCard:(card)=>card==lib.skill.haishi_x_backup.card,
                        viewAs:{name:'shuiyanqijunx'},
                        card:links[0],
                        onuse:function(event,player){
                            if (!player.storage.haishiChara) player.storage.haishiChara=[];
                            var evt=_status.event.getParent('damage');
                            player.storage.haishiChara.push(evt.player);
                        },
                    }
                },
                            prompt:function (links,player){
                    return '选择 水淹七军（'+get.translation(links[0])+'）的目标';
                },
                        },
                        sub:true,
                    },
                },
            },
            shuangzha:{
                zhuSkill:true,
                trigger:{
                    global:"recoverAfter",
                },
                filter:function (event,player){
        if (event.player.group!='twowink') return false;
        if (event.player==player) return false;
        if (!player.hasZhuSkill('shuangzha')) return false;
        if (event.num==0) return false;
        return true;
    },
                frequent:true,
                content:function (){
        player.recover(event.num);
    },
                onremove:function (player){
        player.recover(player.maxHp-player.hp);
    },
            },
            ceshi:{
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function (){
        player.mayChangeVice();
    },
            },
            yinshen:{
                trigger:{
                    player:"showCharacterAfter",
                },
                hiddenSkill:true,
                init:function (player){
        player.changeGroup('ryuseitai');
    },
                direct:true,
                content:function (){
        if (player==_status.currentPhase) {
            event.togain=[];
            for(var i=0;i<ui.discardPile.childNodes.length;i++){
                var current=ui.discardPile.childNodes[i];
                if(get.type(current)=='equip'&&get.subtype(current)=='equip1') event.togain.push(current);
            }
            if (event.togain.length) {
                player.gain(event.togain,'gain2');
            } else player.draw(14);
        }
    },
            },
            EShidden:{
                charlotte:true,
                forced:true,
                trigger:{
                    global:"gameStart",
                },
                content:function (){
        player.changeGroup('wei');
    },
            },
            shoujian:{
                enable:"phaseUse",
                filterCard:function (card,player){
        return (get.type(card)=='equip'&&get.subtype(card)=='equip1');
    },
                position:"hes",
                viewAs:{
                    name:"sha",
                    shoujian:true,
                },
                viewAsFilter:function (player){
        if(!player.countCards('hes',{subtype:'equip1'})) return false;
    },
                prompt:"将一张武器牌当杀使用",
                check:function (card){
        var val=get.value(card);
        return 10-val;
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        var dist=get.distance(player,target);
        if(game.hasPlayer(function(current){
            return current!=player&&get.distance(player,current)>dist;
        })){
            return false;
        }
        return lib.filter.filterTarget.apply(this,arguments);
    },
                precontent:function (){
        event.getParent().addCount=false;
    },
                mod:{
                    targetInRange:function (card){
            if(card.shoujian) return true;
        },
                },
                ai:{
                    yingbian:function (card,player,targets,viewer){
            if(get.attitude(viewer,player)<=0) return 0;
            var base=0,hit=false;
            if(get.cardtag(card,'yingbian_hit')){
                hit=true;
                if(targets.filter(function(target){
                    return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_all')){
                if(game.hasPlayer(function(current){
                    return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_damage')){
                if(targets.filter(function(target){
                    return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                    },true))&&!target.hasSkillTag('filterDamage',null,{
                        player:player,
                        card:card,
                        jiu:true,
                    })
                })) base+=5;
            }
            return base;
        },
                    canLink:function (player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    order:function (item,player){
            if(player.hasSkillTag('presha',true,null,true)) return 10;
            if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                    return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                    return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) return 3.1;
                return 3;
            }
            return 3.05;
        },
                    result:{
                        target:function (player,target,card,isLink){
                var eff=function(){
                    if(!isLink&&player.hasSkill('jiu')){
                        if(!target.hasSkillTag('filterDamage',null,{
                            player:player,
                            card:card,
                            jiu:true,
                        })){
                            if(get.attitude(player,target)>0){
                                return -7;
                            }
                            else{
                                return -4;
                            }
                        }
                        return -0.5;
                    }
                    return -1.5;
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            jixing:{
                zhuSkill:true,
                trigger:{
                    global:"damageBegin4",
                },
                filter:function (event,player){
        if (event.player.group!='trickstar') return false;
        if (!player.hasZhuSkill('jixing')) return false;
        if (event.num==0) return false;
        return true;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                content:function (){
        trigger.player.draw();
        player.storage.jixing_change+=1;
        player.addSkill('jixing_change');
    },
                init:function (player){
        player.storage.jixing_change=0;
    },
                subSkill:{
                    change:{
                        mod:{
                            maxHandcard:function (player,num){
                    if(player.storage.jixing_change) return num+player.storage.jixing_change;
                },
                        },
                        charlotte:true,
                        mark:true,
                        intro:{
                            content:(num)=>('手牌上限'+(num<0?'':'+')+num),
                        },
                        sub:true,
                    },
                },
            },
            weigu:{
                limited:true,
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        if (event.player.awakenedSkills&&event.player.awakenedSkills.length){
            for(var i=0;i<event.player.awakenedSkills.length;i++){
                if (get.info(event.player.awakenedSkills[i]).juexingji) {
                    for(var j=0;i<ui.discardPile.childNodes.length;i++){
                        var current=ui.discardPile.childNodes[i];
                        if(get.name(current)=='sha'&&get.color(current)=='red') return true;
                    }
                }                    
            }
        }
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                prompt:function (event,player){
        var num=0;
        for(var i=0;i<ui.discardPile.childNodes.length;i++){
            var current=ui.discardPile.childNodes[i];
            if(get.name(current)=='sha'&&get.color(current)=='red') num++;
        }
        return "是否发动【慰孤】，令"+get.translation(event.player)+"获得弃牌堆里的"+num+"张红色【杀】且"+get.translation(event.player)+"此阶段使用【杀】无次数限制？";
    },
                content:function (){
        player.awakenSkill('weigu');
        event.togain=[];
        for(var i=0;i<ui.discardPile.childNodes.length;i++){
            var current=ui.discardPile.childNodes[i];
            if(get.name(current)=='sha'&&get.color(current)=='red') event.togain.push(current);
        }
        if (event.togain.length) {
            trigger.player.gain(event.togain,'gain2');
        }
        trigger.player.addTempSkill('weigu_2','phaseUseEnd');
    },
                subSkill:{
                    "2":{
                        mod:{
                            cardUsable:function (card,player,num){
                    if(card.name=='sha') return Infinity;
                },
                        },
                        sub:true,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                init:function (player,skill){
                    player.storage[skill]=false;
                },
            },
        },
        translate:{
            kulao:"苦劳",
            "kulao_info":"锁定技，出牌阶段，当你使用的普通锦囊牌结算结束后，你摸X张牌，然后若你触发此技能三次，你失去1点体力，结束此阶段（X为你本阶段内发动过此技能的次数+1）。",
            shuojiao:"说教",
            "shuojiao_info":"出牌阶段开始时，你可以选择一名其他角色，若如此做，你此回合手牌上限+X且对其使用牌没有次数限制直至一名角色的回合开始时（X为你此阶段对其使用牌数）。",
            ESdaoshu:"刀术",
            "ESdaoshu_info":"当你使用【杀】指定一名角色为目标后，你可以弃置其两张手牌，然后若你于此回合内未以此法获得牌，你获得此【杀】对应的所有实体牌。",
            kongshou:"空手",
            "kongshou_info":"每名角色的回合各限一次，当你造成伤害时：1.若你的装备区里没有武器牌，你可以令此伤害+1；2.你可以弃置装备区里的武器牌。",
            gechen:"隔尘",
            "gechen_info":"锁定技，你的攻击范围外的其他角色不能使用牌指定你为目标。",
            qinling:"侵令",
            "qinling_info":"出牌阶段限一次，你可以展示一张手牌并选择一名角色，然后其选择弃牌堆里的一张与此牌花色相同且具有伤害标签的牌并获得之，然后若其不为你，你将此牌交给其并摸一张牌。若如此做，其使用与你以此法展示的牌颜色相同的牌对目标角色造成伤害时，其可以令此伤害+1，直至你的下回合开始。",
            ESzili:"自利",
            "ESzili_info":"锁定技，你使用的【五谷丰登】/【桃园结义】不能指定其他角色为目标。",
            liangri:"良日",
            "liangri_info":"摸牌阶段，你可以判定，若为红色，你选择一项：1.回复一点体力；2.多摸两张牌。",
            ganjing:"甘阱",
            "ganjing_info":"当你的判定牌生效后，你可以选择一名其他角色，其获得此判定牌。若如此做，此回合的结束阶段开始时，你令一名于此回合内以此法获得最多牌的角色失去1点体力。",
            yingcong:"影从",
            "yingcong_info":"其他角色的出牌阶段开始时，你可以选择一张牌并摸一张牌，若此牌为：装备牌，其使用此牌；非装备牌，你将此牌交给其。然后其判定，若为黑色，其摸一张牌。",
            yuexian:"越限",
            "yuexian_info":"当你扣减/回复体力后，你可以摸一张牌，然后令你本局游戏的的手牌上限+1。",
            miexiang:"灭像",
            "miexiang_info":"出牌阶段限一次，你可以弃置一张♠手牌并选择一名体力值不小於你的其他角色，你对其造成2点伤害。",
            xiangshi:"乡识",
            "xiangshi_info":"锁定技，①当锦囊牌对你的使用结算开始时，你令此牌对你无效。②你不能成为延时类锦囊牌的目标。",
            EShongyan:"红燕",
            "EShongyan_info":"锁定技，当你使用红色牌时，你令所有其他角色不能使用或打出牌响应此牌。",
            tianjia:"天驾",
            "tianjia_info":"出牌阶段限一次，若你的装备区里有坐骑牌/♢牌且你已受伤，你可以回复1点体力，所有你与其距离为1的其他角色各失去1点体力。",
            tane:"探恶",
            "tane_info":"①当其他角色因黑色牌造成伤害后，若其拥有的“邪”标记数小于2，其获得一枚“邪”标记。②一名角色的出牌阶段开始时，你可以移去任意名除当前回合角色外的角色的“邪”标记，然后令这些角色此回合内所有武将技能无效且不能使用或打出牌且所有角色与这些角色的距离为1。",
            biancang:"变藏",
            "biancang_info":"转换技，阴：当你受到伤害后，你可以令其他角色与你的距离+2，直至你使用【杀】造成伤害时。阳：当你需要使用【杀】时，你可以将一张♧牌当【杀】对任意名其他角色使用。当你因以此法使用的【杀】对一名角色造成伤害后，若其体力值不大于你，你回复1点体力。",
            ESmidao:"密道",
            "ESmidao_info":"锁定技，你与其他角色的距离为1。",
            aixiang:"爱像",
            "aixiang_info":"锁定技，摸牌阶段开始时，你放弃摸牌，你展示牌堆顶的X张牌，若当中：有♥牌，你获得以此法展示的牌；没有♥牌，你将以此法展示的牌置入弃牌堆，然后失去1点体力（X为存活角色数且至多为7）。",
            biansheng:"边生",
            "biansheng_info":"当你处于濒死状态时，你可以将一张♥牌当【桃】使用。",
            ESxixue:"吸血",
            "ESxixue_info":"出牌阶段限一次，你可以弃置两张黑色牌并选择一名你与其距离为1以内的角色，你对其造成1点伤害，然后你回复1点体力。",
            yewang:"夜王",
            "yewang_info":"锁定技，转换技，出牌阶段开始时， 阴：你摸三张牌。 阳：你弃置一张牌。",
            qingfu:"轻浮",
            "qingfu_info":"当你需要使用或打出【闪】时，你可以将一张黑色手牌当【闪】使用或打出，然后摸一张牌。",
            qiuhui:"求会",
            "qiuhui_info":"出牌阶段限一次，你可以将三张类别不同的牌交给一名其他角色，然后其可以选择令你或其回复1点体力。",
            quanrouzongheng:"劝肉·纵横",
            "quanrouzongheng_info":"限定技，当你需要使用【桃】时，你可以将一张黑色牌当【桃】使用。",
            quanrou:"劝肉",
            "quanrou_info":"每轮限一次，当你需要使用【桃】时，你可以将一张黑色牌当【桃】使用。若你以此法使用的【桃】：1.对应的实体牌为【南蛮入侵】或坐骑牌，此牌回复值+1；2.目标不为你，你可以令目标角色获得【劝肉·纵横】。",
            kuangquan:"狂犬",
            "kuangquan_info":"一名角色的回合限一次，当你需要使用【决斗】时，你可以将一张黑色手牌当【决斗】使用。当你以此法使用【决斗】指定一名目标后，若你的体力值不小于目标角色，你可以弃置其一张牌。",
            fubing:"覆病",
            "fubing_info":"锁定技，结束阶段开始时，你判定，若为黑桃，你失去1点体力。",
            xiaotu:"咲土",
            "xiaotu_info":"准备阶段开始时，你可以摸X张牌，然后将各一张牌交给所有其他角色（X为存活角色数）。",
            jizhan:"祭战",
            "jizhan_info":"①出牌阶段限一次，你可以令一名角色视为对另一名角色使用一张不能被【无懈可击】响应的【决斗】。②你的回合内，当一名角色因【决斗】造成伤害后，其摸一张牌。",
            qibian:"奇变",
            "qibian_info":"转换技，阴：当一名角色A于其摸牌阶段外获得至少两张牌后，你可以获得另一名其他角色B区域里的一张牌，然后若A不为你，你可以展示并将一张牌交给A，然后若你以此法交给A的牌为装备牌/延时类锦囊牌，A可以使用之。阳：当判定结果确定前，你可打出一张牌替换之，然后若你以此法打出的牌与获得的牌颜色不同，你摸一张牌。",
            aitao:"爱讨",
            "aitao_info":"摸牌阶段开始时，你可以令所有未受伤且体力值大于你的角色交给你一张牌。",
            suiying:"随英",
            "suiying_info":"一名角色的弃牌阶段开始时，若其手牌数大于其体力值，你可以令其手牌上限+1。",
            saozhang:"扫障",
            "saozhang_info":"当一名角色使用红色锦囊牌指定唯一目标后/判定阶段开始时，你可以弃置其手牌区/判定区里的一张牌。",
            dubozongheng:"赌博·纵横",
            "dubozongheng_info":"出牌阶段限一次，你可以与一名其他角色拼点，赢的角色摸一张牌。",
            dubo:"赌博",
            "dubo_info":"出牌阶段，你可以与一名你于此阶段内没有以此法选择过的其他角色拼点，赢的角色摸一张牌。然后你可以令该角色获得【赌博·纵横】直至其下回合结束时。",
            wujie:"无節",
            "wujie_info":"锁定技，当牌移出游戏后，若一名角色的“食”的数量大于其体力上限，其将体力上限调整为1点。",
            meizhi:"魅智",
            "meizhi_info":"当你使用黑色普通锦囊牌指定第一个目标后，你可以令一名你于此回合没有以此法选择过的目标角色获得处理区里的此牌并令其不能使用此牌指定你为目标，然后你摸两张牌。然后若其不为你，你可以令其获得【魅智·纵横】直至其下回合结束时。",
            meizhizongheng:"魅智·纵横",
            "meizhizongheng_info":"一名角色的回合限一次，当你使用黑色普通锦囊牌指定第一个目标后，你可以摸两张牌。",
            ESzhishi:"制食",
            "ESzhishi_info":"出牌阶段，你可以将一张手牌置于一名已受伤角色的武将牌上，称为“食”。然后其回复1点体力并摸一张牌。然后若其不为你，你可以令其获得 【制食·纵横】直至其下回合结束时。",
            remeizhi:"魅智",
            "remeizhi_info":"当你使用黑色锦囊牌指定一名其他角色为目标后，你可以发动此技能。你可以选择一项：1.其不能使用或打出牌响应此牌；2.其交给你一张手牌且其不能使用牌指定你为目标直至其下回合出牌阶段结束时。然后你可以令其获得【魅智·纵横】直至其下回合结束时。",
            remeizhizongheng:"魅智·纵横",
            "remeizhizongheng_info":"当你使用黑色锦囊牌指定一名其他角色为目标后，你可以令其交给你一张手牌。 ",
            ESzhishizongheng:"制食·纵横",
            "ESzhishizongheng_info":"出牌阶段限一次，你可以将一张牌置于自己的武将牌上，称为“食”，然后摸一张牌。",
            xianzhi:"限知",
            "xianzhi_info":"锁定技，当你的攻击范围外的角色使用的牌对你的使用结算开始时，若你为此牌的唯一目标，你令此牌对你无效。",
            fangxiao:"仿笑",
            "fangxiao_info":"每轮限X次，当一名其他角色于其出牌阶段使用的第一张基本牌或普通锦囊牌结算结束后，你可以视为使用此牌，然后你可以令其获得【仿笑·纵横】直至其下回合开始时（X为你的体力值）。",
            fangxiaozongheng:"仿笑·纵横",
            "fangxiaozongheng_info":"限定技，当一名其他角色于其出牌阶段使用的第一张基本牌或普通锦囊牌结算结束后，你可以视为使用此牌。",
            exi:"恶戏",
            "exi_info":"一名角色的回合限三次，当你使用牌指定一名其他角色为目标后，你可以弃置其一张牌。",
            xitian:"喜甜",
            "xitian_info":"当你因【桃】/【桃园结义】的效果回复体力时，你可以令回复值+1并摸两张牌。",
            huti:"互替",
            "huti_info":"出牌阶段，若你为“葵日向”/“葵裕太”且场上：没有存活的“葵裕太”/“葵日向”，你可以将武将牌替换为“葵裕太”/“葵日向”；有存活的“葵裕太”/“葵日向”，你可以与其交换位置。然后你失去〖互替〗。",
            duyuan:"独愿",
            "duyuan_info":"一名角色的回合限三次，当你使用牌指定自己为目标后，你可以摸一张牌。",
            xila:"喜辣",
            "xila_info":"当你对其他角色造成/受到其他角色造成的火焰伤害时，你可以令伤害值+/-1并摸两张牌。",
            lengwang:"冷王",
            "lengwang_info":"当你受到伤害后，你可以将任意张手牌交给一名其他角色，然后摸等量的牌。",
            ESyizhi:"依指",
            "ESyizhi_info":"出牌阶段开始时，若你有手牌，你可以选择一名其他角色。其觀看你的手牌，然後其声明一种花色以及一种基本牌/普通锦囊牌的牌名。你于此阶段内所有其以此法声明的花色的手牌视为其以此法声明的牌名。",
            shanxing:"闪星",
            "shanxing_info":"每轮限一次，当你需要使用/打出【闪】时，你可以视为使用/打出【闪】。",
            jiejin:"借金",
            "jiejin_info":"①当你受到1点伤害后，你可以令一名其他角色将一张牌交给你并获得一枚“借”。②当你于回合外使用或打出牌时，你令一名有“借”的角色摸一张牌并弃一枚“借”。",
            tanqing:"探情",
            "tanqing_info":"①出牌阶段开始时，你可以视为使用一张【知己知彼】。②你使用【知己知彼】选择目标的上限数+1。",
            biquan:"避泉",
            "biquan_info":"结束阶段开始时，你可以令一名其他角色与你的距离+X直至你的下回合开始时，然后若你不在其攻击范围内，你摸两张牌（X为此时你已损失的体力值且最小为1）。",
            hongyue:"红月",
            "hongyue_info":"主公技，当其他角色因红色牌造成伤害时，若你本回合内未以此法令伤害值翻倍，你令其可以令你选择令伤害值翻倍。然后若你选择是且其势力不为红月，你弃置两张牌。",
            leyuan:"乐园",
            "leyuan_info":"主公技，当其他角色的判定结果生效后，若结果为♠/♥/♣/♦，若其：不为Eden势力，其可以令你选择是否将一张♠/♥/♣/♦牌当作【南蛮入侵】/【火攻】/【水淹七军】/【决斗】使用；为Eden势力，其可以令你选择是否视为使用一张♠/♥/♣/♦的【南蛮入侵】/【火攻】/【水淹七军】/【决斗】。",
            zhuwu:"助务",
            "zhuwu_info":"每名角色的回合限一次，你的回合外，当一名其他角色于其回合外需要使用或打出一张不为【桃】的基本牌时，你可以将与此基本牌牌名相同的一张牌交给其，然后若你已受伤，你本局游戏的手牌上限+1。",
            cunyi:"存义",
            "cunyi_info":"当其他角色获得你的手牌后，你可以摸一张牌。然后若你已受伤，你摸一张牌。",
            shengjian:"生碱",
            "shengjian_info":"主公技，其他角色的结束阶段开始时，若本回合内置入弃牌堆的牌中包含至少四种花色且有角色的体力值发生过变化，你可以弃置一张牌并选择以下一张你未以此法选择过且场上、牌堆或弃牌堆中皆没有的牌，你将此牌置入其装备区：【飞龙夺凤】、【护心镜】、【六龙骖驾】、【定澜夜明珠】。然后若其为ALKALOID势力角色，你摸一张牌。",
            waiqi:"外棋",
            "waiqi_info":"出牌阶段限一次，你可以与一名角色拼点，赢的角色获得输的角色的拼点牌。若你赢，你可以重复此流程。",
            jiangjun:"将军",
            "jiangjun_info":"锁定技，当你与一名角色的拼点结果确定后，若输的角色没有手牌，赢的角色弃置输的角色的装备区里的一张牌。",
            huyou:"护友",
            "huyou_info":"限定技，当一名已受伤角色于其回合外使用牌时，你可以令其回复1点体力，然后若你的手牌数大于1，你选择一张手牌并弃置其余的手牌。",
            busi:"不死",
            "busi_info":"主公技，其他角色的回合限一次，其他角色使用的黑色非装备牌结算结束后，若此牌对应的目标角色数不大于1，其可以令你获得此牌对应的所有实体牌。然后若其不为UNDEAD势力角色，其弃置一张牌。",
            yuxiang:"宇想",
            "yuxiang_info":"出牌阶段限两次，你可以抽取X个普通锦囊牌的牌名，然后你可以选择其中一个额定目标数下限不大于X的牌名，你视为使用此牌（X为玩家数与角色数之差且最少为1）。",
            shenmian:"深眠",
            "shenmian_info":"结束阶段，你可以摸X张牌，并将武将牌翻面（X为角色数）。",
            qianghuan:"强唤",
            "qianghuan_info":"锁定技，当你获得其他角色的牌后，若你的武将牌背面朝上，你将武将牌翻面。",
            qiujin:"囚禁",
            "qiujin_info":"锁定技，所有已横置的其他角色视为在你的攻击范围内且不能于你的回合内使用或打出牌。",
            zhuzhen:"逐真",
            "zhuzhen_info":"出牌阶段限一次，你可以弃置一张牌并选择一名其他角色，其横置，然后若所有其他角色已横置，你摸一张牌。",
            weiyou:"慰友",
            "weiyou_info":"限定技，当其他角色受到伤害时，若伤害值不小于其体力值，其可以死亡，然后你获得【和愿】并减1点体力上限。",
            heyuan:"和愿",
            "heyuan_info":"当一名角色造成伤害时，你可以弃置两张牌，令伤害值-1。",
            yixin:"乙心",
            "yixin_info":"当女性角色受到伤害后，若其存活，你可与其各摸一张牌。",
            ESzhongjie:"终结",
            "ESzhongjie_info":"主公技，每回合限X次，①判定阶段开始时，你可以令一名其他角色摸Y张牌（Y为判定区里的牌数）。②当你获得其他角色的牌后，你可以令其摸一张牌。③弃牌阶段开始时，你可以将手牌数摸至Z张（Z为你的体力值+1）。④当你失去体力时，你可以防止之。（X为fine势力角色数）",
            rexiong:"热雄",
            "rexiong_info":"当一名其他角色受到伤害时，你可以防止此伤害，然后若此伤害不为火焰伤害，你受到伤害来源对你造成的1点伤害。",
            fengfeng:"疯蜂",
            "fengfeng_info":"主公技，一名角色的弃牌阶段开始时，若其拥有技能名中包含“纵横”字样的技能，你可以选择一项：1. 令其摸X张牌；2. 令其本回合手牌上限+X（X为Crazy:B势力角色数）。",
            shenhai:"深海",
            "shenhai_info":"①弃牌阶段开始时，你可以将任意张牌置于武将牌上，称为“海”。②你的手牌上限+X（X为“海”的数量）。",
            haiming:"海命",
            "haiming_info":"锁定技，结束阶段开始时，若你的武将牌上：有“海”，你将一张“海”置入弃牌堆并摸两张牌；没有“海”，你失去1点体力。",
            haishi:"海使",
            "haishi_info":"当一名角色受到另一名其他角色造成的伤害后，若其与伤害来源皆存活，你可以将一张“海”当作【水淹七军】对伤害来源使用。",
            shuangzha:"双眨",
            "shuangzha_info":"主公技，①当其他2wink势力角色回复体力后，你可以回复等量的体力。②当你失去此技能时，你回复体力至体力上限。",
            ceshi:"測試",
            "ceshi_info":"測試",
            yinshen:"隐身",
            "yinshen_info":"隐匿技，①当你于回合内登场时，若弃牌堆里：有武器牌，你获得之；没有武器牌，你摸十四张牌。②若你未登场，你的势力视为晋。",
            EShidden:"EShidden",
            "EShidden_info":"",
            shoujian:"手剑",
            "shoujian_info":"出牌阶段，你可以将一张武器牌当作不计入使用次数的【杀】对一名你与其距离最大的角色使用。",
            jixing:"技星",
            "jixing_info":"主公技，当Trickstar势力角色受到伤害时，你可以令其摸一张牌并令你本局游戏的手牌上限+1。",
            weigu:"慰孤",
            "weigu_info":"限定技，一名角色的出牌阶段开始时，若其拥有觉醒技且其已发动该觉醒技且弃牌堆有红色【杀】，你可以令其获得弃牌堆里的所有红色【杀】且其此阶段使用【杀】无次数限制。",
        },
    },
    intro:"《偶像梦幻祭》是一款乐元素公司（Happy Elements）研发的女性向偶像养成音乐手游",
    author:"小叶",
    diskURL:"https://github.com/jy-umehara/noname-extensions/raw/main/%E5%81%B6%E5%83%8F%E6%A2%A6%E5%B9%BB%E7%A5%AD.zip",
    forumURL:"",
    version:"0.72",
},files:{"character":["kanzakisouma.jpg","ayasemayoi.jpg","amagihiiro.jpg","sakumaritsu.jpg","shinkaikanata.jpg","fushimiyuzuru.jpg","himeru.jpg","rannagisa.jpg","sakumarei.jpg","otogariadonis.jpg","isaramao.jpg","aoihinata.jpg","sazanamijun.jpg","ogamikoga.jpg","himemiyatori.jpg","aoiyuuta.jpg","yuukimakoto.jpg","oukawakohaku.jpg","hasumikeito.jpg","kazehayatatsumi.jpg","akehoshisubaru.jpg","hidakahokuto.jpg","suoutsukasa.jpg","senaizumi.jpg","tomoehiyori.jpg","sengokushinobu.jpg","morisawachiaki.jpg","shiinaniki.jpg","shiratoriaira.jpg","amagirinne.jpg","kiryukuro.jpg","saegusaibara.jpg","tenshouineichi.jpg","tsukinagaleo.jpg","hibikiwataru.jpg","hakazekaoru.jpg","narukamiarashi.jpg"],"card":[],"skill":[]}}})