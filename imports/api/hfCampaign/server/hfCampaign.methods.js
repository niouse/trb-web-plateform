
import {hfCampaignMongo} from "./../hfCampaign.js";

Meteor.methods({
	gethfCampaignKeys : function(){
		var hfCampaignKeys = [];
		for (var key in hfCampaignMongo.findOne({})){
			hfCampaignKeys.push(key)
		};
		return hfCampaignKeys;
	}
})
    