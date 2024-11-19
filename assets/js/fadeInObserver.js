document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    images.forEach(img => {
        observer.observe(img); 
    });
});
