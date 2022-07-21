function sonam() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    document.getElementById("loginerror").innerHTML = '';
    document.getElementById("firstnameerror").innerHTML = '';
    document.getElementById("lastnameerror").innerHTML = '';
    document.getElementById("usernameerror").innerHTML = '';
    document.getElementById("passworderror").innerHTML = '';
    document.getElementById("confirmpassworderror").innerHTML = '';

    if(firstname == '' && lastname == '' && username=='' && password == '' && confirmpassword=='') {
        document.getElementById("loginerror").innerHTML = 'please fill your information';
    }
    else if (firstname == ''){
        document.getElementById("firstnameerror").innerHTML = 'please enter your firstname';
    }
    else if (lastname == ''){
        document.getElementById("lastnameerror").innerHTML = 'please enter your lastname';
    }
    else if (username == ''){
        document.getElementById("usernameerror").innerHTML = 'please enter your username';
    }

    else if (password == ''){
        document.getElementById("passworderror").innerHTML = 'please enter your password';
    }
    else if (confirmpassword == ''){
        document.getElementById("confirmpassworderror").innerHTML = 'please enter your confirmpassword';
    }

    else { 
        document.getElementById("loginsuccess").innerHTML = 'Log in Successfully';
    }

}