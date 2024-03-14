Getting Started
Fx is a dual-purpose command-line tool tailored for JSON, providing both a terminal-based JSON viewer and a JSON processing utility. While the JSON viewer is crafted in Go and functions without external dependencies, the JSON processing tool is developed in JS, compatible with Node.js and Deno.

To use Fx:

sh
cat data.json | fx
Or directly:

sh
fx data.json
JSON Processing
In fx, arguments are treated as JavaScript functions. Input data is passed sequentially through each provided function:

sh
echo '{"name": "world"}' | fx 'x => x.name' 'x => `Hello, ${x}!`'
You can also utilize standard JavaScript functions:

sh
echo '{"name": "world"}' | fx 'Object.keys'
Fx also introduces syntactical sugar to enhance simplicity:

Reference input data using x or this.
Start expressions with . to avoid repeating the x => x.
sh
echo '{"name": "world"}' | fx .name '`Hello, ${x}!`'
That's it. So simple!

Streaming Mode
Fx is designed to handle both line-delimited JSON and concatenated JSON streaming:

sh
echo '{"text": "Hello"}' '{"text": "World!"}' | fx .text
Output:


Hello
World!
For collective processing of a JSON stream as a single array, use the --slurp or -s flag:

sh
echo '{"text": "Hello"}' '{"text": "World!"}' | fx --slurp '.map(x => x.text)' '.join(", ")'
Output:


Hello, World!
Interactive Mode
Fx provides an interactive mode that allows you to explore JSON interactively. To initiate the interactive mode, pipe a JSON into fx:

sh
cat data.json | fx
Or:

sh
fx data.json
Easily navigate through your JSON using arrow or vim keys.

TIP

For a comprehensive key binding guide, refer to the Key Bindings page.

Dig
Press . to adjust the current path. Fx utilizes a fuzzy search. Press tab or . to opt for the current suggestion.

Searching
Start a search with /, inputting a regex pattern. Navigate results with n (next) or N ( previous). By default, searches are case-insensitive. However, you can modify search sensitivity:

Case-sensitive: Add / at the pattern's end.

txt
/[a-z]/
Case-insensitive: Append /i flag.

txt
/[a-z]/i
