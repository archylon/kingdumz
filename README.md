# Kingdumz - Vacation Rental Direct Booking Website

A modern, responsive website for managing vacation rentals with a dragon and castle theme. Built with HTML, CSS, and JavaScript.

## 🐉 Features

- **Dragon & Castle Theme**: Beautiful branding with animated dragon mascot and castle silhouettes
- **Direct Booking Integration**: Hospitable.com booking widgets for seamless reservations
- **Two Property Locations**:
  - Los Angeles: "The Kingdom of Fredonia" (fredonia.kingdumz.com)
  - New Zealand: "Karaka Retreat" (karaka.kingdumz.com)
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Interactive Elements**: Smooth animations, hover effects, and search functionality
- **SEO Optimized**: Clean HTML structure and semantic markup

## 🏰 Property Details

### The Kingdom of Fredonia (Los Angeles)
- **URL**: https://fredonia.kingdumz.com
- **Airbnb Listing**: [View on Airbnb](https://www.airbnb.com/rooms/1214080917428111160)
- **Features**: Luxury accommodation, city views, pool access, fitness center

### Karaka Retreat (New Zealand)
- **URL**: https://karaka.kingdumz.com
- **Airbnb Listing**: [View on Airbnb](https://www.airbnb.com/rooms/1375356941656032025)
- **Features**: Mountain views, nature trails, fireplace, outdoor space

## 🚀 Setup Instructions

### Prerequisites
- A web server (Apache, Nginx, or any static file hosting service)
- Domain names configured for the subdomains

### Installation

1. **Clone or download** the project files to your web server directory
2. **Configure DNS** for the following subdomains:
   - `fredonia.kingdumz.com` → points to your server
   - `karaka.kingdumz.com` → points to your server
   - `kingdumz.com` → points to your server

3. **Upload files** to your web server:
   ```
   /var/www/kingdumz.com/
   ├── index.html          # Main landing page
   ├── fredonia.html       # Los Angeles property page
   ├── karaka.html         # New Zealand property page
   ├── styles.css          # Main stylesheet
   ├── script.js           # JavaScript functionality
   └── README.md           # This file
   ```

4. **Configure your web server** to serve the appropriate files:
   - `kingdumz.com` → serves `index.html`
   - `fredonia.kingdumz.com` → serves `fredonia.html`
   - `karaka.kingdumz.com` → serves `karaka.html`

### Apache Configuration Example

```apache
# Main domain
<VirtualHost *:80>
    ServerName kingdumz.com
    DocumentRoot /var/www/kingdumz.com
    DirectoryIndex index.html
</VirtualHost>

# Los Angeles property
<VirtualHost *:80>
    ServerName fredonia.kingdumz.com
    DocumentRoot /var/www/kingdumz.com
    DirectoryIndex fredonia.html
</VirtualHost>

# New Zealand property
<VirtualHost *:80>
    ServerName karaka.kingdumz.com
    DocumentRoot /var/www/kingdumz.com
    DirectoryIndex karaka.html
</VirtualHost>
```

### Nginx Configuration Example

```nginx
# Main domain
server {
    listen 80;
    server_name kingdumz.com;
    root /var/www/kingdumz.com;
    index index.html;
}

# Los Angeles property
server {
    listen 80;
    server_name fredonia.kingdumz.com;
    root /var/www/kingdumz.com;
    index fredonia.html;
}

# New Zealand property
server {
    listen 80;
    server_name karaka.kingdumz.com;
    root /var/www/kingdumz.com;
    index karaka.html;
}
```

## 🎨 Customization

### Colors and Theme
The website uses a royal color scheme:
- Primary: `#1e3c72` (Deep Blue)
- Accent: `#ffd700` (Gold)
- Secondary: `#2a5298` (Medium Blue)

### Fonts
- **Headings**: Cinzel (serif) - for royal, elegant feel
- **Body**: Inter (sans-serif) - for modern readability

### Icons and Emojis
- 🐉 Dragon mascot
- 🏰 Castle elements
- 👑 Royal accents
- 🏔️ Mountain themes

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern layouts with Grid and Flexbox
- **JavaScript**: Interactive features and animations
- **Hospitable.com**: Direct booking widget integration

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Features
- Optimized images and assets
- CSS animations with hardware acceleration
- Lazy loading for better performance
- Minimal JavaScript footprint

## 📞 Support

For technical support or customization requests:
- Email: info@kingdumz.com
- Phone: +1 (555) 123-4567

## 📄 License

© 2024 Kingdumz. All rights reserved.

---

**Built with ❤️ and 🐉 for extraordinary vacation experiences**
