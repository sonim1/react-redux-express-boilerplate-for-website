# Redux + Express Website BoilerPlate

<!-- toc orderedList:0 depthFrom:1 depthTo:2 -->

* [Redux + Express Website BoilerPlate](#redux-express-website-boilerplate)
* [Installation](#installation)
* [Features](#features)
* [Using Time Machine Debugging](#using-time-machine-debugging)

<!-- tocstop -->

This is a basic web layout boiler plate.
Routing is react-router@v3 is in use
Please check the [Features](#features) for more details.

# Installation
If you are using a yarn, you can install a `yarn` instead `npm install`


```shell
# Git Clone
# mypage is your project name
git clone https://github.com/sonim1/redux-express-website-boilerplate.git mypage
cd mypage

# Package Install
npm install

# build
npm run build

npm run start       # start production
npm run development # start development
```

```
mypage/
├── build/
├── public/
│   └── index.html
├── server/
│   └── app.js
├── src/
│   ├── actions/
│   ├── components/
│   ├── containers/
│   ├── reducers/
│   ├── store/
│   ├── styles/
│   └── index.js
├── .babelrc
├── .eslintignore
├── .eslintrc
├── package.json
├── webpack.config.js
└── webpack.dev.config.js
```

- **build/** : Express server build file
- **public/** : Application build file
    - `npm run build` are make `bundle.js` and `css/main.css`
    - `index.html` <- Call bundle.js and css file
- **server/** : Express server folder
    - Express server is configured with `web-dev-server` and `static path`.
    You can add express function inside server folder.
- **src/** : Application source folder

# Features
The following techniques have been applied.

### Back-end
- [Express](http://expressjs.com/)

### Front-end
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/docs/introduction/)
- Style
    - [SASS](http://sass-lang.com/)
    - [Bootstrap v3 (Sass)](http://getbootstrap.com/)
- ES6
- [React-Hot-Loader](http://gaearon.github.io/react-hot-loader/getstarted/)
- [Time Machine Debugging](https://github.com/gaearon/redux-devtools) - [Redux-DevTools Extenstion](https://github.com/zalmoxisus/redux-devtools-extension)
- [ESLint](http://eslint.org/)

# Using Time Machine Debugging
You need to install devtools for time travel debugging.
Please check the installation guide.

[Redux Devtools Extension Installation Guide](https://github.com/zalmoxisus/redux-devtools-extension#installation)
