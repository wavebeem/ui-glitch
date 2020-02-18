# ui-glitch

`ui-glitch` lets you make glitches in your web UI.

## Installation

**npm**

```
npm install ui-glitch
```

**script tag**

Download [dist/ui-glitch.umd.js](https://unpkg.com/ui-glitch/dist/ui-glitch.umd.js) and load via a `<script>` tag or download [src/ui-glitch.esm.js](https://github.com/wavebeem/ui-glitch/blob/master/src/ui-glitch.esm.js) and load via ES Modules `import`.

## Usage

```js
// --- load via npm and webpack ---
import * as UIGlitch from "ui-glitch";

// --- or load via ES Modules ---
import * as UIGlitch from "./ui-glitch.esm.js";

// --- or available as the global variable `UIGlitch` ---
// <script src="ui-glitch.umd.js"></script>

// --- example function call ---
UIGlitch.blurScreen();
```

## Reference

### UIGlitch.addDustSpeck()

Adds a virtual "dust speck" to the screen. For best effect, call a few times. Dust specks are roughly 1px large.

### UIGlitch.blurScreen()

Very slightly blurs the entire screen. On a retina display, this looks like the browser's DPI scaling has been incorrectly configured, which is especially sinister.

### UIGlitch.skewScreen()

Skews the entire screen horizontally a little bit. This means as you scroll, things get more and more misaligned.

### UIGlitch.saturateScreen()

Oversaturates all the colors a little bit. Looks like you're on a poorly calibrated TV.

### UIGlitch.squishScreen()

Makes the entire screen just a little bit shorter. It all gets squished down a bit. Subtle, but horrible looking.
