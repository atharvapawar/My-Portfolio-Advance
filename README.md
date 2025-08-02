# Atharv Pawar - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience in full-stack web development.

## ✨ Features

- **Modern Design**: Beautiful, minimalistic design with dark theme and gradient accents
- **Fully Responsive**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Subtle animations and hover effects for enhanced UX
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features
- **Performance Focused**: Optimized images, lazy loading, and fast load times
- **Interactive Sections**: Hero, About, Skills, Projects, Experience, and Contact

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── navbar/        # Navigation components
│   │   └── sections/      # Page sections
│   ├── assets/            # Images and styles
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── Tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
Update the color scheme in `Tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ },
  dark: { /* Your dark theme colors */ }
}
```

### Content
Update the following files with your information:
- `src/components/sections/About.jsx` - Personal information
- `src/components/sections/Skills.jsx` - Skills and technologies
- `src/components/sections/Projects.jsx` - Project details
- `src/components/sections/Experience.jsx` - Work experience
- `src/components/sections/Contact.jsx` - Contact information

### Images
Replace images in `src/assets/img/` with your own:
- `about-me.jpg` - Profile picture
- `website-img-*.jpg` - Project screenshots

## 📊 Google Analytics Setup

1. **Create a Google Analytics account**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your portfolio

2. **Get your Measurement ID**
   - Copy the GA_MEASUREMENT_ID (format: G-XXXXXXXXXX)

3. **Update the tracking code**
   - Replace `GA_MEASUREMENT_ID` in `index.html` with your actual ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com/)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Deploy with default settings

3. **Custom Domain (Optional)**
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### GitHub Pages

1. **Add GitHub Pages dependency**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Performance Optimizations

- **Image Optimization**: All images are optimized for web
- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components load on demand
- **Minification**: CSS and JS are minified in production
- **Caching**: Proper cache headers for static assets

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Name**: Atharv Pawar
- **Email**: atharv.pawar@email.com
- **Location**: Vikhroli, Mumbai
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Heroicons](https://heroicons.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

---

⭐ If you found this portfolio helpful, please give it a star!
