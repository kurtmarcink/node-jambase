// DEPENDENCIES //
var request = require('request');
var querystring = require('querystring');


var JamBase = (function() {
    var baseUrl = "http://api.jambase.com/",
        mergeParams = function(apiKey, params) {
            params.api_key = apiKey;

            return querystring.stringify(params);
        };

    return function(apiKey) {
        return {
            getEventBy_id: function (id, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {'id': id}),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_zipCode: function (zipCode, page, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {'zipCode': zipCode, 'page': page}),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_zipCode_radius: function (zipCode, radius, page, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'zipCode': zipCode,
                                                                  'radius': radius,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_zipCode_radius_startDate: function (zipCode, radius, startDate, page,
                                                               callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'zipCode': zipCode,
                                                                  'radius': radius,
                                                                  'startDate': startDate,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_zipCode_radius_startDate_endDate: function (zipCode, radius, startDate,
                                                                       endDate, page, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'zipCode': zipCode,
                                                                  'radius': radius,
                                                                  'startDate': startDate,
                                                                  'endDate': endDate,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_artistId_zipCode: function (artistId, zipCode, page, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'artistId': artistId,
                                                                  'zipCode': zipCode,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_artistId_zipCode_radius: function (artistId, zipCode, radius, page,
                                                              callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'artistId': artistId,
                                                                  'zipCode': zipCode,
                                                                  'radius': radius,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_artistId_zipCode_radius_startDate: function (artistId, zipCode, radius,
                                                                        startDate, page, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'artistId': artistId,
                                                                  'zipCode': zipCode,
                                                                  'radius': radius,
                                                                  'startDate': startDate,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_artistId_zipCode_radius_startDate_endDate: function (artistId, zipCode,
                                                                                radius, startDate,
                                                                                endDate, page,
                                                                                callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'artistId': artistId,
                                                                  'zipCode': zipCode,
                                                                  'radius': radius,
                                                                  'startDate': startDate,
                                                                  'endDate': endDate,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_artistId: function (artistId, page, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'artistId': artistId,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_artistId_startDate: function (artistId, startDate, page, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'artistId': artistId,
                                                                  'startDate': startDate,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_artistId_startDate_endDate: function (artistId, startDate, endDate, page,
                                                                 callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'artistId': artistId,
                                                                  'startDate': startDate,
                                                                  'endDate': endDate,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_venueId: function (venueId, page, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'venueId': venueId,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_venueId_startDate: function (venueId, startDate, page, callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'venueId': venueId,
                                                                  'startDate': startDate,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getEventListBy_venueId_startDate_endDate: function (venueId, startDate, endDate, page,
                                                                callback) {
                request.get(baseUrl + 'events?' + mergeParams(apiKey, {
                                                                  'venueId': venueId,
                                                                  'startDate': startDate,
                                                                  'endDate': endDate,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getArtistBy_name: function (name, page, callback) {
                request.get(baseUrl + 'artists?' + mergeParams(apiKey, {'name': name, 'page': page}),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getArtistBy_id: function (id, page, callback) {
                request.get(baseUrl + 'artists?' + mergeParams(apiKey, {'id': id, 'page': page}),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getVenuesBy_name: function (name, page, callback) {
                request.get(baseUrl + 'venues?' + mergeParams(apiKey, {'name': name, 'page': page}),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getVenuesBy_zipCode: function (zipCode, page, callback) {
                request.get(baseUrl + 'venues?' + mergeParams(apiKey, {
                                                                  'zipCode': zipCode,
                                                                  'page': page
                                                              }),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            },
            getVenuesBy_id: function (id, page, callback) {
                request.get(baseUrl + 'venues?' + mergeParams(apiKey, {'id': id, 'page': page}),
                            function (err, res, body) {
                                if (callback && typeof(callback) === "function") {
                                    body = JSON.parse(body);
                                    callback(err, body);
                                }
                            });
            }
        }
    };
}());

module.exports = JamBase;