import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
static async getInitialProps(ctx) {
	const initialProps = await Document.getInitialProps(ctx)
	return { ...initialProps }
}  

render() {
	return (
	<Html>
		<Head>
			<link rel="stylesheet" href="/assets/css/theme.min.css"/>
			<link rel="stylesheet" href="/assets/css/custom.css"/>
			<link rel="stylesheet" href="/assets/fonts/feather/feather.css"></link>
			<link rel="icon" href="/assets/img/fav.png"></link>             
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com"/>
			<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;700&display=swap" rel="stylesheet"></link>
			{/* <link type="text/javascript" src="/assets/js/gtag.js"></link> */}
			{/* <script src="/assets/js/gtag.js" defer></script> */}
		</Head>
		<body>          
		
		<Main />
		<NextScript />
				
		</body>
	</Html>
	)
}
}

export default MyDocument