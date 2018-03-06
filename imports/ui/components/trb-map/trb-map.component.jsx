
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';


// COMPONENT LAYERS
import Template from "./template/trb-map.template.jsx";
import Api from "./api/trb-map.api.jsx";
import Styles from "./services/trb-map.styles.service.jsx";
import Texts from "./services/trb-map.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-map.styles.default.js";
import stylesOptions from "./styles/trb-map.styles-options.default.js";
import computeStyles from "./styles/trb-map.compute-styles.js";
import texts from "./text/trb-map.text.js";

//COMPONENT CHILDREN
import SimpleMap from "./components/simple-map/simple-map.jsx"
import SideList from "./components/side-list-mui/side-list-mui.jsx"

import ClientsDataService from "./../../../api/clients/client/clients.data.service.jsx";

//PARENT SERVICE
import AppStylesOptionsService from "./../../services/app.styles-options.service.jsx"


// BUILD CHLIDREN
@SimpleMap()
class $SimpleMap{}

//@AppStylesOptionsService()
@SideList()
class $SideList{}

let appChilds = {
    SimpleMap : $SimpleMap,
    SideList : $SideList
}

export default function TrbMap(SimpleMap){
	return (wrappedComponent)=>{
        @ClientsDataService()
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(appChilds)
		class TrbMap_Component {}
		return TrbMap_Component
	}
}  

