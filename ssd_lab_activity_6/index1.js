var managername = document.getElementById("mname");
var emailn = document.getElementById("email");
var serverUsername = document.getElementById("sname");
var serverPassword = document.getElementById("spass");
var confirmPassword = document.getElementById("cpass");

myInput.onfocus = function() {
  document.getElementById("spass").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

function usernameValidationHandler(){
    var usrn = document.getElementById("sname").value;
    var onetonine = /[0-9]/.test(usrn);
    var atoz = /[A-Z]/.test(usrn);

    if(onetonine && atoz)
        document.getElementById()
    else
        document.getElementById
}

function dragstartHandler(evt){
    evt.dataTransfer.setData("MyDraggedElementId", evt.target.id);
}

function drageoverHandler(evt){
    evt.preventDefault();
}

function dropHandler(evt){
    evt.preventDefault();

    var elementId = evt.dataTransfer.getData("MyDraggedElementId");
    evt.target.appendChild(document.getElementById(elementId));
}


function Validate() {
    var serverPassword = document.getElementById("cpass").value;
    var confirmPassword = document.getElementById("spass").value;
    if (serverPassword != confirmPassword) {
        alert("Server Password and last password entered do not match.");
        return false;
    }
    return true;
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 
// function setColor(btn,color){
//     var property=document.getElementById(btn);
//     if (property.style.backgroundColor == "#f47121") {
//         property.style.backgroundColor = color;
//     } else {
//         property.style.backgroundColor = "#f47121";
//     }
// }

