"use strict";
function getcolor() {
    return fetch('./color.json')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        return res;
    });
}
getcolor();
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => console.log(json));
