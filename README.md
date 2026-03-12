# LA Infra Website

Premium corporate website for LA Infra – a value-driven real estate and land development organization.

---

## Tech Stack

- **Vite** – Build tool
- **React 18** – UI framework
- **React Router v6** – Client-side routing (SPA)
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Animations
- **React Helmet Async** – SEO meta management

---

## Project Structure

```
la-infra/
├── public/
│   ├── favicon.svg
│   └── .htaccess          ← SPA routing for Hostinger
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionReveal.jsx
│   │   ├── LeadershipCard.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── CTABanner.jsx
│   │   ├── StatsSection.jsx
│   │   └── SEO.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Mission.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   └── Privacy.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Running Locally

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# 1. Navigate to the project folder
cd la-infra

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized static files.

To preview the production build locally:

```bash
npm run preview
```

---

## Deploying to Hostinger (Shared Hosting)

### Step-by-Step via hPanel File Manager

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Log in to Hostinger hPanel**
   - Go to https://hpanel.hostinger.com
   - Navigate to **Files → File Manager**

3. **Upload files**
   - Open the `public_html` folder
   - Upload **all contents** inside `dist/` (not the dist folder itself)
   - This includes: `index.html`, `assets/`, `.htaccess`, `favicon.svg`

4. **Verify `.htaccess`**
   - The `.htaccess` file from `public/` is automatically included in the build
   - Confirm it is present in `public_html` after upload
   - This file is critical for React Router to work – without it, refreshing any page other than `/` will show a 404

5. **Enable SSL (HTTPS)**
   - In hPanel → **SSL → Auto SSL**
   - Enable SSL for your domain
   - The `.htaccess` already includes an HTTP → HTTPS redirect

6. **Connect your domain**
   - In hPanel → **Domains → Manage**
   - Point DNS A record to your Hostinger server IP

### Testing After Deployment

- Visit `https://yourdomain.com` – should load Home
- Visit `https://yourdomain.com/about-us` – should load About
- Refresh any page – should NOT show 404 (this confirms .htaccess is working)
- Test contact form
- Check mobile responsiveness

---

## Contact Form Setup (Formspree)

1. Go to https://formspree.io and create a free account
2. Create a new form for your email address
3. Copy your form ID (looks like `xrgjkpqz`)
4. Open `src/pages/Contact.jsx`
5. Replace `YOUR_FORMSPREE_ID` with your actual ID:
   ```js
   const FORMSPREE_ID = "xrgjkpqz";
   ```
6. Rebuild and redeploy

If Formspree is unavailable, the form automatically falls back to a `mailto:` link.

---

## SEO Configuration

### Update before going live

1. **src/components/SEO.jsx** – Update `sameAs` array with social media URLs
2. **index.html** – Verify title and description
3. **src/components/SEO.jsx** – Replace `https://www.thelainfra.com` with your actual domain
4. Add a real `og-image.jpg` (1200×630px) to the `public/` folder

### Google Search Console

1. Go to https://search.google.com/search-console
2. Add your domain property
3. Verify via HTML file upload (upload to `public_html`)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml` (generate with a Vite sitemap plugin)

### Google Analytics (GA4)

1. Create GA4 property at https://analytics.google.com
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `index.html` before `</head>`:
   ```html
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
   ></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());
     gtag("config", "G-XXXXXXXXXX");
   </script>
   ```

### Google My Business

1. Visit https://business.google.com
2. Create listing for "LA Infra"
3. Add: address, phone (+91 96660 88822), website, category (Real Estate Agency)
4. Add photos of projects and office
5. Encourage clients to leave Google reviews

---

## SEO Keywords Targeted

**Primary:** ethical real estate Hyderabad, farmland investment Telangana, clear title land projects India

**Secondary:** garden lands Hyderabad, estate development Andhra Pradesh, eco friendly land development, farmland ventures Telangana

**Long-tail:** clear title farmland investment Telangana, ethical real estate developer Hyderabad, eco resort land development Andhra Pradesh, legal farmland aggregation Karnataka

---

## Customization Notes

- **Colors:** Edit `tailwind.config.js` → `colors.brand` (green) and `colors.earth` (warm)
- **Fonts:** Edit `index.html` Google Fonts link + `tailwind.config.js` → `fontFamily`
- **Phone/Email:** Search and replace `9666088822` and `info@lainfra.com`
- **Address:** Update in `Footer.jsx` and `Contact.jsx`
- **WhatsApp number:** Update in `WhatsAppButton.jsx`

---

## Performance

- Lazy-loaded pages via React `Suspense`
- Code-split vendor and framer-motion chunks
- Minimal animation – no heavy effects
- Google Fonts with `display=swap`
- Tailwind CSS purged in production build

---

© 2025 LA Infra. All rights reserved.
