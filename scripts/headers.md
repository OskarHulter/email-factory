# HTTP headers

## Default behavior

If your command includes some data request items, they are serialized as a JSON object by default. HTTPie also automatically sets the following headers, both of which can be overwritten:

- Header	Value
- Content-Type	application/json
- Accept	application/json, */*;q=0.5


To set custom headers you can use the Header:Value notation:

http pie.dev/headers User-Agent:Bacon/1.0 'Cookie:valued-visitor=yes;foo=bar' \
    X-Foo:Bar Referer:https://httpie.org/
RUN
GET /headers HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Cookie: valued-visitor=yes;foo=bar
Host: pie.dev
Referer: https://httpie.org/
User-Agent: Bacon/1.0
X-Foo: Bar

Default request headers
There are a couple of default headers that HTTPie sets:

GET / HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
User-Agent: HTTPie/<version>
Host: <taken-from-URL>
All of these can be overwritten or unset (see below).

Reading headers from a file
You can read headers from a file by using the :@ operator. This would also effectively strip the newlines from the end. See file based separators for more examples.

http pie.dev/headers X-Data:@files/text.txt
RUN
Empty headers and header un-setting
To unset a previously specified header (such a one of the default headers), use Header::

http pie.dev/headers Accept: User-Agent:
RUN
To send a header with an empty value, use Header;, with a semicolon:

http pie.dev/headers 'Header;'
RUN
Please note that some internal headers, such as Content-Length, can’t be unset if they are automatically added by the client itself.
