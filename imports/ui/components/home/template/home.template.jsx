import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom';

import Paper from 'material-ui/Paper';


import ButtonWrapper from "./home.button-wrapper.template.jsx";

// IMPORT ICONS
import TrbRecorderIcon from "./icons/svg-recorder.template.jsx";
import TrbEtuveIcon from "./icons/svg-etuve.template.jsx";
import TrbHfReport from "./icons/svg-chantier.template.jsx";
import TrbHfReportIcon from "./icons/svg-chantier.template.jsx";
import TrbMapIcon from "./icons/svg-map.template.jsx";
import TrbCameraIrIcon from "./icons/svg-camera-ir.template.jsx";
import TrbGallery3dIcon from "./icons/svg-gallery-3d.template.jsx";
import TrbGalleryIcon from "./icons/svg-image-gallery.template.jsx";
import TrbImageCropperIcon from "./icons/svg-add-picture.template.jsx";
import TrbCastIcon from "./icons/svg-search.template.jsx";
import TrbYoutubeIcon from "./icons/svg-youtube.template.jsx";

import TrbAtelierIcon from "./icons/svg-atelier.template.jsx";
import TrbBeIcon from "./icons/svg-be.template.jsx";
import TrbBillMakerIcon from "./icons/svg-bill-maker.template.jsx";
import TrbBoucheuseIcon from "./icons/svg-boucheuse.template.jsx";

import TrbChatIcon from "./icons/svg-chat.template.jsx";
import TrbCurrencyConvertIcon from "./icons/svg-currency-convert.template.jsx";
import TrbDataVisIcon from "./icons/svg-data-vis.template.jsx";
import TrbEafIcon from "./icons/svg-eaf.template.jsx";
import TrbHfIcon from "./icons/svg-hf.template.jsx";
import TrbInstrumRmIcon from "./icons/svg-instrum-rm.template.jsx";
import TrbLinkedinIcon from "./icons/svg-linkedin.template.jsx";
import TrbMailIcon from "./icons/svg-mail.template.jsx";
import TrbRepairIcon from "./icons/svg-repair-report.template.jsx";
import TrbRigoleCoupeIcon from "./icons/svg-rigole-coupe.template.jsx";
import TrbSchoolIcon from "./icons/svg-school.template.jsx";
import TrbSettingsIcon from "./icons/svg-settings.template.jsx";
import TrbWebPageIcon from "./icons/svg-web-page.template.jsx";
import TrbWhiteboardIcon from "./icons/svg-whiteboard.template.jsx";
import TrbWorldClockIcon from "./icons/svg-world-clock.template.jsx";

//IMPORT APPS HELP
import TrbRecorderHelp from "./../../trb-recorder/template/trb-recorder-help.template.jsx";
import TrbEtuveHelp from "./../../trb-etuve/template/trb-etuve-help.template.jsx";
import TrbGalleryHelp from "./../../trb-gallery-mui/template/trb-gallery-mui-help.template.jsx";
import TrbMapHelp from "./../../trb-map/template/trb-map-help.template.jsx";
import TrbImageCropperHelp from "./../../trb-image-cropper/template/trb-image-cropper-help.template.jsx";
import TrbYoutubeHelp from "./../../trb-youtube/template/trb-youtube-help.template.jsx";
import TrbIrCameraHelp from "./../../trb-ir-camera/template/trb-ir-camera-help.template.jsx";
import TrbGallery3dHelp from "./../../trb-gallery-three-d/template/trb-gallery-three-d-help.template.jsx";
import TrbCastHelp from "./../../trb-cast/template/trb-cast-help.template.jsx";

import TrbHfReportHelp from "./../../trb-new-campaign/template/trb-new-campaign-help.template.jsx";


import DefaultHelpPage from "./default-help-page.template.jsx"

const helpPages = {
  "trb-recorder-help" : TrbRecorderHelp,
  "trb-etuve-help" : TrbEtuveHelp,
  "trb-gallery-help" : TrbGalleryHelp,
  "trb-map-help" : TrbMapHelp,
  "trb-image-cropper-help" : TrbImageCropperHelp,
  "trb-youtube-help" : TrbYoutubeHelp,
  "trb-ir-camera-help" : TrbIrCameraHelp,
  "trb-hf-report-help" : TrbHfReportHelp,
  "trb-gallery-3d-help" : TrbGallery3dHelp,
  "trb-cast-help" : TrbCastHelp,
}

