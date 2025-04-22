//1. Create an array with 5 of your favorite foods.

//2. Log the first and last food in the array.

//3. Add one more food using .push() and log the new array.



let favoriteFoods = ["baked chicken", "stewed chicken", "pasta", "salmon", "pizza"]

console.log(favoriteFoods[0])
console.log(favoriteFoods[4])

favoriteFoods.push("fried catfish")

console.log(favoriteFoods)


//1. Create an array with a list of guests.

//2. Remove the first guest using .shift()

//3. Add a new guest at the end using .push()

//4. Log how many guests are coming (.length)

let guestList = ["Mary", "Martha", "Sara", "Suzanne", "Lenay"]
guestList.shift("Mary")
guestList.push("Keshawn")
console.log(guestList.length)



//. Create an array:

//let tasks = ["laundry", "groceries", "coding", "naps"];
//2. Write a function called printTasks() that loops through the array and logs each task.

//3. Bonus: Log them numbered (e.g. 1. laundry, 2. groceries)

let tasks = ["laundry", "groceries", "coding", "naps"]
function printTasks() {
for (let task of tasks){
    console.log("To do:" + task)
}
}
console.log(printTasks())
//function printTasks()
//console.log(item)


//1. Create this array:

let numbers = [1, 2, 3, 4, 5];
//2. Manually reverse it by looping (don’t use .reverse()!)
for (let i = numbers.length -1; i > -1; i--) {
    console.log(numbers[i])
  }
  





//Create a function called randomLunch() that:

//• Takes an array of lunch options

//• Returns one at random

//Example:

let lunches = ["eutufee", "pizza", "Subway", "Smoothie"];
function randomLunch
//console.log(randomLunch(lunches)); // "pizza"