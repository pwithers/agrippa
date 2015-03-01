'use strict';

exports = module.exports = function(app, mongoose) {
  var userOrgRightsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    organisationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organisation' },
    role: { type: [String], default: '' }
  });
  app.db.model('UserOrgRights', userOrgRightsSchema);
};
