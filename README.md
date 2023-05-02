# XXS Frontend
Tools used:
```
Create React App
react-router-dom
axios
Tailwindcss
HeadlessUI
heroicons
pure-react-carousel
```

## Setting up the dev environment

Install dependencies:
`npm install`

To run and build the project we use [Create React App](https://github.com/facebook/create-react-app).

## Setting up the project for uploadable build
In order to get the project run on a external host, we need to do some setup.

- Edit variable `hostURL` in `Constants.js` to reflect your host domain
- Edit field `homepage:` in `package.json` to the subdirectory if you have the project in one
- Edit `basename` field in `index.js` to the subdirectory if you the project in one
- run `npm run build` to build a production build of the project for upload
- place the built files into the [backend](https://github.com/Study-Group-2-Urheilukauppa/urheilukauppa-backend) root directory