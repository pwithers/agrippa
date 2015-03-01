'use strict';

exports = module.exports = function(app, mongoose) {
  var conditionGroupSchema = new mongoose.Schema({
    conditionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Condition' },
    conditionGroup:{ type: mongoose.Schema.Types.ObjectId, ref: 'ConditionGroup' }
  });
  app.db.model('ConditionGroupMembership', conditionGroupSchema);
};
