# Search

## File Search

Let's try our first search by looking for all occurrences of the word fast in README.md:

```sh

rg fast README.md

```

## Recursive Directory Search

recursively searching your current working directory is the default mode of operation for ripgrep, which means doing this is very simple.

here's how to find all function definitions whose name is write:

```sh

# regex

rg 'fn write\('

# string

rg -F 'fn write('

# specific directory

rg 'fn write\(' src

```

(Note: We escape the ( here because ( has special significance inside regular expressions. You could also use rg -F 'fn write(' to achieve the same thing, where -F interprets your pattern as a literal string instead of a regular expression.)

In this example, we didn't specify a file at all. Instead, ripgrep defaulted to searching your current directory in the absence of a path. In general, rg foo is equivalent to rg foo ./.
