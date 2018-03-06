
import {hfCampaignMongo} from "./../hfCampaign.js";
import hfCampaignDefaults from "./hfCampaign.defaults.js";


loadHfCampaign = function(){
	 if (hfCampaignMongo.find({}).fetch().length === 0) {
		 hfCampaignDefaults.forEach((item, index)=>{
	     	hfCampaignMongo.insert(hfCampaignDefaults[index]); 
		 })
   }
}
    