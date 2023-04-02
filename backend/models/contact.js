const mongoose = require('mongoose');
module.exports = mongoose.model('Contact',
  {
    name: {
      type: String,
      required: true
    },


    email: {
      type: String,
      required: true
    },

    query:{
      type:String,
      required: true
    }  });