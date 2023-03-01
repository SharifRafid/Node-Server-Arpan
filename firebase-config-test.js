
var admin = require("firebase-admin");

var serviceAccount = require("./test-18b5f-firebase-adminsdk-ynwz5-570c37f7b9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports.admin = admin
