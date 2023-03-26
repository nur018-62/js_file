var fact=1;
function factorial(num)
{
    for (i =1;i<=5;i++){
        fact=fact*i;
    }
    return fact;
}
var result=factorial(5);
console.log(result);

function recursive(num){
    if(num == 1){
        console.log(mum);
        return 1;
    }else{
        console.log(mum);
        return num * recursive(num - 1);
    }
}
var result=recursive(6);
console.log(result);
