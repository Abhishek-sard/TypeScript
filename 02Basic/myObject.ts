const User =  {
    name: "Abhishek",
    email: "abhishek@example.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}
createUser({name: "Abhishek", isPaid: false})


function createCourse():{name: string, price: number}{
    return{name: "react.js", price: 333}
}

let newUser = {name: "Abhishek", isPaid: false}

createUser(newUser);


export {}