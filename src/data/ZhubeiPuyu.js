function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item).default;
	});
	return images;
}

const images = importAll(require.context('@assets/image/ZhubeiPuyu', true, /\.(png|jpe?g|svg)$/));

export default {
	title: '竹北璞玉田散步地圖',
	banner: images['banner.jpg'],
	logo: images['logo.svg'],
	subtitle: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
	description: 'Quisque sed gravida leo. In laoreet metus id molestie eleifend. Proin suscipit commodo dolor et pharetra. Proin augue eros, tincidunt eu turpis non, iaculis venenatis leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ipsum magna, eleifend in urna vitae, scelerisque consectetur leo. Vivamus eleifend at purus non suscipit.',
	coordinate: {
		lat: 24.808731,
		lng: 121.050298,
	},
	zoom: 15,
	locations: [
		{
			title: '東海秘徑',
			subtitle: '東海人的哲學之巷',
			description: '漫漫散步，慢慢感受，聽水聲看稻田，體會城市沒有的靜謐。',
			coordinate: {
				lat: 24.813778,
				lng: 121.0486212,
			},
			tags: ['東海秘徑', '散步小路'],
			images: [
				images['東海秘徑/IMG_20200919_154840.jpg'],
				images['東海秘徑/IMG_20200919_155226.jpg'],
				images['東海秘徑/IMG_20200919_155437.jpg'],
			],
		},
		{
			title: '福靖宮',
			subtitle: '老樹x水圳x伯公',
			description: '一旁的涼亭常有三五好友在此聊天，兩旁更常有農事體驗活動，是個仍十分活絡的城鄉交集之處。',
			coordinate: {
				lat: 24.810108,
				lng: 121.047125,
			},
			tags: ['民間信仰', '伯公', '客家文化'],
			images: [
				images['福靖宮/「DSC_0015.jpg」的副本.jpg'],
				images['福靖宮/「DSC_0018.jpg」的副本.jpg'],
				images['福靖宮/「DSC_0023.jpg」的副本.jpg'],
				images['福靖宮/「DSC_0031.jpg」的副本.jpg'],
			],
		},
		{
			title: '舊港圳',
			subtitle: '生命之源',
			description: '舊港圳肩負涵養東海良田的重責，具備保水、降溫、調節都市周邊微型氣候的功能，更讓東海農民稻米比賽屢獲佳績！',
			coordinate: {
				lat: 24.810467,
				lng: 121.048034,
			},
			tags: ['冠軍米', '氣候變遷解方'],
			images: [
				images['舊港圳/DSC_0039.jpg'],
				images['舊港圳/DSC_0066.jpg'],
				images['舊港圳/IMG_20200912_161326.jpg'],
			],
		},
		{
			title: '眺望點',
			subtitle: '所謂伊人，在水一方',
			description: '從這往東可以眺望至少7座位於雪山山脈的百岳，常常見到攝影愛好者駐足。',
			coordinate: {
				lat: 24.813918,
				lng: 121.052342,
			},
			tags: ['大霸尖山', '攝影'],
			images: [
				images['眺望點/IMG_1183.jpg'],
				images['眺望點/IMG_3088.jpg'],
				images['眺望點/IMG_5387.jpg'],
				images['眺望點/IMG_5551.jpg'],
				images['眺望點/IMG_9527.jpg'],
				images['眺望點/陳益樞DSC05858.jpg'],
			],
		},
		{
			title: '樂樂長甘蔗屋',
			subtitle: '',
			description: '竹22限定的漫活料理，鎮店招牌是100%原汁的純甘蔗檸檬汁和帥氣的老板喬治！',
			coordinate: {
				lat: 24.812185,
				lng: 121.054578,
			},
			tags: ['簡餐', '咖啡', '親子', '友善食材', '貓山王榴槤', '甘蔗檸檬汁', '無菜單料理'],
			images: [
				images['樂樂長/20201012_094704.jpg'],
				images['樂樂長/DSC_0210.jpg'],
				images['樂樂長/DSC_0212.jpg'],
				images['樂樂長/FB_IMG_1595939535260.jpg'],
				images['樂樂長/IMG20201106122416[1].jpg'],
				images['樂樂長/IMG20201106141057[1].jpg'],
			],
		},
		{
			title: '璞玉自然農場',
			subtitle: '把人種回來',
			description: '友善耕作的培育基地，推動多種食農教育課程與活動，冀望建立更多消費者與土地的連結。',
			coordinate: {
				lat: 24.810266,
				lng: 121.05578,
			},
			tags: ['當季飲食', '在地消費', 'CSA(社區協力農業)', '友善耕作，新竹自然農俱樂部'],
			images: [
				images['璞玉自然農場/DSC_1135.jpg'],
				images['璞玉自然農場/DSC_2578.jpg'],
				images['璞玉自然農場/DSC_2589.jpg'],
				images['璞玉自然農場/DSC_3032.jpg'],
				images['璞玉自然農場/DSC_8679.jpg'],
				images['璞玉自然農場/IMG_20200920_142447.jpg'],
				images['璞玉自然農場/received_1812563608763011.jpg'],
				images['璞玉自然農場/received_2041334252545903.jpg'],
				images['璞玉自然農場/received_10156528351091940.jpg'],
				images['璞玉自然農場/received_10209763320679293.jpg'],
				images['璞玉自然農場/received_10216813233463586.jpg'],
			],
		},
		{
			title: '東海碾米場',
			subtitle: '薪火相傳的香米世家',
			description: '東海米的品牌推手，與農民契作推動稻米加工專業化、自動化，祖孫三代都是種米達人！',
			coordinate: {
				lat: 24.808197,
				lng: 121.05612,
			},
			tags: ['東海米'],
			images: [
				images['東海碾米廠/DSC_0313.jpg'],
				images['東海碾米廠/P_20201115_164002.jpg'],
			],
		},
		{
			title: '田爸爸冠軍米',
			subtitle: '有愛的香香米																								"',
			description: '左手種稻右手種麥，投入專業碾烘設備，冠軍米不只冠軍，還是最好吃的新鮮現碾！',
			coordinate: {
				lat: 24.8038324,
				lng: 121.055193,
			},
			tags: ['當季飲食', '在地消費', '友善耕作', '新瓦屋13好市集'],
			images: [
				images['田爸爸冠軍米/1605366859839.jpg'],
				images['田爸爸冠軍米/1605366911971.jpg'],
				images['田爸爸冠軍米/IMG20200813181442.jpg'],
			],
		},
		{
			title: '玩印工作室',
			subtitle: '手工絹印的溫度',
			description: '傳承家中「絹印」技藝，為這個追求快速的世代保留手工印刷的溫度。',
			coordinate: {
				lat: 24.811866,
				lng: 121.047508,
			},
			tags: ['絹印', 'DIY', '親子活動', '在地創生', '青年創業'],
			images: [
				images['玩印/2020-08-29 20.49.29.jpg'],
				images['玩印/65654652_2549425261757731_6195862255762931712_n.jpg'],
				images['玩印/IMG20200818142514.jpg'],
				images['玩印/IMG20200818142914.jpg'],
				images['玩印/IMG20200818155717.jpg'],
				images['玩印/S__53149802.jpg'],
				images['玩印/環境照_190726_0002.jpg'],
				images['玩印/環境照_190726_0005.jpg'],
				images['玩印/環境照_190726_0006.jpg'],
				images['玩印/環境照_190726_0007.jpg'],
			],
		},
		{
			title: 'Studio Smoll',
			subtitle: '',
			description: '',
			coordinate: {
				lat: 24.816385,
				lng: 121.04709,
			},
			tags: [],
			images: [],
		},
		{
			title: '東海水壟間',
			subtitle: '蟄伏民間的水利古蹟',
			description: '以水力發動的碾米的水礱間，是先人順應自然的生活智慧結晶。',
			coordinate: {
				lat: 24.804555,
				lng: 121.052691,
			},
			tags: ['復興碾米廠', '水力渦輪發電', '綠色能源', '水利古蹟', '客家文化'],
			images: [
				images['水礱間/2020.07.18轉動吧水礱間_201112.jpg'],
				images['水礱間/2020_0.07.18轉動吧水礱間_201112.jpg'],
				images['水礱間/92397510_228143085213608_477239152270639104_n.jpg'],
				images['水礱間/P_20200724_083858.jpg'],
				images['水礱間/水礱間皮帶.jpg'],
			],
		},
		{
			title: '有田咖啡',
			subtitle: '我的下午茶時光',
			description: '三姊妹共同創業，延續職人阿公的認真態度，來發掘有田的咖啡有點甜的秘密吧！',
			coordinate: {
				lat: 24.803064,
				lng: 121.048602,
			},
			tags: ['簡餐', '咖啡', '友善食材', '在地創生', '青年創業'],
			images: [
				images['有田/20201108_彭聖嚴_0085.jpg'],
				images['有田/IMG20201107150745[1].jpg'],
				images['有田/IMG20201107151104[1].jpg'],
				images['有田/IMG20201107152017[1].jpg'],
				images['有田/IMG20201107152323[1].jpg'],
				images['有田/IMG20201107152850[1].jpg'],
				images['有田/IMG_20201023_135129.jpg'],
				images['有田/P_20201115_164633.jpg'],
			],
		},
		{
			title: '駁坎',
			subtitle: '與生態共生的擋土牆',
			description: '百年駁坎與梯田，靠經驗堆疊的在地智慧，在現代追求便利與效率的社會中，難得一見。',
			coordinate: {
				lat: 24.8107829,
				lng: 121.0494973,
			},
			tags: ['砌石工法', '生態工法'],
			images: [
				images['駁坎/DSC_0060.jpg'],
				images['駁坎/「DSC_0055.jpg」的副本.jpg'],
				images['駁坎/石駁坎_PhotoCredit_Hsinchih.jpg'],
			],
		},
		{
			title: '犁頭山',
			subtitle: '上山下海之旅',
			description: '分隔芎林與新埔的近山。興海街103巷往山上走十五分鐘，即可登犁頭山頂，眺望頭前溪平原與竹北高鐵站。',
			coordinate: {
				lat: 24.8133486,
				lng: 121.0557425,
			},
			tags: ['文山步道', '通學步道'],
			images: [
				images['犁頭山/1.jpg'],
				images['犁頭山/DJI_0029.jpg'],
				images['犁頭山/IMG_0326.jpg'],
			],
		},
		{
			title: '竹22金城武樹',
			subtitle: '想當金城武嗎？',
			description: '不用排隊的美景、人稱「新竹金城武樹」就在竹22縣道上。',
			coordinate: {
				lat: 24.810467,
				lng: 121.048034,
			},
			tags: ['芎林金城武樹', '新竹金城武樹'],
			images: [
				images['竹二二金城武樹/P_20201115_162207.jpg'],
				images['竹二二金城武樹/林裕治106141822_3229476447097106_7096154990894104010_o.jpg'],
			],
		},
	],
};
