const { admin } = require('./firebase-config-test')

async function sendNotification() {
  let userToken = ['eId-ibExRdOo5hgLlzjgfS:APA91bEuwp0EDqnPoK1SgxqOjnSEF9bL29_bHII1toQi5yHYTjl0W-7ewlsXiO-c-5DEBUk878e_pXqHcQDub_FW8EGG6CHlmEaztp9L1rwHV3JbREj-40ymqqQ-tRsCMBQpFcwwSaPO']

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