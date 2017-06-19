function RobsService(req, resp){
    function callback(err, data){
                if (err) {
            resp.error("you have anror: "+err);
        }
        else {
            resp.success("we have got data"+ data);
        }
        // then resp.success or resp.error
    }
    sendEmailToList("SendGrid Testing", "Hi from Clearblade Platofrm using SendGrid ", ["yashkjain1994@gmail.com"], callback)
}