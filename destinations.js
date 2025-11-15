// Destinations Page Functionality - Enhanced
document.addEventListener('DOMContentLoaded', function() {
    loadDestinations('all');
    
    const selectedDestId = sessionStorage.getItem('selectedDestination');
    if (selectedDestId) {
        showDestinationDetail(parseInt(selectedDestId));
        sessionStorage.removeItem('selectedDestination');
    }
});

function loadDestinations(category = 'all') {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;
    
    let destinations = Storage.getDestinations();
    
    if (category !== 'all') {
        destinations = destinations.filter(dest => dest.category === category);
    }
    
    if (destinations.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-map-marked-alt" style="font-size: 4rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h3>No destinations found</h3>
                <p>Try selecting a different category.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = destinations.map(dest => `
        <div class="destination-card" onclick="showDestinationDetail(${dest.id})">
            <img src="${dest.image}" alt="${dest.name}" class="destination-image" onerror="this.src='https://via.placeholder.com/600x400?text=${dest.name}'">
            <div class="destination-overlay">
                <h3 class="destination-title">${dest.name}</h3>
                <p class="destination-description">${dest.description}</p>
            </div>
        </div>
    `).join('');
}

function filterDestinations(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadDestinations(category);
}

function showDestinationDetail(destId) {
    const destination = Storage.getDestinationById(destId);
    if (!destination) return;
    
    const modal = document.getElementById('destinationModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = destination.name;
    
    const relatedPosts = Storage.getPosts()
        .filter(post => post.category === destination.category)
        .slice(0, 3);
    
    modalBody.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <img src="${destination.image}" alt="${destination.name}" 
                 style="width: 100%; height: 400px; object-fit: cover; border-radius: 10px;" 
                 onerror="this.src='https://via.placeholder.com/900x400?text=${destination.name}'">
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-info-circle"></i> Overview
            </h3>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-dark);">
                ${destination.description}
            </p>
        </div>
        
        ${destination.whyFamous ? `
            <div style="background: linear-gradient(135deg, rgba(255,107,53,0.1), rgba(26,101,158,0.1)); padding: 2rem; border-radius: 10px; margin-bottom: 2rem; border-left: 4px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-star"></i> Why ${destination.name} is Famous
                </h3>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-dark);">
                    ${destination.whyFamous}
                </p>
            </div>
        ` : ''}
        
        ${destination.coordinates ? `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                    <i class="fas fa-map-marker-alt"></i> Location & How to Reach
                </h3>
                <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 10px;">
                    <p style="margin-bottom: 1rem;">
                        <strong>Coordinates:</strong> ${destination.coordinates.lat}, ${destination.coordinates.lng}
                    </p>
                    <a href="https://www.google.com/maps?q=${destination.coordinates.lat},${destination.coordinates.lng}" 
                       target="_blank" class="btn btn-primary" style="display: inline-block;">
                        <i class="fas fa-map"></i> Open in Google Maps
                    </a>
                    <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 1rem;">
                        <i class="fas fa-info-circle"></i> Click the button above to get directions from your location
                    </p>
                </div>
            </div>
        ` : ''}
        
        ${destination.photos && destination.photos.length > 1 ? `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                    <i class="fas fa-images"></i> Photo Gallery
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    ${destination.photos.map(photo => `
                        <img src="${photo}" alt="${destination.name}" 
                             style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; cursor: pointer;"
                             onclick="window.open('${photo}', '_blank')"
                             onerror="this.src='https://via.placeholder.com/200'">
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-lightbulb"></i> Travel Tips
            </h3>
            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 10px;">
                <p style="margin-bottom: 1rem;">${destination.tips || 'Plan your visit during early morning or evening for the best experience.'}</p>
                <ul style="list-style: none; padding-left: 0;">
                    <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--success-color); margin-right: 0.5rem;"></i> Best time: October to March</li>
                    <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--success-color); margin-right: 0.5rem;"></i> Duration: 2-3 hours</li>
                    <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--success-color); margin-right: 0.5rem;"></i> Photography: Allowed</li>
                    <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--success-color); margin-right: 0.5rem;"></i> Suitable for families</li>
                </ul>
            </div>
        </div>
        
        ${relatedPosts.length > 0 ? `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">
                    <i class="fas fa-book-open"></i> Related Blog Posts
                </h3>
                <div style="display: grid; gap: 1rem;">
                    ${relatedPosts.map(post => `
                        <div style="background: var(--bg-light); padding: 1rem; border-radius: 10px; display: flex; gap: 1rem; cursor: pointer;" 
                             onclick="closeDestinationModal(); window.location.href='blog.html'; sessionStorage.setItem('selectedPost', ${post.id})">
                            <img src="${post.image}" alt="${post.title}" 
                                 style="width: 100px; height: 80px; object-fit: cover; border-radius: 8px;"
                                 onerror="this.src='https://via.placeholder.com/100x80'">
                            <div>
                                <h4 style="font-size: 1rem; margin-bottom: 0.3rem; color: var(--text-dark);">${post.title}</h4>
                                <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.3rem;">${post.excerpt.substring(0, 80)}...</p>
                                <span style="font-size: 0.8rem; color: var(--primary-color);">
                                    Read more <i class="fas fa-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="closeDestinationModal()">
                Close
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeDestinationModal() {
    document.getElementById('destinationModal').classList.remove('active');
}

document.getElementById('destinationModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeDestinationModal();
    }
});