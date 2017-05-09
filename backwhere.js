Articles = new Mongo.Collection('articles');

if(Meteor.isClient){
  Template.articles.helpers({
    'article': function(){
        return Articles.find();
    },
	});

	Template.addArticle.helpers({
    'hiddenClass': function(){
    	var formIsHidden = Session.get('form');
    	if (formIsHidden) {
    		return 'hidden'
    	}
    	else {
    		return ''
    	}
    }
	});

	Template.addArticle.events({
    'click #add-article': function(){
    	var formIsHidden = Session.get('form');
    	if(formIsHidden){
    		Session.set('form', false);
    		console.log(Session.get('form'));
    	}
    	else{
    		Session.set('form', true)
    		console.log(Session.get('form'));
    	} // end if
    }
	});
}

if(Meteor.isServer){
  console.log("Server")
}