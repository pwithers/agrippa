'use strict';

exports = module.exports = function(app, mongoose) {
  var conditionGroupSchema = new mongoose.Schema({
    name :{ type: String, default: '' }
  });
  app.db.model('ConditionGroup', conditionGroupSchema);
};
