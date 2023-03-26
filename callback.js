console.log("hi call-black");
function squre(x){
    console.log(`squre of${x}:${x*x}`);
}
squre(5);
squre(6);
squre(7);

//higherOrdefa-rotate-180

function higherOrderfunction(num,callback){
callback(num);
};
higherOrderfunction(5,squre);
higherOrderfunction(888,squre);