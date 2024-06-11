const str = "sachin"

// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.charAt(2))
// console.log(str.charCodeAt(1))
// console.log(str.codePointAt(1))
// console.log(str.concat("deoli"))
// console.log(str.endsWith("n"))
// console.log(str.includes("n"))
// console.log(str.includes("n", 0))
// console.log(str.indexOf("h"))
// console.log(str.lastIndexOf("h"))
// console.log(str.localeCompare("h"))

// random number between 0 and 1
console.log(`random number between 0 and 1 ---->${Math.random()}`);
// random value between 0 and 9
console.log(`random number between 0 and 9 ---->${Math.random()*10}`);
// random value between  1 and 10
console.log(`random value between  1 and 10 ---->${Math.floor((Math.random()*10) +1)}`)
// random value between  min and max
const min = 30;
const max = 100;
console.log(`random value between  min and max ---->${Math.floor((Math.random()* (max - min + 1) + min))}`)
