
it ('constructs with an array' function() {

});


function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}



function toMatchAnArray(expected, actual) {
  if(expected === actual){
    console.log("${it}")
  console.log("Pass!")
  } else {
    console.log("You FAIL!")
  }
};
}





function testNotes() {
var notes = new Notes();

if(notes.view.length !== 0) {
throw new Error("That is not an array")
} else {
    console.log("Test passing!")
}};

testNotes();
