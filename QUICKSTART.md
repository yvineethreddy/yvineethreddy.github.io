# 🚀 Quick Start Guide

Your portfolio has been completely transformed into a modern, premium UI. Here's how to get started:

## ✅ Installation Complete
Dependencies are already installed. You're ready to go!

## 🏃 Running the Development Server

```bash
npm run dev
```

The portfolio will open at `http://localhost:5173` with hot reload enabled.

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 👀 Preview Production Build

```bash
npm run preview
```

## 🎨 What's New

### 🆕 New Components
- **Navigation** - Sticky header with theme toggle and mobile menu
- **Hero** - Full-screen hero with typewriter effect and parallax
- **About** - Premium profile card with stats and achievements
- **Projects** - Interactive carousel showcase
- **Timeline** - Animated career journey with achievements
- **Contact** - Beautiful contact form + recruiter section
- **Footer** - Premium footer with social links

### ✨ New Features
- **Dark/Light Theme** - Persistent theme toggle with localStorage
- **Smooth Animations** - Framer Motion transitions throughout
- **Glassmorphism** - Modern glass effect UI elements
- **Responsive Design** - Mobile-first, works on all devices
- **Loading Skeletons** - Professional loading states
- **SEO Optimized** - Meta tags, structured data, OG tags
- **Performance** - Lazy loading, optimized animations

### 📁 New Folder Structure
```
src/
├── components/        # All React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── SkillsSection.tsx
│   ├── Timeline.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Skeleton.tsx
│   └── Recruiter.tsx (old, can remove)
├── context/
│   └── ThemeContext.tsx     # Theme provider
├── hooks/
│   └── useScroll.ts         # Custom hooks
├── data/
│   └── index.ts             # Centralized data
├── utils/
│   └── helpers.ts           # Utility functions
├── App.tsx
├── main.tsx
└── styles.css
```

## 🎯 Customization

### Change Colors
Edit `tailwind.config.cjs`:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR',
}
```

### Update Content
Edit `src/data/index.ts`:
- `experienceData` - Update your work history
- `projectsData` - Add your projects
- `skillsData` - Update your skills

### Modify Copy
- `src/components/Hero.tsx` - Hero section text
- `src/components/About.tsx` - About section
- `src/components/Contact.tsx` - Contact form text

## 🚀 Deployment

### To GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Build: portfolio updates"
git push origin main
```

Then update your GitHub Pages settings to deploy from the `dist/` folder.

### To Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### To Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

## 📝 Environment Variables (Optional)
Create a `.env.local` file if needed:
```
VITE_API_URL=your_api_url
```

## 🧪 Testing

### Check for errors
```bash
npm run build
```

### Performance audit
```bash
# Use Chrome DevTools Lighthouse
# Or: npm install -g lighthouse
# lighthouse http://localhost:5173
```

## 🐛 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 5174
```

**Styles not updating?**
- Clear cache: `Ctrl+Shift+Delete` in browser
- Restart dev server: `npm run dev`

**Dark mode not working?**
- Clear localStorage: `localStorage.clear()`
- Check ThemeContext.tsx is imported in main.tsx

## 📚 Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main app layout |
| `src/context/ThemeContext.tsx` | Theme management |
| `src/data/index.ts` | All portfolio content |
| `src/styles.css` | Global styles |
| `tailwind.config.cjs` | Tailwind configuration |
| `vite.config.ts` | Vite build configuration |

## 💡 Tips

1. **Add Images** - Place images in `public/` folder (e.g., `public/vineeth-profile.jpg`)
2. **Update Resume** - Place PDF at `public/vineeth_resume.pdf`
3. **Add Projects** - Edit `src/data/index.ts` projectsData array
4. **Customize Icons** - All from lucide-react, browse at lucide.dev
5. **Add More Sections** - Create new components in `src/components/`

## 🎉 You're All Set!

Your portfolio is now production-ready with:
- ✅ Modern premium UI
- ✅ Smooth animations
- ✅ Dark/Light theme
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Recruiter-friendly

Run `npm run dev` and start exploring! 🚀
