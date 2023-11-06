$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

const playButton = document.getElementById("playButton");
const audio = document.getElementById("myAudio");

playButton.addEventListener("click", function() {
    audio.play(); 
});