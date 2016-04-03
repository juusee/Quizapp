var Question = require('../models/Question');

/* Get all questions */
exports.List = function(req, res, next) {
    var offset = 0;
    var fetchAmount = 20;
    Question.forge()
        .query(function(qb) {
            qb.orderBy('created_at', 'desc').offset(offset).limit(fetchAmount);
        })
        .fetchAll()
        .then(function(questions) {
            if (!questions) {
                next(new Error('No such question'));
            } else {
                var qs = questions.toJSON();
                var respond = {questions: qs};
                res.send(respond);
            }
        })
        .catch(function(err) {
            next(err);
        });
};

/*
exports.GetById = function(req, res, next) {
    Question.forge({id: req.params.id})
        .fetch({require: true})
        .then(function (question) {
            console.log()
            if (!question) {
                next(new Error('No such question'));
            } else {
                res.render('index', { title: 'Quiz', question: question.toJSON() });
            }
        })
        .catch(function(err) {
            next(err);
        });
};*/

/* Get question ordered by creation time */
exports.GetByPage = function(req, res, next) {
    var offset = req.params.offset || 0;
    var fetchAmount = 2;
    Question.forge()
        .query(function(qb) {
            qb.orderBy('created_at', 'desc').offset(offset).limit(fetchAmount);
        })
        .fetchAll()
        .then(function(questions) {
            if (!questions) {
                next(new Error('No such question'));
            } else {
                var qs = questions.toJSON();
                var respond = {question: qs[0], hasNext: qs[1], offset: offset};
                res.send(respond);
            }
        })
        .catch(function(err) {
            next(err);
        });
};

/* Save new question */
exports.Create = function(req, res, next) {
   Question.forge({
       content          : req.body.question,
       answer_op1       : req.body.answer_op1,
       answer_op2       : req.body.answer_op2,
       answer_op3       : req.body.answer_op3,
       correct_answer   : req.body.optradio
   })
        .save()
        .then(function() {
            res.send({success: 'true', message: 'Question added!'});
        })
        .catch(function(err) {
            next(err);
        });
};

exports.Update = function(req, res) {

};

/* Remove question */
exports.Delete = function(req, res, next) {
    Question.forge( {id: req.params.id})
        .fetch()
        .then(function(question) {
            if (!question)
                next(new Error('No such question'));
            else {
                question.destroy()
                    .then(function () {
                        res.send({success: 'true'});
                    })
                    .catch(function (err) {
                        next(err);
                    })
            }
        })
        .catch(function(err) {
            next(err);
        })
};