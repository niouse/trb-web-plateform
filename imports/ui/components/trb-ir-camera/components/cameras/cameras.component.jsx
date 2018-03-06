
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/cameras.template.jsx";
import Api from "./api/cameras.api.jsx";
import Styles from "./services/cameras.styles.service.jsx";
import Texts from "./services/cameras.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/cameras.styles.default.js";
import stylesOptions from "./styles/cameras.styles-options.default.js";
import computeStyles from "./styles/cameras.compute-styles.js";
import texts from "./text/cameras.text.js";

export default function Cameras(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template()
		class Cameras_Component {}
		return Cameras_Component
	}
}  
