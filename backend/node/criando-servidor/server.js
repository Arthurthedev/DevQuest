const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Home page')
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('About page')
    } else {
        res.statusCode = 404;
        res.end('Página não encontrada :( ');
    }
})

server.listen(3000, () => {
    console.log('Servidor em execução na porta http://localhost:3000/');

})