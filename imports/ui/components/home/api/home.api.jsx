
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Home_Api(_optional) {
    return (WrappedComponent) => {
        class $Home_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					  currentHelpPage : "trb-recorder-help"
				}
                this.changeHelpPage=this.changeHelpPage.bind(this)
            }
            componentDidMount() {
				
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

          changeHelpPage(link){
            console.log(link)
            this.setState({
              currentHelpPage : link+"-help"
            })
          }


            render() {
                return <WrappedComponent
				{...this.props}
                   currentHelpPage={this.state.currentHelpPage} 
                  changeHelpPage={this.changeHelpPage}
				/>
            }
        }
        $Home_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Home_Api
    }
}
    