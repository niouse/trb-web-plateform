
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {clientsMongo} from "./../clients.js"

const containerStyles = {
	width:"100%", 
	height:"100%", 
	display:"flex",
	alignItems : "center",
	justifyContent : "center",
}

export default function ClientsDataService(Loading){
	return (WrappedComponent)=>{
	
		 class $ClientsComponentDataService0 extends Component {

			constructor(props){
				super(props);
			}

           getLoading(){
				 if (Loading){
					 return <Loading />
				 }
				 else return <p>loading</p>
			 }

			render (){
				return (
					this.props.isReady ?
					<WrappedComponent
						{...this.props}
						client = {this.props.client}
						clientsList = {this.props.clientsList}
						getOneClient = {this.props.getOneClient}
					/> :
					<div style={containerStyles}>{this.getLoading()}</div>
				)
			}
		}

		const $ClientsDataService1 = createContainer((props) => {

		  let clientSubOne = Meteor.subscribe("oneClients", props.clientId)  
		  let clientSubList = Meteor.subscribe("clientsList")
          console.log(clientsMongo.find({_id : props.clientId}).fetch()[0])
		  return {
			...props,
			client : clientsMongo.find({_id : props.clientId}).fetch()[0],
			clientsList : clientsMongo.find({}, {fields : {name : 1, lat : 1, lng : 1, type : 1}}).fetch(),
            isReady : clientSubList.ready()
		  };
		}, $ClientsComponentDataService0);


		class $ClientsDataService2 extends Component {

			constructor(props){
				super(props);
				this.state = {
					clientId : null
				}
			}

			getOneClient(id){
                //console.log(id)
				this.setState({
					clientId : id
				})
			}

			render (){
				return (
					<$ClientsDataService1
						{...this.props}
						clientId = {this.state.clientId}
						getOneClient={(id)=>this.getOneClient(id)}
					/> 
				)
			}
		}
		
		return $ClientsDataService2
	}
}
