// splice method takes arguments i.e element start index,no of elements to be deleted and then element to be added
let a=["a0","a1","a2"]
a.splice(2,0,"a3");
console.log(a);   //output: ["a0", "a1", "a3", "a2"]

// using spread operator
let b = ["a0", "a1", "a2"];
b = [...a.slice(0, 2), "a3", ...a.slice(-1)];  

console.log(b); // Output: ["a0", "a1", "a3", "a2"]
//by using slice method we can some part(array) of the spread operator

C:\Users\surya\OneDrive\Desktop\desktop\project\march12\insert.js