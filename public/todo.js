$(function(){
window.AboutMe  = Backbone.Model.extend({
 firebase: new Backbone.Firebase("https://hellospotty.firebaseio.com/users")	
	
	
});	
	
window.Emails  = Backbone.Model.extend({
 firebase: new Backbone.Firebase("https://hellospotty.firebaseio.com/emails")	
	
	
});
	
window.IndexView = Backbone.View.extend({
	className: "row",
	
	events:{
	"click #emails": "show"	,
	"click #submit"	: "submit"
	},

	render: function()	{

	this.$el.append($("#Indexview").html());	
	return this;	


	},
	
	show: function(){
	this.$("#namer").val("");
	this.$("#emailer").val("");
	this.$(".callout.panel").toggle();	
		
		
		
	},
	
	submit: function(){
	
	
	var emails = new Emails();
	emails.set({
	email:this.$("#emailer").val(),
	username: this.$("#namer").val()	
	});	
	emails.save()
		
	this.$(".callout.panel").hide()	
	}	
	
	
});




window.AboutView = Backbone.View.extend({
	events: {
	"click .callout": "pops"
		
	},
	
	render: function()	{

	this.$el.append($("#Aboutview").html());	
	return this;	


	},
	
	pops: function(event){
	
	   $(event.currentTarget).siblings().toggle();	
		
		
	}	
	
	
	
	
});



window.ContactView = Backbone.View.extend({

	

	render: function()	{
			var	url = GMaps.staticMapURL({
				  size: [610, 300],
				  lat: 40.648148,
				  lng: -73.702670,
				  markers: [
				    {lat: 40.648148, lng: -73.702670}] });
			var img = $('<img/>').attr('src', url);	
		
	this.$el.append($("#Contactview").html());	
	this.$("#map").append(img)

	return this;	


	}	
	
	
	
	
});



window.NewsView = Backbone.View.extend({
	

	
	
	
	
	render: function()	{
   	
	this.$el.append($("#Newsview").html());	
    

	return this;	


	}
	
	
});




window.Bots = Backbone.Router.extend({
 routes: {
 ""	: "index",
 "about": "bam",
"contact": "contact",
"news": "news",
"info": "info"
},


index: function(){
var index = new IndexView();	
$("#hello").empty();	
$("#hello").append(index.render().el);	
	
	
	
},	
	
	
bam: function()	{

var about = new AboutView();	
$("#hello").empty();	
$("#hello").append(about.render().el);	
	
	
	
	
	
},

contact: function()	{
	
var contact = new ContactView();	
$("#hello").empty();	
$("#hello").append(contact.render().el);	
	
	
	
	
},

news: function()	{
	
var news = new NewsView();	
$("#hello").empty();	
$("#hello").append(news.render().el);	
	
	
	
	
},

info: function()	{

	
var info = new InfoView();	
$("#hello").empty();	
$("#hello").append(info.render().el);	
	
	
	
}



	
	
	
	
});	
	
	
	
	
	
	
window.bots = new Bots();
Backbone.history.start({pushState: true });	
	
	
	
	
	
	
	
	
	
	
	
});