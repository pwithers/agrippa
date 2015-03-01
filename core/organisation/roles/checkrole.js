exports.checkrole = function(req,workflow,role,next){
  req.app.db.models.UserOrgRights.findOne({ organisationId: req.body.organisationId,userId:req.user._id}, function(err, uor) {
    if (err) {
      return workflow.emit('exception', err);
    }
    if (uor){
      if(role){
      if(!uor.role.contains(role)){
        workflow.emit(next);
      } else {
        workflow.outcome.errfor.userId = 'Need '+role+' rights';
      }
    } else {
      workflow.emit(next);
    }
    } else {workflow.outcome.errfor.userId = 'Need '+role+' rights';}
  });
};
