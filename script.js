//Form pop up functionality
let overlay = document.querySelector('.form-overlay')
let form = document.querySelector('.form-container')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    overlay.classList.add('showOverlay')
    form.classList.add('showForm')
})

overlay.addEventListener('click', (e) => {
    if (e.target == overlay) {
        overlay.classList.remove('showOverlay')
        form.classList.remove('showForm')
    }
})



// Slider configuration
const config = {
    slidesPerView: 3,
    slideWidth: 400,
    autoplayInterval: 2500 // 5 seconds
};

// DOM elements
const slider = document.querySelector('.card-list');
const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

// State
let currentIndex = 0;
const totalSlides = slides.length;

// Function to update slider position
const updateSliderPosition = () => {
    slider.style.transform = `translateX(-${currentIndex * config.slideWidth}px)`;
    updateDots();
};

// Function to update dots
const updateDots = () => {
    const activeDotIndex = Math.floor(currentIndex / config.slidesPerView);
    dots.forEach((dot, index) => {
        dot.classList.toggle('active-dot', index === activeDotIndex);
    });
};

// Function to move to next slide
const nextSlide = () => {
    currentIndex = (currentIndex + config.slidesPerView) % totalSlides;
    updateSliderPosition();
};

// Function to move to previous slide
const prevSlide = () => {
    currentIndex = (currentIndex - config.slidesPerView + totalSlides) % totalSlides;
    updateSliderPosition();
};

// Set up autoplay
let autoplayInterval = setInterval(nextSlide, config.autoplayInterval);

// Event listener for dots
dots.forEach(dot => {
    dot.addEventListener('click', function () {
        const dotIndex = parseInt(this.getAttribute('data-index'));
        currentIndex = dotIndex * config.slidesPerView;
        updateSliderPosition();
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(nextSlide, config.autoplayInterval);
    });
});

// Initial update
updateSliderPosition();



// Changing image and background color on every click
let asideContainer = document.querySelectorAll('.aside-content')
let changeImg = document.querySelector("#project > div.food-img-sec > img")

asideContainer.forEach(element => {
    element.addEventListener('click', (e) => {
        // console.log(element.classList.add('active'));

        if (element.classList.contains('active')) {
            element.classList.add('active')
        } else {
            asideContainer.forEach((el) => {
                el.classList.remove('active')
            })
            if (element.id === 'para1') {
                changeImg.src = `images/img2.png`
            } else if (element.id === 'para2') {
                changeImg.src = `images/food1.jpg`
            } else if (element.id === 'para3') {
                changeImg.src = `images/food2.jpg`
            }
            element.classList.add('active')
        }
    })
});
