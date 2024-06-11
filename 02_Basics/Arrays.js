const d = new Date();
console.log(d.getDate());

const arr = [1,2,3,4,5]
const str= "Sachin"
const str2= "deoli"
arr.pop(2)
const newArray = [...arr, ...arr];
console.log(newArray);

console.log(Array.isArray(str));
console.log(Array.from(str))
console.log(Array.of(str, str2))
