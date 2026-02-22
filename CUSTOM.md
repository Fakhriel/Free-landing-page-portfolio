# 🎨 Fakhriel Portfolio Template Customization Guide

This document provides a complete guide to customizing the portfolio template to fit your needs.

## 📑 Table of Contents
- [Personal Information](#personal-information)
- [Typewriter Effect](#typewriter-effect)
- [Marquee Text](#marquee-text)
- [Projects](#projects)
- [Tech Stack](#tech-stack)
- [Colors & Theme](#colors--theme)
- [Contact Form](#contact-form)
- [Social Media](#social-media)
- [Images](#images)

---

## 📝 Personal Information

### Change Name and Title
Find the following code in `index.html`:

```html
<div class="hero-name">
    <h1>Fakhriel</h1>                    <!-- Replace with your name -->
    <div class="title">Web Development</div>  <!-- Replace with your title -->
    <div class="subtitle">Hello !</div>   <!-- Replace with your subtitle -->
</div>
<p class="hero-description">
    Specializing in Web Development        <!-- Replace with your description -->
</p>

### Change Bio in About Section

<div class="about-text reveal">
    <h2>Creative Vision Meets Technical Excellence</h2>  <!-- Replace title -->
    <p>With over a decade of experience... </p>  <!-- Replace with your bio -->
    <p>My approach combines...</p>                    <!-- Second paragraph -->
    <p>Every project is...</p>                        <!-- Third paragraph -->
</div>

### Change Name in Profile Overlay

<div class="profile-info">
    <h3>Fakhriel Yusmana Shiddiq</h3>  <!-- Replace with your full name -->
    <p>Web Development</p>              <!-- Replace with your title -->
</div>

⌨️ Typewriter Effect
Change the text that appears in the typewriter effect:

<span class="auto-text" data-texts='["Web3 & Blockchain","UI/UX Design","Brand Strategy","Creative Direction"]'></span>

How to change: Replace the text inside the array, separated by commas. Example:

data-texts='["Frontend Developer","React Specialist","UI Designer","Tech Enthusiast"]'

🏷️ Marquee Text
Top Marquee (First Row)
<div class="marquee-track">
    <span class="marquee-item">• Creative Direction</span>
    <span class="marquee-item">• Brand Strategy</span>
    <!-- Add or remove as needed -->
</div>

Bottom Marquee (Second Row)
html
<div class="marquee-track reverse">
    <span class="marquee-item">• Minimalist Luxury</span>
    <span class="marquee-item">• Digital Experiences</span>
    <!-- Add or remove as needed -->
</div>
Tips: To add items, simply duplicate <span class="marquee-item">• Your Text</span>

💼 Projects
Project Slide Structure
<div class="project-slide">
    <div class="project-image">
        <img src="assets/work/dummyproject.webp" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Brand Identity System</h3>                          <!-- Project Title -->
        <p>Complete brand identity system...</p>                 <!-- Description -->
        <div class="project-tech">
            <span>Figma</span> <span>Illustrator</span>         <!-- Tech stack -->
        </div>
        <div class="project-links">
            <a href="#" class="project-link">                    <!-- Link 1 -->
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="#" class="project-link">                    <!-- Link 2 -->
                <i class="fab fa-github"></i> Source Code
            </a>
        </div>
    </div>
</div>

How to Add a New Project
1. Duplicate the .project-slide block inside .carousel-track
2. Update image, title, description, tech stack, and links
3. Add a new dot in .carousel-dots:

<div class="carousel-dots">
    <div class="carousel-dot active"></div>  <!-- Dot for project 1 -->
    <div class="carousel-dot"></div>          <!-- Dot for project 2 -->
    <div class="carousel-dot"></div>          <!-- Dot for project 3 -->
    <div class="carousel-dot"></div>          <!-- Dot for new project 4 -->
</div>

Icons for Project Links
-Live Demo: <i class="fas fa-external-link-alt"></i>
-GitHub: <i class="fab fa-github"></i>
-YouTube: <i class="fab fa-youtube"></i>
-Website: <i class="fas fa-globe"></i>
-Download: <i class="fas fa-download"></i>

🛠️ Tech Stack

Tech Item Structure
<div class="tech-item">
    <img src="assets/logotechstack/logoreact.webp" alt="React" class="tech-icon">
    <span>React</span>
</div>

How to Add New Tech Stack
1. Add the logo file to the assets/logotechstack/ folder
2. Duplicate the .tech-item block
3. Update src with your logo path
4. Update alt and span text with the technology name

Logo Size Recommendations
-Use logos sized 50x50 pixels or 1:1 aspect ratio
-Supported formats: .webp, .png, .jpg, .svg

🎨 Colors & Theme
Dark Theme (Default)
Edit in :root within style.css:

:root {
    --accent: #6366f1;        /* Primary color (replace with your color) */
    --accent-light: #818cf8;   /* Secondary color */
    --bg-dark: #0d0d0d;        /* Dark mode background */
    --text-light: #f5f5f5;     /* Dark mode text color */
    --card-bg: #1a1a1a;        /* Card background */
    --border: rgba(255, 255, 255, 0.1);
}

Light Theme
Edit in .light-theme within style.css:

.light-theme {
    --bg-dark: #f8fafc;        /* Light mode background */
    --text-light: #0f172a;      /* Light mode text color */
    --accent: #4f46e5;          /* Primary color for light mode */
    --accent-light: #6366f1;     /* Secondary color for light mode */
    --card-bg: #ffffff;          /* Light mode card background */
}

Gradient Background
Modify the gradient in body:
body {
    background-image: 
        radial-gradient(circle at 10% 20%, var(--gradient-1) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, var(--gradient-2) 0%, transparent 40%);
    /* Adjust positions and colors as needed */
}

📧 Contact Form
<form class="contact-form" action="https://formsubmit.co/fakhrielyusmanashiddiq@gmail.com" method="POST">

Additional FormSubmit Options
Add hidden inputs for configuration:
<!-- Redirect after submission -->
<input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html">

<!-- Auto reply -->
<input type="hidden" name="_autoresponse" value="Thank you for contacting me!">

<!-- Email template -->
<input type="hidden" name="_template" value="box">

Form Validation
The form already has required attributes on each field. For custom validation, edit in script.js.

🌐 Social Media
Update social media links in the footer:

<div class="social-links">
    <a href="https://linkedin.com/in/username" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://twitter.com/username" target="_blank" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com/username" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://github.com/username" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
    </a>
</div>

Add New Social Media (optional)
<a href="https://dribbble.com/username" target="_blank" aria-label="Dribbble">
    <i class="fab fa-dribbble"></i>
</a>

Available Icons:
-LinkedIn: fa-linkedin-in
-Twitter: fa-twitter
-Instagram: fa-instagram
-GitHub: fa-github
-Dribbble: fa-dribbble
-Behance: fa-behance
-YouTube: fa-youtube
-Medium: fa-medium
-Telegram: fa-telegram
-WhatsApp: fa-whatsapp

🖼️ Images
Assets Folder Structure
assets/
├── POTOPROFIL.webp           # Profile photo / logo (recommended size 400x400)
│
├── work/                     # Folder for project images
│   ├── project1.webp
│   ├── project2.webp
│   └── dummyproject.webp     # Default placeholder
│
└── logotechstack/            # Folder for tech stack logos
    ├── logoreact.webp
    ├── logonextjs.webp
    └── ...

Recommended Image Sizes
-Profile/Logo: 400x400 pixels (1:1 aspect ratio)
-Project Images: 800x600 pixels (4:3 aspect ratio) or 1200x800 pixels
-Tech Stack Icons: 50x50 pixels (1:1 aspect ratio)

Supported Formats
-.webp (recommended - best compression)
-.png (for transparency)
-.jpg (for photos)
-.svg (for icons/vectors)

Image Optimization Tips
Use WebP format for smaller file sizes
Compress images at TinyPNG or Squoosh
Maximum size per image: 200KB for optimal performance

⚡ Additional Tips
1. Change Animation Speed
In style.css, find and modify durations:
.carousel-track {
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);  /* Change 0.6s */
}
.reveal {
    transition: opacity 0.8s ease, transform 0.8s ease;       /* Change 0.8s */
}

2. Change Carousel Auto-Rotate
In script.js:
let carouselInterval = setInterval(nextSlide, 5000);  /* Change 5000 (ms) */

3. Disable Animations
Remove the reveal class from elements to disable scroll animations.

📞 Need Help?
If you have questions or issues:
Email: fakhrielyusmanashiddiq@gmail.com
GitHub: @fakhrielyusmanashiddiq