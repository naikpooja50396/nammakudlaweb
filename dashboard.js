// Dashboard Functionality

document.addEventListener('DOMContentLoaded', function() {
    loadDashboardStats();
    loadQuickStats();
    loadRecentActivities();
    loadUsersTable();
    loadPostsTable();
    loadFullActivitiesList();
});

// Load Dashboard Statistics
function loadDashboardStats() {
    const stats = Storage.getStats();
    const statsGrid = document.getElementById('statsGrid');
    
    if (!statsGrid) return;
    
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon blue">
                <i class="fas fa-users"></i>
            </div>
            <div class="stat-value">${stats.totalUsers}</div>
            <div class="stat-label">Total Users</div>
        </div>
        
        <div class="stat-card">
            <div class="stat-icon orange">
                <i class="fas fa-blog"></i>
            </div>
            <div class="stat-value">${stats.totalPosts}</div>
            <div class="stat-label">Blog Posts</div>
        </div>
        
        <div class="stat-card">
            <div class="stat-icon green">
                <i class="fas fa-map-marked-alt"></i>
            </div>
            <div class="stat-value">${stats.totalDestinations}</div>
            <div class="stat-label">Destinations</div>
        </div>
        
        <div class="stat-card">
            <div class="stat-icon purple">
                <i class="fas fa-user-tie"></i>
            </div>
            <div class="stat-value">${stats.totalGuides}</div>
            <div class="stat-label">Travel Guides</div>
        </div>
    `;
}

// Load Quick Stats
function loadQuickStats() {
    const container = document.getElementById('quickStats');
    if (!container) return;
    
    const stats = Storage.getStats();
    
    container.innerHTML = `
        <div class="quick-stat-item">
            <span class="quick-stat-label">Monthly Visitors</span>
            <span class="quick-stat-value">${stats.monthlyVisitors.toLocaleString()}</span>
        </div>
        <div class="quick-stat-item">
            <span class="quick-stat-label">Total Posts</span>
            <span class="quick-stat-value">${stats.totalPosts}</span>
        </div>
        <div class="quick-stat-item">
            <span class="quick-stat-label">Active Guides</span>
            <span class="quick-stat-value">${stats.totalGuides}</span>
        </div>
        <div class="quick-stat-item">
            <span class="quick-stat-label">Registered Users</span>
            <span class="quick-stat-value">${stats.totalUsers}</span>
        </div>
    `;
}

// Load Recent Activities (for overview tab)
function loadRecentActivities() {
    const container = document.getElementById('recentActivitiesList');
    if (!container) return;
    
    const activities = Storage.getRecentActivities().slice(0, 5);
    
    if (activities.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light);">No recent activities</p>';
        return;
    }
    
    container.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas fa-${activity.type === 'post' ? 'blog' : 'user'}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.action}</div>
                <div class="activity-meta">
                    <strong>${activity.title}</strong> by ${activity.user}
                    <span style="margin-left: 1rem;">
                        <i class="fas fa-calendar"></i> ${formatDate(activity.date)}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Full Activities List (for activities tab)
function loadFullActivitiesList() {
    const container = document.getElementById('activitiesList');
    if (!container) return;
    
    const activities = Storage.getRecentActivities();
    
    container.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas fa-${activity.type === 'post' ? 'blog' : 'user'}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.action}</div>
                <div class="activity-meta">
                    <strong>${activity.title}</strong> by ${activity.user}
                    <span style="margin-left: 1rem;">
                        <i class="fas fa-calendar"></i> ${formatDate(activity.date)}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Users Table
function loadUsersTable() {
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;
    
    const users = Storage.getUsers();
    
    tbody.innerHTML = users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><span class="role-badge ${user.role}">${user.role}</span></td>
            <td>
                <button class="action-btn edit" onclick="editUser(${user.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="action-btn delete" onclick="deleteUser(${user.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </td>
        </tr>
    `).join('');
}

// Load Posts Table
function loadPostsTable() {
    const tbody = document.getElementById('postsTableBody');
    if (!tbody) return;
    
    const posts = Storage.getPosts();
    
    tbody.innerHTML = posts.map(post => `
        <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.author}</td>
            <td><span class="role-badge blogger">${post.category}</span></td>
            <td>${formatDate(post.date)}</td>
            <td>
                <button class="action-btn edit" onclick="editPost(${post.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="action-btn delete" onclick="deletePost(${post.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </td>
        </tr>
    `).join('');
}

// Switch Tabs
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(tabName + '-tab').classList.add('active');
}

// Add User Modal
function openAddUserModal() {
    document.getElementById('addUserModal').classList.add('active');
}

function closeAddUserModal() {
    document.getElementById('addUserModal').classList.remove('active');
}

function submitAddUser(event) {
    event.preventDefault();
    
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const role = document.getElementById('userRole').value;
    
    const users = Storage.getUsers();
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        role: role
    };
    
    users.push(newUser);
    
    alert('User added successfully!');
    closeAddUserModal();
    loadUsersTable();
    loadDashboardStats();
    
    event.target.reset();
}

// Edit User
function editUser(userId) {
    const users = Storage.getUsers();
    const user = users.find(u => u.id === userId);
    
    if (user) {
        const newName = prompt('Edit Name:', user.name);
        const newEmail = prompt('Edit Email:', user.email);
        const newRole = prompt('Edit Role (visitor/blogger/guide/admin):', user.role);
        
        if (newName && newEmail && newRole) {
            user.name = newName;
            user.email = newEmail;
            user.role = newRole;
            
            loadUsersTable();
            alert('User updated successfully!');
        }
    }
}

// Delete User
function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
        const users = Storage.getUsers();
        const index = users.findIndex(u => u.id === userId);
        
        if (index > -1) {
            users.splice(index, 1);
            loadUsersTable();
            loadDashboardStats();
            alert('User deleted successfully!');
        }
    }
}

// Edit Post
function editPost(postId) {
    if (confirm('Would you like to edit this post? You will be redirected to the blog page.')) {
        sessionStorage.setItem('selectedPost', postId);
        window.location.href = 'blog.html';
    }
}

// Delete Post
function deletePost(postId) {
    if (confirm('Are you sure you want to delete this post?')) {
        const posts = Storage.getPosts();
        const index = posts.findIndex(p => p.id === postId);
        
        if (index > -1) {
            posts.splice(index, 1);
            loadPostsTable();
            loadDashboardStats();
            alert('Post deleted successfully!');
        }
    }
}

// Helper: Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Close modal when clicking outside
document.getElementById('addUserModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeAddUserModal();
    }
});