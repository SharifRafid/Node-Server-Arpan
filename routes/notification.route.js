const express = require('express')
const { admin } = require('../firebase-config')
const db = admin.firestore()

const router = express.Router()


router.post('/send-popup-notification-to-user', async (req, res) => {

    const id = req.body.userId
    const user_id = req.body.userId
    const apititle = req.body.apititle
    const apibody = req.body.apibody
    const apidialogtitle = req.body.apidialogtitle
    const apidialogbody = req.body.apidialogbody
    const click_action = req.body.click_action

    let userToken = []

    const tokenRef = db.collection("users").doc(id);
    const doc = await tokenRef.get();
    if (!doc.exists) {
        console.log('No such document!');
        return
    } else {
        userToken = doc.data().registrationTokens
        console.log('Document data:', userToken);
    }
    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    };
    const message = {

        android: {
            notification: {
                title: apititle,
                body: apibody,
                click_action: click_action,
                sound: 'ios_notification'
            }
        },

        options: notification_options,

        data: {},

        tokens: userToken,
        priority: "high",
    }

    message.data.apidialogtitle2 = apidialogbody;
    message.data.apidialogtitle = apidialogtitle;
    message.data.popup = "true";
    admin.messaging().sendMulticast(message)
        .then(async (response) => {
            res.json(response)
        })
        .catch(error => {
            console.log(error);
        });

})

router.post('/send-order-status-changed-notification', async (req, res) => {

    const id = req.body.userId
    const user_id = req.body.userId
    const apititle = req.body.apititle
    const apibody = req.body.apibody
    const orderID = req.body.orderID
    const click_action = req.body.click_action

    let userToken = []

    const tokenRef = db.collection("users").doc(id);
    const doc = await tokenRef.get();
    if (!doc.exists) {
        console.log('No such document!');
        return
    } else {
        userToken = doc.data().registrationTokens
        console.log('Document data:', userToken);
    }
    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    };
    const message = {

        android: {
            notification: {
                title: apititle,
                body: apibody,
                click_action: click_action,
                sound: 'ios_notification'
            }
        },

        options: notification_options,

        data: {},

        tokens: userToken,
        priority: "high",
    }

    message.data.orderID = orderID;
    admin.messaging().sendMulticast(message)
        .then(async (response) => {
            res.json(response)
        })
        .catch(error => {
            console.log(error);
        });

})

router.post('/send-notification-to-admin-app-about-a-new-order-that-he-recieved', async (req, res) => {

    const user_id = req.body.userId
    const apititle = req.body.apititle
    const apibody = req.body.apibody
    const orderID = req.body.orderID
    const click_action = ".ui.home.HomeActivityMain"

    let userToken = []

    const tokenRef = db.collection("admin_app_notification_data_tokens")
        .doc("admin_app_notification_data_tokens");
    const doc = await tokenRef.get();
    if (!doc.exists) {
        console.log('No such document!');
        return
    } else {
        userToken = doc.data().registrationTokens
        console.log('Document data:', userToken);
    }
    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    };
    const message = {

        android: {
            notification: {
                title: apititle,
                body: apibody,
                click_action: click_action,
                sound: 'ios_notification'
            }
        },

        options: notification_options,

        data: {},

        tokens: userToken,
        priority: "high",
    }

    message.data.orderID = orderID;
    message.data.user_id = user_id;
    admin.messaging().sendMulticast(message)
        .then(async (response) => {
            res.json(response)
        })
        .catch(error => {
            console.log(error);
        });

})

