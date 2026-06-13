document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.relative.h-\\[calc\\(100vh-65px\\)\\]');
    if (!sliderContainer) return;

    const slidesContainer = sliderContainer.querySelector('.absolute.inset-0.w-full.h-full.flex');
    const slides = slidesContainer.querySelectorAll('.relative.w-full.h-full.flex-shrink-0');
    const prevBtn = sliderContainer.querySelector('button span.material-symbols-outlined:contains("arrow_back_ios_new")')?.parentElement || sliderContainer.querySelectorAll('button')[0];
    const nextBtn = sliderContainer.querySelector('button span.material-symbols-outlined:contains("arrow_forward_ios")')?.parentElement || sliderContainer.querySelectorAll('button')[1];
    const dotsContainer = sliderContainer.querySelector('.absolute.bottom-6');
    const dots = dotsContainer ? dotsContainer.querySelectorAll('button') : [];

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;

    // Ensure we have the right elements
    if (!slidesContainer || slides.length === 0) return;

    // Function to update slider position
    const updateSlider = () => {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.remove('bg-white/50', 'hover:bg-white');
                dot.classList.add('bg-white');
            } else {
                dot.classList.add('bg-white/50', 'hover:bg-white');
                dot.classList.remove('bg-white');
            }
        });
    };

    // Next Slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    };

    // Prev Slide
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    };

    // Event Listeners
    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            resetAutoPlay();
        });
    });

    // Auto Play
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(nextSlide, 5000); // 5 seconds
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    // Initialize
    startAutoPlay();
});
