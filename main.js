class Notes {

    constructor(){
      this.messages = ["Welcome to :fire: notes! Create your first note today before it's too late!"]
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
    var emoji = getEmojis(content, "app");
    contentDiv.innerHTML = emoji
    
}

function createNewNote() {
  let noteInput = document.getElementById("note-input")
  let text = noteInput.value
  notes.messages.push(text)
 
  updateList();
  noteInput.value = ''
  // let noteLinks = document.getElementById("notes-links")
  // let htmlString = ''
  // htmlString = htmlString + messages[`note${i}`]
  // noteLinks.innerHTML = htmlString
}

function updateList() {
  loadContent();
  document.getElementById("note-list").innerHTML = ""
  notes.all().forEach(function(note, index){
    let listLink = document.createElement('a')
    let listItem = document.createElement('li')
    listLink.href = '#' + index
    listLink.id = 'note' + index
    listLink.text = note.substring(0, 20)
    getEmojis(listLink.text, listLink.id)
    listItem.appendChild(listLink)
    document.getElementById("note-list").appendChild(listItem)
  })
}


let createButton = document.getElementById("create-note")
createButton.addEventListener("click", createNewNote)

if (!location.hash) {
  location.hash = "#0";
}





function getEmojis(body, id) {
  fetch('https://makers-emojify.herokuapp.com/', {
  method: 'POST',
  body: JSON.stringify({ text: body}),
  headers: {
    'Content-Type': 'application/json',
  },
  })
    .then(
      function(response) {
        response.json().then(function(data) {
          console.log(data);
          document.getElementById(id).innerHTML = data.emojified_text;
        });
      }
    )
  }
  
  updateList()
  window.addEventListener("hashchange", loadContent)
