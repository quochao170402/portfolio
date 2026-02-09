# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features smooth animations, dark theme, and a fully accessible interface.

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: TailwindCSS 4.1.18
- **Animations**: Framer Motion 12.31.0
- **Icons**: Lucide React 0.563.0
- **Email Service**: EmailJS Browser 4.4.1

## 📋 Features

- ✨ Smooth scroll animations and transitions
- 📱 Fully responsive design
- ♿ WCAG AA accessible
- 🎨 Modern dark theme
- 📧 Contact form with validation
- 🚀 Optimized performance
- 🔍 SEO optimized

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your EmailJS credentials in `.env`:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Public Key from Account settings
   - Update the values in `.env`

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:
```bash
npm run lint
```

## 📝 Customization

### Personal Information

Edit `/src/data/data.ts` to customize:
- Profile information (name, title, bio)
- Work experience
- Skills and technologies
- Projects and portfolio items
- Contact information
- Social media links

### Styling

The project uses TailwindCSS. Modify:
- `/tailwind.config.js` - Tailwind configuration
- Component classes - Inline Tailwind classes in components

### Components

All components are located in `/src/components/`:
- `Navbar.tsx` - Navigation bar with scroll detection
- `Hero.tsx` - Landing section
- `About.tsx` - About me section
- `Experience.tsx` - Work history timeline
- `Skills.tsx` - Technical skills showcase
- `Projects.tsx` - Portfolio projects with modal
- `Contact.tsx` - Contact form
- `Footer.tsx` - Footer with social links

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import your repository in [Netlify](https://www.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard
6. Deploy

## 📁 Project Structure

```
portfolio/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── data/         # Portfolio data
│   ├── hooks/        # Custom React hooks
│   ├── types/        # TypeScript type definitions
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── .env.example      # Environment variables template
├── index.html        # HTML entry point
├── package.json      # Dependencies
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## 🔧 Environment Variables

Required environment variables (see `.env.example`):

- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key

Optional:
- `VITE_GA_MEASUREMENT_ID` - Google Analytics measurement ID

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Bui Quoc Hao - [GitHub](https://github.com/yourusername)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
