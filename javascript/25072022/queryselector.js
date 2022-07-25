var lilist = document.querySelectorAll('#list li');
for(var i = 0; i< lilist.length; i++) {
    if(lilist[i].innerHTML=='Shailesh'){
        lilist[i].innerHTML = lilist[i].innerHTML + ',Present';
    }
}                     

var lilist = document.querySelector('#list1 li');
for(var i = 0; i< lilist.length; i++) {
    if(lilist[i].innerHTML=='Sonam'){
        lilist[i].innerHTML = lilist[i].innerHTML + ',Present';
    }
}          