(function(homeController){

	var data = require('../data');

	homeController.init = function(app){
		app.get('/',function(req,res){
			data.getCategories(function(err,results){
				res.render('index',{title:'Classifieds', error:err, categories: results});
			});
		});
	};
	
})(module.exports);