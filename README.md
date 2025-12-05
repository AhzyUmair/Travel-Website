# 🌍 Responsive Travel Website

A modern, fully responsive travel agency website featuring luxury travel packages, global event experiences, and premium services. Built with HTML5, CSS3, and JavaScript with smooth animations and an intuitive user interface.

![Travel Website](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design & UI
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode Toggle** - User-preferred theme switching
- **Smooth Scroll Animations** - Enhanced user experience with ScrollReveal.js
- **Interactive Navigation** - Mobile-friendly hamburger menu with smooth transitions

### 🏖️ Key Sections
- **Hero Section** - Eye-catching landing with dynamic imagery
- **About Us** - Company introduction and value proposition
- **Discover Destinations** - Video carousel showcasing Qatar, Dubai, Switzerland, and Norway
- **Travel Partners** - Featured airline and agency partnerships
- **Luxury Services** - Premium offerings including:
  - Private Jet & Helicopter Charters
  - Gourmet Culinary Experiences
  - Private Villas & Exclusive Accommodations
  - Extreme Adventure Packages
- **Global Events** - Access to Formula 1, Premier League, MotoGP, and World Expos
- **Travel Packages** - Curated destinations with pricing and ratings
- **Contact Form** - Comprehensive booking inquiry system
- **Newsletter Subscription** - Email capture with special offers

## 🚀 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with custom properties and flexbox/grid layouts
- **JavaScript** - Interactive functionality and dynamic content
- **Swiper.js** - Touch-enabled slider/carousel
- **ScrollReveal.js** - Scroll animation library
- **RemixIcon** - Icon library for UI elements

## 📁 Project Structure
```text
travel-website/
│
├── index.html
├── styles.css
├── swiper-bundle.min.css
├── README.md
│
├── js/
│   ├── main.js
│   ├── swiper-bundle.min.js
│   └── scrollreveal.min.js
│
├── img/
│   ├── favicon.png
│   ├── home1.jpg
│   ├── home2.jpg
│   ├── about1.jpg
│   ├── place1.jpg
│   ├── place2.jpg
│   ├── place3.jpg
│   ├── place4.jpg
│   ├── place5.jpg
│   ├── place6.jpg
│   ├── service1.jpg
│   ├── service2.jpg
│   ├── service3.jpg
│   ├── service4.jpg
│   ├── sponsors1.png
│   ├── sponsors2.png
│   ├── sponsors3.png
│   ├── sponsors4.png
│   └── sponsors5.png
│
└── video/
    ├── discover1.mp4
    ├── discover2.mp4
    ├── discover3.mp4
    ├── discover4.mp4
    ├── video.mp4
    ├── video2.mp4
    ├── video3.mp4
    └── video4.mp4
```

## 🛠️ Installation & Setup

### Clone the repository
```bash
# Clone the repository
git clone https://github.com/yourusername/travel-website.git

# Navigate to project directory
cd travel-website
```

### Open in browser
```bash
# Option 1: Open index.html directly in your browser
open index.html

# Option 2: Use Python's built-in server
python -m http.server 8000

# Option 3: Use Node.js http-server
npx http-server

# Option 4: Use Live Server extension in VS Code
# Right-click on index.html and select "Open with Live Server"
```

## 💻 Usage

### Viewing the Website
```bash
# After cloning, simply open index.html in your preferred browser
# The website is fully functional without any build process
```

### Navigation
- Click on navigation links to smoothly scroll to different sections
- Use the hamburger menu icon on mobile devices
- Toggle between dark and light modes using the theme button

### Contact Form
The contact form includes:
- Full Name
- Email Address
- Mobile Number
- Country Selection (30+ destinations)
- Package Type Selection (Elite, Premium, Luxury, Global Events)
- Number of Travelers
- Additional Message

## 🎨 Customization

### Update Company Information
```bash
# Edit the navigation brand name
# File: index.html (Line 23)
<a href="#" class="nav__logo">YOUR COMPANY NAME</a>
```

### Modify Destinations
```bash
# Replace images in the img/ folder
cp your-image.jpg img/place1.jpg

# Update video content in the video/ folder
cp your-video.mp4 video/discover1.mp4

# Edit destination names and pricing in index.html
```

### Style Adjustments
```css
/* Modify CSS variables in styles.css for colors */
:root {
  --first-color: hsl(190, 64%, 22%);
  --title-color: hsl(190, 64%, 18%);
  /* Update these values for your brand colors */
}
```

## 📱 Responsive Breakpoints
```css
/* Mobile */
@media screen and (max-width: 767px) {
  /* Mobile styles */
}

/* Tablet */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  /* Tablet styles */
}

/* Desktop */
@media screen and (min-width: 1024px) {
  /* Desktop styles */
}
```

## 🎯 Key Functionality

### Dark Mode Implementation
```javascript
// Toggle dark mode
const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
```

### Initialize Swiper Carousels
```javascript
// Discover section carousel
const swiper = new Swiper('.discover__container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
});
```



## 🚀 Deployment

### Deploy to GitHub Pages
```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to GitHub
git push origin gh-pages

# Enable GitHub Pages in repository settings
# Your site will be live at: https://yourusername.github.io/travel-website
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Follow the prompts to complete deployment
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts to complete deployment
```

## 📋 Browser Support
```text
✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Opera (latest)
⚠️  IE11 (partial support)
```

## 🔧 Troubleshooting

### Videos not playing
```bash
# Ensure video files are in the correct format (MP4)
# Check video paths in index.html
# Verify video files exist in the video/ folder
```

### Swiper not working
```bash
# Verify swiper-bundle.min.js is loaded
# Check console for JavaScript errors
# Ensure CSS file swiper-bundle.min.css is properly linked
```

### Styles not applying
```bash
# Clear browser cache
# Check if styles.css is properly linked
# Verify CSS file path in index.html
```

## 📊 Performance Optimization
```bash
# Compress images
# Use tools like TinyPNG or ImageOptim

# Minify CSS and JavaScript
# Use online tools or build tools like gulp/webpack

# Optimize videos
# Use tools like HandBrake to compress video files
```

## 👥 Author

**Ahzy Develops**

- GitHub: AhzyUmair(https://github.com/AhzyUmair)
- Linkedin: ahzam-umair(https://www.linkedin.com/in/ahzam-umair)

## 🙏 Acknowledgments

- [RemixIcon](https://remixicon.com/) - Icon library
- [Swiper.js](https://swiperjs.com/) - Carousel functionality
- [ScrollReveal.js](https://scrollrevealjs.org/) - Scroll animations

⭐ **Star this repository if you find it helpful!**
```bash
# Show your support by starring the repository
# Click the ⭐ button at the top of the page
```
