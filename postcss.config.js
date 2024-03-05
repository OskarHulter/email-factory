const postcssJitProps = require('postcss-jit-props');
const path = require('path');
const OpenProps = require('open-props');


module.exports = (ctx) => ({
  map: ctx.env === 'development' ? ctx.map : false,
  syntax: {
    html:'postcss-html',
  },
  plugins: [
    require('postcss-import')(),
    postcssJitProps(OpenProps ? OpenProps : {
      files: [
        path.resolve(__dirname, 'node_modules/open-props/open-props.min.css'),
      ]
    }),
    ctx.env === 'production' ? require('@csstools/postcss-rebase-url')() : false,
    ctx.env === 'production' ? require('autoprefixer')() : false,
    ctx.env === 'production' ? require('postcss-preset-env')() : false,
    require("postcss-ts-classnames")({
            dest: "src/classnames.d.ts",
            // Set isModule if you want to import ClassNames from another file
            isModule: true,
            exportAsDefault: true, // to use in combination with isModule
        }),
  ],
})

// import postcss from 'postcss';
// import DoIUse from 'doiuse/lib/DoIUse.js';

// postcss(new DoIUse({
//   browsers:['ie >= 6', '> 1%'],
//   ignore: ['rem'], // an optional array of features to ignore
//   ignoreFiles: ['**/normalize.css'], // an optional array of file globs to match against original source file path, to ignore
//   onFeatureUsage: (usageInfo) => {
//     console.log(usageInfo.message);
//   }
// })).process("a { background-size: cover; }")
// postcss(plugins).process(source, { syntax: syntax }).then(function (result) {
//     // An alias for the result.css property. Use it with syntaxes that generate non-CSS output.
//     result.content
// });
// const postcss = require('postcss');
// const postcssPresetEnv = require('postcss-preset-env');

// postcss([
//   postcssPresetEnv(/* pluginOptions */)
// ]).process(YOUR_CSS /*, processOptions */);

// const { readFileSync } = require('fs')

// const postcss = require('postcss')
// const postcssrc = require('postcss-load-config')

// const css = readFileSync('index.css', 'utf8')

// const ctx = { parser: true, map: 'inline' }

// postcssrc(ctx).then(({ plugins, options }) => {
//   postcss(plugins)
//     .process(css, options)
//     .then((result) => console.log(result.css))
// })"build": "NODE_ENV=production node postcss","start": "NODE_ENV=development node postcss"
