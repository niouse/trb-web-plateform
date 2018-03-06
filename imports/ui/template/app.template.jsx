
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'

import ChatIcon from 'material-ui/svg-icons/communication/chat';
import PeopleOutline from 'material-ui/svg-icons/social/people-outline';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import AddAPhoto from 'material-ui/svg-icons/image/add-a-photo';

export default function App_Template(childs) {
    return (wrappedComponent) => {
        const $App_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="app-container" className="container" style={styles.container}>
					<childs.Header 
						leftLogo="/app/trbLogo.png"
						title={text.headerTitle}
						rightLogo="/app/tel.png"
						titleStyle={{letterSpacing : "0px"}}
						/>
					<childs.Navigation />
					<Switch>
							<Route 
								path="/" 
								exact component={childs.Login} 
								/>
							<Route 
								path="/login" 
								exact component={childs.Login} 
								/>
							<Route 
								path="/home"
								component={childs.Home}
								/>
                            <Route 
								path="/trb-recorder"
								component={childs.TrbRecorder}
								/>
                            <Route 
								path="/trb-etuve"
								component={childs.TrbEtuve}
								/>
                            <Route 
								path="/trb-hf-report"
								component={childs.TrbNewCampaign}
								/>
                            <Route 
								path="/trb-map"
								component={childs.TrbMap}
								/>
                            <Route 
								path="/trb-ir-camera"
								component={childs.TrbIrCamera}
								/>
                            <Route 
								path="/trb-gallery-3d"
								component={childs.TrbGallery3d}
								/>
                             <Route 
								path="/trb-gallery"
								component={childs.TrbGalleryMui}
								/>
                             <Route 
								path="/trb-image-cropper"
								component={childs.TrbImageCropper}
								/>
                            <Route 
								path="/trb-cast"
								component={childs.TrbCast}
								/>
                            <Route 
								path="/trb-youtube"
								component={childs.TrbYoutube}
								/>
							<Route 
								path="/help/:section?"
								component={childs.AppHelp}
								/>
							<Route 
								component={childs.PageNotFound}
								/>
					</Switch>
					
				</div>
            );
        }
        $App_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $App_Template
    }
}
    