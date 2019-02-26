$(document).ready(function() {
    // global variables
    var sessionLength = 25;
    var breakLength = 5;
    var sessionOn = false;
    var min = sessionLength, sec = 0, timer;
  
    /* Starts the timer with the given length of time */
    function startTimer() {
      timer = setTimeout(startTimer, 1000);
      if(min === 0 & sec === 0) {
        // timer is complete
        formatTime(min, sec);
        clearTimeout(timer);
        areSettingsDisabled(false);
        sessionOn = false;
      } else {
        // timer is still running
        if(min > 0 && sec === 0) {
          min--;
          sec = 59;
          formatTime(min, sec);
        } else {
          sec--;
          formatTime(min, sec);
        }
      }
    }
  
    /* Formats the given minutes and seconds and sets the #timer div */
    function formatTime(min, sec) {
      $('#timer').html(((min < 10) ? "0" + min : min) + ":" + ((sec < 10) ? "0" + sec : sec));
    }
  
    /* Enables or disables the session length setting buttons */
    function areSettingsDisabled(boolean) {
      $('#session-plus').prop("disabled", boolean);
      $('#session-minus').prop("disabled", boolean);
    }
  
    $('#start-btn').click(function() {
      if(!sessionOn) {
        sessionOn = true;
        startTimer();
      }
      areSettingsDisabled(true);
    });
  
    $('#stop-btn').click(function() {
      if(sessionOn) {
        sessionOn = false;
        clearTimeout(timer);
      }
    });
  
    $('#reset-btn').click(function() {
      clearTimeout(timer);
      min = sessionLength; // resets the timer to the original session length
      sec = 0;
      formatTime(min, sec);
      areSettingsDisabled(false);
    });
  
    $('#session-plus').click(function() {
      if(sessionLength+1 <= 60) {
        sessionLength++;
        min = sessionLength;
        formatTime(sessionLength, 0);
      }
    });
  
    $('#session-minus').click(function() {
      if(sessionLength-1 >= 1) {
        sessionLength--;
        min = sessionLength;
        formatTime(sessionLength, 0);
      }
    });
  });