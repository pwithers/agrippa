exports.leave = function(req,res,next){
  var workflow = req.app.utility.workflow(req, res);
  workflow.on('validate',function(){
    if (!req.body.organisationId) {
      workflow.outcome.errfor.organisationId = 'required';
    }
    workflow.emit('attempt');
  });
  workflow.on('attempt',function(){
    req.app.db.models.UserOrgRights.findOne({organisationId: req.body.organisationId,userId:req.user._id}, function(err, got) {
      if (err) {
        return done(err, null);
      }
      if(got){got.remove();}
        res.json({'status':'complete'});
    });
  });
  workflow.emit('validate')
}
