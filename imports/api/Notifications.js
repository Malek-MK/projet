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
            createdAt: new Date(),
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
            createdAt: new Date(),
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
            createdAt: new Date(),
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