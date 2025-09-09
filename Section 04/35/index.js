const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;

  switch (method) {
    case "GET":
      switch (path) {
        case "/":
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Hey");
          break;
        case "/about-me":
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("I am a student of CSE");
          break;
        case "/tweet":
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Tweet 1 \nTweet 2");
          break;
        default:
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("GET route not found");
      }
      break;

    case "POST":
      switch (path) {
        case "/tweet":
          res.writeHead(201, { "Content-Type": "text/plain" });
          res.end("Tweet created successfully");
          break;
        default:
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("POST route not found");
      }
      break;

    default:
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Bad Request");
  }
});

server.listen(8000, () => {
  console.log("Server is listening at port 8000");
});
