
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Alarms_Template() {
    return (wrappedComponent) => {
        const $Alarms_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="alarms-container" className="container" style={styles.container}>
					<h1  id="alarms-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Alarms_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Alarms_Template
    }
}
    