# Map

!!! USEFUL FOR 0 OF 1 SOLUTIONS FOR LARGE DATA SETS !!!

Think of as drawers with labels on them, containing a single value. These are much faster to lookup than searching through an entire array.

Object that stores key/value pairs

remembers original insertion order of the keys

any value can be used for keys or values

a for...of loop will iterate over all key/values in insertion order

a for...of loop will return an array [key, value] for each item

be careful with key equality. it uses slightly different rules (sameValueZero)

## map constructor

can pass an array or iterator of [key, value] arrays

## map.size

## map.clear()

removes all key/values pairs

## map.delete()

removes key/value pair.

returns true if it existed, false if it didn't

## map.get()

returns the key's value or undefined if the key doesn't exist

## map.has()

returns true if the key has a value

## map.set()

sets a value for the passed key

## map.keys()

returns iterator object with keys in insertion order

## map.values()

returns iterator object with values in insertion order

## map.entries()

returns iterator object with [key, value] array in insertion order

## map.forEach()

provide a callback function to be called on each key/value pair, in insertion order

