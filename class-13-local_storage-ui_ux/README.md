## **Working with Libraries**
# Class 13: Add Local Storage to Your Vote Tracker; UI/UX Concepts

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)


<hr></hr>

### Schedule
1. Announcements
1. Code review
1. LocalStorage
1. UI/UX

### Announcements
* Quiz due Friday morning!
* Project Week Info
    * 4th week = no lectures, no labs, all project work
    * Basic requirements:
        * 3 pages
        * 2 pages must take and use user input
        * Everyone must contribute to HTML, CSS, and JS
    * Example 201 projects in [last week's readme](../class-10-js_debugging-wireframe_part_2\README.md)
* Project week teams:
    * ????
        * Henry
        * Valerie
        * Stephanie
    * !!!!
        * Jen
        * Tasha
        * Ryan M
        * Spencer
    * &&&&
        * Steele
        * Victor
        * Ryan L
    * $$$$
        * Nathan
        * Mario
        * Keli
    * Brainstorm/talk with each other this afternoon/tmrw
        * At some point before Monday, create a team organization in GitHub
        * Add everyone as members
        * **Note:** you will also have to add each person to the actual project repo as a collaborator.
    * Friday afternoon, talk with SJ, Andrew, Erdem about **2 ideas**
        * We will greenlight one of the ideas so you can do more brainstorming over the weekend.
    * A project proposal (in your repo's README) is due Monday by noon with the following info:
        * Team name and members
        * Project pitch: What's the problem domain/what are you trying to solve or create?
        * What data models will you need? What properties and methods do you think you'll need?
        * Wireframes for **each** page of your website
        * A list of features designated as MVP or Stretch goals
* Project week technical requirements!
    * **CLEAN CODE** with proper indentation and passing our class eslint file
    * Uses Object Oriented Programming to model appropriate entities
    * Global variables and functions are kept to a minimum
    * Responds to user events
    * Data persists between page reloads

## Learning Objectives
- Store, retrieve, and access data stored in using the browser's local storage.
- Store and use data using JSON syntax and structure.

## Notes
* UI and UX
    * User Interface
        - how a user can interact with our website
        - more about what a user can do and how a user can do things, not about the aesthetics
            - forms, buttons, links
        - general goals for a good UI:
            - easy to use
            - easy to understand
            - effective for end-goal or product
    * User Experience
        - elements that affect how our website makes a user feel
            - the way forms, buttons, links look and act
            - other aspects such as content, branding
                - [onboarding teardowns](https://www.useronboard.com/onboarding-teardowns/)
        - general goal:
            - influence visitor's perception of brand or consumption of product
* local storage
    * what is persistance?
    * why isn't our data persistent?
    * localStorage = built in browser storage
        * where is our data stored?
        * **ONLY SAVES STRINGS**
            * how do we convert arrays or objects into strings?
            * how do we convert strings into arrays of objects?
        * **IS LOCAL!**
        * how to save to localStorage
        * how to get from localStorage
<hr></hr>

## Readings

**Read this article on local storage**

- [Read this article on local storage](http://diveintohtml5.info/storage.html)
- Local storage is the gateway to understanding basic concepts of persistence

