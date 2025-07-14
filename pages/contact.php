<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | GameHub</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="contact.css">
</head>
<body data-theme="light">
    <div class="particle-container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
    </div>

   <nav class="navbar">
    <div class="nav-left">
    <button class="hamburger" id="hamburger"><i class='bx bx-menu'></i></button>     
      <div class="logo"><i class='bx bxs-game'></i> <span>GameHub</span></div>
    </div>
    <div class="nav-links" id="navLinks">
      <ul>
          <li><a href="/GameHub/index.php"><i class='bx bx-home'></i> Home</a></li>
        <li><a href="/GameHub/index.php#web-games"><i class='bx bx-joystick'></i> Games</a></li>
        <li><a href="about.php"><i class='bx bx-user'></i> About Us</a></li>
         <li><a href="games.php"><i class='bx  bx-store-alt'  ></i>  Store</a></li>
        <li><a href="contact.php"><i class='bx bx-envelope'></i> Contact</a></li>
      </ul>
    </div>
    <div class="nav-right">
        <button class="theme-toggle" id="themeToggle">
            <i class='bx bx-sun'></i>
        </button>
        <a href="join.php"><button class="join-button">Join</button></a>
    </div>
  </nav>  
    <div class="contact-container">
        <div class="page-header">
            <h1>Contact Us</h1>
            <p>Have questions or need support? Reach out to us through the form below or use our contact information.</p>
        </div>

        <div class="contact-grid">
            <div class="contact-info">
                <div class="info-card">
                    <i class="las la-map-marker"></i>
                    <h3>Our Office</h3>
                    <p>123 Tech Street<br>Digital City, DC 4567</p>
                </div>

                <div class="info-card">
                    <i class="las la-phone"></i>
                    <h3>Phone Number</h3>
                    <p>+1 (555) 123-4567<br>Mon-Fri: 9AM - 5PM</p>
                </div>

                <div class="info-card">
                    <i class="las la-envelope"></i>
                    <h3>Email Address</h3>
                    <p>support@gamehub.com<br>contact@gamehub.com</p>
                </div>
            </div>

            <div class="contact-form">
                <form id="contactForm" action="contact_data.php" method="post">
                    <div class="form-group">
                        <div class="input-box">
                            <i class="las la-user"></i>
                            <input type="text" name="f_name" placeholder="Your Name" required>
                        </div>
                        <div class="input-box">
                            <i class="las la-envelope"></i>
                            <input type="email" name="email" placeholder="Your Email" required>
                        </div>
                    </div>

                    <div class="input-box">
                        <i class="las la-book"></i>
                        <input type="text" name="subject" placeholder="Subject" required>
                    </div>

                    <div class="input-box">
                        <i class="las la-comment"></i>
                        <textarea name="message" placeholder="Your Message" required></textarea>
                    </div>

                    <button type="submit" class="submit-btn">
                        Send Message
                        <i class="las la-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>About GameHub</h3>
                <p>Welcome to GameHub, your ultimate destination for the latest and greatest in gaming. From AAA titles to indie gems, we bring you the best deals, news, and community events.</p>
                <div class="social-icons">
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                    <a href="#"><i class='bx bxl-youtube'></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/index.php"><i class='bx bx-chevron-right'></i> Home</a></li>
                    <li><a href="/index.php#web-games"><i class='bx bx-chevron-right'></i> Web Games</a></li>
                    <li><a href="games.php"><i class='bx bx-chevron-right'></i> All Games</a></li>
                    <li><a href="contact.php"><i class='bx bx-chevron-right'></i> Contact Us</a></li>
                    <li><a href="about.php"><i class='bx bx-chevron-right'></i> About Us</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2025 GameHub. All Rights Reserved.</p>
            <p>Designed with <i class='bx bx-heart'></i> by Faizan Ali</p>
        </div>
    </footer>

    <script src="contact.js"></script>
</body>
</html>
