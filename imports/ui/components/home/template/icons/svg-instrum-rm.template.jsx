
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const SvgInstrumRmTemplate = (props) => {
    let styles = props.styles
    let text = props.text
    return (
          <g id="g4257"  fill={props.color || "black"} >
             <path fill={props.color || "black"} id="path3256" d="M 260.889,325.19626 C 289.86448,319.66486 308.94991,291.59654 303.4407,262.61683 303.00972,260.35452 300.81812,258.86431 298.54261,259.28631 296.28029,259.71728 294.79008,261.90888 295.21208,264.18441 299.88152,288.63526 283.77651,312.32038 259.31246,316.98084 258.18129,317.19632 257.23656,317.84749 256.6351,318.73205 256.03362,319.6166 255.77542,320.73457 255.99091,321.86573 256.42189,324.12805 258.61349,325.61825 260.889,325.19626 z M 247.74212,277.23833 C 245.19739,275.50801 244.53718,272.0424 246.2675,269.49767 247.99783,266.95294 251.46344,266.29273 254.00817,268.02305 256.5529,269.75337 257.21311,273.21899 255.48279,275.76372 253.75246,278.30845 250.28685,278.96866 247.74212,277.23833 z M 271.77727,268.6373 C 271.34629,266.37499 269.15469,264.88478 266.87917,265.30678 264.61685,265.73775 263.12665,267.92935 263.54864,270.20487 264.89281,277.20041 260.27855,283.98645 253.27879,285.30843 252.14763,285.52391 251.2029,286.17507 250.60142,287.05963 249.99996,287.94419 249.74175,289.06216 249.95723,290.19332 250.38821,292.45564 252.57981,293.94584 254.84213,293.51487 266.37972,291.33991 273.97439,280.17067 271.77727,268.6373 z M 287.48039,265.64582 C 287.04941,263.3835 284.85781,261.8933 282.58229,262.31529 280.31998,262.74627 278.82977,264.93787 279.25178,267.21339 282.23481,282.87216 271.92006,298.04172 256.26129,301.02476 255.13013,301.24025 254.1854,301.8914 253.58394,302.77596 252.98246,303.66052 252.72426,304.77849 252.93975,305.90965 253.37072,308.17197 255.56232,309.66217 257.83784,309.24018 278.03444,305.40417 291.33858,285.8382 287.48039,265.64582 z M 357.0478,325.10552 V 224.02895 C 357.0478,214.48786 349.73786,207.17791 340.19676,207.17791 330.65567,207.17791 323.34573,215.04564 323.34573,224.02895 V 325.07646 C 316.59357,330.12619 312.13127,338.55142 312.13127,347.53473 312.13127,363.24083 324.49066,375.60022 340.19676,375.60022 355.90287,375.60022 368.26196,363.24083 368.26196,347.53473 368.26196,338.55142 363.7706,330.15526 357.0478,325.10552 z M 340.19676,370.02205 C 327.83738,370.02205 317.7385,359.92376 317.7385,347.56379 317.7385,339.13856 322.23015,331.85768 328.95295,327.9244 V 224.02895 C 328.95295,217.86393 334.00239,212.81449 340.16741,212.81449 346.33242,212.81449 351.38157,217.86393 351.38157,224.02895 V 327.89446 C 358.13373,331.82833 362.59631,339.10921 362.59631,347.53443 362.65503,359.89382 352.55586,370.02205 340.19676,370.02205 z M 345.8037,331.82862 C 345.8037,331.27083 345.8037,331.27083 345.8037,330.71334 V 274.5527 C 345.8037,271.17663 343.57255,268.94548 340.19676,268.94548 336.82068,268.94548 334.58954,271.76377 334.58954,274.5527 V 330.68339 C 334.58954,331.24118 334.58954,331.24118 334.58954,331.79926 327.83738,334.05947 323.37508,340.22449 323.37508,347.50537 323.37508,357.04646 330.68503,364.35641 340.22612,364.35641 349.76692,364.35641 357.07687,357.04646 357.07687,347.50537 357.0478,340.25443 352.55586,334.08942 345.8037,331.82862 z M 274.17718,100.12658 A 2.3887026,2.3887026 0 0 1 276.11781,102.51504 L 276.11781,197.41916 A 2.3887026,2.3887026 0 0 1 275.85657,198.50143 L 196.77603,356.66252 A 2.3887026,2.3887026 0 0 1 194.61148,357.96871 L 115.53094,357.96871 115.53094,353.19178 193.15601,353.19178 271.34088,196.78472 271.34088,104.9035 268.20602,104.9035 268.20602,142.03665 A 2.3887026,2.3887026 0 0 1 268.20602,142.29789 L 268.20602,197.41916 A 2.3887026,2.3887026 0 0 1 267.94479,198.50143 L 196.77603,340.83894 A 2.3887026,2.3887026 0 0 1 196.32819,341.47338 L 188.41641,349.38517 A 2.3887026,2.3887026 0 0 1 186.6997,350.05692 L 171.06272,350.05692 115.53094,350.05692 115.53094,345.27999 168.48766,345.27999 168.48766,294.71174 115.53094,294.71174 115.53094,289.93481 169.42065,289.93481 215.95838,196.85936 215.95838,142.03665 A 2.3887026,2.3887026 0 0 1 218.34684,139.64819 L 263.4291,139.64819 263.4291,104.9035 165.39012,104.9035 165.39012,157.82291 165.39012,157.86023 C 166.22133,190.07727 153.85513,206.90555 141.16961,215.22068 128.47889,223.53921 115.53094,223.54298 115.53094,223.54298 L 115.53094,218.76605 C 115.53094,218.76605 127.10773,218.7324 138.55722,211.22746 150.00672,203.72253 161.42328,188.94273 160.61319,157.93486 A 2.3887026,2.3887026 0 0 1 160.61319,157.86023 L 160.61319,102.51504 A 2.3887026,2.3887026 0 0 1 163.00166,100.12658 L 265.81756,100.12658 266.04148,100.12658 273.72935,100.12658 A 2.3887026,2.3887026 0 0 1 273.95327,100.12658 2.3887026,2.3887026 0 0 1 274.17718,100.12658 z M 263.4291,144.42512 220.73531,144.42512 220.73531,197.41916 A 2.3887026,2.3887026 0 0 1 220.47407,198.50143 L 173.26459,292.95771 173.26459,345.27999 185.72938,345.27999 192.67086,338.33852 263.4291,196.78472 263.4291,144.42512 z"/>
          </g>	
         );
}
SvgInstrumRmTemplate.propTypes = {
};

export default SvgInstrumRmTemplate

    