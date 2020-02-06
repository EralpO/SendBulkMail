
       function Send(arr,counter,transporter){
         
        for(var i in arr){
         counter++;
         const length =arr.length
         let HtmlTemplate = `<div style = "padding:2em; margin:4em; background-color:#EEEEEE" >
         <img width="50%" height="auto" src="image"/>
         <div>
           <h3>We are welcoming you with sincerity</h3>
           <h4>Hello ${arr[i].firstname || ""} ,</h4>
           <p>Lorem Ipsum is ${arr[i].lastname || ""} simply dummy  text of the printing and typesetting industry. ${arr[i].phone} has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
         </div>
         <input type="button" onclick="location.href='Url'" style="color:white; border-radius:15px; margin-top:2em; background-color:green; border:none; padding:1.5em" value="Contact Us">
       </div>`;

       
       const mailOptions = {
         to: arr[i].email,
         from: sendFromEmail,
         subject: ` sent you a new message`,
         text: HtmlTemplate,
         html: HtmlTemplate
       };


       transporter.sendMail(mailOptions, function(error, info){ //Sending E-mail
         if(counter === length-1){
            transporter.close()
         } 
         else if(error){
           return res.end("Error :"+error)
         }else{
           return res.end("Successfully Sent")
         }
        });   
      }
     }
       module.exports = Send