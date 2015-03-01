exports.get = function(req, res,next){
  var workflow = req.app.utility.workflow(req, res);

  workflow.on('validate', function() {
    if (!req.body.stat) {
      workflow.outcome.errfor.stat = 'required';
    }
    workflow.emit('get');
  });
 workflow.on('get',function() {
       req.app.db.models.Organisation.findOne({_id:req.body.organisationId}, function(err, got) {
         if (err) {
           return done(err, null);
         }
         res.json(got);
       });
 });
  workflow.emit('validate');
};
