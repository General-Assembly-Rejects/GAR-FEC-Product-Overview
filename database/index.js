const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/fec-productoverview';

let db;

(async () => {
  try {
    db = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log(e);
  }
})();

const disconnect = () => db.disconnect();

module.exports.disconnect = disconnect;
