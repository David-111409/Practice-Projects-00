const show = document.querySelector(".clock");

function formatTime(n) {
    return n < 10 ? "0" + n : n;
}

function clock() {
    let now = new Date();
    let hours = now.getHours();
    let flag = "AM";
    if (hours >= 12) {
        flag = "PM";
    }

    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    let mins = now.getMinutes();
    let seconds = now.getSeconds();
    show.innerHTML = ` ${formatTime(hours) } : ${formatTime(
        mins
    )} : ${formatTime(seconds)} ${flag}`;
}

clock();
setInterval(clock, 1000);
