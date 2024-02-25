const inlineCss = require('inline-css')
const html: string = '<style>div{color:red;}</style><div/>'

export type Todo = unknown

inlineCss(html, {
  url: 'http://localhost:3000',
  extraCss: 'div{color:blue;}',
  applyWidthAttributes: true,
  applyTableAttributes: true,

}).then((html: Todo) => {
  console.log(html)
})
