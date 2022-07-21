function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    document.getElementById("loginerror").innerHTML = '';
    document.getElementById("usernameerror").innerHTML = '';
    document.getElementById("passworderror").innerHTML = '';
    if(username == '' && password == '') {
        document.getElementById("loginerror").innerHTML = 'please enter your username and password';
    }
    else if (username == ''){
        document.getElementById("usernameerror").innerHTML = 'please enter your username';
    }
    else if (password == ''){
        document.getElementById("passworderror").innerHTML = 'please enter your password';
    }
    else { 
        document.getElementById("loginsuccess").innerHTML = 'Log in Successfully';
    }

}