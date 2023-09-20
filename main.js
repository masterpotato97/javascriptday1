let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(dog_string, dog_names) {
    let matchFound = false; // A flag to track if any matches are found
    
    for (let i = 0; i < dog_names.length; i++) {
        let currentName = dog_names[i].toLowerCase(); // Convert name to lowercase for case-insensitive comparison
        if (dog_string.toLowerCase().includes(currentName)) {
            console.log("Matched " + dog_names[i]);
            matchFound = true; // Set the flag to true if a match is found
        }
    }
    
    // If no matches were found after the loop, print "No Matches"
    if (!matchFound) {
        console.log("No Matches");
    }
}

// Call the function with the provided parameters
findWords(dog_string, dog_names);






/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    for(let i = 0; i < arr.length; i += 2)
    {
        arr.splice(i,1,"even index");
    }
}
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


replaceEvens(arr);

console.log(arr);
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]