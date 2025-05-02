// call back 

function a (callback){
    setTimeout(() => {
        console.log("loding");
        callback()
    }, 5000);

}
function b (callback){
    setTimeout(() => {
        console.log("successed");
     
    }, 100);
    
    
}
a(b);

// callback hell
function  clean (callback){
    setTimeout(() => {
        console.log("clean the house");
        callback()
    }, 5000);
}
function walk (callback){
    setTimeout(() => {
        console.log("walk the dog");
        callback()
    }, 2500);
}
function trash (callback){
    setTimeout(() => {
        console.log("put the trash out")
        callback()
    }, 1000);
}
function go (callback){
    setTimeout(() => {
        console.log("go to the store");
        callback()
    }, 5000);
}
clean(()=>{
    walk(()=>{
        trash(()=>{
            go(()=>{console.log("work done")})
        })
    })
})