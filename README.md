# gwaaf-ipsum

> Lorem Ipsum - auf Fränkisch.

## Installation

```shell
npm install
```

```html
<script type="src/gwaaf.ipsum.js"></script>
```

## Build

```shell
grunt build
```

## How to use

### generate

```js
var result = gwaafIpsum.generate([count]);
```

`count` Anzahl der Wörter. Default `100`.

### compile

Übersetzt Hochdeutsch in verständliches Fränkisch.

```js
var result = gwaafIpsum.compile('Gestern waren wir in Nürnberg Bratwurst essen.')

// Result: Gesdern waren wir in Nämberch Broadwöschd essen.
```

