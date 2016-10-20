# react-markup-text
### markup texts with React

Use this package to add paragraphs and line endings to unstructured text

## Install
```
npm install --save react-markup-text
```

## Usage
```js
import textToReactMarkup from 'react-markup-text';

function BlogArticle({ title, author, body }) {
	return (
		<article className="blog-article">
			<h1 className="blog-article__title">{title}</h1>
			<AuthorBadge author={author} />
			<div className="blog-article__body">
				{textToReactMarkup(body)}
			</div>
		</article>
	);
}
```

## API

#### `textToReactMarkup(text: string) : Array<ReactElement>`

The implementation is really simple, `\n\n` creates a new paragraph and `\n` a new line.

## License
ISC
