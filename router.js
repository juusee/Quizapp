var express = require('express');
var router = express.Router();

var QuestionController = require('./app/controllers/QuestionController');

/* Routes for angular */
router.get('/', function(req,res) {
    res.sendFile("index.html", { root: __dirname + "/public" });
});
router.get('/list', function(req,res) {
    res.sendFile("index.html", { root: __dirname + "/public" });
});
router.get('/create', function(req,res) {
    res.sendFile("index.html", { root: __dirname + "/public" });
});

/* Crud routes */
router.get('/questions', QuestionController.List);
router.post('/questions', QuestionController.Create);
router.delete('/questions/:id', QuestionController.Delete);
//router.get('/questions/:id', QuestionController.GetById);
router.put('/questions/:id', QuestionController.Update);

router.get('/questions/page/:offset', QuestionController.GetByPage);

module.exports = router;