function display(note) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    console.log(`I am in the display(note) function`)
    var body = note.text
    getEmojis(body, "modal-text")
    document.getElementsByClassName("close")[0].onclick = function() {
      modal.style.display = "none";
      history.replaceState(null, null, ' ');
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        history.replaceState(null, null, ' ');
      }
    }
  }