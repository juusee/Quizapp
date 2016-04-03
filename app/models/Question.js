var con = require('../../config/db/connection');
var knex = require('knex')(con);
var Bookshelf = require('bookshelf')(knex);

var Question = Bookshelf.Model.extend({
    tableName: 'questions',
    hasTimeStamps: true
});

module.exports = Question;