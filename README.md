# Çiçekli Game Dev Website

A modern, bilingual (English/Turkish) community website for Çiçekli Game Dev - a game development community featuring blog posts, events, announcements, and an admin panel for content management.

## 🌟 Features

- **📝 Blog System**: Create, edit, and manage blog posts with image support
- **🎮 Events Management**: Organize and showcase upcoming and past game jams/events
- **📢 Announcements**: Share community news and updates
- **🖼️ Image Upload**: Upload and manage images for posts and events
- **🌐 Bilingual Support**: Full English and Turkish language support with easy switching
- **👨‍💼 Admin Panel**: Secure admin dashboard for content management
- **📱 Responsive Design**: Mobile-friendly interface with modern UI/UX
- **🎨 Modern Styling**: Beautiful glassmorphism design with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/asilgumus/Cicekli-Game-Dev-Website
cd Cicekli-Game-Dev-Website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── admin/          # Admin panel pages
│   │   ├── edit/       # Edit posts/events
│   │   └── new/        # Create new content
│   ├── announcements/  # Announcements listing
│   ├── api/            # API routes
│   │   ├── admin/      # Admin authentication
│   │   ├── events/     # Events API
│   │   ├── posts/      # Posts CRUD API
│   │   └── upload/     # Image upload API
│   ├── blog/           # Blog pages
│   │   └── [slug]/    # Individual blog post pages
│   ├── events/         # Events listing
│   ├── login/          # Admin login page
│   └── page.js         # Home page
├── components/          # Reusable React components
│   ├── Button.js
│   ├── Card.js
│   ├── Footer.js
│   ├── LanguageSwitcher.js
│   └── Navbar.js
├── contexts/           # React contexts
│   └── LanguageContext.js
├── data/               # JSON data storage
│   └── posts.json      # All posts, events, announcements
├── hooks/              # Custom React hooks
│   └── useTranslation.js
├── lib/                # Utility functions
│   └── data.js         # Data management functions
└── locale/             # Translation files
    ├── en.json         # English translations
    └── tr.json         # Turkish translations
```

## 🎯 Key Features Explained

### Content Management

All content (blog posts, events, announcements) is stored in `data/posts.json`. The admin panel allows you to:
- Create new posts with images
- Edit existing content
- Manage events (upcoming/past)
- Upload images via file upload or URL

### Admin Access

Default admin credentials:
- **Username**: `admin`
- **Password**: `password123`

⚠️ **Important**: Change these credentials in production!

### Language Support

The website supports two languages:
- **English** (default)
- **Turkish**

Users can switch languages using the language switcher button in the navbar. Language preference is saved in localStorage.

### Image Management

Images can be added in two ways:
1. **File Upload**: Upload images directly (saved to `public/uploads/`)
2. **URL**: Provide an image URL

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Tech Stack

- **Framework**: Next.js 16.0.4
- **React**: 19.2.0
- **Styling**: CSS Modules
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings), Inter (body)

## 📝 Content Types

### Blog Posts
- Title, excerpt, and full content
- Author information
- Publication date
- Featured image

### Events
- Title and description
- Event date
- Event type (upcoming/past)
- Custom tags
- Featured image

### Announcements
- Title and content
- Publication date
- Featured image (optional)

## 🔐 Security Notes

- Admin routes are protected by middleware
- Authentication uses cookies (httpOnly, secure in production)
- File uploads are validated
- Input sanitization recommended for production

## 🌍 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Environment Variables

For production, consider adding:
- `NODE_ENV=production`
- Secure admin credentials
- File upload size limits

### Recommended Platforms

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

## 📄 License

This project is private and proprietary to Çiçekli Game Dev community.

## 🤝 Contributing

This is a private project for the Çiçekli Game Dev community. For contributions, please contact the project maintainers.

## 📞 Contact & Links

- **LinkedIn**: [Çiçekli GameDev](https://www.linkedin.com/company/cicekli-gamedev/)
- **GitHub**: [Cicekli-GameDev](https://github.com/Cicekli-GameDev)
- **Instagram**: [@cicekli_gamedev](https://www.instagram.com/cicekli_gamedev/)

## 🙏 Acknowledgments

Built with ❤️ for the Çiçekli Game Dev community.

---

**Note**: This project uses Next.js App Router and React Server Components. Make sure to follow Next.js 16 conventions when making changes.
