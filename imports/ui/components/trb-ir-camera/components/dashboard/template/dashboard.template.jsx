
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';

import Refresh from 'material-ui/svg-icons/navigation/refresh';
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import StopIcon from 'material-ui/svg-icons/av/stop';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';



export default function Dashboard_Template() {
    return (wrappedComponent) => {
        const $Dashboard_Template = (props) => {
            let styles = props.styles
            let text = props.text
            const iconStyle={
                width : 48,
                height : 48,
                margin : 0,
                padding : 0
               //paddingRight : 24
            }
            return (
                <div id="dashboard-container" className="container" style={styles.container}>
					
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
                    <div>
                        <div style={{display : "flex", alignItems : "center", justifyContent : "space-between"}}>
                            <div>
                                 <IconButton 
                                     style={{margin : 0, padding : 0}}
                                     iconStyle={iconStyle}
                                     tooltip="play scrutation" 
                                     touch={true} tooltipPosition="bottom-center" 
                                     onTouchTap={props.startScrutation}
                                     >
                                  <PlayIcon color={props.scrutation ? "green" : "grey"}/>
                                </IconButton>
                                <IconButton 
                                    style={{margin : 0, padding : 0}}
                                    iconStyle={iconStyle}
                                    tooltip="stop scrutation" 
                                    touch={true} 
                                    tooltipPosition="bottom-center" 
                                    onTouchTap={props.stopScrutation}
                                    >
                                  <StopIcon color={props.scrutation ? "grey" : "red"}/>
                                </IconButton>
                            </div>
                            <div style={{display:"flex"}}>
                                 <div style={{fontFamily : "DSDIGI", fontWeight : "bold", fontSize:"3em"}}>{props.temperatureValue} °C</div>
                            </div>
                            <div >
                            <a id="download" download="ir_picture.jpg">
                                <IconButton 
                                        style={{margin : 0, padding : 0}}
                                        iconStyle={{width : 32, height : 32}}
                                        tooltip="download picture" 
                                        touch={true} 
                                        tooltipPosition="bottom-center" 
                                        //onTouchTap={props.stopScrutation}
                                        >
                                    <DownloadIcon />
                                </IconButton>
                            </a>
                            </div>
                        </div>
                        <img id="ir-photo" src="#" onClick={props.setTemperaturePosition} style={{cursor : "crosshair", minWidth:"380px"}}/>
                        {!props.connected && <div style={{textAlign : "center", fontSize:"2em"}}>NO CAMERA CONNECTED</div>}
                    </div>
				</div>
            );
        }
        $Dashboard_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Dashboard_Template
    }
}
    