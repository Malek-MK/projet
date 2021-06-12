import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Mediation = new Mongo.Collection('mediation');
let it=new Date();
const today=it.getFullYear()+'/'+it.getMonth()+'/'+it.getDate()+' '+it.getHours()+':'+it.getMinutes()
Time=[];
console.log(Time)
Meteor.methods({
    'insertDate'({id,date}) { 
        console.log(date)
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Mediation.update(
            {_id:id,userId:this.userId},
            {$push:{Time:{$each:date}}}
            )
        },
        'showDate'(id){
            if (!this.userId) {
                throw new Meteor.Error('Not Authorized');
            }
            return Mediation.findOne({ userId: this.userId,_id:id });
        },    
        
    'insertMediation'(data) {
        
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
      
        return Mediation.insert({
            time:today,
            mediator:data.mediator,
            infoA:data.infoA,
            vousA:data.vousA,
            nomsoc:data.nomsoc,
            numid:data.numid,
            prerepleg:data.prerepleg,
            nomrepleg:data.nomrepleg,
            adresse:data.adresse,
            codepos:data.codepos,
            ville:data.ville,
            email:data.email,
            tel:data.tel,
            infoB:data.infoB,
            nomsoc1:data.nomsoc1,
            vousB:data.vousB,
            numid1:data.numid1,
            prerepleg1:data.prerepleg1,
            nomrepleg1:data.nomrepleg1,
            adresse1:data.adresse1,
            codepos1:data.codepos1,
            ville1:data.ville1,
            email1:data.email1,
            tel1:data.tel1,
            objlitige:data.objlitige,
            other:data.other,
            desc:data.desc,
            namelawyer:data.namelawyer,
            firstnamelawyer:data.firstnamelawyer,
            adresslawyer:data.adresslawyer,
            emaillawyer:data.emaillawyer,
            tellawyer:data.tellawyer,
            namelawyer1:data.namelawyer1,
            firstnamelawyer1:data.firstnamelawyer1,
            adresslawyer1:data.adresslawyer1,
            emaillawyer1:data.emaillawyer1,
            tellawyer1:data.tellawyer1,
            userId: this.userId
         });
        
       
       
    },
    'showMediations'({ currentPage, ITEMS_PER_PAGE, search, sortBy = '_id', sortOrder = 'asc' }) {
        const query = { userId: this.userId };
        const options = {
            skip: (currentPage - 1) * ITEMS_PER_PAGE, limit: ITEMS_PER_PAGE,
            sort: {
                [sortBy]: sortOrder === 'asc' ? 1 : -1
            }
        };
        const totalCount = Mediation.find({ userId: this.userId }).count();
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
        // IF SEARCH IS DEFINED && SEARCH LENGTH != 0 THEN WE ADD SEARCH STEP TO QUERY OBJECT
        if (search && search.length) {
            query.$or = [
                {
                    nomsoc: {
                        $regex: `.*${search}.*`, $options: 'i'
                    }
                },
                {
                    nomsoc1: {
                        $regex: `.*${search}.*`, $options: 'i'
                    }
                },
                {
                    time: {
                        $regex: `.*${search}.*`, $options: 'i'
                    }
                },
                {
                    email: {
                        $regex: `.*${search}.*`, $options: 'i'
                    }
                },
                {
                    email1: {
                        $regex: `.*${search}.*`, $options: 'i'
                    }
                },
            ]
        }
        return { items: Mediation.find(query, options).fetch(), totalCount };
    },
    'paginateMediation'(params) {
        //console.log(params);
        const { page } = params;
        const perPage = 10;

        return Mediation.find({ userId: this.userId }, {}).fetch();

    },
    'updateMediation'({ id, data }) {
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        const media = Mediation.findOne({ _id: id, userId: this.userId });
        if (!media) {
            throw new Meteor.Error('it is not found');
        }
        Mediation.update({ _id: id,userId:this.userId }, { $set: data });
    },
    'MediatorUpdateMediation'({ id, idArbitrator,idLegalProf,idLegalProf1,med }) {
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        const media = Mediation.findOne({ _id: id, mediator: med });
        if (!media) {
            throw new Meteor.Error('it is not found');
        }
        Mediation.update({ _id: id,mediator: med }, { $set: {arbitrator:idArbitrator,legalprof:idLegalProf,legalprof1:idLegalProf1} });
    },
    'deleteMediation'(_id) {
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Mediation.remove({ _id });
    },
    'showMedia'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Mediation.findOne({userId:this.userId,_id:id});
    },
    'fetchMedia'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Mediation.findOne({_id:id});
    },
    'fetchMediations'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Mediation.find({mediator:id}).fetch();
    },
    'fetchMediationsPayment'(){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return Mediation.find({isPayment:true}).fetch();
    },
    'fetchMediationsArbitrator'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized'); 
        }
       return Mediation.find({arbitrator:id}).fetch();
    },
    'fetchMediationsLegalProf'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized'); 
        }
       return Mediation.find({legalprof:id}).fetch();
    },
    'fetchMediationsLegalProf1'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized'); 
        }
       return Mediation.find({legalprof1:id}).fetch();
    },
    'insertConvMedia'({id,valid}){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Mediation.update({ _id: id,userId:this.userId },{$set:{verif:valid}});
        },
    'insertResult'({id,data}){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Mediation.update({ _id: id },{$set:{result:data}});
        },
        'insertDefend'({id,data}){
            if (!this.userId) {
                throw new Meteor.Error('Not Authorized');
            }
            Mediation.update({ _id: id },{$set:{defend:data}});
            },
        'showResult'(id){
            if (!this.userId) {
                throw new Meteor.Error('Not Authorized');
            }
            return Mediation.findOne({userId:this.userId,_id:id});
        },
    'showConvMed'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        return Mediation.findOne({userId:this.userId,_id:id});
    },
    'insertPayment'({id,data,payee}){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Mediation.update({ _id: id,userId:this.userId },
        {$set:{
            isPayment:payee,
            payment:data
        }});
        },
    'showPayment'(id){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        return Mediation.findOne({userId:this.userId,_id:id});
    }        
    
})

export default Mediation;