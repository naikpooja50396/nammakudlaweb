// Storage Management System - Enhanced with all features
const Storage = {
  data: {
    posts: [
      {
        id: 1,
        title: "Exploring the Pristine Beaches of Mangalore",
        excerpt: "Discover the hidden gems along the coastline, from Panambur to Tannirbhavi, where golden sands meet the Arabian Sea.",
        content: `<h3>Why Mangalore Beaches are Famous</h3>
                <p>Mangalore's coastline stretches over 50 kilometers, offering some of the most 
pristine and clean beaches in Karnataka. The beaches here are famous for their golden sand, 
crystal-clear waters, and stunning sunsets that paint the sky in shades of orange and purple.
 </p>
                <h3>Panambur Beach</h3>
                <p>Known as the heart of Mangalore's beach culture, Panambur is famous for its 
water sports, clean sands, and vibrant atmosphere. The beach is managed by the Panambur Beach 
Tourism Development Project, ensuring high standards of cleanliness and safety. It's famous for 
camel rides, jet skiing, and parasailing activities.</p>
                <h3>Tannirbhavi Beach</h3>
                <p>This serene beach is famous for its peaceful environment and spectacular 
sunset views. Unlike the more crowded Panambur, Tannirbhavi offers a tranquil escape where you 
can relax and enjoy nature. The beach is particularly popular among photographers and couples 
seeking a romantic getaway.</p>
                <h3>Surathkal Beach</h3>
                <p>Home to the iconic Sadashiva Temple and the NITK campus, Surathkal Beach is 
famous for its rocky shores and lighthouse. The beach offers a unique blend of spirituality and 
natural beauty, making it a favorite among both pilgrims and tourists.</p>`,
        author: "Priya Sharma",
        date: "2024-11-10",
        category: "beaches",
        tags: ["beaches", "nature", "photography", "water sports"],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        featured: true,
        comments: [],
        location: "Mangalore Coastline",
        photos: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
          "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800"
        ],
        videos: []
      },
      {
        id: 2,
        title: "The Rich Food Heritage of Mangalore",
        excerpt: "From spicy fish curries to sweet neer dosa, experience the authentic flavors that define Kudla's food culture.",
        content: `<h3>Why Mangalorean Cuisine is Famous</h3>
                <p>Mangalorean cuisine is renowned for its unique blend of coastal flavors, 
aromatic spices, and diverse culinary influences. The region's proximity to the Arabian Sea 
ensures an abundance of fresh seafood, while the Western Ghats provide exotic spices that create 
the distinctive taste profile of Mangalorean dishes.</p>
                <h3>Signature Dishes</h3>
                <p><strong>Kori Rotti:</strong> This iconic dish consists of crispy rice wafers 
served with a spicy chicken curry. It's famous for its perfect balance of textures and flavors.
 </p>
                <p><strong>Fish Gassi:</strong> A traditional fish curry made with coconut, 
tamarind, and local spices. Each household has its own secret recipe passed down through 
generations.</p>
                <p><strong>Neer Dosa:</strong> Ultra-thin, soft rice crepes that are famous for 
their delicate texture. Perfect with coconut chutney or any curry.</p>
                <p><strong>Chicken Ghee Roast:</strong> A fiery red chicken preparation that's 
become synonymous with Mangalore. Famous for its intense flavor and spice level.</p>
                <h3>Where to Eat</h3>
                <p>Visit traditional restaurants like Gajalee, Ideal Ice Cream, and Maharaja 
Family Restaurant to experience authentic Mangalorean cuisine. Don't miss the street food at 
Central Market for local snacks like goli baje and banana buns.</p>`,
        author: "Rajesh Kumar",
        date: "2024-11-08",
        category: "food",
        tags: ["food", "cuisine", "seafood", "restaurants"],
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
        featured: true,
        comments: [],
        location: "Various locations across Mangalore",
        photos: [
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800"
        ],
        videos: []
      },
      {
        id: 3,
        title: "Ancient Temples: The Spiritual Soul of Mangalore",
        excerpt: "Journey through centuries-old temples that showcase the rich architectural and spiritual heritage of the region.",
        content: `<h3>Why Mangalore Temples are Famous</h3>
                <p>Mangalore is home to numerous ancient temples that represent various 
architectural styles and spiritual traditions. These temples are not just places of worship but 
also repositories of art, culture, and history spanning several centuries.</p>
                <h3>Kadri Manjunath Temple</h3>
                <p>Dating back to the 10th century, this temple is famous for its bronze statue 
of Lokeshwara, which is considered one of the finest bronze sculptures in India. The temple 
architecture showcases early Dravidian style, and the natural spring inside the temple is 
believed to have healing properties.</p>
                <p>The temple is particularly famous for its Navratri celebrations and the 
annual Kadri Temple Car Festival, which attracts thousands of devotees.</p>
                <h3>Mangaladevi Temple</h3>
                <p>The city of Mangalore derives its name from this ancient temple dedicated to 
Goddess Mangaladevi. Built in the 10th century, it's famous for its beautiful architecture and 
the annual Navaratri festival. The temple has survived multiple invasions and stands as a 
testament to the region's resilience.</p>
                <h3>Kudroli Gokarnanath Temple</h3>
                <p>Built in 1912, this relatively modern temple is famous for its spectacular 
Dasara celebrations, featuring illuminated decorations and cultural programs. The temple's 
architecture is inspired by traditional Kerala style.</p>`,
        author: "Ananya Patel",
        date: "2024-11-05",
        category: "temples",
        tags: ["temples", "heritage", "spirituality", "architecture"],
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
        featured: true,
        comments: [],
        location: "Multiple temple locations in Mangalore",
        photos: [
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
          "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800"
        ],
        videos: []
      },
      {
        id: 4,
        title: "The Natural Beauty of Kudla: Exploring Nature's Paradise",
        excerpt: "Discover the lush landscapes, pristine forests, and breathtaking natural wonders around Mangalore.",
        content: `<h3>Why Mangalore's Nature is Famous</h3>
                <p>Nestled between the Western Ghats and the Arabian Sea, Mangalore boasts 
incredible natural diversity. The region is famous for its tropical climate, dense forests, 
waterfalls, and unique ecosystems that support rich biodiversity.</p>
                <h3>Pilikula Nisargadhama</h3>
                <p>This integrated theme park is famous for its botanical gardens, zoo, lake, 
and heritage village. The name 'Pilikula' means 'Tiger Lake' in Tulu, and the park is home to 
diverse flora and fauna. It's particularly famous for its conservation efforts and educational 
programs.</p>
                <h3>Western Ghats</h3>
                <p>The nearby Western Ghats are a UNESCO World Heritage Site, famous for their 
incredible biodiversity. The region offers numerous trekking trails, waterfalls, and viewpoints. 
During monsoon, the Ghats transform into a green paradise with numerous cascading waterfalls.
 </p>
                <h3>Netravati River</h3>
                <p>This perennial river is famous for its scenic beauty and white-water rafting 
opportunities. The river originates in the Western Ghats and flows through dense forests before 
meeting the Arabian Sea.</p>`,
        author: "Vikram Singh",
        date: "2024-11-03",
        category: "nature",
        tags: ["nature", "adventure", "trekking", "wildlife"],
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
        featured: false,
        comments: [],
        location: "Western Ghats region, Mangalore",
        photos: [
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
        ],
        videos: []
      },
      {
        id: 5,
        title: "Photography Guide: Capturing Mangalore's Beauty",
        excerpt: "Master the art of photographing Mangalore's stunning landscapes, vibrant culture, and architectural marvels.",
        content: `<h3>Why Mangalore is a Photographer's Paradise</h3>
                <p>Mangalore offers diverse photography opportunities - from golden hour beach 
shots to architectural photography of ancient temples, from vibrant street photography to nature 
photography in the Western Ghats.</p>
                <h3>Best Photography Locations</h3>
                <p><strong>Sunset at Tannirbhavi Beach:</strong> Famous for spectacular sunsets 
with fishing boats creating perfect silhouettes.</p>
                <p><strong>Kadri Temple:</strong> The bronze statues and architecture provide 
excellent subjects for architectural photography.</p>
                <p><strong>Sultan Battery:</strong> Historic watchtower offering panoramic views 
of the Gurupura river, perfect for landscape photography.</p>
                <p><strong>Central Market:</strong> Vibrant colors, bustling activity, and 
authentic street life make it ideal for street photography.</p>
                <h3>Photography Tips</h3>
                <ul>
                    <li>Visit beaches during golden hour (early morning or late evening) for 
best lighting</li>
                    <li>Monsoon season (June-September) transforms the landscape - perfect for 
dramatic shots</li>
                    <li>Respect local customs when photographing temples and people</li>
                    <li>Carry rain protection for your equipment during monsoons</li>
                </ul>`,
        author: "Meera Nair",
        date: "2024-10-30",
        category: "photography",
        tags: ["photography", "travel", "tips", "landscapes"],
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800",
        featured: false,
        comments: [],
        location: "Various photogenic spots in Mangalore",
        photos: [
          "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
        ],
        videos: []
      }
    ], // end posts

    destinations: [
      {
        id: 1,
        name: "Panambur Beach",
        description: "Popular beach with water sports and stunning sunsets. Famous for its clean sands, vibrant atmosphere, and exciting water activities including jet skiing, parasailing, and banana boat rides.",
        category: "beaches",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        coordinates: { lat: 12.9532, lng: 74.8111 },
        tips: "Best visited during evening for sunset views. Water sports available from 10 AM to 5 PM. Try the camel rides and beach volleyball.",
        whyFamous: "Panambur Beach is famous for being one of the cleanest and most well-maintained beaches in Karnataka. It's the only beach in the region with professional lifeguards and safety equipment. The beach has won multiple awards for cleanliness and is known for its spectacular sunsets, making it a favorite among photographers and tourists.",
        photos: [
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
        ]
      },
      {
        id: 2,
        name: "Kadri Manjunath Temple",
        description: "Ancient temple dating back to the 10th century, famous for its bronze statues and architectural splendor.",
        category: "temples",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
        coordinates: { lat: 12.8972, lng: 74.8627 },
        tips: "Visit during morning hours (6-8 AM) for peaceful darshan. Dress modestly. Photography of main deity not allowed but you can photograph the architecture.",
        whyFamous: "The Kadri Manjunath Temple is famous for housing one of the finest bronze sculptures in India - a 1.5-meter tall statue of Lokeshwara. The temple's natural spring, believed to have medicinal properties, attracts devotees seeking healing. The annual temple car festival and Navratri celebrations are spectacular events that draw thousands of visitors.",
        photos: [
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
          "https://images.unsplash.com/photo-1588571361632-9b720e5a1c5d?w=800"
        ]
      },
      {
        id: 3,
        name: "St. Aloysius Chapel",
        description: "Historic chapel built in 1880, famous for magnificent frescoes painted by Italian artist Antonio Moscheni.",
        category: "heritage",
        image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800",
        coordinates: { lat: 12.8734, lng: 74.8434 },
        tips: "Photography requires special permission. Maintain silence inside. Best visited in morning when natural light illuminates the frescoes beautifully.",
        whyFamous: "The chapel is famous for its breathtaking ceiling and wall paintings covering over 1000 square feet. The frescoes depict scenes from the life of St. Aloysius and are considered masterpieces of Christian art in India. The chapel's Italian Baroque architecture and the stunning artwork make it one of the most photographed heritage sites in Mangalore.",
        photos: [
          "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800"
        ]
      },
      {
        id: 4,
        name: "Tannirbhavi Beach",
        description: "Serene beach perfect for peaceful relaxation, away from the crowds. Famous for spectacular sunset views and clean environment.",
        category: "beaches",
        image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800",
        coordinates: { lat: 12.9105, lng: 74.8009 },
        tips: "Less crowded than Panambur, making it perfect for couples and families seeking tranquility. Sunset timing is ideal for photography. Limited food stalls available.",
        whyFamous: "Tannirbhavi is famous for being the quieter, more serene alternative to Panambur Beach. It's particularly beloved by photographers for its unspoiled beauty and stunning sunsets. The beach is known for its cleanliness and the peaceful atmosphere that allows visitors to truly relax and connect with nature.",
        photos: [
          "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
        ]
      },
      {
        id: 5,
        name: "Pilikula Nisargadhama",
        description: "Integrated eco-educational theme park featuring zoo, botanical garden, boating lake, and heritage village.",
        category: "nature",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
        coordinates: { lat: 12.9357, lng: 75.0983 },
        tips: "Plan for a full day visit. Wear comfortable walking shoes. Best visited during cooler months. Don't miss the heritage village showcasing traditional houses.",
        whyFamous: "Pilikula is famous as South India's largest integrated theme park. The biological park houses rare and endangered species, while the heritage village preserves traditional architecture and lifestyle. The boating lake and science center make it educational and entertaining. It's particularly famous for its conservation efforts and role in environmental education.",
        photos: [
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
        ]
      },
      {
        id: 6,
        name: "Sultan Battery",
        description: "Historical watchtower built by Tipu Sultan in the 18th century to prevent enemy warships from entering the Gurupura river.",
        category: "heritage",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
        coordinates: { lat: 12.9319, lng: 74.8001 },
        tips: "Visit during evening for spectacular sunset views over the river. Excellent photography spot. Free entry. Weekdays are less crowded.",
        whyFamous: "Sultan Battery is famous for its historical significance as a defensive structure built by Tipu Sultan. The watchtower offers panoramic views of the Gurupura river meeting the Arabian Sea. It's a popular spot for photographers and history enthusiasts, and the sunset views from here are considered among the best in Mangalore.",
        photos: [
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800"
        ]
      }
    ], // end destinations

    guides: [
      {
        id: 1,
        name: "Ramesh Shetty",
        bio: "Professional tour guide with 15 years of experience. Specializes in heritage tours, temple visits, and authentic food experiences. Fluent in multiple languages and passionate about sharing Mangalore's rich cultural heritage.",
        expertise: ["Heritage Tours", "Food Tours", "Temple Visits", "Cultural Experiences"],
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
        email: "ramesh@nammakudla.com",
        phone: "+91 9876543210",
        social: { facebook: "#", instagram: "#", twitter: "#" },
        rating: 4.8,
        reviews: 127,
        tours: 450
      },
      {
        id: 2,
        name: "Divya Rao",
        bio: "Nature enthusiast and certified adventure guide. Expert in trekking, wildlife spotting, and eco-tourism. Has led over 300 successful nature tours in the Western Ghats region.",
        expertise: ["Nature Tours", "Trekking", "Wildlife", "Adventure Sports"],
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
        email: "divya@nammakudla.com",
        phone: "+91 9876543211",
        social: { facebook: "#", instagram: "#", twitter: "#" },
        rating: 4.9,
        reviews: 98,
        tours: 320
      },
      {
        id: 3,
        name: "Arun Kumar",
        bio: "Beach activities specialist and certified water sports instructor. Knows every hidden beach spot and the best times to visit. Expert photographer who can help capture your perfect beach moments.",
        expertise: ["Beach Tours", "Water Sports", "Photography", "Coastal Exploration"],
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        email: "arun@nammakudla.com",
        phone: "+91 9876543212",
        social: { facebook: "#", instagram: "#", twitter: "#" },
        rating: 4.7,
        reviews: 156,
        tours: 520
      },
      {
        id: 4,
        name: "Lakshmi Bhat",
        bio: "Cultural expert and traditional storyteller. Passionate about preserving and sharing Mangalorean traditions, folklore, and customs. Specializes in festival tours and cultural immersion experiences.",
        expertise: ["Cultural Tours", "Festivals", "Local Customs", "Traditional Arts"],
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
        email: "lakshmi@nammakudla.com",
        phone: "+91 9876543213",
        social: { facebook: "#", instagram: "#", twitter: "#" },
        rating: 4.9,
        reviews: 143,
        tours: 380
      }
    ], // end guides

    users: [
      { id: 1, name: "Admin User", email: "admin@nammakudla.com", role: "admin" },
      { id: 2, name: "Priya Sharma", email: "priya@example.com", role: "blogger" },
      { id: 3, name: "Rajesh Kumar", email: "rajesh@example.com", role: "blogger" },
      { id: 4, name: "Visitor One", email: "visitor1@example.com", role: "visitor" }
    ],

    stats: {
      totalUsers: 1247,
      totalPosts: 89,
      totalGuides: 12,
      totalDestinations: 45,
      monthlyVisitors: 5234
    }
  }, // end data

  subscribers: [],

  getPosts: function() { return this.data.posts; },
  getFeaturedPosts: function() { return this.data.posts.filter(post => post.featured); },
  getPostById: function(id) { return this.data.posts.find(post => post.id === parseInt(id)); },
  getPostsByCategory: function(category) { return this.data.posts.filter(post => post.category === category); },
  searchPosts: function(query) {
    const searchTerm = query.toLowerCase();
    return this.data.posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  },
  addPost: function(post) {
    const newPost = {
      id: this.data.posts.length + 1,
      ...post,
      date: new Date().toISOString().split('T')[0],
      comments: [],
      photos: post.photos || [],
      videos: post.videos || []
    };
    this.data.posts.unshift(newPost);
    return newPost;
  },
  addComment: function(postId, comment) {
    const post = this.getPostById(postId);
    if (post) {
      const newComment = {
        id: post.comments.length + 1,
        name: comment.name,
        email: comment.email,
        text: comment.text,
        date: new Date().toISOString()
      };
      post.comments.push(newComment);
      return newComment;
    }
    return null;
  },
  getDestinations: function() { return this.data.destinations; },
  getDestinationById: function(id) { return this.data.destinations.find(dest => dest.id === parseInt(id)); },
  getGuides: function() { return this.data.guides; },
  getGuideById: function(id) { return this.data.guides.find(guide => guide.id === parseInt(id)); },
  addSubscriber: function(email) {
    if (!this.data.subscribers) this.data.subscribers = []; // safety
    if (!this.data.subscribers.includes(email)) {
      this.data.subscribers.push(email);
      return true;
    }
    return false;
  },
  getStats: function() {
    return {
      ...this.data.stats,
      totalPosts: this.data.posts.length,
      totalDestinations: this.data.destinations.length,
      totalGuides: this.data.guides.length
    };
  },
  getUsers: function() { return this.data.users; },
  getRecentActivities: function() {
    const activities = [];
    this.data.posts.slice(0, 5).forEach(post => {
      activities.push({
        type: 'post',
        action: 'New post published',
        title: post.title,
        user: post.author,
        date: post.date
      });
    });
    return activities.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
};

window.Storage = Storage;