const http = require('http');
const fs = require('fs');

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
