// DEPENDENCIES //
var JamBase = require('../lib/index.js');

// VARS //
var client = new JamBase('xfs86eemkgu5kw88h6rtq2ca');
var today = new Date().toISOString();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow = tomorrow.toISOString();

client.getEventById(2433538, function(err, payload) {
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

client.getEventListBy_artistName("blink-182",  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_artistId(62478,  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_venueName("House of Blues",  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_venueId("86178",  function(err, payload) {
    console.log(err);
    console.log(payload);
});

client.getEventListBy_zipCode("02215",  function(err, payload) {
    console.log(err);
    console.log(payload);
});