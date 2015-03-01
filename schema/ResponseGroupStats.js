'use strict';

exports = module.exports = function(app, mongoose) {
  var responseGroupStatSchema = new mongoose.Schema({
    responseGroupId:{ type: mongoose.Schema.Types.ObjectId, ref: 'ResponseGroup' },
    field: {type:String, default:''},
    value: {type:String, default:''},
    date: { type: Date, default: Date.now }
  });
  app.db.model('ResponseGroupStat', responseGroupStatSchema);
};
