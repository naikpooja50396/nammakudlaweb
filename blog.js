// Blog Page Functionality - Enhanced with Photos/Videos
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    const selectedPostId = sessionStorage.getItem('selectedPost');
    
    if (selectedPostId) {
        showPostDetail(parseInt(selectedPostId));
        sessionStorage.removeItem('selectedPost');
    } else {
        initBlogList();
    }
    
    initSearch();
    initCategoryFilters();
    loadSidebarRecentPosts();
});

function initBlogList() {
    const postsGrid = document.getElementById('postsGrid');
    const postDetail = document.getElementById('postDetail');
    
    if (postsGrid) postsGrid.style.display = 'grid';
    if (postDetail) postDetail.style.display = 'none';
    
    loadPosts(currentFilter);
}

function loadPosts(category = 'all') {
    const postsGrid = document.getElementById('postsGrid');
    if (!postsGrid) return;
    
    let posts = category === 'all' 
        ? Storage.getPosts() 
        : Storage.getPostsByCategory(category);
    
    if (posts.length === 0) {
        postsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-inbox" style="font-size: 4rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h3>No posts found</h3>
                <p>Try selecting a different category or search term.</p>
            </div>
        `;
        return;
    }
    
    postsGrid.innerHTML = posts.map(post => `
        <div class="post-card fade-in" onclick="showPostDetail(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-image" onerror="this.src='https://via.placeholder.com/800x600?text=Namma+Kudla'">
            <div class="post-content">
                <div class="post-meta">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                    ${post.location ? <span><i class="fas fa-map-marker-alt"></i> ${post.location}</span> : ''}
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-footer">
                    <div class="post-author">
                        <i class="fas fa-tag"></i> ${post.category}
                    </div>
                    <a href="#" class="read-more" onclick="event.stopPropagation(); showPostDetail(${post.id})">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function showPostDetail(postId) {
    const post = Storage.getPostById(postId);
    if (!post) return;
    
    const postsGrid = document.getElementById('postsGrid');
    const postDetail = document.getElementById('postDetail');
    const filterButtons = document.getElementById('filterButtons');
    
    if (postsGrid) postsGrid.style.display = 'none';
    if (filterButtons) filterButtons.style.display = 'none';
    if (postDetail) {
        postDetail.style.display = 'block';
        postDetail.innerHTML = `
            <button onclick="backToList()" class="btn btn-outline" style="margin-bottom: 2rem;">
                <i class="fas fa-arrow-left"></i> Back to Posts
            </button>
            
            <article class="post-detail">
                <div class="post-detail-header">
                    <h1 class="post-detail-title">${post.title}</h1>
                    <div class="post-detail-meta">
                        <span><i class="fas fa-user"></i> ${post.author}</span>
                        <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                        <span><i class="fas fa-tag"></i> ${post.category}</span>
                        ${post.location ? <span><i class="fas fa-map-marker-alt"></i> ${post.location}</span> : ''}
                        <span><i class="fas fa-comment"></i> ${post.comments.length} Comments</span>
                    </div>
                </div>
                
                <img src="${post.image}" alt="${post.title}" class="post-detail-image" onerror="this.src='https://via.placeholder.com/1200x600?text=Namma+Kudla'">
                
                <div class="post-detail-content">
                    ${post.content || '<p>' + post.excerpt + '</p>'}
                </div>
                
                ${post.photos && post.photos.length > 0 ? `
                    <div style="margin: 3rem 0;">
                        <h3 style="color: var(--secondary-color); margin-bottom: 1.5rem;">
                            <i class="fas fa-images"></i> Photo Gallery
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                            ${post.photos.map(photo => `
                                <img src="${photo}" alt="Gallery" 
                                     style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; cursor: pointer;"
                                     onclick="window.open('${photo}', '_blank')"
                                     onerror="this.src='https://via.placeholder.com/250x200'">
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${post.videos && post.videos.length > 0 ? `
                    <div style="margin: 3rem 0;">
                        <h3 style="color: var(--secondary-color); margin-bottom: 1.5rem;">
                            <i class="fas fa-video"></i> Videos
                        </h3>
                        <div style="display: grid; gap: 2rem;">
                            ${post.videos.map(video => `
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 10px;">
                                    <iframe src="${video}" 
                                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem;">
                    ${post.tags.map(tag => <span class="tag-badge">${tag}</span>).join('')}
                </div>
            </article>
            
            <section class="comments-section">
                <h2><i class="fas fa-comments"></i> Comments (${post.comments.length})</h2>
                
                <div class="comment-form">
                    <h3>Leave a Comment</h3>
                    <form id="commentForm" onsubmit="submitComment(event, ${post.id})">
                        <div class="form-group">
                            <label for="commentName">Name *</label>
                            <input type="text" id="commentName" required>
                        </div>
                        <div class="form-group">
                            <label for="commentEmail">Email *</label>
                            <input type="email" id="commentEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="commentText">Comment *</label>
                            <textarea id="commentText" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Post Comment</button>
                    </form>
                </div>
                
                <ul class="comments-list" id="commentsList">
                    ${post.comments.length > 0 
                        ? post.comments.map(comment => `
                            <li class="comment-item">
                                <div class="comment-header">
                                    <span class="comment-author">${comment.name}</span>
                                    <span class="comment-date">${formatDate(comment.date)}</span>
                                </div>
                                <p>${comment.text}</p>
                            </li>
                        `).join('')
                        : '<p style="text-align: center; color: var(--text-light);">No comments yet. Be the first to comment!</p>'
                    }
                </ul>
            </section>
        `;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function backToList() {
    const postsGrid = document.getElementById('postsGrid');
    const postDetail = document.getElementById('postDetail');
    const filterButtons = document.getElementById('filterButtons');
    
    if (postsGrid) postsGrid.style.display = 'grid';
    if (filterButtons) filterButtons.style.display = 'flex';
    if (postDetail) postDetail.style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitComment(event, postId) {
    event.preventDefault();
    
    const name = document.getElementById('commentName').value;
    const email = document.getElementById('commentEmail').value;
    const text = document.getElementById('commentText').value;
    
    const comment = { name, email, text };
    Storage.addComment(postId, comment);
    
    showPostDetail(postId);
    alert('Comment posted successfully!');
}

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchPosts();
            }
        });
    }
}

function searchPosts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query.length === 0) {
        loadPosts(currentFilter);
        return;
    }
    
    const results = Storage.searchPosts(query);
    const postsGrid = document.getElementById('postsGrid');
    
    if (results.length === 0) {
        postsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h3>No results found for "${query}"</h3>
                <p>Try different keywords or browse our categories.</p>
            </div>
        `;
        return;
    }
    
    postsGrid.innerHTML = results.map(post => `
        <div class="post-card" onclick="showPostDetail(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-image" onerror="this.src='https://via.placeholder.com/800x600?text=Namma+Kudla'">
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

function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-category');
            loadPosts(currentFilter);
        });
    });
    
    const categoryLinks = document.querySelectorAll('.categories-list a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            currentFilter = category;
            
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                }
            });
            
            loadPosts(category);
            window.scrollTo({ top: 400, behavior: 'smooth' });
        });
    });
    
    const tagBadges = document.querySelectorAll('.tag-badge');
    tagBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            const tag = this.textContent.trim();
            document.getElementById('searchInput').value = tag;
            searchPosts();
        });
    });
}

