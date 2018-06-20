import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

// noinspection JSUnusedGlobalSymbols
export default class MyDocument extends Document {
  // noinspection JSUnusedGlobalSymbols
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const { req: { locale, localeDataScript } } = context;
    const {
      html,
      head,
      errorHtml,
      chunks,
    } = context.renderPage();

    return {
      ...props,
      html,
      head,
      errorHtml,
      chunks,
      locale,
      localeDataScript,
    };
  }

  render() {
    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${this.props.locale}`;

    return (
      <html lang={this.props.locale}>
        <Head>
          <title>Next.js Bootstrap</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-L+XK540vkePe55E7PAfByfvW0XpsyYpsifTpgh/w8WvH6asVg/c2zqp0EfZfZTbF" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <script src={polyfill} />
          <script
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
