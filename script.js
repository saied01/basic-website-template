// FAQ function

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
})


// Timer function


function updateCountdown() {
    let finish = new Date("Sep 12, 2025 13:42:00").getTime();
    let start = new Date().getTime();

    let period = finish - start;

    const s = 1000, 
    m = s*60,
    h = m*60,
    d = h*24;

    let days = Math.floor(period / d),
        hours = Math.floor((period % d) / h),
        minutes = Math.floor((period % h) / m),
        seconds = Math.floor((period % m) / s);

    document.querySelector('.days').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();