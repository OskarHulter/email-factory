# Cookies

HTTP clients send cookies to the server as regular HTTP headers. That means, HTTPie does not offer any special syntax for specifying cookies — the usual Header:Value notation is used:

Send a single cookie:
```sh

http pie.dev/cookies Cookie:sessionid=foo

```

```sh

GET / HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Cookie: sessionid=foo
Host: pie.dev
User-Agent: HTTPie/0.9.9

```

Send multiple cookies (note: the header is quoted to prevent the shell from interpreting the ;):

```sh

http pie.dev/cookies 'Cookie:sessionid=foo;another-cookie=bar'

```

```sh

GET / HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Cookie: sessionid=foo;another-cookie=bar
Host: pie.dev
User-Agent: HTTPie/0.9.9

```

If you often deal with cookies in your requests, then you’d appreciate the sessions feature.
