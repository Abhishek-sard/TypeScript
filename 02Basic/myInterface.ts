interface user {
    readonly dbId: string,
    email: string,
    userId: number
    googleId?: string
    startTrial(): string
    getCoupon(couponname: string, value:number): number
}

interface User{
    githubToken: string
}

interface Admin extends User{
    role: "admin" | "user"
}

const user1: user = {
    email: "example@example.com",
    userId: 123456,
    role: "admin",
    githubToken: "Github",
    startTrial: () => {
        return "Trial started";
    },
    getCoupon: (couponname: string, value: number) => {
        return value;
    }
}
console.log(user1);