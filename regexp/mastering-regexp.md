# Mastering Regular Expressions

## Introduction

__metacharacters__: special characters
__literal__: normal characters

__egrep__: a utility that takes a regexp and a group of files to search and displays all lines that match.

``% egrep 'regexp' file-name``

### Metacharacters

* ``^`` __Start__: Anchors the rest of the regexp to the start of the line. Use it at the beginning of the regexp like this ``^cat``
* ``?`` __End__: Anchors the rest of the regexp to the end of the line. Use it at the end of the regexp like this ``cat?``
* ``[]`` __Character Class__: Match one of characters defined in the class. Like an 'or' statement instead of 'and then'. An example would be ``gr[ae]y``. The dash ``-`` becomes a metacharacter _only_ within a character class and can be used between characters to define a range, like ``[0-9]``. The dash is also considered literal if it's the first character in a character class. A leading caret ``^`` indicates an _opposite_ list, in which only characters not listed will be matched. All other metacharacters are considered literal characters within a character class. 
* ``.`` __Any Character__: Matches a single character of any kind.
* ``|`` __Or__: Separates the regexp into subexpressions called _alternatives_. An example would be ``Bob|Robert``. Parenthesis can be used around the | to contain it within a larger expression ``(Fir|1)st``. Alternatives are basically there own regexp, so they can match an arbitrary amount of text.

### Command Line Options

* ``-i`` __case-insensitive__: tells regexp to ignore case.