// const User =  {
//     name: "Abhishek",
//     email: "abhishek@example.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}
// createUser({name: "Abhishek", isPaid: false})


// function createCourse():{name: string, price: number}{
//     return{name: "react.js", price: 333}
// }

// let newUser = {name: "Abhishek", isPaid: false}

// createUser(newUser);

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return {name: user.name, email: user.email, isActive: user.isActive}
// }

// createUser({name: "", email: "", isActive: true});


// export {}


type User = {

    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@example.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}
type cardDate = {
cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}
myUser.email = "h@newdomain.com"
// myUser._id= "asa"