1.**how to compare two json have same properties without order**

let obj1 = {
    Name : "person 1",
    Age : 5

};

let obj2 = {
    Age : 5,
    Name : "person 1"
};
if(obj1.Name == obj2.Name && obj1.Age == obj2.Age)
{
    console.log(true)
}
else{
    console.log(false)
}
