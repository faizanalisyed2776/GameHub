document.addEventListener('DOMContentLoaded', function() {
    // Animate stats counters
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // The lower the faster
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if(count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        });
    };
    
    // Set target values for counters
    document.getElementById('games-count').setAttribute('data-target', '12500');
    document.getElementById('users-count').setAttribute('data-target', '10250000');
    document.getElementById('countries-count').setAttribute('data-target', '178');
    document.getElementById('tournaments-count').setAttribute('data-target', '320');
    
    // Start animation when stats section is in view
    const statsSection = document.querySelector('.stats-section');
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animateCounters();
            observer.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
    
    // Team card hover effect enhancement
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const teamImage = card.querySelector('.team-image');
            teamImage.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            const teamImage = card.querySelector('.team-image');
            teamImage.style.transform = 'scale(1)';
        });
    });
    
    // Timeline item animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-20px)' : 'translateX(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        timelineObserver.observe(item);
    });
    
    // Lore section animation
    const loreItems = document.querySelectorAll('.lore-item');
    const loreObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if(entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });
    
    loreItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        loreObserver.observe(item);
    });
});