//objects can be decalred in two ways, singleton and literal
//Singleton object is the one which is created inside a constructor and the instance of the object is created once.
//Literal object is the once that can be created anywhere and can have n number of instance.
//singleton -: const obj = new object();
//literal -: const ob2 = {};


//Example of literal object-:

const sym2 = Symbol();
const obj = {
    name:"sachin",
    age:24,
    email:"sachin.deoli@microsoft.com",
    booksAccess: ["m","p","c"],
    fnc:function()
    {
        return "Hello this is a function"
    },
    //to define symbol in object we need to denote it inside [] brakets, else it will be treated as a string.
    [sym2]:"thisisSymbol"
}


obj.fn2 = function()
{
    console.log("this is a function")
}

const sym1 = Symbol("IamSymbol");
console.log(typeof sym1)

obj.Symbol = sym1;
console.log(obj);
console.log(obj.fnc);
console.log(obj.fn2());
console.log(typeof obj.Symbol)

const val = obj.fnc();
console.log(val);
