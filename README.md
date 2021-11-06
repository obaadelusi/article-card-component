# Frontend Mentor - Article card design

This is a solution to the [Article card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges helps me improve my frontend coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
-  [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-  View the optimal layout for the component depending on their device's screen size
-  See the social media share links when they click the share icon

### Screenshot

![Article card design](./images/desktop-active-state.jpg)

### Links

-  Live Site URL: [URL to live site](https://whatobathinks.github.io/article-card-component)

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  Mobile-first workflow

### What I learned

-  How to create a tooltip in CSS

```css
.share i {
   position: absolute;
   top: 100%;
   left: 60%;
   margin-left: -15px;
   width: 30px;
   height: 15px;
   overflow: hidden;
}

.share i::after {
   content: '';
   position: absolute;
   width: 15px;
   height: 15px;
   left: 50%;
   transform: translate(-50%, -50%) rotate(45deg);
   background-color: var(--very-dk-blue);
}
```

-  How to toggle class in JS

```js
//  Show shareBox
shareButton.addEventListener('click', () => {
   shareBox.classList.toggle('show');
});
```

## Author

-  Website - [whatobathinks](https://whatobathinks.github.io/my-website)
-  Dribbble - [Obafunsho](https://dribbble.com/Obafunsho)
-  Twitter - [@whatobathinks](https://www.twitter.com/whatobathinks)
