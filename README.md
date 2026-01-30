# Nikhil Mana - Portfolio

A modern, production-ready portfolio website showcasing projects, skills, and experience with stunning 3D animations and smooth transitions.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5000`

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📋 Features

- ✨ **Modern Design**: Cyberpunk-inspired UI with smooth animations
- 🎨 **3D Graphics**: Interactive Three.js background scenes
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Optimized build with Vite
- 🔒 **Secure**: Helmet.js security headers, rate limiting
- 🎯 **SEO Ready**: Proper meta tags and semantic HTML
- 🌐 **Production Ready**: Docker support, CI/CD pipelines

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Three.js + React Three Fiber (3D graphics)
- Wouter (routing)
- TanStack Query (data fetching)

### Backend
- Node.js + Express
- TypeScript
- SQLite (database)
- Drizzle ORM
- Helmet.js (security)
- Compression (optimization)
- Rate Limiting

### DevOps
- Vite (build tool)
- Docker + Docker Compose
- GitHub Actions (CI/CD)
- ESBuild (bundling)

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components (Home, About, Work, Contact)
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and configurations
│   └── public/            # Static assets
├── server/                # Backend application
│   ├── routes.ts          # API routes and seed data
│   ├── storage.ts         # Database operations
│   └── index.ts           # Server configuration
├── shared/                # Shared types and schemas
├── .github/workflows/     # CI/CD pipelines
├── Dockerfile             # Container configuration
└── docker-compose.yml     # Multi-container setup
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
NODE_ENV=production
PORT=5000
DATABASE_PATH=./sqlite.db
CORS_ORIGINS=https://yourdomain.com
SESSION_SECRET=your-secure-random-string
```

### Database

The application uses SQLite for simplicity. On first run, it automatically seeds with:
- Skills and tech stack
- Education history
- Project portfolio
- Experience

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

**Docker**
```bash
docker-compose up -d
```

**Railway**
- Connect GitHub repository
- Deploy automatically

## 🔒 Security Features

- ✅ Helmet.js security headers
- ✅ Rate limiting on API routes
- ✅ CORS configuration
- ✅ Input validation
- ✅ Environment variable protection
- ✅ Secure session handling

## 🎨 Customization

### Update Personal Information

1. **Profile Photo**: Replace `client/public/profile.jpg`
2. **Skills**: Edit `server/routes.ts` seed data
3. **Projects**: Edit `server/routes.ts` seed data
4. **About Info**: Edit `client/src/pages/About.tsx`
5. **Colors**: Edit `tailwind.config.ts`

### Modify Theme

Colors are defined in `tailwind.config.ts`:
- `primary`: Main accent color (green)
- `secondary`: Secondary accent (orange)
- `accent`: Tertiary accent (yellow)

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Compressed responses with gzip
- Optimized images and assets

## 🧪 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run check    # TypeScript type checking
npm run db:push  # Push database schema changes
```

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (recommended)

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Find and kill process on port 5000
lsof -i :5000
kill -9 <PID>
```

**Database issues:**
```bash
# Delete and regenerate database
rm sqlite.db
npm run dev
```

**Build failures:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ by Nikhil Mana
