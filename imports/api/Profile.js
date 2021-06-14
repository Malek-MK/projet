import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Profile = new Mongo.Collection('profile');
Meteor.methods({
    'insertPersInfo'({data}) { 
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized'); 
        }
        Profile.insert({
            userId:this.userId, 
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            tel:data.tel,
            adresse:data.adresse,
            codepos:data.codepos,
            ville:data.ville,
            country:data.country,
        })
        },
    'InsertBankInfo'({data}){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Profile.update({userId:this.userId },
            {$set:{bankinfo:data}});
    },
    'insertCompInfo'({data}){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        rofile.update({userId:this.userId },
            {$set:{compinfo:data}});
    }    

})