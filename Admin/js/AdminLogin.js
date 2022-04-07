document.getElementById("login").disabled = true;

function check() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    if (u == "admin" && p == "123")
        document.getElementById("login").disabled = false;
    else
        document.getElementById("login").disabled = true;
}