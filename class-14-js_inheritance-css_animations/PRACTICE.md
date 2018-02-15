# localStorage practice

Create a quiz that asks a visitor 1 to 3 questions and tells them what JS function they are.
- The criteria for determining what function they are is completely up to you.
- You can write an HTML form, or use `prompt()`; whichever feels doable within the time constraint.
- You must display previous visitor's names and results either in the DOM or in a console.table()

Here are some suggestions for criteria:
- ask them 3 t/f questions and assign them a function based on number of times they said true
- ask them for text answers and assign them a function based on the total length of their answers
- ask them questions that don't affect anything and randomly give them a function

Requirements/Tips:
- store the visitor's name and their result in an object literal: `{name: 'sj', result: 'alert()'}`
- use localStorage to store previous visitor's results as objects
- remember localStorage can only store strings!
- start with one question, get it working, then add in the others.

Stretch: 
- add more questions
- make the criteria logic more interesting
- group your code into the appropriate objects so its object oriented
