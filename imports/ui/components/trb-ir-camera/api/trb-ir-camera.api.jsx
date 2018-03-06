
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbIrCamera_Api(_options) {
    return (WrappedComponent) => {
        class $TrbIrCamera_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
                this.startUrl = _options.startUrl ? _options.startUrl : ""
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            testMethod(test) {
                return test
            }

            render() {
                return <WrappedComponent
				{...this.props}
				testMethod={()=>this.testMethod()}
                startUrl={this.startUrl}
				/>
            }
        }
        $TrbIrCamera_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbIrCamera_Api
    }
}
    