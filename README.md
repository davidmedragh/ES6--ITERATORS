# ES6--ITERATORS
A Simple Guide to ES6 Iterators in JavaScript
Iterators are a new way to loop over any collection in JavaScript. 
They were introduced in ES6 and have become really popular since they are widely useful and are used in various places.
We will use them in this sample

this diagram may help with establishing the relationship between iterables, iterators, and next. This relationship is called the Iteration Protocol.


![Iterator](./iterator.png)

- An iterable is a data structure that wants to make its elements accessible to the public. It does so by implementing a method whose key is Symbol.iterator. That method is a factory for iterators. That is, it will create iterators.
- An iterator is a pointer for traversing the elements of a data structure.
