var indexServer = require("./routerServer");
var indexRouter = require("./myRouter");
 
indexServer.start(indexRouter.route);