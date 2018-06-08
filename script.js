function moveModal() {
 document.getElementById("modal").style.top = 0;
  setTimeout(() => playAudio(), 500);
}
function returnModalToWhenceItCame() {
 document.getElementById("modal").style.top = "-1000px";
}
function playAudio() {
 document.getElementById("yoshi").play();
}
/* 28E */
function makeYoshiGrow() {
 document.getElementById("yoshi-image").style.transform = "scale(1.4)";
}
function makeYoshiNormal() {
 document.getElementById("yoshi-image").style.transform = "scale(1)";
}
function makeYoshiShrink() {
 document.getElementById("yoshi-image").style.transform = "scale(.6)";
}