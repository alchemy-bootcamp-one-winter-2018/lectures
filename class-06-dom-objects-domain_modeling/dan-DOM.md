# Adding Something to the DOM

**We can only add ONE THING AT A TIME.**

As an example, let's add a `<p>` to an existing `<div>`

This is our existing HTML:

```HTML
<div id="parent-element">
</div>
```

###Steps

1. Make a JavaScript reference (a variable) to the parent element
2. Create the child element we want to add and save it as a variable
3. Give the child content - in this case, the content is text
4. Append the child to the parent

**JavaScript:**

```javascript
const parent = document.getElementById('parentElement');  
const child = document.createElement('p');  
child.textContent = 'Some words we want in our p element';  
parent.appendChild(child);
```

**Finished HTML:**

```HTML
<div id="parent">
  <p>Some words we want in our p element</p>
</div>
```
