const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://vercel.com/groundedhlc/again'
    : 'http://localhost:3000';

export default baseUrl;
