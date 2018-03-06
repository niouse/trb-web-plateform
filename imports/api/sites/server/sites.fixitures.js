
import {sitesMongo} from "./../sites.js";
import sitesDefaults from "./sites.defaults.js";


loadSites = function(){
	 if (sitesMongo.find({}).fetch().length === 0) {
		 sitesDefaults.forEach((item, index)=>{
	     	sitesMongo.insert(sitesDefaults[index]); 
		 })
   }
}
    