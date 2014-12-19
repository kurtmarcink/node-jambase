var request = require('request');

var baseUrl = "http://api.jambase.com/";

var JamBase = function(apiKey) {
    this.apiKey = apiKey;

    this.__mergeParams = function(params) {
        var uriParams = '';

        for (var k in params) {
            if (params.hasOwnProperty(k)) {
                if (uriParams) {
                    uriParams += '&' + encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
                }
                else {
                    uriParams += encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
                }
            }
        }
        return uriParams + '&api_key=' + this.apiKey;
    };
};

JamBase.prototype.getEventById = function(id, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'id': id}), function(err, res, body) {
        if (callback && typeof(callback) === "function") {
            body = JSON.parse(body);
            callback(err, body);
        }
    });
};

JamBase.prototype.getEventListBy_zipCode = function(zipCode, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'zipCode': zipCode, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_zipCode_radius = function(zipCode, radius, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'zipCode': zipCode, 'radius': radius, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_zipCode_radius_startDate = function(zipCode, radius, startDate, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'zipCode': zipCode, 'radius': radius, 'startDate': startDate, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_zipCode_radius_startDate_endDate = function(zipCode, radius, startDate, endDate, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'zipCode': zipCode, 'radius': radius, 'startDate': startDate, 'endDate': endDate, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};


JamBase.prototype.getEventListBy_artistId_zipCode = function(artistId, zipCode, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'artistId': artistId, 'zipCode': zipCode, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_artistId_zipCode_radius = function(artistId, zipCode, radius, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'artistId': artistId, 'zipCode': zipCode, 'radius': radius, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_artistId_zipCode_radius_startDate = function(artistId, zipCode, radius, startDate, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'artistId': artistId, 'zipCode': zipCode, 'radius': radius, 'startDate': startDate, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_artistId_zipCode_radius_startDate_endDate = function(artistId, zipCode, radius, startDate, endDate, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'artistId': artistId, 'zipCode': zipCode, 'radius': radius, 'startDate': startDate, 'endDate': endDate, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_artistId = function(artistId, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'artistId': artistId, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_artistId_startDate = function(artistId, startDate, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'artistId': artistId, 'startDate': startDate, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_artistId_startDate_endDate = function(artistId, startDate, endDate, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'artistId': artistId, 'startDate': startDate, 'endDate': endDate, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_venueId = function(venueId, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'venueId': venueId, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_venueId_startDate = function(venueId, startDate, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'venueId': venueId, 'startDate': startDate, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_venueId_startDate_endDate = function(venueId, startDate, endDate, page, callback) {
    request.get(baseUrl + 'events?' + this.__mergeParams({'venueId': venueId, 'startDate': startDate, 'endDate': endDate, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_artistName = function(name, page, callback) {
    request.get(baseUrl + 'artists?' + this.__mergeParams({'name': name, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_artistId = function(id, page, callback) {
    request.get(baseUrl + 'artists?' + this.__mergeParams({'id': id, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_venueName = function(name, page, callback) {
    request.get(baseUrl + 'venues?' + this.__mergeParams({'name': name, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_venueZipCode = function(zipCode, page, callback) {
    request.get(baseUrl + 'venues?' + this.__mergeParams({'zipCode': zipCode, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

JamBase.prototype.getEventListBy_venueId = function(id, page, callback) {
    request.get(baseUrl + 'venues?' + this.__mergeParams({'id': id, 'page': page}),
                function(err, res, body) {
                    if (callback && typeof(callback) === "function") {
                        body = JSON.parse(body);
                        callback(err, body);
                    }
                });
};

module.exports = JamBase;