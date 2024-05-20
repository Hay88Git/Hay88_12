function ShowNav() {
    document.getElementById("nav").style.width = "80%";
    document.getElementById("close").style.display = "block";
}
function HideNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("close").style.display = "none";
}
// Change Pic
var newImageSources = [
    "./img/thumnail1.jpg",
    "./img/thumnail2.jpg",
    "./img/thumnail3.jpg",
    "./img/thumnail4.jpg",
    "./img/thumnail5.jpg",
    "./img/thumnail6.jpg",
];
var images = document.querySelectorAll(".pic img");
images.forEach(function(img, index) {
    img.src = newImageSources[index];
});

var newAdr = "./img/1.png";
var imgAdr = document.querySelectorAll(".adr img");
imgAdr.forEach(function(img) {
    img.src = newAdr;
});