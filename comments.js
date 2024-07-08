const http = require('http');
const fs = require('fs');

// Create web server
// Create a web server that listens on port 3000 and serves the following HTML file. The final file should be in a file called comment.js.
<!DOCTYPE html>
<html>
    <body>
        <h1>I am a header</h1>
        <p>I am a paragraph.</p>
    </body>
</html>
// The server should listen on port 3000.


const server = http.createServer((req, res) => {
    fs.readFile('./comment.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
