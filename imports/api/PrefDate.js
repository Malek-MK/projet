import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const PrefDate = new Mongo.Collection('prefdate');

Meteor.methods({
    'insertDate'(data) { 
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        console.log("date:",data)
        PrefDate.insert({
            time:data,
            userId:this.userId
        })
        
        }

})