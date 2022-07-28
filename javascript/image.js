var images = ['\Users\shree\training\html-training\html-training\Images\image2.png',
      '\Users\shree\training\html-training\html-training\Images\banner3.png',
    '\Users\shree\training\html-training\Images\ford (25).jpg',
    '\Users\shree\training\html-training\html-training\Images\image2.png',];
    var imagewithTag = '';
    for (var i = 0; i < images.length; i++){
        imagesWithTag +- '<div class = "images" id="images" '+i+'"><img src ="'+images[i]+'"/></div>'
    }
    document.getElementById('allimages').innerHTML = imagewithTag;
    
    function next() {
        var id = '';
        for (var i=0; i < images.length; i++) {
            if(document.getElementById('image'+ i).style.display == 'block'){
                id = i;
            }
            if(document.getElementById('image'+parseInt(id + i))){
                document.getElementById('image'+i).style.display = 'none';
            }
        }
        if(document.getElementById('image'+parseInt(id+i))){
            document.getElementById('images'+ parseInt(id+i)).style.display ='block';
        }
    }
    function next() {
        var id = '';
        for (var i = 0; i < images.length; i++) {
            if(document.getElementById('image'+ i).style.display == 'block'){
                id = i;
            }
            if(document.getElementById('image'+parseInt(id - i))){
                document.getElementById('image'+i).style.display = 'none';
            }
        }
        if(document.getElementById('image'+parseInt(id+i))){
            document.getElementById('images'+ parseInt(id+i)).style.display ='block';
        }
    }