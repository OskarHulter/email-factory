const server = Bun.serve({
  port: 4000,
  async fetch(req) {
    const url = new URL(req.url)

    // return index.html for root path
    if (url.pathname === '/')
      return new Response(Bun.file('index.html'), {
        headers: {
          'Content-Type': 'text/html',
        },
      })

    return new Response('Not Found', { status: 404 })
  },
})

console.log(`Listening on http://localhost:${server.port}`)
