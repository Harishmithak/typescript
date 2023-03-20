interface color{
    "red":string;
    "pink": string;
     "purple":string;
     "deeppurple":string;
     "indigo":string;
     "blue": string;
      "lightblue":string; 
      "cyan": string;
      "teal": string;
       "green": string;
       "lightgreen":string;
       "lime": string;
        "yellow":string;
         "amber": string;
          "orange": string;
     "deeporange":string;
     "brown":string;
      "grey": string;
      "black":string;
      "white":string; 
}
function getcolor(): Promise<color[]>{
    return fetch('./color.json')
    .then (res => res.json())
    .then (res =>{
        console.log(res);
        return res as color[]
    })
       
}
getcolor();

fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(json=>console.log(json))

