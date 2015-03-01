exports.get = function(req, res,next){
  var workflow = req.app.utility.workflow(req, res);
  workflow.on('validate', function() {
    if (!req.body.questionId) {
      workflow.outcome.errfor.questionId = 'required';
    }
    if(!req.body.organisationId){
      workflow.outcome.errfor.organisationId = 'required';
    }
    require('../core/organisation/roles/checkrole').checkrole(req,workflow,null,'checkQuestionOwnership');
  });
  workflow.on('checkQuestionOwnership', function() {
    req.app.db.Question.findOne({_id:req.body.questionId,userCreated:{organisation:req.body.organisationId}}, function(err,q){
      if (err) {
        return workflow.emit('exception',err);
      }
      if (q){
        workflow.emit('fetch');
      } else {
        workflow.emit('exception','Question not owned by organisation');
      }
    });
  });
  workflow.on('fetch', function(){
    var responses = {};
    var queries = [];
    var base = {};
      queries.push(function(done) {
        req.app.db.models.QuestionResponse.find({question:req.body.organisationId}, function(err, out) {
          if (err) {
            return done(err, null);
          }
          out.forEach(function(q) {
            responses[q._id] = q;
          });
          base.responses = responses;
          done(null);
        });
      });

    var asyncFinally = function(err, results) {
      if (err) {
        return next(err);
      }
      res.json(base);
    };

    require('async').parallel(queries, asyncFinally);


  });
  workflow.emit('validate');

};
