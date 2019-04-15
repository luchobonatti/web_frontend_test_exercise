# A web Frontend test exercise
A complete landing page with the follow stack:
* Webpack
* Nunjucks
* Bootstrap 4
* AOS [Animate on Scroll]
* Deploy to Now

DEMO WEB SITE: https://output-phmdlmjpa.now.sh 

NOTE: You need node >= 10

## Instructions
    
  - Clone the repository
  - In project root, run:
```js
// Install required dependencies
$ npm install

// Develop mode
$ npm run watch

// Build develop mode
$ npm run build

// Build for production in output folder
$ npm run build:prod

// Watch production mode
$ npm run watch:prod

// Deploy to now (you have to have an account)
$ npm run deploy
```

## Edit content and sections
If you want to edit the page content you have to edit the file: nunjuckspages.js, is in the project root. 
If you want to add more sections, in the previous file there is an array with sections. 
The logic is:
* The banner (first section) is a separated section.
* Also you have odd and even sections, these sections have their own style (odd and even is the position number).
* The odd sections have an image in the right side and the text in the left side
* The even sections have an image in the left side and the text in the right side

# Some necesary links
* [Now.js](https://zeit.co/now)
* [Nunjucks](https://mozilla.github.io/nunjucks/)
* [AOS](https://michalsnik.github.io/aos/)
* [Bootstrap 4](https://getbootstrap.com/)
