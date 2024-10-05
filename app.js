function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
    }

    // Add leading zero if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${period}`;
    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
