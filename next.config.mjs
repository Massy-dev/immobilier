/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.goafricaonline.com', pathname: '/uploads/media/**' },
    ],
  },
};
export default nextConfig;
