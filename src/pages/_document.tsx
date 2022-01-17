import { Html, Head, Main, NextScript } from 'next/document';

import { DefaultPage } from 'ui/templates';

const Document = () => {
	return (
		<Html>
			<Head />
			<body>
				<DefaultPage />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