export default function Home_Template(childs) {
    return (wrappedComponent) => {
        const $Home_Template = (props) => {
            let styles = props.styles
            let text = props.text
            
            let appliAttr = {
				fill : "none",
				hoverFill : "none",
				color : props.stylesOptions.theme.colors.primary,
				hoverColor : props.stylesOptions.theme.colors.primary,
				width : "90px",
				showBox : true,
				boxStrokeColor : "none",
				hoverBoxStrokeColor : props.stylesOptions.theme.colors.primary,
				hoverBoxFill : "green",
				boxFill : "white",	
			}
            
            const appList = [
                {
                    svgIcon : TrbRecorderIcon,
                    link : "trb-recorder",
                },
                {
                    svgIcon : TrbEtuveIcon,
                    link : "trb-etuve",
                },
                {
                    svgIcon : TrbMapIcon,
                    link : "trb-map",
                },
                {
                    svgIcon : TrbGalleryIcon,
                    link : "trb-gallery",
                },
                {
                    svgIcon : TrbImageCropperIcon,
                    link : "trb-image-cropper",
                },
                {
                    svgIcon : TrbYoutubeIcon,
                    link : "trb-youtube",
                },
            ]
            
            const appList2 = [
                {
                    svgIcon : TrbHfReportIcon,
                    link : "trb-hf-report",
                },
                {
                    svgIcon : TrbCameraIrIcon,
                    link : "trb-ir-camera",
                },
                {
                    svgIcon : TrbGallery3dIcon,
                    link : "trb-gallery-3d",
                },
                {
                    svgIcon : TrbCastIcon,
                    link : "trb-cast",
                },
                
            ]
            
            const appList3 = [
                {
                    svgIcon : TrbAtelierIcon,
                    link : "trb-atelier",
                },
                {
                    svgIcon : TrbBeIcon,
                    link : "trb-be",
                },
                {
                    svgIcon : TrbBillMakerIcon,
                    link : "trb-bill-maker",
                },
                {
                    svgIcon : TrbBoucheuseIcon,
                    link : "trb-boucheuse",
                },
                {
                    svgIcon : TrbChatIcon,
                    link : "trb-chat",
                },
                {
                    svgIcon : TrbCurrencyConvertIcon,
                    link : "trb-currency",
                },
                {
                    svgIcon : TrbDataVisIcon,
                    link : "trb-data-vis",
                },
                {
                    svgIcon : TrbEafIcon,
                    link : "trb-eaf",
                },
                {
                    svgIcon : TrbHfIcon,
                    link : "trb-hf",
                },
                {
                    svgIcon : TrbInstrumRmIcon,
                    link : "trb-instrum-rm",
                },
                {
                    svgIcon : TrbLinkedinIcon,
                    link : "trb-linkedin",
                },
                {
                    svgIcon : TrbMailIcon,
                    link : "trb-mail",
                },
                {
                    svgIcon : TrbRepairIcon,
                    link : "trb-repair",
                },
                {
                    svgIcon : TrbRigoleCoupeIcon,
                    link : "trb-rigole-coupe",
                },
                {
                    svgIcon : TrbSchoolIcon,
                    link : "trb-school",
                },
                {
                    svgIcon : TrbSettingsIcon,
                    link : "trb-settings",
                },
                {
                    svgIcon : TrbWebPageIcon,
                    link : "trb-web-page",
                },
                {
                    svgIcon : TrbWhiteboardIcon,
                    link : "trb-whiteboard",
                },
                {
                    svgIcon : TrbWorldClockIcon,
                    link : "trb-world-clock",
                },
                
            ]
	       console.log(props.currentHelpPage)
            
            return (
                <div id="home-container" style={styles.container}>
					{/*<div id="home-band-image-box" style={styles.bandImageBox}>

					</div>*/}
					{/*<childs.TrbRecorder 
                        startUrl="/home"
                        />*/}
                    <Paper style={{width:"60%", height:"100%", padding : "10px", overflowY:"auto" ,marginLeft:"5px"}} zDepth={5}>
                        <div style={styles.appliList}>
                          {appList.map((item, index)=>{
                              return <div key={index} onMouseOver={()=>props.changeHelpPage(item.link)}>
                              <ButtonWrapper  
                              {...appliAttr} 
                              svgIcon={item.svgIcon} 
                              onTouchTap={()=>props.goToPageNext(item.link)}
                              />
                              </div>
                          })}
                        </div>
                        <div style={styles.appliList}>
                          {appList2.map((item, index)=>{
                            return <div key={index} onMouseOver={()=>props.changeHelpPage(item.link)}>
                               <ButtonWrapper 
                              key={index}
                              {...appliAttr} 
                              svgIcon={item.svgIcon} 
                              onTouchTap={()=>props.goToPageNext(item.link)}
                              />
                              </div>
                          })}
                        </div>
                        <div style={styles.appliList}>
                           {appList3.map((item, index)=>{
                              return <div key={index} onMouseOver={()=>props.changeHelpPage(item.link)}>
                              <ButtonWrapper 
                              {...appliAttr} 
                              svgIcon={item.svgIcon} 
                              onTouchTap={()=>props.goToPageNext(item.link)}
                              />
                              </div>
                          })}
                        </div>
                    </Paper>
                    <Paper style={{width:"30%", padding : "0px 30px 0px 30px"}} zDepth={5}>
                      {helpPages[props.currentHelpPage] ?
                        React.createElement(helpPages[props.currentHelpPage], null):
                        React.createElement(DefaultHelpPage, null)
                      }
                     </Paper>
				</div>
            );
        }
        $Home_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Home_Template
    }
}
    