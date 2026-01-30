# Deployment Guide

This guide covers multiple deployment options for your portfolio application.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Deployment Options](#deployment-options)
  - [Option 1: Vercel (Recommended)](#option-1-vercel-recommended)
  - [Option 2: Railway](#option-2-railway)
  - [Option 3: Docker + VPS](#option-3-docker--vps)
- [Post-Deployment](#post-deployment)

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Domain name (optional but recommended)

## Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your production values:
   ```env
   NODE_ENV=production
   PORT=5000
   DATABASE_PATH=./sqlite.db
   CORS_ORIGINS=https://yourdomain.com
   SESSION_SECRET=your-secure-random-string-here
   ```

## Deployment Options

### Option 1: Vercel (Recommended)

**Best for:** Quick deployment with zero configuration

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Configure Environment Variables**
   - Go to your Vercel dashboard
   - Navigate to Settings → Environment Variables
   - Add all variables from `.env.example`

#### Vercel Configuration

Create `vercel.json` in the root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/dist/index.cjs"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/public/$1"
    }
  ]
}
```

### Option 2: Railway

**Best for:** Full-stack apps with database

#### Steps:

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Environment Variables**
   - In Railway dashboard, go to Variables
   - Add all environment variables from `.env.example`

4. **Deploy**
   - Railway will automatically build and deploy
   - Your app will be available at the provided URL

### Option 3: Docker + VPS

**Best for:** Maximum control and customization

#### Prerequisites:
- VPS (DigitalOcean, Linode, AWS EC2, etc.)
- Docker and Docker Compose installed on VPS

#### Steps:

1. **Build Docker Image**
   ```bash
   docker build -t portfolio:latest .
   ```

2. **Test Locally**
   ```bash
   docker-compose up
   ```

3. **Deploy to VPS**

   a. **Push to Docker Hub** (optional):
   ```bash
   docker tag portfolio:latest yourusername/portfolio:latest
   docker push yourusername/portfolio:latest
   ```

   b. **SSH into VPS**:
   ```bash
   ssh user@your-vps-ip
   ```

   c. **Clone Repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

   d. **Create .env file**:
   ```bash
   nano .env
   # Add your environment variables
   ```

   e. **Start with Docker Compose**:
   ```bash
   docker-compose up -d
   ```

4. **Setup Nginx Reverse Proxy** (recommended)

   Create `/etc/nginx/sites-available/portfolio`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. **Setup SSL with Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## Post-Deployment

### 1. Verify Deployment
- Visit your deployed URL
- Test all pages (Home, About, Work, Contact)
- Check browser console for errors
- Test on mobile devices

### 2. Monitor Application
- Set up error tracking (Sentry, LogRocket)
- Monitor performance (Google Analytics, Vercel Analytics)
- Set up uptime monitoring (UptimeRobot, Pingdom)

### 3. Continuous Deployment

#### GitHub Actions (Already configured)
- Push to `main` branch triggers automatic build
- Failed builds will notify you via email

#### Manual Updates
```bash
# Pull latest changes
git pull origin main

# Rebuild and restart (Docker)
docker-compose down
docker-compose up -d --build

# Or for Vercel
vercel --prod
```

### 4. Database Backups

Create a backup script `backup-db.sh`:
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
cp sqlite.db backups/sqlite_$DATE.db
# Keep only last 7 days
find backups/ -name "sqlite_*.db" -mtime +7 -delete
```

Set up cron job:
```bash
crontab -e
# Add: 0 2 * * * /path/to/backup-db.sh
```

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000
# Kill the process
kill -9 <PID>
```

### Database Locked
```bash
# Stop the application
# Delete .db-shm and .db-wal files
rm sqlite.db-shm sqlite.db-wal
# Restart application
```

### Build Failures
- Check Node.js version (must be 18+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

## Security Checklist

- [ ] Environment variables are set correctly
- [ ] SESSION_SECRET is a strong random string
- [ ] CORS_ORIGINS includes only your domain
- [ ] Database file is not publicly accessible
- [ ] HTTPS is enabled (SSL certificate)
- [ ] Rate limiting is active
- [ ] Security headers are configured (helmet)

## Performance Optimization

- [ ] Enable gzip compression (already configured)
- [ ] Set up CDN for static assets
- [ ] Configure caching headers
- [ ] Optimize images
- [ ] Enable HTTP/2

## Support

For issues or questions:
- Check the [GitHub Issues](https://github.com/yourusername/portfolio/issues)
- Review application logs
- Contact support
