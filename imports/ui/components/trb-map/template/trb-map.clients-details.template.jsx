
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ClientsDetails from "./trb-map.clients-details.template.jsx"

//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

//MATERIAL ICONS
import PlayArrow from 'material-ui/svg-icons/av/play-arrow.js';
import Stop from 'material-ui/svg-icons/av/stop.js';
import Pause from 'material-ui/svg-icons/av/pause.js';
import FiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record.js';
import Refresh from 'material-ui/svg-icons/navigation/refresh.js';
import ImportExport from 'material-ui/svg-icons/communication/import-export.js';
import Settings from 'material-ui/svg-icons/action/settings.js';
import Save from 'material-ui/svg-icons/content/save.js';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';



import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import ListIcon from 'material-ui/svg-icons/action/list';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

export default function TrbMap_ClientsDetails_Template(SimpleMap) {
    return (wrappedComponent) => {
        const $TrbMap_ClientsDetails_Template = (props) => {
            let styles = props.styles
            let text = props.text
            //console.log(props.client)
            
            const ItemRow=(props)=>{
                return <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>{props.itemLabel}</div>
                        <div>{props.itemValue}</div>
                    </div>
            }
            
            const iconButtonElement = (
              <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left"
              >
                <MoreVertIcon />
              </IconButton>
            );
            
            const rightIconMenu = (
              <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem>Send Email</MenuItem>
                <MenuItem>See profile</MenuItem>
                <MenuItem>Start chat</MenuItem>
              </IconMenu>
            );
            
            return (
                <div id="trb-map-container" className="container" style={styles.container}>
					<div style={styles.infosBox}>
						<div style={styles.infosBox.title}>{props.client.name}</div>
                        <List>
                            <ListItem disabled={true} primaryText={
                                <ItemRow 
                                    itemLabel="Country"
                                    itemValue={props.client.country}
                                    />
                                } />
                            <ListItem disabled={true} primaryText={
                                <ItemRow 
                                    itemLabel="Pseudo"
                                    itemValue={props.client.pseudo}
                                    />
                                } />
                            <ListItem disabled={true} primaryText={
                                <ItemRow 
                                    itemLabel="Type"
                                    itemValue={props.client.type}
                                    />
                                } />
                            <ListItem disabled={true} primaryText={
                                <ItemRow 
                                    itemLabel="Code"
                                    itemValue={props.client.code}
                                    />
                                } />
                            <ListItem disabled={true} primaryText={
                                <ItemRow 
                                    itemLabel="BU"
                                    itemValue={props.client.BU}
                                    />
                                } />
                        </List>	
					</div>
					<div style={styles.actionsBox}>
					</div>
					<div style={styles.dataBox}>
						<List>
                            <ListItem 
                                primaryText="s. pinard" 
                                leftAvatar={<Avatar src="/users/spinard.jpg" />} 
                                rightIconButton={rightIconMenu}
                                />
							<ListItem primaryText="Send email" leftIcon={<ContentSend />} />
                            <ListItem primaryText="Commandes" leftIcon={<ListIcon />} />
						</List>
					</div>
				
				</div>
            );
        }
        $TrbMap_ClientsDetails_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            //text: PropTypes.object.isRequired,
        };
        return $TrbMap_ClientsDetails_Template
    }
}
    