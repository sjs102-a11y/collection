// Site-wide settings. Edit values between the quotes.
export const site = {
  name: 'Samuel Spencer',
  tagline: 'Design and engineering work on cars, race cars, and interiors.',
  description: 'Project archive of Samuel Spencer: automotive builds, motorsport preparation, fabrication, and design.',
  // Paste your full Instagram link, e.g. 'https://instagram.com/yourhandle'. Leave '' to hide it.
  instagram: '',
  // Only add an email if you want it public. Leave '' to hide it.
  email: '',
};

// Builds a link that works under /collection (and later under a custom domain).
export const withBase = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + p;
