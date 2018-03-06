// REACT DEPENDENCIES
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'
import {withRouter} from "react-router-dom"

// COMPONENT LAYERS
import Template from "./template/app.template.jsx"
import Api from "./api/app.api.jsx"
import Styles from "./services/app.styles.service.jsx"
import Texts from "./services/app.text.service.jsx"

// COMPONENT STATIC DATA
import stylesDefault from "./styles/app.styles.default.js"
import stylesOptions from "./styles/app.styles-options.default.js"
import computeStyles from "./styles/app.compute-styles.js"
import texts from "./text/app.text.js"
import icons from "./static-data/svg/app-icons/svg-app-icons.jsx"
import appList from "./static-data/app-list.data.jsx"


// COMPONENT SERVICES
import AppStylesOptionsService from "./services/app.styles-options.service.jsx"
import AppMaterialService from "./services/app.material.service.jsx"
import AppRouterService from "./services/app.router.service.jsx"
import AppWithRouterService from "./services/app.with-router.service.jsx"
import AppLanguageService from "./services/app.language.service.jsx"
import AppAccessService from "./services/app.access.service.jsx"
import AppInjectorService from "./services/app.injector.service.jsx"


// COMPONENT CHILDREN

//PLATEFORM CHILDREN
import Header from "./components/header/header.jsx"
import Navigation from "./components/navigation/navigation.jsx"
	import NavigationRouterService from "./components/navigation/services/navigation.router.service.jsx"
import Home from "./components/home/home.jsx"
import Login from "./components/login/login.jsx"
import AppHelp from "./components/app-help/app-help.jsx"

// APPLICATIONS
import TrbRecorder from "./components/trb-recorder/app.component.jsx"
import TrbEtuve from "./components/trb-etuve/trb-etuve.component.jsx"
import TrbNewCampaign from "./components/trb-new-campaign/trb-new-campaign.component.jsx"
import TrbMap from "./components/trb-map/trb-map.component.jsx"
import TrbIrCamera from "./components/trb-ir-camera/trb-ir-camera.component.jsx"
import TrbGallery3d from "./components/trb-gallery-three-d/trb-gallery-three-d.component.jsx"
import TrbGalleryMui from "./components/trb-gallery-mui/trb-gallery-mui.jsx"
import TrbImageCropper from "./components/trb-image-cropper/image-cropper.component.jsx"
import TrbCast from "./components/trb-cast/app.component.jsx"
import TrbYoutube from "./components/trb-youtube/trb-youtube.component.jsx"


// COMPONENT SHARED
import PageNotFound from "./components/shared/page-not-found/page-not-found.jsx"
import Loading from "./components/shared/loading/loading.jsx"

// THEMES
import themes from "./themes/index.js"
import materials from "./themes/materialui.index.js"
import materialTrb from "./themes/materialui.trb.js"
import materialRuggieri from "./themes/materialui.ruggieri.js"


// EXTERNAL LIBRAIRIES

// MONGO COLLECTIONS WITH SERVICES
import UsersService from "/imports/api/users/client/users.service.jsx";
import UsersCrudService from "/imports/api/users/client/users.crud.service.jsx";
import ClientsDataService from "/imports/api/clients/client/clients.data.service.jsx";
import PicturesDataService from "/imports/api/pictures/client/pictures.data.service.jsx";
import PicturesCrudService from "/imports/api/pictures/client/pictures.crud.service.jsx";

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD SHARED_________________________________________________________________________*/
/*______________________________________________________________________________________*/


@AppLanguageService()
@PageNotFound()
class $PageNotFound{}

@Loading()
class $Loading{}



/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD APPLICATIONS___________________________________________________________________*/
/*______________________________________________________________________________________*/

@TrbRecorder({startUrl : "/trb-recorder"})
class $TrbRecorder{}

@AppStylesOptionsService(themes)
@TrbEtuve()
class $TrbEtuve{}


@AppStylesOptionsService(themes)
@TrbNewCampaign()
class $TrbNewCampaign{}


@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbMap()
class $TrbMap{}

@TrbIrCamera({startUrl : "/trb-ir-camera"})
class $TrbIrCamera{}


@TrbGallery3d()
class $TrbGallery3d{}

@PicturesCrudService()
@ClientsDataService()
@PicturesDataService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbGalleryMui()
class $TrbGalleryMui{}


@ClientsDataService()
@PicturesCrudService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbImageCropper()
class $TrbImageCropper{}



@TrbCast()
class $TrbCast{}


@AppStylesOptionsService(themes)
@TrbYoutube()
class $TrbYoutube{}

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS_________________________________________________________________________*/
/*______________________________________________________________________________________*/


@AppStylesOptionsService(themes)
@AppLanguageService()
@Header()
class $Header{}

@UsersService()
@AppWithRouterService(withRouter)
@AppStylesOptionsService(themes)
@AppLanguageService()
@Navigation()
class $Navigation{}


@AppRouterService(BrowserRouter)
@AppWithRouterService(withRouter)
//@AppInjectorService({items:applisMocks})
@NavigationRouterService()
@AppAccessService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@Home()
class $Home{}


@UsersService()
@NavigationRouterService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@Login()
class $Login{}


@AppStylesOptionsService(themes)
@AppLanguageService()
@AppHelp()
class $AppHelp{}



/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT______________________________________________________________________*/
/*______________________________________________________________________________________*/


let appChilds = {
	Header : $Header,
	Navigation : $Navigation,
	Home : $Home,
	Login : $Login, 
	AppHelp : $AppHelp, 
	PageNotFound : $PageNotFound,
    //TRB APPS
    TrbRecorder : $TrbRecorder,
    TrbEtuve : $TrbEtuve,
    TrbNewCampaign : $TrbNewCampaign,
    TrbMap : $TrbMap,
    TrbIrCamera : $TrbIrCamera,
    TrbGallery3d : $TrbGallery3d,
    TrbGalleryMui : $TrbGalleryMui,
    TrbImageCropper : $TrbImageCropper,
    TrbCast : $TrbCast,
    TrbYoutube : $TrbYoutube,
}


export default function App(){
	return (wrappedComponent)=>{
		@AppRouterService(BrowserRouter)
		@AppWithRouterService(withRouter)
		@AppMaterialService(materials)
		@AppStylesOptionsService(themes)
		@AppLanguageService()
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(appChilds)
		class App_Component {}
		return App_Component
	}
}  

