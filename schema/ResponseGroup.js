'use strict';

exports = module.exports = function(app, mongoose) {
  var responseGroupSchema = new mongoose.Schema({
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: {type:String, default:''},
    isPermanent: {type:Boolean, default:false},
    role:{type:String,default:''}
  });
  app.db.model('ResponseGroup', responseGroupSchema);
};
