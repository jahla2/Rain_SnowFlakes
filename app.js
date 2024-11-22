const snowContainer = document.getElementById('snow-container');

// Function to create a snowflake
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄️'; // You can use other snowflake-like symbols

  // Randomize size
  const size = Math.random() * 1.5 + 0.5 + 'em';
  snowflake.style.fontSize = size;

  // Randomize horizontal position
  const horizontalPosition = Math.random() * 100 + '%';
  snowflake.style.left = horizontalPosition;

  // Randomize animation duration
  const fallDuration = Math.random() * 5 + 5 + 's'; // Between 5s and 10s
  const driftDuration = Math.random() * 5 + 4 + 's'; // Between 4s and 9s
  snowflake.style.animationDuration = `${fallDuration}, ${driftDuration}`;

  // Append to container
  snowContainer.appendChild(snowflake);

  // Remove snowflake after it falls
  setTimeout(() => {
    snowflake.remove();
  }, parseFloat(fallDuration) * 1000);
}

// Create snowflakes at intervals
setInterval(createSnowflake, 200); // Creates a snowflake every 200ms
