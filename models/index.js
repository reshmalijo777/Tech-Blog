const User=require('./user');
const Comment=require('./comment');

User.hasMany(Comment,{
    foreignKey:'userId',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

Comment.belongsTo(User,{
    foreignKey:'userId',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})