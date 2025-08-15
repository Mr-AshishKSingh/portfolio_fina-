# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

# Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Interactive**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Friendly**: Optimized for search engines

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📋 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction and key statistics
- **Skills**: Interactive skill bars organized by categories
- **Projects**: Showcase of featured and other projects
- **Contact**: Contact form with personal information
- **Footer**: Social links and additional navigation

## 🎨 Design Features

- Modern gradient backgrounds
- Smooth scroll animations
- Hover effects and transitions
- Custom scrollbar styling
- Professional color scheme
- Typography optimized for readability

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PPF
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── index.css           # Global styles and Tailwind imports
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name and title
   - Profile description
   - Social media links

2. **About Section** (`src/components/About.tsx`):
   - Profile image
   - Bio and description
   - Experience statistics

3. **Skills Section** (`src/components/Skills.tsx`):
   - Skill categories and levels
   - Technologies list

4. **Projects Section** (`src/components/Projects.tsx`):
   - Project details, images, and links
   - Technologies used
   - Project descriptions

5. **Contact Section** (`src/components/Contact.tsx`):
   - Contact information
   - Email and phone number
   - Location

### Styling

The project uses Tailwind CSS with a custom configuration in `tailwind.config.js`. Key customizations include:

- Custom color palette (primary colors)
- Extended font family (Inter)
- Custom animations
- Responsive breakpoints

### Colors

The primary color scheme can be adjusted in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... other shades
    900: '#0c4a6e',
  }
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large screens: 1280px and up

## 🎭 Animations

Powered by Framer Motion, the portfolio includes:
- Fade-in animations on scroll
- Smooth page transitions
- Interactive hover effects
- Parallax-style background elements

## 📦 Dependencies

### Main Dependencies
- `react`: ^18.3.1
- `framer-motion`: ^11.x.x
- `lucide-react`: ^0.x.x

### Dev Dependencies
- `typescript`: ^5.x.x
- `tailwindcss`: ^3.x.x
- `@tailwindcss/postcss`: ^1.x.x
- `vite`: ^7.x.x

## 🚀 Deployment

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ and lots of coffee ☕**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
