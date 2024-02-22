export default {
  async fetch(request: Request) {
    const OLD_URL = 'developer.mozilla.org'
    const NEW_URL = 'mynewdomain.com'

    class AttributeRewriter {
      attributeName: string
      constructor(attributeName: string) {
        this.attributeName = attributeName
      }
      element(element: HTMLRewriterTypes.Element) {
        console.log(`Incoming element: ${element.tagName}`)

        const attribute = element.getAttribute(this.attributeName)
        if (attribute) {
          element.setAttribute(this.attributeName, attribute.replace(OLD_URL, NEW_URL))
        }
      }
    }

    const rewriter = new HTMLRewriter().on('a', new AttributeRewriter('href')).on('img', new AttributeRewriter('src'))

    const res = await fetch(request)
    const contentType = res.headers.get('Content-Type')
    if (!contentType) return res

    // If the response is HTML, it can be transformed with
    // HTMLRewriter -- otherwise, it should pass through
    if (contentType.startsWith('text/html')) {
      return rewriter.transform(res)
    }
  },
}
