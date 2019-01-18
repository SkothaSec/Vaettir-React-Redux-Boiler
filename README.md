# Vaettir React-Redux Boiler

> Boilerplate React+Redux template using create-react-app storybook, bitrc, Bulma and a few other great dev resources and libraries.

<!--- No npm or build status yet, future use
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]
--->

This boiler is in it's earliest stages, and while it may make the process of getting your react app started, the intended features are TBD.

![App Banner](public/readMeBanner.png)

## Installation

1. Clone this repo to wherever you clone your repos to
2. Rename the App to your project name
3. Navigate into the project directory
4. Run `yarn` (or `npm install` alternatively)
5. Run `yarn test` to make sure things went well
6. Start the React App by running `yarn start`
7. Start the Storybook by running `yarn run storybook` (optional)

```sh
git clone https://github.com/SkothaSec/Vaettir-React-Redux-Boiler.git

mv Vaettir-React-Redux-Boiler MyAppsName && cd MyAppsName

yarn

yarn test

yarn start

yarn run storybook
```

From here the react app template should automatically render in your browser (on `port 3000`), if your ran Storybook, that will render as well (on `port 9009`)

## Usage example

When you ran `yarn` to install the dependencies from `package.json` the project structure will basically look like so:

```
my-app
├── README.md
├── node_modules
├── package.json
├── yarn.lock
├── .gitignore
├── .bit
├── .bitmap
├── bit.json
├── .storybook
├──/public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├──/font                //Storybook related directory
│   ├──/icon                //Storybook related directory
│   └──/images
│       └── readMeBanner.png
└── src
    ├── index.js
    ├── App.css
    ├── App.js
    ├── testsducks
    ├── App.test.js
    ├── logo.svg
    ├── serviceWorker.js
    ├──/ducks
    ├──/stories             //Storybook related directory
    │   └──index.js
    ├──/components
    │   ├── App.js
    │   ├──/tests
    │   │   └──App.test.js
    │   ├──/layout
    │   │    ├──Layout.js
    │   │    └──/tests
    │   │       └──Layout.test.js
    │   └──/styles
    │       ├──App.css
    │       ├──layoutComponents.css
    │       ├──index.css
    │       └──logo.svg
    └──/services
        └──/api
```

_For more information and usage, please refer to the [Wiki][wiki]._

## Development setup

There was some issues getting the proper dependencies with `webpack` and `babel` due to a known issue with Storybook, which should be resolved given the package.json setup. For now run `yarn` and `yarn test` and if they show any errors roll with those.

If you feel so inclined: [Submit an `issue` to the project](https://github.com/SkothaSec/dev_tools_manager/issues/new)

```sh
yarn
yarn test
yarn start
```

## Release History

-   0.1.0
    -   The first proper release
    -   CHANGE: Base template created
-   0.0.1
    -   Work in progress

## Meta

Christian Gorke – dev.cmgorke@gmail.com

Follow me on [![Twitter][twitter-icon]][twitter-link]

Check ourt my other repos on [![Github][github-icon]][github-link] 

Distributed under the XYZ license. See `LICENSE` for more information.

## Contributing

1. Fork it (<https://github.com/skothasec/Vaettir-React-Redux-Boiler/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Credits

This README template is based on of  Dan Bader's README Template`.

- [*Dan Bader's Repo `README-Template`*](https://github.com/dbader/readme-template)
- [*Dan Bader's Blog on README setups*]( https://dbader.org/blog/write-a-great-readme-for-your-github-project)

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
[github-link]: https://github.com/skothasec/
[github-icon]: http://i.imgur.com/0o48UoR.png
[twitter-icon]: http://i.imgur.com/tXSoThF.png
[twitter-link]: https://twitter.com/skothasec