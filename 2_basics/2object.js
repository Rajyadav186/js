//This is singleton Object
// const tinderUser =new Object()

//This is Non-Singleton Object
// const tinderUser={}


let tinderUser={}
tinderUser.Id="123abc"
tinderUser.Name="Raj"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:'raj@gmail.com',
    fullName:{
        userFullName:{
        firstName:'Raj',
        lastName:'Yadav',
        }
   }
}

// console.log(regularUser.fullName.userFullName.firstName)


const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
// const obj3={...obj1,...obj2}
const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)


const user=[
    {
        Id:11,
        email:'@gmail.com'
    },
    {
        Id:12,
        email:'@gmail.com'
    },
    {
        Id:13,
        email:'@gmail.com'
    },
]

// console.log(user[1].Id)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('Name'));