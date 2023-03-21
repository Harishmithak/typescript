"use strict";
function getgadgets() {
    return fetch('./gadgets.json')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        return res;
    });
}
getgadgets();
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json));
