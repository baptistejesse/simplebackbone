$(function(){
window.AboutMe  = Backbone.Model.extend({
 firebase: new Backbone.Firebase("https://hellospotty.firebaseio.com/users")	
	
	
});	
	
	
window.IndexView = Backbone.View.extend({
	className: "row",

	render: function()	{

	this.$el.append($("#Indexview").html());	
	return this;	


	}	
	
	
});




window.AboutView = Backbone.View.extend({
	
	
	render: function()	{

	this.$el.append($("#Aboutview").html());	
	return this;	


	}	
	
	
	
	
});



window.ContactView = Backbone.View.extend({

	

	render: function()	{
		
		
	this.$el.append($("#Contactview").html());	
	
	
	
	
	
	return this;	


	}	
	
	
	
	
});



window.NewsView = Backbone.View.extend({
	
	initialize: function(){
		
	this.mappy();	
		
		
	},
	
	
	
	
	
	render: function()	{
   		var	url = GMaps.staticMapURL({
			  size: [610, 300],
			  lat: -12.043333,
			  lng: -77.028333,
			  markers: [
			    {lat: -12.043333, lng: -77.028333}] });
		var img = $('<img/>').attr('src', url);	
	this.$el.append($("#Newsview").html());	
     this.$("#map").append(img)

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