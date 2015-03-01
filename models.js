'use strict';

exports = module.exports = function(app, mongoose) {
  //embeddable docs first
  require('./schema/Note')(app, mongoose);
  require('./schema/Status')(app, mongoose);
  require('./schema/StatusLog')(app, mongoose);
  require('./schema/Category')(app, mongoose);
  require('./schema/Question')(app,mongoose);
  require('./schema/QuestionResponse')(app,mongoose);

  require('./schema/Condition')(app,mongoose);
  require('./schema/ConditionGroup')(app,mongoose);
  require('./schema/ConditionGroupMembership')(app,mongoose);
  require('./schema/Organisation')(app,mongoose);
  require('./schema/ResponseGroup')(app,mongoose);
  require('./schema/ResponseGroupMembership')(app,mongoose);
  require('./schema/ResponseGroupStats')(app,mongoose);
  require('./schema/UserOrgRights')(app,mongoose);
  //then regular docs
  require('./schema/User')(app, mongoose);
  require('./schema/Admin')(app, mongoose);
  require('./schema/AdminGroup')(app, mongoose);
  require('./schema/Account')(app, mongoose);
  require('./schema/LoginAttempt')(app, mongoose);
};
