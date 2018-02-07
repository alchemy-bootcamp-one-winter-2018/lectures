# Week 2 Project: Salmon Cookies
## Assignment Overview: Lab for Class 8

Today you will add a form to your cookie stand project, so that Pat can add new locations to the table by submitting their information.

### Technical Requirements

- Your HTML form
    - Must include a `<fieldset>` element
    - Has an input field for each piece of data you need to collect
        - Use your constructor function's parameters as a guide or think about what data you use when creating a new instance
- Have your JS react to the form's submit event
    - Attach an event handler to your form's submit event
    - Your event handler should:
        - stop your form from reloading the page
        - use the data in the form inputs to create a new store instance
        - add the new store instance's info to your table using its appropriate method

### Stretch Goals
- Are you going to do any error correction on input? You probably should. Look at what kind of input validation is built in to HTML5 and implement ones you want.
- Refactor your code into smaller functions/methods if you have some huge functions going on. Aim for each function doing one thing, and then compose more complex behavior out of functions.

Submit your assignment through Canvas as usual.