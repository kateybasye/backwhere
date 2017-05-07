Articles = new Mongo.Collection('articles');

if(Meteor.isClient){
  Template.articles.helpers({
    'article': function(){
        return Articles.find();
    }
	});
}

if(Meteor.isServer){
  console.log("Server")
}