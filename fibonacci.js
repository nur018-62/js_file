console.log("fibonacci");
var fac=[0,1];
for (var i=2;i<20;i++){
    fac[i]=fac[i-1]+fac[i-2];
}
console.log(fac);

function fibo(n){
    var fac=[0,1];
    for(var i=2;i<=n;i++){
        fac[i]=fac[i-1]+fac[i-2];
    }
    return fac;
}
var result=fibo(40);
console.log(result);

console.log('hi');