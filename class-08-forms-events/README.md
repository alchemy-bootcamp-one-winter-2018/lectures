## **Week 2: Working with the DOM**
## Class 8: HTML Forms and JS Events

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

<hr></hr>

### Schedule
1. Announcements
1. Code review
1. HTML Forms
1. JavaScript events

### Announcements
* Quiz 3 due Friday!
* Lab feedback from TA's
    - don't twiddle your thumbs for more than 15 minutes
    - write out steps in english (psuedo code)
    - break it into smaller tasks and test them!
* Lecture questions: ask away! || make a list of "WTF SJ?"
* Continuing one on ones

## Learning Objectives
- Accept user input on a webpage using an HTML form.
- Capture user input from a form using an event listener and event handler.
- Update the DOM using user input.

## Notes
* Exercise
    * SJ's solution: https://repl.it/@sajoy/WordyWiltedBuckeyebutterfly
* HTML forms
    * Use form elements to collect/capture information from a user
        * text data, choices, actions
    * Example uses: search bar, email capturing, posting to social media, online quizzes
    * Creating a form: the main elements
        * form
        * fieldset
        * label
        * input
            * **the type of input is determined by the `type` attribute**
        * button
    * Useful attributes:
        * `value`
        * `disabled`
        * `required`
        * `placeholder`
    * What happens when we submit a form?
        * How can we stop this default action?
* JavaScript events
    * Use events to change our website or data based on user interaction
    * Example uses: sending a message in Ryver, paralax scrolling, clicking a hamburger menu
    * Event types we'll be working with:
        * submit
        * click
    * Using an event: listen for it and handle it using JS
        * Three ways to listen:
            1. set element attribute in HTML
            2. set element property in JS
            3. use element method `.addEventListener` in JS <<<< preferred
        * When in the handler: `this` is the element that was listening
    * An event is an object!
        * relevant properties and methods:
            * `.target`
            * `.type`
            * `.preventDefault()`
            * `.stopPropagation()`
*. Combining DOM events and HTML forms
    * How can we stop the form's default action?
    * How can we access the data the user input into the form?
    * What can we do with that data?
<hr></hr>

## Readings

**HTML Chapter 7: "Forms"**

- p.148: Form controls
- pp.149-50: How forms work
- pp.151-62 : Form structure, overview of all input types
- p.163: Labelling form controls
- p.164: \<fieldset\> and grouping form elements
- pp.165-68 : HTML5 form features (validation, dates, email, URL search)

**HTML Chapter 14: "Lists, Table & Forms" (CSS)**

- p.333-36: Bullet point styles/positioning for lists
- p.337-40: Table properties (VERY useful reference)
- p.341-44: Styling [forms, inputs, buttons, fieldsets, legends]
- p.345: Aligning form controls

**JS Chapter 6: "Events"**

- pp.246-47: Different event types (big list!)
- p.248: How events trigger JavaScript code
- pp.250-53: Three ways to bind an event to an element
- p.254: Event listeners
- p.260: Event flow
- p.264: Using event listeners with the event object
- p.268: Using event delegation
- p.270: Which element did an event occur on?
- p.271: Different types of events
- p.272: User interface events
- p.280: Keyboard events
- p.282: Form events
- p.286: HTML5 events
