
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Settings_Template() {
    return (wrappedComponent) => {
        const $Settings_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="settings-container" className="container" style={styles.container}>
					<h1  id="settings-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Settings_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Settings_Template
    }
}
    