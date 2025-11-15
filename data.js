/**
 * Namma Kudla Tourism Website - Dynamic Data Management System
 * Developer: Pooja Ganapati Naik
 * 
 * This system allows REAL users to:
 * - Create and post blogs
 * - Add comments
 * - Share travel experiences
 * - Everything is stored and displayed dynamically
 */

// ============================================
// DATA STORAGE SYSTEM
// ============================================

const DataManager = {
    // Initialize with sample data (users can add more)
    data: {
        blogPosts: [
            {
                id: 1,
                title: "Exploring the Pristine Beaches of Mangalore",
                author: "Priya Sharma",
                authorEmail: "priya@example.com",
                date: "2024-11-10",
                category: "beaches",
                tags: ["beaches", "sunset", "photography"],
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
                excerpt: "Discover the golden sand beaches of Mangalore, from Panambur to Tannirbhavi.",
                content: `<p>Mangalore's coastline stretches for miles, offering visitors a perfect blend of tranquility and adventure. Panambur Beach is known for its water sports and clean sands. Tannirbhavi Beach offers peace and solitude.</p>
                <h3>Best Time to Visit</h3>
                <p>October to February when the weather is pleasant and perfect for beach activities.</p>`,
                featured: true,
                comments: []
            },
            {
                id: 2,
                title: "A Culinary Journey Through Mangalorean Cuisine",
                author: "Ananya Bhat",
                authorEmail: "ananya@example.com",
                date: "2024-11-08",
                category: "food",
                tags: ["food", "cuisine", "seafood"],
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
                excerpt: "From spicy fish curries to sweet neer dosa, experience authentic Mangalorean flavors.",
                content: `<p>Mangalorean cuisine is a delightful mix of coastal flavors and aromatic spices.</p>
                <h3>Must-Try Dishes</h3>
                <ul>
                    <li>Kori Rotti - Crispy rice wafers with chicken curry</li>
                    <li>Neer Dosa - Thin rice crepes</li>
                    <li>Fish Gassi - Traditional fish curry</li>
                </ul>`,
                featured: true,
                comments: []
            },
            {
                id: 3,
                title: "Ancient Temples of Mangalore",
                author: "Vikram Prabhu",
                authorEmail: "vikram@example.com",
                date: "2024-11-05",
                category: "temples",
                tags: ["temples", "heritage", "culture"],
                image: "https://images.unsplash.com/photo-1588571361632-9b720e5a1c5d?w=800",
                excerpt: "Journey through centuries-old temples showcasing magnificent architecture.",
                content: `<p>Mangalore is home to numerous ancient temples reflecting rich spiritual heritage.</p>
                <h3>Kadri Manjunath Temple</h3>
                <p>Dating back to the 10th century, famous for bronze statues and beautiful architecture.</p>`,
                featured: true,
                comments: []
            }
        ],

        destinations: [
            {
                id: 1,
                name: "Panambur Beach",
                category: "beaches",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
                shortDesc: "Popular beach with water sports and stunning sunsets",
                description: "Panambur Beach is the most popular beach in Mangalore, known for clean sands and water sports.",
                highlights: ["Water sports", "Camel rides", "Beach shacks", "Sunset views"],
                tips: "Visit during evening for sunset. Water sports available 10 AM - 5 PM.",
                bestTime: "October to March",
                entryFee: "Free",
                timings: "Open 24 hours",
                howToReach: "15 km from city center",
                mapCoordinates: { lat: 12.9532, lng: 74.8111 }
            },
            {
                id: 2,
                name: "Kadri Manjunath Temple",
                category: "temples",
                image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
                shortDesc: "Ancient temple with bronze statues from 10th century",
                description: "One of the oldest temples in Mangalore with ancient bronze statues.",
                highlights: ["Bronze statues", "Temple architecture", "Sacred pond"],
                tips: "Dress modestly. Remove footwear before entering.",
                bestTime: "Early morning",
                entryFee: "Free",
                timings: "6:00 AM - 8:00 PM",
                howToReach: "5 km from city center",
                mapCoordinates: { lat: 12.8972, lng: 74.8627 }
            },
            {
                id: 3,
                name: "St. Aloysius Chapel",
                category: "heritage",
                image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800",
                shortDesc: "Historic chapel with magnificent frescoes",
                description: "Built in 1880, famous for paintings by Italian artist Antonio Moscheni.",
                highlights: ["Ceiling frescoes", "Italian architecture", "Historical significance"],
                tips: "Photography with permission. Maintain silence.",
                bestTime: "Morning hours",
                entryFee: "₹10",
                timings: "9:00 AM - 5:00 PM",
                howToReach: "City center",
                mapCoordinates: { lat: 12.8734, lng: 74.8434 }
            },
            {
                id: 4,
                name: "Tannirbhavi Beach",
                category: "beaches",
                image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800",
                shortDesc: "Serene beach perfect for peaceful relaxation",
                description: "Less crowded beach offering peaceful environment and beautiful views.",
                highlights: ["Peaceful atmosphere", "Sunset views", "Clean beach"],
                tips: "Best visited during evening. Less facilities available.",
                bestTime: "October to February",
                entryFee: "Free",
                timings: "Open 24 hours",
                howToReach: "12 km from city center",
                mapCoordinates: { lat: 12.9105, lng: 74.8009 }
            },
            {
                id: 5,
                name: "Pilikula Nisargadhama",
                category: "nature",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
                shortDesc: "Eco-educational park with zoo and boating",
                description: "Integrated theme park with zoo, botanical garden, lake, and heritage village.",
                highlights: ["Biological park", "Boating", "Heritage village", "Science center"],
                tips: "Full day destination. Wear comfortable shoes.",
                bestTime: "Throughout the year",
                entryFee: "₹80 per adult",
                timings: "9:30 AM - 5:30 PM",
                howToReach: "12 km from city center",
                mapCoordinates: { lat: 12.9357, lng: 75.0983 }
            },
            {
                id: 6,
                name: "Sultan Battery",
                category: "heritage",
                image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
                shortDesc: "Historical watchtower built by Tipu Sultan",
                description: "Built to prevent warships from entering Mangalore. Offers scenic river views.",
                highlights: ["Historical site", "River views", "Sunset point"],
                tips: "Visit during evening for sunset. Good for photography.",
                bestTime: "October to March",
                entryFee: "Free",
                timings: "Open all day",
                howToReach: "10 km from city center",
                mapCoordinates: { lat: 12.9319, lng: 74.8001 }
            }
        ],

        guides: [
            {
                id: 1,
                name: "Ramesh Shetty",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
                bio: "Professional tour guide with 15 years of experience. Specializes in heritage tours and local cuisine.",
                expertise: ["Heritage Tours", "Temple Visits", "Food Tours"],
                languages: ["English", "Hindi", "Kannada", "Tulu"],
                experience: "15 years",
                toursCompleted: 450,
                rating: 4.8,
                reviews: [],
                email: "ramesh.shetty@nammakudla.com",
                phone: "+91 9876543210",
                social: { facebook: "#", instagram: "#", twitter: "#" }
            },
            {
                id: 2,
                name: "Divya Rao",
                photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
                bio: "Nature enthusiast and adventure guide. Expert in trekking and eco-tourism.",
                expertise: ["Nature Tours", "Trekking", "Wildlife"],
                languages: ["English", "Hindi", "Kannada"],
                experience: "10 years",
                toursCompleted: 320,
                rating: 4.9,
                reviews: [],
                email: "divya.rao@nammakudla.com",
                phone: "+91 9876543211",
                social: { facebook: "#", instagram: "#", twitter: "#" }
            },
            {
                id: 3,
                name: "Arun Kumar",
                photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
                bio: "Beach activities specialist and water sports instructor.",
                expertise: ["Beach Tours", "Water Sports", "Photography"],
                languages: ["English", "Hindi", "Kannada"],
                experience: "12 years",
                toursCompleted: 520,
                rating: 4.7,
                reviews: [],
                email: "arun.kumar@nammakudla.com",
                phone: "+91 9876543212",
                social: { facebook: "#", instagram: "#", twitter: "#" }
            },
            {
                id: 4,
                name: "Lakshmi Bhat",
                photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
                bio: "Cultural expert and storyteller. Passionate about Mangalorean traditions.",
                expertise: ["Cultural Tours", "Festivals", "Folk Stories"],
                languages: ["English", "Hindi", "Kannada", "Tulu"],
                experience: "13 years",
                toursCompleted: 380,
                rating: 4.9,
                reviews: [],
                email: "lakshmi.bhat@nammakudla.com",
                phone: "+91 9876543213",
                social: { facebook: "#", instagram: "#", twitter: "#" }
            }
        ],

        users: [
            { id: 1, name: "Admin User", email: "admin@nammakudla.com", role: "admin", joinDate: "2024-01-01" },
            { id: 2, name: "Priya Sharma", email: "priya@example.com", role: "blogger", joinDate: "2024-02-15" },
            { id: 3, name: "Ananya Bhat", email: "ananya@example.com", role: "blogger", joinDate: "2024-03-10" },
            { id: 4, name: "Visitor One", email: "visitor1@example.com", role: "visitor", joinDate: "2024-10-01" }
        ],

        subscribers: [],
        
        recentActivities: []
    },

    // ============================================
    // BLOG POSTS FUNCTIONS
    // ============================================

    // Get all blog posts
    getAllPosts() {
        return this.data.blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    // Get post by ID
    getPostById(id) {
        return this.data.blogPosts.find(post => post.id === parseInt(id));
    },

    // Get featured posts
    getFeaturedPosts() {
        return this.data.blogPosts.filter(post => post.featured);
    },

    // Get posts by category
    getPostsByCategory(category) {
        return this.data.blogPosts.filter(post => post.category === category);
    },

    // Search posts
    searchPosts(query) {
        const searchTerm = query.toLowerCase();
        return this.data.blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    },

    // ADD NEW BLOG POST (USER CAN POST!)
    addPost(postData) {
        const newPost = {
            id: this.data.blogPosts.length + 1,
            title: postData.title,
            author: postData.author,
            authorEmail: postData.email,
            date: new Date().toISOString().split('T')[0],
            category: postData.category,
            tags: postData.tags || [],
            image: postData.image || 'https://via.placeholder.com/800x600?text=Blog+Post',
            excerpt: postData.excerpt,
            content: postData.content,
            featured: false,
            comments: []
        };
        
        this.data.blogPosts.unshift(newPost);
        
        // Add to recent activities
        this.addActivity({
            type: 'post',
            action: 'New blog post published',
            title: newPost.title,
            user: newPost.author,
            date: newPost.date
        });
        
        return newPost;
    },

    // UPDATE POST
    updatePost(id, updates) {
        const post = this.getPostById(id);
        if (post) {
            Object.assign(post, updates);
            return post;
        }
        return null;
    },

    // DELETE POST
    deletePost(id) {
        const index = this.data.blogPosts.findIndex(post => post.id === parseInt(id));
        if (index > -1) {
            const deleted = this.data.blogPosts.splice(index, 1)[0];
            this.addActivity({
                type: 'delete',
                action: 'Blog post deleted',
                title: deleted.title,
                user: 'Admin',
                date: new Date().toISOString().split('T')[0]
            });
            return true;
        }
        return false;
    },

    // ============================================
    // COMMENTS FUNCTIONS
    // ============================================

    // ADD COMMENT (USERS CAN COMMENT!)
    addComment(postId, commentData) {
        const post = this.getPostById(postId);
        if (post) {
            const newComment = {
                id: post.comments.length + 1,
                name: commentData.name,
                email: commentData.email,
                comment: commentData.comment,
                date: new Date().toISOString(),
                approved: true
            };
            post.comments.push(newComment);
            
            this.addActivity({
                type: 'comment',
                action: 'New comment added',
                title: post.title,
                user: commentData.name,
                date: new Date().toISOString().split('T')[0]
            });
            
            return newComment;
        }
        return null;
    },

    // Get comments for a post
    getComments(postId) {
        const post = this.getPostById(postId);
        return post ? post.comments : [];
    },

    // Delete comment
    deleteComment(postId, commentId) {
        const post = this.getPostById(postId);
        if (post) {
            const index = post.comments.findIndex(c => c.id === parseInt(commentId));
            if (index > -1) {
                post.comments.splice(index, 1);
                return true;
            }
        }
        return false;
    },

    // ============================================
    // DESTINATIONS FUNCTIONS
    // ============================================

    getAllDestinations() {
        return this.data.destinations;
    },

    getDestinationById(id) {
        return this.data.destinations.find(dest => dest.id === parseInt(id));
    },

    getDestinationsByCategory(category) {
        return this.data.destinations.filter(dest => dest.category === category);
    },

    // ============================================
    // GUIDES FUNCTIONS
    // ============================================

    getAllGuides() {
        return this.data.guides;
    },

    getGuideById(id) {
        return this.data.guides.find(guide => guide.id === parseInt(id));
    },

    // ADD REVIEW FOR GUIDE
    addGuideReview(guideId, reviewData) {
        const guide = this.getGuideById(guideId);
        if (guide) {
            const newReview = {
                id: guide.reviews.length + 1,
                name: reviewData.name,
                rating: reviewData.rating,
                comment: reviewData.comment,
                date: new Date().toISOString().split('T')[0]
            };
            guide.reviews.push(newReview);
            
            // Recalculate average rating
            const totalRating = guide.reviews.reduce((sum, r) => sum + r.rating, 0);
            guide.rating = (totalRating / guide.reviews.length).toFixed(1);
            
            return newReview;
        }
        return null;
    },

    // ============================================
    // USERS FUNCTIONS
    // ============================================

    getAllUsers() {
        return this.data.users;
    },

    getUserById(id) {
        return this.data.users.find(user => user.id === parseInt(id));
    },

    // ADD NEW USER
    addUser(userData) {
        const newUser = {
            id: this.data.users.length + 1,
            name: userData.name,
            email: userData.email,
            role: userData.role,
            joinDate: new Date().toISOString().split('T')[0]
        };
        this.data.users.push(newUser);
        
        this.addActivity({
            type: 'user',
            action: 'New user registered',
            title: newUser.name,
            user: 'System',
            date: newUser.joinDate
        });
        
        return newUser;
    },

    // UPDATE USER
    updateUser(id, updates) {
        const user = this.getUserById(id);
        if (user) {
            Object.assign(user, updates);
            return user;
        }
        return null;
    },

    // DELETE USER
    deleteUser(id) {
        const index = this.data.users.findIndex(user => user.id === parseInt(id));
        if (index > -1) {
            this.data.users.splice(index, 1);
            return true;
        }
        return false;
    },

    // ============================================
    // NEWSLETTER FUNCTIONS
    // ============================================

    addSubscriber(email) {
        if (!this.data.subscribers.includes(email)) {
            this.data.subscribers.push(email);
            return true;
        }
        return false;
    },

    getAllSubscribers() {
        return this.data.subscribers;
    },

    // ============================================
    // STATISTICS FUNCTIONS
    // ============================================

    getStatistics() {
        return {
            totalUsers: this.data.users.length,
            totalBloggers: this.data.users.filter(u => u.role === 'blogger').length,
            totalGuides: this.data.guides.length,
            totalVisitors: this.data.users.filter(u => u.role === 'visitor').length,
            totalPosts: this.data.blogPosts.length,
            totalDestinations: this.data.destinations.length,
            totalComments: this.data.blogPosts.reduce((sum, post) => sum + post.comments.length, 
0),
            totalSubscribers: this.data.subscribers.length,
            monthlyVisitors: 5234 // This would come from analytics in real app
        };
    },
    // ============================================
    // ACTIVITIES FUNCTIONS
    // ============================================
    addActivity(activity) {
        this.data.recentActivities.unshift(activity);
        // Keep only last 50 activities
        if (this.data.recentActivities.length > 50) {
            this.data.recentActivities = this.data.recentActivities.slice(0, 50);
        }
    },
    getRecentActivities(limit = 10) {
        return this.data.recentActivities.slice(0, limit);
    },
    // ============================================
    // CATEGORY STATISTICS
    // ============================================
    getCategoryStats() {
        const categories = {};
        this.data.blogPosts.forEach(post => {
            categories[post.category] = (categories[post.category] || 0) + 1;
        });
        return categories;
    }
 };
 // Make DataManager globally available
 window.AppData = DataManager;
 window.DataManager = DataManager;
 console.log('✅Data Management System Loaded - Users can now post blogs and interact!');