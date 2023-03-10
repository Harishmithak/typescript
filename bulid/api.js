"use strict";
function getproduct() {
    return fetch('./product.json')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        return res;
    });
}
getproduct();

fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json));
