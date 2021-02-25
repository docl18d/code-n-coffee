const User = require('./User');
const Post = require('./fidoes');

User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
/* Post.hasMany(Comment, {
  foreignKey: 'post_id'
}); */

module.exports = { User, Post };