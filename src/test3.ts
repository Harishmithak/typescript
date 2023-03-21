interface gadget{
    id:number;
    pname:string;
    pdescription:string;
    price:string;
}
    function getgadgets(): Promise<gadget[]>{
        return fetch('./gadgets.json')
        .then (res => res.json())
        .then (res =>{
            console.log(res);
            return res as gadget[]
        })
           
    }

getgadgets();

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

