// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    initNavigation();
    loadFeaturedPosts();
    loadPopularDestinations();
    loadRecentPosts();
    initNewsletter();
});

// Navigation Toggle
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Load Featured Posts
function loadFeaturedPosts() {
    const grid = document.getElementById('featuredPostsGrid');
    if (!grid) return;
    
    const featuredPosts = Storage.getFeaturedPosts().slice(0, 3);
    
    grid.innerHTML = featuredPosts.map(post => `
        <div class="post-card fade-in" onclick="viewPost(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <div class="post-meta">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-footer">
                    <div class="post-author">
                        <i class="fas fa-tag"></i> ${post.category}
                    </div>
                    <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Popular Destinations
function loadPopularDestinations() {
    const grid = document.getElementById('popularDestinations');
    if (!grid) return;
    
    const destinations = Storage.getDestinations().slice(0, 6);
    
    grid.innerHTML = destinations.map(dest => `
        <div class="destination-card fade-in" onclick="viewDestination(${dest.id})">
            <img src="${dest.image}" alt="${dest.name}" class="destination-image">
            <div class="destination-overlay">
                <h3 class="destination-title">${dest.name}</h3>
                <p class="destination-description">${dest.description}</p>
            </div>
        </div>
    `).join('');
}

// Load Recent Posts
function loadRecentPosts() {
    const list = document.getElementById('recentPostsList');
    if (!list) return;
    
    const recentPosts = Storage.getPosts().slice(0, 5);
    
    list.innerHTML = recentPosts.map(post => `
        <div class="post-item fade-in" onclick="viewPost(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-item-image">
            <div class="post-item-content">
                <div class="post-meta">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                    <span><i class="fas fa-tag"></i> ${post.category}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">Read Full Article <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// Newsletter Subscription
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    const message = document.getElementById('newsletterMessage');
    
    if (form && message) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (Storage.addSubscriber(email)) {
                message.textContent = '✓ Successfully subscribed! Thank you for joining us.';
                message.style.color = '#00b894';
                this.reset();
            } else {
                message.textContent = '✓ You are already subscribed!';
                message.style.color = '#fdcb6e';
            }
            
            setTimeout(() => {
                message.textContent = '';
            }, 3000);
        });
    }
}

// View Post Detail
function viewPost(postId) {
    // Store the post ID and redirect to blog page
    sessionStorage.setItem('selectedPost', postId);
    window.location.href = 'blog.html';
}

// View Destination Detail
function viewDestination(destId) {
    sessionStorage.setItem('selectedDestination', destId);
    window.location.href = 'destinations.html';
}

// Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}, 100);