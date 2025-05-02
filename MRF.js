// map 
// filter
// reduce 


// syntax 

// variabe name .map ((value,index,accumulator)=>)

let a = [10,20,30,40,50];
let b = a.map((val,inx,acc)=>acc*2)
console.log(b);

// filter 
// variabe name .filter((value,index,accumulator)=>)
let c = [10,20,151,11,5,6,78,22,258,369,123,2,220,10,4,6,789,22,303];
let n = c.filter((a,b,c)=> c>10)
console.log(n);

// reduce 
// array.reduce((accumulator, currentValue) => )
let r = [10,20,151,11,5,6,78,22,258,369,123,2,220,10,4,6,789,22,303];
let d = r.reduce((i,o)=>i+o)
console.log(d);
