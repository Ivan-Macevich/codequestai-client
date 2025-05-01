/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PORT: process.env.PORT
  },
  images: {
    domains: ['randomuser.me']
  },
}

export default nextConfig; 