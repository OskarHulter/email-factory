import juice from 'juice'

const html = "<style>div{color:red;}</style><div/>"
const options = {}
const css = 'div{color:red;}'

const res = juice(html)
console.log("🚀 ~ res:", res)

const resContent = juice.inlineContent(html, css, options)
console.log("🚀 ~ resContent:", resContent)

function callback(err: unknown, html: string) {
  if (err) {
    console.error(err)
  }
  console.log(html)
}

const filePath = './src/templates/emails/responsive/responsive-email-template.html'
const resFile = juice.juiceFile(filePath, options, callback)
console.log("🚀 ~ resFile:", resFile)
