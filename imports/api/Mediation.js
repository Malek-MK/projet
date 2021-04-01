import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Mediation = new Mongo.Collection('mediation');

Meteor.methods({

    'insertMediation'(data) {
        
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
      
        Mediation.insert({
            tun:data.tun,
            alg:data.alg,
            mar:data.mar,
            fra:data.fra,
            ita:data.ita,
            soccom:data.soccom,
            entind:data.entind,
            socciv:data.socciv,
            proflib:data.proflib,
            part:data.part,
            nomsoc:data.nomsoc,
            choix:data.choix,
            sas:data.sas,
            sarl:data.sarl,
            sa:data.sa,
            snc:data.snc,
            gie:data.gie,
            numid:data.numid,
            prerepleg:data.prerepleg,
            nomrepleg:data.nomrepleg,
            adresse:data.adresse,
            codepos:data.codepos,
            ville:data.ville,
            email:data.email,
            tel:data.tel,
            tun1:data.tun1,
            alg1:data.alg1,
            mar1:data.mar1,
            fra1:data.fra1,
            ita1:data.ita1,
            soccom1:data.soccom1,
            entind1:data.entind1,
            socciv1:data.socciv1,
            proflib1:data.proflib1,
            part1:data.part1,
            nomsoc1:data.nomsoc1,
            choix1:data.choix1,
            sas1:data.sas1,
            sarl1:data.sarl1,
            sa1:data.sa1,
            snc1:data.snc1,
            gie1:data.gie1,
            numid1:data.numid1,
            prerepleg1:data.prerepleg1,
            nomrepleg1:data.nomrepleg1,
            adresse1:data.adresse1,
            codepos1:data.codepos1,
            ville1:data.ville1,
            email1:data.email1,
            tel1:data.tel1,
            contra:data.contra,
            comm:data.comm,
            vois:data.vois,
            copro:data.copro,
            conso:data.conso,
            constr:data.constr,
            desc:data.desc,
            userId: this.userId
         });
        
       
       
    },
    'showMediation'({ currentPage, ITEMS_PER_PAGE, search, sortBy = '_id', sortOrder = 'asc' }) {
        const query = { userId: this.userId };
        const options = {
            skip: (currentPage - 1) * ITEMS_PER_PAGE, limit: ITEMS_PER_PAGE,
            sort: {
                [sortBy]: sortOrder === 'asc' ? 1 : -1
            }
        };
        const totalCount = Players.find({ userId: this.userId }).count();
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
        // IF SEARCH IS DEFINED && SEARCH LENGTH != 0 THEN WE ADD SEARCH STEP TO QUERY OBJECT
        if (search && search.length) {
            query.$or = [
                {
                    name: {
                        $regex: `const notyf = new Notyf({
                            duration: 2000,
                            position: {
                              x: 'left',
                              y: 'top',
                            }
                          }).*${search}.*`, $options: 'i'
                    }
                },
                {
                    number: {
                        $regex: `.*${search}.*`, $options: 'i'
                    }
                }
            ]
        }
        return { items: Mediation.find(query, options).fetch(), totalCount };
    },
    'paginateProduct'(params) {
        //console.log(params);
        const { page } = params;
        const perPage = 10;

        return Players.find({ userId: this.userId }, {}).fetch();

    },
    'updatePlayer'({ id, data }) {
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        const player = Players.findOne({ _id: id, userId: this.userId });
        if (!player) {
            throw new Meteor.Error('Player not found');
        }
        try {
            YupPlayer.validate(data)
        } catch (e) {
            throw new Meteor.Error(e.message)
        }
        Mediation.update({ _id: id }, { $set: data });
    },
    'deletePlayer'(_id) {
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
        Mediation.remove({ _id });
    },
    'showMediations'(){
        if (!this.userId) {
            throw new Meteor.Error('Not Authorized');
        }
       return {res: Mediation.find({ userId: this.userId }).fetch()};
    }

})