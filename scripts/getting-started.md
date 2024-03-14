# Redirected Input
The universal method for passing request data is through redirected stdin (standard input)—piping.

By default, stdin data is buffered and then with no further processing used as the request body. If you provide Content-Length, then the request body is streamed without buffering. You may also use --chunked to enable streaming via chunked transfer encoding or --compress, -x to compress the request body.

There are multiple useful ways to use piping:

Redirect from a file:
```sh

http PUT pie.dev/put X-API-Token:123 < files/data.json

```



Or the output of another program:
```sh

grep '401 Unauthorized' /var/log/httpd/error_log | http POST pie.dev/post

```



You can use echo for simple data:
```sh

echo -n '{"name": "John"}' | http PATCH pie.dev/patch X-API-Token:123

```



You can also use a Bash here string:
```sh

http pie.dev/post <<<'{"name": "John"}'

```

You can even pipe web services together using HTTPie:

```sh

http GET https://api.github.com/repos/httpie/cli | http POST pie.dev/post

```



You can use cat to enter multiline data on the terminal:

```sh

cat | http POST pie.dev/post
<paste>
^D
cat | http POST pie.dev/post Content-Type:text/plain
- buy milk
- call parents
^D

```




On macOS, you can send the contents of the clipboard with pbpaste:
```sh

pbpaste | http PUT pie.dev/put

```




Passing data through stdin can’t be combined with data fields specified on the command line:

```sh

echo -n 'data' | http POST example.org more=data  # This is invalid

```



To prevent HTTPie from reading stdin data you can use the --ignore-stdin option.

Request data via --raw
In a situation when piping data via stdin is not convenient (for example, when generating API docs examples), you can specify the raw request body via the --raw option.
```sh

http --raw 'Hello, world!' pie.dev/post
http --raw '{"name": "John"}' pie.dev/post

```
