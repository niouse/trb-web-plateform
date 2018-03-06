
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/settings.template.jsx";
import Api from "./api/settings.api.jsx";
import Styles from "./services/settings.styles.service.jsx";
import Texts from "./services/settings.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/settings.styles.default.js";
import stylesOptions from "./styles/settings.styles-options.default.js";
import computeStyles from "./styles/settings.compute-styles.js";
import texts from "./text/settings.text.js";

export default function Settings(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class Settings_Component {}
		return Settings_Component
	}
}  
