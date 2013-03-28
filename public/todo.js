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
alert("about");	
var about = new AboutView();	
$("#hello").empty();	
$("#hello").append(about.render().el);	
	
	
	
	
	
},

contact: function()	{
alert("contact");	
var contact = new ContactView();	
$("#hello").empty();	
$("#hello").append(contact.render().el);	
	
	
	
	
},

news: function()	{
alert("news");	
var news = new NewsView();	
$("#hello").empty();	
$("#hello").append(news.render().el);	
	
	
	
	
},

info: function()	{
alert("info");	
	
var info = new InfoView();	
$("#hello").empty();	
$("#hello").append(info.render().el);	
	
	
	
}



	
	
	
	
});	
	
	
	
	
	
	
window.bots = new Bots();
Backbone.history.start({pushState: true });	
	
	
	
	
	
	
	
	
	
	
	
});