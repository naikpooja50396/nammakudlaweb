// Guides Page Functionality

document.addEventListener('DOMContentLoaded', function() {
    loadGuides();
});

// Load All Guides
function loadGuides() {
    const grid = document.getElementById('guidesGrid');
    if (!grid) return;
    
    const guides = Storage.getGuides();
    
    grid.innerHTML = guides.map(guide => `
        <div class="post-card" onclick="showGuideDetail(${guide.id})" style="cursor: pointer;">
            <img src="${guide.photo}" alt="${guide.name}" class="post-image" style="height: 300px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/400x300?text=${guide.name}'">
            <div class="post-content">
                <h3 class="post-title">${guide.name}</h3>
                <p class="post-excerpt">${guide.bio.substring(0, 100)}...</p>
                
                <div style="margin: 1rem 0;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <div style="color: #FFD700;">
                            ${'★'.repeat(Math.floor(guide.rating))}${'☆'.repeat(5 - Math.floor(guide.rating))}
                        </div>
                        <span style="color: var(--text-light); font-size: 0.9rem;">${guide.rating}/5.0</span>
                    </div>
                    <div style="display: flex; gap: 1rem; font-size: 0.85rem; color: var(--text-light);">
                        <span><i class="fas fa-comments"></i> ${guide.reviews} reviews</span>
                        <span><i class="fas fa-route"></i> ${guide.tours} tours</span>
                    </div>
                </div>
                
                <div style="display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 1rem;">
                    ${guide.expertise.slice(0, 2).map(exp => 
                        <span style="background: var(--bg-light); padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.85rem;">${exp}</span>
                    ).join('')}
                </div>
                
                <div class="post-footer" style="margin-top: 1rem;">
                    <span class="read-more">View Profile <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    `).join('');
}

// Show Guide Detail
function showGuideDetail(guideId) {
    const guide = Storage.getGuideById(guideId);
    if (!guide) return;
    
    const modal = document.getElementById('guideModal');
    const modalTitle = document.getElementById('guideModalTitle');
    const modalBody = document.getElementById('guideModalBody');
    
    modalTitle.textContent = guide.name;
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <img src="${guide.photo}" alt="${guide.name}" 
                 style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 5px solid var(--primary-color);"
                 onerror="this.src='https://via.placeholder.com/200?text=${guide.name}'">
            <h2 style="margin-top: 1rem; color: var(--secondary-color);">${guide.name}</h2>
            <div style="color: #FFD700; font-size: 1.2rem; margin: 0.5rem 0;">
                ${'★'.repeat(Math.floor(guide.rating))}${'☆'.repeat(5 - Math.floor(guide.rating))}
                <span style="color: var(--text-dark); font-size: 1rem; margin-left: 0.5rem;">${guide.rating}/5.0</span>
            </div>
            <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 1rem; font-size: 0.9rem; color: var(--text-light);">
                <span><i class="fas fa-comments"></i> ${guide.reviews} reviews</span>
                <span><i class="fas fa-route"></i> ${guide.tours} tours completed</span>
            </div>
        </div>
        
        <div style="background: var(--bg-light); padding: 2rem; border-radius: 10px; margin-bottom: 2rem;">
            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-user"></i> About
            </h3>
            <p style="line-height: 1.8; color: var(--text-dark);">${guide.bio}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-star"></i> Expertise
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.8rem;">
                ${guide.expertise.map(exp => 
                    <span style="background: var(--primary-color); color: white; padding: 0.5rem 1.2rem; border-radius: 25px;">${exp}</span>
                ).join('')}
            </div>
        </div>
        
        <div style="background: var(--bg-light); padding: 2rem; border-radius: 10px; margin-bottom: 2rem;">
            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-address-book"></i> Contact Information
            </h3>
            <div style="display: grid; gap: 1rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <i class="fas fa-envelope" style="color: var(--primary-color); font-size: 1.2rem;"></i>
                    <span>${guide.email}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <i class="fas fa-phone" style="color: var(--primary-color); font-size: 1.2rem;"></i>
                    <span>${guide.phone}</span>
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-share-alt"></i> Connect on Social Media
            </h3>
            <div style="display: flex; gap: 1rem;">
                <a href="${guide.social.facebook}" class="btn btn-outline" style="flex: 1; text-align: center;">
                    <i class="fab fa-facebook"></i> Facebook
                </a>
                <a href="${guide.social.instagram}" class="btn btn-outline" style="flex: 1; text-align: center;">
                    <i class="fab fa-instagram"></i> Instagram
                </a>
                <a href="${guide.social.twitter}" class="btn btn-outline" style="flex: 1; text-align: center;">
                    <i class="fab fa-twitter"></i> Twitter
                </a>
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, var(--secondary-color), var(--accent-color)); padding: 2rem; border-radius: 10px; color: white; text-align: center;">
            <h3 style="margin-bottom: 1rem;">Ready to Book a Tour?</h3>
            <p style="margin-bottom: 1.5rem; opacity: 0.9;">Contact ${guide.name} directly for personalized travel experiences in Mangalore</p>
            <button class="btn btn-primary" onclick="contactGuide('${guide.email}')">
                <i class="fas fa-paper-plane"></i> Contact Guide
            </button>
        </div>
        
        <div style="margin-top: 2rem;">
            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-comment-dots"></i> Leave Feedback
            </h3>
            <form onsubmit="submitGuideFeedback(event, ${guide.id})" style="background: var(--bg-light); padding: 1.5rem; border-radius: 10px;">
                <div class="form-group">
                    <label>Your Name *</label>
                    <input type="text" required style="width: 100%; padding: 10px; border: 2px solid var(--border-color); border-radius: 8px;">
                </div>
                <div class="form-group">
                    <label>Rating *</label>
                    <select required style="width: 100%; padding: 10px; border: 2px solid var(--border-color); border-radius: 8px;">
                        <option value="">Select rating...</option>
                        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                        <option value="4">⭐⭐⭐⭐ Very Good</option>
                        <option value="3">⭐⭐⭐ Good</option>
                        <option value="2">⭐⭐ Fair</option>
                        <option value="1">⭐ Poor</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Your Review *</label>
                    <textarea required style="width: 100%; padding: 10px; border: 2px solid var(--border-color); border-radius: 8px; min-height: 100px;"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Feedback</button>
            </form>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close Guide Modal
function closeGuideModal() {
    document.getElementById('guideModal').classList.remove('active');
}

// Contact Guide
function contactGuide(email) {
    window.location.href = 'mailto:${email}?subject=Tour Inquiry - Namma Kudla';
}

// Submit Guide Feedback
function submitGuideFeedback(event, guideId) {
    event.preventDefault();
    alert('Thank you for your feedback! Your review has been submitted.');
    event.target.reset();
}

// Close modal when clicking outside
document.getElementById('guideModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeGuideModal();
    }
});