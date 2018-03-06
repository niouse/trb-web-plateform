
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/dashboard.template.jsx";
import Api from "./api/dashboard.api.jsx";
import Styles from "./services/dashboard.styles.service.jsx";
import Texts from "./services/dashboard.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/dashboard.styles.default.js";
import stylesOptions from "./styles/dashboard.styles-options.default.js";
import computeStyles from "./styles/dashboard.compute-styles.js";
import texts from "./text/dashboard.text.js";

export default function Dashboard(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class Dashboard_Component {}
		return Dashboard_Component
	}
}  
