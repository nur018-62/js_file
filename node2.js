console.log("hellow js for lukman");
var x=0;
while(x<10){
    console.log(x.random*999);
    x++;
}
for(var i=0;i<30;i++){
    console.log(i);
}
var x=0;
do{
    console.log(x+"while");
    x++;
}while(x<=30);

var names=["nasie","roni","pukdha hujur"];
console.log(names[2]);
let main=101;
let pass=40;
if(main<pass){
    console.log("you are a fail");
}
else if(main>pass&&main<=100){
    console.log("you are pass")
}
else{
    console.log("enter youe main mark");
}
var day=4;
switch(day){
    case 1:
        console.log("today is saturday");
        break;
    case 2:
        console.log("today is sunday");
        break;
    case 3:
        console.log("today is monday");
        break;
    case 4:
        console.log("today is thuesday");
        break;
    case 5:
        console.log("today is wuddesh day");
        break;
        default:console.log("vaild day");
}
/*var visit=confirm("Are you sure");
//if(visit){
    window.location.href="https://google.com";
}
else{
    alert("thank you");
}*/


console.log("last day of js");
var num=0;
while(num<10){
    var id=Math.random()*99;
    console.log(id.toFixed());
    num++;
}
var car={
    name:"Bmw",
    code:function(){
       return this.name;
    }
}
console.log(car.code());


var nam="luqman";
var last="hussain";
console.log(nam.concat(last));
console.log(typeof nam);
console.log(nam.length);
console.log(nam.charAt(2));
console.log(nam.toUpperCase());

var number=34.30;
console.log(Math.round(number));
console.log(Math.ceil(number));
console.log(Math.floor(number));

function mege(text){
    console.log(text);
}
mege("hellow node");

function mege(text="hellow default"){
    console.log(text);
}
mege();

function gug(a,b){
    console.log(`${a}${b}`);
}
gug(10,20);

function rest(x,y,...z){
    console.log(`x=${x},y=${y},z=${z}`)
}
rest(10,20,30,30,40,40,);

function addnumvber(x,y,z){
    return(x+y+z)
}
let numbers=[10,2,30];
console.log(addnumvber(numbers[0],numbers[1],numbers[2]));
console.log(addnumvber(...numbers));//spread 

let pro=[1,2,3];
let sec=[4,5,6];
let full=[...pro,...sec];
console.log(full);

let p1={
    name:"lukman",
    address:"kishorejong",
    age:22,
}
let p2={
    name:"lukman",
    address:"mymensing",
    age:22,
}
let p={...p1,...p2};
console.log(p);
var number=[2,3,4];
var sqr=[];
number.forEach(function(x){
    sqr.push(x*x);});
console.log(sqr);

var num=[4,5,6];
var sqr=num.map(function(x){
    return (x*x);
});
console.log(sqr);

var num=[10,23,34];
var newnum=num.filter(function(x){
    return (x<34);
});
console.log(newnum);

function studentsname(name,age){
    return{
        name:name,
        age:age,
    }
}
console.log(studentsname("anisul",29));
function boss(name,age){
    return{
        name,
        age,
    }
};
console.log(boss("Arman",29));

let message={
    body(){
        return'Hi js es6';
    }
};
console.log(message.body());

let space={
    'body name'(){
        return'hi Arman';//don't run
    }
};
console.log(message['body name']);

const user=["arman","sabbir","anik"];
for(let name of user){
    console.log(name);
}

let students={
    name:"arman",
    Id:3050,
    cgpa:3.93,
}
function studentinfo(){
    return students.filter(function(x){
        return x.cgpa>3;
    }).map(function(y){
        return y.name;
    })

};
console.log(studentinfo());