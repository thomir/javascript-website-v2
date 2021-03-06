/**
 * Created by rayarvin on 3/31/16.
 */
Template.registerHelper("usernameFromId", function (userId) {
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === "undefined") {
    return "Anonymous";
  }

  var displayName = '';

  if (typeof user.profile.displayName !== 'undefined') {
    displayName = user.profile.displayName;
  } else if (typeof user.profile.name !== 'undefined') {
    displayName = user.profile.name;
  } else if (typeof user.emails !== 'undefined') {
    displayName = user.emails[0].address;
  } else {
    displayName = user._id;
  }

  return displayName;

});

Template.registerHelper('loggedUser', function () {
  return Meteor.user();
});
