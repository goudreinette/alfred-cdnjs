'use strict';
const alfy = require('alfy');
const cmdSubtitle = require('./source/cmd-subtitle');

// Do not boost exact matches by default, unless specified by the input


(async () => {
	const data = await alfy.fetch('https://api.cdnjs.com/libraries?fields=version,description&search='+alfy.input)

	let all = [];

	for (let result of data.results)  {
		all.push({
			title: result.name,
			subtitle: result.description,
			arg: result.latest,
			mods: {
				alt: {
					// arg: pkg.links.npm,
					subtitle: 'Open Github'
				},
				cmd: {
					subtitle: 'Copy script tag'
				}
			},
		})
	}

	alfy.output(all);
})();

