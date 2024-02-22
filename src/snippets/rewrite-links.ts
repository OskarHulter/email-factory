export default {
  async fetch(request: Request) {
    const OLD_URL = "developer.mozilla.org"
    const NEW_URL = "mynewdomain.com"

    class AttributeRewriter extends HTMLRewiterElementHandler {
      attributeName: string
      constructor(attributeName: string) {
        super()
        this.attributeName = attributeName
      }
      element(element: { tagName: any; getAttribute: (arg0: string) => any; setAttribute: (arg0: string, arg1: any) => void }) {
        console.log(`Incoming element: ${element.tagName}`)

        const attribute = element.getAttribute(this.attributeName)
        if (attribute) {
          element.setAttribute(
            this.attributeName,
            attribute.replace(OLD_URL, NEW_URL)
          )
        }
      }
      comments(comment: Element) {
        console.log("🚀 ~ AttributeRewriter ~ comments ~ comment:", comment.textContent)
      }

      text(text: Element) {
        console.log("🚀 ~ AttributeRewriter ~ text ~ text:", text.textContent)
      }
    }

    const rewriter = new HTMLRewriter()
      .on("a", new AttributeRewriter("href"))
      .on("img", new AttributeRewriter("src"))

    const res = await fetch(request)
    const contentType = res.headers.get("Content-Type")
    if (!contentType) return res

    // If the response is HTML, it can be transformed with
    // HTMLRewriter -- otherwise, it should pass through
    if (contentType.startsWith("text/html")) {
      return rewriter.transform(res)
    }
  },
}
