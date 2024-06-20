// how to create a promise?

// 1st way
// const promise = new Promise(function(resolve, reject) {
//     // do all the operation like fetching fata from API, dB calls, file reading
//     //eg settimeout which takes 3 sec to print
    
//     setTimeout(function(){
//         console.log("Hi Sachin")
//     },3000)
// })

// // 2nd way
// new Promise(function(resolve, reject){
// // do all the operation like fetching fata from API, dB calls, file reading
//     //eg settimeout which takes 3 sec to print
    
//     setTimeout(function(){
//         console.log("Hi deoli")
//     },3000)
// })

// above 2 are the ways to create a promise.
//-----------------------------------------------------------------------------------------------------------------
// now how do we call a promise?
// callng 1st promise

// const promise = new Promise(function(resolve, reject) {
//     // do all the operation like fetching fata from API, dB calls, file reading
//     //eg settimeout which takes 3 sec to print
    
//     setTimeout(function(){
//         console.log("Hi Sachin")
//         resolve();
//     },3000)
// })
// promise.then(function()
// {
//     console.log("How are you?");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function(){
//                 console.log("Hi Deoli")
//                 resolve();
//             },3000)
// })
// .then(function (){
// console.log("how are you doing??");
// })

//---------------------------------------------------------------------------

// const promise = new Promise(function(resolve, reject) {
//     const error = true;
//     if(!error)
//         {
//             setTimeout(function(){
//                 console.log("Hi Sachin")
//                 resolve("Success");
//             },3000)
//         }
//         else{
//             reject("THere was an error");
//         }
//     })

//     promise
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((message) => {
//         console.log(message)
//     })

    //--------------------------------------
    // new Promise(function(resolve, reject) {
    //     const error = false;
    //     if(!error)
    //         {
    //             setTimeout(function(){
    //                 console.log("Hi Sachin")
    //                 resolve("Success");
    //             },3000)
    //         }
    //         else{
    //             reject("THere was an error");
    //         }
    //     })
    //     .then((message)=>{ console.log(message)})
    //     .catch((message)=>{console.log(message)})
    //     .finally(()=>{console.log("this blocks always executes")})

    //------------------------------------------------------------
    // const promise = new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //         const error = true;
    //         if(!error)
    //         {
    //             console.log("Hi Sachin")
    //             resolve("Success")
    //         }
    //         else{
    //             reject("THere was an error");
    //         }
    //     }, 3000)
    // })

    // async function asyncMethod()
    // {
    //     try {
    //         const response = await promise;
    //         console.log(response)  
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // asyncMethod();

//--------------------------------------------------
// promise chaining or theinnig( using multiple thens)
    
    // fetch("https://randomuser.me/api/")
    // .then((response) => {
    //     return response.json(); // Parse JSON response body and return the Promise
    //   })
    // .then((data) => {
    //     console.log(data);
    //     return data.results[0];
    //   })
    // .then((result)=> {
    //     return result.name})
    // .then((name)=> {
    //     console.log(name.first)
    // })
    // .catch((e)=>
    // {
    //     console.log(e);
    // })

    async function fetchData()
    {
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json();
        console.log(data)
        console.log(data.results[0].name.first)
    }

    fetchData();

    
    