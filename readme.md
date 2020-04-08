# JavaScript: The Hard Parts
By Leanne | Frontend Masters

- to view  Open Preview (Ctrl+Shift+V) 

## Thread of Exceution in JS

- the thread of execution in JS first goes through the code, line by line.
- Can only store values as the thread goes through. 
- When the thread of execution comes to a function call, it stores the name but remains unitalised.
- - this can be seen by the parenthesis ( ). 

### Execution Context
- is ran when we have to then run the functions, after the definitions have been set up (1,2,3). Then we start a new execution context to runthese functions with their own **thread of execution** and **memory** (4). 
- when results are returned by these functions, they evaluate to the answer/result. It literally replaces the information held there before.

![](images/thread-of-execution-and-call-stack.png)

## Promises - ES6

**Promises do 2 things:**
1. initiate background web browser work - BROWSR
2. Return a placeholder object (promise) - JS
    - containing the value that is returned
    - containing an  onFullfilled [] array ~ this is a hidden property
    - once the value is returned from the fetch request, whatever functions are stored in the onFulfilled array are ran. The value recievied  is passed in as a parameter to the functions in onFullfilled.
    - .then tells the fetch what to do when the data is returned.

### Fetch

```js
const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display);

function display(data){
    console.log(data);
}
```
— fetch is very powerful
- it returns a promise containing a value and onFullfilled array.
- it also sends a network request via the web browser
    - network request contains the:
        1.  domain name and i.e. www.twitter.com
        2. the path i.e. /will/images/1
- fetch defaults to a GET request, we can pass parameters for it to be a POST  etc.



### Then 
#### method and functionality
- any code we want to run on when the data is returned , must also be saved on the promise object.
- it's added using the **.then** method to access the hidden property onFulfillment
- promise objects automatically trigger attached function to be run in onFullfilled. The input to this function is the returned data.

## Asynchronous 
- means runining the code not in the order it was said to be done

## There are 2 queues in JS
- if you check the documentation you can tell what type of queue the function will be placed into.
- 2 pronged promise object
 - - any function that is attached to a promise object by a 2 pronged fasade function and the result is accessed via .then, they all go into the **microtask Q**

- any function that is passed into a facade function that passed in directly to a fasade feature that triggers outside work from web browser features, when the background task is complete, these are put into the **callback Q**

#### Callback Q
- Any function that is thrown out of JS or a link back to it via the Web Browser Facade Funtions, like setTimeout (timer), go into the callback queue.

#### Microtask Q
- Any function that is attached to a promise object via the **.then** method and then auto triggered to run by JS when the 'value' property is returned 
- Those fuctions go on the micro-task queue

#### once global execution is done, the event loop checks the microtask queue first then it checks the callback Q

#### fasade funtions / APIs

### Promises, Web APIs, the Callback & microtask Queues and the Event Loop enable:
- **Non-blocking applications:** don't have to wait for the single thread to finish
- **However long it takes:** We cant prdict how long the browser will take so we let JS control automatically running functions after completion.
- **Web Applications:** Async JS is the backbone of modern web = allows us to build fast non-blocking applications. 

## Objects
### Object dot notation
- if were passing around an object i.e. user 1 and we want to increment a score for this user.. it would be handy if the functions in relation to this user were attached to the user object. This way its easy to call, say incrementScore on user 1 very easily.
- this way its accesable to the user 1 also & specifically. It won't be used by some random thing.
- This can be done with object encapsulation
- - have the data
- - and its functionality coupled. 

#### Example
- here we can add the user 2 with dot notation
- line 4: this is a **method**, as it's a function on an object.

![](images/dot-notation-for-user-2-creation.png)

- **object.create** is a built in function in JS that gives us fine control over the object
- all it does is create an empty object
- - with hidden properties, no direct properties
- Object orientated programming has the object and all functionality attached to it all easily accessable.
- Functional programming is on the rise but its very important to really understand how OOP works as it's so powerful and intuitive once you understand it.
- if you keep using a function again and again, it should be generalised allowing the parameters to be the variables and only they change on input.
- Generate a reusable function for this instead
![](images/reusable-function.png)


