"use strict"
var graylog = require('graylog-api');
var url = require("url");
var queryString = require("querystring");

class GraylogController {
  constructor() {

    this.graylogApi = graylog.connect({
      basicAuth: {
        username: 'admin',
        password: 'admin'
      }, // Optional. Default: null. Basic access authentication
      protocol: 'http', // Optional. Default: 'http'. Connection protocol
      host: '192.168.0.20', // Optional. Default: 'localhost'. API hostname
      port: '12900' // Optional. Default: '12900'. API port
    });
  }

  searchAbsolute(req, res) {

    console.log("object", req.query);

    var queryJson = req.query;

    var errors = [];

    if (!queryJson.query) {
      errors.push("A query é obrigatória.");
    }

    if (!queryJson.from) {
      errors.push("A data inicial é obrigatória.");
    }

    if (!queryJson.to) {
      errors.push("A data final é obrigatória.");
    }

    if (!queryJson.fields) {
      errors.push("Os campos a serem buscados são obrigatórios.");
    }

    if (!queryJson.sort) {
      queryJson.sort = 'asc';
    }

    if (!queryJson.sort) {
      queryJson.limit = '100';
    }

    if (errors.length == 0) {

      // Example
      //query: 'source:example.org',
      //  from: '2015-07-24T00:00:00.000Z',
      //    to: '2016-01-24T00:00:00.000Z',
      //      limit: '100',
      //        fields: 'message,timestamp',
      //          sort: 'asc'

      this.graylogApi.searchAbsolute(queryJson,
        function (err, data) {
          if (err) {
            res.status(400);
            return next(err);
          } else {
            res.json(data);
          }
        });
    }
    else {

      res.status(400).send({ errors: errors });
      return next(err);
    }
  }
}

module.exports = GraylogController;