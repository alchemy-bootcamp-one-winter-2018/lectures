'use strict';

// prompt for an answer
// save it
// put it on the DOM

function Question (questionText, category) {
    this.text = questionText;
    this.category = category;
    this.parentId = category + '-questions';

    this.answer = null;
}

Question.prototype.ask = function () {
    this.answer = prompt(this.text);
    this.render();
};

Question.prototype.render = function () {
    // find the parent element
    const ele = document.getElementById(this.parentId);

    // create the element
    const p = document.createElement('p');
    p.textContent = `Q: ${this.text} && A: ${this.answer}`;

    // append new element to parent
    ele.appendChild(p);
};

const questionOne = new Question('What time is it?', 'yes');
// questionOne.ask();
// questionOne.render();

const questionTwo = new Question('ice cream?', 'other');
// questionTwo.ask();
// questionTwo.render();







// bad jokes
const it = {
    is: function () {
        console.log(this); // what is this?
    }
};

it.is(); // this = the thing on the left of the period








// legit constructor function
function Book(title, author, hasRead) {
    this.title = title;
    this.author = author;
    this.hasRead = hasRead;

    // this.markAsRead = function () {
    //     this.hasRead = true;
    // };

    // this.createLi = function () {
    //     const li = document.createElement('li');
    //     li.textContent = this.title + ' by ' + this.author;
    //     return li;
    // };
}

// attach methods to prototype property instead of in the constructor function
Book.prototype.createLi = function () {
    const li = document.createElement('li');
    li.textContent = this.title + ' by ' + this.author;
    return li;
};

Book.prototype.renderRow = function () {
    // find the parent
    const tbody = document.querySelector('#books-table tbody');

    // create the element, add content
    const tr = document.createElement('tr');
    const titleTd = document.createElement('td');
    const authorTd = document.createElement('td');
    const hasReadTd = document.createElement('td');

    titleTd.textContent = this.title;
    authorTd.textContent = this.author;
    hasReadTd.textContent = this.hasRead; 

    // append to parent
    tr.appendChild(titleTd);
    tr.appendChild(authorTd);
    tr.appendChild(hasReadTd);

    tbody.appendChild(tr);
};

// use key word "new" to create an instance of Book
const book7 = new Book('alice in wonder','lewis',false);
book7.renderRow();

const book8 = new Book('alice in space','lewis',false);

console.log(book7);


// DIY constructor function
function createBook (title, author, hasRead) {
    // add parameters to an object
    const newBook = {
        title: title,
        author: author,
        hasRead: hasRead,
        markAsRead: function () {
            this.hasRead = true;
        },
        createLi: function () {
            const li = document.createElement('li');
            li.textContent = this.title + ' by ' + this.author;
            return li;
        }
    };

    // return that object
    return newBook;
}

const book0 = createBook('lalala', 'moo', true);
console.log(book0);
const book5 = createBook('hellow', 'moo', false);

/*
// ye old object literals
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

const books = [book0,book,book2,book3,book5];
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

*/