# File Server Basic

<p align="center">
  <img src="https://socialify.git.ci/Mohid-Anwar/express-teams-employees/image?language=1&name=1&owner=1&pattern=Formal%20Invitation&theme=Dark" alt="express-teams-employees" width="640" height="320" />
</p>

## Description

This Node.js application creates a basic HTTP server that handles different routes for reading, writing, and logging files. It utilizes the http and fs (file system) modules to achieve this functionality.

## Features

- Main Route ("/"):
  Handles GET requests to the root route ("/").
  Responds with "We are at Main Route".
  Logs the request URL to a file named log.txt.

- Read Route ("/read"):

  - Handles GET requests to the "/read" route.
  - Reads the contents of a file named a.txt.
  - Sends the file contents as the HTTP response.
  - Logs the request URL to log.txt.

- Write Route ("/write"):

  - Handles GET requests to the "/write" route.
  - Writes "Hello Worldd!" to a file named b.txt.
  - Sends a success message as the HTTP response.
  - Logs the request URL to log.txt.

- 404 Route:
  - Handles requests to routes other than "/", "/read", and "/write".
  - Responds with a 404 status code.
  - Logs the request URL to log.txt.

## Usage

- Access the different routes using a web browser or tools like Postman.
- Perform GET requests to "/", "/read", and "/write" to interact with the server.
- Check the log.txt file to view logged request URLs.

## 🛠️ Installation Steps:

- Clone the Repository

```bash
git clone https://github.com/Mohid-Anwar/file-server.git
cd file-server
```

- Install dependencies:

```bash
npm install
```

- Run the Application

```bash
node fileserver_v2.js
```

- The server will be running at http://localhost:3000.

## 🍰 Contribution Guidelines:</h2>

Contributions are welcome! Fork the repository and submit a pull request.

## 💻 Built with

Technologies used in the project:

- Node.js
- HTTP Module
- fs Module
- VS Code
