"use strict"
var graylog = require('graylog-api');

class GraylogController {
    constructor() {

        this.graylogApi = graylog.connect({
            basicAuth: {
                username: 'admin',
                password: 'admin'
            }, // Optional. Default: null. Basic access authentication
            protocol: 'http', // Optional. Default: 'http'. Connection protocol
            host: 'example.com', // Optional. Default: 'localhost'. API hostname
            port: '12900' // Optional. Default: '12900'. API port
        });
    }
  
    searchAbsolute(req, res) {

        this.graylogApi.searchAbsolute({ // parameters
            query: 'source:apache',
            from: '2015-07-24T00:00:00.000Z',
            to: '2015-07-25T00:00:00.000Z',
            limit: '10',
            fields: 'message,timestamp',
            sort: 'asc'
        }, function (err, data) {

            if (err) {
                console.log(err);
                res.status(400);
                return next(err);
            } else {
                res.json(data);
            }
        });
    }
}

module.exports = GraylogController;