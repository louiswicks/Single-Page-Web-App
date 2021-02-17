class Notes {

    constructor(){
      this.messages = ["Welcome to Notes, this is my first note", "This is my second note", "Perhaps, this is my final note!"]
    }

    all(){
      return this.messages
    }
  }

var notes = new Notes();


function loadContent(){
  var contentDiv = document.getElementById("app"),
    index = location.hash.substr(1);

    content = notes.messages[index]

    contentDiv.innerHTML = content;

}

function createNewNote() {
  let noteInput = document.getElementById("note-input")
  notes.messages.push(noteInput.value)
  updateList();

  // let noteLinks = document.getElementById("notes-links")
  // let htmlString = ''
  // htmlString = htmlString + messages[`note${i}`]
  // noteLinks.innerHTML = htmlString
}

function updateList() {

  document.getElementById("note-list").innerHTML = ""
  notes.all().forEach(function(note, index){
    let listLink = document.createElement('a')
    let listItem = document.createElement('li')
    listLink.href = '#' + index
    listLink.id = 'note' + index
    // getEmojis(note.shortText(), listLink.id)
    listLink.text = note
    listItem.appendChild(listLink)
    document.getElementById("note-list").appendChild(listItem)
  })
}


updateList();

let createButton = document.getElementById("create-note")
createButton.addEventListener("click", createNewNote)

if (!location.hash) {
  location.hash = "#1";
}

loadContent();

window.addEventListener("hashchange", loadContent)
