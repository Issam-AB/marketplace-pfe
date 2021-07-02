module.exports = {
  images: {
    domains: ['images.unsplash.com', 'fakestoreapi.com'],
  },
  env: {
    Stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
