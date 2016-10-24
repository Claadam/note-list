var firebaseConfig = {
  apiKey: "AIzaSyAubBTOEwLEtudI00cOf8c8c8a0ao7N1kA",
  authDomain: "note-list-bee2e.firebaseio.com/",
  databaseURL: "https://note-list-bee2e.firebaseio.com/"	
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge-4")

function storeValue(name, value) {	
  var obj = {}
  obj[name] = value;
  store.child("vars").update(obj)
}

function addListItem(name, value) {		
  store.child("vars" + "/" + name).push(value)
}

function onNewListItem(name, callback) {		
  store.child("vars" + "/" + name).on("child_added", function(data) {
    callback(data.val())
  })
}

function deleteValue(name) {	
  store.child("vars" + "/" + name).remove()
}

function onNewValue(name, callback) {	
  store.child("vars").child(name).on("value", function(data) {		
    callback(data.val());
  })
}