exports.remove = function(req, res,next){
  var workflow = req.app.utility.workflow(req, res);
  workflow.on('validate', function() {
    if (!req.body.role) {
      workflow.outcome.errfor.role = 'required';
    }
    if (!req.body.organisationId) {
      workflow.outcome.errfor.organisationId = 'required';
    }
    if (!req.body.userId) {
      workflow.outcome.errfor.userId = 'required';
    }
    workflow.emit('ensureAdmin');
  });
  workflow.on('ensureAdmin', function() {
      require('../core/organisation/roles/checkrole').checkrole(req,workflow,'admin','find');
  });
  workflow.on('find',function () {
    req.app.db.models.UserOrgRights.findOne({ organisationId: req.body.organisationId,userId:req.body.userId}, function(err, uor) {
      if (err) {
        return workflow.emit('exception', err);
      }
      if (uor) {
        if(uor.role.contains(req.body.role)){
          uor.role.splice(uor.role.indexOf(req.body.role),1);
        }
        if (uor.role.length==0){
          uor.remove();
        }
        res.json({'status':'complete'});
      }
    });
  });
  workflow.emit('validate');

};
