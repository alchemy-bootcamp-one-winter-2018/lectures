'use strict';

function Post (title,content,tags) {
    this.title = title;
    this.content = content;
    this.tags = tags || [];
    this.timestamp = new Date();
}

Post.prototype.publish = function () {
    const section = document.getElementById('posts');
    const article = document.createElement('article');

    const ul = document.createElement('ul');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = this.title;
    p.textContent = this.content;

    article.appendChild(h1);
    article.appendChild(p);
    article.appendChild(ul);

    for (let i = 0; i < this.tags.length; i++) {
        const li = document.createElement('li');
        li.textContent = this.tags[i];
        ul.appendChild(li);
    }

    article.classList.add('post');
    section.appendChild(article);
};

const postA = new Post(
    'How to JavaScript',
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nam atque minima, corporis itaque inventore maiores accusantium 
    quaerat at possimus aperiam a veritatis quisquam nemo vero culpa 
    vel voluptatem natus ipsam?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nam atque minima, corporis itaque inventore maiores accusantium 
    quaerat at possimus aperiam a veritatis quisquam nemo vero culpa 
    vel voluptatem natus ipsam?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nam atque minima, corporis itaque inventore maiores accusantium 
    quaerat at possimus aperiam a veritatis quisquam nemo vero culpa 
    vel voluptatem natus ipsam?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nam atque minima, corporis itaque inventore maiores accusantium 
    quaerat at possimus aperiam a veritatis quisquam nemo vero culpa 
    vel voluptatem natus ipsam?`,
    ['lorem','javascript','programming']
);

const postB = new Post(
    'How to HTML',
    `Potatot ipsum dolor sit amet consectetur adipisicing elit. 
    Nam atque minima, corporis itaque inventore maiores accusantium 
    quaerat at possimus aperiam a veritatis quisquam nemo vero culpa 
    vel voluptatem natus ipsam?
    Potatot ipsum dolor sit amet consectetur adipisicing elit. 
    Nam atque minima, corporis itaque inventore maiores accusantium 
    quaerat at possimus aperiam a veritatis quisquam nemo vero culpa 
    vel voluptatem natus ipsam?`,
    ['lorem','html']
);

const postC = new Post(
    'How to not water a plant',
    `Potato? Potato?Potato?  Potato? Potato?Potato? Potato? Potato?Potato? 
    Potato? Potato?Potato? Potato? Potato?Potato? 
    Potato? Potato?Potato? Potato? Potato?Potato? Potato? Potato?Potato? 
    Potato? Potato?Potato? Potato? Potato?Potato? Potato? Potato?Potato?`,
    ['lorem','potato']
);

const posts = [postA,postB,postC];
for (let i = 0; i < posts.length; i++) {
    posts[i].publish();
}

// TODO get data from form and put on DOM as new post
const form = document.querySelector('form');

// x - add submit event listener to our form
form.addEventListener('submit', function () {
    event.preventDefault();
    console.log('consoles on submit!');

    // x - get the data from the form
    const title = document.getElementById('title').value;
    console.log('the title they wrote', title);
    console.log(this.title.value);

    const content = this.text.value;
    const tags = this.tags;
    console.log('content', content);
    console.log('tags', tags);

    // x - create the article
    const newPost = new Post (title, content);
    newPost.publish();
});