var knex = require('knex');

var Schema = {
    questions: {
        id: {type: 'increments', nullable: false, primary: true},
        content: {type: 'text', nullable: false},
        answer_op1: {type: 'text', nullable: false},
        answer_op2: {type: 'text', nullable: false},
        answer_op3: {type: 'text', nullable: false},
        correct_answer: {type: 'integer', nullable: false}
    },
};

module.exports = Schema;