function loadSidebarRecentPosts() {
    const container = document.getElementById('sidebarRecentPosts');
    if (!container) return;
    
    const recentPosts = Storage.getPosts().slice(0, 5);
    
    container.innerHTML = recentPosts.map(post => `
        <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); cursor: pointer;" onclick="showPostDetail(${post.id})">
            <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-dark);">${post.title}</h4>
            <div style="font-size: 0.85rem; color: var(--text-light);">
                <i class="fas fa-calendar"></i> ${formatDate(post.date)}
            </div>
        </div>
    `).join('');
}

function openCreatePostModal() {
    document.getElementById('createPostModal').classList.add('active');
}

function closeCreatePostModal() {
    document.getElementById('createPostModal').classList.remove('active');
}

document.getElementById('createPostForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const photoUrls = document.getElementById('postPhotos').value
        .split('\n')
        .map(url => url.trim())
        .filter(url => url.length > 0);
    
    const videoUrls = document.getElementById('postVideos').value
        .split('\n')
        .map(url => url.trim())
        .filter(url => url.length > 0);
    
    const newPost = {
        title: document.getElementById('postTitle').value,
        author: document.getElementById('postAuthor').value,
        category: document.getElementById('postCategory').value,
        excerpt: document.getElementById('postExcerpt').value,
        content: document.getElementById('postContent').value,
        image: document.getElementById('postImage').value,
        tags: document.getElementById('postTags').value.split(',').map(tag => tag.trim()),
        location: document.getElementById('postLocation').value,
        photos: photoUrls,
        videos: videoUrls,
        featured: false
    };
    
    Storage.addPost(newPost);
    closeCreatePostModal();
    this.reset();
    
    backToList();
    loadPosts(currentFilter);
    
    alert('Post created successfully with photos and videos!');
});

document.getElementById('createPostModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeCreatePostModal();
    }
});

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}