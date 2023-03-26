var depth=12;
if(depth<=10){
    animal=depth*50;
}
else if(depth<=20){
    var first=10*50;
    var reaming=depth-10;
    var secend=reaming*100;
    animal=first+secend;
}
else{
    var first=10*50;
    var secend=10*100;
    var remaing=depth-20;
    var third=remaing*300;
    animal=first+secend+third;

}
console.log(animal);

//function 

function animalcal(depth){
if(depth<=10){
    animal=depth*50;
}
else if(depth<=20){
    var first=10*50;
    var reaming=depth-10;
    var secend=reaming*100;
    animal=first+secend;
}
else{
    var first=10*50;
    var secend=10*100;
    var remaing=depth-20;
    var third=remaing*300;
    animal=first+secend+third;

}
return animal;
}
var result=animalcal(10);
console.log(result);
var result2=animalcal(12);
console.log(result2);
var result3=animalcal(20);
console.log(result3)