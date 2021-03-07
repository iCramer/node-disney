var shortid = require('shortid');
// To generate a unique ID, use shortid.generate()
function createTraceObj(req, res, next) {
  const id = shortid.generate();
  req.trace = {
    id: id,
    timestamp: new Date().getTime(),
    path: req.baseUrl
  };
  res.setHeader('x-request-id', id);

  next();
}

module.exports = createTraceObj;
