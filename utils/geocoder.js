const NodeGeocoder = require('node-geocoder');

const GEOCODER_PROVIDER="mapquest"
const GEOCODER_API_KEY="enteryours"

const options = {
  provider:GEOCODER_PROVIDER,
  httpAdapter:"https",
  apiKey:GEOCODER_API_KEY,
  formatter:null
};
const geocoder = NodeGeocoder(options);

module.exports = geocoder;
