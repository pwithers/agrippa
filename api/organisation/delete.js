exports.delete = function(req,res,next){
  var workflow = req.app.utility.workflow(req, res);
  workflow.on('validate',function(){
    if (!req.body.organisationId) {
      workflow.outcome.errfor.organisationId = 'required';
    }
    workflow.emit('attempt');
  });
  workflow.on('attempt',function(){
    req.app.db.models.UserOrgRights.find({organisationId:req.body.organisationId}, function(err, got) {
      if (err) {
        return done(err, null);
      }
      if (got.length!=1){
        workflow.emit('exception', 'Cannot delete orgs with other users');
      } else {
        got.foreach(function(g){q.remove();});
        workflow.emit('delete');
      }
    });
  });
  workflow.on('delete',function(){
    req.app.db.models.Organisation.findOneAndRemove({_id:req.body.organisationId})
    res.json({'status':'complete'});
  });
  workflow.emit('validate')
}
