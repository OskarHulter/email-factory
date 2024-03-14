# Search

## File Search

Let's try our first search by looking for all occurrences of the word fast in README.md:

```sh

rg fast README.md

```

## Recursive Search

recursively searching your current working directory is the default mode of operation for ripgrep, which means doing this is very simple.
In general, rg foo is equivalent to rg foo ./.

here's how to find all function definitions whose name is write:

```sh

# Note: We escape the ( here because ( has special significance inside regular expressions.

rg 'fn write\('

# You could also use rg -F 'fn write(' to achieve the same thing, where -F interprets your pattern as a literal string instead of a regular expression.

rg -F 'fn write('

# specific directory

rg 'fn write\(' src

# find all lines have a word that contains fast followed by some number of other letters

rg 'fast\w+' README.md

# different variation on this same theme:

rg 'fast\w*' README.md

```

In this example, we used the pattern fast\w+. This pattern tells ripgrep to look for any lines containing the letters fast followed by one or more word-like characters. Namely, \w matches characters that compose words (like a and L but unlike . and  ). The + after the \w means, "match the previous pattern one or more times." This means that the word fast won't match because there are no word characters following the final t. But a word like faster will. faste would also match!
