
import {hfCampaignMongo} from "./../hfCampaign.js";


Meteor.publish("hfCampaign", function() {
	return  hfCampaignMongo.find({});
});

Meteor.publish("hfCampaignList", function() {
	return  hfCampaignMongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});
});

Meteor.publish("onehfCampaign", function(hfCampaignId) { 
	return  hfCampaignMongo.find({_id : hfCampaignId});
});
    