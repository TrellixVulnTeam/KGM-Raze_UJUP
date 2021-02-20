//Image slider 
const slider = document.querySelectorAll('.main__slider');
const next = document.querySelector('#nextBtn');
const prev = document.querySelector('#prevBtn');
const auto = true;
const intervalTime = 6000;
let slideInterval;

const nextSlide = () => {
    //Get currentSlide class
    const current = document.querySelector('.currentSlide');
    // Remove currentSlide class
    current.classList.remove('currentSlide');
    // chech for next slide
    if(current.nextElementSibling){
        //add currentSlide to next sibling
        current.nextElementSibling.classList.add('currentSlide');
    } else {
        slider[0].classList.add('currentSlide');
    }
    setTimeout(() => current.classList.remove('currentSlide'));
}

const prevSlide = () => {
    //Get currentSlide class
    const current = document.querySelector('.currentSlide');
    // Remove currentSlide class
    current.classList.remove('currentSlide');
    // chech for previous slide
    if(current.previousElementSibling){
        //add currentSlide to next sibling
        current.previousElementSibling.classList.add('currentSlide');
    } else {
        slider[slider.length - 1].classList.add('currentSlide');
    }
    setTimeout(() => current.classList.remove('currentSlide'));
}

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if(auto){
    // run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

// End image slider

// Hamburger Menu
const menuBtn = document.querySelector('.hamburger');
const navigation = document.querySelector('.js-navigation');

menuBtn.addEventListener('click', ()=>{
    navigation.classList.toggle('active');
})