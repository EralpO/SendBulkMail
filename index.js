const functions = require('firebase-functions');
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const user = require('./model/user')
const Send = require('./function')

admin.initializeApp()

const smtpTransport = require('nodemailer-smtp-transport');
const cors = require("cors")({
  origin: true
});

   

exports.emailMessage = functions.https.onRequest((req, res) => {
   
  var arr = [];
 
  return cors(req, res,async () => {
     var sendFromEmail = 'e-mail';
     var sendFromPass = 'password';

     var transporter = nodemailer.createTransport(smtpTransport({  //Specifying E mail account which will send the mails
      service: 'gmail',
      auth: {
          user: sendFromEmail,
          pass: sendFromPass
      }
    }));
   
    const ref = await user.ref.once('value', (snap)=>{ //Getting Data From Firebase
        let obj = null
        obj = snap.val()
        for(var i in obj){
            arr.push(obj[i])
         
      }
      return arr;
    })
    let counter = 0
    Send(arr,counter,transporter)
       
       })
      

      })
