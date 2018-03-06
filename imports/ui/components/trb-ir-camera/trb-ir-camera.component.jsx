
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter, Route,  Link } from 'react-router-dom'
import {withRouter} from "react-router-dom"

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

// COMPONENT SERVICES
import TrbIrCameraStylesOptionsService from "./services/trb-ir-camera.styles-options.service.jsx";
import TrbIrCameraMaterialService from "./services/trb-ir-camera.material.service.jsx";
import TrbIrCameraRouterService from "./services/trb-ir-camera.router.service.jsx";
import TrbIrCameraWithRouterService from "./services/trb-ir-camera.with-router.service.jsx";
//import TrbIrCameraLanguageService from "./services/trb-ir-camera.language.service.jsx"
import TrbIrCameraLanguageService from "./../../services/app.language.service.jsx";

// COMPONENT CHILDS
import Navigation from "./components/navigation/navigation.jsx";
  import NavigationRouterService from "./components/navigation/services/navigation.router.service.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import Cameras from "./components/cameras/cameras.jsx";
import Alarms from "./components/alarms/alarms.jsx";
import Settings from "./components/settings/settings.jsx";

// THEMES
import themes from "./themes/index.js"
import materials from "./themes/materialui.index.js"
import materialTrb from "./themes/materialui.trb.js"
import materialRuggieri from "./themes/materialui.ruggieri.js"

// MATERIAL UI COMPONENTS
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

    
 //BUID CHILDREN

@TrbIrCameraLanguageService()
@TrbIrCameraWithRouterService(withRouter)
@TrbIrCameraStylesOptionsService(themes)
@Navigation()
class $Navigation{}

@Dashboard()
class $Dashboard{}

@Cameras()
class $Cameras{}

@Alarms()
class $Alarms{}

@Settings()
class $Settings{}


appChildren = {
    navigation : $Navigation,
    dashboard : $Dashboard,
    cameras : $Cameras,
    alarms : $Alarms,
    settings : $Settings
}

export default function TrbIrCamera(options){
	return (wrappedComponent)=>{
        @TrbIrCameraMaterialService(materials)
        @TrbIrCameraLanguageService()
		@TrbIrCameraRouterService(BrowserRouter)
		//@TrbIrCameraMaterialService(MuiThemeProvider, getMuiTheme, materials)
		@TrbIrCameraStylesOptionsService(themes)
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api(options)
		@Template(appChildren)
		class TrbIrCamera_Component {}
		return TrbIrCamera_Component
	}
}  
