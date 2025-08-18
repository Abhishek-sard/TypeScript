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

    private _courseCount = 1
  
     readonly city: string = "nepal"
    constructor(public email: string,   public name: string){
    }

    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail(): string{
        return `apple${this.email}`

    }


    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum): void {
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum   
    }
}

const user1 = new User("example@example.com", "John Doe" );

user1.deleteToken();