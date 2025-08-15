const birth = document.getElementById("date-input");
const cal = document.getElementById("calc-age-btn");
const year = document.getElementById("years"),
    month = document.getElementById("months"),
    days = document.getElementById("days");

function getResult() {
    const birthDate = birth.value;
    const now = new Date();
    let [Byear, Bmonth, Bday] = birthDate.split("-").map(Number);
    Bmonth -= 1;

    let [Nyear, Nmonth, Nday] = [
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
    ];

    let years = Nyear - Byear;
    let months = Nmonth - Bmonth;
    let days = Nday - Bday;

    // Adjust if current month/day is before birth month/day
    if (days < 0) {
        // Get number of days in previous month
        const prevMonth = new Date(Nyear, Nmonth, 0).getDate();
        days += prevMonth;
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }
    console.log(`${years} years, ${months} months, ${days} days`);
    return [years ,  months, days];
}

cal.addEventListener("click", () => {
   [year.textContent, month.textContent, days.textContent] = getResult();
});
