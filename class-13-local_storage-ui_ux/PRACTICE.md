Create a quiz that asks a visitor 1 to 3 questions and tells them what JS function they are.
- The criteria for determining what function they are is completely up to you.
- Display previous visitor's names and results either in the DOM or in a console.table()

Here are some suggestions for criteria:
- ask them 3 t/f questions and assign them a function based on number of times they said true
- ask them for text answers and assign them a function based on how the total length of their answers
- ask them questions that don't affect anything and just randomly give them a function

Requirements/Tips:
- store the visitor's name and their result in an object literal
- use localStorage to store previous visitor's results
- remember localStorage can only store strings!