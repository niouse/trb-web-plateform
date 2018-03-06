
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'


export default function App_Template(childs) {
    return (wrappedComponent) => {
        const $App_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="app-container" style={styles.container}>
					<childs.trbCastHome />
				</div>
            );
        }
        $App_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $App_Template
    }
}
    