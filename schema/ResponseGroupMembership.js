'use strict';

exports = module.exports = function(app, mongoose) {
  var responseGroupMembershipSchema = new mongoose.Schema({
    responseId: { type: mongoose.Schema.Types.ObjectId, ref: 'QuestionResponse' },
    responseGroupId:{ type: mongoose.Schema.Types.ObjectId, ref: 'ResponseGroup' }
  });
  app.db.model('ResponseGroupMembership', responseGroupMembershipSchema);
};
