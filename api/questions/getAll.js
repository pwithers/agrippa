
exports.getAll = function(req, res){
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
    res.json(base);
  };

  require('async').parallel(queries, asyncFinally);
};
