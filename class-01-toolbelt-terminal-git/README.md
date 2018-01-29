## **Week 1: Introduction to Web Development**
# Class 1: Introduction to the Tools and Fundamentals of Development

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Welcome! Class overview and introductions
1. Your new tools
1. Demo: Build a website
1. Lab Prep

## Learning Objectives

- Create folders and files for a project using the command line.
- Navigate through folders, view and create files, and open folders and files in VS Code using the command line.
- Create a web page using organized, hierarchical HTML.
- Capture user input using the browser's `prompt` and `confirm` methods.
- Create an interactive experience for a user using the browser's `alert` method.
- Create an interactive web page by including JavaScript in a `<script>` tag.

## Notes

- Welcome!
  - Introductions
  - Class info
    - Schedule: 9-12 lecture, 12-1 lunch, 1-6 lab
    - Class tools: GitHub Repo, Canvas, Ryver
    - Modules:
      - Week 1: Intro to Web Development
      - Week 2: Working with the DOM
      - Week 3: Working with Libraries
      - Week 4: Project Week!
    - Assignments, Quizzes, Grading
      - In Canvas: "Modules", also check out the Calendar and its agenda view
      - Percentage Breakdown:
        - Attendance (10%)
        - Prework (5%)
        - Readings/Discussions + Learning Journals (10%)
        - Labs (30%)
        - Quizzes twice a week (W, F) (10%)
        - Final Project + Exam (30%)
        - Surveys (5%)
      - TA's will do the bulk of the grading; SJ will read/grade learning journals
      - Readings and discussions
        - Don't expect to absorb 100% of what you read. Instead, take note of where to find information in your books so you can refer back to them: the dark pages especially tend to be helpful.
      - Late work:
        - **Resubmissions will be accepted up to one week after an assignment's due date**
        - On time submissions with more than 2pts will be regraded w/o penalty
        - On time submissions with less than 2pts will be regraded w/ 2pt penalty
        - Late learning journals will not be graded
      - To continue into Bootcamp: Part Two, you must meet two of the three requirements:
        - 90% or more final grade
        - 70% or more on the entrance exam (at the end of week 3)
        - instructor approval

- Your new tools!
  - Terminal
    - what it is: a text driven REPL of `finder` or `file explorer`
    - what we use it for: 
        - navigating your computer's file system 
        - using CLI (Command Line Interface) tools like Git
  - VS Code
    - what it is: an integrated developer environment (IDE)
    - what we use it for:
        - writing and editing code
        - linting our code with plug ins
            - [installing Node](./install-node.md) and EsLint
                - [Node.js](https://nodejs.org/en/)
  - Chrome and Chrome Developer Tools
    - what is it: your browser and its built in tools for making development easier
    - what we use it for: running and debugging your code
  - Google and online resources
    - Useful resources
        - [Stack Overflow](https://stackoverflow.com/): Q&A forum for devs
        - [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web): documentation for HTML, CSS, JS
  - Git
    - what it is: a version control system for programming projects
    - what we use it for: tracking changes in and managing versions of our project
  - Github
    - what it is: an online hub for sharing Git repositories (projects)
    - what we use it for: sharing your project's code

- Demo: Starting a project with Git
    - `git init`
    - `git remote add <remote-name> <remote-url>`
    - `git add <file-name>` 
    - `git commit -m 'descriptive message'`
    - `git push -u <remote-name> <branch-name>`
    - NOTES:
        - when replacing placeholders such as `<remote-url>`, remove the `<>`
        - the `-u` flag only needs to be used the first time you push your branch

- Demo: Hello world!
  - Hypertext Markup Language (HTML):
    - structures the content on our site
    - syntax and structure
  - JavaScript (JS):
    - makes our site interactive
    - data types and variables
    - built in browser functions: `prompt()`, `alert()`, `confirm()` and `console.log()`

- Lab Prep
  - Build an interactive website
    - Track it with Git and share it on GitHub
  - Start your learning journal
  - Install Node and EsLint

## Readings

- HTML Chapter 1: "Structure"
- HTML Chapter 8: "Extra Markup"
- HTML Chapter 17: "HTML5 Layout"
- HTML Chapter 18: "Process & Design"
- JS Chatper 1: "The ABC of Programming"

**HTML Chapter 1: "Structure"**

- p.15: How pages use structure
- p.20: HTML describes the structure of pages
- pp.21-22: Tags as containers (great graphic page)
- p.24: Tags
- p.26: Attributes
- p.33: Code in a CMS

**HTML Chapter 8: "Extra Markup"**

- p.179: Evolution of HTML
- p.181: Doctypes
- p.182: Comments
- p.183: Class & id attributes
- p.185: Block vs. inline
- p.191: Meta tags
- p.193: Escape characters
- p.194: Special characters

**HTML Chapter 17: "HTML5 Layout"**

- Semantic HTML
- Traditional layout vs. HTML5
- Header, footer, nav, aside, section, figure, div

**HTML Chapter 18: "Process & Design"**

- Things to think about when starting a project
  - Who is the site for?
  - User stories
  - Sitemaps
  - Wireframes
- Visual hierarchy, grouping, navigation

**JS Chapter 1: "The ABC of Programming"**

- p.16 	Designing a script
- p.28 	Objects & properties
- p.30 	Events
- p.36 	Browsers & document object
- p.40 	How a browser sees a web page
- p.44 	How HTML, CSS, JS work together			
- p.45 	Progressive enhancement
- p.51 	JavaScript runs where it is found in the HTML