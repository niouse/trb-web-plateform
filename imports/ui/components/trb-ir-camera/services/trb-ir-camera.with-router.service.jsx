import { Subject } from 'rxjs/Subject';
import React, { Component } from 'react';

export default function  TrbIrCameraWithRouterService(withRouter){
	return (WrappedComponent)=>{
		const $WrappedComponent=withRouter(WrappedComponent)
		class $TrbIrCameraWithRouterService extends Component {
			constructor(props) {
				super(props)

			}
			componentDidMount(){}
			render (){
				return (
						<$WrappedComponent {...this.props}/>
				)
			}	
		}
		return $TrbIrCameraWithRouterService
	}
}