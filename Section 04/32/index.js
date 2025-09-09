const http = require("http");

const routes = {
  GET: {
    "/": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    },
    "/contact": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Contact Page");
    },
  },
  POST: {
    "/data": (req, res) => {
      let body = "";
      req.on("data", chunk => (body += chunk.toString()));
      req.on("end", () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ received: body }));
      });
    },
  },
};

const server = http.createServer((req, res) => {
  const methodRoutes = routes[req.method];
  if (methodRoutes && methodRoutes[req.url]) {
    methodRoutes[req.url](req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => console.log("Server running at http://localhost:3000"));
