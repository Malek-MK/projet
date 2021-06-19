import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Notifications = new Mongo.Collection('notifications'); 

if(Meteor.isServer){
    Meteor.publish("notifications",function(){
        return Notifications.find({userId:this.userId});
    })
}

Meteor.methods({
    'addDefend'(idUser,idArbitrator,notif){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            defend:notif,
            dateDefend: new Date(),
            arbitrator:idArbitrator,
            user:idUser,
            userId:this.userId
        })
    },
    'addMediation'(notif,idLawyer,idArbitrator){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            mediation:notif,
            dateMediation: new Date(),
            legalpro:idLawyer,
            arbitrator:idArbitrator,
            userId:this.userId
        })
    },
    'addDispute'(id,message){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            dispute:message,
            dateDispute: new Date(),
            mediator:id,
            userId:this.userId
        }) 
    },
    'addResult'(idMediator,idUser,idLawyer,message){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            result:message,
            dateResult: new Date(),
            mediator:idMediator,
            legalpro:idLawyer,
            user:idUser,
            userId:this.userId
        }) 
    },
    'addUser'(message){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            newUser:message,
            admin:idAdmin,
            dateAddUser: new Date(),
        })  
    },
    'addMediator'(message){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            newMediator:message,
            admin:idAdmin,
            dateAddResult: new Date(),
        })  
    },
    'showNotifMediator'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Notifications.find({mediator:id}).fetch();
    },
    'showNotifUser'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Notifications.find({user:id}).fetch();
    },
    'showNotifArbitre'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Notifications.find({arbitrator:id}).fetch();
    },
    'showNotifLegalPro'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Notifications.find({legalpro:id}).fetch();
    },
    'showNotifAdmin'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Notifications.find({admin:id}).fetch();
    },
    'DeleteNotif'(_id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.remove({ _id })
    }
})