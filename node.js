console.log("hi");

var x=0;
while(x<=20){
    var x=Math.random()*999;
    console.log(x.toFixed());
    x++;
}
for(var i=0;i<10;i++){

    console.log(i+"nur");
}
var names=["nasir","roni","rakib"];
for (let name in names){
    console.log(names[name]);
    console.log(names[0]);
}
var names=["nasir","rani","Emaon"];
names.forEach(function(){
    console.log(names);
});
var car={
    name:"Bmw",
    colour:"white",
    price:300000,
}
console.log(car.name);
console.log(car.colour);
console.log(car.price);
console.log(car);
//ojectsFunction
var car={
    name:"addi",
    colour:"red",
    price:4000,
    full:function(){
        return this.colour;
    }
}
console.log("hellow js");
alert("helllow node.js");
document.querySelector(".mode").innerHTML="<h1>you are js</h1>";
document.querySelector(".mode").innerHTML=car.full();
document.write(full());
console.log(full());
documents.write("hellow world");


var person={};
person.name="Arman";
person.age=30;
person.car="Bmw";
console.log