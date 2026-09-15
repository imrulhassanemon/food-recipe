/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // https://cdn.dummyjson.com/recipe-images/1.webp
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  
};

export default nextConfig;
