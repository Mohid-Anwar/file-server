var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    if (req.url === "/" && req.method === "GET") {
      fs.appendFile("log.txt", req.url, function (err) {
        if (err) throw err;
      });
      res.writeHead(200, { "Content-Type": "test/html" });
      // Q1 : Sir you used res.write in github why did we write in res.end here
      res.end("We are at Main Route");
    } else if (req.url === "/read" && req.method === "GET") {
      fs.appendFile("log.txt", req.url + "/n", function (err) {
        if (err) throw err;
      });

      fs.readFile("a.txt", "utf-8", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "test/html" });
        res.end(data);
      });

      // res.writeHead(200, { "COntent-Type": "test/html" });
      // res.end("We are at Read Route");
    } else {
      fs.appendFile("log.txt", req.url, function (err) {
        if (err) throw err;
      });
      res.writeHead(404, { "COntent-Type": "test/html" });
      res.end();
    }
  })
  .listen(3000);
console.log("Server is running at port 3000");
