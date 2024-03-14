# Scripting Snippets

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


RUN
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
