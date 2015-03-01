exports.answer = function(req, res){
  var workflow = req.app.utility.workflow(req, res);
  workflow.on('validate', function() {
    if (!req.body.question) {
      workflow.outcome.errfor.question = 'required';
    }
    if (!req.body.response) {
      workflow.outcome.errfor.response = 'required';
    }
    workflow.emit('insert');
  });
  workflow.on('insert', function(){
    fieldsToCreate = {
      question: req.body.question,
      userCreated: {
        id: req.user._id
      },
      time: (req.body.time?req.body.time:Date.now),
      response : req.body.response,
      delay : (req.body.delay?req.body.delay:-1)
    };
    req.app.db.models.QuestionResponse.create(fieldsToCreate, function(err, resp) {
      if (err) {
        return workflow.emit('exception', err);
      }
      res.json({if:resp._id});
    });
  });
  workflow.emit('validate');

};
