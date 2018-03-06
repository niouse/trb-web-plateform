
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const $SvgRecorder_Template = (props) => {
    let styles = props.styles
    let text = props.text
    return (
        <g id="svg2" fill={props.fill || "black"} stroke={props.color|| "black"} strokeWidth="7">
                  <path id="path3839" strokeLinejoin="round" d="M 229.43072,311.70785 239.71536,332.27714 260.7234,332.27714 270.56929,311.70785 270.56929,95.730357 229.43072,95.730357 z" />
                  <path id="path3841"  d="M 147.15358,250 147.15358,404.26965 352.84642,404.26965 352.84642,250 332.27714,250 332.27714,383.70036 167.72286,383.70036 167.72286,250 z" />
                  <path id="path3843" strokeLinejoin="miter" fill={props.color || props.hoverColor || "black"} d="M 178.00751,250 219.14608,250 219.14608,342.56178 260.7234,342.56178 280.85393,342.56178 280.85393,250 321.9925,250 321.9925,373.41571 178.00751,373.41571 z" />
                  <path id="path3929" strokeWidth="3" fill={props.color || props.hoverColor || "black"} d="M 172.99129,177.7174 C 172.59344,175.95081 170.81679,174.7886 169.00598,175.20172 162.68341,176.63237 158.26691,182.16205 158.26691,188.65018 158.26691,190.48632 159.76226,191.98206 161.59877,191.98206 163.43532,191.98206 164.93065,190.48672 164.93065,188.65018 164.93065,185.35206 167.26027,182.42848 170.4756,181.70272 172.26271,181.29161 173.39396,179.50451 172.99129,177.7174 z M 173.68914,93.493256 C 164.86146,93.493256 157.63014,100.72483 157.62965,109.55274 L 157.62965,167.32161 C 149.62098,172.66129 144.71662,181.59556 144.71662,191.3605 144.71662,207.30892 157.74072,220.33303 173.68914,220.33303 189.63756,220.33303 202.6365,207.30892 202.6365,191.3605 202.6365,181.59353 197.73344,172.65748 189.72346,167.32161 L 189.72346,109.55274 C 189.72346,100.72464 182.51682,93.493256 173.68914,93.493256 z M 173.68914,99.131698 C 179.45885,99.131698 184.08502,103.78264 184.08502,109.55274 L 184.08502,168.8319 184.08502,170.44289 185.49463,171.24838 C 192.65408,175.44457 196.99806,183.00066 196.99806,191.3605 196.99806,204.25082 186.57946,214.69459 173.68914,214.69459 160.79882,214.69459 150.35506,204.25082 150.35506,191.3605 150.35506,183.00332 154.69748,175.45018 161.85849,171.24838 L 163.2681,170.44289 163.2681,168.8319 163.2681,109.55274 C 163.26842,103.78245 167.91943,99.131698 173.68914,99.131698 z"/>	
        </g>
    );
}
$SvgRecorder_Template.propTypes = {
};

export default $SvgRecorder_Template

