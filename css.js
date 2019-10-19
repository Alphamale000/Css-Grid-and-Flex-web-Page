let i = 0;
let images = [];

images[0] = "img/pic1.jpe";
images[1] = "img/pic4.jpe";
images[2] = "img/pic2.jpe";
images[3] = "img/pic5.jpe";

//change img
function changeImg() {
  document.slider.url = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", 2000);
}

window.onload = changeImg();
