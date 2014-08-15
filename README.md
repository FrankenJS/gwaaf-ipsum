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

```
Lorem Ipsum Medzlsubbm schnouchdln Dochdermu Gsud Rofm hierndibbered Händschi gne-ia Fodzn Hundhieb Ausnahm Heiner uulöing Buzzlkou Schraizaich Schobber schäiglert draamhabberd Gsooch Äbiernschlendern Moggl Rangng Schbald ebber hoalous afbelzn Löicherbaidl Schoudn Suras hierndibbered Rossbolln kraggln Wimmerla Schouf Kabbm fläing Dabber ausnaschdn Beddâ Schduggerers G'schwardl derbleckn Melbâ Heiner hausn Laabla Schesn Schöll Weck Graudskuufa Bobbersla b gniggerd schdeierisch Lavor Schugglgaul Gschlambres brozzln Saubär Kipf Gma Schelfm Vuuchl Badder Welln Doggn Dochdermu Glazzn buugschdeif mauberlabrau(n) Schdiggl badderne-id Gröiberli gne-ia Handschi Schdiggl wolfal Veschber Niggl Neechl Schle-icha Oumasn Mischdlach Äbier Schöllmaschder Gruubf blecggn Droad brozzln Obudzlumbm Gmoabadschn Kadzerköichli Zoucha zuzln badschen Nochdhofm hoalous Hadzl Schoof Fäichdnbeech
```

### compile

Übersetzt Hochdeutsch in verständliches Fränkisch.

```js
var result = gwaafIpsum.compile('Gestern waren wir in Nürnberg Bratwurst essen.')

// Result: Gesdern waren wir in Nämberch Broadwöschd essen.
```

