# Bun API tips

## Read environment variables

```ts
process.env.API_TOKEN; // => "secret"
Bun.env.API_TOKEN; // => "secret"
```

```sh
bun run env
#BAZ=stuff
#FOOBAR=aaaaaa
#<lots more lines>
```

## Import a JSON file
```json
{
  "name": "bun",
  "version": "1.0.0",
  "author": {
    "name": "John Dough",
    "email": "john@dough.com"
  }
}
```

```ts
import data from "./package.json";

data.name; // => "bun"
data.version; // => "1.0.0"
data.author.name; // => "John Dough"

```

## serialize & deserialize in bun:jsc
To save a JavaScript value into an ArrayBuffer & back, use serialize and deserialize from the "bun:jsc" module.
```ts
import { serialize, deserialize } from "bun:jsc";

const buf = serialize({ foo: "bar" });
const obj = deserialize(buf);
console.log(obj); // => { foo: "bar" }
```

## Get the file name of the current file

### /a/b/c.ts
```ts
import.meta.file; // => "c.ts"
```

## Get the directory of the current file

### /a/b/c.ts
```ts
import.meta.dir; // => "/a/b"
```

## Get the absolute path of the current file

### /a/b/c.ts
```ts
import.meta.path; // => "/a/b/c.ts"
```

## Check if a file exists

```ts
const path = "/path/to/package.json";
const file = Bun.file(path);

await file.exists(); // boolean;
```

## Copy a file to another location

```ts
const file = Bun.file("/path/to/original.txt");
await Bun.write("/path/to/copy.txt", file);
```

## Delete a file

```ts
import { unlink, unlinkSync } from "node:fs";

const path = "/path/to/file.txt";
unlinkSync(path);
await unlink(path);
```

## Convert a ReadableStream to a string 

```ts
const stream = new ReadableStream();
const str = await Bun.readableStreamToText(stream);
```



## Write a ReadableStream to a file

```ts
const stream: ReadableStream = ...;
const path = "./file.txt";
const response = new Response(stream);

await Bun.write(path, response);
```

## Encode and decode base64 strings

```ts
const data = "hello world";
const encoded = btoa(data); // => "aGVsbG8gd29ybGQ="
const decoded = atob(encoded); // => "hello world"
```

## Escape an HTML string 

```ts
Bun.escapeHTML("<script>alert('Hello World!')</script>");
// &lt;script&gt;alert(&#x27;Hello World!&#x27;)&lt;&#x2F;script&gt;
```
