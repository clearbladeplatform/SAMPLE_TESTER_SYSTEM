    



/*
Send an email to a list of e-mail address.
Ex. sendEmailToList("This is my subject line","<b>HTML is supported!</b>",["email1@gmail.com","email2@gmail.com"],function(err, data){ ... })
  subject String - Subject line
  body String - HTML body of email
  recipientList][String] - Array of email address recipients ex. ["email1@gmail.com","email2@gmail.com"]
  callback - callback after request is sent
  
*/
function SendGridTester(req,callback){
    log(JSON.stringify(req))
    callback.success("end")
    var SEND_GRID_API_KEY = "<SEND-GRID-API-KEY>"
    var ORIGIN_EMAIL_ADDRESS = "USER@clearblade.com"
    
    var toField = formatRecipients(req.params.recipientList);
    var subject = req.params.subject;
    var body= req.params.body
    
    log("Subject: " + JSON.stringify(subject))
    log("Body: " + JSON.stringify(body))
    log("To: " + JSON.stringify(toField))
    
    var requestObject = Requests();
    var url = "https://api.sendgrid.com/v3/mail/send";
    var options = {
        "uri": url,
        "headers": {"Authorization": "Bearer "+SEND_GRID_API_KEY,'Content-Type': 'application/json'},
        body: JSON.stringify({
            personalizations: [
              {
                to: toField,
                subject: subject,
              },
            ],
            from: {
              email: ORIGIN_EMAIL_ADDRESS,
            },
            content: [
              {
                type: 'text/html',
                value: body,
              },
            ],
          })
    };
    requestObject.post(options, callback);
    
}

function formatRecipients(recipientList){
    var field = []
    for(var i in recipientList){
        var email = recipientList[i]
        field.push({email:email})
    }
    return field
}

