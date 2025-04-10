# String

## String.fromCharCode()

produces strings based on Unicode, binary code, etc

## String.fromCodePoint()

similar to fromCharCode, but with code points

## String.raw``

## string.length

## string.at()

returns the character at the index provided.

can use negative numbers to go from the end.

`myString.at(5);`

## string.charCodeAt()

provides the character code at the index provided

## string.charPointAt()

## string.concat()

combines 2 or more strings into a single string

`strA.concat(', ', strB)`

## string.includes()

returns true/false if provided string is found in the string

`myString.includes('test')`

## string.endsWith()

returns true/false if provided string is found at the end of the string

can specify the end index

`myString.endsWith('test')`

`myString.endsWith('test', 12);`

## string.indexOf()

returns the index of the *first* instance found or -1 if none found

## string.lastInstanceOf()

returns the index of the *last* instance found or -1 if none found

## string.localeCompare()

!!! LEXICOLOGICAL ORDERING !!!

Compares two strings

returns 1, 0, or -1

strA.localeCompare(strB)

## string.match()

takes a regexp 

myString.match(/[\d]/g);

returns an array of matches or null if no matches found.

if global flag used, returns all instances, but no capturing groups

if global flag not used, returns at most one instance, but includes capturing groups

## string.matchAll()

returns a matrix

each match produces an array with the result and its captures groups

must use a global flag or there will be an error

## string.normalize()

used for comparing and normalizing unicode types

## string.padEnd()

Adds a string to the end of your string up to the given index.

Truncates if the string is longer than the given index

Will repeat the provided string if it's not long enough

`myString.padEnd(20);`

`myString.padEnd(50, strB)`

## string.padStart()

same as padEnd, but for the beginning of the string

good for leading zeros

## string.repeat()

repeats the specified string to the specified number of times.

range is 0 to +Infinity

zero removes the string

`string.repeat(3)`

## string.replace()

!!! IMPORTANT !!!

`string.replace(regex, replacement);`

replaces the matched regex in the string with the replacement string or pattern

must use global flag to replace more than one occurance. Or use replaceAll()

### patterns

* $& = the matched substring
* $` = the portion of the string proceeding the substring
* $' = the portion of the string after the substring
* $n = the numbered capturing group
* $<name> = the named capturing group
* $ $ = escaped 

## string.replaceAll()

same as replace(), but will replace all occurances if no global flag set on regex

## string.search()

if you want to know if the pattern is found and it's index, use search()

if you just want to know if a pattern exists, use regex.test()

if you need to know the content of the matched text, use match() or regex.exec()

returns -1 if can't be found

## string.slice()

extracts a section of a string

## string.split()

converts the string to an array.

the provided substring will be used to split the elements

an empty string will separate all characters

## string.startsWith()

determines if the first character matches the provided substring

an optional index specifies the starting position to search

`myString.startsWith('int');`

`myString.startsWith('int', 3)`

## string.substring()

first specifies the starting position

second provides the ending position

if no second provided, defaults to end

`string.substring(1, 3)`

`string.substring(2)`

## string.toLocaleLowerCase()

same as toLowerCase(), but respects language conventions

## string.toLocaleUpperCase()

same but uppercase

## string.toLowerCase()

## string.toUpperCase()

## string.toString()

used by Object.toString() to convert objects to strings

## string.trim()

trims whitespace from beginning and end

## string.trimStart()

## string.trimEnd()

## string.valueOf()

returns the primitive object value
