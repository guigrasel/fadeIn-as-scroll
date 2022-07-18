# FadeIn according to some event

JavaScript function that makes more easy to use animation (from any direction) as the user events.
At this version when the event do not be defined, it are scroll by default

## animate.css

- The animations are imported from the animation library animate.css, so it must be avaliable in your project.
- For more information access: https://animate.style/

## How it works?

To enable animation, just add one of these reveal class to the html element.

### Available classes:

```javascript
fadeInAnimations = [
'.reveal', // to only fadeIn
'.reveal-up', // to fadeIn comming from up
'.reveal-left', // ...from left
'.reveal-left-big',
'.reveal-right',
'.reveal-right-big,'
'.reveal-bottom-right',
'.reveal-top-right',
'.reveal-top-left',
'.reveal-bottom-left',
];
```

all classes above, are from animate.css, and the animation is from there, this function just monitore the files and add listners to make it runs, based on defined event.

### ATTENTION!

To make animations appears, add this in your css(global) file:

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
