# High Intensity Interval Training

You'll spend 15 minutes with each exercise. For some you will work as a group, and for others, individually. 

## 🥝 Read and refactor (individually or paired)
1. Read through this JavaScript file: https://github.com/sajoy/kumquat-timer/blob/master/app.js
1. Start by skimming through it and discovering:
    - the class we're working with, its methods and what you think they do (don't read them though)
    - any global helper functions or variables
1. Your task is to read through the file and create a GitHub Issue for each of the following:
    - suggest a way to refactor or clean the code
    - ask a question about something that you don't understand, include your best guess about what the answer is 
        - **HARD MODE**: do some research and explain your understanding of what you found
1. Feel free to create multiple issues.
1. To create an issue, click on the line number you want to address (Note: you can select multiple lines by clicking on the starting line number, then hold shift as you click on the ending line number.). Then click on its little `...` menu that pops up and select **Open new issue**. This will open a new page that looks a lot like our PR page! Add your text there and hit the green button when you're ready to **Submit new issue**.

## 🎯 Evaluate the expressions (together)
- Given the following, do a step by step evaluation of the value we're assigning to `randomThing`, then `about`: 
```js
const fun = [
    {name: 'george', occupation:'video game tester'},
    {name: 'suzan', occupation:'painter'},
    {name: 'louis', occupation:'dog'}
];

fun[1].hobby = 'geocaching';
fun[2].hobby = 'sleeping';

const notFun = fun[0].occupation.toUpperCase();
const randomThing = fun[Math.floor(Math.random() * fun.length)].occupation;
const about = `${fun[1].name} is a ${fun[1].occupation} who likes ${fun[2].geocaching}.`;

```
- Step by step evalution: 
    - Write the entire line at the top of the whiteboard
    - Underneath, evaluate each expression one by one until you reach the final value
    - You can decide your own value for Math.random();
- For example, your whiteboard might look like the following if evaluating the expression we're assigning to `notFun`:
```
    const notFun = fun[0].occupation.toUpperCase();
                   {name: 'george', occupation: 'video game tester'}.occupation.toUpperCase();
                   'video game test'.toUpperCase();
                   'VIDEO GAME TESTER'

```
- Note that we are not writing valid JavaScript, but rather what you should be envisioning in your head as you're reading code.


## 📠 Read the Docs (individually)

Skim through the Documentation for the Element object: https://developer.mozilla.org/en-US/docs/Web/API/Element

Search for the answers to the following questions:
1. Can we use `.getElementById()` on an element?
1. Can we use `.querySelector()` on an element?
1. What is the security risk behind using `.innerHTML` to change content of an element?
1. Is the Element object the base interface for HTML elements? Why can we use/access these properties and methods if it is not?
1. Find three properties and/or methods you'd like to use in your project next week.

## 🎤 Team building games (together)

Pick one of the following, or play a similar ice-breaker/team-building game that you know about.

1. The mirror game (silent simon says)
    - Designate a leader who will silently move their body however they'd like.
    - Everyone else in the group must mirror the leader's movements. (Mirror means if they raise their left hand, you raise your right hand, as if you were their reflection in a mirror.)
    - Switch leaders after a few minutes.
    - **HARD MODE**: When switching leaders, stay silent.

1. Time your talking
    - The goal of the game is to speak for as close to one minute as you can (to gain awareness about how much or little you talk).
    - Go around the group and talk one at a time.
    - The speaker will talk about something that excites them or makes them happy. When they think they've been talking for a minute, they will say "Time!".
    - Someone else in the group will time them.
    - When everyone in the group has finished, discuss how this went for you as a speaker and as a listener.
    - **HARD MODE**: Do the exercise twice. For the first round, the listeners should not pay attention to the speaker. Don't look at or interact with them as they speak. The second round, they should focus intently on the speaker and practice active listening: possibly including facial reactions to what the speaker says, auditory "mhmm" or "interesting!" or various other remarks (but not full on sentences), and after they finish, ask them a question about something they mentioned. Discuss how the two different rounds went.