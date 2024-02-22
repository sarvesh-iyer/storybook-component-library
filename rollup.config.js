import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs'
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named'
            }
        ],
        external: [ 'react' ],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
            }),
            babel({
                exclude: 'node_module/**',
                presets: [
                    ["@babel/preset-react", {
                      "runtime": "automatic"
                    }]
                ]
            }),
            external(),
            resolve({

                // the fields to scan in a package.json to determine the entry point
                // if this list contains "browser", overrides specified in "pkg.browser"
                // will be used
                mainFields: ['module', 'main'], // Default: ['module', 'main']
          
                // DEPRECATED: use "mainFields" instead
                // use "module" field for ES6 module if possible
                module: true, // Default: true
          
                // DEPRECATED: use "mainFields" instead
                // use "jsnext:main" if possible
                // legacy field pointing to ES6 module in third-party libraries,
                // deprecated in favor of "pkg.module":
                // - see: https://github.com/rollup/rollup/wiki/pkg.module
                jsnext: true,  // Default: false
          
                // DEPRECATED: use "mainFields" instead
                // use "main" field or index.js, even if it's not an ES6 module
                // (needs to be converted from CommonJS to ES6)
                // – see https://github.com/rollup/rollup-plugin-commonjs
                main: true,  // Default: true
          
                // some package.json files have a "browser" field which specifies
                // alternative files to load for people bundling for the browser. If
                // that's you, either use this option or add "browser" to the
                // "mainfields" option, otherwise pkg.browser will be ignored
                browser: true,  // Default: false
          
                // not all files you want to resolve are .js files
                extensions: [ '.mjs', '.js', '.jsx', '.json' ],  // Default: [ '.mjs', '.js', '.json', '.node' ]
          
                // whether to prefer built-in modules (e.g. `fs`, `path`) or
                // local ones with the same names
                preferBuiltins: false,  // Default: true
          
                
          
                // If true, inspect resolved files to check that they are
                // ES2015 modules
                modulesOnly: true, // Default: false
          
                // Force resolving for these modules to root's node_modules that helps
                // to prevent bundling the same package multiple times if package is
                // imported from dependencies.
                dedupe: [ 'react', 'react-dom' ], // Default: []
          
            }),
            terser(),
        ]
    }
]