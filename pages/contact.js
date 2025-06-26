document.addEventListener('DOMContentLoaded', () => {
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form submission logic here
        console.log('Form submitted!');
        
        // Example: Show success message
        alert('Thank you for your message! We will respond shortly.');
        
        // Reset form
        contactForm.reset();
    });

    // Add any additional interactive features here
    // Example: Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom >= 0) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
});