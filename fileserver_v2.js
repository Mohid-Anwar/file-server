var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/" && req.method === "GET") {
      fs.appendFile("log.txt", req.url + "\n", function (err) {
        if (err) throw err;
      });
      res.writeHead(200, { "Content-Type": "text/html" }); // Corrected content type
      res.end("We are at Main Route");
    } else if (req.url === "/read" && req.method === "GET") {
      fs.appendFile("log.txt", req.url + "\n", function (err) {
        if (err) throw err;
      });

      fs.readFile("a.txt", "utf-8", function (err, data) {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/html" }); // Corrected content type
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" }); // Corrected content type
          res.end(data);
        }
      });

      // res.writeHead(200, { "Content-Type": "text/html" }); // You can remove this commented code
      // res.end("We are at Read Route");
    } else if (req.url === "/write" && req.method === "GET") {
      fs.appendFile("log.txt", req.url + "\n", function (err) {
        if (err) throw err;
      });
      fs.writeFile("b.txt", "Hello Worldd!", function (err) {
        // Write "Hello World!" to the "b.txt" file
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/html" }); // Set response status to 500 (Internal Server Error)
          res.end("Error creating/writing to the file");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" }); // Set response status to 200 (OK)
          res.end("File has been created and data has been written"); // Send a success message
        }
      });
    } else {
      fs.appendFile("log.txt", req.url + "\n", function (err) {
        if (err) throw err;
      });
      res.writeHead(404, { "Content-Type": "text/html" }); // Corrected content type
      res.end();
    }
  })
  .listen(3000);

console.log("Server is running at port 3000"); // Added console log
