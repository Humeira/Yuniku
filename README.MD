#Yuniku

A simple function to kick out duplicate values from an array of objects in JavaScript. 

###How to

Array with duplicates 
```js
var data = [
            {
                name: "John",
                code: "124"
            },
            {
                name: "George",
                code: "122"
            },
            {
                name: "John",
                code: "xxx"
            },
            {
                name: "Ringo",
                code: "124"
            },
            {
                name: "Paul",
                code: "123"
            },
            {
                name: "George",
                code: "111"
            },
        ];
````
The main function `filter`

```js
var yuniku = {
    filter: function (array, key) {
        var noDuplicatesArray = [];
        var temp = [];
        for (var i in array) {
            temp[array[i][key]] = array[i];
        }
        for (var i in temp) {
            noDuplicatesArray.push(temp[i]);
        }
        return noDuplicatesArray;
    }
}
```

Since no two objects can have the same key, so basically what this function does is looping through each object in your array and assign it a unique key.
Instead of having two keys `John` *from the example array*, it will overwrite it rather than creating a new one.

`filter` takes two parameters :
1. An array
2. The key on which duplicates are not allowed

With `main.js` included, you can call `yuniku` from anywhere un your projects
as follows : 

```js
JSON.stringify(yuniku.filter(data, "name"))
```


