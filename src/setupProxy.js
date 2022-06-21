/*eslint no-undef: "error"*/
/*eslint-env node*/

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    // '/openapi',
    // createProxyMiddleware({
    //   target: 'http://openapi.data.go.kr',
    //   changeOrigin: true,
    // }),
    '/region',
    createProxyMiddleware({
      target: `http://${process.env.REACT_APP_API_DOMAIN}`,
      changeOrigin: true,
    }),
  );
};
