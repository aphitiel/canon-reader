const test = require('tape')
const referenceParser = require('./reference-parser.js').default

const cases = [
	[
		'rev 13:13', {
			bookId: 'revelation',
			start: { chapter: 13, verse: 13, section: null },
			end: { chapter: 13, verse: 13, section: null },
		},
	], [
		'josss', {
			bookId: 'joshua',
			start: { chapter: null, verse: null, section: null },
			end: { chapter: null, verse: null, section: null },
		},
	], [
		'nothing', {
			bookId: null,
			start: { chapter: null, verse: null, section: null },
			end: { chapter: null, verse: null, section: null },
		},
	], [
		'rev 12:2-14:4a', {
			bookId: 'revelation',
			start: { chapter: 12, verse: 2, section: null },
			end: { chapter: 14, verse: 4, section: 'a' },
		},
	], [
		'rev 12:2-4a', {
			bookId: 'revelation',
			start: { chapter: 12, verse: 2, section: null },
			end: { chapter: 12, verse: 4, section: 'a' },
		},
	],
]

test(`reference-regex`, t => {
	cases.forEach(([ input, expectedOutput ]) => {
		const output = referenceParser(input)
		t.deepEqual(output, expectedOutput, input)
	})
	t.end()
})
