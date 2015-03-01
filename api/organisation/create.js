exports.create = function(req, res){
  var workflow = req.app.utility.workflow(req, res);
  orgId = '';
  workflow.on('validate', function() {
    if (!req.body.name) {
      workflow.outcome.errfor.name = 'required';
    }
    workflow.emit('insert');
  });
  workflow.on('insert', function(){
    fieldsToCreate = {
       name:req.body.name,
       time:Date.now
    };
    if (req.body.emailExtension){
      fieldsToCreate.emailExtension = req.body.emailExtension;
    }
    req.app.db.models.Organisation.create(fieldsToCreate, function(err, org) {
      if (err) {
        return workflow.emit('exception', err);
      }
      orgId = org._id;
      workflow.emit('addUser');
    });
  });
  workflow.on('addUser',function(){
    fieldsToCreate = {
      userId: req.user._id,
      organisationId: orgId,
      role:['admin']
    };
    req.app.db.models.UserOrgRights.create(fieldsToCreate, function(err, rights) {
      if (err) {
        return workflow.emit('exception', err);
      }
      res.json({organisationId:orgId})
    });
  });
  workflow.emit('validate');

};
