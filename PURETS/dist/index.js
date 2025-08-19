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
class User {
    email;
    name;
    _courseCount = 1;
    city = "nepal";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum): void {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    isFamily = true;
}
const user1 = new User("example@example.com", "John Doe");
user1.deleteToken();
export {};
//# sourceMappingURL=index.js.map