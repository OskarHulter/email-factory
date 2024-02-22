
const rewriter = new HTMLRewriter()

rewriter.on("*", {
  element(el) {
    console.log(el.tagName) // "body" | "div" | ...
  },
})
