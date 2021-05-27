import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import YupUser from '../Validation/YupRegister';
import Mediations from '../api/Mediation';
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  } else {
    this.ready()
  }
})

Meteor.methods({
  insertAccount(user) {
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
  }
    try {
      YupUser.validate(user)
    } catch (e) {
      throw new Meteor.Error(e.message)
    }
    const res = Accounts.createUser({
      username: user.name,
      email: user.email,
      password: user.password,
    }
    );
    Roles.createRole('user', { unlessExists: true });
    Roles.addUsersToRoles(res, 'user');
  },
  insertArbitrator(arbitrator) {
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
  }
    try {
      YupUser.validate(arbitrator)
    } catch (e) {
      throw new Meteor.Error(e.message)
    }
    const res = Accounts.createUser({
      username: arbitrator.name,
      email: arbitrator.email,
      password: arbitrator.password
    }
    );
    Roles.createRole('arbitrator', { unlessExists: true });
    Roles.addUsersToRoles(res, 'arbitrator');
  },
  insertMediator(arbitrator) {
    try {
      YupUser.validate(arbitrator)
    } catch (e) {
      throw new Meteor.Error(e.message)
    }
    const res = Accounts.createUser({
      username: arbitrator.name,
      email: arbitrator.email,
      password: arbitrator.password
    }
    );
    Roles.createRole('mediator', { unlessExists: true });
    Roles.addUsersToRoles(res, 'mediator');
  },
  'showUsers': async function(){
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
  }
    const aggregation = [
        {
            '$lookup': {
                'from': 'role-assignment',
                'localField': '_id',
                'foreignField': 'user._id',
                'as': 'role'
            }
        }, {
            '$unwind': {
                'path': '$role',
                'preserveNullAndEmptyArrays': true
            }
        }, {
            '$match': {
                'role.role._id': 'user',
            }
        }    
    ];
    const experts =(await Meteor.users.rawCollection().aggregate(aggregation).toArray());
    return experts;
  },
  'showArbitrators': async function(){
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
  }
    const aggregation = [
        {
            '$lookup': {
                'from': 'role-assignment',
                'localField': '_id',
                'foreignField': 'user._id',
                'as': 'role'
            }
        }, {
            '$unwind': {
                'path': '$role',
                'preserveNullAndEmptyArrays': true
            }
        }, {
            '$match': {
                'role.role._id': 'arbitrator',
            }
        }    
    ];
    const experts =(await Meteor.users.rawCollection().aggregate(aggregation).toArray());
    return experts;
  },
  'showMediators': async function(){
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
  }
    const aggregation = [
        {
            '$lookup': {
                'from': 'role-assignment',
                'localField': '_id',
                'foreignField': 'user._id',
                'as': 'role'
            }
        }, {
            '$unwind': {
                'path': '$role',
                'preserveNullAndEmptyArrays': true
            }
        }, {
            '$match': {
                'role.role._id': 'mediator',
            }
        }    
    ];
    const experts =(await Meteor.users.rawCollection().aggregate(aggregation).toArray());
    return experts;
  },
  'DeleteUser'(id){
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
  }
    Meteor.users.remove(id);  
  },
  'UpdateUser'({id,data,usr}){
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
  }
  Accounts.setUsername(id,data.name);
  Accounts.removeEmail(id,usr.emails[0].address);
  Accounts.addEmail(id,data.email);
  Accounts.setPassword(id,data.password);
  },
  'findUser'({id}){
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
  }
  const usr= Meteor.users.findOne({_id:id});
  return usr;
  },
  'findUsersWithMediations'(){
    const users= Meteor.users.find().fetch();
    return users.map(e=>({...e,medidations:Mediations.find({userId:e._id}).fetch()}))
  },
});

if (!Meteor.users.find().count()) {
  const adminId = Accounts.createUser({ username: 'alkhatib', email: 'admin@test.com', password: 'secret' });
  Roles.createRole('admin', { unlessExists: true });
  Roles.addUsersToRoles(adminId, 'admin')
}