
import {hfCampaignMongo} from "./../hfCampaign.js";

hfCampaignMongo.allow({
	insert : ()=>{
		return true
	},
	update : ()=>{
		return true
	},
	remove : ()=>{
		return true
	}
})
    