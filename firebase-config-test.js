
var admin = require("firebase-admin");

var serviceAccount = require("./test-e2ce9-firebase-adminsdk-yenke-e8f9f799db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-e2ce9-default-rtdb.firebaseio.com"
});

module.exports.admin = admin
