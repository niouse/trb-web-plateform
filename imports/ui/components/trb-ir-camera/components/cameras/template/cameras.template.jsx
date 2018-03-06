
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Cameras_Template() {
    return (wrappedComponent) => {
        const $Cameras_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="cameras-container" className="container" style={styles.container}>
					<h1  id="cameras-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Cameras_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Cameras_Template
    }
}
    