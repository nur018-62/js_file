console.log("hellow");
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
var result=factorial(4);
console.log(result);

