//addListItem("david" + "/notes", "hi there!!!!")
console.log("hi")

var name;
var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")


nameInput.keydown(function(e) {
  if (e.which == 13) {
    // we have a new name! Now what?
  }	
})

function getNotesForName(name) {  
  onNewListItem(nameInput+ "/notes", function(note) {
    console.log(note)
  })
}

noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(nameInput.val() + "/notes", noteInput.val())
    console.log("你今天过得怎么样")

  }
})
