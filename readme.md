# JavaScript: The Hard Parts
By Leanne | Frontend Masters

## Promises - ES6

**Promises do 2 things:**
1. initiate background web browser work
2. Return a placeholder object (promise) 
    - containing the value that is returned
    - containing an  onFullfilled [] array

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
        1.  domain name and 
        2. the path
- fetch defaults to a GET request, we can pass parameters for it to be a POST  etc.


