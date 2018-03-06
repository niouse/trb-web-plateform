
import {factoriesMongo} from "./../factories.js";


Meteor.publish("factories", function() {
	return  factoriesMongo.find({});
});

Meteor.publish("factoriesList", function() {
	return  factoriesMongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});
});

Meteor.publish("oneFactories", function(factoriesId) { 
	return  factoriesMongo.find({_id : factoriesId});
});
    