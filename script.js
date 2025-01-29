
// Function to update the current UTC time every second
function updateCurrentTimeUTC() {
  const currentTimeUTC = new Date().toISOString();
  document.getElementById('currentTimeUTC').textContent = `Current UTC Time: ${currentTimeUTC}`;
}

// Call the function once to set the initial time
updateCurrentTimeUTC();

// Set an interval to update the time every second
setInterval(updateCurrentTimeUTC, 1000);