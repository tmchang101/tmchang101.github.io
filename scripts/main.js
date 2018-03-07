var myImage = document.querySelector('img');

myImage.onclick = function() {
    alert('---- change images. ---'); 
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/CS3_icon.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}