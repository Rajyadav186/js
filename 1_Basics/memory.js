//Stack (primitive) & Heap (non-primitive)

//stack (get copy)
let name='Raj';
let anotherName=name;
anotherName='mamta'

console.log(anotherName)
console.log(name)

//heap (get refrence )
let userOne={
    email:'user@gmail.com',
    pass:'@pass',
}
let userTwo=userOne;
userTwo.email="Rajy41008@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
