console.log("index");
let numbers=[10,20,30,40];
numbers.forEach(function(x,index,arr){
    arr[index]=x+5;
})
console.log(numbers);

const day='to day is friday';
console.log(day.startsWith('to'))
console.log(day);
console.log(day.startsWith('to day',1));
console.log(day.startsWith('to',0));