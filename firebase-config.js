
var admin = require("firebase-admin");



var serviceAccount = require("./hair_share_admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hairshare-83628.firebaseio.com"
});



module.exports.admin = admin
