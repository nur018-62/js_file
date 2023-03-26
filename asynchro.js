console.log("hi asynchro");
const firsttask=()=>{
    console.log("first work done");

}
const task2nd=()=>{
    console.log("2nd work is done");

}
const task=()=>{
    setTimeout(task2nd,2000);
}
const third=()=>{
     console.log("third is done");
}
firsttask();
task2nd();
task();
third();
///ahane time out diye time late bujanu hoyce;


