
const express = require("express")
const bodyparser = require("body-parser")
const { admin } = require('./firebase-config')
const functions = require('firebase-functions')
const db = admin.firestore()

const app = express()
app.use(bodyparser.json())

const port = process.env.PORT || 8000

const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};

app.post('/sent-notification', async (req, res) => {


  const id = req.body.userId
  const notification_for = req.body.notification_for
 const apititle = req.body.apititle
  const apibody = req.body.apibody
  const click_action = req.body.click_action
  const user_id = req.body.user_id
  


  let userToken = []

  const tokenRef = db.collection(notification_for).doc(id);
  const doc = await tokenRef.get();
  if (!doc.exists) {
    console.log('No such document!');
    return
  } else {
	      if (doc.data().notification === 'off') {
      console.log('No such document!');

      
var noti={}


        if(user_id){
			   noti = 
        {
            "title": apititle, 
                "body": apibody,
				"user_id":user_id,
                "timestamp": Date.now()

      }
		}else{
			   noti = 
        {
            "title": apititle, 
                "body": apibody,
                "timestamp": Date.now()

      }
			
		}
		
		console.log("noti",noti)
	  
	  
	  
	  
      
      var postListRef = admin.database().ref('notifications/'+id+'/message');
var newPostRef = postListRef.push();
newPostRef.set(noti);

          
    return
    } else {
       userToken = doc.data().registrationTokens
	    console.log('Document data:', userToken);
    }




   
  }

  //const  registrationToken = req.body.registrationToken

 

  //   const message = {
  //     data: {
  //           "title": apititle,
  //           "body": apibody,
  //   },
  //   tokens: userToken,
  // }



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

  if (req.body.booking_id) {
    message.data.booking_id = req.body.booking_id;
    console.log(message);
  } else if (req.body.user_id) {
    message.data.user_id = req.body.user_id;
    console.log(message);
  }





  //const options =  notification_options 

  admin.messaging().sendMulticast(message)
    .then(async (response) => {
      // res.status(200).send("Notification sent successfully")
      res.json(response)



      // const notificationRef = db.collection('notifications').doc(id);
     

var noti={}


        if(user_id){
			   noti = 
        {
            "title": apititle, 
                "body": apibody,
				"user_id":user_id,
                "timestamp": Date.now()

      }
		}else{
			   noti = 
        {
            "title": apititle, 
                "body": apibody,
                "timestamp": Date.now()

      }
			
		}
		
		console.log("noti",noti)
	  
	  
	  
	  
      
      var postListRef = admin.database().ref('notifications/'+id+'/message');
var newPostRef = postListRef.push();
newPostRef.set(noti);
 

// const notificationRef = db.collection("notifications")
//                 .doc(id)
//                 .collection("message")
//         .add(noti);
      
//       if (notificationRef) {
//        return res.status(200).send("Message sent successfully")
//       } else {
//          return res.status(200).send("Message faild")
      
//       }







    })
    .catch(error => {
      console.log(error);
    });

})

app.get("/getData", async (req, res) => {
  const res1 = await db.collection('timers').add({
    updateTime: '5',

  });

  console.log('Added document with ID: ', res1.id);
  res.json({"message":"fine"})
})

app.get("/", async (req, res) => {
    res.json({"message":"HEROKU SERVER FOR ARPAN APP - PLEASE AVOID HITTING THIS URL - THANK YOU :D"})
})

app.listen(port, () => {
  console.log("listening to port" + port)

})

