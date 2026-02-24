### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 ### Ans: All these functions are used to get the element from html doccument and manupulate them.(DOM manupulations)
 ### but their return statement make them diffrence from one to another.

### function : 1 --> getElementById()
### getElementById search element by unique id and returns it.
### exmpl: document.getElementById('my-id')
### it will search by its unique id passed through the parameter and return single element object.

### function : 2 --> getElementsByClassName()
### this function will searh by the classname like document.getElementsByClassName('my-class') and then return a live html collection

### function : 3 --> querySelector()
### this will search by a unique id like document.querySelector('#name1') and return the first matching element with this id or class. it uses CSS selectors (the way we use Css search to add design to a specific class or id )
### note: querySelector & getElementById both function retun a single matching object element.

### function : 4 --> querySelectorAll()
### this will nodeList of all matches class
### we can use loop here as well .
### note: doest not allow us to auto update

### 2. How do you create and insert a new element into the DOM?

### Ans:
### // ### 2. How do you create and insert a new element into the DOM?
### // step 1
### // first we will find the parent where we want to append the child
### //get the element and store it to a variable
### const parentClass = document.getElementById("suppose-it-is-my-parent-class");

### // step 2
### // create a child in the doccument for exmpl im creating a div
### const newChildDiv = document.createElement("div");

### //step 3
### // add element to the div
### newChildDiv.innerHTML = `

### <div>
### <h1>This is newChild created using DOM manupulations</h1>
### </div>

`;

### //step 4
### // append the newChild to the parent where we want to add the element
### parentClass.appendChild(newChildDiv);

### 3. What is Event Bubbling? And how does it work?

### Ans:
### Event bubbling is a behavior in the DOM where an event start from the target(child) to upwards to its parent then from parent to its parent untill its propagate (go to the root) means doccument.

### 4. What is Event Delegation in JavaScript? Why is it useful?

### Ans:
### Event Delegation is process where you add event handler to a parent and it will handle its child. it works by the concepts of event bubbling .

### its is useful as it reduce the code repetation and use of multi eventlistener.
### it make the execution faster and even if the child add a action button later it will still work.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

### Ans:
### preventDefault() it stops the browser from default action.
### exmple: you click a link on the browser but the link will not take you to anywhere.

### stopPropagation() it stops the event bubling from the target event to upwards to the DOM. (child to parent, again and again )
### exmple: you click a button it will stay in that clicked button but wont go to the button parent class (btn-container);
