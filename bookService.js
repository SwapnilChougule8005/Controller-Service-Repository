const bookRepository = require('../repository/bookRepository');

const bookService = {
    getAllBook: () => {
        return bookRepository.findAll();
    },

    getBookById: (id) => {
        return bookRepository.findById(id);
    },

    addBook: (id, updatedBook) => {
        return bookRepository.update(id, updateBook);
    },

    deleteBook: (id, updateBook) => {
        return bookRepository.delete(id);
    }
};

module.exports = bookService;