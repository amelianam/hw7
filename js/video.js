var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log('Auto play is set to ' + video.autoplay)
	console.log('Loop is set to ' + video.loop)


});
// play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// play video and update volume information
	video.play()
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'

});
// pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log('Pause Video');
	video.pause()

});
// slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log('Slow down');   //not sure if I need to do this ; 
	video.playbackRate *= .9;
	console.log('Speed is ' + video.playbackRate)
});
// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log('Speed up');   //not sure if I need to do this ; 
	video.playbackRate /= .9;
	console.log('Speed is ' + video.playbackRate)

});
//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log('Skip ahead');   //not sure if I need to do this ; 
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log('Video current line is ' + video.currentTime)

});
//mute and unmute
document.querySelector("#mute").addEventListener("click", function() { 
	console.log("Mute Video")

	if (video.muted == false) {
		video.muted = true;
		console.log("Muted is " + video.muted);
		this.innerHTML = "Unmute"
	} else {
		video.muted = false
		console.log("Muted is " + video.muted);
		this.innerHTML = "Mute"
	}
	
});
//volume slider
document.querySelector('#slider').addEventListener("input", function() { 
	console.log('The current volume is ' + video.volume)
	video.volume = this.value / 100 
	console.log('The current volume is ' + video.volume)
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
});
// styled
document.querySelector("#vintage").addEventListener("click", function() { 
	console.log("Old Style")
	document.querySelector("#player1").classList.add("oldSchool")
	console.log("Successful")
	
});
// original
document.querySelector("#orig").addEventListener("click", function() { 
	console.log("Original")
	document.querySelector("#player1").classList.remove("oldSchool")
	console.log("Successful")
	
});

