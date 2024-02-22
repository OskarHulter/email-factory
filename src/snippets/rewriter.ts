const rewriter = new HTMLRewriter()

rewriter.on("*", {
  element(el) {
    console.log(el.tagName) // "body" | "div" | ...
  },
})

rewriter.transform(
  new Response(`
<!DOCTYPE html>
<html>
<!-- comment -->
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
`))
