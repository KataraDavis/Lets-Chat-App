
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDoq1MqVgWLCQjyQuyfU7NAux1XBwYnD_o",
      authDomain: "kwitter-55abf.firebaseapp.com",
      databaseURL: "https://kwitter-55abf-default-rtdb.firebaseio.com",
      projectId: "kwitter-55abf",
      storageBucket: "kwitter-55abf.appspot.com",
      messagingSenderId: "159060692023",
      appId: "1:159060692023:web:dc7858d7bc5f4097c903b2"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
