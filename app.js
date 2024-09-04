const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req, url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    const id = pathname.split('/')[2];

    if(pathname === '/books' && method === 'GET'){
        bookController.getBooks(req, res);
    }else if (pathname.match(/\/books\/\W+/) && method === 'GET'){
        req.params = {id};
        bookController.getBook(req, res);
    }else if(pathname === '/books' && method === 'POST'){
        bookController.createBook(req, res);
    }else if(pathname.match(/\/books\/\W+/) && method === 'PUT') {
        req.params = {id};
        bookController.updateBook(req, res);
    }else if(pathname.match(/\/books\/\W+/) && method === 'DELETE'){
        req.params = {id};
        bookController.deleteBook(req, res);
    }else {
        res.writeHead(404, {'Content-type' : 'application/json'});
        res.end(JSON.stringify({message : 'Not Found'}));
    }
})

server.listen(3000, () => {
    console.log('Server id Listing on port 3000');
})