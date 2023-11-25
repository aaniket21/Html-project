burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')
var viedoPlayer=document.getElementById("viedoPlayer");
var myVideo=document.getElementById("myVideo");

function stopVideo(){
    viedoPlayer.style.display="none";
}
function playVideo(file){
    myVideo.src=file;
    viedoPlayer.style.display="block";
}


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')

})