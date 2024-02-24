// Singleton
//Object.create



//Using Symbol
let mysym=Symbol('Key1');
//object literals
let jsuser={
    name:'Raj',
    'Full Name':"Raj Yadav",
    //Declaring symbol
    [mysym]:'Hello',
    age:20,
    location:'dehradun',
    email:'raj@gmail.com',
    isLoggedIn:false,
}
console.log(jsuser.name);
console.log(jsuser['Full Name']);
//Printing symbol
console.log( jsuser[mysym]);

jsuser.age=21;
// Object.freeze(jsuser)
jsuser.email="Mamta@gaail.com"
console.log(jsuser.age);
console.log(jsuser.email);
console.log(jsuser);

jsuser.greeting=function(){
    console.log(`Hello js user, ${this["Full Name"]}`);
}
console.log(jsuser.greeting());