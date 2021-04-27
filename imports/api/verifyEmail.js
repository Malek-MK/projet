import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
verify(){
    Accounts.verifyEmail(token, function(error){
        if(error){
            console.log("error verifying");
        }
        else{
            console.log("email verified");
            doneVerifying();
        }
    });
    
}

})