## **Week 1: Introduction to Web Development**
# Class 2: Basics of JS and HTML, including Arrays; CSS Introduction

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

<hr></hr>

#### Schedule
1. Announcements
1. JS: arrays, operators, control flow
1. HTML: more semantic tags, attributes, inline vs block elements
1. CSS: basic syntax and selectors
1. Demo: Add conditional logic to yesterday's demo
1. Lab Prep

#### Announcements:
- Quiz percentage of your grade: part of pre-work (so total of 5%)

## Learning Objectives
- Store and access data using arrays.
- Control the flow of a script file using conditional statements.
- Lint a JavaScript file to check for syntax errors using EsLint.
- Understand the structure of an HTML file and tags including: `<DOCTYPE>`, `<head>`, `<title>`, `<body>`, and `<script>`
- Link an external script using the `<script>` tag.
- Apply styling to an HTML element using CSS.

## Notes

- JavaScript
  - Arrays: store similar data
    - have properties that tell us about it and methods that do things to or with it
        - `.length`
        - `.push()`, `.pop()`, `.splice()`
        - Documentation for these are on MDN!
  - Operators: manipulate and create new data
    - comparing two values with `==` and `===`
    - comparing multiple values with `&&` and `||`
    - "evaluating an expression"
  - Control Flow: run or avoid code based on data
    - if and if/else statements
    - switch statements

- HTML
  - more semantic html tags
    - semantic means it describes the content it contains
        - nav
        - header
        - footer
        - aside
        - strong
        - em
    - not semantic but still highly useful!
        - div
        - span
  - attributes provide meta information about an element
    - `<p class="highlight">` (attribute-name="value")
    - global vs element specific
        - id, class, contenteditable
        - src, href, type, lang
  - linking JS and CSS files

- CSS
  - [its true power](http://www.csszengarden.com/)
  - syntax
    ```css
        selector {
            property-name: value;
        }
    ```
  - selectors
    - element names: `body`
    - id: `#questions`
    - class: `.`
    - any descendant: `section h1`
    - immediate child: `body > h1`

- Demo: Add to our demo from yesterday
    - Give different alerts and/or prompts depending on a user's answers
    - Save all their answers in an array

- Lab Prep
  - Project file structure:
    ```
        about-me
        ├── .eslintrc.json
        ├── .gitignore
        ├── README.md
        ├── index.html
        ├── app.js
        └── main.css
    ```
    - `.eslintrc.json`: configuration settings for our linter
    - `.gitignore`: tells git to ignore file we don't want to track
    - `README.md`: provides other developers with information about our project
  - Understanding user stories:
    - As a (type of user), I want (feature), so that (goal).
  - Writing commit messages
    - Think of tracking your expenses: why did you make this change? 
    - How does it affect the behavior or your app?

---

## Readings

- HTML Chapter 2: "Text"
- HTML Chapter 17: "HTML5 Layout"
- HTML/CSS Chapter 10: "Introducing CSS"
- JS Chapter 1: "The ABC of Programming"- HTML/CSS Chapter 2: "Text"
- JS Chapter 2: "Basic JavaScript Instructions"

## HTML

**HTML Chapter 2: "Text"**

- p.43: heading tags
- p.44: paragraph tags
- p.49: visual editors (WYSIWYG)
- lots of little text formatting pieces throughout the chapter (bold, italic, strong, emphasis, subscript, superscript, quotes, citations, etc.)

**HTML Chapter 17: "HTML5 Layout"**

- Semantic HTML
- Traditional layout vs. HTML5
- Header, footer, nav, aside, section, figure, div

## CSS

**HTML Chapter 10: "Introducing CSS"**

- p.229: Understanding CSS: Thinking inside the box
- p.230-1: How CSS associates with HTML and affects their display
- p.235: Linking your CSS file (vs. using a \<style> tag)
- pp.237-8: CSS selectors (with VERY handy reference chart)
- p.239: How CSS rules cascade
- p.240: Inheritance
- p.242: Browser quirks

## JS

**JS Chatper 1: "The ABC of Programming"**

- p.16 	Designing a script
- p.28 	Objects & properties
- p.30 	Events
- p.36 	Browsers & document object
- p.40 	How a browser sees a web page
- p.44 	How HTML, CSS, JS work together			
- p.45 	Progressive enhancement
- p.51 	JavaScript runs where it is found in the HTML

**JS Chapter 2: "Basic JavaScript Instructions"**

- p.56 	Statements
- p.57 	Comments
- p.58 	Variables
- p.62 	Data types
- p.69 	Rules for naming variables
- pp.70-73 	Arrays
- p.74 	Expressions
- p.75 	Operators (Arithmetic, p.76) (String, p.78)