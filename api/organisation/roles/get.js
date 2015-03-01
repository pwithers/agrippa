exports.get = function(req, res,next){
  var workflow = req.app.utility.workflow(req, res);

  workflow.on('validate', function() {
    if (!req.body.organisationId) {
      workflow.outcome.errfor.organisationId = 'required';
    }
    workflow.emit('ensureAdmin');
  });
  workflow.on('ensureAdmin', function() {
      require('../core/organisation/roles/checkrole').checkrole(req,workflow,null,'get');
  });
 workflow.on('get',function() {
   var users = {};
   var queries = [];
   var base = {};
     queries.push(function(done) {
       req.app.db.models.UserOrgRights.find({organisationId:req.body.organisationId}, function(err, got) {
         if (err) {
           return done(err, null);
         }
         got.forEach(function(q) {
           users[q._id] = {id:q.userId,roles:q.roles};
         });
         base.users = users;
         done(null);
       });
     });

   var asyncFinally = function(err, results) {
     if (err) {
       return next(err);
     }
     res.json(base);
   };
   require('async').parallel(queries, asyncFinally);
 });
  workflow.emit('validate');
};
