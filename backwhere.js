Articles = new Mongo.Collection('articles');

// <---------- CLIENT ---------------->

if(Meteor.isClient){

// Article List
  Template.articles.helpers({
    'article': function(){
      return Articles.find( {}, { sort: {created_date: -1} });
    },
	});

	Template.articles.events({
		'click .remove': function(){
			var articleID = this._id;
			Articles.remove({ _id: articleID });
		}
	});

// Add Article

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
    'submit form#add-article': function(e){
    	e.preventDefault();
    	Articles.insert({
    		title: e.target.title.value,
    		description: e.target.description.value,
    		city: e.target.city.value,
    		state: e.target.state.value,
    		url: e.target.url.value,
    		cover_photo: e.target.cover_photo.value,
    		tags: e.target.tags.value,
    		created_date: Date.now()
    	})
			e.target.title.value = "";
			e.target.description.value = "";
			e.target.city.value = "";
			e.target.state.value = "";
			e.target.url.value = "";
			e.target.cover_photo.value = "";
			e.target.tags.value = "";
    }
	});
}

// <---------- SERVER ---------------->

if(Meteor.isServer){
  console.log("Server")
}