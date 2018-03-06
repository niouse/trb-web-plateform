
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-ir-camera.template.jsx";
import Api from "./api/trb-ir-camera.api.jsx";
import Styles from "./services/trb-ir-camera.styles.service.jsx";
import Texts from "./services/trb-ir-camera.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-ir-camera.styles.default.js";
import stylesOptions from "./styles/trb-ir-camera.styles-options.default.js";
import computeStyles from "./styles/trb-ir-camera.compute-styles.js";
import texts from "./text/trb-ir-camera.text.js";

export default function TrbIrCamera(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbIrCamera_Component {}
		return TrbIrCamera_Component
	}
}  
