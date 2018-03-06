import React, { Component } from 'react';

export default function  TrbIrCameraRouterService(Router){
	return (WrappedComponent)=>{
		class $TrbIrCameraRouterService extends Component {
            constructor(props) {
				super(props)
			}
            render (){
                return (
                    <Router>
                        <WrappedComponent {...this.props}/>
                    </Router>
                )	
            }
		}
		return $TrbIrCameraRouterService
	}
}



