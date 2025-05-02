// array methods 

// .push

let a = [10,20,30,40,50];
a.push(60);
console.log(a)
// .pop
let b = [10,20,30,40,50];
b.pop();
console.log(b);

// .shift 
let c =[10,20,30,40,50];
c.shift()
console.log(c);

// .unshift
let d = [10,20,30,40,50];
d.unshift(9)
console.log(d);

//  .sort 
let e = ["d","f","b","e","a","c"]
console.log(e.sort());

// . reverse
let f ="jarivhtirp"
console.log(f.split("").reverse().join(""));

// .splice 0,1
// 0 is use to add the given value in the index space
// 1 is use to add the given value in the index space but it remove the alredy index num value

// syntax 
// variable name .splice(index,splice,value)

let weeks = ["monday","tuesday","wednesday","thuresday","friday","saturday"]
weeks.splice(0,1,"sunday")
console.log(weeks);
