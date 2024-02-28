const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let sliderContianer = document.querySelector('.slider-container');

setInterval(() => {
    let last = sliderContianer.firstElementChild;
    last.remove();
    sliderContianer.appendChild(last);
}, 1750);