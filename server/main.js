import { Meteor } from 'meteor/meteor';

import './../imports/api/users/server';

//trb-recorder
import './../imports/api/recorders/server';
import './../imports/api/series/server';
import './../imports/api/routes';
import "./../imports/api/etuves/server"
import './../imports/api/hfCampaign/server';
import './../imports/api/sites/server';
import './../imports/api/clients/server';
import './../imports/api/pictures/server';

//TRB CAST
import './../imports/api/pfinis/server';
import './../imports/api/products/server';
import './../imports/api/types/server';
import './../imports/api/batches/server';
import './../imports/api/factories/server';

//CUSTOM METHODS
import "./../imports/api/trb-ir-camera.methods.js"

import  './../imports/startup/server';


Meteor.startup(() => {
	loadUsers()
    loadRecorders(16)
    loadSeries()
    loadEtuves()
    loadHfCampaign()
    loadSites()
    loadClients()
    loadPictures()
    loadPfinis()
    loadProducts()
    loadTypes()
    loadFactories()
});
