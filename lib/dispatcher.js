/*
 * /lib/dispatcher.js
 */
var fs                      = require('fs');
var url                     = require('url');
//var controller            = require('./controller');
//var response_handler            = require('./response_handler');
 
this.dispatch = function(req, res, cb){
  console.log( "foo");
  res.end();
  cb();
};
