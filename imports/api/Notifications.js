import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Notifications = new Mongo.Collection('notifications'); 

if(Meteor.isServer){
    Meteor.publish("notifications",function(){
        return Notifications.find({userId:this.userId});
    })
}

Meteor.methods({
    'addResult'(notif){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            result:notif,
            createdAt: new Date(),
            userId:this.userId
        })
    },
    'addDefend'(notif){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            defend:notif,
            createdAt: new Date(),
            userId:this.userId
        })
    },
    'addMediation'(notif){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Notifications.insert({
            mediation:notif,
            createdAt: new Date(),
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