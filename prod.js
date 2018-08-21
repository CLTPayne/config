// Get node project production ready for deploying to heroku
// Add the following file in the project root


const helmet = require("helmet");
const compression = require("compression");

module.exports = function(app) {
  app.use(helmet());
  app.use(compression());
};

// Add the following in the app file:

// require(''./prod')(app);

// Add engines info to your package.json:

// "engines":{
//   "node": "10.8.0"
// },
