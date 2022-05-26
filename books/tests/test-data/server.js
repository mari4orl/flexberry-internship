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
  const book = Number(request.query.book);

  if (request.method === 'GET' && request.path === '/meetings' && !Number.isNaN(speaker)) {
    const speakersArr = router.db.get('reports').filter((r) => r.speakerId === speaker).value();
    const mapArr = speakersArr.map(report => report.meetingId);
    const newMeetings = router.db.get('meetings').filter((meeting) => mapArr.some(el => meeting.id === el)).value();

    response.json(newMeetings);
  } else if (request.method === 'GET' && request.path === '/meetings' && !Number.isNaN(book)) {
    const booksArr = router.db.get('reports').filter((r) => r.bookId === book).value();
    const mapArr = booksArr.map(report => report.meetingId);
    const newMeetings = router.db.get('meetings').filter((meeting) => mapArr.some(el => meeting.id === el)).value();

    response.json(newMeetings);
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
