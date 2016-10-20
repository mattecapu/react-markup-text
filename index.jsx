import React from 'react';

export default function longTextToReactMarkup(text) {
	return text.split("\n\n")
		.map((par, i) =>
			<p key={i}>
			{
				par.split("\n")
					.map((line, i) =>
						<span key={i}>{line}<br /></span>
					)
			}
			</p>
		);
}
