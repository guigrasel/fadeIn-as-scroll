# FadeIn according to scroll

JavaScript function that makes automatic FadeIn animation (to any direction) as the user scrolls.

## animate.css

- The animations are imported from the animation library animate.css, so it must be installed in your project.
- For more information access: https://animate.style/

## How it works?

To enable animation, just add the reveal class to the html element.

### Available classes:

```js
fadeInAnimations = [
	'.reveal',
	'.reveal-up',
	'.reveal-left',
  '.reveal-left-big',
	'.reveal-right',
  '.reveal-right-big,'
	'.reveal-bottom-right',
	'.reveal-top-right',
	'.reveal-top-left',
	'.reveal-bottom-left',
];
```

### ATTENTION!

For the best functioning of the animation, add this in your css file:

```css
.reveal-right,
.reveal-right-big,
.reveal-left,
.reveal-left-big,
.reveal-up,
.reveal-top-left,
.reveal-bottom-left,
.reveal-top-right,
.reveal-bottom-right {
	opacity: 0;
}
```
