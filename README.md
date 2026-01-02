# POS VERGE Next.js Project

This is a Next.js conversion of the POS VERGE React template.

## Getting Started

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
- `public/` - Static assets
  - `static/` - CSS, JS, and media files from the original React app
- `styles/` - Global CSS styles

## Notes

This project currently loads the original React app's JavaScript bundle. For a full Next.js conversion, you would need:

1. The original React source code (not just the built files)
2. Convert React components to Next.js components
3. Set up proper routing if the app has multiple pages
4. Convert any client-side routing to Next.js routing

The current setup allows the original React app to run within Next.js, which is a good starting point for gradual migration.


