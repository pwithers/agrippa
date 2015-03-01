exports.ask = function(req, res,next){
  var workflow = req.app.utility.workflow(req, res);
  workflow.on('validate', function() {
    if (!req.body.text) {
      workflow.outcome.errfor.text = 'required';
    }
    else if (!/^[a-zA-Z0-9\-\_]+$/.test(req.body.text)) {
      workflow.outcome.errfor.text = 'only use letters, numbers, \'-\', \'_\'';
    }

    if(!req.body.organisationId){
      workflow.outcome.errfor.organisationId = 'required';
    }
    require('../core/organisation/roles/checkrole').checkrole(req,workflow,null,'insert');
  });
  workflow.on('insert', function(){
    fieldsToCreate = {
       text:req.body.text,
       userCreated: {
         id: req.user._id,
         organisation: req.body.organisationId
       },
       time:Date.now
    };
    req.app.db.models.Question.create(fieldsToCreate, function(err, question) {
      if (err) {
        return workflow.emit('exception', err);
      }
      res.json({id:question._id});
    });
  });
  workflow.emit('validate');

};
