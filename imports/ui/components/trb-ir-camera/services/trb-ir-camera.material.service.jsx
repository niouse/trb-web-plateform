import { Subject } from 'rxjs/Subject';
import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function  TrbIrCameraMaterialService(materials){
	
	return (WrappedComponent)=>{
	
		class $TrbIrCameraMaterialService extends Component {
			constructor(props) {
				super(props)
				this.state={
					materialIndex : 0
				}
			}
			componentDidMount(){}
			
			setMaterialTheme(index){
				this.setState({
					materialIndex : index
				})
			}
			
			render (){
				return (
					<MuiThemeProvider muiTheme={getMuiTheme(materials[this.state.materialIndex])}>
						<WrappedComponent 
							{...this.props}
							setMaterialTheme={(index)=>this.setMaterialTheme(index)}
							/>
					</MuiThemeProvider>
				)
			}	
		}
		return $TrbIrCameraMaterialService
	}
}