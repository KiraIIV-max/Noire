# NOIRÉ — Modern Cafe Website

NOIRÉ is a modern, responsive cafe website created for a premium neighborhood coffee and food brand. The site combines editorial typography, warm cafe-inspired colors, responsive layouts, animated interactions, menu presentation, gallery content, contact details, and a client-side table reservation form.

## Live Demo

**[Visit the live website](https://noire-two-sigma.vercel.app/)**



## Preview
<img width="1901" height="979" alt="image" src="https://github.com/user-attachments/assets/fb4359f2-eeeb-4922-af80-a452cfbfa80c" />


## Project Overview

The project was developed as a real-world business website concept for a cafe. It focuses on:

- Clear customer-focused navigation
- Professional cafe branding
- Menu and pricing presentation
- Responsive design for desktop, tablet, and mobile screens
- Table reservation interaction
- Visual storytelling through photography and animation
- Reusable React components and separated page files

## Features

### Homepage

- Hero banner with cafe introduction
- Primary calls to action for the menu and cafe story
- Opening status and location information
- Cafe philosophy section
- Featured menu items
- Visit information
- Customer testimonials

### Menu

The menu includes clearly separated categories:

- Coffee
- Fast Food
- Desserts
- Beverages
- Special Dishes

Each category includes:

- Category image
- Item image
- Item name
- Short description
- Price

### About

- Cafe story
- Hospitality philosophy
- Quality and sourcing values
- Environment and community experience

### Gallery

- Cafe interior imagery
- Food and drink imagery
- Animated gallery card reveals
- Responsive gallery layout

### Contact

- Cafe address
- Phone number
- Email address
- Call link
- Email link
- Google Maps link

### Reservation Form

- Name field
- Phone field
- Reservation date
- Reservation time
- Guest count
- Special requests field
- Required-field validation
- Phone format validation
- Past-date prevention
- Guest count limits
- Confirmation message after submission

> The reservation form is currently a frontend demonstration. It does not send data to a backend or database.

### Navigation and Footer

- React Router navigation
- Active navigation states
- Reusable header and footer components
- Phone and email links
- Instagram and Facebook links
- Responsive layout

### Animations

- Cinematic first-load intro animation
- GSAP scroll-triggered reveals
- Menu and gallery reveal animations
- Hover transitions for buttons and cards
- Floating hero imagery
- Reduced-motion support for accessibility

## Technologies

- React
- Vite
- React Router
- GSAP
- Lucide React
- CSS
- Google-hosted Unsplash imagery
- Fontsource fonts:
  - Cormorant Garamond
  - Manrope

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

Clone the project and install the dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Project Structure

```text
src/
├── components/
│   ├── IntroLoader.jsx
│   ├── Layout.jsx
│   ├── SiteFooter.jsx
│   └── SiteHeader.jsx
├── data/
│   └── siteData.js
├── pages/
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── GalleryPage.jsx
│   ├── HomePage.jsx
│   ├── MenuPage.jsx
│   └── ReservationPage.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

### Architecture

- `App.jsx` is the route and page composition hub.
- `Layout.jsx` provides the shared application shell.
- `SiteHeader.jsx` and `SiteFooter.jsx` are reusable site-wide components.
- Each route has its own page component.
- Shared menu, navigation, hours, and testimonial data is stored in `siteData.js`.
- `App.css` contains the shared responsive design system and animation styles.

## Responsive Design

The interface is designed for:

- Desktop screens
- Tablets
- Mobile phones

Responsive behavior includes:

- Flexible grid layouts
- Mobile-friendly form fields
- Stacked menu and content sections
- Responsive gallery cards
- Flexible navigation and footer links
- Reduced-motion support through `prefers-reduced-motion`

## Validation

The project was checked with:

```bash
npm run lint
npm run build
```

Both commands complete successfully.

## Deployment

The project is ready to deploy on Vercel. Add the new production URL to the
**Live Demo** section after deployment.

To deploy your own version:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Keep the default Vite build settings.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Deploy the project.

## Future Improvements

Possible future enhancements include:

- Connecting reservations to a backend database
- Email confirmation for reservation requests
- Real social media profile links
- Online ordering and shopping cart
- Dark mode
- Mobile hamburger navigation
- Local image assets instead of external image URLs
- Custom 404 page
- Admin reservation dashboard

## Author

NOIRÉ Cafe Website — Task 2 Cafe Website Project
