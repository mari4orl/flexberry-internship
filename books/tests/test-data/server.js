/* eslint-disable no-console */
// eslint-disable-next-line no-undef
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./tests/test-data/db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

function responseInterceptor(req, res, next) {
  var originalSend = res.send;

  res.send = function() {
    let body = arguments[0];

    if (req.method === 'DELETE') {
      let urlSegms = req.url.split('/');
      let idStr = urlSegms[urlSegms.length - 1];
      let id = parseInt(idStr);
      id = isNaN(id) ? idStr : id;

      let newBody = {};
      console.log('hi', body==='\n');
      // if (body!=='') {
      //   newBody = Object.assign({}, JSON.parse(body));
      // }
      newBody.id = id;
      arguments[0] = JSON.stringify(newBody);
    }

    originalSend.apply(res, arguments);
  };

  next();
}

server.use(responseInterceptor);

server.use((request, response, next) => {
  const speaker = Number(request.query.speaker);
  if (request.method === 'GET' && request.path === '/meetings' && !Number.isNaN(speaker)) {
    const meetings = router.db.get('meetings').filter((b) => b.speakerId === speaker).map((meeting) => {
      meeting.reviews = router.db.get('reviews').filter((r) => r.meetingId === meeting.id).value();

      return meeting;
    }).value();

    response.json(meetings);
  } else {
    next();
  }
});

// Use default router
server.use(router)

let port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`);
})
