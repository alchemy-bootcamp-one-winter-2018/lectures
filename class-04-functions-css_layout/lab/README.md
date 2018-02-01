# Week 1 Project: About Me
## Assignment Overview: Lab for Class 4

## Pairs
<!-- List student pairs here -->


Today will be your first exercise in pair programming. You will be assigned to work with a partner, and the two of you will work on and extend each other's About Me guessing game projects. Be sure to read and follow these instructions very carefully.

Your pair will extend and refine each other's projects today. The person whose game is currently being worked on will be in the Navigator role, and the other person will be the Driver (more about those roles below). Once starting work in lab, plan to spend around two hours on one person's game (plus breaks!), and then swap roles. Since you have a limited time in which to edit two projects, time management is critical.

### Pair Programming Basics

- In pair programming there are two developers working on a single body of code on a single computer.
- One member of the pair is the Driver. This person will be the one doing all of the actual typing work on the laptop.
- The other member of the pair is the Navigator. They will work with only their voice and their thoughts.
- The Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side". The Navigator is fully engaged with the work that the pair is doing, potentially using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as an MDN reference page.
- **Under no circumstances does the Navigator work on any code on their laptop**: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.

## General Workflow for this Assignment

### 1. How To Get Code Ready For Work

Be sure to follow these instructions **VERY** carefully.

Note: Before starting these steps, make sure that both of your repositories are clean: everything is merged and pulled so that both the remote and local versions of your projects are in sync and that your most production-ready version of your code is in the `master` branch. This will prevent potential problems later.

- Decide whose code you will work on first. The owner of that code (who will be the Navigator) provides the link to their GitHub repo to the other member of the pair (who will be the Driver). You can send this link over Ryver, spell it verbally, or by carrier pigeon.

- The Driver follows the link to that repo and creates a fork of the repo in GitHub like we did in class.

- The Driver then goes to *their fork* of the repo (the URL should have the Driver's GitHub name in it) and copies the HTTPS link to clone their fork (the link has the Driver's GitHub name in it and should end in .git).

- Inside of the Driver's main work directory on their laptop, make a directory with your partner’s name and then navigate (`cd`) into it. From there, clone the fork ( `git clone the-https-link-you-copied`). That will create a local version of the forked repo on the Driver's laptop.

- 'cd' into that directory and enter 'code .' in the terminal to open all of the files in VS Code.

### 2. Extend and Refine

- You'll be making some edits to each other's games. After each bit of work is completed (in other words, after each successful modification of a single question), be sure to do an add-commit-push cycle (**a-c-p**) to place the code on GitHub and preserve a versioned history of your work.

- Move the logic for all questions into functions: Today we learned about functions, and now we'll move the logic for the individual questions into separate functions, and call those functions to run the game.

    - Wrap the logic and variables for a given question with `function someFuncNameYouChoose() {` at the beginning, and add a closing curly brace `}` at the end. To make the function execute, make sure you invoke it afterwards: `someFuncNameYouChoose();` After completing this step the game should behave exactly as it did before.

- Update the README file: In the README file, add in the names of the Driver and Navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format.

### 3. Push to GitHub; Make a Pull Request

- Once everything is finished, and the Driver has done the last edits and pushed them to GitHub, it's time to send the edited code to the owner (who has been in the Navigator role the whole time, of course). We do this with a GitHub feature called a ***Pull Request***, which we generally refer to as a **PR**.

- From the Driver's repo that is a fork of the Navigator's repo, hit the green button that says 'Create pull request'.

- Follow the remaining steps as described onscreen and as shown here: https://help.GitHub.com/articles/using-pull-requests. (These instructions for doing a pull request from a forked repo to its source are deliberately vague, to give you practice in reading through instructions, trying things out, solving problems collaboratively, and getting guidance from documentation).

- The owner of the code (the Navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in their laptop terminal `cd` to the game directory and enter the command 'git pull origin master' to retrieve the modified code from GitHub.

- When everything is finished for one person's project, submit the links for the last pull request made from the Driver to the Navigator (in both cases) in the Canvas assignment.

### Stretch Goals (not required; only if your pair is feeling ambitious, and only after *everything* above, including the first PR, is completed)

- Stretch Goal #1 (pair programming): For the five yes/no questions, your questions, the correct answers, and the two possible responses should be moved into three separate arrays. (The same applies if you've added in any other pieces to the questions besides the most basic structure.) Once this is done you can replace that content in the functions by accessing the arrays. If you have already done this, but with a similar architecture, that is fine.

- Stretch Goal #2 (pair programming): Depending upon time: If you have time, reduce the yes/no questions from five functions to one function, and then use a 'for' loop to iterate through the arrays and call the function for each question. 

- Stretch Goal #3 (pair/solo): If you still want to work on some stuff together, explore each other's CSS and talk about how it is organized and what it is doing. Then feel free to adapt your CSS based on what you saw in your partner's code. This does not need to be pair-programmed.

## Submitting Your Assignment

- Submit the links for the last pull request made from the Driver to the Navigator (in both cases) in the Canvas assignment.

> Assignments that do not meet the required professional standards will not be graded. We’ll ask you to update your work to meet the requirements and resubmit. Required professional standards include:
a clear commit history with commit messages that describe why the changes were made; your code passes an eslint test.
