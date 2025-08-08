import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  experimental: {
    ppr: true,
    // This line fixes next-intl config discovery in Next.js 15+
    turbo: {},
  },
};

export default createNextIntlPlugin()(nextConfig);
