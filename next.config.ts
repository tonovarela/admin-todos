import type { NextConfig } from "next";


const nextConfig: NextConfig = {  
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
        pathname: '/**',
    },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
    },
    ]
  }
  
  
  /* config options here */
};

export default nextConfig;
