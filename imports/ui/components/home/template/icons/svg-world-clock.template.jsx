
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const SvgWorldClockTemplate = (props) => {
    let styles = props.styles
    let text = props.text
    return (
          <g id="g4257"  fill={props.color || "black"} stroke={props.color|| "black"} strokeWidth="8px">
             <path fill={props.color || "black"} stroke={props.color|| "black"} id="path3256" d="M 333.28441,146.55785 303.6611,162.99379 C 302.31253,162.28579 300.7806,161.87984 299.15031,161.87984 297.52094,161.87984 295.98856,162.28533 294.63999,162.99379 L 265.01714,146.55785 C 262.21654,145.0033 258.68486,146.01473 257.12984,148.81578 255.57622,151.61684 256.58672,155.14806 259.3887,156.70262 L 289.61286,173.47247 C 290.4862,177.94585 294.42154,181.32236 299.14985,181.32236 303.87816,181.32236 307.81396,177.94539 308.68684,173.47247 L 338.91007,156.70262 C 341.71159,155.14853 342.7221,151.6173 341.16893,148.81578 339.61715,146.01426 336.08639,145.0033 333.28441,146.55785 z M 299.1517,83.85159 C 250.7657,83.85159 211.40219,123.21602 211.40219,171.6011 211.40219,219.98618 250.7657,259.3506 299.1517,259.3506 347.53724,259.3506 386.9012,219.9871 386.9012,171.6011 386.9012,123.21556 347.53724,83.85159 299.1517,83.85159 z M 336.05267,230.2053 332.27113,223.70075 C 331.83469,222.95026 331.02278,222.4838 330.15267,222.4838 329.71947,222.4838 329.30843,222.59557 328.92972,222.81587 328.36443,223.14423 327.96171,223.67212 327.79452,224.30391 327.62918,224.93525 327.71647,225.59383 328.04484,226.15912 L 331.83146,232.67198 C 323.37195,237.21787 313.86313,240.0531 303.77009,240.72185 V 231.53401 C 303.77009,228.98419 301.70151,226.91562 299.1517,226.91562 296.60142,226.91562 294.5333,228.98419 294.5333,231.53401 V 240.72046 C 284.58944,240.0628 275.21271,237.29777 266.84649,232.86826 L 270.59247,226.3337 C 270.91714,225.76748 271.00212,225.10936 270.83124,224.47803 270.66036,223.84808 270.2544,223.3225 269.68818,222.99783 269.31225,222.78215 268.90444,222.6727 268.47632,222.6727 267.60067,222.6727 266.78598,223.14423 266.35047,223.90257 L 262.60865,230.42975 C 254.26367,225.22667 247.09869,218.30185 241.61943,210.1513 L 249.55752,205.56847 C 251.76604,204.29333 252.52299,201.46872 251.24739,199.25974 249.97225,197.05169 247.14764,196.29427 244.93913,197.57033 L 236.98995,202.15963 C 232.80753,193.68534 230.30898,184.24026 229.93119,174.25991 L 237.47303,174.23681 C 238.12607,174.23497 238.73893,173.97865 239.19892,173.51588 239.65892,173.05266 239.91154,172.43795 239.90923,171.78491 239.90508,170.44096 238.80821,169.34778 237.46472,169.34778 L 229.91456,169.37087 C 230.23739,159.23396 232.74841,149.64109 236.98948,141.04764 L 244.93867,145.63694 C 245.6656,146.05675 246.4595,146.25627 247.24278,146.25627 248.8389,146.25627 250.39161,145.42819 251.24693,143.94661 252.52253,141.73763 251.76558,138.91302 249.55706,137.63788 L 241.61896,133.05505 C 247.01925,125.02043 254.05769,118.17689 262.2498,113.00013 L 266.03134,119.50468 C 266.25025,119.88061 266.55045,120.18035 266.925,120.39556 267.67225,120.82323 268.61949,120.82785 269.37229,120.38956 269.93758,120.06119 270.34076,119.53239 270.50749,118.90105 270.67467,118.27018 270.58554,117.61206 270.25763,117.04769 L 266.47147,110.53483 C 274.93191,105.98894 284.44026,103.15279 294.53284,102.48497 V 111.67049 C 294.53284,114.22077 296.60096,116.28889 299.15124,116.28889 301.70105,116.28889 303.76963,114.22077 303.76963,111.67049 V 102.48497 C 313.71303,103.14263 323.0893,105.9072 331.45552,110.3367 L 327.70954,116.87127 C 327.03941,118.04065 327.44537,119.53747 328.61429,120.2076 328.98976,120.42281 329.39757,120.53227 329.82615,120.53227 330.70226,120.53227 331.51649,120.06119 331.95062,119.30331 L 335.69336,112.77521 C 344.03926,117.97784 351.20424,124.90358 356.68351,133.05412 L 348.74541,137.63696 C 346.53643,138.9121 345.77994,141.73671 347.05554,143.94569 347.91179,145.42727 349.46357,146.25534 351.05969,146.25534 351.84297,146.25534 352.63733,146.05583 353.3638,145.63602 L 361.31299,141.04626 C 365.49633,149.52009 367.99396,158.96563 368.37174,168.94598 L 360.8299,168.96907 C 360.17686,168.97092 359.564,169.22724 359.10493,169.69001 358.64494,170.15323 358.39231,170.76748 358.39462,171.42052 358.39739,172.29201 358.86847,173.10254 359.62681,173.53713 359.99351,173.74727 360.41148,173.85718 360.83821,173.85718 H 360.84607 L 368.38929,173.83409 C 368.06646,183.97101 365.55544,193.56434 361.31437,202.15732 L 353.36519,197.56756 C 351.15575,196.29196 348.33299,197.04938 347.05692,199.25789 345.78132,201.46641 346.53782,204.29102 348.74679,205.56616 L 356.68489,210.14899 C 351.28276,218.18362 344.24524,225.02762 336.05267,230.2053 z M 191.62504,229.66952 C 142.51234,229.66952 102.69819,269.48321 102.69819,318.59637 102.69819,367.70952 142.51234,407.52321 191.62504,407.52321 240.73774,407.52321 280.55188,367.70952 280.55188,318.59637 280.55188,269.48321 240.73774,229.66952 191.62504,229.66952 z M 157.20533,250.50029 C 155.6124,252.70659 154.08696,255.07569 152.64179,257.61444 150.43412,261.49211 148.46451,265.6662 146.73841,270.07788 143.06095,269.06548 139.40126,267.92859 135.76438,266.66537 141.87617,260.09527 149.12849,254.59959 157.20533,250.50029 z M 126.54791,278.78177 C 131.76404,280.73952 137.02578,282.45558 142.32262,283.93177 140.14278,292.56634 138.79109,301.80014 138.3346,311.33355 H 115.66053 C 116.7842,299.49214 120.62265,288.43056 126.54791,278.78177 z M 126.54791,358.41097 C 120.62219,348.76172 116.78375,337.70059 115.66053,325.85918 H 138.3346 C 138.79154,335.3926 140.14278,344.62639 142.32262,353.26096 137.02578,354.73715 131.76404,356.45321 126.54791,358.41097 z M 135.76438,370.52782 C 139.40126,369.2646 143.06095,368.1268 146.73796,367.11531 148.46451,371.52699 150.43412,375.70108 152.64179,379.57875 154.08651,382.11704 155.6124,384.4866 157.20533,386.6929 149.12849,382.59314 141.87617,377.09792 135.76438,370.52782 z M 184.36222,391.13787 C 175.0623,387.65011 166.82402,377.64242 161.08163,363.8241 168.80276,362.39899 176.57633,361.51702 184.36222,361.1791 V 391.13787 z M 184.36222,346.62155 C 175.03722,346.99458 165.72771,348.09044 156.49072,349.9009 154.59362,342.44244 153.34043,334.33642 152.88121,325.85873 H 184.36222 V 346.62155 z M 184.36222,311.33355 H 152.88121 C 153.34043,302.85586 154.59362,294.74983 156.49072,287.29138 165.72726,289.1023 175.03722,290.19769 184.36222,290.57073 V 311.33355 z M 184.36222,276.01318 C 176.57633,275.67525 168.80322,274.79328 161.08163,273.36817 166.82402,259.54985 175.0623,249.54262 184.36222,246.05441 V 276.01318 z M 256.70261,278.78313 C 262.62788,288.43147 266.46587,299.4926 267.58908,311.33355 H 244.91502 C 244.45853,301.80105 243.10684,292.56725 240.92745,283.93359 246.22475,282.45741 251.48694,280.7418 256.70261,278.78313 z M 247.48706,266.66674 C 243.85018,267.92995 240.1905,269.06776 236.51257,270.0797 234.78602,265.66711 232.81641,261.49211 230.60829,257.61398 229.16311,255.07569 227.63767,252.70613 226.0452,250.49984 234.12249,254.60005 241.37482,260.09618 247.48706,266.66674 z M 198.88785,246.05486 C 208.18778,249.54262 216.42651,259.55122 222.1689,273.37045 214.44777,274.79511 206.6742,275.67662 198.88785,276.01409 V 246.05486 z M 198.88785,290.57164 C 208.21377,290.19906 217.52373,289.10366 226.75981,287.29366 228.65691,294.75166 229.90964,302.85723 230.36887,311.33401 H 198.88785 V 290.57164 z M 198.88785,325.85918 H 230.36887 C 229.90964,334.33596 228.65691,342.44153 226.75981,349.89953 217.52373,348.08907 208.21377,346.99413 198.88785,346.62109 V 325.85918 z M 198.88785,391.13787 V 361.1791 C 206.67465,361.51702 214.44823,362.39808 222.1689,363.82319 216.42651,377.64151 208.18778,387.65011 198.88785,391.13787 z M 226.0452,386.69244 C 227.63813,384.48614 229.16357,382.11704 230.60829,379.57829 232.81641,375.70017 234.78602,371.52517 236.51257,367.11303 240.19004,368.12543 243.84972,369.26278 247.48706,370.526 241.37482,377.09655 234.12249,382.59269 226.0452,386.69244 z M 256.70261,358.41006 C 251.48694,356.45093 246.22475,354.73532 240.9279,353.25868 243.1073,344.62503 244.45853,335.39168 244.91548,325.85918 H 267.58954 C 266.46587,337.70013 262.62788,348.76126 256.70261,358.41006 z"/>
          </g>	
                            );
}
SvgWorldClockTemplate.propTypes = {
};

export default SvgWorldClockTemplate