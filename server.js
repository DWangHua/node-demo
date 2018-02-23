const http = require('http');
const url = require('url');
const port = process.argv[2];

if (!port) {
  console.log('请指定端口号 例如: node server.js 9999 这样');
  process.exit(1);
}
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const rawUrl = req.url;
  let query = '';
  if (rawUrl.indexOf('?') !== -1) {
    query = rawUrl.substring(rawUrl.indexOf('?'));
  }
  const pathNoQuery = parsedUrl.pathname;
  const queryObj = parsedUrl.query;
  const method = req.method.toLowerCase();
  if (pathNoQuery === '/favicon.ico') res.end();

  if (pathNoQuery === '/main.js') {
    res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
    res.write('alert("JS执行")');
  } else if (pathNoQuery === '/style.css') {
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
    res.write('body{background-color: red;} h1{color: #ddd}');
  } else if (pathNoQuery === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="/style.css">
      <title>Document</title>
    </head>
    <body>
      <h1>你好</h1>
      <script src="/main.js"></script>
    </body>
    </html>`)
  } else {
    res.statusCode = 404;
  }
  res.end();
});

server.listen(port, () => {
  console.log(`the server is run on http://localhost:${port}`);
});
