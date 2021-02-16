class Notes {
  constructor() {
    this.view = {};
    this.counter = keys(this.view).length
  }

newNote(input) {
    var i = this.counter + 1;
    this.view[i] = `${input}`
    this.counter++
    return this.view[i]
  }

listNotes()
  {
    return this.view
  }




}
