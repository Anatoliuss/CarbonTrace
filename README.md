# CarbonTrace MENA

A production-ready landing page website for CarbonTrace MENA, a climate-tech startup focused on UAE-compliant ESG reporting solutions.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router, React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 (JIT)
- **UI Components**: shadcn/ui
- **Icons**: Heroicons v2
- **Deployment**: Vercel-ready

## 🎨 Brand Colors

- **Primary**: Azure Gulf (`#0992D0`)
- **Accent**: Desert Amber (`#F5A623`)
- **Greyscale**: Tailwind `slate` palette

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CarbonTrace
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
```bash
# Create .env.local file
echo "NEXT_PUBLIC_SIGNUP_URL=https://forms.gle/placeholder" > .env.local
```

4. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
CarbonTrace/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx            # Main landing page
│   │   ├── app/
│   │   │   └── page.tsx        # /app route (404)
│   │   └── globals.css         # Global styles & Tailwind
│   ├── components/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ProblemSolution.tsx # Problem → Solution section
│   │   ├── Features.tsx        # Product highlights
│   │   ├── SocialProof.tsx     # Logo cloud & testimonials
│   │   ├── Team.tsx            # Founder cards
│   │   ├── FAQ.tsx             # FAQ accordion
│   │   ├── Footer.tsx          # Footer with nav links
│   │   └── ui/
│   │       └── accordion.tsx   # shadcn/ui accordion
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   ├── images/
│   │   └── mock-dashboard.png  # Dashboard preview image
│   └── favicon.ico             # Brand favicon
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies & scripts
```

## 🎯 Features

### Landing Page Sections

1. **Hero** - Full-width gradient background with main promise and CTA
2. **Problem → Solution** - Two-column layout with pain points and dashboard preview
3. **Product Highlights** - Grid of four feature cards with icons
4. **Social Proof** - Logo cloud and testimonial carousel
5. **Team** - Four founder cards with LinkedIn links
6. **FAQ** - Interactive accordion with six Q&A items
7. **Footer** - Navigation links and contact information

### Key Features

- ✅ Fully responsive (mobile-first design)
- ✅ Custom brand colors and typography
- ✅ Environment variable for signup URL
- ✅ SEO optimized with metadata
- ✅ Accessibility compliant
- ✅ Performance optimized
- ✅ TypeScript throughout

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# External signup URL (replace with your actual URL)
NEXT_PUBLIC_SIGNUP_URL=https://forms.gle/placeholder
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  'azure-gulf': '#0992D0',
  'desert-amber': '#F5A623',
  // ... other colors
}
```

### Content
- Update placeholder content in component files
- Replace placeholder images in `/public/images/`
- Update testimonials in `SocialProof.tsx`
- Modify team information in `Team.tsx`

### Styling
- All styling uses Tailwind CSS classes
- Custom CSS variables defined in `globals.css`
- Component-specific styles in respective files

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🔧 Development Notes

- Uses Next.js 14 App Router
- TypeScript strict mode enabled
- ESLint configured for code quality
- Font loading optimized with `next/font`
- Images optimized with Next.js Image component

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, contact:
- Email: hello@carbontrace.mena
- Website: https://carbontrace.mena

---

Built with ❤️ for the MENA region's sustainable future. 