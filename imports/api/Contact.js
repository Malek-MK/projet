import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Contact = new Mongo.Collection('contact');
Meteor.methods({
    'insertContact'({data}) { 
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Contact.insert({
           firstname:data.firstname,
           email:data.email,
           tel:data.tel,
           description:data.description,
        })
        },
})