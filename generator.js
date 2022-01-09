const generator = require('component-file-generator');
generator.exec({
    component: {
        root: './src/components',
        structure: {
            name: '[name]',
            children: [
                {
                    type: 'file',
                    name: 'index.jsx',
                    content: `import './styles.scss';\n\nconst [name] = ()=> {\n\treturn <section className='content_wrap'>[name]</section>;\n}; \n\nexport default [name];`,
                },
                {
                    type: 'file',
                    name: 'styles.scss',
                    content: '@import "./../../variables.scss";',
                },
            ],
        },
    },
    page: {
        root: './src/pages',
        structure: {
            name: '[name]',
            children: [
                {
                    type: 'file',
                    name: 'index.jsx',
                    content: `import './styles.scss';\n\nconst [name] = ()=> {\n\treturn <section className='content_wrap'>[name]</section>;\n}; \n\nexport default [name];`,
                },
                {
                    type: 'file',
                    name: 'styles.scss',
                    content: '@import "./../../variables.scss";',
                },
            ],
        },
    },
    shared: {
        root: './src/shared',
        structure: {
            name: '[name]',
            children: [
                {
                    type: 'file',
                    name: 'index.jsx',
                    content: `import './styles.scss';\n\nconst [name] = ()=> {\n\treturn <section className='content_wrap'>[name]</section>;\n}; \n\nexport default [name];`,
                },
                {
                    type: 'file',
                    name: 'styles.scss',
                    content: '@import "./../../variables.scss";',
                },
            ],
        },
    },
});
