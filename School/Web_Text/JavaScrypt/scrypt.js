document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('1');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Check scroll direction
        if (currentScrollY > lastScrollY) {
            // Scrolling down 
            header.style.transform = `translateY(${window.scrollY /1}px)`;
        } else {
            // Scrolling up - show header
            header.style.transform = `translateY(${window.scrollY /1}px)`;
        }
        
        lastScrollY = currentScrollY;
    });
});