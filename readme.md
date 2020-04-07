# JavaScript: The Hard Parts
By Leanne | Frontend Masters

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

### There are 2 quesues in JS
#### Callback Q
- Any function that is thrown out of JS or a link back to it via the Web Browser Facade Funtions, like setTimeout (timer), go into the callback queue.

#### Microtask Q
- Any function that is attached to a promise object via the **.then** method and then auto triggered to run by JS when the 'value' property is returned 
- Those fuctions go on the micro-task queue

#### once global execution is done, the event loop checks the microtask queue first then it checks the callback Q

#### fasade funtions / APIs
