function addTwo(num: number ){

    return num + 2
    // return "hello";
}

function getUpper(val: string): string {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: number){

}

let loginUser = (name: string, email: string, isPaid: boolean) =>{

}

addTwo(5);
getUpper("hello");
signUpUser("John", "john@example.com", 123);
loginUser("h", "h@gmail.com", true);


// function getValue(myVal: number): boolean | string {
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
    return "";
}
const heros = ["thar", "spiderman", "ironman"]


heros.map((hero): string => {
    return `Hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}


export {}