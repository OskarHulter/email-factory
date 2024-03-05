import posthtml from 'posthtml'
import postcss from 'posthtml-postcss'
import autoprefixer from 'autoprefixer'

const postcssPlugins = [
  autoprefixer({ browsers: ['last 2 versions'] })
]
const postcssOptions = {}
const filterType = /^text\/css$/

const html = `
  <style>div { display: flex; }</style>
  <div style="display: flex;">Text</div>
`

posthtml([ 
  postcss(postcssPlugins, postcssOptions, filterType) 
])
  .process(html)
  .then(result => console.log(result.html))

  // output:
{/* <style>
  div { display: -webkit-flex;display: -ms-flexbox;display: flex; }
</style>
<div style="display: -webkit-flex;display: -ms-flexbox;display: flex;">
  Text
</div> */}

// import {dirname} from 'node:path'
// import {readFileSync} from 'node:fs'
// import {fileURLToPath} from 'node:url'

// import posthtml from 'posthtml'
// import postcss from 'posthtml-postcss'

// const postcssPlugins = []
// const postcssOptions = {}
// const filterType = /^text\/css$/

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// const filePath = `${__dirname}/index.html`
// const html = readFileSync(filePath, 'utf8')

// posthtml([ 
//   postcss(postcssPlugins, postcssOptions, filterType) 
// ])
//   .process(html, {from: filePath})
//   .then((result) => console.log(result.html))
