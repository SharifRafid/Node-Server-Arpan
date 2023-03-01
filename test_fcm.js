const { admin } = require('./firebase-config-test')

async function sendNotification() {
  let userToken = ['d_KSYobYQ-aQW_ZGlXwLQr:APA91bGfw0DP8B2M2g9fH9PVfl8XQrOJ_-p2QBz4n6zfHXuWajSp9xLcJSWmw7FOj-Edaet79dP-uG9QTJRb_1tgdDaFPsfE_kbIVRPm6pF5eVei55inH1rS42uAz1aZ2WdPYCJVuQLr']

  const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
  };
  const message = {

    options: notification_options,

    data: {
      'test':'test',
      'test2':'test2'
    },

    tokens: userToken,
    priority: "high",
  }

  admin.messaging().sendMulticast(message)
    .then(async (response) => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

sendNotification();