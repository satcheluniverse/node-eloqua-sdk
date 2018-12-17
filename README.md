# Eloqua API Wrapper written in javascript

A node.js module, which provides a simple wrapper for the Eloqua API.

[![Documentation](https://img.shields.io/badge/Documentation--green.svg)](https://jeffbaldwinjr.github.io/node-eloqua-sdk/)
[![Eloqua API](https://img.shields.io/badge/Eloqua%20API--green.svg)](https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAB/index.htm)
[![Build Status](https://travis-ci.org/jeffbaldwinjr/node-eloqua-sdk.svg?branch=master)](https://travis-ci.org/jeffbaldwinjr/node-eloqua-sdk)
[![Coverage Status](https://coveralls.io/repos/github/jeffbaldwinjr/node-eloqua-sdk/badge.svg?branch=master)](https://coveralls.io/github/jeffbaldwinjr/node-eloqua-sdk?branch=master)
[![install size](https://packagephobia.now.sh/badge?p=eloqua-sdk)](https://packagephobia.now.sh/result?p=eloqua-sdk)
[![npm downloads](https://img.shields.io/npm/dm/eloqua-sdk.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eloqua-sdk)
[![Dependencies](https://david-dm.org/jeffbaldwinjr/node-eloqua-sdk.svg)](https://david-dm.org/jeffbaldwinjr/node-eloqua-sdk) [![Greenkeeper badge](https://badges.greenkeeper.io/jeffbaldwinjr/node-eloqua-sdk.svg)](https://greenkeeper.io/)

## Getting Started

### Installing
Install using [npm](http://npmjs.org):

```shell
$ npm install eloqua-sdk
```

### Create the Eloqua client

```javascript
// With ES5
var EloquaApi = require('eloqua-sdk');

var eloqua_config = {
                      sitename: '[[Your Sitename]]',
                      username: '[[Your Username]]',
                      password: '[[Your Password]]'
                    };

var eloqua = new EloquaApi(eloqua_config);
````
```javascript
// With ES6
import EloquaApi from 'eloqua-sdk';

const eloqua_config = {
                      sitename: '[[Your Sitename]]',
                      username: '[[Your Username]]',
                      password: '[[Your Password]]'
                    };

const eloqua = new EloquaApi(eloqua_config);
```
```javascript
// With ES7
import EloquaApi from 'eloqua-sdk';

const eloqua_config = {
                      sitename: '[[Your Sitename]]',
                      username: '[[Your Username]]',
                      password: '[[Your Password]]'
                    };

const eloqua = new EloquaApi(eloqua_config);
```

### Get a campaign name

```javascript
// ES5
eloqua.assets.campaigns.get()
  .then(function(results) {
    console.log('Campaign Name: ' + results.data.elements[0].name);
  })
  .catch(function(err) {
    console.error(err);
  });
```
```javascript
// ES6
eloqua.assets.campaigns.get()
  .then(results => {
    console.log(`Campaign Name: ${results.data.elements[0].name}`);
  })
  .catch(err => {
    console.error(err);
  });
```
```javascript
// ES7
async function getCampaigns() {
  try {
    const results = await eloqua.assets.campaigns.get();
    console.log(`Campaign Name: ${results.data.elements[0].name}`);
  } catch(err) {
    console.error(err);
  }
}
getCampaigns();
```

## Built With

* [Axios](https://github.com/axios/axios)


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/JeffBaldwinJr/node-eloqua-sdk/tags). 

## Authors

* **Jeff Baldwin** - *Initial work* - [JeffBaldwinJr](https://github.com/JeffBaldwinJr)

See also the list of [contributors](https://github.com/JeffBaldwinJr/node-eloqua-sdk/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
