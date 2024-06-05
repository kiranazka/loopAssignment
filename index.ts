//Create a blank array: Start by setting up an empty array named myWork that will hold
//objects
type myWork = {
    name: string;
    status: boolean;

}
let myWork: myWork[] = []
for(let i = 1; i <= 10; i++){
    let lesson = {
        name : "lesson "+i,
        status : i % 2 != 0,
    }
    myWork.push(lesson);
}
console.log(myWork);
