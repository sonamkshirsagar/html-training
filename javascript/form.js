function trainerdetail() {
    var nameoftrainer = document.getElementById("name").value;
    if(document.getElementById (nameoftrainer)){
        document.getElementById("error").innerHTML = '';
        document.getElementById(nameoftrainer).style.display = 'block';

    }
    else{
        document.getElementById("error").innerHTML = "Trainer details not found";
    }
}