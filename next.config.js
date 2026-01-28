/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  // Turbopack configuration (Next.js 16+)
  turbopack: {
    resolveAlias: {
      // Add custom path aliases here if needed
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  
  images: {
    domains: [],
  },
  
  // Improve Fast Refresh stability
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig
