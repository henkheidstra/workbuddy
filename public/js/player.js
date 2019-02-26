    var player = document.getElementById("myAudio"); 
    
    function playAudio() { 
      player.play(); 
    } 
    
    function togglePlay() {
        if (player.paused) {
            player.play();
        }
        else {
            player.pause();
        }
    }

    function stopAudio() { 
      player.pause();
      player.currentTime = 0;
    } 

    function changeVolume() {
      player.volume=document.getElementById("player-volume-slider").value;
    }