app.post('/send-notification', async (req, res) => {


  //const id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  const id = req.body.userId
  const user_id = req.body.userId
  const apititle = req.body.apititle
  const apibody = req.body.apibody
  const click_action = req.body.click_action
  //const user_id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  
  let userToken = []

  const tokenRef = db.collection("users").doc(id);
  const doc = await tokenRef.get();
  if (!doc.exists) {
    console.log('No such document!');
    return
  } else {
	      if (doc.data().notification === 'off') {
      console.log('No such document!');

      
var noti={}
    if(user_id){
			   noti = 
        {
          "title": apititle,
          "body": apibody,
				  "user_id":user_id,
          "timestamp": Date.now()
        }
		}else{
			   noti = 
        {
          "title": apititle, 
          "body": apibody,
          "timestamp": Date.now()
        }
      }
		
		console.log("noti",noti)

    return
    } else {
       userToken = doc.data().registrationTokens
	    console.log('Document data:', userToken);
    }
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

  if (req.body.booking_id) {
    message.data.booking_id = req.body.booking_id;
    console.log(message);
  } else if (req.body.user_id) {
    message.data.user_id = req.body.user_id;
    console.log(message);
  }

  admin.messaging().sendMulticast(message)
    .then(async (response) => {
      res.json(response)

var noti={}
        if(user_id){
			   noti = 
        {
            "title": apititle, 
                "body": apibody,
				"user_id":user_id,
                "timestamp": Date.now()

      }
		}else{
			   noti = 
        {
            "title": apititle, 
                "body": apibody,
                "timestamp": Date.now()

      }
		}
		console.log("noti",noti)
    })
    .catch(error => {
      console.log(error);
    });

})

app.post('/send-popup-notification-to-user', async (req, res) => {

  //const id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  const id = req.body.userId
  const user_id = req.body.userId
  const apititle = req.body.apititle
  const apibody = req.body.apibody
  const apidialogtitle = req.body.apidialogtitle
  const apidialogbody = req.body.apidialogbody
  const click_action = req.body.click_action
  //const user_id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  
  let userToken = []

  const tokenRef = db.collection("users").doc(id);
  const doc = await tokenRef.get();
  if (!doc.exists) {
    console.log('No such document!');
    return
  } else {
	      if (doc.data().notification === 'off') {
      console.log('No such document!');

      
var noti={}


    if(user_id){
			   noti = 
        {
          "title": apititle,
          "body": apibody,
          "apidialogtitle": apidialogtitle,
          "apidialogbody": apidialogbody,
				  "user_id":user_id,
          "timestamp": Date.now()
        }
		}else{
			   noti = 
        {
          "title": apititle, 
          "body": apibody,
          "apidialogtitle": apidialogtitle,
          "apidialogbody": apidialogbody,
          "timestamp": Date.now()
        }
      }
		
		console.log("noti",noti)
	     
    return
    } else {
       userToken = doc.data().registrationTokens
	    console.log('Document data:', userToken);
    }
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

app.post('/send-order-status-changed-notification', async (req, res) => {

  //const id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  const id = req.body.userId
  const user_id = req.body.userId
  const apititle = req.body.apititle
  const apibody = req.body.apibody
  const orderID = req.body.orderID
  const click_action = req.body.click_action
  //const user_id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  
  let userToken = []

  const tokenRef = db.collection("users").doc(id);
  const doc = await tokenRef.get();
  if (!doc.exists) {
    console.log('No such document!');
    return
  } else {
	      if (doc.data().notification === 'off') {
      console.log('No such document!');

      
var noti={}


    if(user_id){
			   noti = 
        {
          "title": apititle,
          "body": apibody,
          "orderID": orderID,
				  "user_id":user_id,
          "timestamp": Date.now()
        }
		}else{
			   noti = 
        {
          "title": apititle, 
          "body": apibody,
          "orderID": orderID,
          "timestamp": Date.now()
        }
      }
		
		console.log("noti",noti)
	     
    return
    } else {
       userToken = doc.data().registrationTokens
	    console.log('Document data:', userToken);
    }
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

app.post('/send-notification-to-admin-app-about-a-new-order-that-he-recieved', async (req, res) => {

  const id = req.body.userId
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
	      if (doc.data().notification === 'off') {
      console.log('No such document!');
      
var noti={}
    if(user_id){
			   noti = 
        {
          "title": apititle,
          "body": apibody,
          "orderID": orderID,
				  "user_id":user_id,
          "timestamp": Date.now()
        }
		}else{
			   noti = 
        {
          "title": apititle, 
          "body": apibody,
          "orderID": orderID,
          "timestamp": Date.now()
        }
      }
		
		console.log("noti",noti)
	     
    return
    } else {
       userToken = doc.data().registrationTokens
	    console.log('Document data:', userToken);
    }
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

app.post('/send-notification-to-da-about-a-new-order-that-he-recieved-2', async (req, res) => {

  //const id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  const id = req.body.userId
  const user_id = req.body.userId
  const daId = req.body.daId
  const apititle = req.body.apititle
  const apibody = req.body.apibody
  const orderID = req.body.orderID
  const click_action = req.body.click_action
  //const user_id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  
  let userToken = []

  const tokenRef = db.collection("da_agents_main_list_collection")
  .doc(daId);
  const doc = await tokenRef.get();
  if (!doc.exists) {
    console.log('No such document!');
    return
  } else {
	      if (doc.data().notification === 'off') {
      console.log('No such document!');
      
var noti={}
    if(user_id){
			   noti = 
        {
          "title": apititle,
          "body": apibody,
          "orderID": orderID,
          "daId": daId,
				  "user_id":user_id,
          "timestamp": Date.now()
        }
		}else{
			   noti = 
        {
          "title": apititle, 
          "daId": daId,
          "body": apibody,
          "orderID": orderID,
          "timestamp": Date.now()
        }
      }
		
		console.log("noti",noti)
	     
    return
    } else {
       userToken = doc.data().registrationTokens
	    console.log('Document data:', userToken);
    }
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


app.post('/send-notification-to-da-about-a-new-order-that-he-recieved', async (req, res) => {

  //const id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  const id = req.body.userId
  const user_id = req.body.userId
  const daId = req.body.daId
  const apititle = req.body.apititle
  const apibody = req.body.apibody
  const orderID = req.body.orderID
  const timestamp = Date.now()
  const click_action = req.body.click_action
  //const user_id = "jSCZYMamdqeFFMWqm0RhFjxYDA32"
  
  let userToken = []

  const tokenRef = db.collection("da_agents_main_list_collection")
  .doc(daId);
  const doc = await tokenRef.get();
  if (!doc.exists) {
    console.log('No such document!');
    return
  } else {
	      if (doc.data().notification === 'off') {
      console.log('No such document!');
      
var noti={}
    if(user_id){
			   noti = 
        {
          "title": apititle,
          "body": apibody,
          "orderID": orderID,
          "daId": daId,
				  "user_id":user_id,
          "timestamp": Date.now()
        }
		}else{
			   noti = 
        {
          "title": apititle, 
          "daId": daId,
          "body": apibody,
          "orderID": orderID,
          "timestamp": Date.now()
        }
      }
		
		console.log("noti",noti)
	     
    return
    } else {
       userToken = doc.data().registrationTokens
	    console.log('Document data:', userToken);
    }
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
  
  admin.messaging().sendMulticast(message)
    .then(async (response) => {
      res.json(response)
    })
    .catch(error => {
      console.log(error);
    });

})


app.post('/delete-firebase-storage-of-a-specific-shop-all-delete-images', async (req, res) => {

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


app.post('/delete-firestore-products-data-from-a-specific-category-from-the-admin-app', async (req, res) => {

  res.json("API HIT SUCCESS --- NOTE THAT THIS DOES NOT MEAN THAT THE REQUESTED OPERATION IS SUCCESSFULL ---")

  const category_key = req.body.category_key
  const shop_key = req.body.shop_key

  const productsRef = db.collection("shops_main")
  .doc(shop_key).collection("products_main_sub_collection")
  .where("shopCategoryKey","==", category_key);

  let batch = db.batch();

  productsRef
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        if(doc.get("image1") != ""){
          deleteImage("shops/"+doc.get("shopKey")+"/"+doc.get("image1"))
        }
        batch.delete(doc.ref);
    });
    return batch.commit();
  })
})

function deleteImage(_image_path) {
  // first delete the image
  const imageRef = admin.storage().bucket().file(_image_path);
  imageRef.delete().then(function() {
    console.log('file deleted');
    // File deleted successfully
  }).catch(function(error) {
    // Uh-oh, an error occurred!
    console.log(error);
  });
}
