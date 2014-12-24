// DEPENDENCIES //
var JamBase = require('../lib/index.js');

// VARS //
var client = new JamBase(process.env.JAMBASE_API_KEY);
var today = new Date().toISOString();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow = tomorrow.toISOString();

client.getEventBy_id(2433538, function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_zipCode("02215", 0, function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_zipCode_radius("02215", 50, 0, function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_zipCode_radius_startDate("02215", 50, today, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_zipCode_radius_startDate_endDate("02215", 50, today, tomorrow, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_artistId_zipCode(62478, "02215", 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_artistId_zipCode_radius(62478, "02215", 50, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_artistId_zipCode_radius_startDate(62478, "02215", 50, today, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_artistId_zipCode_radius_startDate_endDate(62478, "02215", 50, today, tomorrow, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_artistId(62478, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_artistId_startDate(62478, today, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_artistId_startDate_endDate(62478, today, tomorrow, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_venueId("86178", 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_venueId_startDate("86178", today, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_venueId_startDate_endDate("86178", today, tomorrow, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getArtistBy_name("blink-182", 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getArtistBy_id(62478, 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getVenuesBy_name("House of Blues", 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getVenuesBy_zipCode("02115", 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getVenuesBy_id("86178", 0,  function(err, payload) {
    console.log(err);
    console.log(payload);
});