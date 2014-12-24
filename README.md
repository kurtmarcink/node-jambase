# JamBase API for Node.js [https://nodei.co/npm/node-jambase.png?mini=true](https://nodei.co/npm/node-jambase/)

[node-jambase](https://github.com/kurtmarcink/node-jambase) aims to provide a client library for the [JamBase V3 REST API](http://developer.jambase.com/).


## Configuration

You will need a valid JamBase API Key. Directions for obtaining one can be found [here](http://developer.jambase.com/).

````
var JamBase = require('node-jambase');

var client = new JamBase(apiKey);
````

Add your credentials accordingly.  I would use environment variables to keep your private info safe.  So something like:

````
var client = new JamBase(process.env.JAMBASE_API_KEY);
````
## Installation

`npm install node-jambase`

## Usage

Methods are provided for all of the methods found in the [JamBase API Documentation](http://developer.jambase.com/io-docs).

For examples, see `examples/all.js`.