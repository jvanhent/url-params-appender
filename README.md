# url-params-appender

![Build Status](https://travis-ci.org/jvanhent/url-params-appender.svg?branch=master)
![Coverage Status](https://coveralls.io/repos/github/jvanhent/url-params-appender/badge.svg?branch=master)
![dependencies Status](https://img.shields.io/david/jvanhent/url-params-appender)
![devDependencies Status](https://img.shields.io/david/dev/jvanhent/url-params-appender?label=devDependencies)
![Known Vulnerabilities](https://snyk.io/test/github/jvanhent/url-params-appender/badge.svg?targetFile=package.json)
![Last Commit](https://img.shields.io/github/last-commit/jvanhent/url-params-appender)

![Npm version](https://img.shields.io/npm/v/url-params-appender?label=latest-version)
![Npm downloads](https://img.shields.io/npm/dm/url-params-appender)
![Npm download size](https://img.shields.io/bundlephobia/min/url-params-appender)

A library that builds a URL, adding query parameters, taking priority params into account. 
This is for very usefull when you want to rebuild the current URL, but add/replace the 'page' and 'pageSize'

## Installation

To install with npm:

```
npm i url-params-appender --save
```

## Usage

Usage with node:

```
var buildUrl = require('url-params-appender');

buildUrl('https://go/see', 
    {
        page: 1, 
        bbb: 111,
        ccc: 'val'
    }, 
    {
        page:2,
        pageSize:5
    }
);

// returns https://go/see?page=2&bbb=111&ccc=val&pageSize=5
```

Now also support for query params in baseUrl:
```
var buildUrl = require('url-params-appender');

buildUrl('https://go/see?name=john', 
    {
        page: 1, 
        bbb: 111,
        ccc: 'val'
    }, 
    {
        page:2,
        pageSize:5
    }
);

// returns https://go/see?name=john&page=2&bbb=111&ccc=val&pageSize=5
```

## Release
How to release:
```
npm version (major/minor/patch)
git push origin ${tag}
```

## Contribution

If you want to contribute to this project, you can fork the repository and create pull request to have it reviewed by the Sandbox team.
Make sure to link the PR to an issue or improvement for tracking purposes.

![Contribution Process](./Contribution_process.jpg)

## License

This is licensed under an MIT License. [See details](LICENSE)
