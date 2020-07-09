// @ts-check
const reactPlugin = require('vite-plugin-react')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin]
}

module.exports = {
  ...config,
  rollupPluginVueOptions: {
    cssModulesOptions: {
      generateScopedName: '[hash:base64:8]',
    },
  },
  proxy: {
    // string shorthand
    '/foo': 'http://localhost:4567/foo',
    // with options
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}
