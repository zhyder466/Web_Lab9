
window.onload = function () {
    LoginStatus();
};

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    localStorage.setItem('username', username);
    localStorage.setItem('loggedIn', 'true');

    LoginStatus();
}

function logout() {

    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');

    LoginStatus();
}

function LoginStatus() {
    var isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn === 'true') {
    
        var username = localStorage.getItem('username');
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'block';
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('user').innerText = username;
    } else {

        document.getElementById('login-form').style.display = 'block';
        document.getElementById('logout-btn').style.display = 'none';
        document.getElementById('user-info').style.display = 'none';
    }
}