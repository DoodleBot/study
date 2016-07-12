# Mastering Regular Expressions

## Introduction

__metacharacters__: special characters
__literal__: normal characters

__egrep__: a utility that takes a regexp and a group of files to search and displays all lines that match.

``% egrep 'regexp' file-name``

### Metacharacters

* ``^`` __Start__: Anchors the rest of the regexp to the start of the line. Use it at the beginning of the regexp like this ``^cat``
* ``?`` __End__: Anchors the rest of the regexp to the end of the line. Use it at the end of the regexp like this ``cat?``
* ``[•••]`` __Character Class__: Match one of characters defined in the class. Like an 'or' statement instead of 'and then'. An example would be ``gr[ae]y``. The dash ``-`` becomes a metacharacter _only_ within a character class and can be used between characters to define a range, like ``[0-9]``. The dash is also considered literal if it's the first character in a character class. A leading caret ``^`` indicates an _opposite_ list, in which only characters not listed will be matched. All other metacharacters are considered literal characters within a character class.
* ``[^•••]`` __Negated Character Class__: An _opposite_ list, in which only characters not listed will be matched.
* ``.`` __Any Character__: Matches a single character of any kind.
* ``|`` __Or__: Separates the regexp into subexpressions called _alternatives_. An example would be ``Bob|Robert``. Parenthesis can be used around the | to contain it within a larger expression ``(Fir|1)st``. Alternatives are basically there own regexp, so they can match an arbitrary amount of text.
* ``(•••)`` __Scope__: Limits the scope of a regexp. In addition, you can use parenthesis to perform __Backreferencing__, which matches text that is a duplicate of an earlier match in the expression. Each paranthesis grouping can be referenced in the format ``\1``, with the number representing the order of the parenthesis to other parenthesis.
* ``?`` __Optional__: Makes the proceeding character or group optional. For example, ``cat?`` makes the "t" optional and ``c(at)?`` makes the "at" optional.
* ``+`` __One or More__: One or More of the immediately-preceding item. Must match at least once.
* ``*`` __Any__: Any number, including none, of the proceeding item. Always succeeds.
* ``\`` __Metacharacter Escape__: Escapes a metacharacter, making it a literal. Doesn't work within a Character Class. When used before some literal characters, they become metacharacters.

### Command Line Options

* ``-i`` __case-insensitive__: tells regexp to ignore case.

### Metasequences

A group of characters that become meta when they are combined.

* ``\<`` __start-of-word__: Like the caret, but for a word rather than a line. A word is defined as a string of alphanumeric characters. Other characters will terminate the word. Not all versions of egrep support this.
* ``\>`` __end-of-word__: Like the dollar sign, but for the end of a word rather than the end of a line. A word is defined as a string of alphanumeric characters. Other characters will terminate the word. Not all versions of egrep support this.
* ``{min,max}`` __Interval Quantifier__: Defines a minimum and maximum number of occurances allowed. Example ``[a-z]{3,12}`` matches a string of letters between 3 and 12 characters long. ``{0,1}`` is the same as the question mark.

## Extended Introductory Examples
