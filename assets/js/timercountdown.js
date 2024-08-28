let timeLeft = 60; // starting time in seconds
const timerElement = document.getElementById('timer');

// Function to format and display the time
function updateTimerDisplay(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Format the time as [MM:SS]
    let formattedTime = 
        '[' + 
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds +
        ']';
    
    timerElement.textContent = formattedTime;
}

// Display the initial time
updateTimerDisplay(timeLeft);

let countdown;

function startCountdown() {
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay(timeLeft);
        } else {
            clearInterval(countdown);
            timerElement.textContent = "[00:00]";
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdown);
}

// Use IntersectionObserver to start the countdown when the timer is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCountdown();
        } else {
            stopCountdown();
        }
    });
}, { threshold: 0.5 });

// Observe the timer element
observer.observe(timerElement);
