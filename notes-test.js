
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


"use strict";
function expect(actual) {
  return {
    toEqual: function(expected) {
      if (actual == expected ) {
        console.log('Pass')
      } else {
        console.log('Fail')
        console.log(`${actual} does not equal ${expected}`)
      }
    },
    toSrictlyEqual: function(expected) {
      if (actual === expected ) {
        console.log('Pass')
      } else {
        console.log('Fail')
        console.log(`${actual} does not equal ${expected}`)
      }
    },
    toArrayEqual: function(expected) {
      for (var i = 0; i < expected.length; i++ ) {
        if (actual[i] != expected[i]) {
          console.log('Fail')
          return console.log(`${actual} does not match ${expected}`)
        } // if
      } // for
      console.log('Pass')
    }, // toArrayEqual
    toHashEqual: function(expected) {
      var expectedLength = Object.keys(expected).length;
      var actualLength = Object.keys(actual).length;
        if (actualLength !== expectedLength) {
          console.log('Fail')
          return console.log(`Hash does not have enough elements`)
        } else {
          for (var i = 0; i < expectedLength; i++ ) {
            if (actual[i] != expected[i]) {
              console.log('Fail')
              return console.log(`${actual} does not match ${expected}`)
            } // if
          } //for
        } // else if
      console.log('Pass')
    } // toHashLengthEqual
  } // return
} // expect
function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
};
