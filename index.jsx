import React from 'react';

export default function textToReactMarkup(text) {
	if (!text || text === '' || (typeof text !== 'string' && !(text instanceof String))) {
		return [];
	}
	return text.split("\n\n")
		.filter(x => x !== '')
		.map((par, i) =>
			<p key={i}>
			{
				par.split("\n")
					.filter(x => x !== '')
					.map((line, i) =>
						<span key={i}>{line}<br /></span>
					)
			}
			</p>
		);
}
