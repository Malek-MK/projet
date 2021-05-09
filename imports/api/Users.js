import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import YupUser from '../Validation/YupRegister';

Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  } else {
    this.ready()
  }
})

Meteor.methods({
  insertAccount(user) {
    try {
      YupUser.validate(user)
    } catch (e) {
      throw new Meteor.Error(e.message)
    }
    const res = Accounts.createUser({
      username: user.name,
      email: user.email,
      password: user.password
    }
    );
    Roles.createRole('user', { unlessExists: true });
    Roles.addUsersToRoles(res, 'user');
  },
  insertArbitrator(arbitrator) {
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
  'showUsers': async function(){
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
  }
},

);

if (!Meteor.users.find().count()) {
  const adminId = Accounts.createUser({ username: 'alkhatib', email: 'admin@test.com', password: 'secret' });
  Roles.createRole('admin', { unlessExists: true });
  Roles.addUsersToRoles(adminId, 'admin')
}