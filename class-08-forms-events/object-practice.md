# Exercise 1: Function and object writing

Simulate a shopping experience with a shopper object, some items objects, and a function to see which items our shopper can afford.

1. Create a customer object with three properties: `wants`, `budget`, and `cart`; save it in a variable named `danny`.
    1. Give the `want` property a string describing an item they want to buy.
    1. Give the `budget` property a number: the amount of dollars they're willing to spend. 
    1. Give the `cart` property an empty array.
1. Create 3 item objects (using object literals), each with two properties: `name` and `price`. 
    1. Give them all the same name (the item in our shopper's `wants` property) but different prices (ideally some above and some below our shopper's budget).
1. Write a function called `checkOut` that will check if our shopper can buy an item.
    1. Give our function two parameters: `shopper` and `item`.
    1. In the function body, check if the shopper's budget is above the item's price.
        1. If it is, console a happy message saying they bought that item, and return the entire item.
        1. If it is not, console a sad message and return `null`.
1. Call your checkOut function and give it your danny variable and an item variable. 
    1. Save the return value in a variable called `canBuyItem`.
    1. Check if canBuyItem has a value (in other words, is not null), and if it does have a value, push it into danny's cart property.
1. Console.log danny so you can see their updated cart.

With any remaining time do any of the following: 
- repeat the last steps (calling your checkOut function, check if we got the item, 
etc) with your other item objects
- think of a way to refactor the checkOut process - can we rearrange our code to make it more readable or easier to follow? Can we rename things to make their purpose more clear?
- change our global checkOut function into a method on our danny object. What would you call it? What would we need to change in our function 