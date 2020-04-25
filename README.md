# build-url

[![Build Status](https://travis-ci.org/johnnyvh/url-params-appender.svg?branch=master)](https://travis-ci.org/johnnyvh/url-params-appender)

A library that builds a URL, adding query parameters, taking priority params into account. 
This is for very usefull when you want to rebuild the current URL, but add/replace the 'page' and 'pageSize'

## Installation

To install with npm:

```
npm install url-params-appender --save
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

## License

This is licensed under an MIT License. [See details](LICENSE)