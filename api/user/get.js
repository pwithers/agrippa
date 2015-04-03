exports.get = function(req, res,next){
  var workflow = req.app.utility.workflow(req, res);
  workflow.on('validate', function() {
    workflow.emit('get');
  });
  workflow.on('get',function() {
       req.app.db.models.User.findOne({_id:req.user._id}, function(err, got) {
         if (err) {
           return done(err, null);
         }
         out= {
           '_id':got._id,
           'username':got.username,
           'email':got.email
         };
         res.json(out);
       });
 });
  workflow.emit('validate');
};
