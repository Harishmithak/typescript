interface product{
    "productid":number
    "productname":string
    "productquantity":number
    "productprice":number
}
function getproduct(): Promise<product[]>{
    return fetch('./product.json')
    .then (res => res.json())
    .then (res =>{
        console.log(res);
        return res as product[]
    })
       
}
getproduct();

getproduct()
    .then(function (users) {
    //map- to loop through all the elements from the json
    console.log(users.map(function (u) { return  + ' ' ++ '\n'; }).toString());
})
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))