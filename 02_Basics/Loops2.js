// foreach, filter, map, reduce

// foreach does not returns a value so it is just used to iterate and perform operations
// filter applies a filter or condition and then returns the filtered values
// map is used to perform operations for eg(add, sub ,mul) and then return the new value

// filter: Used to create a new array with elements that pass a certain condition.
// map: Used to transform each element of an array and create a new array of the same length.
// reduce: Used to reduce an array to a single value by applying a function to each element and accumulating the results.
const arr = [1,2,3,4,5,6,7,8,9,10]

arr.forEach((item)=>{ console.log(item)})

const evenarr = arr.filter((item)=>{  
    return item %2 ===0;
})
console.log(evenarr)

const newarr = arr.map((item) => {
    return item *10;
})
console.log(newarr)

const anarr = arr.reduce((acc, currVal) => {
    return acc + currVal
}, 0)
console.log(anarr)