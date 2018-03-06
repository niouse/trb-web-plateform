
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/alarms.template.jsx";
import Api from "./api/alarms.api.jsx";
import Styles from "./services/alarms.styles.service.jsx";
import Texts from "./services/alarms.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/alarms.styles.default.js";
import stylesOptions from "./styles/alarms.styles-options.default.js";
import computeStyles from "./styles/alarms.compute-styles.js";
import texts from "./text/alarms.text.js";

export default function Alarms(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class Alarms_Component {}
		return Alarms_Component
	}
}  
