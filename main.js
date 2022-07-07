// Caught Speeding CS10 Review

// Variables to store HTML Elements
let determineBtn = document.getElementById("determine-btn");
let driverSpeedInput = document.getElementById("driver-speed");
let speedLimitInput = document.getElementById("speed-limit");
let outputSpan = document.getElementById("output");

// Add Event Listener to Calculate Button
determineBtn.addEventListener("click", determineBtnClicked, determineTicket);

 // Input & Output
function determineBtnClicked() {
  let driverSpeed = +driverSpeedInput.value;
  let speedLimit = +speedLimitInput.value;
  determineTicket(driverSpeed, speedLimit);
}
  // Process
function determineTicket(driverSpeed, speedLimit){
  if (driverSpeed >= speedLimit + 20) {
    return outputSpan.innerHTML = "BIG TICKET";
  } else if (driverSpeed > speedLimit) {
    return outputSpan.innerHTML = "SMALL TICKET";
  } else {
    return outputSpan.innerHTML = "NO TICKET";
  }
}
