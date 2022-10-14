
// Music Enhancer
var codeXam = document.getElementById('codeXam');//codeXam is the id of the audio tag in the html file
var codeXamBtn = document.getElementById('control');// codeXamBtn is the id of the button in the html file

function playPause(song) {//playPause is the function that will be called when the button is clicked
    if (song.paused && song.currentTime >= 0 && !song.ended) {// if the song is paused and the current time is greater than 0 and the song is not ended then play the song
        song.play();// play the song
    } else {
        song.pause();// else pause the song
    }
}

function reset(btn, song) { // reset is the function that will be called when the song ends
    if (btn.classList.contains('playing')) {// if the button has the class playing then remove the class playing
        btn.classList.toggle('playing');// remove the class playing
    }
    song.pause();// pause the song
    song.currentTime = 0;// set the current time of the song to 0
}

function progress(btn, song) {// progress is the function that will be called when the song is playing
    setTimeout(function () {// setTimeout is used to call the function after a certain time
        var end = song.duration;// end is the duration of the song
        var current = song.currentTime;// current is the current time of the song
        var percent = current / (end / 100);// percent is the percentage of the song that has been played
        //check if song is at the end
        if (current == end) {// if the current time of the song is equal to the duration of the song then call the reset function
            reset(btn, song);// call the reset function
        }
        //set inset box shadow
        btn.style.boxShadow = "inset " + btn.offsetWidth * (percent / 100) + "px 0px 0px 0px rgba(0,0,0,0.125)"// set the box shadow of the button
        //call function again
        progress(btn, song);// call the progress function again
    }, 1000);// call the function after 1000ms
}

var volumeUp = false

codeXamBtn.addEventListener('click', function (e) {// add an event listener to the button
    e.preventDefault();
    codeXamBtn.classList.toggle('is--playing');
    //   codeXamBtn.classList.toggle('playing');// toggle the class playing
    playPause(codeXam);// call the playPause function
    progress(codeXamBtn, codeXam);// call the progress function
});