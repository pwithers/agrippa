exports.update = function(req, res,next){
  var workflow = req.app.utility.workflow(req, res);

  workflow.on('validate', function() {
    if (!req.body.organisationId) {
      workflow.outcome.errfor.organisationId = 'required';
    }
    workflow.emit('ensureAdmin');
  });
  workflow.on('ensureAdmin', function() {
      require('../core/organisation/roles/checkrole').checkrole(req,workflow,null,'update');
  });
 workflow.on('update',function() {
       req.app.db.models.Organisation.findOne({_id:req.body.organisationId}, function(err, got) {
         if (err) {
           return done(err, null);
         }
         if(req.body.name){
           got.name =req.body.name;
         }
         if(req.body.emailExtension){
           got.emailExtension =req.body.emailExtension;
         }
         got.save(function(err){
           if(err){return done(err, null);}
         });
         res.json(got);
       });
 });
  workflow.emit('validate');
};
