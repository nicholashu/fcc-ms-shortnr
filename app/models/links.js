'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Link = new Schema({
	_id: Number,
	original_url: String,
	short_url: String
});

module.exports = mongoose.model('Link', Link);
