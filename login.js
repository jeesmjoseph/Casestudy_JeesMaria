const f1 = document.getElementById("login");
var pa = document.createElement('p');
var em = document.getElementById("e_msg");
pa.innerText = "Check Username and Password"

function checkID() {
    var uid = document.getElementById("uname");
    if (uid.value == "admin") {
        return true;
    } 
}

function confirmpassword() {
    var code = document.getElementById("pass");
    if (code.value == "12345") {
        return true;
    }
}

f1.addEventListener('submit', function (event) {
    if (!checkID()) {
        // Then we prevent the form from being sent by canceling the event       
        event.preventDefault();
        em.appendChild(pa);
   
    }    
    if (!confirmpassword()) {
        // Then we prevent the form from being sent by canceling the event       
        event.preventDefault();
        em.appendChild(pa);
        
    }    
});