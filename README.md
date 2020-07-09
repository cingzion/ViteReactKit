#### vite 搭建 react + css module 
```
// vite 网址：https://github.com/vitejs/create-vite-app

// 1、使用 create-vite-app 脚手架
    $ npm init vite-app my-react-project --template react
    $ cd <project-name>
    $ npm install
    $ npm run dev

// 2、配置 vite.config.js 文件，如果没有就创建此文件



// 3、CSS Module Options not working

    web: https://www.gitmemory.com/issue/vitejs/vite/254/643599284

    I have created vite.config.js:

    module.exports = {
    rollupPluginVueOptions: {
            cssModulesOptions: {
            generateScopedName: '[hash:base64:8]',
            },
        },
    }

    But when I built my project, CSS class has became something like this: .btn_5c7664d4.



    Hope this is helpful for you. First, change filename of style.css to style.module.css. Then update import with this.

    import styles from './style.module.css';



    如下所示：vite.config.js
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


```