const conf = require('./gulp.conf');

const hostName = (process.env.C9_HOSTNAME) ? process.env.C9_HOSTNAME : 'http://localhost/';
const port = (process.env.C9_HOSTNAME) ? 8080 : 3000;

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ]
    },
    open: false,
    host: hostName,
    port: port
  };
};
