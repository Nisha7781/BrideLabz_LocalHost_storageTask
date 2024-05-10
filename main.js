function signup(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var address = document.getElementById("address").value;

    var user = {
        email: email,
        username: username,
        password: pass,
        address: address
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log("User added");

    window.location.href = "login.html";
}

function loginFunc(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var result = document.getElementById("result");

    var user = localStorage.getItem(username);

    if (user === null) {
        result.innerHTML = "Wrong username";
    } else {
        var data = JSON.parse(user);
        if (username === data.username && pass === data.password) {
            result.innerHTML = "Logged in";
            
            // Redirect to dashboard
            window.location.href = "dashboard.html";
        } else {
            result.innerHTML = "Wrong password";
        }
    }
}
