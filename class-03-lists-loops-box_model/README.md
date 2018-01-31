## **Week 1: Introduction to Web Development**
# Class 3: HTML Lists, Control Flow with JS, and the CSS Box Model

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

### Schedule for today
- Announcements
- Code Review
- HTML Lists and Links
- CSS Box Model
- More JS Control Flow: now w/ loops!
- Git Review and Branching
- Lap Prep

### Announcements
- Quiz 1 will be published this afternoon, and it will be due by 8:59am Friday. More about quizzes:
    - They are open-internet/open-book.
 	- You have unlimited re-takes.
	- They have two main purposes:
  			1. To get you to re-engage with the content in a different way, reinforcing your knowledge.
  			2. To help you prepare for the Code 301 entrance exam, which you will take at the end of Week 3. There is a minimum threshold you must pass on that exam (70%), and also, that exam factors into your grade in this class.

### Learning Objectives
- Identify and implement control flow techniques in JavaScript including ‘for’ loops, ‘while’ and ‘do/while’ loops.
- Link to other websites using the `<a>` tag.
- Understand the differences and uses for HTML list elements.
- Understand the different parts of the CSS box model.
- Create and switch between git branches to better manage our project.


### Notes
- Code review

- HTML
    - lists
        - types: `ul`, `ol`, `dl`
        - use cases
            - dictionaries
            - navigation menus
    - links
        - the `a` tag
        - can link to other websites or sections within our own website

- CSS
    - Box Model
        - how our elements take up space:
            - content height and width
            - padding
            - border
            - margin
    - more selectors
        - psuedo-classes `:hover`, `:link`, `:visited`
        - attribute selectors: `a[href="#"]`

- JavaScript
    -   `'use strict;'` mode!
    - switch statement: an alternate if, else if, else
    - for loop
        - repeats a block of code for a known number of times
    - while loop
        - repeat a block of code until a condition turns false
    - do while loop
        - repeat a block of code at least once, until a condition turns false

- Git review
    - Writing good commit messages
    - Branching!
        - default `master` branch
        - `git checkout -b <branch-name>`
        - `git branch`

- Lab prep
    - create a new branch for today's lab named `guessing-game`
    - **moving forward:** we will not grade anything that 
        - doesn't pass our class linter and 
        - doesn't have descriptive commit messages

---

## Readings

- HTML Chapter 3: "Lists"
- JS Chapter 4: "Decisions & Loops"
- HTML Chapter 13: "Boxes" (CSS)

**HTML Chapter 3: "Lists"**

- p.65: Ordered/numbered lists
- p.66: Unordered/bullet lists
- p.67: Definition lists
- p.68: Nested lists

**JS Chapter 4: "Decisions & Loops"**

- p.148 	Decision making
- p.149 	Evaluating conditionals & conditional statements
- p.150 	Comparison operators: evaluating conditions
- p.152 	Structuring comparison operators
- p.156 	Logical operators
- p.160 	‘If’ statements
- p.162 	‘If...else’ statements
- p.164 	‘Switch’ statements
- p.166 	Type coercion and weak typing
- p.167 	Truthy & falsy values
- p.168 	Checking equality & existence
- p.169 	Short circuit values
- p.170 	Loops & loop counters
- p.172 	Looping
- p.174 	Key loop concepts (‘break’, ‘continue’)
- p.175 	Using ‘for’ loops
- p.176 	Using ‘while’ loops
- p.177 	Using ‘do...while’ loops

**HTML Chapter 13: "Boxes" (CSS)**

- p.303: Box width, height, overflow
- p.307: Border, margin, & padding
- p.308: Border width, style, & color
- p.315: Centering content
- p.317: Changing inline/block
- p.318: Visibility
- p.321: Additional border topics (border images, box shadow, border radius)