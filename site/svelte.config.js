import adapter from '@sveltejs/adapter-static';

const productionBasePath = process.env.NODE_ENV === 'production' ? '/veloracss' : '';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html'
    }),
    paths: {
      base: productionBasePath
    }
  }
};

export default config;