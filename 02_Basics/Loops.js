// types of loops-:
// for, while, do while
// for of, for in

// loops on Array, objects, Map

const arr =[1,2,3,4,5,6]
const obj ={
    name:"sachin",
    age:24,
    height:5.7,
    add:"sector 46",
    male:true
}

const map = new Map();
map.set(1,"sachin")
map.set(2,"rahul")
map.set(3,"rohit")
map.set(4,"yashi")
map.set(5,"ishani")


//----------------------------------------

// for(const val of arr)
//     {
//         console.log(val);
//     }
// // objects are not iterable using for of loop.
//     // for(const val of obj)
//     //     {
//     //         console.log(val);
//     //     }
//         for(const val of map)
//             {
//                 console.log(val);
//             }


//--------------------------------------------------------
for(const val in arr)
    {
        console.log(val);
    }

    for(const key in obj)
        {
            console.log(`key=${key} value = ${obj[key]}`);
        }
//map is not iterable using for in loop
        // for(const key in map)
        //     {
        //         console.log(key);
        //     }