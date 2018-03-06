

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgUsure(_optional) {
    return (WrappedComponent) => {
        class $SvgUsure extends Component {
            constructor(props) {
                super(props);
                this.state = {}
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
			mouseOver(e){
				if(this.props.hoverColor){
					e.currentTarget.childNodes[0].childNodes[0].style.fill = this.props.hoverColor
					//document.getElementById("path2987").attr('fill', this.props.hoverColor) 
				}
			}
			
			mouseOut(e){
				if(this.props.color){
					e.currentTarget.childNodes[0].childNodes[0].style.fill = this.props.color
				}
			}

            render() {
                return  <svg id="svg2" viewBox="0 0 500 500" version="1.1" onMouseOver={(e)=>this.mouseOver(e)} onMouseOut={(e)=>this.mouseOut(e)}>
					 <g id="layer1">
					  <path id="path2987" strokeLinejoin="miter" d="M 82.183955,113.43575 C 80.940195,113.55297 79.885675,114.71658 79.891055,115.96584 L 79.891055,216.49735 C 79.891705,216.89411 79.987365,217.29042 80.167785,217.64379 L 163.93746,385.18312 C 164.36365,386.02171 165.28978,386.58058 166.23035,386.56677 L 250.00002,386.56677 333.76968,386.56677 C 334.71025,386.58058 335.63638,386.02171 336.06257,385.18312 L 419.83224,217.64379 C 420.01266,217.29042 420.10832,216.89411 420.10897,216.49735 L 420.10897,115.96584 C 420.10884,114.64112 418.9036,113.43588 417.57888,113.43575 L 409.19796,113.43575 300.28553,113.43575 C 298.96082,113.43588 297.75557,114.64112 297.75545,115.96584 L 297.75545,174.59275 C 297.75545,207.47224 285.63888,223.17825 273.7196,231.12442 261.80033,239.0706 250.00002,239.11002 250.00002,239.11002 250.00002,239.11002 237.73678,239.07437 225.60838,231.12442 213.47998,223.17448 201.38647,207.5183 202.24459,174.67181 202.245,174.64546 202.245,174.6191 202.24459,174.59275 L 202.24459,115.96584 C 202.24446,114.64112 201.03921,113.43588 199.7145,113.43575 L 90.802065,113.43575 90.564875,113.43575 82.421145,113.43575 C 82.342145,113.43205 82.262955,113.43205 82.183955,113.43575 z M 84.951235,118.49593 88.271975,118.49593 88.271975,157.83091 C 88.266935,157.92305 88.266935,158.01549 88.271975,158.10764 L 88.271975,216.49735 C 88.272625,216.89411 88.368285,217.29042 88.548705,217.64379 L 163.93746,368.42128 C 164.0576,368.66913 164.21855,368.89713 164.41185,369.09334 L 172.79277,377.47426 C 173.27293,377.93905 173.94319,378.20133 174.61127,378.18585 L 191.17545,378.18585 308.86412,378.18585 325.38876,378.18585 C 326.05684,378.20133 326.7271,377.93905 327.20726,377.47426 L 335.58818,369.09334 C 335.78148,368.89713 335.94243,368.66913 336.06257,368.42128 L 411.45132,217.64379 C 411.63174,217.29042 411.7274,216.89411 411.72805,216.49735 L 411.72805,158.02857 C 411.73062,157.96271 411.73062,157.89677 411.72805,157.83091 L 411.72805,118.49593 415.04879,118.49593 415.04879,215.82529 332.22791,381.50659 250.00002,381.50659 167.77212,381.50659 84.951235,215.82529 z M 93.332155,160.361 138.5575,160.361 138.5575,216.49735 C 138.55815,216.89411 138.65381,217.29042 138.83423,217.64379 L 188.84302,317.70091 188.84302,373.12567 175.63912,373.12567 168.28605,365.7726 93.332155,215.82529 z M 361.44253,160.361 406.66787,160.361 406.66787,215.82529 331.71398,365.7726 324.36091,373.12567 311.15701,373.12567 311.15701,317.70091 361.1658,217.64379 C 361.34622,217.29042 361.44188,216.89411 361.44253,216.49735 z M 193.9032,319.55894 250.00002,319.55894 306.09683,319.55894 306.09683,373.12567 193.9032,373.12567 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgUsure.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgUsure
    }
}
    

