const User = require('./User');
const Trip = require('./Trip');
const Activity = require('./Activity')

User.hasMany(Trip);
Trip.hasMany(User);

Trip.hasMany(Activity);
Activity.belongsTo(Trip);

module.exports = {
    User,
    Trip,
    Activity
}