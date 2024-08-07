let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let suffix = valueDisplay.getAttribute("data-suffix") || ""; // Default to empty string if no suffix is set
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue + suffix;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});