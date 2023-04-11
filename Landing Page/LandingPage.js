



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
  
  
  
  
  
  
  
  
  //NAVIGATION

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  if (window.matchMedia('screen and (max-width: 768px)').matches){

  }else{
    document.getElementById("navbar").style.top = "0";
    document.getElementById("nav").style.display = "none";
  }} else {
  if (window.matchMedia('screen and (max-width: 768px)').matches){

  }else{
    document.getElementById("navbar").style.top = "-85px";
    document.getElementById("nav").style.display = "block";
    }
  }
}

var count=0;
function opennav(){
if(count==0){
document.getElementById("nav").style.height="240px";
document.getElementById("icon").style.color="#3399ff";
count++;
}else{
document.getElementById("nav").style.height="45px";
document.getElementById("icon").style.color="#000";
count=0;
}
}









