// (function () {
//       //counter to keep track of number of times the setInterval Cb is called
//       let data;
    
    
//       // to store reference of Timeout object as returned by setInterval, this is used in clearInterval 
    
//       const print_data = async () => {
    
//         let timenow = new Date();
//         let hours = timenow.getHours()
//         let min = timenow.getMinutes()
//         let day = timenow.getDay()
        

    
//         console.log("timenow", hours)
//         console.log("miniute", min)
//         console.log("day", day)
//         let day1 = 0;
    
//         if (day == 1 || day == 2 || day== 3 || day==4) {
//           day1 = 1
//         } else if (day == 5 || day == 6) {
//           day1 = 2
//         }else if(day == 7){
//           day1 = 3
//         }
    
//         if (hours > 7 && hours < 22) {
//           let dataarray = []
// let datebar = ""
//            if (day == 1 || day == 2 || day== 3 || day==4) {
//           datebar = "monday"
//         } else if (day == 5 || day == 6) {
//           datebar = "friday"
//         }else if(day == 7){
//           datebar = "sunday"
//         }


//         let time = hours + ":" + min 
 

//         // console.log("typ ", typeof(time)) 
        
//         var datavalue = db.collection("timers").doc(datebar).get().then(data => {
//           dataarray = Object.values(data.data())
           
 
//           dataarray.map(item => {


//             if (item === time) {

           
              
//               timeRef = db.collection("timers").doc(datebar);

            

           
    
//               timeRef.update({ [item]: "unavailable" })
              
          
             
//             }  
            
          
             
              
            
//           })
//         });

            

    
    
//         } else if (hours == 0 && min == 0 && day1 == 1 ) {
    
    
//           const monday = {
//              "9:0": "9.0",
//             "9:30": "9:30",
//             "10:0": "10:0",
//             "10:30": "10:30",
//             "11:0": "11:0",
//             "11:30": "11:30 ",
//             "12:0": "12:0",
//             "12:30": "12:30",
//             "13:0": "13:0",
//             "13:30": "13:30",
//             "14:0": "14:0",
//             "14:30": "14:30",
//             "15:0": "15:0",
//             "15:30": "15:30",
//             "16:0": "16:0",
//             "16:30": "16:30",
//             "17:0": "17:0",
//             "17:30": "17:30",
//             "18:0": "18:0",
//             "18:30": "18:30",
//             "19:0": "uhh",
          
          
    
    
//           }
//           timeRef = db.collection("timers").doc("monday");
    
//           await timeRef.set(monday)
    
          
    
    
    
    
//         }else if (hours == 0 && min == 0 && day1 == 2 ) {
    
    
//           const friday = {
//             "9:0": "9.0",
//             "9:30": "9:30",
//             "10:0": "10:0",
//             "10:30": "10:30",
//             "11:0": "11:0",
//             "11:30": "11:30 ",
//             "12:0": "12:0",
//             "12:30": "12:30",
//             "13:0": "13:0",
//             "13:30": "13:30",
//             "14:0": "14:0",
//             "14:30": "14:30",
//             "15:0": "15:0",
//             "15:30": "15:30",
//             "16:0": "16:0",
//             "16:30": "16:30",
//             "17:0": "17:0",
//             "17:30": "17:30",
//             "18:0": "18:0",
//             "18:30": "18:30",
//             "19:0": "19:0",
//             "19:30":"19:30",
//             "20:0":"20:0",
    
    
    
//           }
//           timeRef = db.collection("timers").doc("friday");
    
//           await timeRef.set(friday)
    
          
    
    
    
    
//         }else if (hours == 0 && min == 0 && day1 == 3 ) {
    
    
//           const sunday = {
//             "9:0": "9.0",
//             "9:30": "9:30",
//             "10:0": "10:0",
//             "10:30": "10:30",
//             "11:0": "11:0",
//             "11:30": "11:30 ",
//             "12:0": "12:0",
//             "12:30": "12:30",
//             "13:0": "13:0",
//             "13:30": "13:30",
//             "14:0": "14:0",
//             "14:30": "14:30",
//             "15:0": "15:0",
//             "15:30": "15:30",
//             "16:0": "16:0",
//             "16:30": "16:30",
//             "17:0": "17:0",
          
           
           
    
    
//           }
//           timeRef = db.collection("timers").doc("sunday");
    
//           await timeRef.set(sunday)
    
//           console.log("hello sunday")
    
    
    
    
//         } else {
//           console.log("hello error")
//         }
    
    
    
    
    
//         functions.firestore.document(`/{collection}/{id}`).onCreate((snap, context) => {
//           console.log(snap.data());
    
//           const collection = context.params.collection;
//           const id = context.params.id;
    
//           if (collection === 'users') {
//             return activities.add({ text: 'a New users requested was add' })
    
//           }
    
//           if (collection === 'timers') {
//             return activities.add({ text: 'a new user signed up' })
//           }
    
//           return null;
    
//         })
    
//         console.log('Added document with ID: ');
    
//       }
    
    
//       async function main() {
    
//         data = setInterval(print_data, 1000 * 10); //60 seconds
//       }
    
//       main();
    
// })();
    



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
  
  res.json({"message":"fine how are you??"})
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
	  
//       var postListRef = admin.database().ref('notifications/'+id+'/message');
// var newPostRef = postListRef.push();
// newPostRef.set(noti);
       
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
	  
	  
	  
	  
      
//       var postListRef = admin.database().ref('notifications/'+id+'/message');
// var newPostRef = postListRef.push();
// newPostRef.set(noti);
 

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