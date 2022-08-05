var slider_img = document.querySelector('.slider-img');
var images = ['\Users\shree\training\html-training\html-training\Images\image.png', '\Users\shree\training\html-training\html-training\Images\banner1.png',
    '\Users\shree\training\html-training\html-training\Images\download (2).jpg', '\Users\shree\training\html-training\html-training\Images\banner3.png'];

var i = 0;
var dots = '';
for (var i = 0; i < images.length; i++) {
    dots += '<span onclick="showimage('+i+')">' + i + '</span>'
}
document.getElementById('dots').innerHTML = dots;
function showimage(i) {
    return slider_img.setAttribute('src','images/'+ images[i]);
}
function next() {
    if (i >= images.length- 1)i = -1;
    i++;
    return setimg();

}
function prev() {
    if (i <= 0)i = images.length;
    i--;
    return setimg();

}
function setimg() {
    return slider_img.setAttribute('src', 'images/' + images[i]);
}
