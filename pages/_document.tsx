import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

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

  render() {
    return (
      <Html>
        <Head>
          
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/css/jquery-ui.min.css" />
          <link rel="stylesheet" href="/css/meanmenu.min.css" />
          <link rel="stylesheet" href="/css/owl.carousel.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/ionicons.min.css" />
          <link rel="stylesheet" href="/css/nivo-slider.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/responsive.css" />
          <script src="/js/vendor/modernizr-2.8.3.min.js"></script>
        </Head>
        <body>

            <Main />


          <NextScript />
          <script src="/js/vendor/jquery-v3.4.1.min.js"></script>
          <script src="/js/popper.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/magnific-popup.js"></script>
          <script src="/js/jquery.meanmenu.js"></script>
          <script src="/js/jquery-ui.min.js"></script>
          <script src="/js/wow.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/jquery.nivo.slider.js"></script>
          <script src="/js/jquery.elevateZoom-3.0.8.min.js"></script>
          <script src="/js/jquery.parallax-1.1.3.js"></script>
          <script src="/js/jquery.counterup.min.js"></script>
          <script src="/js/waypoints.min.js"></script>
          <script src="/js/plugins.js"></script>
          <script src="/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
