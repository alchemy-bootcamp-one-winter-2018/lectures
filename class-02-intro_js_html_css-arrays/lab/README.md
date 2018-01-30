# Week 1 Project: About Me
## Assignment Overview: Lab for Class 2

- Design a guessing game about you that involves **FIVE** yes/no questions. Be creative and fun and whimsical. Or not. It's up to you!
- As we progress through the week, new user stories will be added to the "About Me" project to guide the development of new features.

## User Stories for "About Me" (MVP)

User stories are a device commonly used in software development to identify what the functionality and design of a product should be by highlighting the interests and motivations of people with varied multiple points of view. User stories typically take the form of, "As X, I want Y, so that Z" but do not necessarily need that structure.

"MVP" = "Minimum Viable Product" which is the most basic successful functionality of our project. Extensions, added features, and other enhancements fall under the category of "Stretch Goals."

- As a student, I want to create an About Me page as a demonstration of my skills with HTML.
- As an eventual job seeker, I want to practice creating a portfolio page so that I can make myself appealing to potential employers.
- As an eventual job seeker, I would like to display content about myself (such as a short bio, my education, an overview of my job experience, and my goals) so that potential employers can quickly learn a few things about me.
- As a fun-loving human being, I want to give the visitors to my About Me page a guessing game that shows how fun-loving and interesting I am.
- As a developer, I want to use semantic elements to structure my index.html page, so it will be easy to understand the structure of my code in the future.
- As a developer, I want to create a simple script for my index.html page using JavaScript, so that I can use the browser to capture data from and send responses to the user.
- As a developer, I want to receive and use the user's name, so that the program is personalized to their experience.
- As a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me.
- As a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers.
- As a developer, I want well structured console messages so that I can easily debug my code.
- As a developer, I want to track my code using git so I have the ability to work with others, manage my revisions, and keep a thorough record of my progress.
- As a visitor, I want to be able to respond with only the first letter of yes or no so that I don't have to type as much.
- As a visitor, I want to be able to respond with upper or lowercase letters so that I don't have to worry about matching an exact case type.


### User Stories (Stretch Goals)
- As a developer, I want to find and use another built in String method in my code, so I can practice my documentation reading. 
- As a developer, I want to use a child selector in my CSS, so I can practice my CSS selectors.


## Technical Requirements for "About Me"

- Add our base configuration files to the project you started yesterday
    - Include a `README.md`, a `.gitignore`, and a `.eslintrc.json`.
- Structure your project directory with an `index.html` file, a `style.css` file, and an `app.js` file. Get the files "wired up together" so to speak.
    - Your project's file structure should look like this:
        ```
            about-me
            ├── .eslintrc.json
            ├── .gitignore
            ├── README.md
            ├── index.html
            ├── app.js
            └── main.css
        ```
- Write *clean* HTML, CSS, and JavaScript with correct indentation and syntax. Look at examples online and in your textbook. 
    - **Your JS must pass the rules in the linter that we installed.**
- Your JS file contains a 'use strict' declaration at the top.
- The questions in the guessing game are a mix of yes/no answers.
- The questions use `prompt()` instead of `confirm()`.
- User input accepts either y/n or yes/no responses, regardless of being upper or lower case.
    - Use either `.toUpperCase()` or `.toLowerCase()` to accommodate users entering all-caps Y/N or YES/NO answers.
- Log useful and descriptive `console.log()` messages.
    - Messages are well written and correctly logging to the browser console for each question of the guessing game.
- Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have.
- Add, Commit, Push process is being followed; evident in GitHub that commits are made regularly and with good commit messages.


## Submitting Your Assignment

Submit a link to your project's GitHub repo via Canvas.
> Assignments that do not meet the required professional standards will not be graded. We’ll ask you to update your work to meet the requirements and resubmit. Required professional standards include:
a clear commit history with commit messages that describe why the changes were made; your code passes an eslint test.