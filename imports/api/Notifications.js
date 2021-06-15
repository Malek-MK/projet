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
            createdAt: new Date(),
            arbitrator:idArbitrator,
            user:idUser
        })
    },
    'addMediation'(notif,idLAwyer,idArbitrator){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            mediation:notif,
            createdAt: new Date(),
            legalpro:idLawyer,
            arbitrator:idArbitrator
        })
    },
    'addDispute'(id,message){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            dispute:message,
            createdAt: new Date(),
            mediator:id,
        }) 
    },
    'addResult'(idMediator,idUser,idLawyer,message){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            result:message,
            createdAt: new Date(),
            mediator:idMediator,
            legalpro:idLawyer,
            user:idUser
        }) 
    },
    'addUser'(message){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            newUser:message,
            admin:idAdmin
        })  
    },
    'addMediator'(message){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            newMediator:message,
            admin:idAdmin
        })  
    },
    'showNotif'(){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Notifications.find({}).fetch();
    },
    'DeleteNotif'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.remove({id})
    }
})