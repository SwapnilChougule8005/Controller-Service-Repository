const books = [];

const bookRepository = {
    findAll: () => {
        return books;
    },

    findId: (id) => {
        return books.find(book => book.id === id);
    },

    create: (book) => {
        books.push(book);
        return book;
    },

    update: (id, updateBook) => {
        const index = book.findIndex(book => book.id === id);
        if(index !== -1) {
            books[index] = { ...books[index], ...updatedBook};
            return books[index];
        }
        return null;
    },

    delete: (id) => {
        const index = books.findIndex(book => book.id === id);
        if(index !== -1) {
            return books.splice(index, 1);
        }
        return null;
    }

}

module.exports = bookRepository;