exports.get = function(req, res){
  req.app.db.models.Question.find({}, function(err, out) {
        if (err) {
          return done(err, null);
        }
        res.json(out);
      });
};
