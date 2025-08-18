// let score: number | string = 35 
// score = "85"


// type User = {
//     name: String;
//     id: number;
// }
// type Admin = {
//     username: string;
//     id: number;
// }

// let Abhishek: User | Admin = {
//     name: "Abhishek",
//     id: 1
// }
// Abhishek = {username: "AbhishekAdmin", id: 1}

// function getDbId(id: number | string) {

//     //making some API calls
//     console.log(`Db Id: ${id}`)
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
}

//array

const data: number[] = [1, 2, 3, 4, 5]
const data2: string[] = ["1", "2", "3", "4", "5"]
const data3: any[] = ["1", 2, true, {name: "Abhishek", age: 25}]


let seatAllotment: "aisle" | "window" | "middle" = "aisle"


