// Next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'fakestoreapi.com'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
