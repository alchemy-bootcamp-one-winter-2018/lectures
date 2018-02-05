## **Week 2: Working with the DOM**
## Class 6: The DOM, Domain Modeling, and Introduction to Objects

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

### Schedule
1. Announcements
1. Domain Modeling and Objects
1. The DOM
1. Lab Prep

### Announcements
* One on ones w/ SJ! Today and tomorrow: 10 minutes to check in with where you're at.

## Learning Objectives
* Translate a problem domain into understandable TODOs and user stories.
* Create a code model for a problem domain using JavaScript objects literals.
* Access and reassign object properties and methods using dot notation and bracket notation.
* Append list items to the DOM using JavaScript.

## Notes
* Domain Modeling
    * Model the entities of a problem so we can implement them in our code
        * The models describe the characteristics and possible behaviors of the relevant items of a problem
        * Often, models are of items in the physical world: movies, cars, students, books, animals
    * Problem: track all the movies we've seen
        * What are the relevant items?
        * What data about them do we need to know?
* JavaScript Objects
    * Build an instance of a model with an object literal
        * Properties
        * Methods
    * Accessing and reassigning properties
    * `this`
    * [dan's useful notes on objects](dan-objects.md)
* The DOM
    * Problem: alter HTML elements based on user interaction
        * What are the relevant items?
        * What data about them do we need to know?
    * Your HTML elements as JavaScript objects!! With properties and methods!
        * accessing existing HTML elements with JavaScript
            * `document.getElementById()`
            * `document.querySelector()`
        * creating and adding HTML elements with JavaScript
            * `document.createElement()`
    * [dan's useful notes on adding to the DOM](dan-DOM.md)
* Today's Lab
    * Yes, I know it's a lot of info to get through, but as a developer, it's now part of your job to translate human to computer. You got this. As always, we encourage you to pair with someone - writing your TODOs and objectives as a pair or mob is a great place to start.
    * There is a lot of repetition, but **DON'T COPY/PASTE YOUR STORE OBJECTS!!!!** Type them out to gain practice conceptualizing objects and getting familiar with their syntax.

---

## Readings

- [Article on Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling) (Sobol)
- ["Understanding The Problem Domain Is The Hardest Part Of Programming"](http://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming/) (Sonmez)
- JS Chapter 3: "Functions, Objects, and Methods" (pp.101-144)
- JS Chapter 5: "The Document Object Model"
