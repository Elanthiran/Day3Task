3** Use the "API URL":"https://restcountries.com/v3.1/all" to print the name,region,sub-region,and population**



const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr);
xhr.onload = () => {
    
    let a=JSON.parse(xhr.response);
    for(let ind in a)
    {
        console.log(a[ind].name.common,a[ind].region ,a[ind].subregion ,a[ind].population)
    }
    
}