router.post('/send-notification-to-da-about-a-new-order-that-he-recieved-2', async (req, res) => {

    const user_id = req.body.userId
    const daId = req.body.daId
    const apititle = req.body.apititle
    const apibody = req.body.apibody
    const orderID = req.body.orderID
    const click_action = req.body.click_action

    let userToken = []

    const tokenRef = db.collection("da_agents_main_list_collection")
        .doc(daId);
    const doc = await tokenRef.get();
    if (!doc.exists) {
        console.log('No such document!');
        return
    } else {
        userToken = doc.data().registrationTokens
        console.log('Document data:', userToken);
    }
    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    };
    const message = {
        android: {
            notification: {
                title: apititle,
                body: apibody,
                click_action: click_action,
                sound: 'mixkit_residential_burglar_alert_1656'
            }
        },

        options: notification_options,

        data: {},

        tokens: userToken,
        priority: "high",
    }

    message.data.orderID = orderID;
    message.data.daId = daId;
    message.data.title = apititle;
    message.data.body = apibody;
    message.data.daId = daId;
    message.data.user_id = user_id;
    message.data.timestamp = "timestamp";
    message.data.click_action = click_action;
    message.data.daId = daId;

    admin.messaging().sendMulticast(message)
        .then(async (response) => {
            res.json(response)
        })
        .catch(error => {
            console.log(error);
        });

})

router.post('/send-notification-to-da-about-a-new-order-that-he-recieved', async (req, res) => {
    const user_id = req.body.userId
    const daId = req.body.daId
    const apititle = req.body.apititle
    const apibody = req.body.apibody
    const orderID = req.body.orderID
    const click_action = req.body.click_action

    let userToken = []

    const tokenRef = db.collection("da_agents_main_list_collection")
        .doc(daId);
    const doc = await tokenRef.get();
    if (!doc.exists) {
        console.log('No such document!');
        return
    } else {
        userToken = doc.data().registrationTokens
        console.log('Document data:', userToken);
    }
    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    };
    const message = {
        // android: {
        //   notification: {
        //     title: apititle,
        //     body: apibody,
        //     click_action: click_action,
        //     sound: 'mixkit_residential_burglar_alert_1656.wav'
        //   }
        // },
    }
    message.priority = "high";
    message.options = notification_options;
    message.tokens = userToken;
    message.data.orderID = orderID;
    message.data.daId = daId;
    message.data.title = apititle;
    message.data.body = apibody;
    message.data.daId = daId;
    message.data.user_id = user_id;
    message.data.timestamp = "timestamp";
    message.data.click_action = click_action;
    admin.messaging().sendMulticast(message)
        .then(async (response) => {
            res.json(response)
        })
        .catch(error => {
            console.log(error);
        });
})

router.post('/delete-firebase-storage-of-a-specific-shop-all-delete-images', async (req, res) => {
    const shop_key = req.body.shop_key
    const bucket = admin.storage().bucket();
    await bucket.deleteFiles({
        prefix: `shops/${shop_key}/`
    }).then(results => {
        console.log(results)
        res.json("SUCCESS")
        return results;
    })
        .catch(error => {
            res.json("ERROR")
            console.log(error)
        });
    res.json("RECIEVED DELETE REQUEST")

})

router.post('/delete-firestore-products-data-from-a-specific-category-from-the-admin-app', async (req, res) => {

    res.json("API HIT SUCCESS --- NOTE THAT THIS DOES NOT MEAN THAT THE REQUESTED OPERATION IS SUCCESSFULL ---")

    const category_key = req.body.category_key
    const shop_key = req.body.shop_key

    const productsRef = db.collection("shops_main")
        .doc(shop_key).collection("products_main_sub_collection")
        .where("shopCategoryKey", "==", category_key);

    let batch = db.batch();

    productsRef
        .get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                if (doc.get("image1") != "") {
                    deleteImage("shops/" + doc.get("shopKey") + "/" + doc.get("image1"))
                }
                batch.delete(doc.ref);
            });
            return batch.commit();
        })
})

function deleteImage(_image_path) {
    // first delete the image
    const imageRef = admin.storage().bucket().file(_image_path);
    imageRef.delete().then(function () {
        console.log('file deleted');
        // File deleted successfully
    }).catch(function (error) {
        // Uh-oh, an error occurred!
        console.log(error);
    });
}

module.exports = router;
