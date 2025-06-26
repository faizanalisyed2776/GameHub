document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle'); // Theme toggle button
  const themeIcon = document.getElementById('themeIcon'); // Icon inside the toggle button
  const body = document.body; // Body element to apply the theme

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    // Apply the saved theme
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme); // Update the icon based on the saved theme
  } else {
    // Default to light theme if no theme is saved
    body.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  // Toggle Theme on Button Click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme'); // Get the current theme
      const newTheme = currentTheme === 'light' ? 'dark' : 'light'; // Toggle between light and dark
      body.setAttribute('data-theme', newTheme); // Apply the new theme
      localStorage.setItem('theme', newTheme); // Save the new theme in localStorage
      updateThemeIcon(newTheme); // Update the icon based on the new theme
    });
  }

  // Update Theme Icon
  function updateThemeIcon(theme) {
    if (themeIcon) {
      if (theme === 'light') {
        // Change icon to sun for light theme
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
      } else {
        // Change icon to moon for dark theme
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
      }
    }
  }
});
// Smooth hover animations for upcoming cards
document.addEventListener('DOMContentLoaded', () => {
  const upcomingCards = document.querySelectorAll('.upcoming-card');

  upcomingCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // X coordinate within the card
      const y = e.clientY - rect.top; // Y coordinate within the card

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault();

          // Create particles
          for (let i = 0; i < 20; i++) {
              const particle = document.createElement('div');
              particle.classList.add('particle');
              particle.style.left = `${Math.random() * 100}%`;
              particle.style.top = `${Math.random() * 100}%`;
              particle.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
              button.appendChild(particle);

              // Remove particle after animation
              particle.addEventListener('animationend', () => {
                  particle.remove();
              });
          }
      });
  });
});