(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
{
title: '七里香',
artist: '周杰伦',
album: '专辑：七里香',
cover:'https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg?max_age=2592000',
mp3: 'http://1.198.4.143/amobile.music.tc.qq.com/C400004Z8Ihr0JIu5s.m4a?guid=9577664854&vkey=C41B8A7198A121CC0BAAD37CDDA32E7021ADF19EE2DD8426C05E54B0B23AEEDED07DB98206DE1CB6E6302BD274AB29FB777C3AF0997F6228&uin=0&fromtag=66',
ogg: ''
},
{
title: '东风破',
artist: '周杰伦',
album: '专辑：叶惠美',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg?max_age=2592000',
mp3: 'http://106.42.24.16/amobile.music.tc.qq.com/C400003uEbEr0jcW7c.m4a?guid=9577664854&vkey=BFAAB8A963107E609516D96CF4F4EBAD00CBAC765BBD8B5D1643A88F934CE7D6A080588E6A08F9DD7D278674FBB2B1A81EB0BE2F19D5D5E7&uin=0&fromtag=66',
ogg: ''
},
{
title: '彩虹',
artist: '周杰伦',
album: '专辑：我很忙',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000',
mp3: 'http://1.198.4.150/amobile.music.tc.qq.com/C400004bRWFg3fej9y.m4a?guid=9577664854&vkey=9D9316762411321389769F365A95242B3F3430A2CBFFCB882FFEC2A80B3CFEE2897F44450FD88AB162E05531E55CAA2482D0507F13D6BB4A&uin=0&fromtag=66',
ogg: ''
},
{
title: '夜曲',
artist: '周杰伦',
album: '专辑：十一月的萧邦',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
mp3: 'http://1.198.4.157/amobile.music.tc.qq.com/C400001zMQr71F1Qo8.m4a?guid=9577664854&vkey=4AE49A5CDBBDD22C287C44DEC304F69E507B934967DE2DE584F0E0D046286ED9DE009FC56CE70C537D80F5290DF6CEAB594E1223948E016E&uin=0&fromtag=66',
ogg: ''
},
{
title: '甜甜的',
artist: '周杰伦',
album: '专辑：我很忙',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000',
mp3: 'http://106.42.24.26/amobile.music.tc.qq.com/C400000xdZuV2LcQ19.m4a?guid=9577664854&vkey=03DBF5EDBE4DEE7422322F85CE62B9FBE9E85552306709557996F7A990C3C006A5167E6C69940D260DFAE305968C05E3D9363625F013A726&uin=0&fromtag=66',
ogg: ''
},
{
title: '简单爱',
artist: '周杰伦',
album: '专辑：范特西',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg?max_age=2592000',
mp3: 'http://1.199.92.149/amobile.music.tc.qq.com/C4000009BCJK1nRaad.m4a?guid=9577664854&vkey=15EC9C7981C69A98D12B9794A1529207431434F2D2C358F6AD2847BFF1A5DB7EE03FC894F1BBE294341AD44224F3A0A4D99BC34CCB6F5CB4&uin=0&fromtag=66',
ogg: ''
},
{
title: '花海',
artist: '周杰伦',
album: '专辑：魔杰座',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg?max_age=2592000',
mp3: 'http://1.199.92.154/amobile.music.tc.qq.com/C400003cI52o4daJJL.m4a?guid=9577664854&vkey=2B77B3051CA48F0769D98A52EB2D26666D977F3DD7742E110C86F79192CD6188820C287A7EEC30BE4975C602F234603086537C04B4AC2B64&uin=0&fromtag=66',
ogg: ''
},
{
title: '星晴',
artist: '周杰伦',
album: '专辑：Jay',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg?max_age=2592000',
mp3: 'http://106.42.24.17/amobile.music.tc.qq.com/C400001Zi7Ly4ZtVQk.m4a?guid=9577664854&vkey=D8513B23A0CCE8B1FB1F3F253DC6CBB5266AFA4771AE5234B830B35360CD2E8CFE2962CB0726448340530E7312CC56F2A9A60872064218DE&uin=0&fromtag=66',
ogg: ''
},
{
title: '菊花台',
artist: '周杰伦',
album: '专辑：依然范特西',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg?max_age=2592000',
mp3: 'http://1.199.92.151/amobile.music.tc.qq.com/C400004RUiXu49ufy1.m4a?guid=9577664854&vkey=A111462B080ED68F196368E0B35F2ED146843A04F7681FD8606EA27C014520EBF5973453E3B65FBC10A6636884B1DC3FFA230CB8BCAD80B9&uin=0&fromtag=66',
ogg: ''
},
{
title: '青花瓷',
artist: '周杰伦',
album: '专辑：我很忙',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000',
mp3: 'http://1.199.92.154/amobile.music.tc.qq.com/C400002qU5aY3Qu24y.m4a?guid=9577664854&vkey=97B93E21D655863BC65011D1A4B81E23A4F2F87CF259334D088C4DC9D4CB63F98B7D8AC3CA3A449E22DBB1A91BE76ECDC78A57AEEC060220&uin=0&fromtag=66',
ogg: ''
},
{
title: '晴天',
artist: '周杰伦',
album: '专辑：叶惠美',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg?max_age=2592000',
mp3: 'http://106.42.24.26/amobile.music.tc.qq.com/C4000039MnYb0qxYhV.m4a?guid=9577664854&vkey=04F4662F45D3F594248C1DBBB70CDBCB1174790EF63CC004DB0189C52B6350B3A1889618671CD5C7E2335A11CBAE36E510AAEC58B596A982&uin=0&fromtag=66',
ogg: ''
},
{
title: '退后',
artist: '周杰伦',
album: '专辑：依然范特西',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg?max_age=2592000',
mp3: 'http://106.42.24.19/amobile.music.tc.qq.com/C400001L1lqm4UAdyo.m4a?guid=9577664854&vkey=5A409EDC2BDAD92FF601893D1E89CAA39BD74D0D484A759F7CFA64E864E76A293A8CEE7C3B2147FA5B5245A648E1889381A298D3EA2EA52A&uin=0&fromtag=66',
ogg: ''
},
{
title: '发如雪',
artist: '周杰伦',
album: '专辑：十一月的萧邦',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
mp3: 'http://1.199.92.144/amobile.music.tc.qq.com/C4000027oMO61wWi55.m4a?guid=9577664854&vkey=E04D676A976D2420CB21E1FA08B412F99D53F61B77CE2EC6584059BA7AA2B285C57177FB40629D4AD77B592C6629AD94CB9A7723635E6481&uin=0&fromtag=66',
ogg: ''
},
{
title: '龙卷风',
artist: '周杰伦',
album: '专辑：Jay',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg?max_age=2592000',
mp3: 'http://106.42.24.14/amobile.music.tc.qq.com/C400002l8JN71d2Dxy.m4a?guid=9577664854&vkey=B7EEF5EE9682FE1F719A2F8F31B0A4207983CCBE598A1ED21E520EEF313E4203B8FBE8BE6337E19F19FD66503A759C42DD12B623E73CABA8&uin=0&fromtag=66',
ogg: ''
},
{
title: '安静',
artist: '周杰伦',
album: '专辑：范特西',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg?max_age=2592000',
mp3: 'http://1.198.4.147/amobile.music.tc.qq.com/C400000amRvH3wxv56.m4a?guid=9577664854&vkey=B35E3FD3A518DB4C05B22C443F970EEFAC80A495A538AAE4F78BBDC32B9B56BA4917EADC172548343A240101A57A590EB8FAB595FCCC7A58&uin=0&fromtag=66',
ogg: ''
},
{
title: '倒带',
artist: '周杰伦',
album: '周杰伦 2004 无与伦比 演唱会 Live CD',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000032ezFm3F53yO.jpg?max_age=2592000',
mp3: 'http://1.198.4.151/amobile.music.tc.qq.com/C4000023O1LH0Ha1OO.m4a?guid=9577664854&vkey=31C23FE7719E3E9203B8C6F06FD0F99C1CDD05B9CB9325C052942DF9D9B39958B35495035608C15BCD38C0011984D83130CE05571C3AE16E&uin=0&fromtag=66',
ogg: ''
},
{
title: '止战之殇',
artist: '周杰伦',
album: '专辑：七里香',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg?max_age=2592000',
mp3: 'http://106.42.24.28/amobile.music.tc.qq.com/C4000042fRqf4fC8ZB.m4a?guid=9577664854&vkey=AD25F84D50E5E01B6937091A7523D9BDFC26E74380A16FC06640492D64B0568EFB65C8C371C512DF83D22B1408F576E55A8378099D3E8484&uin=0&fromtag=66',
ogg: ''
},
{
title: '暗号',
artist: '周杰伦',
album: '专辑：八度空间',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg?max_age=2592000',
mp3: 'http://1.199.92.152/amobile.music.tc.qq.com/C400000NQDjk4BA0W3.m4a?guid=9577664854&vkey=09C7895E706091B428718010234F06BE5CBF04EB8D97719BCC9E55ACD3913B09D843432D67D1454FFE11FB837001216A622EB046CF9DDB24&uin=0&fromtag=66',
ogg: ''
},
{
title: '搁浅',
artist: '周杰伦',
album: '专辑：七里香',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg?max_age=2592000',
mp3: 'http://1.198.4.143/amobile.music.tc.qq.com/C400001Bbywq2gicae.m4a?guid=9577664854&vkey=B9A592F311D2A6E0B5836E7B9B2C029689A4393ED6CFF58364A92137A0120CCAA4C85F70CDCB0A65936F38F962BD37769A9A4984F56EFCA5&uin=0&fromtag=66',
ogg: ''
},
{
title: '稻香',
artist: '周杰伦',
album: '专辑：魔杰座',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg?max_age=2592000',
mp3: 'http://106.42.24.16/amobile.music.tc.qq.com/C400003aAYrm3GE0Ac.m4a?guid=9577664854&vkey=108613B03F3E60BBCE1A0C00CCB6041455DA5C2D39B7F9F1E268C3878F9706C71ED6D6B0A0E54E3CB75CCBADD8B36C2C7E3696018C611F36&uin=0&fromtag=66',
ogg: ''
},
{
title: '白色风车',
artist: '周杰伦',
album: '专辑：依然范特西',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg?max_age=2592000',
mp3: 'http://1.199.92.151/amobile.music.tc.qq.com/C400000DdOAF0ED7i4.m4a?guid=9577664854&vkey=8B1A6C72BFDFA2C9442B4AE4EE535ABEE2003FC3627AA0BFDFAA02D9ABEF9637C259CFAF57CEDB8BB09624E8458ECF8B95AC68F094807E9C&uin=0&fromtag=66',
ogg: ''
},
{
title: '借口',
artist: '周杰伦',
album: '专辑：七里香',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg?max_age=2592000',
mp3: 'http://106.42.24.29/amobile.music.tc.qq.com/C400002XWgfo0IKPOH.m4a?guid=9577664854&vkey=F1D204F8F21EFE4F112409C6C7075D50CC6D58484B8DCFA7F1338997790EA438C3B5B27EA8730217E18A75B6194D78F74F981D60FE13948F&uin=0&fromtag=66',
ogg: ''
},
{
title: '心雨',
artist: '周杰伦',
album: '专辑：依然范特西',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg?max_age=2592000',
mp3: 'http://1.199.92.143/amobile.music.tc.qq.com/C400000Fylg7450RG2.m4a?guid=9577664854&vkey=B9F488D3D822EF2B7F157D88A7177A06098A2A2A58B63DD26B9DFD87A2B4411FC9A90FA79589D1530B5198331912C98C853A915A9367F73B&uin=0&fromtag=66',
ogg: ''
},
{
title: '枫',
artist: '周杰伦',
album: '专辑：十一月的萧邦',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
mp3: 'http://1.198.4.158/amobile.music.tc.qq.com/C400003KtYhg4frNXC.m4a?guid=9577664854&vkey=1A28A6E358972B49EACD1221319F6742F9407489D3E4E37E0ADB36863C6F9540CE99C5B6CB0BC6335855CDAF69758E6BBB32218026F29066&uin=0&fromtag=66',
ogg: ''
},
{
title: '困兽之斗',
artist: '周杰伦',
album: '专辑：七里香',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg?max_age=2592000',
mp3: 'http://106.42.24.16/amobile.music.tc.qq.com/C4000048Gwq23HPs1o.m4a?guid=9577664854&vkey=6EA13C78753AB5E55FA15CA69559228976A16EA0C0975C6818B9EF63CE007259F76C2DE699DEEB8DE9765226B0892097238F7A490BB653C9&uin=0&fromtag=66',
ogg: ''
},
{
title: '最长的电影',
artist: '周杰伦',
album: '专辑：我很忙',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000',
mp3: 'http://1.199.92.146/amobile.music.tc.qq.com/C400003ZrdgZ0UnjDl.m4a?guid=9577664854&vkey=D527348CA17A1434C86A1376F1C4F2BD892C9AC7A98866272CB86D40D590639E9A43602782EEC4775AE1168C6CA35BC3759B68FE6672DC0E&uin=0&fromtag=66',
ogg: ''
},
{
title: '千里之外',
artist: '周杰伦 / 费玉清',
album: '专辑：依然范特西',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg?max_age=2592000',
mp3: 'http://106.42.24.27/amobile.music.tc.qq.com/C400003FRy0r0wyGHl.m4a?guid=9577664854&vkey=0A80DC4F797275EB75530D5969D8588708CA451B97254CBE69F0C2E04D9A17355D8C7941AEEE5712E1DCCF512F567E032137D4088AF89973&uin=0&fromtag=66',
ogg: ''
},
{
title: '烟花易冷',
artist: '周杰伦',
album: '专辑：跨时代',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg?max_age=2592000',
mp3: 'http://1.198.4.146/amobile.music.tc.qq.com/C400004emQMs09Z1lz.m4a?guid=9577664854&vkey=3D769E76FD78B27B5CE2AB6D959B37065821DF210D90DB814A5CFC90DD7A5DB8ED4C13F85E5168DFCCC7AA829569ABE3EE1336B10415F471&uin=0&fromtag=66',
ogg: ''
},
{
title: '听妈妈的话',
artist: '周杰伦',
album: '专辑：依然范特西',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg?max_age=2592000',
mp3: 'http://1.198.4.150/amobile.music.tc.qq.com/C400002hXDfk0LX9KO.m4a?guid=9577664854&vkey=B6F6229A831B64DF59F54B0F5E8F95573DDEC69A54C5C26753F0AB36625F6F38B7E8638339DEB51985F8921E52E4FC34381ECBA9390CA890&uin=0&fromtag=66',
ogg: ''
},
{
title: '给我一首歌的时间',
artist: '周杰伦',
album: '专辑：魔杰座',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg?max_age=2592000',
mp3: 'http://1.198.4.152/amobile.music.tc.qq.com/C400004BhQke4adHcf.m4a?guid=9577664854&vkey=DCE782AFF95F6B19439225D8CE5DA5D406EFC6C4D1BE12D919666BAE805B77DEC7EA0D5D31360DE5E9E96DB16C1378C783FF2AB255E52BED&uin=0&fromtag=66',
ogg: ''
},
{
title: '阳光宅男',
artist: '周杰伦',
album: '专辑：我很忙',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000',
mp3: 'http://1.199.92.145/amobile.music.tc.qq.com/C400001bnNGN127Kbq.m4a?guid=9577664854&vkey=AB3B818F53E8BAE3D90CF38B5BF215A69B52E1ABDC1E191E25985B697A4865CE1757CA64943CD8C4631838FFDC5F3651822D31C22E257D3C&uin=0&fromtag=66',
ogg: ''
},
{
title: '爱在西元前',
artist: '周杰伦',
album: '专辑：范特西',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg?max_age=2592000',
mp3: 'http://1.198.4.144/amobile.music.tc.qq.com/C400002usg9o4GTAKf.m4a?guid=9577664854&vkey=F5F623890F27C2DF6AE25A2D71A621EBCC0BB0787BF44EF7549C2CBF4F74498BC7E368070E82EAE9D55035BB50E0EABE40CE13C3F7FD5FD1&uin=0&fromtag=66',
ogg: ''
},
{
title: '说好的幸福呢',
artist: '周杰伦',
album: '专辑：魔杰座',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg?max_age=2592000',
mp3: 'http://106.42.24.19/amobile.music.tc.qq.com/C4000042QMDR1VzSsx.m4a?guid=9577664854&vkey=DFFEE0CA6379E2AF6D13151794A79A5AA683B3B518099F270B2BA3A9C21A2E1987EFE87F5393BFC80E095AE1B86D0EF4F4FDE5C886309779&uin=0&fromtag=66',
ogg: ''
},
{
title: '说了再见',
artist: '周杰伦',
album: '专辑：跨时代',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg?max_age=2592000',
mp3: 'http://106.42.24.28/amobile.music.tc.qq.com/C40000265Jxe3JzXOJ.m4a?guid=9577664854&vkey=9E18655D17CE9AF94EA3829ADB60A431C631F91033361FA81509B399CCB3F7AD6A15F6ED91633E0D03E7C021C100B0388421ACA3F3BE11CF&uin=0&fromtag=66',
ogg: ''
},
{
title: 'Mine Mine&nbsp;',
artist: '周杰伦',
album: '专辑：惊叹号',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg?max_age=2592000',
mp3: 'http://isure.stream.qqmusic.qq.com/C400002CUU2B3WuGLc.m4a?guid=9577664854&vkey=3F35FA56EEF54157BA0CE91C7FE64807FE107D8D0B9DCCD406224AB65854B5F2881977B6F0CEE9B2986C9B3611376C3BC159B71B96965BD9&uin=0&fromtag=66',
ogg: ''
},
{
title: '不能说的秘密',
artist: '周杰伦',
album: '专辑：不能说的秘密',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001UP7mW458ipG.jpg?max_age=2592000',
mp3: 'http://isure.stream.qqmusic.qq.com/C400002MXZNu1GToOk.m4a?guid=9577664854&vkey=3EE6EC002EBC316E31A177F0752578B57459AAD20B0EDC192EE394381A9102EF9172D0F9422C774B28282D159BE79CB1BCC7309446A67BA7&uin=0&fromtag=66',
ogg: ''
},
{
title: '断了的弦',
artist: '周杰伦',
album: '专辑：寻找周杰伦',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001BGzMs369FzU.jpg?max_age=2592000',
mp3: 'http://1.198.4.150/amobile.music.tc.qq.com/C400003ZdxP61ClQZ5.m4a?guid=9577664854&vkey=5551499404C05C3CE8C85B10F16662A3BC840138385F92360BAB7513611C644041C8FE8D35124B6A67E4A661948A66A11AD394592A1E6BA0&uin=0&fromtag=66',
ogg: ''
},
{
title: '浪漫手机&nbsp;&nbsp;&nbsp;',
artist: '周杰伦',
album: '专辑：十一月的萧邦',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
mp3: 'http://isure.stream.qqmusic.qq.com/C400002fi7iG0VvUj2.m4a?guid=9577664854&vkey=73DA0E9E045E7DEAE62787100B54860CF24FF03614003D5DF04F8C76B207923DE216AFA36709EDA9F397EAF04E4CF612ED4C638C753FFA6D&uin=0&fromtag=66',
ogg: ''
},
{
title: '蒲公英的约定',
artist: '周杰伦',
album: '专辑：我很忙',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000',
mp3: 'http://1.198.4.145/amobile.music.tc.qq.com/C400004Yi5BD3ksoAN.m4a?guid=9577664854&vkey=E548E9464691BD59FB8F384F52F7FBA9DDC4C8704D5BA3B5026DAFDDF4F177D5595DEA4FAFB0ED1083652947666E7357FD529D785A955820&uin=0&fromtag=66',
ogg: ''
},
{
title: '牛仔很忙',
artist: '周杰伦',
album: '专辑：我很忙',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000',
mp3: 'http://106.42.24.28/amobile.music.tc.qq.com/C400003O5GaP1SYe94.m4a?guid=9577664854&vkey=5F08BE09BF3D8FAED348547150A21D0C9FABF209906E26BB485B9E0B9965D1E847493BE667CD496A821E319CAE4569BD525F6FFAB7590C92&uin=0&fromtag=66',
ogg: ''
},
{
title: '我不配',
artist: '周杰伦',
album: '专辑：我很忙',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000',
mp3: 'http://106.42.24.16/amobile.music.tc.qq.com/C400001T3JAT15palI.m4a?guid=9577664854&vkey=2370DFCA5D138EAB5D69BE91EBAD021CFFAB6199C052DE6B0726DED2BCC0BBF2C219ED1A99EE5616B3BBEF81C76CB5F6726E3F3936076A9E&uin=0&fromtag=66',
ogg: ''
},
{
title: '爱的飞行日记',
artist: '周杰伦 / 杨瑞代',
album: '专辑：跨时代',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg?max_age=2592000',
mp3: 'http://106.42.24.30/amobile.music.tc.qq.com/C400003CxS6w14OQyM.m4a?guid=9577664854&vkey=936C94F02E4234F828AD5DBA65D7962BAC5AE6B747BEA6D1031E3B62F545143B28C059CD81D89E4F207CC1994579F1071449A122E6A0327A&uin=0&fromtag=66',
ogg: ''
},
{
title: '一路向北',
artist: '周杰伦',
album: '专辑：J III MP3 Player',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002MAeob3zLXwZ.jpg?max_age=2592000',
mp3: 'http://106.42.24.29/amobile.music.tc.qq.com/C400002FacGn0dkEuR.m4a?guid=9577664854&vkey=4E9725FC0A815EDFF114CA6010343086C41F0D95DD54CC017504D907CBDB43B202558CC4AA87D8719F6AFAA6B1E91C998BF7DCC7C6B9BF46&uin=0&fromtag=66',
ogg: ''
},
{
title: '珊瑚海',
artist: '周杰伦',
album: '专辑：十一月的萧邦',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
mp3: 'http://isure.stream.qqmusic.qq.com/C400001K0AjL2huSxx.m4a?guid=9577664854&vkey=6A800E3271E4D51F97A722CA8D25A07728403D5CDE45DC0170AEFE349265F4AA7A0074706E5F70E4D2A3F16674A4355CCB9F9F1140A1F9BC&uin=0&fromtag=66',
ogg: ''
},
{
title: '布拉格广场',
artist: '蔡依林 / 周杰伦',
album: '专辑：看我72变',
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000q5U9S2OLNg4.jpg?max_age=2592000',
mp3: 'http://106.42.24.28/amobile.music.tc.qq.com/C400002QoT9n3hcEIr.m4a?guid=9577664854&vkey=544637FD2874A9ADDD969BC3B98C38CD6FAF61A0E66A57ED172B1CB74C71BA9A751018E989E992E15DEAB2FD95CC53D5FF1A6A0CE37622DD&uin=0&fromtag=66',
ogg: ''
}
];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);