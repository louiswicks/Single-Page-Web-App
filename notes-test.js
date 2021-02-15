function testNotes() {
var notes = new Notes();

if(notes.view.length !== 0) {
throw new Error("That is not an array")
} else {
    console.log("Test passing!")
}
};
  
testNotes();

// notes.toEqual([], this.view) 
// {
//   let it = "there should be an empty array for new notes"
// };


// function toEqual(expected, actual) {
//   if(expected === actual){
//     console.log("${it}")
//   console.log("Pass!")
//   } else {
//     console.log("You FAIL!")
//   }
// };
// }


