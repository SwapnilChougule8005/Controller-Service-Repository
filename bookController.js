const bookService = require('../services/bookService');

const bookController = {
    getBooks: async (req, res) => {
        const books = await booksService.getAllBooks();
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(books));
    },

    fetBook: async (req, res) => {
        const id = req.params.id; 
        const book = await bookService.getBookById(id);

        if(book) {
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(book));
        }
        else{
            res.writeHead(404, {'Content' : 'application/json'});
            res.end(JSOn.stringify({message: 'Book not found'}));
        }
    },

    createBook: async (req, res) => {
        let body = '';
        req.on(data, chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            const book = JSON.parse(body);
            const newBook = await bookService.addBook(book);
            res.writeHead(201, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(newBook));
        });
    },

    updateBook: async (req, res) => {
        const id = req.params.id;
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            const updateBook = JSON.parse(body);
            const book = await bookService.updateBook(id, updateBook);

            if(book){
                res.writeHead(200, {'content-Type' : 'application/json'});
                res.end(JSON.stringify({message: "Book not found"}))
            }
        });
    },

    deleteBook: async (req, res) => {
        const id = req.params.id;
        const result = await bookService.deleteBook(id);

        if(result) {
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify({message:"Book deleted"}));
        }
        else{
            res.writeHead(404, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify({message:'Book not found'}));
        }
    }
};

module.exports = bookController;