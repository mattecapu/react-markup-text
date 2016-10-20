import assert from 'assert';

import React from 'react';
import ReactDOM from 'react-dom/server';

import textToReactMarkup from './index.jsx';

const longText = `Nel mezzo del cammin di nostra vita
mi ritrovai per una selva oscura,
ché la diritta via era smarrita.

Ahi quanto a dir qual era è cosa dura
esta selva selvaggia e aspra e forte
che nel pensier rinova la paura!

Tant’è amara che poco è più morte;
ma per trattar del ben ch’i’ vi trovai,
dirò de l’altre cose ch’i’ v’ho scorte.`;

const reactMarkup = `<div><p><span>Nel mezzo del cammin di nostra vita<br/></span><span>mi ritrovai per una selva oscura,<br/></span><span>ché la diritta via era smarrita.<br/></span></p><p><span>Ahi quanto a dir qual era è cosa dura<br/></span><span>esta selva selvaggia e aspra e forte<br/></span><span>che nel pensier rinova la paura!<br/></span></p><p><span>Tant’è amara che poco è più morte;<br/></span><span>ma per trattar del ben ch’i’ vi trovai,<br/></span><span>dirò de l’altre cose ch’i’ v’ho scorte.<br/></span></p></div>`;

assert.equal(
	ReactDOM.renderToStaticMarkup(
		<div>
			{textToReactMarkup(longText)}
		</div>
	),
	reactMarkup
);
