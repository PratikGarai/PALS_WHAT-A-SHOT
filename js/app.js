var countDownDate = new Date("May 08, 2021 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("rday_timer").innerHTML = 
  `<span>
    <span class="number">${days}</span><span class="word">Days</span>
    <span class="number">${hours}</span><span class="word">Hr</span>
    <span class="number">${minutes}</span><span class="word">Min</span>
    <span class="number">${seconds}</span><span class="word">Sec</span> 
  </span>`;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("rday_timer").innerHTML = "Recruitments have started!!";
  }
}, 1000);