'use strict';
/*
book
    - title
    - author
    - length (number)
    - copyright date
    - publisher
    - genre
    - hasRead (boolean)
    - favorite (boolean)

    - markAsRead ()
    - markAsFav ()
    - update ()
*/

const book = {
    title: 'Little Goose',
    author: 'Big Goose',
    hasRead: false,
    markAsRead: function () {
        // will change hasRead to true
        this.hasRead = true;
    },
    createLi: function () {
        // will return a li with the book's info
        const li = document.createElement('li');
        li.textContent = this.title + ' by ' + this.author;
        return li;
    }
};

const book2 = {
    title: 'Little Bear',
    author: 'Big Bear',
    hasRead: true,
    markAsRead: function () {
        // will change hasRead to true
        this.hasRead = true;
    },
    createLi: function () {
        // will return a li with the book's info
        const li = document.createElement('li');
        li.textContent = this.title + ' by ' + this.author;
        return li;
    }
};

const book3 = {
    title: 'Little Rabbit',
    author: 'Big Rabbit',
    hasRead: false,
    markAsRead: function () {
        // will change hasRead to true
        this.hasRead = true;
    },
    createLi: function () {
        // will return a li with the book's info
        const li = document.createElement('li');
        // li.textContent = this.title + ' by ' + this.author;
        li.textContent = `${this.title} by ${this.author}`;
        return li;
    }
};

const books = [book,book2,book3];
for (let i = 0; i < books.length; i++) {
    renderBook(books[i]);
}

function renderBook (book) {
    // let listId = 'to-read';
    // if (book.hasRead) listId = 'read';

    const listId = book.hasRead ? 'read' : 'to-read';
    const list = document.getElementById(listId);
    const li = book.createLi();

    list.appendChild(li);
}