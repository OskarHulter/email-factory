# Requests

- for compatability - https://curl.se/docs/tutorial.html
- for usability - https://httpie.io/docs/cli/examples

## Type Safety

```sh

# Each container path (e.g., x[y][z] in x[y][z][1]) has a certain type, which gets defined with the first usage and can’t be changed after that. If you try to do a key-based access to an array or an index-based access to an object, HTTPie will error out:

http --offline --print=B pie.dev/post \
  'array[]:=1' \
  'array[]:=2' \
  'array[key]:=3'

# HTTPie Type Error: Can't perform 'key' based access on 'array' which has a type of 'array' but this operation requires a type of 'object'.
# array[key]
#     ^^^^^

# Type Safety does not apply to value overrides, for example:

http --offline --print=B pie.dev/post \
  user[name]:=411     # Defined as an integer
  user[name]=string   # Overridden with a string
{
    "user": {
        "name": "string"
    }
}

```

## HTTP Method

```sh
# The METHOD argument is optional, and when you don’t specify it, HTTPie defaults to:

- GET for requests without body
- POST for requests with body

# Here we don’t specify any request data, so both commands will send the same GET request:

http GET pie.dev/get
RUN

http pie.dev/get
RUN
# Here, on the other hand, we do have some data, so both commands will make the same POST request:

http POST pie.dev/post hello=world
RUN
http pie.dev/post hello=world

```

## Partials

```sh

# Custom HTTP method, HTTP headers and JSON data:

http PUT pie.dev/put X-API-Token:123 name=John
RUN
# Submitting forms:

http -f POST pie.dev/post hello=World
RUN
# See the request that is being sent using one of the output options:

http -v pie.dev/get
RUN
# Build and print a request without sending it using offline mode:

http --offline pie.dev/post hello=offline
RUN
# Use GitHub API to post a comment on an issue with authentication:

http -a USERNAME POST https://api.github.com/repos/httpie/cli/issues/83/comments body='HTTPie is awesome! :heart:'
RUN
# Upload a file using redirected input:

http pie.dev/post < files/data.json
RUN
# Download a file and save it via redirected output:

http pie.dev/image/png > image.png
RUN
# Download a file wget style:

http --download pie.dev/image/png
RUN
# Use named sessions to make certain aspects of the communication persistent between requests to the same host:

http --session=logged-in -a username:password pie.dev/get API-Key:123
RUN
http --session=logged-in pie.dev/headers
RUN
# Set a custom Host header to work around missing DNS records:

http localhost:8000 Host:example.com

```
## Terminal paste

When you paste a URL into the terminal, you can keep the :// bit in the URL argument to quickly convert the URL into an HTTPie call just by adding a space after the protocol name.

```sh

http ://example.org
# → http://example.org

https ://example.org
# → https://example.org

```

## URL shortcuts for localhost 

```sh

http :/foo # GET /foo HTTP/1.1 Host: localhost

http :3000/bar # GET /bar HTTP/1.1 Host: localhost:3000

http : # GET / HTTP/1.1 Host: localhost

```
## Request items 

There are a few different request item types that provide a convenient mechanism for specifying HTTP headers, JSON and form data, files, and URL parameters. This is a very practical way of constructing HTTP requests from scratch on the CLI.
Each request item is simply a key/value pair separated with the following characters: : (headers), = (data field, e.g., JSON, form), := (raw data field) == (query parameters), @ (file upload).

```sh
http PUT pie.dev/put \
    X-Date:today \                     # Header
    token==secret \                    # Query parameter
    name=John \                        # Data field
    age:=29                            # Raw JSON
```

## File based separators

Using file contents as values for specific fields is a very common use case, which can be achieved through adding the @ suffix to the operators above. For example, instead of using a static string as the value for some header, you can use :@ operator to pass the desired value from a file.

```sh
http POST pie.dev/post \
    X-Data:@files/text.txt             # Read a header from a file
    token==@files/text.txt             # Read a query parameter from a file
    name=@files/text.txt               # Read a data field’s value from a file
    bookmarks:=@files/data.json        # Embed a JSON object from a file
```
