// class User{

//     public email: string
//     private name: string
//     private readonly city: string = "nepal"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }

// const user1 = new User("example@example.com", "John Doe" );
// user1.city

class User{

  
    private readonly city: string = "nepal"
    constructor(public email: string, private name: string){
    }
}

const user1 = new User("example@example.com", "John Doe" );