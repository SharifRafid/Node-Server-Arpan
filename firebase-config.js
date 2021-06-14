
var admin = require("firebase-admin");

var serviceAccount = require("./arpon-app-firebase-adminsdk-msu2y-ab66e7b352.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://arpon-app-default-rtdb.firebaseio.com"
});

module.exports.admin = admin
