What I want a Bible reader to be.

# Use cases

I have three basic use cases that I want my Bible reader to serve.

## Quick navigation

Looking up references on my phone during worship, or arguing with people on the internet on my desktop, I want to get to the verse quickly without faffing about.

## Long reading

Chapter breaks really kill the flow when reading a book.  Beyond that, intrusive chapter and verse numbers are annoying, and non-canonical headers offend me.

Bookmarks that I can move forward to my current position help me keep track of daily reading.

## Light study

When I'm not quite sure about an English translation, I want to look at the original words used.  I don't know Hebrew or Greek, so I want to see the words in a verse with their Strong's number/definition.

This should be easy to do without breaking the flow of reading.

# Design goals

- Uninterrupted reading
	- Unobtrusive/hidden chapter/verse markers
	- No chapter breaks, scroll through the whole book
	- No non-canon headings
- Simple navigation
	- Select the book to open it
	- Optionally get scrolled directly to a chapter
	- Keyboard shortcut to type in a reference and navigate to it
- Programmatic link friendly
	- An easy, documented way for other sites to generate a link to a book/chapter/verse
- Fast
	- Text should all be pre-downloaded
	- Opening a new book should take <50ms, including render time.
	- No loading spinners

## Stretch goals

- Study-friendly
	- Display original Hebrew/Greek while reading, with Strong's definitions
- Bookmarks
	- Actual bookmarks that you can move forward based on how much you read today, not the "page tags" that most apps call bookmarks
- Crossreferences
	- Source from [OpenBible.info's crossreference database](http://www.openbible.info/labs/cross-references/)

## Not prioritizied

Allowing users to choose between different translations will not be a priority.

Zondervan and their ilk use the threat of ungodly copyright enforcement to coerce people into paying them to use more than a small portion of most popular translations of the Bible.

I am not interested in paying for their licensing.

Nor am I interested in reverting to archaic pre-copyright translations.

I will use the [World English Bible](http://worldenglishbible.org/) translation.  It's a good, freely licensed ASV fork.

[This fork of Pickering's translation of Revelation](https://github.com/TehShrike/pickering-majority-text-revelation) will be used for Revelation.

# Develop

To build and run the app, you will need to install [Node.js](https://nodejs.org/).

Fork this repository and clone the fork to your machine.

```sh
npm install
npm run dev
```

You can then open <http://127.0.0.1:8888> in your browser.

The app will re-build automatically when you save your changes, but you'll have to reload the web page yourself.

## Tests

To run the tests:

```sh
npm test
```

# License

[WTFPL](http://wtfpl2.com)
