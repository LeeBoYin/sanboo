function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item).default;
	});
	return images;
}

const images = importAll(require.context('@assets/image/ZhubeiPuyu', true, /\.(png|jpe?g|svg)$/));


console.log(images);
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
	zoom: 14,
	locations: [
		{
			title: '東海秘徑',
			subtitle: '東海人的哲學之巷',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.813778,
				lng: 121.0486212,
			},
			tags: [
				'東海秘徑',
				'散步小路'
			],
			images: [
				images['東海秘徑/IMG_20200919_154840.jpg'],
				images['東海秘徑/IMG_20200919_155226.jpg'],
				images['東海秘徑/IMG_20200919_155437.jpg'],
			],
		},
		{
			title: '福靖宮',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.810108,
				lng: 121.047125,
			},
			tags: [],
			images: [
				images['福靖宮/「DSC_0015.jpg」的副本.jpg'],
				images['福靖宮/「DSC_0018.jpg」的副本.jpg'],
				images['福靖宮/「DSC_0023.jpg」的副本.jpg'],
				images['福靖宮/「DSC_0031.jpg」的副本.jpg'],
			],
		},
		{
			title: '舊港圳',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.810467,
				lng: 121.048034,
			},
			tags: [],
			images: [],
		},
		{
			title: '眺望點',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.813918,
				lng: 121.052342,
			},
			tags: [],
			images: [],
		},
		{
			title: '樂樂長',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.812185,
				lng: 121.054578,
			},
			tags: [],
			images: [],
		},
		{
			title: '璞玉自然農場',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.810266,
				lng: 121.05578,
			},
			tags: [],
			images: [],
		},
		{
			title: '東海碾米場',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.808197,
				lng: 121.05612,
			},
			tags: [],
			images: [],
		},
		{
			title: '田爸爸冠軍米',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.8038324,
				lng: 121.055193,
			},
			tags: [],
			images: [],
		},
		{
			title: '玩印',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.811866,
				lng: 121.047508,
			},
			tags: [],
			images: [],
		},
		{
			title: 'Studio Smoll',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.816385,
				lng: 121.04709,
			},
			tags: [],
			images: [],
		},
		{
			title: '東海水壟間',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.804555,
				lng: 121.052691,
			},
			tags: [],
			images: [],
		},
		{
			title: '水圓環',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.790544,
				lng: 121.059561,
			},
			tags: [],
			images: [],
		},
		{
			title: '有田',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.803064,
				lng: 121.048602,
			},
			tags: [],
			images: [],
		},
		{
			title: '駁坎',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.8107829,
				lng: 121.0494973,
			},
			tags: [],
			images: [],
		},
		{
			title: '犁頭山',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.8133486,
				lng: 121.0557425,
			},
			tags: [],
			images: [],
		},
		{
			title: '竹22金城武樹',
			subtitle: 'Lorem ipsum dolor sit amet',
			description: 'Vestibulum congue purus in nisi accumsan, nec semper neque iaculis. Ut blandit justo eu suscipit volutpat.',
			coordinate: {
				lat: 24.810467,
				lng: 121.048034,
			},
			tags: [],
			images: [],
		},
	],
};
