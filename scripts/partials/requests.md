# Requests

- for compatability - https://curl.se/docs/tutorial.html
- for usability - https://httpie.io/docs/cli/examples

## httpie

### Troubleshooting:

  --ignore-stdin, -I
      Do not attempt to read stdin
      
  --manual
      Show the full manual.
      
  --traceback
      Prints the exception traceback should one occur.
      
  --default-scheme DEFAULT_SCHEME
      The default scheme to use if not specified in the URL.
      
  --debug
      Prints the exception traceback should one occur, as well as other
      information useful for debugging HTTPie itself and for reporting bugs.
      
For every --OPTION there is also a --no-OPTION that reverts OPTION
to its default value.

### Partials

Force colorizing and formatting, and show both the request and the response in less pager:
The -R flag tells less to interpret color escape sequences included HTTPie’s output.

```sh

# less

http --pretty=all --verbose pie.dev/get | less -R

```

```sh

# fx

http --pretty=all --verbose pie.dev/get | fx -R

```

Request data from a filename
An alternative to redirected stdin is specifying a filename (as @/path/to/file) whose content is used as if it came from stdin.
It has the advantage that the Content-Type header is automatically set to the appropriate value based on the filename extension. For example, the following request sends the verbatim contents of that XML file with Content-Type: application/xml:


File uploads are always streamed to avoid memory issues with large files.

```sh

http PUT pie.dev/put @files/data.xml

```

Download a file:

```sh

http pie.dev/image/png > image.png

```

### Downloaded filename
There are three mutually exclusive ways through which HTTPie determines the output filename (with decreasing priority):

- You can explicitly provide it via --output, -o. The file gets overwritten if it already exists (or appended to with --continue, -c).
- The server may specify the filename in the optional Content-Disposition response header. Any leading dots are stripped from a server-provided filename.
- The last resort HTTPie uses is to generate the filename from a combination of the request URL and the response Content-Type. The initial URL is always used as the basis for the generated filename — even if there has been one or more redirects.
- To prevent data loss by overwriting, HTTPie adds a unique numerical suffix to the filename when necessary (unless specified with --output, -o).

### pipes



```sh

http -d https://github.com/httpie/cli/archive/master.tar.gz | tar zxf -

```

Download an image of an Octocat, resize it using ImageMagick, and upload it elsewhere:

```sh

http octodex.github.com/images/original.jpg | convert - -resize 25% - | http example.org/Octocats

```



```sh



```

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
