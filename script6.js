function fadeIn(element) {
    element.classList.add('fade-in');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;
            if (target.classList.contains('animate-slide-up')) {
                target.classList.add('slide-up');
            } else {
                fadeIn(target);
            }
            observer.unobserve(target);
        }
    });
}, { threshold: 0.5 });


document.querySelectorAll('.animate').forEach((element) => {
    observer.observe(element);
});