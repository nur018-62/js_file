console.log("hellow factorial");
var fack=1;
for(var i=1;i<10;i++){
    fack=fack*i;
    console.log(i,fack);
}

var num=1;
var fack=1;
while(num<30){
    fack=fack*num;
    console.log(num,fack);
    num++;
}

function factorial(n){
    var i=1;
    var fack=1;
while(i<=n){
    fack=fack*i;
    i++;
}
return fack;
};
var result=factorial(4);
console.log(result);
 

