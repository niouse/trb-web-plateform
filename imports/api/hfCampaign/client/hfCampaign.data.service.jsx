import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {hfCampaigsMongo} from "./../hfCampaign.js"

export default function HfCampaigsDataService(){
    
    return (WrappedComponent)=>{
	
         class _HfCampaigsComponentDataService0 extends Component {

            constructor(props){
                super(props);
            }



            render (){
                return (
                    this.props.hfCampaigsList && this.props.hfCampaigsList[0] ?
                    <WrappedComponent
                        {...this.props}
                        hfCampaig = {this.props.hfCampaig}
                        hfCampaigsList = {this.props.hfCampaigsList}
                        getOneHfCampaig = {this.props.getOneHfCampaig}
                    /> :
                    <p>loading</p>
                )
            }
        }

        const _HfCampaigsDataService1 = createContainer((props) => {

          let hfCampaigSubOne = Meteor.subscribe("oneHfCampaigs", props.hfCampaigId)  
          let hfCampaigSubList = Meteor.subscribe("hfCampaigsList")
          return {
            ...props,
            hfCampaig : hfCampaigsMongo.find({_id : props.hfCampaigId}).fetch()[0],
            hfCampaigsList : hfCampaigsMongo.find({}, {fields : {name : 1}}).fetch(),
          };
        }, _HfCampaigsComponentDataService0);


        return class _HfCampaigsDataService2 extends Component {

            constructor(props){
                super(props);
                this.state = {
                    hfCampaigId : null
                }
            }

            getOneHfCampaig(id){
                this.setState({
                    hfCampaigId : id
                })
            }

            render (){
                return (
                    <_HfCampaigsDataService1
                        {...this.props}
                        hfCampaigId = {this.state.hfCampaigId}
                        getOneHfCampaig={(id)=>this.getOneHfCampaig(id)}
                    /> 
                )
            }
        }

    }
}

