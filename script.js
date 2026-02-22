/**
 * Portfolio Website - Main JavaScript
 * Clean, optimized, with modern features
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initTabs();
    initCarousel();
    initScrollReveal();
    initSmoothScroll();
    initThemeToggle();
    initImageFallback();
    initTechStackHover();
    initMarqueeHover();
    initNavbarScroll();
    initProjectDetails();
});

// ------------------- 1. SINGLE TYPEWRITER -------------------
function initTypewriter() {
    const element = document.querySelector('.auto-text');
    if (!element) return;

    const texts = JSON.parse(element.getAttribute('data-texts') || '[]');
    if (!texts.length) return;

    let currentIndex = 0;
    let isDeleting = false;
    let charIndex = 0;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[currentIndex];

        if (!isDeleting) {
            // Typing
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;

            if (charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end
            }
        } else {
            // Deleting
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;

            if (charIndex === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before next
            }
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

// ------------------- 2. TABS (Portfolio / Tech Stack) -------------------
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// ------------------- 3. CAROUSEL -------------------
function initCarousel() {
    const slides = document.querySelectorAll('.project-slide');
    if (!slides.length) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    const carouselTrack = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentSlide));
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    dots.forEach((dot, index) => dot.addEventListener('click', () => goToSlide(index)));

    // Auto rotate
    let carouselInterval = setInterval(nextSlide, 5000);
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => clearInterval(carouselInterval));
        carouselContainer.addEventListener('mouseleave', () => {
            clearInterval(carouselInterval);
            carouselInterval = setInterval(nextSlide, 5000);
        });
    }

    updateCarousel();
    window.addEventListener('resize', updateCarousel);
}

// ------------------- 4. TWO-WAY SCROLL REVEAL (Intersection Observer) -------------------
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Remove class when out of viewport → two-way animation
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ------------------- 5. SMOOTH SCROLL FOR ANCHOR LINKS -------------------
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ------------------- 6. DARK / LIGHT THEME TOGGLE -------------------
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = toggleBtn.querySelector('i');
    const body = document.body;

    // Check localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const isLight = body.classList.contains('light-theme');
        if (isLight) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ------------------- 7. IMAGE ERROR HANDLER -------------------
function initImageFallback() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Image failed to load: ${this.src}`);
            this.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
            this.style.padding = '10px';
            this.style.borderRadius = '5px';
            this.alt = 'Image not available';
        });
    });
}

// ------------------- 8. TECH STACK HOVER (grayscale to color) -------------------
function initTechStackHover() {
    document.querySelectorAll('.tech-item').forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            img.style.filter = 'grayscale(100%) brightness(0.7)';
            img.style.transition = 'filter 0.3s ease, transform 0.3s ease';
            item.addEventListener('mouseenter', () => {
                img.style.filter = 'grayscale(0%) brightness(1)';
                img.style.transform = 'scale(1.1)';
            });
            item.addEventListener('mouseleave', () => {
                img.style.filter = 'grayscale(100%) brightness(0.7)';
                img.style.transform = 'scale(1)';
            });
        }
    });
}

// ------------------- 9. MARQUEE HOVER EFFECT -------------------
function initMarqueeHover() {
    document.querySelectorAll('.marquee-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = 'rgba(255, 255, 255, 1)';
            item.style.textShadow = '0 0 10px rgba(99, 102, 241, 0.5)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.color = '';
            item.style.textShadow = '';
        });
    });
}

// ------------------- 10. NAVBAR SCROLL EFFECT -------------------
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'var(--nav-bg)';
            nav.style.padding = '10px 25px';
            nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        } else {
            nav.style.background = 'var(--nav-bg)';
            nav.style.padding = '12px 30px';
            nav.style.boxShadow = 'none';
        }
    });
}

// ------------------- 11. PROJECT DETAIL MODAL -------------------
function initProjectDetails() {
    if (!document.querySelector('.project-modal')) {
        createModal();
    }
    
    const viewButtons = document.querySelectorAll('.project-link');
    
    viewButtons.forEach((button, index) => {
        // Delete event listener with clone
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Add New event listener 
        newButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Search project slide 
            const projectSlide = newButton.closest('.project-slide');
            if (projectSlide) {
                showProjectDetails(projectSlide);
            }
        });
    });
}

// Created struktur modal
function createModal() {
    const modalHTML = `
        <div class="project-modal">
            <div class="modal-overlay"></div>
            <div class="modal-container">
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-content">
                    <!-- Content will be inserted here -->
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Close modal events
    const modal = document.querySelector('.project-modal');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => hideModal());
    overlay.addEventListener('click', () => hideModal());
    
    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            hideModal();
        }
    });
}

// Show detail project
function showProjectDetails(projectSlide) {
    // Extract data dari project slide
    const image = projectSlide.querySelector('.project-image img').src;
    const title = projectSlide.querySelector('.project-content h3').textContent;
    const description = projectSlide.querySelector('.project-content p').textContent;
    
    // Take tech stack
    const techItems = projectSlide.querySelectorAll('.project-tech span');
    const techStack = Array.from(techItems).map(span => span.textContent);
    
    // Take links
    const links = projectSlide.querySelectorAll('.project-link');
    const projectLinks = Array.from(links).map(link => ({
        text: link.textContent.trim(),
        href: link.href,
        icon: link.querySelector('i').className
    }));
    
    // Generate tech stack HTML
    const techHTML = techStack.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('');
    
    // Generate links HTML
    const linksHTML = projectLinks.map(link => `
        <a href="${link.href}" target="_blank" class="modal-link">
            <i class="${link.icon}"></i>
            ${link.text}
        </a>
    `).join('');
    
    // Modal content
    const content = `
        <div class="modal-grid">
            <div class="modal-image">
                <img src="${image}" alt="${title}">
            </div>
            <div class="modal-details">
                <h2 class="modal-title">${title}</h2>
                <p class="modal-description">${description}</p>
                
                <div class="modal-section">
                    <h4>Technologies Used</h4>
                    <div class="modal-tech-stack">
                        ${techHTML}
                    </div>
                </div>
                
                <div class="modal-section">
                    <h4>Project Links</h4>
                    <div class="modal-links">
                        ${linksHTML}
                    </div>
                </div>
                
                <div class="modal-section">
                    <h4>Additional Info</h4>
                    <ul class="modal-features">
                        <li><i class="fas fa-check-circle"></i> Fully responsive design</li>
                        <li><i class="fas fa-check-circle"></i> Modern UI/UX practices</li>
                        <li><i class="fas fa-check-circle"></i> Performance optimized</li>
                        <li><i class="fas fa-check-circle"></i> Cross-browser compatible</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    // Insert content and show modal
    document.querySelector('.modal-content').innerHTML = content;
    showModal();
}

function showModal() {
    const modal = document.querySelector('.project-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function hideModal() {
    const modal = document.querySelector('.project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

