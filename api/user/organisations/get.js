
exports.get= function(req, res){
  var questions = {};
  var queries = [];
  var base = {};
    queries.push(function(done) {
      req.app.db.models.UserOrgRights.find({userId:req.user._id}, function(err, out) {
        if (err) {
          return done(err, null);
        }
        questions.forEach(function(q) {
          users[q._id] = {id:q.organisationId,roles:q.roles};
        });
        base.questions = questions;
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
};
