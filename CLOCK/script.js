// Select DOM elements
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('min');
const secondEl = document.getElementById('sec');
const ampmEl = document.getElementById('ampm');

// Function to update clock
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Format with leading zeros
  hourEl.textContent = String(hours).padStart(2, '0');
  minuteEl.textContent = String(minutes).padStart(2, '0');
  secondEl.textContent = String(seconds).padStart(2, '0');
  ampmEl.textContent = ampm;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);
