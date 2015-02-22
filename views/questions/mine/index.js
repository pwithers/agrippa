'use strict';

exports.init = function(req, res, next){
  var questions = {};
  var queries = [];
  var base = {};
    queries.push(function(done) {
      req.app.db.models.Question.find({userCreated:{id:req.user._id}}, function(err, questions) {
        if (err) {
          return done(err, null);
        }
        questions.forEach(function(q) {
          questions[q._id] = q;
        });
        base.questions = questions;
        done(null);
      });
    });

  var asyncFinally = function(err, results) {
    if (err) {
      return next(err);
    }
    console.log(base);
    res.render('questions/mine/index', base);
  };

  require('async').parallel(queries, asyncFinally);
};



exports.create = function(req, res, next){
  var workflow = req.app.utility.workflow(req, res);

  workflow.on('validate', function() {
    console.log(req.body);
    if (!req.body.text) {
      workflow.outcome.errors.push('Some text is required');
      return workflow.emit('response');
    }

    workflow.emit('createQuestion');
  });

  workflow.on('createQuestion', function() {
    var fieldsToSet = {
      text: req.body.text,
      userCreated: { id:req.user._id},
      time: Date.now()
    };
    req.app.db.models.Question.create(fieldsToSet, function(err, question) {
      if (err) {
        return workflow.emit('exception', err);
      }
      workflow.outcome.record = question;
      return workflow.emit('response');
    });
  });
  workflow.emit('validate');
};



exports.delete = function(req, res, next){
  var workflow = req.app.utility.workflow(req, res);

  workflow.on('validate', function() {
    if (!req.body.qId) {
      workflow.outcome.errors.push('Question ID not transmitted.');
      return workflow.emit('response');
    }

    if (req.app.db.models.Question.where({userCreated:{id:req.user._id},_id:req.body.qId}).findOne()){
      workflow.outcome.errors.push('Question not found');
      return workflow.emit('response');
    }
    workflow.emit('deleteQuestion');
  });

  workflow.on('deleteQuestion', function(err) {
    req.app.db.models.Question.findOneAndRemove({userCreated:{id:req.user._id},_id:req.body.qId}, function(err, category) {
      if (err) {
        return workflow.emit('exception', err);
      }
      workflow.emit('response');
    });
  });

  workflow.emit('validate');
};
