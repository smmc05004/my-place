import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

// https://nextjs.org/docs/advanced-features/custom-document
// react 18버전 때문에 나는 에러로 보임
// react 18버전을 위해선 MyDocument 커스터마이징 피하라고 권고하는데 styled-components 추가해서...
export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			// Run the React rendering logic synchronously
			ctx.renderPage = () =>
				originalRenderPage({
					// Useful for wrapping the whole react tree
					// enhanceApp: (App) => App,
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
					// Useful for wrapping in a per-page basis
					enhanceComponent: (Component) => Component,
				});

			// Run the parent `getInitialProps`, it now includes the custom `renderPage`
			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render(): ReactElement {
		const kakaoKey = '';

		return (
			<Html lang="ko">
				<Head>
					<script
						type="text/javascript"
						src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services`}
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
