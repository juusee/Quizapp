var con = require('../../config/db/connection');
var knex = require('knex')(con);
var Bookshelf = require('bookshelf')(knex);
var Question = require('../models/Question');

var Questions = Bookshelf.Collection.extend({
    model: Question
});

module.exports = Questions;