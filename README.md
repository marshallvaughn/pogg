# POGG

## Why?
Because I needed a simple logger that had colors. Colors help me discern what's going on with my code, which makes things clearer, thus making me more efficient. And you can too.

## How?
By utilizing two handy little packages, [cli-color](https://github.com/medikoo/cli-color), and [json-stringify-safe](https://github.com/isaacs/json-stringify-safe). Those guys are the real MVP, I'm just the goof who stuffed them info a package for my own amusement.

## When?
Now. Right now.

## Setup
Install it:
```javascript
npm install pogg --save
```
Then require it:
```javascript
var pogg = require('pogg')
```
Or if you want to get global with it (don't tell [Crockford](http://javascript.crockford.com/code.html#variable%20declarations)).
```javascript
var pogg = require('pogg').globalize();
```