// loops 

// for loop 
// syntax
// for (initilization ;condition ;Increment )

for (let a =0 ;a<=5;a++){
    console.log(a);
    
};

// while loop 

let b = 1;
while (b>=5){
    console.log(b)
    b++
};
// do while 
let c= 1;
do{
    console.log(c);
    c++
    
}while(c<=5);

// for of 

let days = ["sunday","monday","tuesday","wednesday","thuresday","friday"]
for (sap of days){
    console.log(sap);
}

// for in 

let obj = {
    name : "gajendran",
    place : "chennai",
    number :224514141,
    id : 32145554
}
for (js in obj ){
    console.log(js+": "+obj[js]);
    
}

